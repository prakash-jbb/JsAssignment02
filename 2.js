function calculateTotalCartValue() {
    let totalPrice = 0;

    let value = arguments;
    // Chane into Array
    let valueArr = Array.from(value);

    for (let i = 0; i < valueArr.length; i++) {
        totalPrice += valueArr[i];
    }
    console.log(`The total cart value is ${totalPrice}`);

}

calculateTotalCartValue(155, 25, 30);