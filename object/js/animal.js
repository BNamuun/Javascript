
let animal = [{type: "dog", sound: "woof", printSound: printSoundOfAnimal()}, 
{type: "cow",sound: "moo", printSound: printSoundOfAnimal()},
{type: "cat",sound: "meow", printSound: printSoundOfAnimal()},
 {type: "horse",sound: "iinnhoo", printSound: printSoundOfAnimal()},
    {type: "frog",sound: "guaga", printSound: printSoundOfAnimal()},
    {type: "heree",sound: "uaga", printSound: printSoundOfAnimal()},
    {type: "lion",sound: "arrr", printSound: printSoundOfAnimal()}, 
    {type: "hun",sound: "bla bla", printSound: printSoundOfAnimal()},
    {type: "honi",sound: "maiii", printSound: printSoundOfAnimal()}] 

    function printSoundOfAnimal(){
        return function(){
            console.log(this.type + ' makes a ' + this.sound + ' sound');
        }
    }
    for(let i = 0; i < animal.length; i++){
        animal[i].printSound()
    }
    
