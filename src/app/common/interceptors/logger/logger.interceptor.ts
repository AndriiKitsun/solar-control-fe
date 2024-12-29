import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      error: (err) => {
        console.error(err);
      },
    }),
  );
};
