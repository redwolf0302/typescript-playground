interface Doctor {
    name: string;
    age: number;
    addDoctor(this: Doctor, name: string): () => string;
}
let doctor1: Doctor = {
    name: 'Evan',
    age: 30,
    addDoctor: function (this: Doctor, name: string) {
        return () => {
            return this.name + name;
        };
    }
}

let doctors: Doctor[] = [];
function addDoctor<T extends Doctor>(t: T): T {
    doctors.push(t);
    return t;
}

addDoctor<Doctor>(doctor1);

let addDoctorFunc1: <U extends Doctor>(t: U) => U = addDoctor;
let addDoctorFunc2: { <U extends Doctor>(t: U): U } = addDoctor;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

getProperty(doctor1, 'name');
getProperty(doctor1, 'age');
// getProperty(doctor1, 'birthday');

class Named {
    name: string;
    // protected birthday: Date;
}

class Person {
    name: string;
    age: number;
    // protected birthday: Date;
}

let p: Named;
// OK, because of structural typing
p = new Person();


enum Status {
    OK,
    Error,
    Fail,
}

enum Color {
    Black,
    Red,
    Green,
}

let stat = Status.Error;
// stat = Color.Black;

function a(s: Named | Person | null): s is Person {
    s.name;
    return true;
}


function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}

console.log(fixed(null));


type ThreeStringProps = Readonly<Doctor>