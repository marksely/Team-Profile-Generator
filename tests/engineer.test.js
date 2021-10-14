const Engineer = require('../lib/engineer');

describe("class Engineer", () => {
    describe("getGithub method", () => {
        it("returns github or engineer object from data passed in", () => {
            const newEngineer = new Engineer('sam',3,'sam@gmail.com','sammm');
            const github = newEngineer.getGithub();
            expect(github).toBe('sammm');
        });
    });
    describe("getRole method", () => {
        it("should return engineer", () => {
            const newEngineer = new Engineer('sam',3,'sam@gmail.com','sammm');
            const role = newEngineer.getRole();
            expect(role).toBe('engineer');
        });
    });
})