import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Character } from '../class/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  url = 'http://gateway.marvel.com/v1/public/characters';
  publicKey = '7e7f694a7924e457e3302a0d958f11f7';
  hash = '47fd607b967d8bd43c6c32821b8ba5b2';
  displayItems = 20;

  characters: Character[] =  [];
  charactersUpdated: Subject<any> = new Subject<any>();
  maxCharacters = 0;
  offset = 0;

  constructor(private http: HttpClient) {}

  loadCharacters(): void {
    this.http.get(`${this.url}?ts=1&apikey=${this.publicKey}&hash=${this.hash}&offset=${this.offset}`).subscribe(
      (res: any) => {
        this.characters = [];
        this.maxCharacters = res.data.total;
        for (const character of res.data.results) {
          this.characters.push(new Character(character));
        }
        console.log(this.characters);
        this.charactersUpdated.next(this.characters);
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  nextCharacters(): void {
    if (this.canGoNext()) {
      this.offset += this.displayItems;
      this.loadCharacters();
    }
  }

  previousCharacters(): void {
    if (this.canGoPrev()) {
      this.offset = (this.offset - this.displayItems > 0) ? this.offset - this.displayItems : 0;
      this.loadCharacters();
    }
  }

  goToPage(pageNumber): void {
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (pageNumber * this.displayItems > this.maxCharacters) {
      pageNumber = Math.floor(this.maxCharacters / this.displayItems);
    }
    this.offset = (pageNumber - 1) * this.displayItems;
    this.loadCharacters();
  }

  getCurrentPage(): number {
    return (this.offset / this.displayItems) + 1;
  }

  canGoNext(): boolean {
    return this.offset + this.displayItems < this.maxCharacters;
  }

  canGoPrev(): boolean {
    return this.offset > 0;
  }

}
