var fs = require('fs');
var contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways',contacts});
};

module.exports = {
    contact
};