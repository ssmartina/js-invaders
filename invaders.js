let player = {
    x: 400,
    y: 580
};

function draw() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = "pink";
    context.fillRect(0, 0, 800, 600);

    context.fillStyle = "white";
    context.font = '48px serif';
    context.fillText("Space Invaders", 10, 50);

    context.fillStyle = "purple";
    context.beginPath();
    context.moveTo(player.x, player.y);
    context.lineTo(player.x - 20, player.y + 20);
    context.lineTo(player.x + 20, player.y + 20);
    context.fill();
}

function setup() {
    draw();
}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            player.x -= 10;
            break;
        case "ArrowRight":
            player.x += 10;
            break;
        case "ArrowUp":
            player.y -= 10;
            break;
        case "ArrowDown":
            player.y += 10;

    }
    draw();
}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);