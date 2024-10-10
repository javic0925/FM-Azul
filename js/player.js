$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://c15.radioboss.fm:18449/stream';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://c15.radioboss.fm:18449/stream'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('src') == './assets/Icons/Play.svg')
            $('#playback').attr('src', './assets/Icons/Pause.svg');
        else
            $('#playback').attr('src', './assets/Icons/Play.svg');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://c15.radioboss.fm:18449/stream');
        song.currentTime = 0;
        $('#playback').attr('src', './assets/Icons/Play.svg');
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "FM AZUL Radio",
      artist: "Innovamos para ti",
      album: "Radio",
      artwork: [{src: "https://fmazulradio.app/assets/Icons/FMAzulRadioM.png"}]
    });}
