// Check string is empty or not
export const checkStringHasValue = (str: string) => {
    if (str && str !== '' && str !== undefined && str !== null) {
        return true;
    } else {
        return false;
    }
};

// Check object is empty or not
export const checkObjectHasValue = (str: any) => {
    if (str && str !== undefined && str !== null && Object.keys(str).length !== 0) {
        return true;
    } else {
        return false;
    }
};

// Check array is empty or not
export const checkArrayHasValue = (str: any) => {
    if (str && str !== undefined && str !== null && str.length !== 0) {
        return true;
    } else {
        return false;
    }
};

// Check number is empty or not
export const checkNumberHasValue = (str: number) => {
    if (str && str !== undefined && str !== null) {
        return true;
    } else {
        return false;
    }
};

// Check boolean is empty or not
export const checkBooleanHasValue = (str: boolean) => {
    if (str && str !== undefined && str !== null && str === true) {
        return true;
    } else {
        return false;
    }
};

//hasOwnProperty for array
export const checkArrayHasProperty = (data: any, value: any) => {
    if (data && data.hasOwnProperty(value)) {
        return true;
    } else {
        return false;
    }
};
