const projects = require('../config/projects.json');

exports.index = (req, res) => {
    return res.render('index', { 
        title: 'Timothy Tse',
        projObj: projects
    });
};
