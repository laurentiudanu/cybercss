var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 

  document.body.classList.add("loaded-doc");

  function npc(name, level, msg) {
    var obj = {
      name:  name,
      level: level,
      msg: msg
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

  function checktof() {
    let diceroll = rval(8);
    /*
    if (diceroll <= 3) {
      return false;
    }
    else {
      return true;
    }
    */
    switch (rval(8)) {
      case 1:
        return "no";
        break;
      case 2:
        return "no";
        break;
      case 3:
        return "maybe";
        break;
      case 4:
        return "maybe";
        break;
      case 5:
        return "no";
        break;
      case 6:
        return "yes";
        break;
      case 7:
        return "maybe";
        break;
      case 8:
        return "yes";
    }
  }
  function isthere() {
    let diceroll = rval(100);
    if (diceroll <= 10) {
      return "impossible";
    }
    else if(diceroll > 10 && diceroll <= 25) {
      return "almost impossible";
    }
    else if(diceroll > 25 && diceroll <= 40) {
      return "somewhat possible";
    }
    else if(diceroll > 40 && diceroll <= 60) {
      return "50/50";
    }
    else if(diceroll > 60 && diceroll <= 75) {
      return "very likely";
    }
    else {
      return "a sure thing";
    }
  }

  var diceRoll = roll(3,6);
  console.log(diceRoll);

  var person1 = new human("lorem", "ipsum");
  person1.fullName();


  var gm = npc("za boss", "100", ["3456", "242424"]);
  console.log(gm.msg[0]);
  console.log(isthere());

  if(document.body.contains(document.querySelector(".m-h .nav-trigger"))) {
    document.querySelector(".m-h .nav-trigger").addEventListener("click", function(e){ 
      document.body.classList.toggle("mobile-nav-active");
      e.preventDefault(); 
    });
  }


});
