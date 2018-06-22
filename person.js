
import { user } from './App';

export const checkAge = (age) => {
    if (age > 18) {
        age = "18 or more";
    } else {
        age = "less than 18"
    } 
    return age;
}

export const checkBMI = (weight, height) => {
    return parseInt(weight / ((height/100) * (height/100)))
}
