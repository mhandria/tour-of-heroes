import { Component, OnInit } from '@angular/core';

import { Hero } from '../objects/hero';

import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];

  constructor( private _heroService : HeroService ) { }

  ngOnInit(): void {
    this._heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(0,4));

  }

}
