function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello ' + name);
        }, 1000);
    });
}

exports.greet = greet;
