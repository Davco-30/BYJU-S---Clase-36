class Player {
  constructor() {
    this.name = null;

    //Algo que identifica al jugador y lo diferencía de los otros
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    //Esta parte crea una jerarquía de jugadores (Jugador 1, 2)
    var playerIndex = "players/player" + this.index;

    //Esta condición da la posición sobre x a los jugadores
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    //Actulizar el terreno dentro de la base de datos
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value"),data => {
      allPlayers = data.val();
    };
  }
}
