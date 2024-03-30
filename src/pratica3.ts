export const pratica3 = (a: number, b: number) => {

    if(typeof a !== "number" || typeof b !== "number"){
        return null
    }
    return{
        soma: a + b,
        multiplicacao: a * b
    }
}