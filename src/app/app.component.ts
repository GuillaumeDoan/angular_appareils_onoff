import { Component } from '@angular/core';
import {AppareilService} from "./services/appareil.service";
import {OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
    // const counter = Observable.interval(1000);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


  // isAuth = false;
  // lastUpdate = new Date();



  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';

  // appareils = [
  //   //   {
  //   //     name: 'Machine à laver',
  //   //     status: 'éteint'
  //   //   },
  //   //   {
  //   //     name: 'Frigo',
  //   //     status: 'allumé'
  //   //   },
  //   //   {
  //   //     name: 'Ordinateur',
  //   //     status: 'éteint'
  //   //   }
  // ];



  // constructor() {
  //   setTimeout(
  //     () => {
  //       this.isAuth = true;
  //     }, 4000
  //   );
  // }

  // constructor(private appareilService: AppareilService) {
  //   setTimeout(
  //     () => {
  //       this.isAuth = true;
  //     }, 4000
  //   );
  // }
  // ngOnInit(){
  //   this.appareils = this.appareilService.appareils;
  // }
  //
  //
  // // onAllumer() {
  // //   console.log('On allume tout !');
  // // }
  //
  // onAllumer() {
  //   this.appareilService.switchOnAll();
  // }
  //
  // onEteindre() {
  //   if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
  //     this.appareilService.switchOffAll();
  //   } else {
  //     return null;
  //   }
  // }

}
