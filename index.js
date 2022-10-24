const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const categories = require('./categories.json')
const news = require('./news.json');


app.get('/', (req, res) => {
    res.send('news api running')
});
app.get('/news-categories', (req, res) => {
    res.send(categories)
});
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = news.find(n => n._id === id);
    res.send(selectedId);
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {

        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
});
app.get('/news', (req, res) => {
    res.send(news)
})
app.listen(port, () => {
    console.log('news', port)
})

module.exports = app;