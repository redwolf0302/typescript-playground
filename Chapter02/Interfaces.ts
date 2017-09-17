interface Patient {
    name: string;
    age: number;
    diagnosis?: string;
    [propName: string]: any
}

let patient: Patient = {
    name: 'Evan',
    age: 30,
    diagnosis: '没猫病',
    address: 'sss'
}

let patients: ReadonlyArray<Patient> = [patient];
// patients.push(patient);

interface SavePatient {
    (patient: Patient, update: boolean): void;
}
let savePatientFunc: SavePatient = function (patient, update) {
    return 1;
}

savePatientFunc(patient, true);

interface PatientConstant {
    [index: number]: Patient,
    // [index: string]: SavePatient
}

interface Doctor {
    id: number;
    name: string;
    graduatedFrom: string;
    level: string;
}

interface HospitalConstructor {
    new(name: string);
}
interface Hospital {
    hireDoctor(doctor: Doctor);
    fireDoctor(doctor: Doctor);
    getDoctors(): Doctor[];
}

class HospitalImpl implements Hospital {
    constructor(name: string) {

    }
    hireDoctor(doctor: Doctor) {

    }
    fireDoctor(doctor: Doctor) {

    }
    getDoctors(): Doctor[] {
        return [];
    }
}

function HospitalBuilder(ctor: HospitalConstructor, name: string) {
    return new ctor(name);
}

let hospital = HospitalBuilder(HospitalImpl, '龙华医院');

// class Control {
//     private state: any;
// }

// interface SelectableControl extends Control {
//     select(): void;
// }

// class Button extends Control {
//     select() { }
// }

// class TextBox extends Control {
//     select() { }
// }

// class Image1 {
//     select() { }
// }

// class Location1 {
//     select() { }
// }