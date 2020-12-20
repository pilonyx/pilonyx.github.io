let menuContent = [
  {
    title: "About Me",
    href: "abutme.html",
  },
  {
    title: "Interests",
    href: "interest.html",
  },
  {
    title: "Projects",
    href: "interest.html",
  },
  {
    title: "Social Media",
    href: "interest.html",
  },
  {
    title: "Contact",
    href: "interest.html",
  }
  
]
let nav = mE("nav",document.body,"");
for(mi of menuContent){
  let menuItem = mE("div",nav,"menu-item");
  let a = mE("a",menuItem,"", mi.title);
  a.href = mi.href;
}
// make element
function mE(tag,parent = document.body,classname = "",htmlVAl = ""){
  let el = document.createElement(tag);
  el.className = classname;
  el.innerHTML = htmlVAl;
  parent.appendChild(el);
  return el;
}