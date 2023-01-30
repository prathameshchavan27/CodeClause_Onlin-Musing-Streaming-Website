const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var songs = [{"name":"AMG","no":0},{"name":"Another Love","no":1},{"name":"Anti-Hero","no":2},{"name":"As it Was","no":3},{"name":"Bad Habit","no":4},{"name":"Bebe Dame","no":5},{"name":"Bloody Mary","no":6},
{"name":"Bones","no":7},{"name":"Calm Down","no":8},{"name":"Creepin","no":9},{"name":"DESPECHÁ","no":10},{"name":"Die For You","no":11},{"name":"Ditto","no":12},{"name":"Escapism","no":13},{"name":"Feliz Cumpleaños Ferxxo","no":14},
{"name":"Flowers","no":15},{"name":"Gato de Noche","no":16},{"name":"Golden hour","no":17},{"name":"Here With Me","no":18},{"name":"Hey Mor","no":19},{"name":"I Ain't Worried","no":20},{"name":"I Wanna Be Yours","no":21},
{"name":"I'm Good","no":22},{"name":"Kill Bill","no":23},{"name":"La Bachata","no":24},{"name":"La Jumpa","no":25},{"name":"Leão","no":26},{"name":"LET GO","no":27},{"name":"Made You Look","no":28},{"name":"Me Porto Bonito","no":29},{"name":"Miss You","no":30},
{"name":"Mocking bird","no":31},{"name":"Monotonía","no":32},{"name":"Nonsense","no":33},{"name":"OMG","no":34},{"name":"PUNTO G","no":35},{"name":"Que Vuelvas","no":36},{"name":"Quevedo:Bzrp Music Sessions, Vol. 52","no":37},
{"name":"Rich Flex","no":38},{"name":"Romantic Homicide","no":39},{"name":"Shakira: Bzrp Music Sessions, Vol. 53","no":40},{"name":"SNAP","no":41},{"name":"Superhero (Heroes and Villains)","no":42},
{"name":"Sure Thing","no":43},{"name":"Sweater Weather","no":44},{"name":"Tití Me Preguntó","no":45},{"name":"Under The Influence","no":46},{"name":"Unholy (feat. Kim Petras)","no":47},
{"name":"Until I Found You","no":48},{"name":"Yandel 150","no":49}
]

var song = {
    File:"images/ncs.png"
}

app.get("/",function(req,res){
    res.render("home",{songs:songs});
});

app.get("/music",function(req,res){
    // res.render("header",{songs:songs});
    res.render("music",{songs:songs,Song:song,playlistname:"Top 50 - Global"});
});

app.post("/music",function(req,res){
    var playlistname = req.body.playlist;
    console.log(playlistname);
    res.render("music",{songs:songs,Song:song,playlistname:playlistname});
});

app.listen(3000,function(req,res){
    console.log("Listening on port 3000");
});