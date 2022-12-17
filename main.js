const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let playing=true;

class Field {
    constructor(field){
        this._field=field
        this.height=0;
        this.width=0;
    }
    get field(){
        return this._field
    }
    print(){
        let x=this.field
        console.log(x)
    }
    direction(){
        const input=prompt("which way you want to move:  (u,d,l,r)")
        if(input=='r'){
            this.width++;
               
        }
        if(input=='l'){
            this.width--;
               
        }
        if(input=='u'){
            this.height--;
               
        }
        if(input=='d'){
            this.height++;
               
        }
        else
        {
            console.log(`Please use u,d,l,r.`);
        }
    }
    static randfield(){
       let randnum=Math.floor(Math.random()*10)
        if(randnum>0&&randnum<7){
            return fieldCharacter;

        } 
        else{
            return hole;
        }
    }
    static generateField(rows,columns){
        var fieldArray=[]
        for(let i=0;i<rows;i++){
            fieldArray[i]=[];
        
        for(let j=0;j<columns;j++){
            fieldArray[i][j]=this.randfield();
        }
    }
    fieldArray[0].splice([0], 1, pathCharacter);
    fieldArray[Math.floor(Math.random() * rows)].splice([Math.floor(Math.random() * columns)], 1, hat);
    return fieldArray
    }
    toCheckStatus(){
        if(this.field[this.height]==undefined)
        {
            console.log("You can't go up")
        }
        switch (this.field[this.height][this.width]) {
            case fieldCharacter:
              this.field[this.height].splice([this.width], 1, pathCharacter);
              break;
            case hole:
              console.log('Game over -- You fell in a hole!');
              playing = false;
              break;
            case hat:
              console.log('You win -- you found your hat!');
              playing = false;
              break;
            case pathCharacter:
              console.log("You can't go back!")
              break;
            case undefined:
              console.log('Game over -- Out of bounds!')
              playing  = false;
            }
          
        }
    
  
}

let myField = new Field(Field.generateField(4,5));
const gameLoop = () => {
    while(playing) {
      myField.print();
      myField.direction();
      myField.toCheckStatus();
    }
  }
  
gameLoop()






