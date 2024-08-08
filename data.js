const nama ="Rendra";
let age = 19;

let Biodata = document.getElementById(`Biodata`);
console.log(Biodata);
 function generateBiodata() {
    let generation;
    if (age > 10 && age < 20) {
        generation = "middle";
    } 
    else if (age >= 20) {
        generation = "old";
    } 
    else {
        generation = "new";
    }
    return console.log(`my generation is`, generation);
}

console.log(nama);
console.log(age);

generateBiodata ();