/* VARIABLES */
let score = 0;
let multiplier = 1;
let passive = 0;
let page = 2;
let prestige = 0;
let IconState = 1;
let font;
let scoreText = 'Score=' + score;
let multiplierText = 'Multiplier=' + multiplier;
let passiveText = 'Passive =' + passive;
let playing = 1;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(137, 213, 210);
  audio1.play();
  playing = 1;
  
  // Create target
  target = new Sprite(200,200,800,900);
  target.image = plants1;
  target.scale = 0.1;
  target.collider = 'k';
  
  // settings menu
  settingsMenu = new Sprite(200,600,200,400);
  settingsMenu.image = settingsMenuL;
  settingsMenu.scale = .3;
  settingsMenu.collider = 'k';

  // music
  music = new Sprite(115,550,800,800);
  music.image = toggleOn1;
  music.scale = 0.1;
  music.collider = 'k';

  leftArrow = new Sprite(105,590,800,800);
  leftArrow.image = leftArrow1;
  leftArrow.scale = 0.04;
  leftArrow.collider = 'k';

  rightArrow = new Sprite(135,590,800,800);
  rightArrow.image = rightArrow1;
  rightArrow.scale = 0.04;
  rightArrow.collider = 'k';

  musicText = new Sprite(225,550,10,10);
  musicText.text = 'Music on';
  musicText.textSize = 20;
  musicText.collider = 'k';
  musicText.color = '#dcb98a';
  musicText.stroke = '#dcb98a';
  musicText.textColor = '#90625d';

  songText = new Sprite(225,590,10,10);
  songText.text = 'Song selector';
  songText.textSize = 20;
  songText.collider = 'k';
  songText.color = '#dcb98a';
  songText.stroke = '#dcb98a';
  songText.textColor = '#90625d';

  // volume

  volumeBar = new Sprite(200,280,200,200);
  volumeBar.image = emptyBar;
  volumeBar.scale = .2;
  volumeBar.collider = 'k';

  volumeBarGreen = new Sprite(200,280,200,200);
  volumeBarGreen.image = fullBar;
  volumeBarGreen.scale = .2;
  volumeBarGreen.collider = 'k';

  volumeTest = new Sprite(200,280,200,200);
  
  volumeDot = new Sprite(200,278,400,400);
  volumeDot.image = slideDot;
  volumeDot.scale = .2;
  volumeDot.collider = 'k';

  //info button
  infoButton = new Sprite(110,635,800,800);
  infoButton.image = exButton;
  infoButton.scale = 0.05;
  infoButton.collider = 'k';

  infoText = new Sprite(225,635,10,10);
  infoText.text = 'info';
  infoText.textSize = 20;
  infoText.collider = 'k';
  infoText.color = '#dcb98a';
  infoText.stroke = '#dcb98a';
  infoText.textColor = '#90625d';
  
  //info menu
  infoMenu = new Sprite(200,600,200,400);
  infoMenu.image = infoMenuL;
  infoMenu.scale = .3;
  infoMenu.collider = 'k';

  infoMenuText = new Sprite(200,600,10,10);
  infoMenuText.text = 'Click the seed packet to\n earn points. Once you earn \nenough coins,you can buy \npower ups in the shop.\n\nCPC stands for coins \nper click and CPS stands \nfor coins per second.\n\n\nGraphics by Cup Noodle';
  infoMenuText.textSize = 15;
  infoMenuText.textColor = '#90625d';
  infoMenuText.color = '#dcb98a';
  infoMenuText.stroke = '#dcb98a';
  infoMenuText.collider = 'k';
  
  // score menu
  scoreMenu = new Sprite(105,60,400,400);
  scoreMenu.image = scoreMenuL;
  scoreMenu.scale = 0.2;
  scoreMenu.collider = 'k';
  scoreMenu.textSize = 15;
  scoreMenu.textColor = '#90625d';
  scoreMenu.text = scoreText + '\n\n' + multiplierText + '\n\n' + passiveText;
  
  // coin icon
  coinIcon = new Sprite(25,23,50,50);
  coinIcon.image = coinIcon1;
  coinIcon.scale = 0.03;
  coinIcon.collider = 'k';

  // tool icon
  toolIcon = new Sprite(27,60,50,50);
  toolIcon.image = toolIcon1;
  toolIcon.scale = 0.03;
  toolIcon.collider = 'k';

  // water icon
  waterIcon = new Sprite(27,95,50,50);
  waterIcon.image = waterIcon1;
  waterIcon.scale = 0.03;
  waterIcon.collider = 'k';
  
  // shop button
  shopButton = new Sprite(365,370,800,800);
  shopButton.image = shopButtonL;
  shopButton.scale = 0.05;
  shopButton.collider = 'k';

  // settings button
  settingsButton = new Sprite(35,370,800,800);
  settingsButton.image = settingsButtonL;
  settingsButton.scale = 0.05;
  settingsButton.collider = 'k';

  // shop menu
  shopMenu = new Sprite(500,200,200,400);
  shopMenu.image = shopMenuL;
  shopMenu.scale = .44;
  shopMenu.collider = 'k';
  
  // prestige button
  prestigeButton = new Sprite(500,355,700,200);
  prestigeButton.image = prestigeButtonL;
  prestigeButton.scale = .2;
  prestigeButton.collider = 'k';
  
  // shop menu buttons
  shopMenuButton1 = new Sprite(450,50,700,700);
  shopMenuButton1.image = squareButton;
  shopMenuButton1.scale = .05;
  shopMenuButton1.collider = 'k';
  shopMenuText1 = new Sprite(530,50,100,35);
  shopMenuText1.collider = 'k';
  shopMenuText1.text = 'COST: 50 \n1 CPC';
  shopMenuText1.textColor = '#90625d';
  shopMenuText1.color = '#dcb98a';
  shopMenuText1.stroke = '#dcb98a';
  

  shopMenuButton2 = new Sprite(450,100,700,700);
  shopMenuButton2.image = squareButton;
  shopMenuButton2.scale = .05;
  shopMenuButton2.collider = 'k';
  shopMenuText2 = new Sprite(530,100,100,35);
  shopMenuText2.collider = 'k';
  shopMenuText2.text = 'COST: 1000 \n5 CPS';
  shopMenuText2.textColor = '#90625d';
  shopMenuText2.color = '#dcb98a';
  shopMenuText2.stroke = '#dcb98a';
  
  
  shopMenuButton3 = new Sprite(450,150,700,700);
  shopMenuButton3.image = squareButton;
  shopMenuButton3.scale = .05;
  shopMenuButton3.collider = 'k';
  shopMenuText3 = new Sprite(530,150,100,35);
  shopMenuText3.collider = 'k';
  shopMenuText3.text = 'COST: 25000 \n300 CPC';
  shopMenuText3.textColor = '#90625d';
  shopMenuText3.color = '#dcb98a';
  shopMenuText3.stroke = '#dcb98a';
  
  shopMenuButton4 = new Sprite(450,200,700,700);
  shopMenuButton4.image = squareButton;
  shopMenuButton4.scale = .05;
  shopMenuButton4.collider = 'k';
  shopMenuText4 = new Sprite(530,200,100,35);
  shopMenuText4.collider = 'k';
  shopMenuText4.text = 'COST: 5a \n30,000 CPS';
  shopMenuText4.textColor = '#90625d';
  shopMenuText4.color = '#dcb98a';
  shopMenuText4.stroke = '#dcb98a';

  shopMenuButton5 = new Sprite(450,250,700,700);
  shopMenuButton5.image = squareButton;
  shopMenuButton5.scale = .05;
  shopMenuButton5.collider = 'k';
  shopMenuText5 = new Sprite(530,250,100,35);
  shopMenuText5.collider = 'k';
  shopMenuText5.text = 'COST: 250a \n5a CPC';
  shopMenuText5.textColor = '#90625d';
  shopMenuText5.color = '#dcb98a';
  shopMenuText5.stroke = '#dcb98a';

  shopMenuButton6 = new Sprite(450,300,700,700);
  shopMenuButton6.image = squareButton;
  shopMenuButton6.scale = .05;
  shopMenuButton6.collider = 'k';
  shopMenuText6 = new Sprite(530,300,100,35);
  shopMenuText6.collider = 'k';
  shopMenuText6.text = 'COST: 1c \n10a CPS';
  shopMenuText6.textColor = '#90625d';
  shopMenuText6.color = '#dcb98a';
  shopMenuText6.stroke = '#dcb98a';
}

/* preload */
function preload() {
  font = loadFont('/assets/pixelFont.ttf');
  coinIcon1 = loadImage('/assets/coinIcon1.png');
  coinIcon2 = loadImage('/assets/coinIcon2.png');
  downArrow1 = loadImage('/assets/downArrow1.png');
  downArrow2 = loadImage('/assets/downArrow2.png');
  emptyBar = loadImage('/assets/emptyBar.png');
  exButton = loadImage('/assets/exButton.png');
  exButtonClicked = loadImage('/assets/exButtonClicked.png');
  fullBar = loadImage('/assets/fullBar.png');
  infoMenuL = loadImage('/assets/infoMenu.png');
  leftArrow1 = loadImage('/assets/leftArrow1.png');
  leftArrow2 = loadImage('/assets/leftArrow2.png');
  plants1 = loadImage('/assets/plants_00.png');
  plants2 = loadImage('/assets/plants_01.png');
  plants3 = loadImage('/assets/plants_02.png');
  plants4 = loadImage('/assets/plants_03.png');
  plants5 = loadImage('/assets/plants_04.png');
  plants6 = loadImage('/assets/plants_05.png');
  plants7 = loadImage('/assets/plants_06.png');
  plants8 = loadImage('/assets/plants_07.png');
  plants9 = loadImage('/assets/plants_08.png');
  plants10 = loadImage('/assets/plants_09.png');
  plants11 = loadImage('/assets/plants_10.png');
  plants12 = loadImage('/assets/plants_11.png');
  playButton = loadImage('/assets/playButton.png');
  playButtonClicked = loadImage('/assets/playButtonClicked.png');
  prestigeButtonL = loadImage('/assets/prestigeButton.png');
  prestigeButtonClicked = loadImage('/assets/prestigeButtonClicked.png');
  questionButton = loadImage('/assets/questionButton.png');
  questionButtonClicked = loadImage('/assets/questionButtonClicked.png');
  rightArrow1 = loadImage('/assets/rightArrow1.png');
  rightArrow2 = loadImage('/assets/rightArrow2.png');
  scoreMenuL = loadImage('/assets/scoreMenu.png');
  settingsButtonL = loadImage('/assets/settingsButton.png');
  settingsButtonClicked = loadImage('/assets/settingsButtonClicked.png');
  settingsMenuL = loadImage('/assets/settingsMenu.png');
  shopButtonL = loadImage('/assets/shopButton.png');
  shopButtonClicked = loadImage('/assets/shopButtonClicked.png');
  shopMenuL = loadImage('/assets/shopMenu.png');
  slideDot = loadImage('/assets/slideDot.png');
  squareButton = loadImage('/assets/squareButton.png');
  squareButtonClicked = loadImage('/assets/squareButtonClicked.png');
  toggleOff1 = loadImage('/assets/toggleOff1.png');
  toggleOff2 = loadImage('/assets/toggleOff2.png');
  toggleOn1 = loadImage('/assets/toggleOn1.png');
  toggleOn2 = loadImage('/assets/toggleOn2.png');
  toolIcon1 = loadImage('/assets/toolIcon1.png');
  toolIcon2 = loadImage('/assets/toolIcon2.png');
  upArrow1 = loadImage('/assets/upArrow1.png');
  upArrow2 = loadImage('/assets/upArrow2.png');
  waterIcon1 = loadImage('/assets/waterIcon1.png');
  waterIcon2 = loadImage('/assets/waterIcon2.png');
  
  //audios
  audio1 = loadSound('/assets/audio/SKINNY.mp3');
  audio2 = loadSound('/assets/audio/LUNCH.mp3');
  audio3 = loadSound('/assets/audio/CHIHIRO.mp3');
  audio4 = loadSound('/assets/audio/BIRDSOFAFEATHER.mp3');
  audio5 = loadSound('/assets/audio/WILDFLOWER.mp3');
  audio6 = loadSound('/assets/audio/THEGREATEST.mp3');
  audio7 = loadSound("/assets/audio/L'AMOURDEMAVIE.mp3");
  audio8 = loadSound('/assets/audio/THEDINER.mp3');
  audio9 = loadSound('/assets/audio/BITTERSUITE.mp3');
  audio10 = loadSound('/assets/audio/BLUE.mp3');
}

/* DRAW LOOP REPEATS */
function draw() {
  background(137, 213, 210);
  textAlign(LEFT);
  textSize(20);
  textFont(font);

  //ex button
  if (score >= 1000000000000) {
    shopMenuButton6.image = exButton;
    shopMenuButton5.image = exButton;
    shopMenuButton4.image = exButton;
    shopMenuButton3.image = exButton;
    shopMenuButton2.image = exButton;
    shopMenuButton1.image = exButton;
  } else if (score >= 250000000) {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = exButton;
    shopMenuButton4.image = exButton;
    shopMenuButton3.image = exButton;
    shopMenuButton2.image = exButton;
    shopMenuButton1.image = exButton;
  } else if (score >= 5000000) {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = squareButton;
    shopMenuButton4.image = exButton;
    shopMenuButton3.image = exButton;
    shopMenuButton2.image = exButton;
    shopMenuButton1.image = exButton;
  } else if (score >= 25000) {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = squareButton;
    shopMenuButton4.image = squareButton;
    shopMenuButton3.image = exButton;
    shopMenuButton2.image = exButton;
    shopMenuButton1.image = exButton;
  } else if (score >= 1000) {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = squareButton;
    shopMenuButton4.image = squareButton;
    shopMenuButton3.image = squareButton;
    shopMenuButton2.image = exButton;
    shopMenuButton1.image = exButton;
  } else if (score >= 50) {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = squareButton;
    shopMenuButton4.image = squareButton;
    shopMenuButton3.image = squareButton;
    shopMenuButton2.image = squareButton;
    shopMenuButton1.image = exButton;
  } else {
    shopMenuButton6.image = squareButton;
    shopMenuButton5.image = squareButton;
    shopMenuButton4.image = squareButton;
    shopMenuButton3.image = squareButton;
    shopMenuButton2.image = squareButton;
    shopMenuButton1.image = squareButton;
  }
    
  //continuous music
  if (playing == 1) {
    if (audio1.isPlaying() == false) {
      audio2.play();
      playing = 2;
    } 
  } else if (playing == 2) {
    if (audio2.isPlaying() == false) {
      audio3.play();
      playing = 3;
    }
  } else if (playing == 3) {
    if (audio3.isPlaying() == false) {
      audio4.play();
      playing = 4;
    }
  } else if (playing == 4) {
    if (audio4.isPlaying() == false) {
      audio5.play();
      playing = 5;
    }
  } else if (playing == 5) {
    if (audio5.isPlaying() == false) {
      audio6.play();
      playing = 6;
    }
  } else if (playing == 6) {
    if (audio6.isPlaying() == false) {
      audio7.play();
      playing = 7;
    }
  } else if (playing == 7) {
    if (audio7.isPlaying() == false) {
      audio8.play();
      playing = 8;
    }
  } else if (playing == 8) {
    if (audio8.isPlaying() == false) {
      audio9.play();
      playing = 9;
    }
  } else if (playing == 9) {
    if (audio9.isPlaying() == false) {
      audio10.play();
      playing = 10;
    }
  } else if (playing == 10) {
    if (audio10.isPlaying() == false) {
      audio1.play();
      playing = 1;
    }
  }

  // icon animation
  if (IconState == 1){
    coinIcon.image = coinIcon1;
    toolIcon.image = toolIcon1;
    waterIcon.image = waterIcon1;
  } else {
    coinIcon.image = coinIcon2;
    toolIcon.image = toolIcon2;
    waterIcon.image = waterIcon2;
  }

  scoreMenu.text = scoreText + '\n\n' + multiplierText + '\n\n' + passiveText

  //music text
  if (playing >= 1){
    musicText.text = 'Music on';
  } else{
    musicText.text = 'Music off';
  }

  //song text
  if (playing == 1) {
    songText.textSize = 20;
    songText.text = 'Song: SKINNY';
  } else if (playing == 2) {
    songText.textSize = 20;
    songText.text = 'Song: LUNCH';
  } else if (playing == 3) {
    songText.textSize = 20;
    songText.text = 'Song: CHIHIRO';
  } else if (playing == 4) {
    songText.textSize = 10;
    songText.text = 'Song: BIRDS OF\nA FEATHER';
  } else if (playing == 5) {
    songText.textSize = 10;
    songText.text = 'Song:\nWILDFLOWER';
  } else if (playing == 6) {
    songText.textSize = 10;
    songText.text = 'Song:\nTHE GREATEST';
  } else if (playing == 7){
    songText.textSize = 10;
    songText.text = "Song: L'AMOUR\nDE MA VIE";
  } else if (playing == 8) {
    songText.textSize = 20;
    songText.text = 'Song: THE DINER';
  } else if (playing == 9) {
    songText.textSize = 10;
    songText.text = 'Song:\nBITTERSUITE';
  } else if (playing == 10) {
    songText.textSize = 20;
    songText.text = 'Song: BLUE';
  }
  
  // draw score
  if (score >= 1000000000000000) {
    scoreText = ('Score = ' + round(score/1000000000000000,1) +'d');
  } else if (score >= 1000000000000) {
      scoreText = ('Score = ' + round(score/1000000000000,1) +'c');
  } else if (score >= 1000000000) {
      scoreText = ('Score = ' + round(score/1000000000,1) +'b');
  } else if (score >= 1000000) {
      scoreText = ('Score = ' + round(score/1000000,1) +'a');
  } else {
      scoreText = ('Score = ' + round(score,1));
  }

  // draw multiplier
  if (multiplier >= 1000000000000000) {
    multiplierTextText = ('Multiplier = ' + round(multiplier/1000000000000000,1) +'d');
  } else if (multiplier >= 1000000000000) {
    multiplierSprite.text = ('Multiplier = ' + round(multiplier/1000000000000,1) +'c');
  } else if (multiplier >= 1000000000) {
    multiplierText = ('Multiplier = ' + round(multiplier/1000000000,1) +'b');
  } else if (multiplier >= 1000000) {
    multiplierText = ('Multiplier = ' + round(multiplier/1000000,1) +'a');
  } else {
    multiplierText = ('Multiplier = ' + round(multiplier,1));
  }
  
    // draw passive
  if (passive >= 1000000000000000) {
    passiveText = ('Passive = ' + round(passive/1000000000000000,1) +'d');
  } else if (passive >= 1000000000000) {
    passiveText = ('Passive = ' + round(passive/1000000000000,1) +'c');
  } else if (passive >= 1000000000) {
    passiveText = ('Passive = ' + round(passive/1000000000,1) +'b');
  } else if (passive >= 1000000) {
    passiveText = ('Passive = ' + round(passive/1000000,1) +'a');
  } else {
    passiveText = ('Passive = ' + round(passive,1));
  }  
  
// prestige
  if (prestige == 0){
    target.image = plants1;
  } else if (prestige == 1){
    target.image = plants2;
  } else if (prestige == 2){
    target.image = plants3;
  } else if (prestige == 3){
    target.image = plants4;
  } else if (prestige == 4){
    target.image = plants5;
  } else if (prestige == 5){
    target.image = plants6;
  } else if (prestige == 6){
    target.image = plants7;
  } else if (prestige == 7){
    target.image = plants8;
  } else if (prestige == 8){
    target.image = plants9;
  } else if (prestige == 9){
    target.image = plants10;
  } else if (prestige == 10){
    target.image = plants11;
  } else if (prestige == 11){
    target.image = plants12;
  } 
  
  
  //Increase score when player clicks target
  if (target.mouse.pressed()) {
    score += multiplier;
    target.scale = .095
    setTimeout(() => {target.scale = 0.1}, 50);
  }

  // Open shop when shop button is clicked
  if (shopButton.mouse.pressed()) {
    if (page == 2){
      shopOpen();
      shopButton.image = shopButtonClicked;
      setTimeout(() => { shopButton.image = rightArrow1; }, 100);
      page = 3;
    } else if (page == 3){
      shopClose();
      shopButton.image = rightArrow2;
      setTimeout(() => { shopButton.image = shopButtonL; }, 100);
      page = 2;
    }
  }

  // Open settings when settings button is clicked
  if (settingsButton.mouse.pressed()){
    if (page == 3){
      allOff();
      page = 1.5;
      settingsButton.image = settingsButtonClicked;
      setTimeout(() => { settingsButton.image = leftArrow1; }, 100);
    } else if (page == 2){
      halfOff();
      page = 1;
      settingsButton.image = settingsButtonClicked;
      setTimeout(() => { settingsButton.image = leftArrow1; }, 100);
    } else if (page == 1.5){
      allOn();
      page = 3;
      settingsButton.image = leftArrow2;
      setTimeout(() => { settingsButton.image = settingsButtonL; }, 100);
    } else if (page == 1) {
      halfOn();
      page = 2;
      settingsButton.image = leftArrow2;
      setTimeout(() => { settingsButton.image = settingsButtonL; }, 100);
    } else if (page == -1){
      showSettings();
      hideInfo();
      page = 1;
      settingsButton.image = leftArrow2;
      setTimeout(() => { settingsButton.image = leftArrow1; }, 100);
    } else if (page == -1.5){
      showSettings();
      hideInfo();
      page = 3;
      settingsButton.image = leftArrow2;
      setTimeout(() => { settingsButton.image = leftArrow1; }, 100);
    }
  }

  //music button clicked
  if (music.mouse.pressed()){
    if (playing == 0){
      audio1.play();
      music.image = toggleOn1;
      playing = 1;
    } else if (playing >= 1){
      stop1();
      music.image = toggleOff1;
      playing = 0;
    } 
  
  }

  //arrow buttons clicked
  if (leftArrow.mouse.pressed()){
    stop1();
    leftArrow.image = leftArrow2;
    setTimeout(() => { leftArrow.image = leftArrow1; }, 100);
    if (playing == 1){
      audio10.play();
      playing = 10;
    } else if (playing == 2){
      audio1.play();
      playing = 1;
    } else if (playing == 3){
      audio2.play();
      playing = 2;
    } else if (playing == 4) {
      audio3.play();
      playing = 3;
    }else if (playing == 5){
      audio4.play();
      playing = 4;
    } else if (playing == 6){
      audio5.play();
      playing = 5;
    } else if (playing == 7) {
      audio6.play();
      playing = 6;
    }else if (playing == 8){
      audio7.play();
      playing = 7;
    } else if (playing == 9){
      audio8.play();
      playing = 8;
    } else if (playing == 10) {
      audio9.play();
      playing = 9;
    }
  }
  if (rightArrow.mouse.pressed()){
    stop1();
    rightArrow.image = rightArrow2;
    setTimeout(() => { rightArrow.image = rightArrow1; }, 100);
    if (playing == 1){
      audio2.play();
      playing = 2;
    } else if (playing == 2) {
      audio3.play();
      playing = 3;
    }else if (playing == 3){
      audio4.play();
      playing = 4;
    } else if (playing == 4){
      audio5.play();
      playing = 5;
    } else if (playing == 5) {
      audio6.play();
      playing = 6;
    }else if (playing == 6){
      audio7.play();
      playing = 7;
    } else if (playing == 7){
      audio8.play();
      playing = 8;
    } else if (playing == 8) {
      audio9.play();
      playing = 9;
    } else if (playing == 9){
      audio10.play();
      playing = 10;
    } else if (playing == 10){
      audio1.play();
      playing = 1;
    }
  }

  // info button clicked
  if (infoButton.mouse.pressed()){
    infoButton.image = exButtonClicked;
    setTimeout(() => { infoButton.image = exButton; }, 100);
    if (page == 1){
      hideSettings();
      showInfo();
      settingsButton.image = leftArrow1;
      page = -1;
    } else if (page == 1.5){
      hideSettings();
      showInfo();
      settingsButton.image = leftArrow1;
      page = -1.5;
    }
  }
  
  //prestige button clicked
  if (prestigeButton.mouse.pressed()){
    prestigeButton.image = prestigeButtonClicked;
    setTimeout(() => { prestigeButton.image = prestigeButtonL; }, 100);
    if (score >= 10000000000000000){
      multiplier = 1;
      score = 0;
      passive = 0;
      prestige += 1;
    }
    
  }
  //first shop menu button clicked
  if (shopMenuButton1.mouse.pressed()){
    shopMenuButton1.image = squareButtonClicked;
    setTimeout(() => { shopMenuButton1.image = squareButton; }, 100);
    if (score >= 50){
      multiplier += 1*(1+prestige/100);
      score -= 50;
    }
  }
  //second shop menu button clicked
  if (shopMenuButton2.mouse.pressed()){
    shopMenuButton2.image = squareButtonClicked;
    setTimeout(() => { shopMenuButton2.image = squareButton; }, 100);
    if (score >= 1000){
      passive += 5*(1+prestige/100);
      score -= 1000;
      }
  }
  //third shop menu button clicked
  if (shopMenuButton3.mouse.pressed()){
    shopMenuButton3.image = squareButtonClicked;
    setTimeout(() => { shopMenuButton3.image = squareButton; }, 100);
    if (score >= 25000){
      multiplier += 300*(1+prestige/100);
      score -= 25000;
    }
  }
  //fourth shop menu button clicked
  if (shopMenuButton4.mouse.pressed()){
    if (score >= 5000000) { //5,000,000
      shopMenuButton4.image = exButtonClicked;
      setTimeout(() => { shopMenuButton4.image = exButton; }, 100);
      passive += 30000*(1+prestige/100);
      score -= 5000000;
    } else {
      shopMenuButton4.image = squareButtonClicked;
      setTimeout(() => { shopMenuButton4.image = squareButton; }, 100);
    }
  }
  //fifth shop menu button clicked
  if (shopMenuButton5.mouse.pressed()){
    if (score >= 250000000){ //250,000,000
      shopMenuButton5.image = exButtonClicked;
      setTimeout(() => { shopMenuButton5.image = exButton; }, 100);
      multiplier += 5000000*(1+prestige/100);//5,000,000
      score -= 250000000;
    } else {
      shopMenuButton5.image = squareButtonClicked;
      setTimeout(() => { shopMenuButton5.image = squareButton; }, 100);
    }
  }
  //sixth shop menu button clicked
  if (shopMenuButton6.mouse.pressed()){
    if (score >= 1000000000000){ //1,000,000,000,000
      shopMenuButton6.image = exButtonClicked;
      setTimeout(() => { shopMenuButton6.image = exButton; }, 100);
      multiplier += 10000000*(1+prestige/100); //10,000,000
      score -= 1000000000000;
    } else{
      shopMenuButton6.image = squareButtonClicked;
      setTimeout(() => { shopMenuButton6.image = squareButton; }, 100);
    }
  }
}
  
/* run functions */
mainLoop();
Icon1();

/* FUNCTIONS */
function mainLoop() {
  if (passive !== 0){
    score += passive;
    setTimeout(mainLoop, 1000);
  } else if (passive == 0){
    setTimeout(mainLoop, 1000);
  }
}
function shopOpen(){
  target.moveTo(100,200,5)
  shopButton.moveTo(165, 370,10);
  shopMenu.moveTo(300,200,10);
  shopMenuButton1.moveTo(250,50,10);
  shopMenuText1.moveTo(330,50,10);
  shopMenuButton2.moveTo(250,100,10);
  shopMenuText2.moveTo(330,100,10);
  shopMenuButton3.moveTo(250,150,10);
  shopMenuText3.moveTo(330,150,10);
  shopMenuButton4.moveTo(250,200,10);
  shopMenuText4.moveTo(330,200,10);
  shopMenuButton5.moveTo(250,250,10);
  shopMenuText5.moveTo(330,250,10);
  shopMenuButton6.moveTo(250,300,10);
  shopMenuText6.moveTo(330,300,10);
  prestigeButton.moveTo(300,355,10);

}
function shopClose(){
  target.moveTo(200,200,5);
  shopButton.moveTo(365,370,10);
  shopMenu.moveTo(500,200,10);
  shopMenuButton1.moveTo(450,50,10);
  shopMenuText1.moveTo(530,50,10);
  shopMenuButton2.moveTo(450,100,10);
  shopMenuText2.moveTo(530,100,10);
  shopMenuButton3.moveTo(450,150,10);
  shopMenuText3.moveTo(530,150,10);
  shopMenuButton4.moveTo(450,200,10);
  shopMenuText4.moveTo(530,200,10);
  shopMenuButton5.moveTo(450,250,10);
  shopMenuText5.moveTo(530,250,10);
  shopMenuButton6.moveTo(450,300,10);
  shopMenuText6.moveTo(530,300,10);
  prestigeButton.moveTo(500,355,10);
}
function allOff() {
  target.moveTo(100,600,10);
  shopButton.moveTo(565, 370,10);
  shopMenu.moveTo(300,-200,10);
  shopMenuButton1.moveTo(250,-350,10);
  shopMenuText1.moveTo(330,-350,10);
  shopMenuButton2.moveTo(250,-300,10);
  shopMenuText2.moveTo(330,-300,10);
  shopMenuButton3.moveTo(250,-250,10);
  shopMenuText3.moveTo(330,-250,10);
  shopMenuButton4.moveTo(250,-200,10);
  shopMenuText4.moveTo(330,-200,10);
  shopMenuButton5.moveTo(250,-150,10);
  shopMenuText5.moveTo(330,-150,10);
  shopMenuButton6.moveTo(250,-100,10);
  shopMenuText6.moveTo(330,-100,10);
  prestigeButton.moveTo(300,-45,10);
  scoreMenu.moveTo(-295,60,10);
  coinIcon.moveTo(-375,23,10);
  toolIcon.moveTo(-373,60,10);
  waterIcon.moveTo(-373,95,10);
  showSettings();
}
function allOn() {
  target.moveTo(100,200,10);
  shopButton.moveTo(165, 370,10);
  shopMenu.moveTo(300,200,10);
  shopMenuButton1.moveTo(250,50,10);
  shopMenuText1.moveTo(330,50,10);
  shopMenuButton2.moveTo(250,100,10);
  shopMenuText2.moveTo(330,100,10);
  shopMenuButton3.moveTo(250,150,10);
  shopMenuText3.moveTo(330,150,10);
  shopMenuButton4.moveTo(250,200,10);
  shopMenuText4.moveTo(330,200,10);
  shopMenuButton5.moveTo(250,250,10);
  shopMenuText5.moveTo(330,250,10);
  shopMenuButton6.moveTo(250,300,10);
  shopMenuText6.moveTo(330,300,10);
  prestigeButton.moveTo(300,355,10);
  scoreMenu.moveTo(105,60,10);
  coinIcon.moveTo(25,23,10);
  toolIcon.moveTo(27,60,10);
  waterIcon.moveTo(27,95,10);
  hideSettings();
  }
function halfOff() {
  target.moveTo(200,600,10);
  shopButton.moveTo(765, 370,10);
  scoreMenu.moveTo(-295,60,10);
  coinIcon.moveTo(-375,23,10);
  toolIcon.moveTo(-373,60,10);
  waterIcon.moveTo(-373,95,10);
  showSettings();
}
function halfOn() {
  target.moveTo(200,200,10);
  shopButton.moveTo(365, 370,10);
  scoreMenu.moveTo(105,60,10);
  coinIcon.moveTo(25,23,10);
  toolIcon.moveTo(27,60,10);
  waterIcon.moveTo(27,95,10);
  hideSettings();
}
function Icon1(){
  IconState = 1;
  setTimeout(Icon2, 500);
}
function Icon2(){
  IconState = 2;
  setTimeout(Icon1, 500);
}
function stop1(){
  audio1.stop();
  audio2.stop();
  audio3.stop();
  audio4.stop();
  audio5.stop();
  audio6.stop();
  audio7.stop();
  audio8.stop();
  audio9.stop();
  audio10.stop();
}
function hideSettings(){
  settingsMenu.moveTo(200,600,10);
  music.moveTo(115,550,10);
  leftArrow.moveTo(105,590,10);
  rightArrow.moveTo(135,590,10);
  musicText.moveTo(225,550,10);
  songText.moveTo(225,590,10);
  infoButton.moveTo(110,635,10);
  infoText.moveTo(225,635,10);
  infoMenu.moveTo(200,600,10);
  infoMenuText.moveTo(200,600,10);
}
function showSettings(){
  settingsMenu.moveTo(200,200,10);
  music.moveTo(115,150,10);
  leftArrow.moveTo(105,190,10);
  rightArrow.moveTo(135,190,10);
  musicText.moveTo(225,150,10);
  songText.moveTo(225,190,10);
  infoButton.moveTo(110,235,10);
  infoText.moveTo(225,235,10);
}
function hideInfo(){
  infoMenu.moveTo(200,600,10);
  infoMenuText.moveTo(200,600,10);
}
function showInfo(){
  infoMenu.moveTo(200,200,10);
  infoMenuText.moveTo(200,200,10);
}
