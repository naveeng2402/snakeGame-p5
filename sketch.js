/// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />

const SEGMENT_SIZE = 20;
const SEGMENTS_NO = 20;

let velocityX = 0;
let velocityY = 0;
let snakeHeadX = 0;
let snakeHeadY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeHeadX = windowWidth / 2 / SEGMENT_SIZE;
  snakeHeadY = windowHeight / 2 / SEGMENT_SIZE;
  frameRate(10);
}

function draw() {
  background(220);

  snakeHeadX += velocityX;
  snakeHeadY += velocityY;
  withinBoundary();
  rect(
    snakeHeadX * SEGMENT_SIZE,
    snakeHeadY * SEGMENT_SIZE,
    SEGMENT_SIZE,
    SEGMENT_SIZE
  );
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    velocityX = 0;
    velocityY = -1;
  }
  if (keyCode == DOWN_ARROW) {
    velocityX = 0;
    velocityY = 1;
  }
  if (keyCode == LEFT_ARROW) {
    velocityX = -1;
    velocityY = 0;
  }
  if (keyCode == RIGHT_ARROW) {
    velocityX = 1;
    velocityY = 0;
  }
}

function withinBoundary() {
  if (snakeHeadX < 0) {
    snakeHeadX = windowWidth / SEGMENT_SIZE;
  }
  if (snakeHeadY < 0) {
    snakeHeadY = windowHeight / SEGMENT_SIZE;
  }
  if (snakeHeadX > windowWidth / SEGMENT_SIZE) {
    snakeHeadX = 0;
  }
  if (snakeHeadY > windowHeight / SEGMENT_SIZE) {
    snakeHeadY = 0;
  }
}
