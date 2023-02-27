import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';
  subscription!: Subscription;

  ngOnInit(): void {
    const observable$ = new Observable((observer: any) => {
      try {
        // Execution
        observer.next('First value');
        observer.next('Second value');

        setInterval(() => {
          observer.next('Async value');
          observer.complete();
          observer.next('value not send')
        }, 1000);
      } catch (err) {
        observer.error(err);
      }
    });
    // Subscribing to Observable
    this.subscription = observable$.subscribe((message: any) => {
      console.log(message);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createObservable(): void {

  }

}
