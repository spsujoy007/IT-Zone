var logo = '../assets/Logo.jpg'
var company_name = "It-Zone"

var elements = document.getElementsByClassName("logo");
for (var i = 0; i < elements.length; i++) {
    elements[i].src = logo;
}
document.getElementsByClassName("logo").alt = company_name;

// var footer = document.getElementById("footer");
// footer.insertAdjacentElement+='../HTML/footer.html'



// if(document.title())