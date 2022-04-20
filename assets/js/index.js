
const defaultWidth = '60%';
const firstImage = 'assets/img/cabezas.png'
const secondImage = 'assets/img/solo_letras.png';

function randomMoves(duration) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration,
        elasticity: 100,
        loop: true
    });

    timeline
    // .add({
    //     targets: '#logo',
    //     width: defaultWidth,
    //     // filter: 'blur(2px)',
    // })
    .add({
        targets: '#logo',
        changeComplete: ()=>{
            document.getElementById('logo').src = secondImage;
        }
    })
    .add({
        targets: '#logo',
        rotate: 360,
        width: '80%'
    })
    .add({
        targets: '#logo',
        width: defaultWidth,
        changeComplete: ()=>{
            document.getElementById('logo').src = firstImage;
        }
    })
    .add({
        targets: '#logo',
        rotate: -360,
    })
}

randomMoves(2000);