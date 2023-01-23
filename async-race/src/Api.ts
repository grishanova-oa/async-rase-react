export class CarApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch(method: string, path: string, query = '') {
    const response = await fetch(`${this.baseUrl}/${path}${query}`, {
      method,
    });

    if (response.ok) {
      return response.json();
    }

    return { success: false };
  }

  loadGarage() {
    return this.fetch('GET', 'garage');
  }

  patchVelocity(id: number): Promise<{ velocity: number; distance: number }> {
    return this.fetch('PATCH', 'engine', `?id=${id}&status=started`);
  }

  patchEngineDriveMode(id: number): Promise<{ success: boolean }> {
    return this.fetch('PATCH', 'engine', `?id=${id}&status=drive`);
  }
}
