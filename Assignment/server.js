let express = require('express'); // for creating the server
let fetch = require('node-fetch') // for using fetch in node or we can use axios also
const app = express(); 
// let hbs = require('express-handler');
var hbs = require( 'express-handlebars');
var file = require('fs');
app.use(express.json());
let bp=require('body-parser'); 



// *********************************************************************************************  //
/// copied from https://github.com/helpers/handlebars-helper-repeat

const handlebars = require('handlebars');

/// usage of handlerbars
const repeat = require('handlebars-helper-repeat');
handlebars.registerHelper('repeat', repeat);
// regiister with handlerbars  

// 2. register the helper, name it whatever you want
handlebars.registerHelper('repeat', require('handlebars-helper-repeat'));

// 3. register some partials
handlebars.registerPartial('button', '<button>{{text}}</button>');

// 4. use in templates
const fn = handlebars.compile('{{#repeat 2}}{{> button }}{{/repeat}}');

console.log(fn({text: 'Click me!'}));
//=> '<button>Click me!</button><button>Click me!</button>'

// *********************************************************************************************  //


app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());





















const PORT = 3000 || process.env.PORT;

// set all the routes.....
//app.engine('hbs', hbs({extname : 'hbs', defaultLayout : 'layout', layoutsDir : __dirname + '/views/layouts'}));
//app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use('/public',express.static('public')) 



app.get('/api',function(req,res){
    //https://api.myjson.com/bins/lzd08
    fetch('https://api.myjson.com/bins/c0cmg')
    .then(res1 => res1.json())
    .then(data => {console.log(data); res.render("resume",{data})})
    .catch(err=>console.log('error hai bhai'));
})



app.post('/api', function(req, res) {
    const form = {
        'name': req.body.Name,
        'email': req.body.Email,
        'phone': req.body.Phone,
        'message': req.body.Message
    }
    console.log(form);
    file.appendFile('info.txt', JSON.stringify(form), function(err){
        if(err) throw err;
        console.log('Saved');
    });
    res.redirect('/api');
 });



let server = app.listen(PORT,function(){
    console.log(`server just started listening to the ${PORT}`);
});




