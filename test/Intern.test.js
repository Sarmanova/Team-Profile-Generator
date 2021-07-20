const Intern = require("../lib/Intern");
var obj = new Intern("Saya", 45, "saya@gmail.com", "Bootcamp");
test(" Test intern school ", function() {
    expect(obj.school).toBe("Bootcamp");
});
test(" Test intern getSchool ", function() {
    expect(obj.getSchool()).toBe("Bootcamp");
});
test(" Test engineer getRole", function() {
    expect(obj.getRole()).toBe("Intern");
});