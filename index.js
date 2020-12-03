var express = require('express');
var hbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname ));

var footer = function (Name)
{
    return Name;
}
app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname +'/views/layouts',
    partialsDir: __dirname +'/views/particals',
    helpers:{
      footer: footer
  }
}));

app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 5000));

//Question3
var data = require('/data.js');
app.get('/Products',function(req,res){
  var products = data.products;
  
  res.locals.Products = products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});
app.get('/Products/Samsung',function(req,res){
  var products = data.products;
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Samsung"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});
app.get('/Products/Panasonic',function(req,res){
  var products = data.products;
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Panasonic"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});
app.get('/Products/Sony',function(req,res){
  var products = data.products;
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Sony"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});



//Question 4
var data = require('/data.js');
var zodiac= data.zodiacs;
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.htm');
})

app.get('/Zodiacs', function(req, res) {
  res.locals.foot = "18127168 - Tran Bui Tai Nhan"

  res.render('index');
});


app.get('/Zodiacs/:id',function(req,res){

  var id =req.params.id ;
  var z = zodiac.find((element)=>{
    return element.name === id;
  })
  res.locals.Zodiac = z;
  res.locals.foot = "18127168 - Tran Bui Tai Nhan"

  res.render('task4');
})

app.listen(app.get('port'),function(){
  console.log("Server is listening on port "+ app.get('port'));
});