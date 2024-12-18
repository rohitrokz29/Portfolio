const colors=["#00ecff","#726a00","#ff0000","#f500ff","#00ff05",]
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

//setting random border colors to the set background
setInterval(() => {

    let randomSize = randomIndex({ max: 30 });
    for (let i = 0; i < randomSize; i++) {
        try {
            let ele = document.getElementById(`${randomIndex({ max: 150 })-30}`);
            ele.style.border = `2px solid ${colors.at(randomIndex({max:5}))}`;

            setTimeout(() => {
                ele.style.border = " 2px solid transparent";
            }, 1000)
        } catch (error) {}
    }
}, 900);





