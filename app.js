var img = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    img3 = document.getElementById('img3'),
    flares = document.getElementById('flares'),
    flare1 = document.getElementById('flare1'),
    flare2 = document.getElementById('flare2'),
    flare3 = document.getElementById('flare3'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    gemasDiv = document.getElementById('gemasDiv'),
    gemas = document.getElementById('gemas'),
    points = document.getElementById('points'),
    points1 = document.getElementById('points1'),
    points2 = document.getElementById('points2'),
    points3 = document.getElementById('points3'),
    score = document.getElementById('score'),
    cerrarPopup = document.getElementById('overlay');

img.onclick = function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    img2.classList.add('filterBn');
    img3.classList.add('filterBn');
    img2.style.pointerEvents = 'none';
    img3.style.pointerEvents = 'none';
    gemasDiv.classList.add('padding1');
    gemas.classList.add('anim');
    flare2.classList.add('skip');
    flare3.classList.add('skip');
    points1.classList.add('skippoints')
}

img2.onclick = function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    img1.classList.add('filterBn')
    img3.classList.add('filterBn')
    img1.style.pointerEvents = 'none';
    img3.style.pointerEvents = 'none';
    gemasDiv.classList.add('padding2');
    gemas.classList.add('anim');
    flare1.classList.add('skip');
    flare3.classList.add('skip');
    points2.classList.add('skippoints')
}

img3.onclick = function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    img1.classList.add('filterBn')
    img2.classList.add('filterBn')
    img1.style.pointerEvents = 'none';
    img2.style.pointerEvents = 'none';
    gemasDiv.classList.add('padding3');
    gemas.classList.add('anim');
    flare1.classList.add('skip');
    flare2.classList.add('skip');
    points3.classList.add('skippoints')
}

overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

;

var score = { count: 0, };

anime({
    targets: score,
    count: 30000,
    easing: 'linear',
    round: 1,
    duration: 3000,

    update: function() {
        var total = document.querySelector('.rew');
        total.innerHTML = score.count;
    },
})

var granimInstance = new Granim({
    element: '#sub2',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});