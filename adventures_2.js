function choose(value) {
    var png = "";
    var message = "";
    var src = srcCheck();
    if (value == 1) {
        switch (src) {
            case('scene0.png'):
                png = 'scene1.png';
                message = 'Your journey begins at a fork in the road.';
                break;
            case('scene1.png'):
                png = 'scene2.png';
                message = 'You have arrived at a cute little house in the woods.';
                break;
            case('scene2.png'):
                png = 'scene4.png';
                message = "Peeking through the window, you see a witch inside the house.";
                break;
            case('scene3.png'):
                png = 'scene7.png';
                message = "Your stare is interrupted by the arrival of a huge troll.";
                break;
            case('scene4.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene7.png'):
                png = 'scene6.png';
                message = "Sorry, you became the troll's tasty lunch.";
                end();
                break;
        }
    } else {
        switch (src) {
            case('scene0.png'):
                png = 'scene1.png';
                message = 'Your journey begins at a fork in the road.';
                break;
            case('scene1.png'):
                png = 'scene3.png';
                message = 'You are standing on the bridge overlooking a peaceful stream.';
                break;
            case('scene2.png'):
                png = 'scene5.png';
                message = "Sorry, a witch lives in the house and you just became part of her stew.";
                end();
                break;
            case('scene3.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene4.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene7.png'):
                png = 'scene8.png';
                end();
                break;
        }
    }
    document.getElementById('kep').src = png;
    if (message != "") {
        alert(message);
    }
}

function end() {
    document.getElementById('gombok').style.display = "none";
    var timer = setTimeout(timeout, 5000);
}

function timeout() {
    document.getElementById('kep').src = 'scene0.png';
    document.getElementById('gombok').style.display = "block";
}