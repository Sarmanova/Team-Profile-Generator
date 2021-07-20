const createManager = function(manager) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body text-dark">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.Id}<br>${manager.email}<br>${manager.officeNumber}</p>
    </div>
</div>`;
};
const createIntern = function(intern) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body text-dark">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.id}<br>${intern.email}<br>${intern.school}</p>
    </div>
</div>`;
};
const createEngineer = function(engineer) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body text-dark">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text"> ${engineer.id} <br>${engineer.email}<br>${engineer.github}</p>
    </div>
</div>`;
};

function generateHtml(team) {

    const managerArray = [];
    const engineerArray = [];
    const internArray = [];
    for (let i = 0; i < team.length; i++) {
        let employee = team[i];
        let role = employee.getRole();

        switch (role) {
            case "Manager":
                managerArray.push(createManager(employee));
                break;

            case "Intern":
                internArray.push(createIntern(employee));
                break;
            case "Engineer":
                engineerArray.push(createEngineer(employee));
                break;
        }
    }
    return `<!doctype html>
<html lang="en">
  <head>
      <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Employee</title>
  </head>
  <body>
     ${ managerArray.join('') }
     ${ engineerArray.join('') }
     ${ internArray.join('') }
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    
  </body>
</html>`;
}

module.exports = generateHtml;