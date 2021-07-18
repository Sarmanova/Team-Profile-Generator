const Engineer = require("../lib/Engineer");
var obj = new Engineer("Saya", 45, "saya@gmail.com", "ZhansayaSarmanova");
test("Testing engineer username", function() {
    expect(obj.username).toBe(obj.username);
});
test("Testing engineer getGithub", function() {
    expect(obj.getGithub()).toBe("ZhansayaSarmanova");
});
test(" Test engineer getRole", function() {
    var obj = new Engineer("ZhansayaSarmanova");
    expect(obj.getRole()).toBe("Engineer");
});