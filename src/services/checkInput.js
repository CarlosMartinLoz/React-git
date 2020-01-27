export const numbersOnly = /^[0-9]+$/;
export const allowEverything =/.*/;

export const checkInput = (size,input,regexOption)=>{
    if(input.length<size && (regexOption.test(input)||input=="")){
        return true;
    }
    return false;
}