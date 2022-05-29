class Character {
  constructor({
    name,
    level,
    hp,
    exp,
    position,
    speed,
    equipment,
  }) {
    this.position = position;
    this.equipment = equipment;
    this.speed = speed;
    this.direction = 128;
    this.height = 100;
  }
  draw () {
    this.equipment.forEach((part) => {
      ctx.drawImage(
        part,
        0,
        this.direction,
        part.width / 9,
        part.height / 4,
        this.position.X - (part.width / 9) / 2,
        this.position.Y - part.height / 4,
        this.height, //Scale X
        this.height, //Scale Y
      );
    });
    if (keys.w.pressed && keys.lastKey === 'w') {
      this.position.Y -= this.speed;
      this.direction = 0;
    }
    if (keys.a.pressed && keys.lastKey === 'a') {
      this.position.X -= this.speed;
      this.direction = 64;
    }
    if (keys.s.pressed && keys.lastKey === 's') {
      this.position.Y += this.speed;
      this.direction = 128;
    }
    if (keys.d.pressed && keys.lastKey === 'd') {
      this.position.X += this.speed;
      this.direction = 192;
    }
  }
}

const player = new Character({
  position: {
    X: 516,
    Y: 288,
  },
  speed: 2.5,
  equipment: [
    bodySkin[0],
    feetSkin[1],
    legSkin[0],
    bracerSkin[0],
    torsoSkin[2],
    shoulderSkin[0],
    handSkin[0],
    hairSkin[0],
    headSkin[2]
  ],
})
