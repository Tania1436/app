export class Employee {
    constructor(_id = "", nombre = "", cargo = "", email = "", telefono = 0) {
      this._id = _id;
      this.nombre = nombre;
      this.cargo = cargo;
      this.email = email;
      this.telefono = telefono;
    }
  
    _id: string;
    nombre: string;
    cargo: string;
    email: string;
    telefono: number;
  }