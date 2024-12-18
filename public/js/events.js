document.getElementById("see-more").addEventListener("click", () => {
    document.getElementById("info").scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("nav-home").addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "center" });
})
document.getElementById("nav-projects").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "center" });
})
document.getElementById("nav-info").addEventListener("click", () => {
    document.getElementById("info").scrollIntoView({ behavior: "smooth", block: "center" });
})
document.getElementById("nav-contacts").addEventListener("click", () => {
    document.getElementById("contacts").scrollIntoView({ behavior: "smooth", block: "center" });
})


document.getElementById('submit-form').addEventListener("click", () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let data = { name: name.value, email: email.value, message: message.value }
    if(!data.name||!data.email||!data.message){
        document.getElementById("status").innerText = "Please Enter Valid Details."
        return;
    }
    fetch(`/message/${data.name}/${data.email}/${data.message}`, {
        method: "POST",
        credentials: 'include',
        body: data,
        "Content-Type": "application/json"
    }).then(res => {
        if (res.status===200) {
            name.value = "";
            email.value = "";
            message.value = "";
            document.getElementById("status").innerText = "Message Sent"
        }
        else {
            document.getElementById("status").innerText = "Message Not Sent"
        };
        setTimeout(() => {
            document.getElementById("status").innerText = ""
        }, 5000);
    }).catch(err => {
        document.getElementById("status").innerText = "Message Not Sent"
        setTimeout(() => {
            document.getElementById("status").innerText = ""
        }, 5000);
    })

})