let usersList = ["Deepak", "Rakesh", "Madhav", "Tarun", "Rahul"];

function isUserPresent(userName) {
    let result;

    for (user of usersList) {
        if (user === userName) {
            result = true;
            break;
        }
    }

    result ? console.log(`Yes, ${userName} is a valid user.`) : console.log("No, Someone is not a valid user.");
}

isUserPresent("Deepak");