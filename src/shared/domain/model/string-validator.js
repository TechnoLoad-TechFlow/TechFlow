/** Validaciones deterministas para valores de texto. */
export class StringValidator {
  /** @param {unknown} value @param {string} fieldName @returns {string} */
  static required(value, fieldName) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new TypeError(`${fieldName} es obligatorio.`);
    }
    return value.trim();
  }

  /** @param {string} value @param {number} maximumLength @param {string} fieldName @returns {string} */
  static maxLength(value, maximumLength, fieldName) {
    if (value.length > maximumLength) {
      throw new RangeError(`${fieldName} no puede superar ${maximumLength} caracteres.`);
    }
    return value;
  }
}
