import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Character } from 'src/app/class/character';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  characters: Observable<Character[]>;
  subscription: Subscription;
  currentPage = 0;
  next = true;
  prev = false;

  constructor(private marvelService: MarvelApiService) { }

  ngOnInit(): void {
    this.characters = this.marvelService.charactersUpdated;
    this.characters.subscribe(
      (characters: Character[]) => {
        this.currentPage = this.marvelService.getCurrentPage();
        this.next = this.canGoNext();
        this.prev = this.canGoPrev();
      }
    );
    this.marvelService.loadCharacters();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextPage(): void {
    this.marvelService.nextCharacters();
  }

  previousPage(): void {
    this.marvelService.previousCharacters();
  }

  goToPage(): void {
    if (this.currentPage && typeof(this.currentPage) === 'number') {
      console.log('yep');
      this.marvelService.goToPage(this.currentPage);
    }
  }

  isSend(event) {
    if (event.keyCode === 13) {
      console.log('aie');
      this.goToPage();
    }
  }

  canGoPrev() {
    return this.marvelService.canGoPrev();
  }

  canGoNext() {
    return this.marvelService.canGoNext();
  }

}
