export const apiUrl = process.env.API_URI;
export const serviceWorkerTimeout =
  parseInt(process.env.SERVICE_WORKER_TIMEOUT, 10) || 60 * 1000;
export const dashboardUrl = process.env.DASHBOARD_URL;
