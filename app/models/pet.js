'use strict';

function Pet(name, age, gender, species){
  this.name = name;
  this.age = parseInt(age);
  this.gender = gender;
  this.species = species;

  this.isZombie = false;
  this.wins = 0;

  this.health = Math.floor(Math.random()*91)+10;
  this.energy = Math.floor(Math.random()*91)+10;
  this.full = Math.floor(Math.random()*91)+10;
}

Pet.prototype.walk = function (){
  this.health += Math.floor(Math.random()*3)+1;
  this.energy -= Math.floor(Math.random()*3)+2;
  this.full   -= Math.floor(Math.random()*3)+3;
};

Pet.prototype.sleep = function (){
  this.health += Math.floor(Math.random()*2)+2;
  this.energy += Math.floor(Math.random()*5)+1;
  this.full   -= Math.floor(Math.random()*4)+4;
};

Pet.prototype.eat = function (){
  this.health += Math.floor(Math.random()*4)+1;
  this.energy -= Math.floor(Math.random()*6)+3;
  this.full   += Math.floor(Math.random()*5)+5;
};

Pet.prototype.attack = function(opponent){
  var damage = parseInt(Math.random() * 6);

  if (!this.isZombie){
    damage += (this.health/10) + (this.energy/20) + (this.full/30);
  }

  opponent.health -= damage;


  if ((opponent.health < 0) && !opponent.isZombie){
    this.wins++;
    opponent.isZombie = true;
  }
};

Pet.prototype.resurrect = function(){
  if (this.isZombie && (this.wins >= 5)){
    this.isZombie = false;
    this.wins -= 5;
    this.health = Math.floor(Math.random() * 26) + 25;
  }
};

module.exports = Pet;

