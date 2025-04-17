const data = new Promise((resolve, reject) => {
    resolve(1);
    resolve(2);
    resolve(3);
    reject(3);
});

data.then((res) => console.log(res)).catch((err) => console.log(err));
