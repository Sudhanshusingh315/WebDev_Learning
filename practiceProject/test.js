const p1 = new Promise((resolve, reject) => {
    console.log("working 1");
    setTimeout(() => {
        resolve("p1 resolved");
    }, 6000);
});

const p2 = new Promise((resolve, reject) => {
    console.log("working 2");
    setTimeout(() => {
        resolve("p2 resolved");
    }, 5000);
});

async function test() {
    console.log("Start");
    const v1 = await p1;
    console.log(v1);
    const v2 = await p2;
    console.log(v2);
}

test();
