export interface gendersInterface {
    label: string;
    value: string;
}

export interface equipmentInterface {
    text: string;
    id: number;
    items: Array<any>;
}

export interface employeesInterface {
    id: number;
    name: string;
    reportsTo: null | number;
    phone: string;
    extension: number;
    hireDate: Date;
    fullTime: boolean;
    position: string;
    timeInPosition: number;
}
