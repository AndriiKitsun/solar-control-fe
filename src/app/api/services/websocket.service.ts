import {
  WebSocketSubjectConfig,
  WebSocketSubject,
} from 'rxjs/internal/observable/dom/WebSocketSubject';
import {
  Observable,
  Observer,
  Subject,
  share,
  distinctUntilChanged,
  interval,
  takeWhile,
  map,
} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class WebSocketClientService {
  public isConnected$: Observable<boolean>;

  protected reconnectInterval = 5_000;
  protected reconnectAttempts = 10;

  private readonly config: WebSocketSubjectConfig<unknown>;
  private reconnection$?: Observable<number>;
  private socket$?: WebSocketSubject<unknown>;
  private connection$!: Observer<boolean>;
  private wsMessages$: Subject<unknown>;

  constructor() {
    this.wsMessages$ = new Subject<unknown>();

    this.config = {
      closeObserver: {
        next: () => {
          this.socket$ = undefined;
          this.connection$.next(false);
        },
      },
      openObserver: {
        next: () => {
          this.connection$.next(true);
        },
      },
      ...this.getConfig(),
    };

    this.isConnected$ = new Observable<boolean>((observer) => {
      this.connection$ = observer;
    }).pipe(share(), distinctUntilChanged());

    this.isConnected$.subscribe((isConnected) => {
      if (!this.reconnection$ && !isConnected) {
        this.reconnect();
      }
    });

    this.connect();
  }

  public on<T>(): Observable<T> {
    return this.wsMessages$.pipe(map((data) => data as T));
  }

  private connect(): void {
    this.socket$ = new WebSocketSubject(this.config);

    this.socket$.subscribe({
      next: (message: unknown) => {
        this.wsMessages$.next(message);
      },
      error: () => {
        if (!this.socket$) {
          this.reconnect();
        }
      },
    });
  }

  private reconnect(): void {
    this.reconnection$ = interval(this.reconnectInterval).pipe(
      takeWhile((v, index) => index < this.reconnectAttempts && !this.socket$),
    );

    this.reconnection$.subscribe({
      next: () => this.connect(),
      complete: () => {
        this.reconnection$ = undefined;

        if (!this.socket$) {
          this.wsMessages$.complete();
          this.connection$.complete();
        }
      },
    });
  }

  protected abstract getConfig(): WebSocketSubjectConfig<unknown>;
}
