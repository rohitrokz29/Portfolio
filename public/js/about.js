const setAbout = () => {
    let skills = [{ title: "Frontend<br>Developer", img: "frontend" },
    { title: "Backend<br>Developer", img: "backend" },
    { title: "Web<br>Design", img: "design" },
    { title: "Software<br>Testing", img: "softTest" }];

    let ele = document.getElementById("skills");
    skills?.map(item => {
        const card = document.createElement('div');
        card.classList.add("skillCard");
        const img = document.createElement('img');
        img.src = `./assets/${item.img}.png`;
        img.alt = "_";
        const title = document.createElement('span');
        title.innerHTML = item.title;
        card.appendChild(img);
        card.appendChild(title);
        ele.appendChild(card);
    })
}
const setSkillList = () => {
    let ele = document.getElementById("skillset")
    let img = ["html", "css", "js", "java", "bulma", "react", "express", "nodejs", "npm", "git", "mysql", "mongodb"]
    img.map(item => {
        let node = document.createElement('img');
        node.src = `./assets/skills/${item}.png`;
        node.classList.add("skill");
        node.alt = item;
        ele.appendChild(node);
    })
}
setAbout();
setSkillList();
