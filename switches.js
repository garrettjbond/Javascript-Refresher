function mySwitchesFunction(day) {
    let isDay;
    // Switches are used when there are a large amount of instances you need to check against. 
    switch (day) {
        case "Sunday":
            isDay = true;
            break;
        case "Monday":
            isDay = true;
            break;
        case "Tuesday":
            isDay = true;
            break;
        case "Wednesday":
            isDay = true;
            break;
        case "Thursday":
            isDay = true;
            break;
        case "Friday":
            isDay = true;
            break;
        case "Saturday":
            isDay = true;
            break;
        default:
            isDay = false;
    }
    console.log("User's input is a day: " + isDay)
}

mySwitchesFunction("Friday");