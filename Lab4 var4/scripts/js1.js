
function start() {
    let val1 = parseInt(document.getElementById("first").value)
    let val2 = parseInt(document.getElementById("second").value)
    let val3 = parseInt(document.getElementById("third").value)
    if (!isNaN(val1)&&!isNaN(val2)&&!isNaN(val3)) {
        let res = val1*val3/1200/(1-(1+val3/1200)**(-12*val2))
        document.getElementById("fourth").value = Math.ceil(res)+"грн"
    } else {
        document.getElementById("fourth").value = ""
    }
}

document.getElementById("first").oninput = start
document.getElementById("second").oninput = start
document.getElementById("third").oninput = start
