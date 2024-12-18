const display=["hotel_website","Orbit_Connect","News_App","vigour-mania","health-association-react-js-app","Training-and-Placement-Cell-Demo-website"]

const getProjects = async () => {
    try {
        let result = await fetch('https://api.github.com/users/rohitrokz29/repos')
            .then(res => res.json());
        let fin_result = result.filter(item => display.includes(item.name));
        fin_result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        return fin_result;
    } catch (error) {
        return null;
    }
}
const createProjectList = async () => {
    const projects = await getProjects();
    let list = document.getElementById('project-list');

    projects?.map(item => {
        let { name, description, html_url } = item
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