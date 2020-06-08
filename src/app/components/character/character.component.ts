import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/class/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit(): void {
  }

  getPicture() {
    return `${this.character.thumbnail.path}/portrait_medium.${this.character.thumbnail.extension}`;
  }

  getSmallPicture() {
    return `${this.character.thumbnail.path}/standard_fantastic.${this.character.thumbnail.extension}`;
  }

}
