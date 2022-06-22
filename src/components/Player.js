class Player {
  constructor(spaceId = 0, hand = [], playerId = 0) {
    this.spaceId = spaceId;
    this.hand = hand;
    this.playerId = playerId;
  }

  showPlayerInfo() {
    return `space id: ${this.spaceId}, hand: ${this.hand}, player id: ${this.playerId}`;
  }
}

export default Player;
