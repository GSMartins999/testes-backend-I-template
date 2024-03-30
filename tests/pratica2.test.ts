import {pratica2 } from "../src/pratica2"

describe("Praticando tests", () => {

    test("Deve retornar true, caso seja inteiro e resto === 0", () => {
        //Armazena valor em uma variavel:
        const result = pratica2(10)
        //Avalia se o resultado é aquilo que vc espera:
        expect(result).toBe(true)
    })

    test("Deve retornar null se o número não for inteiro", () => {
        const result = pratica2(2.5)
        //toBe funciona para dados primitivos
        expect(result).toBe(null)
        //toEqual funciona para arrays e objetos
        expect(result).toEqual(null)
    })
})