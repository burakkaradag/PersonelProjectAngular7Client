import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipersonel } from 'src/_model/ipersonel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  baseUrl = 'http://localhost:1618/';
constructor(private httpClient: HttpClient) { }

getPersonel(): Observable<Ipersonel[]> {
  return this.httpClient.get <Ipersonel[]>(this.baseUrl + 'Personel/Liste');
}
updatePersonel(personelDTO: Ipersonel): Observable<Ipersonel> {
  return this.httpClient.post <Ipersonel>(this.baseUrl + 'Personel/Guncel/' , personelDTO  );
}
createPersonel(personelDTO: Ipersonel): Observable<Ipersonel> {
  return this.httpClient.post <Ipersonel>(this.baseUrl + 'Personel/Ekle/' , personelDTO  );
}
deletePersonel(id: number): Observable<Ipersonel> {
  return this.httpClient.delete <Ipersonel>(this.baseUrl + 'Personel/Sil/' + id  );
}
}
