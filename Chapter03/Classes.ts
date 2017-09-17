class Person {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

class Doctor extends Person {
    static type = 'Doctor';
    constructor(name: string) {
        super(name);
    }
    private _level: string;

    public set level(level: string) {
        this._level = level;
    }
    public get level() {
        return this._level;
    }
}

let doctor: Doctor;
doctor = new Doctor('22');
doctor.level;
Doctor.type;

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

console.log(point3d);