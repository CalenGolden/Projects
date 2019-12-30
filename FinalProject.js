//intro varibales
var moveSpeed, counter;
var wordsAppear, wordsAppear2, wordsAppear3, wordsAppear4, wordsAppear5, wordsAppear6;
var wordsAppear7, wordsAppear8, wordsAppear9, wordsAppear10, wordsAppear11, wordsAppear12, wordsAppear13;
var firstTrans, secondTrans, thirdTrans, fourthTrans, fifthTrans;
var sixthTrans, seventhTrans;
var waterHeight = fireHeight = airHeight = earthHeight = 180;
var waterMove = fireMove = airMove = earthMove = .1;
var intro = true;
var elementSelection = false;
var water = false;
var earth = false;
var fire = false;
var air = false;
var winner = false;
var waterNumber = 0;
var earthNumber = 0;
var fireNumber = 0;
var airNumber = 0;

//water variables
var waterX = [];
var waterY = [];
var waterdX = [];
var waterdY = [];
var waterCount;
var waterColorR = [];
var waterColorG = [];
var waterColorB = [];
var waterColorAlp = [];
var explode = [];
var fillCol;

//earth variables
var jump = false;
var animate = false;
var Ax = 90;
var Ay = 300;
var dAy = -1;
var Rx = 420;
var RxChange = 1;
var Ry = 300;
var countR = 0;

var Cx = 300;
var Cy = 200;
var Cx2 = 100;
var Cy2 = 130;

var animate = true;
var legR;
var legFor = false;

//fire varibles
var clicker = 0;
var flameRot = 0;
var rotation = .02;

//air variables
var r1 = 66;
var g1 = 134;
var b1 = 244;
var t1 = 255;

var r2 = 66;
var g2 = 134;
var b2 = 244;
var t2 = 255;

var r3 = 66;
var g3 = 134;
var b3 = 244;
var t3 = 255;

var spiral1color;
var spiral2color;
var spiral3color;

var spiral1rot;
var spiral2rot;
var spiral3rot;

var spiral1 = false;
var spiral2 = false;
var spiral3 = false;

var pos = 25;

function preload(){

	img = loadImage("AvatarWaterbending.jpg");
	img2 = loadImage("AvatarEarthbending.jpg");
   	img3 = loadImage("AvatarFirebending.jpg");
   	img4 = loadImage("AvatarAirbending.jpg");
   	img5 = loadImage("avatarStateManipulation.png");

}

function setup(){

	createCanvas(400, 400);

	noStroke();

	//intro

	wordsAppear = 20;
	wordsAppear2 = 20;
	wordsAppear3 = 20;
	wordsAppear4 = 20;
	wordsAppear5 = 20;
	wordsAppear6 = 20;
	moveSpeed = 3;
	counter = 0;

	firstTrans = 255;
	secondTrans = 0;
	thirdTrans = 0;
	fourthTrans = 0;
	fifthTrans = 0;
	sixthTrans = 0;
	seventhTrans = 0;

	//water

	img.loadPixels();

	waterCount = 10;
	
	for(var i=0; i < waterCount; i++){

		waterX.push(random(25, width - 25));
		waterY.push(random(25, height - 25));
		waterdX.push(random(-3,3));
		waterdY.push(random(-3,3));
		waterColorR.push(0);
		waterColorG.push(0);
		waterColorB.push(255);
		waterColorAlp.push(255);

	}

	wordsAppear9 = 20;
	wordsAppear10 = 20;
	wordsAppear11 = 20;

	//earth

	img2.loadPixels();

	legR = -PI/6;

	wordsAppear12 = 20;
	wordsAppear13 = 20;

	//fire

	img3.loadPixels();

	wordsAppear5 = 20;
	wordsAppear6 = 20;

	//air

	img4.loadPixels();

	spiral1rot = 0;
	spiral2rot = PI/2;
	spiral3rot = 4.413;

	wordsAppear7 = 20;
	wordsAppear8 = 20;

	//outro

	img5.loadPixels();

}


function draw(){

	background(128);
	
	if(intro){

		background(128);

		wordsAppear14 = 20;
		wordsAppear15 = 20;

		fill(0);
		rect(0, 320, 400, 80);

		noStroke();

		textSize(15);
		fill(255, 255, 255, firstTrans);
		text("  Water...            Earth...              Fire...               Air...", 20, 355);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		if(counter == 300){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 255;
			thirdTrans = 0;

		}

		textSize(15);
		fill(255, 255, 255, secondTrans);
		text("Long ago, the four nations lived together in harmony...", 20, 355);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);


		if(counter == 600){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 0;
			thirdTrans = 255;

		}

		textSize(15);
		fill(255, 255, 255, thirdTrans);
		text("then everything changed when the Fire Nation", 20, 355);
		text("attacked.", 20, 375);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		if(counter == 900){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 0;
			thirdTrans = 0;
			fourthTrans = 255;

		}

		textSize(15);
		fill(255, 255, 255, fourthTrans);
		text("Only the avatar, master of all four elements could", 20, 355);
		text("stop them...", 20, 375)

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		if(counter == 1200){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 0;
			thirdTrans = 0;
			fourthTrans = 0;
			fifthTrans = 255;

		}

		textSize(15);
		fill(255, 255, 255, fifthTrans);
		text("but when the world needed him most,", 20, 355);
		text("he vanished...", 20, 375);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		if(counter == 1500){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 0;
			thirdTrans = 0;
			fourthTrans = 0;
			fifthTrans = 0;
			sixthTrans = 255;


		}

		textSize(15);
		fill(255, 255, 255, sixthTrans);
		text("Help Aang master all four elements before Sozin's", 20, 355);
		text("comet arrives and the firelord becomes too strong!", 20, 375);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		if(counter == 1800){

			wordsAppear = 20;
			wordsAppear2 = 20;
			firstTrans = 0;
			secondTrans = 0;
			thirdTrans = 0;
			fourthTrans = 0;
			fifthTrans = 0;
			sixthTrans = 0;
			seventhTrans = 255;

		}

		textSize(15);
		fill(255, 255, 255, seventhTrans);
		text("Select the element you would like to master first!", 20, 355);

		fill(0);
		rect(wordsAppear, 340, 380, 20);
		rect(wordsAppear2, 360, 400, 20);

		wordsAppear += moveSpeed;
		
		if(wordsAppear > 400){

			wordsAppear2 += moveSpeed;

		}

		counter ++;

		drawWater(50, waterHeight);

		waterHeight += waterMove;

		if(waterHeight <= 175){

			waterMove = -waterMove;

		}

		if(waterHeight >= 185){

			waterMove = -waterMove;

		}

		drawFire(250, fireHeight, 1, color(255, 128, 0));
		drawFire(250, fireHeight + 12, .6, 255);

		fireHeight += fireMove;

		if(fireHeight <= 175){

			fireMove = -fireMove;

		}

		if(fireHeight >= 185){

			fireMove = -fireMove;

		}

		drawAir(350, airHeight);

		airHeight += airMove;

		if(airHeight <= 175){

			airMove = -airMove;

		}

		if(airHeight >= 185){

			airMove = -airMove;

		}

		drawEarth(150, earthHeight - 15, .5);

		earthHeight += earthMove;

		if(earthHeight <= 175){

			earthMove = -earthMove;

		}

		if(earthHeight >= 185){

			earthMove = -earthMove;

		}

		drawPillar(50, 280);
		drawPillar(150, 280);
		drawPillar(250, 280);
		drawPillar(350, 280);

	}

	if(elementSelection){

		background(128);

		fill(0);
		rect(0, 320, 400, 80);

		textSize(15);
		fill(255);
		text("Select the element you would like to master next!", 20, 355);

		drawWater(50, waterHeight);

		waterHeight += waterMove;

		if(waterHeight <= 175){

			waterMove = -waterMove;

		}

		if(waterHeight >= 185){

			waterMove = -waterMove;

		}

		drawFire(250, fireHeight, 1, color(255, 128, 0));
		drawFire(250, fireHeight + 12, .6, 255);

		fireHeight += fireMove;

		if(fireHeight <= 175){

			fireMove = -fireMove;

		}

		if(fireHeight >= 185){

			fireMove = -fireMove;

		}

		drawAir(350, airHeight);

		airHeight += airMove;

		if(airHeight <= 175){

			airMove = -airMove;

		}

		if(airHeight >= 185){

			airMove = -airMove;

		}

		drawEarth(150, earthHeight - 15, .5);

		earthHeight += earthMove;

		if(earthHeight <= 175){

			earthMove = -earthMove;

		}

		if(earthHeight >= 185){

			earthMove = -earthMove;

		}

		drawPillar(50, 280);
		drawPillar(150, 280);
		drawPillar(250, 280);
		drawPillar(350, 280);

		wordsAppear3 = 20;
		wordsAppear4 = 20;

	}

	if(water){

		background(128);

		fill(0);
		text("Click all the water droplets", 20, 20);

		for(var i = 0; i < waterCount; i++){

			fill(0, 0, 225);
			drawWaterdrop(waterX[i], waterY[i], 1, waterdX[i], waterdY[i], waterColorR[i], waterColorG[i], waterColorB[i], waterColorAlp[i]);

			waterX[i] += waterdX[i];
			waterY[i] += waterdY[i];

			if(waterX[i] > width - 24 || waterX[i] < 24){

				waterdX[i] = -waterdX[i];

			}

			if(waterY[i] > height - 24 || waterY[i] < 24){

				waterdY[i] = -waterdY[i];

			}

		}

		for(var i = 0; i < explode.length; i++){

   			explode[i].run();

   		}

		if(waterColorAlp[0] == 0 && waterColorAlp[1] == 0 && waterColorAlp[2] == 0 && waterColorAlp[3] == 0 && waterColorAlp[4] == 0 && waterColorAlp[5] == 0 && waterColorAlp[6] == 0 && waterColorAlp[7] == 0 && waterColorAlp[8] == 0 && waterColorAlp[9] == 0){

			image(img, 0, 0, width, height);

			fill(0);
			rect(0, 320, 400, 80);
			textSize(15);
			fill(255);
			text("Congratulations, you have mastered Water Bending!", 20, 345);
			text("Remember to redirect your opponents' energy ", 20, 365);
			text("to use it against them.", 20, 385);

			fill(0);
		    rect(wordsAppear9, 330, 380, 20);
		    rect(wordsAppear10, 350, 400, 20);
		    rect(wordsAppear11, 370, 400, 20);

		    wordsAppear9 += moveSpeed;

		    if(wordsAppear9 > 400){

				wordsAppear10 += moveSpeed;

			}

			if(wordsAppear10 > 400){

				wordsAppear11 += moveSpeed;

			}

			if(wordsAppear11 > 600){

				water = false;
				elementSelection = true;

			}

		}

	}

	if(earth){

		background(176, 224, 230);

		fill(34, 139, 34);
		rect(0, 320, 400, 80);

		text("Once you reach a score of 3, you win!", 20, 20);
		text("Press the SPACE BAR to jump the rocks.", 20, 40);
		text("SCORE: " + countR, 20, 60);

		drawRock(Rx, Ry, .5);
   		Rx -= RxChange;

   		if(Rx < -65){

      		Rx = 420;

   		}

   		if(Rx == 90){

      		countR++;

   		}

   		drawCloud(Cx, Cy, 1.5);
   		Cx--;

   		if(Cx < -180){

      		Cx = 600;

   		}

		drawCloud(Cx2, Cy2, 1);
   		Cx2--;

   		if(Cx2 < -65){

      		Cx2 = 500;

   		}



   		drawAang(Ax, Ay, 1);

		// jump

   		if(jump){

      		Ay = Ay + dAy; 
      
      		if(Ay <= 200){

         		dAy = -dAy;

      		}

      		if(Ay == 301){

         		Ay = Ay - 1;
         		dAy = -dAy;
         		jump = false;

      		}
      
   		}

		if(animate){

  			moveAang();

		}

		if(Ry == Ay && Ax > Rx - 60 && Ax < Rx + 60){
   
   			countR = 0;

		}

		if(countR >= 3 && Ay >= 295){

			RxChange = 0;
			Rx += 50;

   			image(img2, 0, 0, width, height);

   			fill(0);
   			rect(0, 320, 400, 80);

   			textSize(15);
   			fill(255);
   			text("Congratulations, you have mastered earth bending!", 20, 355);
   			text("Be like the earth, straightforward and strong.", 20, 375);

   			fill(0);
		    rect(wordsAppear12, 340, 380, 20);
		    rect(wordsAppear13, 360, 400, 20);

		    wordsAppear12 += moveSpeed;

		    if(wordsAppear12 > 400){

				wordsAppear13 += moveSpeed;

			}

			if(wordsAppear13 > 600){

				earth = false;
				elementSelection = true;

			}

		}

	}

	if(fire){

		background(128);

		fill(0);
		text("Click the screen really fast to make the flame grow.", 20, 20);

		if(clicker >= 50){

	      	drawFlame(200, 200, 4, flameRot, color(0, 0, 255));
	      	drawFlame(200, 200, 3.5, flameRot, color(128, 0, 128));
	      	drawFlame(200, 200, 3, flameRot, color(128, 0, 60));
	      	drawFlame(200, 200, 2.5, flameRot, color(255, 0, 0));
	     	drawFlame(200, 200, 2, flameRot, color(255, 128, 0));

	   	}

	   	if(clicker >= 40){

	      	drawFlame(200, 200, 3.5, flameRot, color(128, 0, 128));
	      	drawFlame(200, 200, 3, flameRot, color(128, 0, 60));
	      	drawFlame(200, 200, 2.5, flameRot, color(255, 0, 0));
	      	drawFlame(200, 200, 2, flameRot, color(255, 128, 0));

	   	}

	   	if(clicker >= 30){

	      	drawFlame(200, 200, 3, flameRot, color(128, 0, 60));
	      	drawFlame(200, 200, 2.5, flameRot, color(255, 0, 0));
	      	drawFlame(200, 200, 2, flameRot, color(255, 128, 0));

	  	}

	   	if(clicker >= 20){

	     	drawFlame(200, 200, 2.5, flameRot, color(255, 0, 0));
	      	drawFlame(200, 200, 2, flameRot, color(255, 128, 0));

	   	}

	   	if(clicker >= 10){

	      	drawFlame(200, 200, 2, flameRot, color(255, 128, 0));

	   	}

	   	drawFlame(200, 200, 1.5, flameRot, color(255, 255, 0));
	   	drawFlame(200, 215, 1, flameRot,  255);

	   	flameRot += rotation;

	   	if(flameRot > .3){

	      	rotation = -rotation;

	   	}

	   	if(flameRot < -.3){

	      	rotation = -rotation;

	   	}

	   	if(clicker >= 60){

	      	image(img3, 0, 0, width, height);

		    fill(0);
		    rect(0, 320, 400, 80);

		    textSize(15);
		    fill(255);
		    text("Congratulations, you have mastered fire bending!", 20, 355);
		    text("Remember Aang, fire is life, not destruction.", 20, 375);

		    fill(0);
		    rect(wordsAppear5, 340, 380, 20);
		    rect(wordsAppear6, 360, 400, 20);

		    wordsAppear5 += moveSpeed;

		    if(wordsAppear5 > 400){

				wordsAppear6 += moveSpeed;

			}

			if(wordsAppear6 > 600){

				fire = false;
				elementSelection = true;

			}
		   	
		    counter ++;

	   	}

	}

	if(air){

		background(128);

		fill(0);
		text("Click and drag the mouse, hold down the ", 20, 20);
		text("RIGHT ARROW, and scroll down the page.", 20, 40);

		spiral1color = color(r1, g1, b1, t1);
		spiral2color = color(r2, g2, b2, t2);
		spiral3color = color(r3, g3, b3, t3);

		push();

			fill(spiral1color);
			translate(125,150)
			rotate(spiral1rot);
			airSpiral(0,0);

		pop();

		push();

			fill(spiral2color);
			translate(275,150)
			rotate(spiral2rot);
			airSpiral(0,0);

		pop();

		push();

			fill(spiral3color);
			translate(200,270)
			rotate(spiral3rot);
			airSpiral(0,0);

		pop();

		if(keyIsDown(RIGHT_ARROW)){

			spiral2rot += PI/20;
		    r2 += 2.5;
	    	g2 += 2.5;
	    	b2 += 2.5;
	    	t2 -= 3.35;
	   
	    	if(r2 >= 250){

	    		spiral2 = true;


	    	}

		}

		if(spiral1 == true && spiral2 == true && spiral3 == true){

			image(img4, 0, 0, width, height);

			fill(0);
		    rect(0, 320, 400, 80);

		    textSize(15);
		    fill(255);
		    text("Congratulations, you have mastered air bending!", 20, 355);
		    text("Remember Aang, feel freedom, air is always changing.", 20, 375);

		    fill(0);
		    rect(wordsAppear7, 340, 380, 20);
		    rect(wordsAppear8, 360, 400, 20);

		    wordsAppear7 += moveSpeed;

		    if(wordsAppear7 > 400){

				wordsAppear8 += moveSpeed;

			}

			if(wordsAppear8 > 600){

				air = false;
				elementSelection = true;

			}

		}

	}

	if(water == false && waterNumber == 1 && earth == false && earthNumber == 1 && fire == false && fireNumber == 1 && air == false && airNumber == 1){

		winner = true;

	}

	if(winner){

		elementSelection = false;
		image(img5, 0, 0, width, height);

		fill(0);
		rect(0, 320, 400, 80);

		textSize(15);
		fill(255);
		text("You have mastered all four of the elements!", 20, 355);
		text("You are ready to face... the FIRE LORD!!!", 20, 375);

		fill(0);
		rect(wordsAppear14, 340, 380, 20);
		rect(wordsAppear15, 360, 400, 20);

		wordsAppear14 += moveSpeed;

		if(wordsAppear14 > 400){

			wordsAppear15 += moveSpeed;

		}

		if(wordsAppear15 > 600){

			for(var y = 0; y < img5.height; y++){

				for(var x = 0; x < img5.width; x++){

					if(y > 17 && y < 67 && x > 140 && x < 185 && brightness(img5.get(x, y)) < 60 && brightness(img5.get(x, y)) > 50){

						img5.set(x, y, 255);

					}

					if(y > 200 && y < 212 && x > 150 && x < 185 && brightness(img5.get(x, y)) < 60 && brightness(img5.get(x, y)) > 50){

						img5.set(x, y, 255);

					}

					if(implicitCircle(x, y, 148, 75, 10) < 0){

						img5.set(x, y, 255);

					}

					if(implicitCircle(x, y, 179, 75, 10) < 0){

						img5.set(x, y, 255);

					}

				}

			}

			img5.updatePixels();
			image(img5, 0, 0, width, height);

		}

	}

}

//intro functions

function drawWater(x, y){

   push();

      translate(x, y);
      fill(0, 0, 255);

      triangle(-20, -15, 0, -40, 20, -15);
      ellipse(0, 0, 50);

   pop();

}

function drawEarth(x, y, sc){

	push();

		translate(x, y);
		scale(sc);
		fill(139, 69, 19);

		beginShape();

			vertex(-66, 69);
			vertex(-69, 66);
			vertex(-72, 61);
			vertex(-78, 57);
			vertex(-77, 54);
			vertex(-72, 50);
			vertex(-75, 46);
			vertex(-80, 41);
			vertex(-76, 38);
			vertex(-80, 37);
			vertex(-85, 31);
			vertex(-80, 26);
			vertex(-79, 20);
			vertex(-74, 16);
			vertex(-69, 24);
			vertex(-65, 16);
			vertex(-61, 21);
			vertex(-60, 13);
			vertex(-55, 6);
			vertex(-50, 0);
			vertex(-48, -8);
			vertex(-45, -6);
			vertex(-40, -12);
			vertex(-35, -15);
			vertex(-31, -13);
			vertex(-28, -20);
			vertex(-20, -24);
			vertex(-16, -26);
			vertex(-15, -33);
			vertex(-13, -28);
			vertex(-10, -31);
			vertex(-6, -37);
			vertex(-2, -42);
			vertex(0, -47);
			vertex(7, -45);
			vertex(13, -40);
			vertex(16, -49);
			vertex(20, -39);
			vertex(25, -43);
			vertex(29, -29);
			vertex(33, -22);
			vertex(37, -21);
			vertex(43, -16);
			vertex(49, -14);
			vertex(51, -13);
			vertex(56, -5);
			vertex(60, 0);
			vertex(66, 6);
			vertex(69, 11);
			vertex(73, 15);
			vertex(77, 18);
			vertex(80, 22);
			vertex(77, 25);
			vertex(74, 29);
			vertex(77, 36);
			vertex(81, 40);
			vertex(70, 50);
			vertex(74, 55);
			vertex(74, 60);
			vertex(77, 63);
			vertex(75, 67);

		endShape();

		noStroke();
		ellipse(0, 65, 145, 40);

	pop();

}

function drawFire(x, y, sc, col){

   push();

      noStroke();
      translate(x, y);
      scale(sc);
      fill(col);
      beginShape();

         curveVertex(-10, -50);
         curveVertex(0, -40);
         curveVertex(25, -5);
         curveVertex(10, 20);
         curveVertex(-10, 20);
         curveVertex(-25, 0);
         curveVertex(-8, -20);
         curveVertex(0, -40);

      endShape();

   pop();

}

function drawAir(xS, yS){

	r = 0;
	t = 0;

	fill("#4286f4");

	for(var i = 0; i < 120; i++){

		x = xS + r * (cos(t));
		y = yS + r * (sin(t));

		ellipse(x, y, 10);

		t += .1;
		r += .3;

	}

}

function drawPillar(x, y){

	push();

		translate(x, y);

		fill(200);

		rect(-20, -40, 40, 80);
		triangle(-35, 40, 0, 0, 35, 40);
		rect(-20, -60, 40, 20);
		ellipse(-20, -50, 20);
		ellipse(20, -50, 20);

	pop();

}

function mouseClicked(){

	if(intro == true || elementSelection == true){

		//water game

		if(waterNumber == 0){

			if(mouseX > 25 && mouseX < 75 && mouseY > 125 && mouseY < 205){

				water = true;
				intro = false;
				elementSelection = false;

				if(waterNumber >= 1){

					water = false;

				}

				waterNumber++;

			}

		}

		//earth game

		if(earthNumber == 0){

			if(mouseX > 125 && mouseX < 175 && mouseY > 125 && mouseY < 205){

				earth = true;
				intro = false;
				elementSelection = false;

				if(earthNumber >= 1){

					earth = false;

				}

				earthNumber++;

			}

		}

		//fire game

		if(fireNumber == 0){

			if(mouseX > 225 && mouseX < 275 && mouseY > 125 && mouseY < 205){

				fire = true;
				intro = false;
				elementSelection = false;

				if(fireNumber >= 1){

					fire = false;

				}

				fireNumber++;

			}

		}
				

		//air game

		if(airNumber == 0){

			if(mouseX > 325 && mouseX < 375 && mouseY > 125 && mouseY < 205){

				air = true;
				intro = false;
				elementSelection = false;

				if(airNumber >= 1){

					air = false;

				}

				airNumber++;

			}

		}

	}

}

//water functions

function drawWaterdrop(x, y, sc, dx, dy, wtrcolR, wtrcolG, wtrcolB, wtrcolAlp){

	push();

		translate(x,y);
		scale(sc);
		rotate(atan2(dy,dx));
		fill(wtrcolR, wtrcolG, wtrcolB, wtrcolAlp);
		
		//triangle(17,11,28,-9,17,-4);
		triangle(-20, -15, 0, -40, 20, -15);
		ellipse(0,0,50);
		
	pop();

}

function implicitCircle(x, y, cx, cy, r){

   return (x - cx) * (x - cx) + (y - cy) * (y - cy) - (r * r);

}

function distance(x1, y1, x2, y2){

   return sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));

}

function Particle(x , y){
   // the data associated with a particle
   this.accelX = 0.05;
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(-2, 2);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorR = 0;
   this.pcolorG = 0;
   this.pcolorB = 255;
   this.alpha = this.life * 3 /50;
   
   this.locX = x;
   this.locY = y;
   this.r = 4.0;
   this.life = 50;
  
   // a function to update the particle each frame
   this.updateP = function(){

      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;

   };
  
   // function to draw a particle
   this.renderP = function(){

      	noStroke();
      	push();

         	drawWaterdrop(this.locX, this.locY, .3, 0, 0, 0, 0, 255, this.alpha);

      	pop();

   };

}

function PSys(sX, sY, num){

   	// the data - lots of particles
   	this.particles = [];

   	for (var i=0; i < num; i++){

      	this.particles.push(new Particle(sX, sY));

   	}
  
   	// function defining what to do each frame
   	this.run = function(){

      	for (var i=0; i < this.particles.length; i++){

         	//update each particle per frame
         	this.particles[i].updateP();
         	this.particles[i].renderP();

      	}

   	}

}

//earth functions

function keyTyped(){

	if(key === ' '){

		jump = true;

	}

	return false;

}

function drawAang(x, y, scal){
   
  	push();

	   	translate(x,y);
	   	scale(scal);

	   	fill(255,215,0);
	   	ellipse(0,0,20,45);

		//arrow
	   	fill(0,191,255);
	   	ellipse(0,-32,28);

		//face
	   	fill( 255,228,196);
	   	ellipse(0,-30,28);
	   	triangle(11,-36, 11, -23,15, -23);
	   	ellipse(-2,10,5);

		//arrow
	   	fill( 0,191,255);
	   	triangle(14,-34, 14,-32, 11, -34);

		//eyes
	   	fill(0);
	   	ellipse(10,-30,2,3);
	   	fill(255);
	   	ellipse(10.2,-30,1);

		//arms
	   	push();

		   	fill( 255,165,0);
		   	rotate(PI/6);
		   	ellipse(-7,0,7,20);

	   	pop();

	   	push();

		   	fill(255,165,0);
		   	rotate(-PI/4);
		   	ellipse(-10,-1,5,12);

		pop();
	  
	   	push();

		   	translate(-3,15);
		   	rotate(legR);	

		   	fill(255,215,0);
		   	rect(0,0,7,20);
		   	triangle(6,0,6,20,10,0);
		   	fill(255,165,0);
		   	rect(0,19,7,8);
		   	ellipse(5,27,10,5);

	   	pop();	

	   	push();

		   	translate(-3,13);
		   	rotate(-legR);
		   	fill(255,215,0);
		   	rect(0,0,7,20);
		   	triangle(6,0,6,20,10,0);

		   	fill(255,165,0);
		   	rect(0,19,7,8);
		   	ellipse(5,27,10,5);

	   	pop();

   	pop();

}

function moveAang(){

   	if (legR < -PI/3){

      	legFor = false;

   	}

   	if (legR > PI/10){

      	legFor = true;

   	}

   	// depending on which way we need to rotate, do so
   	if (legFor == true){

      	legR -= PI/100;

   	}

   	else{

      	legR += PI/100;

   	}

}

function drawRock(x, y, scal){

	push();

		translate(x, y);
		scale(scal);

		fill( 139,69, 19);

		beginShape();

			vertex(-66, 69);
			vertex(-69, 66);
			vertex(-72, 61);
			vertex(-78, 57);
			vertex(-77, 54);
			vertex(-72, 50);
			vertex(-75, 46);
			vertex(-80, 41);
			vertex(-76, 38);
			vertex(-80, 37);
			vertex(-85, 31);
			vertex(-80, 26);
			vertex(-79, 20);
			vertex(-74, 16);
			vertex(-69, 24);
			vertex(-65, 16);
			vertex(-61, 21);
			vertex(-60, 13);
			vertex(-55, 6);
			vertex(-50, 0);
			vertex(-48, -8);
			vertex(-45, -6);
			vertex(-40, -12);
			vertex(-35, -15);
			vertex(-31, -13);
			vertex(-28, -20);
			vertex(-20, -24);
			vertex(-16, -26);
			vertex(-15, -33);
			vertex(-13, -28);
			vertex(-10, -31);
			vertex(-6, -37);
			vertex(-2, -42);
			vertex(0, -47);
			vertex(7, -45);
			vertex(13, -40);
			vertex(16, -49);
			vertex(20, -39);
			vertex(25, -43);
			vertex(29, -29);
			vertex(33, -22);
			vertex(37, -21);
			vertex(43, -16);
			vertex(49, -14);
			vertex(51, -13);
			vertex(56, -5);
			vertex(60, 0);
			vertex(66, 6);
			vertex(69, 11);
			vertex(73, 15);
			vertex(77, 18);
			vertex(80, 22);
			vertex(77, 25);
			vertex(74, 29);
			vertex(77, 36);
			vertex(81, 40);
			vertex(70, 50);
			vertex(74, 55);
			vertex(74, 60);
			vertex(77, 63);
			vertex(75, 67);

		endShape(CLOSE);

		noStroke();
		ellipse(0,65, 145,40);

	pop();

}

function drawCloud (x,y,scal){

   	push();

	   	translate(x,y);
	   	scale(scal);

	   	fill(255,255,255);
	   	ellipse(0,0,200,20);
	   	ellipse(-30,-10,60,20);
	   	ellipse(20,-10,100,30);
   
   	pop();

}

//fire functions

function drawFlame(x, y, sc, rot, col){

   	push();

      	noStroke();
      	translate(x, y);
      	rotate(rot);
      	scale(sc);
      	fill(col);
      	beginShape();

         	curveVertex(-10, -50);
         	curveVertex(0, -40);
         	curveVertex(25, -5);
         	curveVertex(10, 20);
         	curveVertex(-10, 20);
         	curveVertex(-25, 0);
         	curveVertex(-8, -20);
         	curveVertex(0, -40);

      	endShape();

   	pop();

}

//air functions

function airSpiral(s1,s2){
	
	r = 0;
	t = 0;
	
	for(var i = 0; i < 120; i++){

		x = s1 + r * cos(t);
		y = s2 + r * sin(t);

		ellipse(x, y, 10);

		t += .1;
		r += .6;

	}

}

function mouseDragged(){

  	if(air){

  		if (r1 < 255 || g1 < 255 || b1 < 255){

		    r1 += 2.5;
		    g1 += 2.5;
		    b1 += 2.5;
		    t1 -= 3.35;
		    spiral1rot += PI/20;

		    if(r1 >= 250){

	    		spiral1 = true;

	    	}

  		}

  	}

}

function mouseWheel(event){

	if(air){

		//move the square according to the vertical scroll amount
	  	pos += event.delta;

	    r3 += 2.5;
	    g3 += 2.5;
	    b3 += 2.5;
	    t3 -= 3.35;
	    spiral3rot -= PI/20;

	    if(r3 >= 250){

	   		spiral3 = true;

	   	}

	}

}

function mousePressed(){
	
	if(mouseX == airSpiral(275,150) || mouseY == airSpiral(275,150)){

		fill(0);
		airSpiral(width/2,height/2);

	}

	if(water){

		for(var i = 0; i < waterX.length; i ++){

			if(implicitCircle(mouseX, mouseY, waterX[i], waterY[i], 30) <= 0){

				waterColorR[i] = 147;
				waterColorG[i] = 208;
				waterColorB[i] = 217;
				waterColorAlp[i] = 0;
				fillCol = color(0, 0, random(255), this.alpha);
				explode.push(new PSys(waterX[i], waterY[i], 20));

			}	
		
		}
		
	}

	if(fire){

		clicker++;

	}

}