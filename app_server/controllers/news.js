var fs = require('fs');
var newsPage = JSON.parse(fs.readFileSync('./data/newsPage/news.json', 'utf8'));
var latestNews = JSON.parse(fs.readFileSync('./data/newsPage/latestNewsLinks.json', 'utf8'));
var vacTips = JSON.parse(fs.readFileSync('./data/newsPage/vacTipsLinks.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways',newsPage, latestNews, vacTips});
};

module.exports = {
    news
};