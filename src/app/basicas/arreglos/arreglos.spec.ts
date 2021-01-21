import { obtenerRobots } from "./arreglos"

xdescribe('Pruebas de arreglos',()=>{
    it('Debe retornar al menos 3 robots', ()=>{
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    })
    it('Deber de existir Megaman y Ultron',()=>{
        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
    })
})