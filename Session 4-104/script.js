// object constructor
class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;
    }

    attack = function(opponent,item)
    {
        if(this.energy > 0)
        {
        let newEnergy = opponent.energy - item.iPower;
        opponent.energy=newEnergy;
        if(opponent.energy <= 0)
        {
            opponent.energy=0;
            document.getElementById(this.id).innerHTML="YOU WIN";
            document.getElementById(opponent.id).innerHTML="YOU LOSE";
        }    
        else
            {
            opponent.display();
            document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with a ${item.img}`;
            }
        }   
    }
}


//objects
const c1 = new Character("Mario",100,"c1");
const c2 = new Character("Bowser",100,"c2");
c1.display();
c2.display();

//Items
class Item{
    constructor(iName,iPower,img){
        this.iPower=iPower;
        this.iName=iName;
        this.img=img
    }
}
const item1 = new Item('Fire Plant',20,'<img class="img-c" src="img/fireplant.jpg">');
const item2 = new Item('Goomba',10,'<img class="img-c" src="img/gumba.jpg">')
const item3 = new Item('Koopa Troopa',10,'<img class="img-c" src="img/koopa.png">')
const item4 = new Item('Bomb',15,'<img class="img-c" src="img/bomb.jpg">')
const item5 = new Item('Banana',5,'<img class="img-c" src="img/banana.jpg">')
const item6 = new Item('Star',25,'<img class="img-c" src="img/star.jpg">')

const items=[item1,item2,item3,item4,item5,item6];


// General functions
const reset = function(){
    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();
    document.getElementById('console').innerHTML = ""
}

function selectItem(){
let selection = Math.floor(Math.random()*6);
return items[selection];
}
