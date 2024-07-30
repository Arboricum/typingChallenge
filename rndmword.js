

function rndmWord1a() {
attProv = '';	
var prov;
var h1;
var h2;
var h3;
  switch(livello) {
  case 1:
  case 2:
  case 3:
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h1 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h2 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h3 = parole[0];
  attProv = h1 + h2 + h3;
  break;
  
  case 4:
  prov = ((Math.random()*10)+1);
    if (prov < 5) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
    attProv = h1 + h2 + h3;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
    attProv = h1 + h2 + h3 + h4;
	}
  break;
  
  case 5:
  prov = ((Math.random()*10)+1);
    if (prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
    attProv = h1 + h2 + h3;
	} else if (prov > 4 && prov < 7) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
    attProv = h1 + h2 + h3 + h4;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	}
  break;
  
  case 6:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
    attProv = h1 + h2 + h3;
	} else if (prov > 1 && prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
    attProv = h1 + h2 + h3 + h4;
	} else if (prov > 3 && prov < 7) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	}
  break;
  
  case 7:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
    attProv = h1 + h2 + h3 + h4;
    } else if (prov > 1 && prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else if (prov > 3 && prov < 7) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	}
  break;
  
  case 8:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
    attProv = h1 + h2 + h3 + h4;
    } else if (prov > 2 && prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else if (prov > 4 && prov < 6) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else if (prov > 6 && prov < 8){
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	}
  break;
  
  case 9:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5;
    } else if (prov > 2 && prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else if (prov > 4 && prov < 6) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else if (prov > 6 && prov < 8){
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h9 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
	}
  break;
  
  case 10:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
    } else if (prov > 2 && prov < 4) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else if (prov > 4 && prov < 6) {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	} else if (prov > 6 && prov < 8){
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h9 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
	} else {
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h1 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h2 = parole[0];
    parole.sort(function(a, b){return 0.5 - Math.random()});
    h3 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h4 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h5 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h6 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h7 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h8 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h9 = parole[0];
	parole.sort(function(a, b){return 0.5 - Math.random()});
    h10 = parole[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10;
	}
  break;
  }
  if (livello > 10) {
  prov = ((Math.random()*10)+1);
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h1 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h2 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h3 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h4 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h5 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h6 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h7 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h8 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h9 = parole[0];
  parole.sort(function(a, b){return 0.5 - Math.random()});
  h10 = parole[0];
  attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10;
  speed += 1;
  }	  
}