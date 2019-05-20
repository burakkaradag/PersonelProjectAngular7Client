import { Component, OnInit } from '@angular/core';
import { PersonelService } from 'src/_services/personel.service';
import { Ipersonel } from 'src/_model/ipersonel';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {
  plist: Ipersonel[];
  secpersonel: Ipersonel;
  constructor(private service: PersonelService) {}

  ngOnInit() {
    this.getPersonel();
  }
  getPersonel() {
    this.service.getPersonel().subscribe(
      (personel: Ipersonel[]) => {
        this.plist = personel;
      },
      err => {
        console.log(err);
      }
    );
  }
  selectPersonel(p: Ipersonel) {
    this.secpersonel = p;
  }
}
