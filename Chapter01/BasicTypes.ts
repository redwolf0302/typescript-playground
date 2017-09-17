//BasicTypes Demo
let a: boolean = true;
a = false;
// a = '1';
let b: undefined = undefined;
let c: null = null;

b = undefined;
c = null;
let d: never = (() => { throw new Error(); })();