import { pratica3 } from "../src/pratica3"

describe("Pratica 3", () => {

    test("Deve retornar true, caso o resultado seja a soma dos números", () => {
        //Armazena valor em uma variavel:
        const result = pratica3(2, 5)
        //Avalia se o resultado é aquilo que vc espera:
        expect(result).toEqual({
            soma: 7,
            multiplicacao: 10
        })
    })

    test("Caso falhe, deve retornar null", () => {
        //Armazena valor em uma variavel:
        const result = pratica3("2" as any, "5" as any)
        //Avalia se o resultado é aquilo que vc espera:
        expect(result).toEqual(null)
    })
})