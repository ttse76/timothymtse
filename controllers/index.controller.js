/*const { about } = require('../config/about.json');
const { projects } = require('../config/projects.json');*/
const { 
    about, 
    projects, 
    roles 
} = require('../config/config.json'); 


exports.index = (req, res) => {
    return res.render('index', { 
        title: 'Timothy Tse',
        about: about,
        projObj: projects
    });
};
