import { ICar } from './types';

interface IFetch {
  path: string;
  query?: string;
  body?: BodyInit;
  reqData?: RequestInit;
}

interface ILoadGarage {
  actualPage?: number;
  allCars?: boolean;
}
export class CarApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch({ reqData, path, query = '' }: IFetch) {
    const response = await fetch(`${this.baseUrl}/${path}${query}`, reqData);

    if (response.ok) {
      return response.json();
    }

    return { success: false };
  }

  loadGarage({ actualPage, allCars }: ILoadGarage) {
    return this.fetch({
      reqData: { method: 'get' },
      query: allCars ? '' : `?_page=${actualPage}&_limit=7`,
      path: 'garage',
    });
  }

  patchVelocity(id: number): Promise<{ velocity: number; distance: number }> {
    return this.fetch({
      reqData: { method: 'PATCH' },
      path: 'engine',
      query: `?id=${id}&status=started`,
    });
  }

  patchEngineDriveMode(id: number): Promise<{ success: boolean }> {
    return this.fetch({
      reqData: { method: 'PATCH' },
      path: 'engine',
      query: `?id=${id}&status=drive`,
    });
  }

  createCar(name: string, color: string): Promise<ICar> {
    return this.fetch({
      path: 'garage',
      reqData: {
        method: 'POST',
        body: JSON.stringify({ name, color }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  }

  updateCar(name: string, color: string, id: number): Promise<ICar> {
    return this.fetch({
      path: 'garage',
      query: `/${id}`,
      reqData: {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  }

  deleteCar(id: number): Promise<ICar> {
    return this.fetch({
      path: 'garage',
      query: `/${id}`,
      reqData: {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  }
}
