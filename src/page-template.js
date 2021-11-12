module.exports = templateData => {
    
    //destructure projects and about data from templateData based on their property key names
    //this will create three variables based on data in templateData
    
    // const header = {
    //     name: templateData.name,
    //     github: templateData.github
    //   };

    const { projects, about, ...header } = templateData;
    console.log(projects);
    console.log(about);
    console.log(header);
    
    console.log(templateData);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    </head>

    <body>
    <h1>${templateData.name}</h1>
    <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
    </body>
    </html>
    `;
};

