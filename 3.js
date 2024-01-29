const students = [{
        name: "John",
        marks: 95,
    },
    {
        name: "Alka",
        marks: 69,
    },
    {
        name: "Shivam",
        marks: 75,
    },
    {
        name: "Farman",
        marks: 90,
    },
    {
        name: "Mithun",
        marks: 79,
    },
];

function checkResult(name) {
    let result;

    for (var i = 0; i < students.length; i++) {
        if (students[i].name == name && students[i].marks >= 90) {
            result = true;

        } else if (students[i].name == name && students[i].marks < 90) {
            result = false;
        }
    }



    switch (result) {
        case true:
            console.log(`Congratulations ${name}! You have cleared the exam`);
            break;
        case false:
            console.log(`Sorry ${name}! You have not cleared the exam`);
            break;
        default:
            console.log("Invalid User !!!");
            break;


    }

}

checkResult("Shivam");