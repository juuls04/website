let vakjes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

function setup() {
  createCanvas(500, 1000);
  
}

function draw() {
  //sneller als pijltje omlaag is ingeklikt
  if (keyIsDown(DOWN_ARROW)) {
    speed = 5;
  }

  else {
    speed = 1;
  }
  frameRate(speed*20) 
  background(0);
  stroke(50);

  //spawned een blokje
  if(!vakjes.includes(1) && vakjes[04] === 0 && vakjes[05] === 0) {
    vormpjes = []
    vormen = ['streep','vierkant','t','l','ol','diagonaal','odiagonaal']
    let form = random(vormen);
    vormpjes[0] = form
    if(form === 'streep') {
      vakjes[05] = 1;
      vakjes[15] = 3;
      vakjes[25] = 1;
      vakjes[35] = 1;
      vormpjes[1] = 4;
    }
    if(form === 'vierkant') {
      vakjes[04] = 1;
      vakjes[05] = 1;
      vakjes[14] = 1;
      vakjes[15] = 1;
      vormpjes[1] = 5;
    }
    if(form === 't') {
      vakjes[04] = 1;
      vakjes[05] = 3;
      vakjes[06] = 1;
      vakjes[15] = 1;
      vormpjes[1] = 6;
    }
    if(form === 'l') {
      vakjes[04] = 1;
      vakjes[14] = 3;
      vakjes[24] = 1;
      vakjes[25] = 1;
      vormpjes[1] = 7;
    }
    if(form === 'ol') {
      vakjes[05] = 1;
      vakjes[15] = 3;
      vakjes[25] = 1;
      vakjes[24] = 1;
      vormpjes[1] = 8;
    }    
    if(form === 'diagonaal') {
      vakjes[04] = 1;
      vakjes[05] = 3;
      vakjes[15] = 1;
      vakjes[16] = 1;
      vormpjes[1] = 9;
    }    
    if(form === 'odiagonaal') {
      vakjes[14] = 1;
      vakjes[15] = 3;
      vakjes[05] = 1;
      vakjes[06] = 1;
      vormpjes[1] = 10;
    }
    
    for (let i = 0; i < 200; i = i+10) {
     if(vakjes[i] > 1 && vakjes[i+1] > 1 && vakjes[i+2] > 1 && vakjes[i+3] > 1 && vakjes[i+4] > 1 && vakjes[i+5] > 1 && vakjes[i+6] > 1 && vakjes[i+7] > 1 && vakjes[i+8] > 1 && vakjes[i+9] > 1) {
       print(i)
       for (let q = i+9; q > 0; q--) {
         if(q > 9) { 
          vakjes[q] = vakjes[q-10]
         }
         else {
           vakjes[q] = 0
         }
       }
     
   }
 } 
  
   }  
  //verplaatst blokje 1 omlaag
  else if(frameCount % 5 === 0 ){
    rood = []
    verplaatst = []
    for (let i = 199; i >= 0; i--) {
      if(vakjes[i] === 1 || vakjes[i] === 3) {
        rood.push(i)
        verplaatsing = i+10;
        verplaatst.push(vakjes[verplaatsing])
      }
    }
   
  for (let i = 0; i >= 4; i++) {
    
  }
      if(!verplaatst.includes(4) && !verplaatst.includes(5) && !verplaatst.includes(6) && !verplaatst.includes(7) && !verplaatst.includes(8) && !verplaatst.includes(9) && !verplaatst.includes(10) && rood[0] < 190) {
        for (let i = 0; i <= 4; i++) {
         a = vakjes[rood[i]]
         vakjes[rood[i]] = 0
          verplaatsing = rood[i]+10
          
         vakjes[verplaatsing] = a
        }
        }
        else{
          for (let i = 199; i >= 0; i--) {
           if(vakjes[i] === 1 || vakjes[i] === 3){
             {}
           vakjes[i] = vormpjes[1];
           }
          }
        }
    
   }
  
//kleurt de vakjes in
  function teken (y,x,fase) {
   
    if(vormpjes[0] === 'streep' && fase < 4 || fase === 4) {
      fill(0,240,240)
    }
    else if(vormpjes[0] === 'vierkant' && fase < 4 || fase === 5) {
      fill(240,240,0)
    }
    else if(vormpjes[0] === 't' && fase < 4 || fase === 6) {
      fill(160,0,240)
    }
    else if(vormpjes[0] === 'l' && fase < 4 || fase === 7) {
      fill(240,160,0)
    }
    else if(vormpjes[0] === 'ol' && fase < 4 || fase === 8) {
      fill(0,0,240)
    }
    else if(vormpjes[0] === 'diagonaal' && fase < 4 || fase === 9) {
      fill(240,0,0)
    }
    else if(vormpjes[0] === 'odiagonaal' && fase < 4 || fase === 10) {
      fill(0,240,0)
    }
    
    if(fase > 0) {
      noStroke();
      rect(y*50,x*50,50,50)
    }
    if(fase === 2) {
      fill(0,0,255)
      noStroke();
      rect(y*50,x*50,50,50)
    }
  
  }
  
  
  
  
  //checkt of een vakje ingekleurd moet worden
for (let i = 0; i < 100; i++) {
  if(i < 10) {
    coordinaten = [0,i];
    let a = i + 100;
    let coords1 = 10+coordinaten[0]
    teken(coordinaten[1], 10+coordinaten[0], vakjes[a])
    teken(coordinaten[1], coordinaten[0], vakjes[i])
  }
  if(i > 9 && i < 100) {
   coordinaten = []
    let a = i + 100;
    sNumber = i.toString();
    for (var q = 0, len = sNumber.length; q < len; q += 1) {
      coordinaten.push(+sNumber.charAt(q));
      teken(coordinaten[1], coordinaten[0], vakjes[i])
      teken(coordinaten[1], 10+coordinaten[0], vakjes[a])
     } 
   }
  }
  

  
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rood = []
    verplaatst = []

    for (let i = 199; i >= 0; i--) {
      if(vakjes[i] === 1) {
        rood.push(i)
        verplaatsing = i-1;
        verplaatst.push(vakjes[verplaatsing])
      }
    }
    
   if((vakjes[0] === 1 || vakjes[10] === 1 || vakjes[20] === 1 || vakjes[30] === 1 || vakjes[40] === 1 || vakjes[50] === 1 || vakjes[60] === 1 || vakjes[70] === 1 || vakjes[80] === 1 || vakjes[90] === 1 || vakjes[100] === 1 || vakjes[110] === 1 || vakjes[120] === 1 || vakjes[130] === 1 || vakjes[140] === 1 || vakjes[150] === 1 || vakjes[160] === 1 || vakjes[170] === 1 || vakjes[180] === 1 || vakjes[190] === 1) || verplaatst.includes(4) || verplaatst.includes(5) || verplaatst.includes(6) || verplaatst.includes(7) || verplaatst.includes(8) || verplaatst.includes(9) || verplaatst.includes(10)){
    }
    else {
   for (let i = 0; i <= 199; i++) {
    if(vakjes[i] === 1|| vakjes[i] === 3) {
        
        let verplaatsing = i-1
        vakjes[verplaatsing] = vakjes[i]
        vakjes[i] = 0
    } 
   }
  }
  }
  else if (keyCode === RIGHT_ARROW) {
    rood = []
    verplaatst = []

    for (let i = 199; i >= 0; i--) {
      if(vakjes[i] === 1 || vakjes[i] === 3) {
        rood.push(i)
        verplaatsing = i+1;
        verplaatst.push(vakjes[verplaatsing])
      }
    }
    if((vakjes[9] === 1 || vakjes[19] === 1 || vakjes[29] === 1 || vakjes[39] === 1 || vakjes[49] === 1 || vakjes[59] === 1 || vakjes[69] === 1 || vakjes[79] === 1 || vakjes[89] === 1 || vakjes[99] === 1 || vakjes[109] === 1 || vakjes[119] === 1 || vakjes[129] === 1 || vakjes[139] === 1 || vakjes[149] === 1 || vakjes[159] === 1 || vakjes[169] === 1 || vakjes[179] === 1 || vakjes[189] === 1 || vakjes[199] === 1) || verplaatst.includes(4) || verplaatst.includes(5) || verplaatst.includes(6) || verplaatst.includes(7) || verplaatst.includes(8) || verplaatst.includes(9) || verplaatst.includes(10)){
    }
    else {
    for (let i = 199; i >= 0; i--) {
     if(vakjes[i] === 1 || vakjes[i] === 3) {
        
        let verplaatsing = i+1
        vakjes[verplaatsing] = vakjes[i]
        vakjes[i] = 0
   }
  }
  }
 }
    else if (keyCode === UP_ARROW) {
    rood = []
    coords = []
    iets = []
    for (let i = 199; i >= 0; i--) {
      if(vakjes[i] === 1 ) {
        a = i.toString();
        rood.push(a)
      }
    }
        for (let i = 199; i >= 0; i-- && rood[2]) {
      if(vakjes[i] === 3 ) {
        a = i.toString();
        rood.push(a)
      }
    }  

      
     for(let i = 0; i <= 3; i++) {
      if(rood[i].length === 3){
        coords.push(rood[i].charAt(0)+rood[i].charAt(1), rood[i].charAt(2))
        
      }
      else if(rood[i].length === 2){
        coords.push(rood[i].charAt(0),rood[i].charAt(1))
        
      }
      else{
        coords.push(0,rood[i].charAt(0))
        
      }
    }
      if(vormpjes[0] != 'vierkant') {
       v0 = [coords[6]-coords[0],coords[7]-coords[1]]
       v1 = [coords[6]-coords[2],coords[7]-coords[3]]
       v2 = [coords[6]-coords[4],coords[7]-coords[5]]
       v3 = [coords[6]-coords[6],coords[7]-coords[7]]
       
      av0 = 0 -v0[0]
      av1 = 0 -v1[0]
      av2 = 0 -v2[0]
      av3 = 0 -v3[0]
       nv0 = (10*(coords[6]-v0[1])) + (coords[7]-av0)
       nv1 = (10*(coords[6]-v1[1])) + (coords[7]-av1)
       nv2 = (10*(coords[6]-v2[1])) + (coords[7]-av2)
       nv3 = (10*(coords[6]-v3[1])) + (coords[7]-av3)
        
       dv0 = nv0.toString();
       dv1 = nv1.toString();
       dv2 = nv2.toString();
       dv3 = nv3.toString();
  
      waardea = vakjes[rood[0]]
      waardeb = vakjes[rood[1]]
      waardec = vakjes[rood[2]]
      waarded = vakjes[rood[3]]
        
        
        
      if(vakjes[nv0] < 4 && vakjes[nv1] < 4 && vakjes[nv2] < 4 && vakjes[nv3] < 4 && coords[7]-av0 < 10 && coords[7]-av1 < 10 && coords[7]-av2 < 10 && coords[7]-av3 < 10 && coords[7]-av0 > 0 && coords[7]-av1 > 0 && coords[7]-av2 > 0 && coords[7]-av3 > 0) {
        
       
      vakjes[rood[0]] = 0
      vakjes[rood[1]] = 0
      vakjes[rood[2]] = 0
      vakjes[rood[3]] = 0

      
      vakjes[nv0] = waardea
      vakjes[nv1] = waardeb
      vakjes[nv2] = waardec
      vakjes[nv3] = waarded
      }
    }
      
 }
}