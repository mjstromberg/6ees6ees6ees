import Bee from './Bee'

class ForagerBee extends Bee{
  constructor(color) {
  	super(color);
  	this.age = 10;
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = [];
  }
  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};

export default ForagerBee;