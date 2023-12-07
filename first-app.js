const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1500);
    })
    return promise
}

// this function by nodejs itself it will execute the function after period of time 
//the time is set in milliseconds
setTimeout(() => {
    console.log("Timer is done")
    fetchData().then(text => {
        console.log(text)
        return fetchData()
    },).then(text2 => {
        console.log(text2)
    },)
}, 2000);