import axios from 'axios';

/** @typedef {{ message: string, status: number|null, code: string|null }} ApplicationError */

/** @param {unknown} error @returns {ApplicationError} */
export function normalizeHttpError(error) {
  if (!axios.isAxiosError(error)) {
    return Object.freeze({ message: 'Ocurrió un error inesperado.', status: null, code: null });
  }
  const status = error.response?.status ?? null;
  const data = error.response?.data;
  const message = typeof data?.message === 'string'
    ? data.message
    : status === 401 ? 'La sesión no es válida.'
      : status === 403 ? 'No tienes permisos para realizar esta acción.'
        : status === 404 ? 'El recurso solicitado no existe.'
          : status && status >= 500 ? 'El servicio no está disponible temporalmente.'
            : 'No fue posible completar la solicitud.';
  return Object.freeze({ message, status, code: error.code ?? null });
}

/** @param {import('axios').AxiosInstance} client @param {(error: ApplicationError) => void} onError */
export function installErrorInterceptor(client, onError = () => {}) {
  return client.interceptors.response.use(
    (response) => response,
    (error) => {
      const normalized = normalizeHttpError(error);
      onError(normalized);
      return Promise.reject(normalized);
    }
  );
}
