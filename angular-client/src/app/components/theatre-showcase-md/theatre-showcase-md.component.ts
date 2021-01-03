import { Component, OnInit } from '@angular/core';
import { OMDBApiType } from 'src/app/models/OMDBApiType';
import { ApicallerService } from 'src/app/services/apicaller.service';

@Component({
  selector: 'app-theatre-showcase-md',
  templateUrl: './theatre-showcase-md.component.html',
  styleUrls: ['./theatre-showcase-md.component.sass']
})
export class TheatreShowcaseMdComponent implements OnInit {

  // Temperory Array before the MongoDB setup
  showcaseArray: OMDBApiType[] = [];
  seachTitiles: string[] = [
    'the+room',
    'troll+2',
    'batman+%26+robin',
    'Birdemic',
    'Manos%3A+The+Hands+Of+Fate',
    'Battlefield+Earth',
    'Samurai+Cop',
    'Miami+Connection',
    'Plan+9+From+Outer+Space',
    'Jupiter+Ascending'
  ]

  constructor(private api: ApicallerService) { }

  // Simply testing the API request
  ngOnInit(): void {
    this.seachTitiles.forEach(element => {
      this.api.omdbfetch(element).subscribe(res => {
        this.showcaseArray.push(res);
        console.log(this.showcaseArray);
      })
    })
  }

}
