
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [

      {id: 11, name: 'Donny Silvino'},
      {id: 12, name: 'Matt Carbunkle'},
      {id: 13, name: 'Benjamin Manatoby'},
      {id: 14, name: 'Fredrick Jaywardee'},
      {id: 15, name: 'Jonathan Henry'},
      {id: 16, name: 'Ricky Pomphrett'},
      {id: 17, name: 'Geraldo Bermuda'},
      {id: 18, name: 'Angelo Bay'},
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}