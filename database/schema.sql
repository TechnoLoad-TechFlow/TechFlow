CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    legal_name VARCHAR(160) NOT NULL,
    tax_id VARCHAR(20) NOT NULL UNIQUE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('ACTIVE', 'SUSPENDED', 'INACTIVE')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE user_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,
    email VARCHAR(254) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DISABLED')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_account_id UUID NOT NULL UNIQUE REFERENCES user_accounts(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(30),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_name VARCHAR(50) NOT NULL UNIQUE
        CHECK (role_name IN ('CONTRACTOR', 'FLEET_OWNER', 'FLEET_ADMINISTRATOR', 'TECHNICIAN', 'OPERATIONS_COORDINATOR', 'SYSTEM_ADMINISTRATOR'))
);

CREATE TABLE user_account_roles (
    user_account_id UUID NOT NULL REFERENCES user_accounts(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE RESTRICT,
    PRIMARY KEY (user_account_id, role_id)
);

CREATE TABLE assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,
    asset_code VARCHAR(40) NOT NULL UNIQUE,
    asset_name VARCHAR(160) NOT NULL,
    asset_type VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('AVAILABLE', 'RESERVED', 'IN_MAINTENANCE', 'ASSIGNED', 'OUT_OF_SERVICE', 'INACTIVE')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE meter_readings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    reading_value NUMERIC(14,2) NOT NULL CHECK (reading_value >= 0),
    meter_unit VARCHAR(12) NOT NULL CHECK (meter_unit IN ('KILOMETERS', 'HOURS')),
    recorded_by_user_id UUID REFERENCES user_accounts(id) ON DELETE SET NULL,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE telemetry_readings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    latitude NUMERIC(9,6) NOT NULL CHECK (latitude BETWEEN -90 AND 90),
    longitude NUMERIC(9,6) NOT NULL CHECK (longitude BETWEEN -180 AND 180),
    source VARCHAR(40) NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE maintenance_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    threshold_value NUMERIC(14,2) NOT NULL CHECK (threshold_value > 0),
    meter_unit VARCHAR(12) NOT NULL CHECK (meter_unit IN ('KILOMETERS', 'HOURS')),
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE maintenance_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    maintenance_type VARCHAR(20) NOT NULL CHECK (maintenance_type IN ('PREVENTIVE', 'CORRECTIVE', 'INSPECTION')),
    priority VARCHAR(20) NOT NULL CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')),
    scheduled_at TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ,
    cost NUMERIC(14,2) CHECK (cost IS NULL OR cost >= 0),
    CHECK (completed_at IS NULL OR completed_at >= scheduled_at)
);

CREATE TABLE rental_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('REQUESTED', 'APPROVED', 'CONFIRMED', 'CANCELLED', 'COMPLETED')),
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CHECK (end_at > start_at)
);

CREATE TABLE rental_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rental_request_id UUID NOT NULL REFERENCES rental_requests(id) ON DELETE CASCADE,
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    daily_rate NUMERIC(14,2) NOT NULL CHECK (daily_rate >= 0),
    UNIQUE (rental_request_id, asset_id)
);

CREATE TABLE service_operations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rental_request_id UUID NOT NULL UNIQUE REFERENCES rental_requests(id) ON DELETE RESTRICT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    CHECK (completed_at IS NULL OR started_at IS NULL OR completed_at >= started_at)
);

CREATE TABLE unit_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_operation_id UUID NOT NULL REFERENCES service_operations(id) ON DELETE CASCADE,
    asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
    assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    released_at TIMESTAMPTZ,
    CHECK (released_at IS NULL OR released_at >= assigned_at)
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,
    plan_name VARCHAR(80) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'ACTIVE', 'PAST_DUE', 'CANCELLED', 'EXPIRED')),
    starts_at TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    CHECK (expires_at > starts_at)
);

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subscription_id UUID NOT NULL REFERENCES subscriptions(id) ON DELETE RESTRICT,
    amount NUMERIC(14,2) NOT NULL CHECK (amount > 0),
    currency_code CHAR(3) NOT NULL DEFAULT 'PEN',
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'CONFIRMED', 'FAILED', 'REFUNDED')),
    provider_reference VARCHAR(120) UNIQUE,
    paid_at TIMESTAMPTZ
);

CREATE TABLE electronic_invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_operation_id UUID NOT NULL UNIQUE REFERENCES service_operations(id) ON DELETE RESTRICT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'SUBMITTED', 'ACCEPTED', 'REJECTED')),
    sunat_reference VARCHAR(120) UNIQUE,
    issued_at TIMESTAMPTZ
);

CREATE INDEX idx_assets_organization_status ON assets(organization_id, status);
CREATE INDEX idx_meter_readings_asset_recorded_at ON meter_readings(asset_id, recorded_at DESC);
CREATE INDEX idx_telemetry_readings_asset_recorded_at ON telemetry_readings(asset_id, recorded_at DESC);
CREATE INDEX idx_maintenance_orders_asset_status ON maintenance_orders(asset_id, status);
CREATE INDEX idx_rental_requests_organization_status ON rental_requests(organization_id, status);
CREATE INDEX idx_unit_assignments_operation ON unit_assignments(service_operation_id);
CREATE INDEX idx_subscriptions_organization_status ON subscriptions(organization_id, status);
