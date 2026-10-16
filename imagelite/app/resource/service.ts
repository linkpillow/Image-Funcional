import { Image } from "./image";

class ImageService {
  baseURL: string = 'https://localhost:8080/image';

  async buscar(query?: string, extension?: string): Promise<Image[]> {

    const url =`${this.baseURL}?query=${query}&extension=${extension}`;
    const repsonse = await fetch(url);
    return await repsonse.json();
  }
  async enviar(file: File, name: string, tags: string[]): Promise<void> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    tags.forEach((tag) => formData.append('tags', tag));

    const response = await fetch(this.baseURL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Falha ao enviar imagem: ${response.status} ${response.statusText}`,
      );
    }
  }
}

export const imageService = () => new ImageService();