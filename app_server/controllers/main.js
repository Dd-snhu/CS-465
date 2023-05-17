var fs = require('fs');
var main = JSON.parse(fs.readFileSync('./data/mainPage/main.json', 'utf8'));
var blog = JSON.parse(fs.readFileSync('./data/mainPage/blog.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('./data/mainPage/testimonials.json', 'utf8'));
var sidebar = JSON.parse(fs.readFileSync('./data/mainPage/sidebar.json', 'utf8'));

/* GET homepage */
const index =(req, res) => {
    res.render('index', {title: 'Travlr Getaways', main, blog, testimonials, sidebar});
};
module.exports = {
    index
};