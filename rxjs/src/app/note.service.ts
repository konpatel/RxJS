import {Injectable} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Note} from "./note";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {
  }

  private noteUrl = 'http://localhost:8080/api/notes';

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.noteUrl).pipe(
      map((res: Note[]) => res),
      catchError(err => {
        err.message = 'Sorry! There is an error!';
        return throwError(err);
      }));
  }
}
