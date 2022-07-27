const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");


const generateTeam = (teamMembers) => {
    console.log(teamMembers)
    const html = [];
    const generateManagerHTML = (manager) => { 
        console.log(manager)
        let managerHTML = `
            <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
                <div class="card-header bg-primary text-white">
                    <div class="card-header">${manager.name}</h2>
                    <div class="card-header">${manager.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `;
            html.push(managerHTML);
        };

    const generateEngineerHTML = (engineer) => { 
        let engineerHMTL =  `
            <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
                <div class="card-header bg-primary text-white">
                    <div class="card-header">${engineer.name}</h2>
                    <div class="card-header">${engineer.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">Office number: ${engineer.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `;
            html.push(engineerHMTL);

    };

    const generateInternHTML = (intern) => { 
        let internHTML =  `
            <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
                <div class="card-header bg-primary text-white">
                    <div class="card-header">${intern.name}</h2>
                    <div class="card-header"></i>${intern.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">Office number: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        `;
        html.push(internHTML);

    };

    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            generateManagerHTML(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Engineer") {
            generateEngineerHTML(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Intern") {
            generateInternHTML(teamMembers[i]);
        }
    }
    return html.join('');
}



module.exports = teamMembers => {

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
</head>
<body>
    <div class = 'container-fluid'>
        <div class="row">
            <div class="col-12 bg-danger text-white">
                <header class="text-center"> Team Profile Generator </header>
            </div>
        </div>
    </div>
    <div class = 'container'>
        <div class="row">
            <div class="col-12 bg-danger text-white">
                ${generateTeam(teamMembers)}
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
`;

}
