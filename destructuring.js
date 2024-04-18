const person = {
    gender: "Male",
    hairColor: "Brown",
    eyeColor: "Hazel"
}




function myDestructuringFunction({gender, hairColor, eyeColor}) {
    //Destructuring Arrays
    const superHeroes = ['Batman', 'Superman', "Spiderman"];
    const [gotham, metropolis, brooklyn] = superHeroes

    console.log(gotham, metropolis, brooklyn);
    //OUTPUT
    //Batman Superman Spiderman

    //Destructuring Objects
    console.log("I am " + gender + " with " + hairColor + " hair and " + eyeColor + " eyes.");


}


myDestructuringFunction(person);