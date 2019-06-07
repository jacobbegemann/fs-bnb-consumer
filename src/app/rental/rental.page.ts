import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  public location: string;
  public coverPhoto: string;
  public name: string;
  public hostName: string;
  public email: string;
  public found: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (data: any) => {
        this.find(data.params.rentalID);
      }
    )
  }

  async find(rentalID: number) {
    this.dataService.getData().getRental(rentalID).then((value) => {
      this.location = value.getLocation();
      this.coverPhoto = value.getCoverPhoto();
      this.name = value.getName();
      this.dataService
        .getData()
        .getUserByIdUnproteted(value.getHost()).then((hostUser) => {
          this.hostName = `${hostUser.getFirstName()} ${hostUser.getLastName()}`;
          this.email = hostUser.getEmail();
          this.found = true;
        });
    }, (onreject) => {
      this.found = false;
    })
  }

}
