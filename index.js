const Canvas = require("canvas");
function ship(image1, image2, user1, user2){
    if (!image1) throw new Error('first image was not provided!');
    if (!image2) throw new Error('second image was not provided!');
    if (!user1) throw new Error('first name was not provided!');
    if (!user2) throw new Error('second name was not provided!');


    const canvas = Canvas.createCanvas(1200, 560);
    const ctx = canvas.getContext("2d");
    let bg = await Canvas.loadImage(__dirname + '/assets/shipback.png');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    let love = Math.floor(Math.random() * 100) + 1;
    const first_length = Math.round(user1 / 2);
    const first_half = user1.slice(0, first_length);
    const second_length = Math.round(user2 / 2);
    const second_half = user2.slice(second_length);
    const final_name = first_half + second_half;
    let vacio = "‎      ‎      ‏‏‎‎      ‏‏‎‎ ‎      ‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‏‏‎    ‏‏‎‏‏‎";
    if (final_name === null)
      final_name = `${user1}${user2}`;

    const avatar1 = await loadImage(image1);
    let size = 220 + love;
    let size2 = 50 + love/5;
    const avatar2 = await loadImage(image2);
    const heart = await loadImage(__dirname + '/assets/heart.png');

    ctx.drawImage(avatar1, 50, 0, 480, 500);
    ctx.drawImage(avatar2, 720, 0, 480, 500);
    ctx.lineWidth = 1;
	ctx.strokeStyle = color;
    ctx.strokeRect(50, 0, 480, 500);
    ctx.strokeRect(720, 0, 480, 500);
    ctx.drawImage(heart, (canvas.width-size)/2 + 25, (canvas.height-size)/2 -25, size, size);

    ctx.font = `bold ${size2}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${love}%`, 625, 260);

    ctx.font = "bold 45px Sans";
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    await fillTextWithTwemoji(ctx, `${loveLevel}`, 360, 545);

    return canvas.toBuffer();
}

module.exports.canvadion = canvadion;
