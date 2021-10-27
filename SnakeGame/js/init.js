document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN
let score = 0;

let appleX = 10;
let appleY = 15;

let inoshishiX =11;
let inoshishiY = 3;

let outX = 11;
let outY = 4;
