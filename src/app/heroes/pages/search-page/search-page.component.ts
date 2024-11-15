import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { environments } from '../../../../environments/environments';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  searchInput = new FormControl('');
  heroes: Hero[] = [];
  selectedHero?: Hero;
  isProduction = environments.pdn;

  constructor(private heroService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroService
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
}
