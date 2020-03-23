//  USER VALUES
let userPowerValue = 0
let legacyValue = 0
let userClickValue = 1
let userAutoValue = 0

//EVIL VALUES
let evilPowerValue = 1
let evilAutoInterval = 20


//UPGRADE VALUES
let levelUpCost = 10
let heroCount = 0


//  LIST OF HEROES FOR HIRE  //
let heroList = {
  hero1: {
    name: "HeroOne",
    power: 5,
    cost: 50,
    sprite: "old-man.gif"},

    hero2: {
      name: "HeroTwo",
      power: 10,
      cost: 200,
      sprite: "tipsy.gif"},

      hero3: {
        name: "HeroThree",
        power: 15,
        cost: 1000,
        sprite: "blink.gif"},
        
        hero4: {
          name: "HeroFour",
          power: 20,
          cost: 2500,
          sprite: "mecha.gif"}
  }





//  FUNTION THAT ADDS THE INTERVAL OF POWER TO TOTAL POWER VALUE OF BOTH USER AND KITTY, THEN DRAWS THAT VALUE TO #USER-POWER AND #KITTY-POWER  RESPECTIVELY//
function powerCreep(){
evilPowerValue += evilAutoInterval
userPowerValue += userAutoValue
let evilDisplay = evilPowerValue - userPowerValue

if (evilDisplay <= 0){
  document.getElementById("kitty").classList.add("hidden")
  userAutoValue = 0
  evilAutoInterval = 0
  evilDisplay = 0
  //window.location.reload()
}

// @ts-ignore
document.getElementById("kitty-power").innerText = evilDisplay;
// @ts-ignore
document.getElementById("user-power").innerText = userPowerValue;
// @ts-ignore
document.getElementById("hero-power").innerText = userAutoValue*20;
// @ts-ignore
document.getElementById("legacy-value").innerText = legacyValue;
}


//  INTERVAL AT WHICH THE KITTY'S POWER LEVEL GROWS AND HOW OFTEN POWERCREEP() RUNS  //
function powerCreepRate(){
  setInterval(powerCreep, 50)
  
}


// 
function clickFunction(){
userPowerValue += userClickValue
legacyValue += userClickValue
// @ts-ignore
document.getElementById("user-power").innerText = userPowerValue
// @ts-ignore
document.getElementById("legacy-value").innerText = legacyValue
}



//FUNTION THAT INCREASES CLICK VALUE BY 50%
function levelUp(){
  if (legacyValue >= levelUpCost){
  userClickValue *= 2
  legacyValue -= levelUpCost
  levelUpCost *= 3
  // @ts-ignore
  document.getElementById("level-up-cost").innerText = `Cost: ${levelUpCost}`
}
}


//  FUNCTION THAT ADDS THE CLICKED HERO TO DIV AT HERO COUNT LOCATION (IF THERE'S ROOM). ADDS HERO POWER VALUE TO AUTO VALUE, SUBTRACTS HERO COST FROM LEGACY POINTS, AND +1 TO HERO COUNT //
function hireHero (heroName) {
  let hero = heroList[heroName]

  if (legacyValue >= hero.cost && heroCount < 3){
    userAutoValue += hero.power
    legacyValue -= hero.cost
    heroCount++

    document.getElementById(`${heroName}`).classList.add("hidden")
    // @ts-ignore
    document.getElementById(`position-${heroCount}`).src = hero.sprite;
  }
}






//INVOKED FUNCTIONS
powerCreepRate()