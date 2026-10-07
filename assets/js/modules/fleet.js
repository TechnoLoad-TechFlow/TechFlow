import { createId, getData, saveData } from '../data.js';

const labels = { AVAILABLE: 'Disponible', RESERVED: 'Reservado', RENTED: 'Alquilado', IN_MAINTENANCE: 'Mantenimiento' };
const icons = { Excavadora: '🚜', Retroexcavadora: '🚧', Grúa: '🏗️', Cargador: '🚚' };

export function statusBadge(status) {
  const css = { AVAILABLE: 'available', RESERVED: 'reserved', RENTED: 'rented', IN_MAINTENANCE: 'maintenance' }[status] || 'pending';
  return `<span class="badge badge-${css}">${labels[status] || status}</span>`;
}

export function renderFleet(filters = {}) {
  const { machinery } = getData();
  const term = (filters.term || '').toLowerCase();
  const type = filters.type || '';
  const items = machinery.filter((item) => !type || item.type === type)
    .filter((item) => `${item.name} ${item.brand} ${item.model}`.toLowerCase().includes(term));
  const types = [...new Set(machinery.map((item) => item.type))];
  return `
    <div class="view-header"><div><h2>Inventario de flota</h2><p>Consulta, filtra y administra la maquinaria disponible.</p></div><button class="btn btn-primary" data-action="open-machinery-modal">+ Nueva maquinaria</button></div>
    <div class="toolbar"><input class="search-input" id="fleet-search" value="${filters.term || ''}" placeholder="Buscar por equipo, marca o modelo" aria-label="Buscar maquinaria"><select class="filter-select" id="fleet-type"><option value="">Todas las categorías</option>${types.map((entry) => `<option ${entry === type ? 'selected' : ''}>${entry}</option>`).join('')}</select></div>
    <div class="asset-grid">${items.length ? items.map((item) => `<article class="asset-card"><div class="asset-image"><span>${icons[item.type] || '🚜'}</span>${statusBadge(item.status)}</div><div class="asset-body"><h3>${item.name}</h3><div class="asset-meta">${item.brand} · ${item.model}</div><div class="asset-foot"><span>S/ ${item.hourlyRate}/hora</span><span>⌛ ${item.currentHours.toLocaleString()} h</span></div><div class="asset-meta" style="margin-top:12px">⌖ ${item.location}</div></div></article>`).join('') : '<div class="empty">No se encontraron equipos con esos filtros.</div>'}</div>`;
}

/** @param {HTMLFormElement} form */
export function addMachinery(form) {
  const formData = new FormData(form);
  const data = getData();
  data.machinery.unshift({
    id: createId('M'), name: String(formData.get('name')).trim(), type: String(formData.get('type')), brand: String(formData.get('brand')).trim(),
    model: String(formData.get('model')).trim(), hourlyRate: Number(formData.get('hourlyRate')), status: 'AVAILABLE',
    location: String(formData.get('location')).trim(), currentHours: Number(formData.get('currentHours')) || 0
  });
  saveData(data);
}

export const machineryModal = `
  <div class="modal-header"><div><h3>Registrar nueva maquinaria</h3><p>Completa la información principal del activo.</p></div><button class="icon-close" data-action="close-modal" aria-label="Cerrar">×</button></div>
  <form id="machinery-form"><div class="form-grid">
    <div class="field field-full"><label for="machine-name">Nombre del equipo</label><input id="machine-name" name="name" required placeholder="Ej. Excavadora hidráulica CAT 336" /></div>
    <div class="field"><label for="machine-type">Categoría</label><select id="machine-type" name="type" required><option>Excavadora</option><option>Retroexcavadora</option><option>Grúa</option><option>Cargador</option><option>Otro</option></select></div>
    <div class="field"><label for="machine-brand">Marca</label><input id="machine-brand" name="brand" required placeholder="Caterpillar" /></div>
    <div class="field"><label for="machine-model">Modelo</label><input id="machine-model" name="model" required placeholder="336 GC" /></div>
    <div class="field"><label for="machine-rate">Tarifa por hora (S/)</label><input id="machine-rate" name="hourlyRate" type="number" min="1" required placeholder="185" /></div>
    <div class="field"><label for="machine-hours">Horómetro actual</label><input id="machine-hours" name="currentHours" type="number" min="0" value="0" /></div>
    <div class="field"><label for="machine-location">Ubicación</label><input id="machine-location" name="location" required placeholder="Lima, Ate" /></div>
  </div><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit">Registrar maquinaria</button></div></form>`;
