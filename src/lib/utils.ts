export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getPath(path: string) {
    if (path.startsWith("http")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${BASE_PATH}${cleanPath}`;
}
