export class Configuration{
  constructor (
    public _id: number,
    public favicon: any,
    public logo: any,
    public menu: any[],
    public secciones: string[],
    public colormenu: string,
    public backgroundmenu: string,
    public portada: any,
    public colorfooter: string,
    public backgroundfooter: string,
    public direccion: string,
    public telefono: string,
    public correo: string,
    public facebook: string,
    public instagram: string,
    public twitter: string,
    public actived: number,
  ){}
}
