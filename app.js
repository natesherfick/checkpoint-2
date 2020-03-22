//  USER VALUES
let userPowerValue = 0
let legacyValue = 0
let userClickValue = 1
let userAutoValue = 0

//EVIL VALUES
let evilPowerValue = 0
let evilAutoInterval = 1

//UPGRADE VALUES
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
        name: "HeroThree",
        power: 50,
        cost: 20,
        sprite: "placeholder1.gif"},
        
        hero4: {
          name: "HeroFour",
          power: 50,
          cost: 20,
          sprite: "placeholder1.gif"}
  }





//  FUNTION THAT ADDS THE INTERVAL OF POWER TO TOTAL POWER VALUE OF BOTH USER AND KITTY, THEN DRAWS THAT VALUE TO #USER-POWER AND #KITTY-POWER  RESPECTIVELY//
function powerCreep(){
evilPowerValue += evilAutoInterval
userPowerValue += userAutoValue
// @ts-ignore
document.getElementById("kitty-power").innerText = evilPowerValue;
// @ts-ignore
document.getElementById("user-power").innerText = userPowerValue;
}


//  INTERVAL AT WHICH THE KITTY'S POWER LEVEL GROWS AND HOW OFTEN POWERCREEP() RUNS  //
function powerCreepRate(){
  setInterval(powerCreep, 50)
}


// 
function clickFunction(){
userPowerValue += userClickValue
// @ts-ignore
document.getElementById("user-power").innerText = userPowerValue
}



//FUNTION THAT INCREASES CLICK VALUE BY 50%
function levelUp(){
  if (legacyValue >= levelUpCost)
  userClickValue *= 1.5
  legacyValue -= levelUpCost
  levelUpCost *= 1.5
}


//  FUNCTION THAT ADDS THE CLICKED HERO TO DIV AT HERO COUNT LOCATION (IF THERE'S ROOM). ADDS HERO POWER VALUE TO AUTO VALUE, SUBTRACTS HERO COST FROM LEGACY POINTS, AND +1 TO HERO COUNT //
function hireHero (heroName) {
  let hero = heroList[heroName]

  if (legacyValue >= hero.cost && heroCount < 3){
    userAutoValue += hero.power
    legacyValue - hero.cost
    heroCount++

    // @ts-ignore
    document.getElementById(`position-${heroCount}`).src = hero.sprite;
  }
}






//INVOKED FUNCTIONS
powerCreepRate()