/**
 * Utilidad para generar URLs con el base path correcto
 * Útil para despliegues en GitHub Pages o subdirectorios
 */
export function getUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : base + '/';
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return normalizedBase + normalizedPath;
}
