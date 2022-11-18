import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/@shared/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    public _service: GeneralService
  ) { }

  ngOnInit(): void {
    this._service.getTopStories().subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
