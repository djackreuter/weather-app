import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // inject weather component as dependancy
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

}
