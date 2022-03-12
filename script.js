console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
{songName: "Ishq Mubarak", filepath: "1.mp3", coverpath:"covers/1.jpg"},
{songName: "Filhaal 2 Mohabbat", filepath: "2.mp3", coverpath:"covers/2.jpg"},
{songName: "Jann Gann Mann", filepath: "3.mp3", coverpath:"covers/3.jpg"},
{songName: "Chand Sifarish", filepath: "4.mp3", coverpath:"covers/4.jpg"},
{songName: "Cielo", filepath: "5.mp3", coverpath:"covers/5.jpg"},
{songName: "Tu Jo Mila", filepath: "6.mp3", coverpath:"covers/6.jpg"},
{songName: "Phir Chala", filepath: "7.mp3", coverpath:"covers/7.jpg"},
{songName: "Chand Se Parda Kijiye", filepath: "8.mp3", coverpath:"covers/8.jpg"},
{songName: "Tujhse Naraaz Nahin Zindagi", filepath: "9.mp3", coverpath:"covers/9.jpg"},
{songName: "Main Dhoondne Ko Zamaane ", filepath: "10.mp3", coverpath:"covers/10.jpg"},


]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

 
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;


    }
})
//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
