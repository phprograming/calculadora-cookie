const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calc', (req, res) => {
    const { num1, num2, op } = req.body;

    let total = 0;

    if(op === '+'){

    }

    res.redirect('/');
});

app.listen(port, () => console.log('loading...'));
