const manager =  `
    <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
        <div class="card-header bg-primary text-white">
            <div class="card-header">${manager.getName()}</h2>
            <div class="card-header">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;


    const engineer =  `
    <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
        <div class="card-header bg-primary text-white">
            <div class="card-header">${engineer.getName()}</h2>
            <div class="card-header">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
    const intern =  `
    <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
        <div class="card-header bg-primary text-white">
            <div class="card-header">${intern.getName()}</h2>
            <div class="card-header"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${intern.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;




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
                <header class="text-center"> </header>
            </div>
        </div>
    </div>
    <div class = 'container'>
        <div class="row">
            <div class="col-12 bg-danger text-white">
                
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
`;

}
module.exports = generateHTML;