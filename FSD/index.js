//console.log("one")
//setTimeout(() => {
//  console.log("two")
//}, 10)
//console.log("three")


/*setTimeout(() => {
    console.log("one")
    setTimeout(() => {
        console.log("two")      
        setTimeout(() => {
            console.log("three")
            setTimeout(() => {
                console.log("four")
                setTimeout(() => {
                    console.log("five")
                }, 10);

            }, 10);
        }, 10);
    }
        , 10);
}, 10);*/



/* mypromise.then((message) => {
      console.log(message)
  }).catch((msg) => {
      console.log(msg)
  }).finally(() => {
      console.log("all done")
  }) */

const mypromise = new Promise((resolve, reject) => {
    const username = "ptomer 40";
    const password = "1234";

    if (username === "ptomer 40" && password === "1234") {
        resolve("successful");
    } else {
        reject("Username or password is incorrect");
    }
});

const mypromise2 = new Promise((resolve, reject) => {
    const username = "ptomer 40";
    const password = "1234";

    if (username === "ptomer 40" && password === "1234") {
        resolve("login successful");
    } else {
        reject("Username or password is incorrect");
    }
});

async function handleData() {
    try {
        console.log("hello");

        const message1 = await mypromise;
        console.log(message1);

        const message2 = await mypromise2;
        console.log(message2);

    } catch (err) {
        console.log(err);
    } finally {
        console.log("all done");
    }
}

handleData();

