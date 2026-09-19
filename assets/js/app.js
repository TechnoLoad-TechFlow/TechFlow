import { getData } from './data.js';
import { addMachinery, machineryModal, renderFleet } from './modules/fleet.js';
import { renderRentals, updateRentalStatus } from './modules/rental.js';
import { breakdownModal, renderMaintenance, reportBreakdown } from './modules/maint.js';

const root = document.querySelector('#app');
const modalRoot = document.querySelector('#modal-root');
const toastRoot = document.querySelector('#toast-root');

const menu = [
  ['dashboard', '▦', 'Dashboard'],
  ['fleet', '🚜', 'Flota'],
  ['rentals', '▣', 'Reservas'],
  ['maintenance', '⚒', 'Mantenimiento']
];
let activeView = 'landing';
let fleetFilters = { term: '', type: '' };

function appShell(content) {
  const title = { dashboard: 'Dashboard operativo', fleet: 'Inventario de flota', rentals: 'Solicitudes y reservas', maintenance: 'Mantenimiento y averías' }[activeView] || 'TechnoLoad';
  return `<div class="app-shell"><aside class="sidebar"><div class="brand"><span class="brand-mark">T</span>TechnoLoad</div><nav class="nav-menu">${menu.map(([key, icon, label]) => `<button class="nav-item ${key === activeView ? 'active' : ''}" data-view="${key}"><span>${icon}</span>${label}</button>`).join('')}</nav><div class="sidebar-bottom">Gestión inteligente de flotas<br>v1.0 · Prototipo MVP</div></aside><main class="main"><header class="topbar"><span class="page-title">${title}</span><div class="topbar-actions"><button class="notification" title="Notificaciones">🔔</button><div class="profile"><div class="avatar">FA</div><span><b>Flor Álvarez</b><br><small>Fleet Administrator</small></span></div></div></header><section class="content">${content}</section></main></div>`;
}

function renderLanding() {
  root.innerHTML = `<div class="landing"><nav class="landing-nav"><div class="brand"><span class="brand-mark">T</span>TechnoLoad</div><div class="nav-links"><span>Módulos</span><span>Beneficios</span><span>Precios</span></div><button class="btn btn-secondary" data-action="enter-platform">Ingresar</button></nav><main><section class="hero"><div><span class="eyebrow">SaaS para operaciones de campo</span><h1>Controla tu flota antes de que una parada detenga tu operación.</h1><p>Centraliza maquinaria, horómetros, mantenimiento preventivo, alquileres y operaciones logísticas en una plataforma diseñada para equipos que no pueden detenerse.</p><div class="hero-actions"><button class="btn btn-primary" data-action="enter-platform">Ingresar a la plataforma</button><button class="btn btn-secondary" data-action="request-demo">Solicitar Demo</button></div></div><div class="hero-panel"><div class="panel-top"><b>Panel operativo</b><span>Actualizado ahora</span></div><div class="fleet-illustration"><div class="vehicle"><small>Disponibles</small><span class="vehicle-icon">🚜</span><b>12 equipos</b></div><div class="vehicle"><small>En ruta</small><span class="vehicle-icon">🚚</span><b>07 servicios</b></div><div class="vehicle"><small>Alertas</small><span class="vehicle-icon">⚠️</span><b>03 pendientes</b></div></div><div class="mini-stat"><span>Horas operativas hoy</span><b>284.5 h</b></div></div></section><section class="landing-features"><div class="section-inner"><div class="section-title"><span class="eyebrow">Todo bajo control</span><h2>La operación, conectada de principio a fin.</h2></div><div class="feature-grid"><article class="feature"><span class="feature-icon">⌛</span><b>Mantenimiento por horómetro</b><p>Anticipa intervenciones preventivas y reduce paradas inesperadas.</p></article><article class="feature"><span class="feature-icon">▣</span><b>Reservas sin conflictos</b><p>Aprueba solicitudes de alquiler con una vista clara de disponibilidad.</p></article><article class="feature"><span class="feature-icon">⌖</span><b>Operaciones trazables</b><p>Registra horas trabajadas, servicios y actividad de cada unidad.</p></article></div></div></section></main></div>`;
}

function renderDashboard() {
  const { machinery, maintenance, workedHours, rentals } = getData();
  const operatingHours = workedHours.reduce((sum, entry) => sum + entry.hours, 0);
  const recent = rentals.slice(0, 3);
  const machine = (id) => machinery.find((item) => item.id === id)?.name || 'Equipo';
  root.innerHTML = appShell(`<div class="view-header"><div><h2>Buenos días, Flor</h2><p>Esta es la situación actual de la operación.</p></div><button class="btn btn-primary" data-view="fleet">Ver inventario</button></div><div class="kpi-grid"><article class="kpi-card"><div class="kpi-icon">🚜</div><small>Total equipos</small><strong>${machinery.length}</strong><span>● Inventario actualizado</span></article><article class="kpi-card"><div class="kpi-icon">⌛</div><small>Horas operativas</small><strong>${operatingHours.toFixed(1)} h</strong><span>● Registros validados</span></article><article class="kpi-card"><div class="kpi-icon">⚒</div><small>Mantenimientos pendientes</small><strong>${maintenance.filter((item) => item.status === 'SCHEDULED').length}</strong><span style="color:#a95800">● Atención programada</span></article></div><section class="panel"><div class="panel-head"><h3>Actividad reciente</h3><button class="btn btn-secondary btn-small" data-view="rentals">Ver solicitudes</button></div><div class="table-wrap"><table><thead><tr><th>Evento</th><th>Equipo</th><th>Contratista</th><th>Periodo</th><th>Estado</th></tr></thead><tbody>${recent.map((entry) => `<tr><td>Solicitud ${entry.id}</td><td class="equipment-name">${machine(entry.machineryId)}</td><td>${entry.contractorName}</td><td>${entry.startDate}</td><td><span class="badge badge-${entry.status === 'REQUESTED' ? 'pending' : 'approved'}">${entry.status === 'REQUESTED' ? 'Pendiente' : 'Confirmada'}</span></td></tr>`).join('')}</tbody></table></div></section>`);
}

function renderCurrentView() {
  if (activeView === 'landing') return renderLanding();
  if (activeView === 'dashboard') return renderDashboard();
  if (activeView === 'fleet') root.innerHTML = appShell(renderFleet(fleetFilters));
  if (activeView === 'rentals') root.innerHTML = appShell(renderRentals());
  if (activeView === 'maintenance') root.innerHTML = appShell(renderMaintenance());
}

function openModal(content) { modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-label="Formulario" onclick="event.stopPropagation()">${content}</div></div>`; }
function closeModal() { modalRoot.innerHTML = ''; }
function toast(message, type = 'success') { const node = document.createElement('div'); node.className = `toast ${type}`; node.textContent = message; toastRoot.append(node); window.setTimeout(() => node.remove(), 3400); }

document.addEventListener('click', (event) => {
  const target = event.target.closest('button, [data-action]'); if (!target) return;
  if (target.dataset.view) { activeView = target.dataset.view; renderCurrentView(); return; }
  const action = target.dataset.action;
  if (action === 'enter-platform') { activeView = 'dashboard'; renderCurrentView(); }
  if (action === 'request-demo') toast('Solicitud registrada. Un asesor se comunicará contigo.');
  if (action === 'open-machinery-modal') openModal(machineryModal);
  if (action === 'open-breakdown-modal') openModal(breakdownModal());
  if (action === 'close-modal') closeModal();
  if (target.dataset.rental) {
    const status = target.dataset.rental === 'approve' ? 'CONFIRMED' : 'CANCELLED';
    if (updateRentalStatus(target.dataset.id, status)) { toast(status === 'CONFIRMED' ? 'Solicitud aprobada y equipo reservado.' : 'Solicitud rechazada.'); renderCurrentView(); }
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'fleet-search') { fleetFilters.term = event.target.value; root.querySelector('.asset-grid').outerHTML = new DOMParser().parseFromString(renderFleet(fleetFilters), 'text/html').querySelector('.asset-grid').outerHTML; }
});
document.addEventListener('change', (event) => {
  if (event.target.id === 'fleet-type') { fleetFilters.type = event.target.value; renderCurrentView(); }
});
document.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target.id === 'machinery-form') { addMachinery(event.target); closeModal(); toast('Maquinaria registrada correctamente.'); renderCurrentView(); }
  if (event.target.id === 'breakdown-form') { reportBreakdown(event.target); closeModal(); toast('Avería registrada; se generó una orden de mantenimiento.'); renderCurrentView(); }
});

renderCurrentView();
