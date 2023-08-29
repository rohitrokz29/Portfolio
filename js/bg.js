const setBackGround = () => {
    let bg_section = document.getElementById("bg");
    for (let i = 0; i < 50; i++) {
        let node = document.createElement("div");
        node.classList.add("bg-ele")

        bg_section.appendChild(node);
    }
}
setBackGround();
setTimeout(function () {
    setInterval(function () {
        let list = document.getElementsByClassName('bg-ele');
        for (let i = 0; i < 50; i++) {
            // list[i].style.rotate = "60deg";
            list[i].style.border = "2px solid #121313";
        }
    }, 2000);
}, 500);

setInterval(function () {
    let list = document.getElementsByClassName('bg-ele');
    for (let i = 0; i < 50; i++) {
        // list[i].style.rotate = "30deg";
        list[i].style.border = "2px solid #272727";
    }
}, 2000);