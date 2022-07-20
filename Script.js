let Nlink = document.getElementsByClassName("nlink");
//
let nav = document.getElementById("nav-toggle")
for( let i = 0; i < Nlink.length; i++) {
    Nlink.item(i).addEventListener('click', function handleclick(){
    nav.click()
})
}




