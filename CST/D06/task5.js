let images = [
    "images/memorygame/1.gif",
    "images/memorygame/2.gif",
    "images/memorygame/3.gif",
    "images/memorygame/4.gif",
    "images/memorygame/5.gif",
    "images/memorygame/6.gif",
    "images/memorygame/1.gif",
    "images/memorygame/2.gif",
    "images/memorygame/3.gif",
    "images/memorygame/4.gif",
    "images/memorygame/5.gif",
    "images/memorygame/6.gif"
  ];
  let flipped = [];
  let checking = false;
  let matched=0

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  shuffle(images);
  
  function flip(card, index) {
    if (!flipped.includes(card) && !checking && flipped.length < 2) {
      card.src = images[index];
      flipped.push(card);
      
      if (flipped.length === 2) {
        checking = true;  
        setTimeout(checkSame, 800);
      }
    }
  }

  function checkSame() {
    if (flipped[0].src !== flipped[1].src) {
      flipped[0].src = "images/memorygame/Moon.gif";
      flipped[1].src = "images/memorygame/Moon.gif";
    }
    else{
        matched++;
       if(matched===6)
         alert("you won");
    }
    
    flipped = [];
    checking = false;  
  }