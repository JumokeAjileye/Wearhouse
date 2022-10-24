let msg = ""
let city =  prompt ("What is the name of your city?", "")
if ( (city===null) || (city==="") ) {
msg = "No city entered. Cannot determine delivery availability.";
}
else {
    switch (city) {
        case "New Milton" :
        msg = "We can have items delivered to you in 3 days.";
        break;

        case "Bournemouth" :
            msg = "We can have items delivered to you in 5 days.";
            break;

            case  "Manchester":
            msg = "We can have items delivered to you in 10 days.";
            break;

        case "Reading":
        msg = "We can have items delivered to you in 14 days.";
        break;

        case "Crewe":
        msg = "We can have items delivered to you in 2 weeks.";
        break;

        case "London" : 
        case "Blackheath" :
            msg = "We can have items delivered to you  in 5 weeks.";
            break;
        default : 
        msg = "sorry! we can't have items delivered to you yet.";
    }
}
