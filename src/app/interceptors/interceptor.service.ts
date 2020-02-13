import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const headers = new HttpHeaders({
      'token-usuario': 'FDKLJSAÑK32N34N'
    });

    // se clona el request porque sino la petición que pase
    // por este interceptor no se podra utilizar de nuevo
    const reqClone = request.clone({
      headers,
    });

    return next.handle(reqClone)
    .pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.warn(error);

    return throwError('Error personalizado');
  }
}
