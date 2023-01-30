

let music = new Audio("Top 50 - Global/"+"Under The Influence"+".mp3");;
let currvalue;
// let myProgressBar = document.getElementById('myProgressBar');
let curindex;
function plays(value,index){
    curindex = index;
    if(value===currvalue){
        return;
    }else{
        currvalue = value;
        // music.src = 'Top 50 - Global/Under The Influence.mp3';
        // music = new Audio("Top 50 - Global/"+value+".mp3");
        music.src = "Top 50 - Global/"+value+".mp3";
        music.addEventListener('timeupdate',()=>{
            // console.log('timeupdate');
            progress = parseInt((music.currentTime/music.duration)*100);
            // console.log(progress);
            myProgressBar.value = progress;
        })
        myProgressBar.addEventListener('change',()=>{
            music.currentTime = myProgressBar.value * music.duration/100;
            // console.log(music.duration);
        })
        // music.play();
        if(music.paused || music.currentTime<=0){
            music.play();
            document.getElementById("play/pause").classList.remove("fa-circle-play");
            document.getElementById("play/pause").classList.add("fa-circle-pause");
        }
    }
    // music.load("Top 50 - Global/"+value+".mp3");
   
}
function songlist(value,index){
    document.getElementById('songname').innerText = value;
    console.log(value);
    // let Songelement = new Audio();
    // Songelement.play();
    plays(value,index);
}

function playsong(){
    var classname = document.getElementById("play/pause").classList.value;
    if(classname==="fa-regular fa-2x fa-circle-play"){
        document.getElementById("play/pause").classList.remove("fa-circle-play");
        document.getElementById("play/pause").classList.add("fa-circle-pause");
        music.play();
    }else{
        document.getElementById("play/pause").classList.remove("fa-circle-pause");
        document.getElementById("play/pause").classList.add("fa-circle-play");
        music.pause();
    }
}

function backward(){
    if(curindex-1===-1){
        var a = document.getElementById(49).innerHTML;
        console.log(a);
        var newindex = 49;
        songlist(a,newindex);
    }else{
        var a = document.getElementById(curindex-1).innerHTML;
        console.log(a);
        var newindex = curindex-1;
        songlist(a,newindex);
    }
}

function forward(){
    if(curindex+1===50){
        var a = document.getElementById(0).innerHTML;
        console.log(a);
        var newindex = 0;
        songlist(a,newindex);
    }else{
        var a = document.getElementById(curindex+1).innerHTML;
        console.log(a);
        var newindex = curindex+1;
        songlist(a,newindex);
    }
}
