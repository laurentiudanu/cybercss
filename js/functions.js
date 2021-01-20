var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 

  document.body.classList.add("loaded-doc");

  function makeGamePlayer(name, totalScore, gamesPlayed) {
    var obj = {
      name:  name,
      totalScore: totalScore,
      gamesPlayed: gamesPlayed
    };
    return obj;
  }

  function human(fname, lname) {
    this.fname = fname,
    this.lname = lname,
    this.fullName = function() {
      console.log("Full name is: "+this.fname+" "+this.lname);
    }
  }

  function rval(sides) {
    return Math.floor(Math.random() * ((sides - 1) + 1) + 1);
  }
  
  function roll(count,sides) {
    let fvalue = 0;
    this.count = count,
    this.sides = sides;
    for (i = 0; i < count; i++) {
      fvalue = fvalue + rval(sides);
    }
    return fvalue;
  }

  var diceRoll = roll(3,6);
  console.log(diceRoll);

  var person1 = new human("lorem", "ipsum");
  person1.fullName();


  var gm = makeGamePlayer("za boss", "100", "3456");
  console.log(gm.name);

  if(document.body.contains(document.querySelector(".m-h .nav-trigger"))) {
    document.querySelector(".m-h .nav-trigger").addEventListener("click", function(e){ 
      document.body.classList.toggle("mobile-nav-active");
      e.preventDefault(); 
    });
  }


});
