//! Dominio: Capa de datos puros
//! Entity: MOdelo de datos

export class Task{
    constructor(
        public readonly id: string,
        public title: string,
        public description: string,
        public status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED',
        public createAt: Date
    ) { }
    //Logica en la capa de dominio
    complete(){
        this.status = 'COMPLETED';
    }
}