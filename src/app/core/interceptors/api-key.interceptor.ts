import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bGR3aWl1amlid2Fmc3ZybnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NzcxNjYsImV4cCI6MjA5MjI1MzE2Nn0.E7bkqmJMtmvI3MYTGwAy3_9WB7boC4YGZEHbvVQjFYQ';
  if(req.url.includes('contacto') || req.url.includes('visita')){
    const authReq = req.clone({
      setHeaders: {
        apiKEY: apiKEY,
        Authorization: `Bearer ${apiKEY}`,
      }
    })
    return next(authReq);
  }
  
  return next(req);
};
