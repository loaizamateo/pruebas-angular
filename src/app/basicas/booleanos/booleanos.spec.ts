import { usuarioIngresado } from "./booleanos"

describe('Pruebas de booleanos', ()=>{
    it('Debe de retonar true',()=>{
        const res = usuarioIngresado();
        expect(res).toBeTruthy();
    })
})