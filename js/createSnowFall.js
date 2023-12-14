function snowFall() {
  createSnow();
}

function createSnow() {
  for (let i = 0; i < 100; i++) {
    fill(255, 255, 255, random(50, 255));
    circle(random(10, 790), random(10, 400), random(5, 15));
  }
}
