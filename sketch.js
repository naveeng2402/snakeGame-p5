/// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />

const SEGMENT_SIZE = 20;
const SEGMENTS_NO = 20;

let velocityX = 0;
let velocityY = 0;
let snakeHeadX = 0;
let snakeHeadY = 0;
let snakeTailLength = 2;
let snakeTail = [];
let fruitX = 0;
let fruitY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  snakeHeadX = windowWidth / 2 / SEGMENT_SIZE;
  snakeHeadY = windowHeight / 2 / SEGMENT_SIZE;

  fruitX = floor(random(0, windowWidth / SEGMENT_SIZE));
  fruitY = floor(random(0, windowHeight / SEGMENT_SIZE));

  frameRate(10);
}

function draw() {
  background(220);

  while (snakeTail.length >= snakeTailLength) snakeTail.shift();

  snakeTail.push({ x: snakeHeadX, y: snakeHeadY });
  snakeTail.forEach((block) => {
    rect(
      block.x * SEGMENT_SIZE,
      block.y * SEGMENT_SIZE,
      SEGMENT_SIZE,
      SEGMENT_SIZE
    );
  });

  fill(255, 0, 0);
  rect(
    fruitX * SEGMENT_SIZE,
    fruitY * SEGMENT_SIZE,
    SEGMENT_SIZE,
    SEGMENT_SIZE
  );

  fill(255);

  snakeHeadX += velocityX;
  snakeHeadY += velocityY;
  withinBoundary();
  if (
    snakeHeadX >= fruitX &&
    snakeHeadX < fruitX + SEGMENT_SIZE &&
    snakeHeadY >= fruitY &&
    snakeHeadY < fruitY + SEGMENT_SIZE
  ) {
    snakeTailLength++;
    fruitX = floor(random(0, windowWidth / SEGMENT_SIZE));
    fruitY = floor(random(0, windowHeight / SEGMENT_SIZE));
  }
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
