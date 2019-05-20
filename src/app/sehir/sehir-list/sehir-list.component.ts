import { Component, OnInit } from '@angular/core';
import { SehirService } from 'src/_services/sehir.service';
import { Isehir } from 'src/_model/isehir';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sehir-list',
  templateUrl: './sehir-list.component.html',
  styleUrls: ['./sehir-list.component.css']
})
export class SehirListComponent implements OnInit {
slist: Isehir[];
secSehir: Isehir;
detay = false;
  constructor(private sehirServis: SehirService, private http: HttpClient) { }

  ngOnInit() {
    this.getSehir();
  }
getSehir() {
  this.sehirServis.getSehir().subscribe((sehirler: Isehir[]) => {this.slist = sehirler; }, err => {console.log(err); });
}

selectSehir(s: Isehir) {
  this.secSehir = s;
  this.detay = true;
}
mouseleft() {
  this.detay = false;
}
}
