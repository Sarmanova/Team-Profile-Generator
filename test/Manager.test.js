const Manager = require("../lib/Manager");
const manager = new Manager("Saya", 45, "saya@gmail.com", 4155245920);

test("Testing manager officeNumber", function() {
    expect(manager.officeNumber).toBe(manager.officeNumber);
});
test(" Testing manager getRole", function() {
    expect(manager.getRole()).toBe("Manager");
});