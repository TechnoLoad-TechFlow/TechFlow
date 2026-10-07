/** Lightweight in-browser repository for the TechnoLoad prototype. */
const STORAGE_KEY = 'technoload-prototype-data-v1';

const seed = {
  machinery: [
    { id: 'M-001', name: 'Excavadora CAT 320', type: 'Excavadora', brand: 'Caterpillar', model: '320 GC', hourlyRate: 185, status: 'AVAILABLE', location: 'Lima, Ate', currentHours: 1842 },
    { id: 'M-002', name: 'Retroexcavadora JCB', type: 'Retroexcavadora', brand: 'JCB', model: '3CX', hourlyRate: 145, status: 'RESERVED', location: 'Lima, Callao', currentHours: 964 },
    { id: 'M-003', name: 'Grúa XCMG', type: 'Grúa', brand: 'XCMG', model: 'QY25K', hourlyRate: 230, status: 'IN_MAINTENANCE', location: 'Lima, Lurín', currentHours: 3250 },
    { id: 'M-004', name: 'Cargador frontal Volvo', type: 'Cargador', brand: 'Volvo', model: 'L120H', hourlyRate: 195, status: 'RENTED', location: 'Lima, Chorrillos', currentHours: 2210 }
  ],
  rentals: [
    { id: 'R-1001', machineryId: 'M-002', contractorName: 'Constructora Andina S.A.C.', startDate: '2026-09-23', endDate: '2026-09-28', totalAmount: 5800, status: 'REQUESTED' },
    { id: 'R-1002', machineryId: 'M-004', contractorName: 'Obras del Pacífico', startDate: '2026-09-16', endDate: '2026-09-22', totalAmount: 7200, status: 'CONFIRMED' },
    { id: 'R-1003', machineryId: 'M-001', contractorName: 'Inversiones Norte', startDate: '2026-10-02', endDate: '2026-10-04', totalAmount: 4440, status: 'REQUESTED' }
  ],
  maintenance: [
    { id: 'MT-201', machineryId: 'M-003', type: 'PREVENTIVE', status: 'SCHEDULED', scheduledDate: '2026-09-21', technician: 'Taller Mecatrack', cost: 1450, severity: 'MEDIUM' },
    { id: 'MT-202', machineryId: 'M-001', type: 'PREVENTIVE', status: 'SCHEDULED', scheduledDate: '2026-09-29', technician: 'Juan Pérez', cost: 860, severity: 'LOW' }
  ],
  workedHours: [
    { id: 'WH-01', operationId: 'OP-01', workDate: '2026-09-18', hours: 8.5, status: 'VALIDATED' },
    { id: 'WH-02', operationId: 'OP-02', workDate: '2026-09-18', hours: 7, status: 'VALIDATED' },
    { id: 'WH-03', operationId: 'OP-02', workDate: '2026-09-17', hours: 9, status: 'PENDING' }
  ]
};

/** @returns {typeof seed} */
export function getData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seed);
  try { return JSON.parse(saved); } catch { return structuredClone(seed); }
}

/** @param {typeof seed} data */
export function saveData(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

/** Resets the demonstration data without touching any other browser storage. */
export function resetData() { localStorage.removeItem(STORAGE_KEY); }

/** @param {string} prefix @returns {string} */
export function createId(prefix) { return `${prefix}-${Date.now().toString().slice(-6)}`; }
