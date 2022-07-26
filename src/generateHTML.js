const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const teamMembers = require("../index");


const generateManagerHTML = (Manager) => { 
`
    <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
        <div class="card-header bg-primary text-white">
            <div class="card-header">${Manager.name}</h2>
            <div class="card-header">${Manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};

const generateEngineerHTML = (Engineer) => { 
`
<div class="card employee-card shadow p-3 mb-5 bg-body rounded">
    <div class="card-header bg-primary text-white">
        <div class="card-header">${Engineer.name}</h2>
        <div class="card-header">${Engineer.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
            <li class="list-group-item">Office number: ${Engineer.officeNumber}</li>
        </ul>
    </div>
</div>
`;

};

const generateInternHTML = (Intern) => { 
`
<div class="card employee-card shadow p-3 mb-5 bg-body rounded">
    <div class="card-header bg-primary text-white">
        <div class="card-header">${Intern.name}</h2>
        <div class="card-header"></i>${Intern.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
            <li class="list-group-item">Office number: ${Intern.officeNumber}</li>
        </ul>
    </div>
</div>
`;

};

function generateTeam(teamMembers) {
    let html = "";
    for (i = 0; i < teamMembers.length; i++) {
        if(teamMembers[i] instanceof Manager) {
        html = html.concat(generateManagerHTML(teamMembers[i]));
        }
        else if(teamMembers[i] instanceof Engineer) {
        html = html.concat(generateEngineerHTML(teamMembers[i]));
        }
        else if(teamMembers[i] instanceof Intern) {
        html = html.concat(generateInternHTML(teamMembers[i]));
        };
    };
    return html;
};



function generateHTML(teamMembers) { 

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
module.exports = generateHTML;