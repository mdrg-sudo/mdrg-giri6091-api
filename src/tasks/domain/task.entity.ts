//! Dominio: Capa de datos puros
//! Entity: MOdelo de datos

export class Task{
    static complete() {
        throw new Error("Method not implemented.");
    }
    constructor(
        public readonly id: number | null, 
        public title: string,
        public description: string,
        public status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED',
        public createdAt: Date
    ) { }
    //Logica en la capa de dominio
    complete(){
        this.status = 'COMPLETED';
    }
}