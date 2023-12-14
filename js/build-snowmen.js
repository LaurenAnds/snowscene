function drawSnowman(xCentre, yCentre) {
  noStroke();

  //Head
  fill("white");
  circle(xCentre + 0, yCentre + 0, 100);

  //Eyes
  fill("#353b48");
  circle(xCentre - 20, yCentre - 15, 10);
  circle(xCentre + 20, yCentre - 15, 10);

  //Nose
  fill("#ff9a76");
  circle(xCentre + 0, yCentre + 15, 30);

  //Body
  fill("white");
  circle(xCentre + 0, yCentre + 135, 170);
  fill(255, 255, 255);

  //Belly-button
  fill("#353b48");
  circle(xCentre + 0, yCentre + 115, 10);
  circle(xCentre + 0, yCentre + 135, 10);
  circle(xCentre + 0, yCentre + 155, 10);

  //Scarf
  fill("#0984e3");
  rectMode(CENTER);
  rect(xCentre - 20, yCentre + 50, 120, 15, 15);
}

//added in random comment
