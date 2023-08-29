const setBackGround = () => {
    let bg_section = document.getElementById("bg");
    for (let i = 0; i < 120; i++) {
        let node = document.createElement("div");
        node.classList.add("bg-ele")
        node.setAttribute("id", i);
        bg_section.appendChild(node);
    }
}
setBackGround();
//random index generator
const randomIndex = ({ max }) => Math.floor(Math.random() * max) + 1;

setInterval(() => {

    let randomSize = randomIndex({ max: 30 });
    for (let i = 0; i < randomSize; i++) {
        try {
            let ele = document.getElementById(`${randomIndex({ max: 120 })}`);
            // const randomColor = randomIndex({ max: 16777215 }).toString(16);
            ele.style.backgroundColor = "#726a00";
            // ele.style.backgroundColor = `#${randomColor}`;

            setTimeout(() => {
                ele.style.backgroundColor = "transparent";
            }, 1000)
        } catch (error) {}
    }
}, 1200);
