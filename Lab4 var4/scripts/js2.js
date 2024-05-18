
function check() {
    let dis = 0
    let likes = 0
    for (element of document.getElementsByTagName("input")) {
        if (element.checked) {
            if (element.id.includes("dis")) dis++
            else likes++
        }
    }
    document.getElementsByClassName("count")[0].textContent = `Кількість лайків: ${likes}. Кількість дизлайків: ${dis}`
}

for (element of document.getElementsByTagName("input")) {
    element.onchange = elem => {
        document.querySelector("label[for="+elem.target.id+"] img").src = "imgs/like2.png"
        if (elem.target.id.includes("dis")) {
            document.querySelector("label[for="+elem.target.id.substring(3)+"] img").src = "imgs/like1.png"
        } else {
            document.querySelector("label[for=dis"+elem.target.id+"] img").src = "imgs/like1.png"
        }
        check()
    }
}
