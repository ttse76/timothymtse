const { projects } = require('../config/projects.json');
const { about } = require('../config/about.json');

exports.index = (req, res) => {
    return res.render('index', { 
        title: 'Timothy Tse',
        about: about,
        projObj: projects
    });
};
