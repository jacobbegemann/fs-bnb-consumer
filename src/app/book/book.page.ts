import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  public bookDone: boolean;

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private ctrl: NavController) { }

  ngOnInit() {
  }

  book() {
    const start = (<HTMLInputElement>document.getElementById('start')).value;
    const end = (<HTMLInputElement>document.getElementById('end')).value;
    const userId = parseInt(localStorage.getItem("id"));
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      const propertyId = parseInt(data.params.rentalID);
      this.dataService.getData().book(
        { dateFrom: start, dateTo: end, userID: userId, rentalID: propertyId }
      ).then((success) => {
        if (success) {
          this.bookDone = true;
        }
      })
    });
  }

  navHome() {
    this.ctrl.navigateForward('/tabs/tab4');
  }

}
