import { getData, saveData } from '../data.js';
import { statusBadge } from './fleet.js';

const rentalLabels = { REQUESTED: 'Pendiente', CONFIRMED: 'Aprobada', CANCELLED: 'Rechazada' };
function badge(status) {
  const css = { REQUESTED: 'pending', CONFIRMED: 'approved', CANCELLED: 'rejected' }[status] || 'pending';
  return `<span class="badge badge-${css}">${rentalLabels[status] || status}</span>`;
}

export function renderRentals() {
  const { rentals, machinery } = getData();
  const machine = (id) => machinery.find((entry) => entry.id === id)?.name || 'Equipo no disponible';
  return `<div class="view-header"><div><h2>Solicitudes y reservas</h2><p>Revisa las solicitudes de alquiler y confirma la disponibilidad.</p></div></div><section class="panel"><div class="panel-head"><h3>Solicitudes activas</h3><span>${rentals.filter((entry) => entry.status === 'REQUESTED').length} pendientes</span></div><div class="table-wrap"><table><thead><tr><th>Solicitud</th><th>Contratista</th><th>Equipo</th><th>Periodo</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${rentals.map((entry) => `<tr><td><b>${entry.id}</b></td><td>${entry.contractorName}</td><td class="equipment-name">${machine(entry.machineryId)}</td><td>${entry.startDate} — ${entry.endDate}</td><td>S/ ${entry.totalAmount.toLocaleString()}</td><td>${badge(entry.status)}</td><td>${entry.status === 'REQUESTED' ? `<button class="btn btn-primary btn-small" data-rental="approve" data-id="${entry.id}">Aprobar</button> <button class="btn btn-danger btn-small" data-rental="reject" data-id="${entry.id}">Rechazar</button>` : '—'}</td></tr>`).join('')}</tbody></table></div></section>`;
}

/** @param {string} id @param {'CONFIRMED'|'CANCELLED'} status */
export function updateRentalStatus(id, status) {
  const data = getData();
  const rental = data.rentals.find((entry) => entry.id === id);
  if (!rental || rental.status !== 'REQUESTED') return false;
  rental.status = status;
  const machine = data.machinery.find((entry) => entry.id === rental.machineryId);
  if (machine && status === 'CONFIRMED') machine.status = 'RESERVED';
  saveData(data);
  return true;
}
