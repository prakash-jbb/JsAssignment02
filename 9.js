function uniqueCharactersCheck(userName) {

    for (var i = 0; i < userName.length; i++) {
        for (var j = i + 1; j < userName.length; j++) {
            if (userName[i] === userName[j]) {
                return true;
            }
        }

    }
    return false;


}

let result = uniqueCharactersCheck("prakash");

if (result) {
    console.log("The input string contains duplicates");
} else {
    console.log("The input string contains unique characters");
}