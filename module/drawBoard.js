import { ctx } from "../index.js";
export default function drawBoard(width, height) {
    const boardWidth = width / 10;
    const boardHeight = height / 20;
    if (ctx) {
        ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
        for (let x = 0; x <= 10; x++) {
            ctx.beginPath();
            ctx.moveTo(boardWidth * x, 0);
            ctx.lineTo(boardWidth * x, height);
            ctx.stroke();
        }
        for (let y = 0; y <= 20; y++) {
            ctx.beginPath();
            ctx.moveTo(0, boardHeight * y);
            ctx.lineTo(width, boardHeight * y);
            ctx.stroke();
        }
    }
    return;
}
