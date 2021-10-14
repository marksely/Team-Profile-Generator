const Manager = require('../lib/manager');

describe("Manager class", () => {
    describe("getRole method", () => {
        it("should return manager", () => {
            const newManager = new Manager('mark', 1, 'mark@gmail.com', 235);
            const role = newManager.getRole();
            expect(role).toBe('manager');
        })
    })
})