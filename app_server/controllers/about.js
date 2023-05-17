var fs = require('fs');
var aboutMain = JSON.parse(fs.readFileSync('./data/aboutPage/aboutMain.json', 'utf8'));
var aboutMiddle = JSON.parse(fs.readFileSync('./data/aboutPage/aboutMiddle.json', 'utf8'));
var aboutSidebar = JSON.parse(fs.readFileSync('./data/aboutPage/aboutSidebar.json', 'utf8'));
/* GET about view */
const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', aboutMain, aboutMiddle, aboutSidebar});
};

module.exports = {
    about
};