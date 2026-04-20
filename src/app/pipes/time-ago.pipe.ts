import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(fecha: string | Date): string{
    const ahora = new Date();
    const recibido = new Date(fecha);
    const diffMs = ahora.getTime() - recibido.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'hace menos de un minuto';
    if (diffMin < 60) return `hace ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `hace ${diffH} h`;
    const diffD = Math.floor(diffH / 24);
    return `hace ${diffD} día${diffD > 1 ? 's' : ''}`;
  }

}
