//  USER VALUES
let userPowerValue = 0
let userClickValue = 1
let userAutoValue = 0

//EVIL VALUES
let evilPowerValue = 0
let evilAutoInterval = 1

//HERO VALUES
let levelUpCost = 10
let heroCount = 0


//  LIST OF HEROES FOR HIRE  //
let heroList = {
  hero1: {
    name: "HeroOne",
    power: 50,
    cost: 20,
    sprite: "placeholder1.gif"},

    hero2: {
      name: "HeroTwo",
      power: 50,
      cost: 20,
      sprite: "placeholder1.gif"},

      hero3: {
        name: "HeroOne",
        power: 50,
        cost: 20,
        sprite: "placeholder1.gif"},
        
        hero4: {
          name: "HeroOne",
          power: 50,
          cost: 20,
          sprite: "placeholder1.gif"}
  }


//  FUNTION THAT ADDS THE INTERVAL OF POWER TO TOTAL POWER VALUE OF KITTY, THEN DRAWS THAT VALUE TO #KITTY-POWER  //
function powerCreep(){
evilPowerValue += evilAutoInterval
// @ts-ignore
document.getElementById("kitty-power").innerText = evilPowerValue
}


//  INTERVAL AT WHICH THE KITTY'S POWER LEVEL GROWS AND HOW OFTEN POWERCREEP() RUNS  //
function powerCreepRate(){
  setInterval(powerCreep, 50)
}










powerCreepRate()