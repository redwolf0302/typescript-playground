let myFunc: (a: number, b: string) => number = (a: number, b: string): number => {
    return 0;
}
interface Doctor {
    name: string;
    age: number;
    addDoctor(this: Doctor, name: string): () => string;
}
let doctor: Doctor = {
    name: 'Evan',
    age: 30,
    addDoctor: function (this: Doctor, name: string) {
        return () => {
            return this.name + name;
        };
    }
}

doctor.addDoctor('医生')();


//Overloads
function createDoctor(x: { name: string, age: number }): Doctor;
function createDoctor(x: string): Doctor;
function createDoctor(x): any {
    if (typeof x === 'object') {
        return { name: x.name, age: x.age };
    } else if (typeof x === 'string') {
        return { name: x, age: 0 };
    }
}

createDoctor({ name: 'Zhanghui', age: 32 });
