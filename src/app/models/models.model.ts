export interface Proyecto {
  id: number;
  name: string;
  desc: string;
  img: string;
  techs:  string[];
  github: string;
}
export interface Contacto{
  name: string,
  email: string,
  msg: string,
  date: string,
  open: boolean,
  tlfn?: string,
  id?: number
}

export interface Visitante{
  name: string,
  date?: string,
  id?: number
}
