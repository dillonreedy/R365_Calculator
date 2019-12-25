import CalculationService from '../Services/CalculationService';

describe('Service Calculation Testing Step 1', () => {
    it('Input 10,20 results in 30', () => {
        expect(CalculationService.calculate({ input: "10,20" } )).toBe(30);
    });

    it('Input 20 results in 20', () => {
        expect(CalculationService.calculate({ input: "20" } )).toBe(20);
    });

    it('Input 1,5000 results in 1', () => {
        expect(CalculationService.calculate({ input: "1,5000" } )).toBe(1);
    });

    it('Input 1,1,1 results in 3', () => {
        expect(CalculationService.calculate({ input: "1,1,1" } )).toBe(3);
    });

    it('Input 4,-3 results in error being thrown', () => {
        expect(() => CalculationService.calculate({ input: "4,-3" })).toThrow();
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

describe('Service Calculation Testing Step 3', () => {
    it('Input 1\n2,3 results in 6', () => {
        expect(CalculationService.calculate({ input: "1\n2,3" })).toBe(6);
    });
});

describe('Service Calculation Testing Step 4', () => {
    it('Input -1 results in error being thrown', () => {
        expect(() => CalculationService.calculate({ input: "-1" })).toThrow();
    });

    it('Input 1,-1,-1 results in error being thrown', () => {
        expect(() => CalculationService.calculate({ input: "1,-1,-1" })).toThrow();
    });

    it('Input 2\n-1,-2 results in error being thrown', () => {
        expect(() => CalculationService.calculate({ input: "2\n-1,-2" })).toThrow();
    });
});

describe('Service Calculation Testing Step 5', () => {
    it('Input 2,1001,6 results in 8', () => {
        expect(CalculationService.calculate({ input: "2,1001,6" })).toBe(8);
    });
});