import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../@shared/services/general.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: []
})
export class FrontComponent {

  constructor(
    private _service: GeneralService
  ) { }

}
