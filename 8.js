const eventDate = '2023-08-31';
let today = new Date;
let todayDate = today.getDate();

function remainingDays() {
    let arr = eventDate.split('-');
    let arrLength = arr.length;
    let eventDay = arr[arrLength - 1]

    console.log(eventDay - todayDate)
}

remainingDays(eventDate);