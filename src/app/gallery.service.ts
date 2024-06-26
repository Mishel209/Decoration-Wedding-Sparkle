import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private galleriesUrl = '/assets/galleries/galleries.json';

  constructor(private http: HttpClient) { }

  getGalleries(): Observable<any[]> {
    return this.http.get<any[]>(this.galleriesUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never>{
    console.error('GalleryService error:', error);
    throw error;
  }
}
