class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
  getStats() {
  	return `NAME: ${this.name} HEALTH: ${this.health}`;
  }
  getName() {
  	return this.name;
  }
}

class Snake extends Monster {
  constructor(options) {
  	super(options);
  }
	bite(snake) {
    if(snake.name != this.name) snake.takeDamage();
  }
  takeDamage(value=10) {
  	this.health -= value;
  }
}

const snake1 = new Snake({name: 'Jack'});
const snake2 = new Snake({name: 'Jill'});

snake1.getStats();
snake2.getStats();

snake1.bite(snake1)
snake1.bite(snake2);
snake1.bite(snake2);

snake1.getStats();
snake2.getStats();


