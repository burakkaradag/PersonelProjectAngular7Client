import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Isehir } from 'src/_model/isehir';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SehirService } from 'src/_services/sehir.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/_services/alertify.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sehir-detay',
  templateUrl: './sehir-detay.component.html',
  styleUrls: ['./sehir-detay.component.css']
})
export class SehirDetayComponent implements OnInit {
  @Input() secSehir: Isehir;
  slist: Isehir[];
  sehirForm: FormGroup;
  sehir: Isehir;
  msg: string;

  constructor(private formBuild: FormBuilder, private servis: SehirService, private router: Router, private alertservis: AlertifyService) {}

  ngOnInit() {
    this.createSehirForm();
    this.getSehir();
  }

  getSehir() {
    this.servis.getSehir().subscribe((sehirler: Isehir[]) => {this.slist = sehirler; }, err => {console.log(err); });
  }

  createSehirForm() {
    this.sehirForm = this.formBuild.group({
      id: [''],
      sehirAd: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ]
    });
  }
  updateSehir(sehir: Isehir) {
    this.servis.updateSehir(sehir).subscribe(
      (s: Isehir) => {
        this.sehir = s;
        this.msg = sehir.sehirAd + 'Güncellendi';
        this.router.navigate (['/home']);
        this.alertservis.message ('Güncelleme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }
  deleteSehir(id: number) {
    this.servis.deleteSehir(id).subscribe(
      (s: Isehir) => {
        this.sehir = s;
        this.msg = this.sehir.sehirAd + 'silindi';
        this.router.navigate (['/home']);
        this.alertservis.warning('Silme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }

  createSehir(sehirdto: Isehir) {
    this.servis.createSehir(sehirdto).subscribe(
      (s: Isehir) => {
        this.sehir = s;
        this.msg = this.sehir.sehirAd + 'Eklendi';
        this.router.navigate (['/home']);
        this.alertservis.success('Ekleme Başarılı');
      },
      err => {
        console.log(err);
      }
    );
  }

}
