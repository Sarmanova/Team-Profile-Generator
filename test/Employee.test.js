const Employee = require("../lib/Employee");
test(" Test employee and ", function() {
    var str = new Employee();
    expect(typeof str).toBe("object");
});
test(" Test employee name ", function() {
    var str = new Employee("Saya");
    expect(str.name).toBe("Saya");
});
test(" Test employee id ", function() {
    var str = new Employee("Saya", 45);
    expect(str.id).toBe(45);
});
test(" Test employee email ", function() {
    var str = new Employee("Saya", 45, "saya@gmail.com");
    expect(str.email).toBe("saya@gmail.com");
});
test(" Test employee getName ", function() {
    var str = new Employee("Saya", 45, "saya@gmail.com");
    expect(str.getName()).toBe("Saya");
});
test(" Test employee getId ", function() {
    var str = new Employee("Saya", 45, "saya@gmail.com");
    expect(str.getId()).toBe(45);
});
test(" Test employee getEmail", function() {
    var str = new Employee("Saya", 45, "saya@gmail.com");
    expect(str.getEmail()).toBe("saya@gmail.com");
});
test(" Test employee getRole", function() {
    var str = new Employee("Saya", 45, "saya@gmail.com");
    expect(str.getRole()).toBe("Employee");
});