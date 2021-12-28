console.log("Welcome to spotify clone");
//Initialize the variables
let index=1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"Balam-Pichakari", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"Balam-Pichakari", filepath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]
 

//audioElement.play();
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Listen to events
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timestamp');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})


const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', (e)=>{
    if(index>=4){
        index=1;
    }
    else{
        index+=1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', (e)=>{
    if(index==1){
        index=4;
    }
    else{
        index-=1;
       
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})