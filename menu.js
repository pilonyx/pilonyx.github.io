/*let nav = document.createElementy("nav");
nav.innerHTML = ("NAV");
document.body.appendChild(nav);*/

let nav =  mE("nav", document.body, "", "NAV");

let menuContent = [
    {
        title: "About Me",
        href: "aboutme.html",
    },
    {
        title: "Interests",
        href: "interests.html",
    }, 
    {
        title: "Projects",
        href: "projects.html",
    },
    {
        title: "Social Media",
        href: "socialmedia.html",
    },
    {
        title: "Contact",
        href: "contact.html",
    }
]

for(mi of menuContent){
    let menuItem = me("div",nav,"menu-item");
    let a = mE("a", menuItem, "", mi.title);
    a.href = mi.href;
}

function mE(tag,parent = document.body,classname = "", innerVAL = ""){
    let el = createImageBitmap.Element(tag);
    el.className = classname;
    el.innerHTML - htmlVAL;
    parent.appendChild(el);
    return el;
    
}