

function rndmWord1D() {
attProv = '';	
var prov;
var h1;
var h2;
var h3;
  switch(livello) {
  case 1:
  case 2:
  case 3:
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h1 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h2 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h3 = paroleD[0];
  attProv = h1 + h2 + h3;
  break;
  
  case 4:
  prov = ((Math.random()*10)+1);
    if (prov < 5) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
    attProv = h1 + h2 + h3;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
    attProv = h1 + h2 + h3 + h4;
	}
  break;
  
  case 5:
  prov = ((Math.random()*10)+1);
    if (prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
    attProv = h1 + h2 + h3;
	} else if (prov > 4 && prov < 7) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
    attProv = h1 + h2 + h3 + h4;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	}
  break;
  
  case 6:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
    attProv = h1 + h2 + h3;
	} else if (prov > 1 && prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
    attProv = h1 + h2 + h3 + h4;
	} else if (prov > 3 && prov < 7) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	}
  break;
  
  case 7:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
    attProv = h1 + h2 + h3 + h4;
    } else if (prov > 1 && prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else if (prov > 3 && prov < 7) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	}
  break;
  
  case 8:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
    attProv = h1 + h2 + h3 + h4;
    } else if (prov > 2 && prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5;
	} else if (prov > 4 && prov < 6) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else if (prov > 6 && prov < 8){
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	}
  break;
  
  case 9:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5;
    } else if (prov > 2 && prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
	} else if (prov > 4 && prov < 6) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else if (prov > 6 && prov < 8){
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h9 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
	}
  break;
  
  case 10:
  prov = ((Math.random()*10)+1);
    if (prov < 2) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6;
    } else if (prov > 2 && prov < 4) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7;
	} else if (prov > 4 && prov < 6) {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8;
	} else if (prov > 6 && prov < 8){
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h9 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
	} else {
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h1 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h2 = paroleD[0];
    paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h3 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h4 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h5 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h6 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h7 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h8 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h9 = paroleD[0];
	paroleD.sort(function(a, b){return 0.5 - Math.random()});
    h10 = paroleD[0];
    attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10;
	}
  break;
  }
  if (livello > 10) {
  prov = ((Math.random()*10)+1);
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h1 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h2 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h3 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h4 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h5 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h6 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h7 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h8 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h9 = paroleD[0];
  paroleD.sort(function(a, b){return 0.5 - Math.random()});
  h10 = paroleD[0];
  attProv = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10;
  speed += 1;
  }	 
}