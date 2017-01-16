import { Injectable } from '@angular/core';

import { Hero }   from '../objects/hero';
import { HEROES } from '../objects/mock-heroes';


@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 200);
    })
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroSlowly(id: number): Promise<Hero>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHero(id)), 2000);
    })
  }

  /*
    method that grabs the hero by their name instead of id
  */
  getHeroName(name: string): Promise<Hero>{
     return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.name === name));
  }

}
