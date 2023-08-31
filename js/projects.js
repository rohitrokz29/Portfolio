const getProjects = async () => {
    try {
        let result = await fetch('https://api.github.com/users/rohitrokz29/repos')
            .then(res => res.json());
        result.sort((a, b) => b.updated_at - a.updated_at)
        return result;
    } catch (error) {
        return null;
    }
}
const createProjectList = async () => {
    const projects = await getProjects();
    let list = document.getElementById('project-list');

    projects?.map(item => {
        let { name, description, html_url } = item
        if (name === "rohitrokz29" || name === "DSA") {
            return;
        }
        let node = document.createElement('li');
        node.classList.add("project-item");
        node.style.backgroundImage = `url(./assets/${name}.png)`;
        let projName = document.createElement('a');
        projName.innerText = name;
        projName.href = html_url;
        projName.target = "_blank";

        let projDesc = document.createElement('div');
        projDesc.appendChild(projName);
        let desc = document.createElement('span');
        desc.innerText = description?.length > 100 ? description.slice(0, 100) + '...' : description;
        projDesc.appendChild(desc);

        node.appendChild(projDesc);

        list.appendChild(node);
    });
}
createProjectList()