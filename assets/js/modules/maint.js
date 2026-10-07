import { createId, getData, saveData } from '../data.js';

function badge(status) { return `<span class="badge badge-${status === 'SCHEDULED' ? 'scheduled' : 'completed'}">${status === 'SCHEDULED' ? 'Programado' : 'Completado'}</span>`; }

export function renderMaintenance() {
  const { maintenance, machinery } = getData();
  const machine = (id) => machinery.find((entry) => entry.id === id)?.name || 'Equipo no disponible';
  return `<div class="view-header"><div><h2>Mantenimiento y averías</h2><p>Programa intervenciones preventivas y registra incidencias de la flota.</p></div><button class="btn btn-primary" data-action="open-breakdown-modal">+ Reportar avería</button></div><section class="panel"><div class="panel-head"><h3>Plan de mantenimiento preventivo</h3><span>Basado en horómetros</span></div><div class="table-wrap"><table><thead><tr><th>Orden</th><th>Equipo</th><th>Tipo</th><th>Fecha programada</th><th>Técnico</th><th>Costo</th><th>Estado</th></tr></thead><tbody>${maintenance.map((entry) => `<tr><td><b>${entry.id}</b></td><td class="equipment-name">${machine(entry.machineryId)}</td><td>${entry.type === 'BREAKDOWN' ? 'Avería reportada' : 'Preventivo'}</td><td>${entry.scheduledDate}</td><td>${entry.technician}</td><td>S/ ${entry.cost.toLocaleString()}</td><td>${badge(entry.status)}</td></tr>`).join('')}</tbody></table></div></section>`;
}

/** @param {HTMLFormElement} form */
export function reportBreakdown(form) {
  const values = new FormData(form); const data = getData(); const machineryId = String(values.get('machineryId'));
  data.maintenance.unshift({ id: createId('MT'), machineryId, type: 'BREAKDOWN', status: 'SCHEDULED', scheduledDate: String(values.get('scheduledDate')), technician: String(values.get('technician')).trim(), cost: Number(values.get('cost')) || 0, severity: String(values.get('severity')) });
  const machine = data.machinery.find((entry) => entry.id === machineryId); if (machine) machine.status = 'IN_MAINTENANCE';
  saveData(data);
}

export function breakdownModal() {
  const { machinery } = getData();
  return `<div class="modal-header"><div><h3>Reportar avería</h3><p>Se creará una orden de atención para el equipo seleccionado.</p></div><button class="icon-close" data-action="close-modal" aria-label="Cerrar">×</button></div><form id="breakdown-form"><div class="form-grid"><div class="field field-full"><label for="breakdown-machine">Maquinaria</label><select id="breakdown-machine" name="machineryId" required>${machinery.map((item) => `<option value="${item.id}">${item.name}</option>`).join('')}</select></div><div class="field"><label for="breakdown-date">Fecha de atención</label><input id="breakdown-date" name="scheduledDate" type="date" required /></div><div class="field"><label for="breakdown-severity">Severidad</label><select id="breakdown-severity" name="severity"><option>LOW</option><option>MEDIUM</option><option>HIGH</option><option>CRITICAL</option></select></div><div class="field"><label for="breakdown-tech">Técnico responsable</label><input id="breakdown-tech" name="technician" required placeholder="Nombre o taller" /></div><div class="field"><label for="breakdown-cost">Costo estimado (S/)</label><input id="breakdown-cost" name="cost" type="number" min="0" value="0" /></div></div><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit">Registrar avería</button></div></form>`;
}
