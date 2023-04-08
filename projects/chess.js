function setup() {
    createCanvas(800, 800);
    background(220)
    zwart = color(80,80,80)
    wit = color(200,200,200)
    coloursquares = [zwart, wit, zwart]
    selected = 'none'
    ply = 0
    beurt =['w','z']

    // setup van het boord
    boardposition = [br,bb,bn,bq,bk,bn,bb,br,bp,bp,bp,bp,bp,bp,bp,bp]
    for(let i = 0; i < 32; i++) {boardposition.push(0)}
    boardposition.push('wp','wp','wp','wp','wp','wp','wp','wp','wr','wb','wn','wq','wk','wn','wb','wr')


    // white pieces rooks, bishops, knights, king, queen, pawns
    whitepieces = [56,63,57,62,58,61,59,60,48,49,50,51,52,53,54,55]
    // black pieces rooks, bishops, knights, king, queen, pawns
    blackpieces = [0,7,1,6,2,5,3,4,8,9,10,11,12,13,14,15]
  }
function preload() {
    br = loadImage('br.png')
    bn = loadImage('bn.png')
    bb = loadImage('bb.png')
    bk = loadImage('bk.png')
    bc = loadImage('bk.png')
    bq = loadImage('bq.png')
    bp = loadImage('bp.png')
    wr = loadImage('wr.png')
    wn = loadImage('wn.png')
    wb = loadImage('wb.png')
    wk = loadImage('wk.png')
    wc = loadImage('wk.png')
    wq = loadImage('wq.png')
    wp = loadImage('wp.png')
}
function draw() {
   // tekent vakjes
    for(let i = 0; i < 64; i++) {
        //noStroke();
        fill(coloursquares[i % 2 + (floor(i/8) % 2)])
        rect((i % 8)*100,floor(i/8)*100,100,100)
    }


    
   // tekent de boardposition
    for(let i = 0; i < 64; i++) { 
        if(boardposition[i] != 0) {
            pieceplaatje = boardposition[i]
            print(pieceplaatje)
            image(pieceplaatje,i % 8 * 100,floor(i/8)*100,100,100)
        }
    }

   //tekent de stipjes
    if(selected != 'none') {
        legalmoves(selected,selectedpiece)
    }

}

function mouseClicked() {
    if(selected == 'none') {
        selected = floor(mouseX/100) + floor(mouseY/100)*8
        print(boardposition[selected])
        if(beurt[ply % 2] === 'hi'.charAt(0)) {
            selectedpiece = boardposition[selected]
            print(selectedpiece)
        }
        else{
            selected = 'none'
        }
    }
    else {
        boardposition[floor(mouseX/100)+ floor(mouseY/100)*8] = boardposition[selected]
        boardposition[selected] = 0
        selected = 'none'
        ply = ply + 1
    }
}

function legalmoves(square,spiece) {

}