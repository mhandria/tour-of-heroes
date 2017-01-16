import { Component, OnInit } from '@angular/core';

import { Hero } from '../objects/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero : Hero;
  heroes: Hero[];

  constructor(private _heroService: HeroService){}

  ngOnInit(): void{
    this.getHero();
  }

  getHero(): void{
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero):void{
      this.selectedHero = hero;
  }

}
