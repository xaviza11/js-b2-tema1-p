import { countDown } from '../u4/u4e1.js';

describe('Testing promises: countDown', () => {

    const STEPS = 6;

    test('countDown invalid callback...', async () => {

        try {
            const res = await countDown(STEPS);
        } catch (error) {
            expect(error.message).toMatch(/ERROR/);
        }

    });

    test('countDown invalid amount...', async () => {

        const callbackFunc = (step) => {
            console.log(step);
        };

        try {
            const res = await countDown(0, callbackFunc);
        } catch (error) {
            expect(error.message).toMatch(/ERROR/);
        }

    });

    test('countDown positive...', async () => {

        let c = STEPS;

        const stepFunc = (step) => {
            expect(c).toBe(step);
            c--; 
        };  //! El test estaba errado, puesto que al restar 1 a c entonces c != step pero se valida después de c-- cuando se ha de validar antes

        const res = await countDown(STEPS, stepFunc);

        expect(c).toBe(0);
        expect(res).toBe(true);

    });

});
