export function getRootElement() {
    let node = document.getElementById("root");
    if (!node) {
        node = document.createElement("div");
        node.setAttribute("id", "root");
        document.body.appendChild(node);
    }
    return node;
}

export function getPortalElementById(id: string) {
    let node = document.getElementById(id);
    if (!node) {
        node = document.createElement("div");
        node.setAttribute("id", id);
        document.body.appendChild(node);
    }
    return node;
}
