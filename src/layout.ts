export type Layout = {
  units: string;
  dimensions: { width: number; depth: number; height: number };
};

export async function loadLayout(url: string): Promise<Layout> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load ${url}: ${response.status}`);
  }

  return response.json();
}
