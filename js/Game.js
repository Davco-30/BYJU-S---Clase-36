class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state)
  {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car_1 = createSprite(width/2 - 50, height - 100);
    car_1.addImage("car_1",car1_img);
    car_1.scale = 0.2;
    car_2 = createSprite(width/2 + 100, height - 100);
    car_2.addImage("car_2",car2_img);
    car_2.scale = 0.2;

    cars = [car_1, car_2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();

    //Si todos los jugadores no están, entonces comienza el juego

    if(allPlayers !== undefined){
      //Se muestra la imagen de la carretera y los sprites
      //-height*5 hace que la pista se cree por fuera del canvas
      image(track, 0, -height*5, width, height*6);
      drawSprites();
    }
  }
}
