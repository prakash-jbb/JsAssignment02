function otpGenerator() {
    let num = Math.random() * (9999 - 1000) + 1000;
    num = Math.floor(num);
    console.log(num);
}

otpGenerator();