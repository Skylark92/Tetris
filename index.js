import drawBoard from "./module/drawBoard.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
drawBoard(canvas.width, canvas.height);
export { ctx };
