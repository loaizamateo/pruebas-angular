import { mensaje } from "./string";

// Agrupar pruebas
describe('Pruebas de Strings', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Mateo');
        expect( typeof resp ).toBe('string')
    })

    it('Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Mateo';
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre)
    })
});


// Ejecutar prueba especifica
//it('Debe de regresar un string');