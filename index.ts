import drawBoard from "./module/drawBoard.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

drawBoard(canvas.width, canvas.height);

export { ctx };
