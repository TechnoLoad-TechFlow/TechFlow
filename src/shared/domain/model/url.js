import { StringValidator } from './string-validator.js';

/** Objeto de Valor para una URL HTTP(S) absoluta. */
export class Url {
  #value;

  /** @param {string} value */
  constructor(value) {
    const candidate = StringValidator.required(value, 'La URL');
    try {
      const parsed = new URL(candidate);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new TypeError();
      this.#value = parsed.toString();
    } catch {
      throw new TypeError('La URL no tiene un formato HTTP(S) válido.');
    }
    Object.freeze(this);
  }

  /** @returns {string} */
  get value() { return this.#value; }
  /** @param {Url} other @returns {boolean} */
  equals(other) { return other instanceof Url && other.value === this.#value; }
  /** @returns {string} */
  toString() { return this.#value; }
}
