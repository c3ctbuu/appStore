export interface ClienteModel {
    id_cliente: number;
    nombre: string;
    correo: string;
    telefono: string;
    domicilio: string;
    rol: 'admin' | 'user';
}
