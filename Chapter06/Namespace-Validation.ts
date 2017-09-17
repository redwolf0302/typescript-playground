namespace Validation {
    export interface IsObjectValidator {
        validate(): boolean;
    }

    export function isObject(){
        return true;
    }
}
