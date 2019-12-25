import CalculationService from '../Services/CalculationService';

describe('Service Calculation Testing Step 1', () => {
    it('Input 10,20 results in 30', () => {
        expect(CalculationService.calculate({ input: "10,20" } )).toBe(30);
    });

    it('Input 20 results in 20', () => {
        expect(CalculationService.calculate({ input: "20" } )).toBe(20);
    });

    it('Input 1,5000 results in 5001', () => {
        expect(CalculationService.calculate({ input: "1,5000" } )).toBe(5001);
    });

    it('Input 1,1,1 throws an error', () => {
        expect(CalculationService.calculate({ input: "1,1,1" } )).toBe(3);
    });

    it('Input 4,-3 results in 1', () => {
        expect(CalculationService.calculate({ input: "4,-3" })).toBe(1);
    });

    it('Input "" results in 0', () => {
        expect(CalculationService.calculate({ input: "" })).toBe(0);
    });

    it('Input 5,tyty results in 5', () => {
        expect(CalculationService.calculate({ input: "5,tyty" })).toBe(5);
    });
});

describe('Service Calculation Testing Step 2', () => {
    it('Input 1,2,3,4,5,6,7,8,9,10,11,12 results in 78', () => {
        expect(CalculationService.calculate({ input: "1,2,3,4,5,6,7,8,9,10,11,12" } )).toBe(78);
    });
});