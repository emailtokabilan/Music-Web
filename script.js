$(".album-poster").on('click',function(e) {
    var dataSwitchId = $(this).attr('data-switch');
    

    ap.list.switch(dataSwitchId);

    ap.play();

    $("#aplayer").addClass('showPlayer');
   
});










const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
        name: 'Vilayadu Mangatha',
        composer: 'U1',
        url: 'songs/u1/Vilayadu Mangatha.mp3',
        cover: './images/u.jpg'
       
    },   
    {
        name: 'Balle Lakka',
        composer: 'U1',
        url: 'songs/u1/Balle Lakka.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Billa 2 Theme Music',
        composer: 'U1',
        url: 'songs/u1/Billa 2 Theme Music.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Machi Open The Bottle ',
        composer: 'U1',
        url: 'songs/u1/Machi Open The Bottle.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Yedho Mayakkam ',
        composer: 'U1',
        url: 'songs/u1/Yedho Mayakkam.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Nanbane',
        composer: 'U1',
        url: 'songs/u1/Nanbane.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Aathadi Manasudhan ',
        composer: 'U1',
        url: 'songs/u1/Aathadi Manasudhan .mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Edhirthu Nil ',
        composer: 'U1',
        url: 'songs/u1/Edhirthu Nil.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Engirunthai Naan Mannil',
        composer: 'U1',
        url: 'songs/u1/Engirunthai Naan Mannil.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Konjum Kili',
        composer: 'U1',
        url: 'songs/u1/Konjum Kili.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Rasathi Pola ',
        composer: 'U1',
        url: 'songs/u1/Rasathi Pola .mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Run For your Life ',
        composer: 'U1',
        url: 'songs/u1/Run For your Life .mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Sudasuda Thooral  ',
        composer: 'U1',
        url: 'songs/u1/Sudasuda Thooral.mp3',
        cover: './images/u.jpg'  
    },
    {
        name: 'Yakkai_Thiri ',
        composer: ' A. R. Rahman ',
        url: 'songs/ar/Yakkai_Thiri.mp3',
        cover: './images/ar.jpg'  
      
    },
    {
        name: 'Senthoora_Poove  ',
        composer: 'Ilaiyaraja',
        url: 'songs/ilai/Senthoora_Poove.mp3',
        cover: './images/ila.jpg'  
    },  {
        name: 'Mudhal_Mazhai  ',
        composer: 'Harris Jayaraj',
        url: 'songs/harris/Mudhal_Mazhai.mp3',
        cover: './images/ha.jpg'  
    },
    {
        name: 'Ragasiya_Kanavugal  ',
        composer: 'Harris Jayaraj',
        url: 'songs/harris/Ragasiya_Kanavugal.mp3',
        cover: './images/ha.jpg'  
    },  {
        name: 'Oh_Eesa_  ',
        composer: 'G.V. Prakash Kumar',
        url: 'songs/gv/Oh_Eesa_.mp3',
        cover: './images/gv.jpg'  
    },
    {
        name: 'Un_Mela_Aasadhaan  ',
        composer: 'G.V. Prakash Kumar',
        url: 'songs/gv/Un_Mela_Aasadhaan.mp3',
        cover: './images/gv.jpg'  
    },
   
]

 



});


