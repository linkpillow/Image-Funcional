import { Image } from "./image";

class ImageService {
  baseURL: String = 'https://localhost:8080/image';

  async buscar(query?: string, extension?: string): Promise<Image[]> {

    const url =`${this.baseURL}?query=${query}&extension=${extension}`;
    const repsonse = await fetch(url);
    return await repsonse.json();
  }
}

export const imageService = () => new ImageService();