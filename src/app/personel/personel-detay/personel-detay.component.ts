import { Component, OnInit, Input } from '@angular/core';
import { Ipersonel } from 'src/_model/ipersonel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Isehir } from 'src/_model/isehir';
import { SehirService } from 'src/_services/sehir.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/_services/alertify.service';
import { PersonelService } from 'src/_services/personel.service';

@Component({
  selector: 'app-personel-detay',
  templateUrl: './personel-detay.component.html',
  styleUrls: ['./personel-detay.component.css']
})
export class PersonelDetayComponent implements OnInit {
@Input() secpersonel: Ipersonel;
personelForm: FormGroup;
slist: Isehir[];
personel: Ipersonel;
  constructor(private formbuilder: FormBuilder, private servis: SehirService, private router: Router,
              private alertservis: AlertifyService, private servispersonel: PersonelService) { }

  ngOnInit() {
    this.createPersonelForm();
    this.getSehir();
  }

  getSehir() {
    this.servis.getSehir().subscribe((sehirler: Isehir[]) => {this.slist = sehirler; }, err => {console.log(err); });
  }
  createPersonelForm() {
    this.personelForm = this.formbuilder.group({
      id: [''],
      personelAd: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      personelSoyad: [
        '',
        [Validators.required] ]
    });
  }
  updatePersonel(personel: Ipersonel) {
    this.servispersonel.updatePersonel(personel).subscribe(
      (p: Ipersonel) => {
        this.personel = p;
        this.router.navigate (['/home']);
        this.alertservis.message ('Güncelleme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }
  createPersonel(personel: Ipersonel) {
    this.servispersonel.createPersonel(personel).subscribe(
      (p: Ipersonel) => {
        this.personel = p;
        this.router.navigate (['/home']);
        this.alertservis.message ('Ekleme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }
  deletePersonel(id: number) {
    this.servispersonel.deletePersonel(id).subscribe(
      (s: Ipersonel) => {
        this.personel = s;
        this.router.navigate (['/home']);
        this.alertservis.warning('Silme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }

}
