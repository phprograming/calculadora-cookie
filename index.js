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
    res.render('index', {
        conta: req.cookies
    });
});

app.post('/calc', (req, res) => {
    const { num1, num2, op } = req.body;

    let total = 0;

    if(op === '+'){

        total = num1 + num2;
    }else if(op === '-'){

        total = num1 - num2;
    }else if(op === '*'){
        
        total = num1 * num2; 
    }else if(op === '/'){

        total = num1 / num2;
    }

    res.cookie('conta', {
        num1, num2, op, total
    });

    res.redirect('/');
});

app.listen(port, () => console.log('loading...'));
