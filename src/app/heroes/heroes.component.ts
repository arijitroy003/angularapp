import { Component, OnInit } from '@angular/core';
import { myHero } from '../hero';
//import { HEROES } from '../mock_heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : myHero[];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes=heroes
    });
  }

  add(name: string, id: number): void {
    name = name.trim();
    if (!name && !id) { return; }
    console.log(name,id);
    this.heroService.addHero({ name,id } as myHero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: myHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // selectedHero : myHero;
  // onSelect(hero: myHero) :void {
  //   console.log('hero selected');
  //   this.selectedHero = hero;
  // }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
