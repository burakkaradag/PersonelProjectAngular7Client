import { Injectable } from '@angular/core';
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';
import { Isehir } from 'src/_model/isehir';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class SehirService {
baseUrl = 'http://localhost:1618/';
slist: Isehir[];
sehir: Isehir;

constructor(private httpclient: HttpClient) { }

getSehir(): Observable<Isehir[]> {
  return this.httpclient.get <Isehir[]>(this.baseUrl + 'Sehir/Liste');
}
updateSehir(sehirDTO: Isehir): Observable<Isehir> {
  return this.httpclient.post <Isehir>(this.baseUrl + 'Sehir/Guncel/' , sehirDTO  );
}
deleteSehir(id: number): Observable<Isehir> {
  return this.httpclient.delete <Isehir>(this.baseUrl + 'Sehir/Sil/' + id  );
}
createSehir(s: Isehir): Observable<Isehir> {
  return this.httpclient.post <Isehir>(this.baseUrl + 'Sehir/Ekle/' , s );
}
}
