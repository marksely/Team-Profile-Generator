const Intern = require('../lib/intern');

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("should return the school from the intern object", () => {
            const newIntern = new Intern('tom', 5, 'tom@gmail.com', 'UGA');
            const school = newIntern.getSchool();
            expect(school).toBe('UGA');
        });
    });
    describe("getRole method", () => {
        it("should return intern", () => {
            const newIntern = new Intern('tom', 5, 'tom@gmail.com', 'UGA');
            const role = newIntern.getRole();
            expect(role).toBe('intern');
        })
    })
})