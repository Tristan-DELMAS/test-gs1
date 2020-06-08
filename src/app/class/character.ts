export class Character {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: number;
  series: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.resourceURI = data.resourceURI;
    this.thumbnail = data.thumbnail;
    this.comics = data.comics.available;
    this.series = data.series.available;
  }
}
