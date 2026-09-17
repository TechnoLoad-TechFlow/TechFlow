# Capítulo IV: Product Design

## 4.1. Style Guidelines

### 4.1.1. General Style Guidelines

El sistema visual de TechnoLoad se organiza en Figma en **Foundations** (tokens) y **Components** (Component Sets). Los tokens siguen `category/name/scale`, por ejemplo `color/primary/500`; los componentes siguen `component/variant/state`. En Vue, los tokens se consumen mediante tema Material de PrimeVue y variables CSS, evitando valores visuales aislados.

La tipografía institucional es Inter, con respaldo `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

| Token | Tamaño | Interlineado | Peso | Uso |
|---|---:|---:|---:|---|
| Display | 48 px / 3 rem | 56 px | 700 | Hero |
| H1 | 32 px / 2 rem | 40 px | 700 | Pantalla |
| H2 | 24 px / 1.5 rem | 32 px | 700 | Sección |
| H3 | 20 px / 1.25 rem | 28 px | 600 | Card |
| Body | 16 px / 1 rem | 24 px | 400 | Contenido |
| Small | 14 px / .875 rem | 20 px | 400 | Tabla |
| Caption | 12 px / .75 rem | 16 px | 500 | Etiqueta |

| Token | HEX | Aplicación |
|---|---|---|
| Primary 700 / 500 / 100 | #0F3D5E / #1976D2 / #E3F2FD | Marca, acción, selección |
| Secondary 500 | #FF8F00 | CTA secundario |
| Neutral 900 / 700 / 300 / 100 | #1F2933 / #52606D / #CBD2D9 / #F5F7FA | Texto, borde, fondo |
| Surface 0 | #FFFFFF | Cards y formularios |
| Success / Warning / Danger / Info | #2E7D32 / #ED6C02 / #D32F2F / #0288D1 | Estado semántico |

La escala de espaciado es 4, 8, 12, 16, 20, 24, 32, 40 y 48 px. Los contenedores usan 24 px en desktop, 20 px en tablet y 16 px en móvil; el radio estándar es 8 px y las cards aplican sombra `0 2px 8px rgba(15,61,94,.12)`.

| Diseño Figma | PrimeVue | Variantes y estados |
|---|---|---|
| Button | pv-button | Primary, secondary, text, danger; default, hover, focus, disabled, loading |
| Input | pv-input-text | Default, focus, error, disabled |
| Card | pv-card | Default, hover, loading |
| Tabla | pv-data-table | Filtros, vacío, paginación, error |
| Estado | pv-tag | Success, warning, danger, info |
| Feedback | pv-toast, pv-skeleton | Éxito, error, carga |

### 4.1.2. Web Style Guidelines

| Breakpoint | Frame | Columnas | Margen | Gutter |
|---|---:|---:|---:|---:|
| Desktop | 1440 px | 12 | 80 px | 24 px |
| Tablet | 768 px | 8 | 32 px | 16 px |
| Mobile | 375 px | 4 | 16 px | 16 px |

Figma aplica Layout Grid con columnas Stretch, Auto-layout y constraints. El AppShell usa topbar de 64 px, sidebar de 264 px y `pv-drawer` en pantallas reducidas. PrimeFlex implementa `col-12`, `md:col-6`, `lg:col-4`, `flex` y `gap-3`.

## 4.2. Information Architecture

### 4.2.1. Organization Systems

| Nivel | Contenido |
|---|---|
| 0 | Landing, acceso, recuperación |
| 1 | Dashboard, Activos, Mantenimientos, Operaciones, Alertas |
| 2 | Listado, detalle, creación, edición, historial |
| 3 | Registrar lectura, programar, cambiar estado, asignar, exportar |

### 4.2.2. Labeling Systems

| Clave | Español | English |
|---|---|---|
| nav.assets | Activos | Assets |
| nav.maintenance | Mantenimientos | Maintenance |
| nav.operations | Operaciones | Operations |
| action.save | Guardar | Save |
| status.available | Disponible | Available |
| status.inMaintenance | En mantenimiento | In maintenance |

Las claves se gestionan con `vue-i18n` en modo `legacy: false`; los componentes no contienen textos de negocio codificados.

### 4.2.3. SEO Tags and Meta Tags

~~~html
<title>TechnoLoad | Gestión inteligente de flotas</title>
<meta name="description" content="Centraliza mantenimiento, disponibilidad y operaciones de flota." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://technoload.pe/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_PE" />
<meta property="og:title" content="TechnoLoad | Gestión inteligente de flotas" />
<meta property="og:description" content="Mantenimiento preventivo y disponibilidad en una plataforma." />
<meta property="og:image" content="https://technoload.pe/og-cover.png" />
<meta name="twitter:card" content="summary_large_image" />
~~~

### 4.2.4. Searching Systems

La búsqueda aplica debounce de 300 ms, filtros combinables por estado, tipo, prioridad y fecha, paginación de servidor y persistencia de filtros relevantes en la URL. Un estado vacío explica la condición, permite limpiar filtros y muestra un CTA sujeto a permisos.

### 4.2.5. Navigation Systems

La landing usa navbar con producto, beneficios, idioma y CTA. La aplicación autenticada usa sidebar/drawer con ruta activa, perfil y cierre de sesión; los breadcrumbs muestran jerarquía y la paginación inicia en diez registros.

## 4.3. Landing Page UI Design

### 4.3.1. Landing Page Wireframe

El frame desktop 1440 px contiene navbar, hero de dos columnas, problema/beneficios, módulos Activos-Mantenimiento-Operaciones-Alertas, proceso de tres pasos, prueba social validada o planes, CTA y footer.

> **Prompt Figma AI:** Diseñar wireframe responsive para TechnoLoad, SaaS B2B peruano de maquinaria pesada y transporte. Usar frame 1440, grid 12 columnas, margen 80, gutter 24, Auto-layout y escala 8 px. Incluir navbar, hero, beneficios, módulos, proceso, CTA y footer; usar placeholders sin fotografías ni colores finales.

### 4.3.2. Landing Page Mock-up

El hero usa Primary 700, H1 blanco y CTA Secondary 500: **“Controla tu flota antes de que una parada detenga tu operación.”** Los CTA son “Solicitar una demostración” y “Conocer los módulos”. Cards blancas incorporan PrimeIcon, título y texto; las capturas emplean información simulada consistente y no testimonios ficticios.

## 4.4. Web Applications UX/UI Design

### 4.4.1. Web Applications Wireframes

| Vista | Estructura |
|---|---|
| Dashboard | KPIs, uso, mantenimiento próximo, actividad |
| Activos | CTA, búsqueda, filtros, tabla, paginación |
| Detalle | Breadcrumb, resumen, tag, tabs |
| Registrar lectura | Activo, medición, fecha, observación, validación |
| Mantenimiento | Filtros, prioridad, programación |
| Operaciones | Estado, unidad y drawer de asignación |

### 4.4.2. Web Applications Wireflow Diagrams

~~~mermaid
flowchart LR
Dashboard-->Activos-->Detalle
Detalle-->Lecturas-->RegistrarLectura-->Validar-->Toast
Mantenimientos-->Programar-->OrdenCreada
Operaciones-->AsignarUnidad-->Confirmacion
~~~

### 4.4.3. Web Applications Mock-ups

Las pantallas de alta fidelidad emplean Auto-layout y Component Sets. Carga usa skeleton; vacío muestra explicación y CTA; éxito muestra toast y actualiza lista; el error es recuperable y conserva entradas; controles deshabilitados explican su restricción mediante tooltip.

### 4.4.4. Web Applications User Flow Diagrams

~~~mermaid
flowchart TD
Login-->Dashboard-->Activos-->Activo-->Lecturas-->Registrar
Registrar-->Validacion{¿Válido?}
Validacion--No-->Corregir-->Registrar
Validacion--Sí-->Guardar-->HistorialActualizado
~~~

Programar mantenimiento: Sidebar → Mantenimientos → Programar → activo/tipo → fecha/prioridad → Guardar → orden creada. Asignar unidad: Operaciones → seleccionar operación → filtrar disponibles → unidad → confirmar → operación asignada.

## 4.5. Web Applications Prototyping

| Interacción | Trigger | Resultado |
|---|---|---|
| CTA demostración | On Click | Navigate; Smart Animate 300 ms |
| Fila activo | On Click | Detalle; Smart Animate 250 ms |
| Registrar lectura | On Click | Overlay modal; Dissolve 200 ms |
| Filtros | On Click | Drawer; Move In 250 ms |
| Ayuda | On Hover | Tooltip; Dissolve 150 ms |
| Validación | On Click | Variante Error; 150 ms |

> **Prompt Figma AI:** Crear prototipo TechnoLoad con Dashboard, Activos, Detalle, modal Registrar lectura, Mantenimientos y drawer Asignar unidad. Aplicar Auto-layout, componentes con variantes, #0F3D5E, #1976D2 y #FF8F00. Incluir loading, vacío, error y éxito; conectar flujos con Smart Animate y overlays.

## 4.6. Domain-Driven Software Architecture

### 4.6.1. Design-Level EventStorming

| Contexto | Commands | Agregados/entidades | Value Objects | Eventos | Read Models |
|---|---|---|---|---|---|
| Fleet/Asset | RegisterAsset, RecordUsageReading, ChangeAssetStatus | Asset, UsageReading | AssetId, AssetCode, UsageValue, AssetStatus | AssetRegistered, UsageReadingRecorded, AssetStatusChanged | AssetListItem, AssetDetail |
| Maintenance | ScheduleMaintenance, StartMaintenance, CompleteMaintenance | MaintenanceOrder, MaintenanceTask | OrderId, Type, ScheduledDate, Priority | MaintenanceScheduled, Started, Completed, Overdue | MaintenanceBoard |
| Operations | CreateOperation, AssignAsset, StartOperation, CompleteOperation | Operation, Assignment | OperationId, Status, DateRange | OperationCreated, AssetAssigned, Started, Completed | AssignmentCalendar |

Un activo se asigna solo si está Disponible; una lectura no puede ser negativa ni menor a la anterior; una orden solo se completa desde En progreso.

### 4.6.2. Software Architecture Context Diagram

~~~plantuml
@startuml
!include <C4/C4_Context>
Person(admin,"Administrador")
Person(coordinator,"Coordinador")
System(app,"TechnoLoad","Gestión de flota")
System_Ext(iot,"Telematics API","Lecturas")
System_Ext(notification,"Notification API","Alertas")
Rel(admin,app,"Administra","HTTPS")
Rel(coordinator,app,"Asigna","HTTPS")
Rel(iot,app,"Envía lecturas","Webhook")
Rel(app,notification,"Notifica","HTTPS")
@enduml
~~~

### 4.6.3. Software Architecture Container Diagrams

~~~plantuml
@startuml
!include <C4/C4_Container>
Person(user,"Usuario")
System_Boundary(s,"TechnoLoad") {
 Container(spa,"SPA","Vue 3/Vite/PrimeVue","UI e i18n")
 Container(gateway,"API Gateway","HTTPS JSON","Seguridad y rutas")
 Container(fleet,"Fleet Service","Servicio","Activos")
 Container(maintenance,"Maintenance Service","Servicio","Órdenes")
 Container(operations,"Operations Service","Servicio","Operaciones")
 ContainerDb(db,"PostgreSQL","Database","Persistencia")
}
Rel(user,spa,"Usa")
Rel(spa,gateway,"Axios JSON")
Rel(gateway,fleet,"Enruta")
Rel(gateway,maintenance,"Enruta")
Rel(gateway,operations,"Enruta")
Rel(fleet,db,"SQL")
Rel(maintenance,db,"SQL")
Rel(operations,db,"SQL")
@enduml
~~~

### 4.6.4. Software Architecture Components Diagrams

~~~mermaid
flowchart TB
UI[Presentation: Vue/PrimeVue]-->Application[Application: Store/Casos de uso]
Application-->Infrastructure[Infrastructure: API/Assemblers]
Infrastructure-->Gateway[API Gateway]
Application-->Domain[Domain: Entidades/Reglas]
Domain-->Shared[Shared Kernel: VO/Validadores]
~~~

## 4.7. Software Object-Oriented Design

### 4.7.1. Class Diagrams

~~~plantuml
@startuml
class AssetEntity { -id:String\n-code:String\n-status:AssetStatus\n+isAvailable():Boolean }
class MaintenanceOrderEntity { -assetId:String\n-status:String\n+isOpen():Boolean }
class Url <<Value Object>>
class DateTime <<Value Object>>
class AssetAssembler { +toDomain(dto):AssetEntity }
class FleetStore { +loadAssets()\n+selectAsset() }
class AssetList <<Vue Component>>
class AssetSummary <<Vue Component>>
AssetAssembler --> AssetEntity
FleetStore --> AssetAssembler
AssetList --> FleetStore
AssetSummary --> FleetStore
MaintenanceOrderEntity --> DateTime
@enduml
~~~

Las entidades copian, validan y congelan el estado con `Object.freeze`; las modificaciones generan nuevas instancias. Los assemblers evitan que el dominio dependa de DTOs.

## 4.8. Database Design

### 4.8.1. Database Diagrams

~~~mermaid
erDiagram
ORGANIZATIONS ||--o{ ASSETS : owns
ASSETS ||--o{ USAGE_READINGS : records
ASSETS ||--o{ MAINTENANCE_ORDERS : receives
MAINTENANCE_ORDERS ||--o{ MAINTENANCE_TASKS : includes
OPERATIONS ||--o{ OPERATION_ASSIGNMENTS : contains
ASSETS ||--o{ OPERATION_ASSIGNMENTS : assigned
~~~

### 4.8.2. Script DDL

~~~sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE organizations(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),name VARCHAR(120) NOT NULL,created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE assets(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,code VARCHAR(40) NOT NULL,name VARCHAR(120) NOT NULL,asset_type VARCHAR(30) NOT NULL CHECK(asset_type IN('MACHINERY','VEHICLE')),status VARCHAR(30) NOT NULL CHECK(status IN('AVAILABLE','IN_MAINTENANCE','IN_OPERATION','OUT_OF_SERVICE')),current_usage NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK(current_usage>=0),created_at TIMESTAMPTZ NOT NULL DEFAULT now(),UNIQUE(organization_id,code));
CREATE TABLE usage_readings(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE CASCADE,reading_value NUMERIC(14,2) NOT NULL CHECK(reading_value>=0),recorded_at TIMESTAMPTZ NOT NULL,notes VARCHAR(500));
CREATE TABLE maintenance_orders(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,maintenance_type VARCHAR(40) NOT NULL,priority VARCHAR(20) NOT NULL CHECK(priority IN('LOW','MEDIUM','HIGH','CRITICAL')),status VARCHAR(30) NOT NULL CHECK(status IN('SCHEDULED','IN_PROGRESS','COMPLETED','CANCELLED')),scheduled_at TIMESTAMPTZ NOT NULL,completed_at TIMESTAMPTZ);
CREATE TABLE maintenance_tasks(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),maintenance_order_id UUID NOT NULL REFERENCES maintenance_orders(id) ON DELETE CASCADE,description VARCHAR(250) NOT NULL,is_completed BOOLEAN NOT NULL DEFAULT false);
CREATE TABLE operations(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,code VARCHAR(40) NOT NULL,status VARCHAR(30) NOT NULL CHECK(status IN('DRAFT','PLANNED','IN_PROGRESS','COMPLETED','CANCELLED')),starts_at TIMESTAMPTZ NOT NULL,ends_at TIMESTAMPTZ,UNIQUE(organization_id,code),CHECK(ends_at IS NULL OR ends_at>=starts_at));
CREATE TABLE operation_assignments(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),operation_id UUID NOT NULL REFERENCES operations(id) ON DELETE CASCADE,asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),released_at TIMESTAMPTZ,UNIQUE(operation_id,asset_id));
CREATE INDEX idx_assets_status ON assets(organization_id,status);
CREATE INDEX idx_readings_asset_date ON usage_readings(asset_id,recorded_at DESC);
CREATE INDEX idx_orders_asset_status ON maintenance_orders(asset_id,status);
CREATE INDEX idx_assignments_asset ON operation_assignments(asset_id);
~~~

Los UUID soportan generación distribuida; CHECK y FK conservan invariantes, y los índices responden a las consultas de listado y seguimiento. Las transiciones críticas se ejecutan en transacción; una solución productiva publica eventos mediante outbox.
