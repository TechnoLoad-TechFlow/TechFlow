/** Objeto de Valor inmutable para una fecha ISO 8601. */
export class DateTime {
  #value;

  /** @param {string|Date} value */
  constructor(value) {
    const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
    if (Number.isNaN(date.getTime())) throw new TypeError('La fecha no es válida.');
    this.#value = date.toISOString();
    Object.freeze(this);
  }

  /** @returns {string} */
  get value() { return this.#value; }
  /** @returns {Date} */
  toDate() { return new Date(this.#value); }
  /** @param {DateTime} other @returns {boolean} */
  isBefore(other) {
    if (!(other instanceof DateTime)) throw new TypeError('El valor comparado debe ser DateTime.');
    return this.toDate().getTime() < other.toDate().getTime();
  }
  /** @returns {string} */
  toString() { return this.#value; }
}
