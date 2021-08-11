var li_elements = document.querySelectorAll(".my-job ul li");
var item_elements = document.querySelectorAll(".item");

for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });

    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    
    if (li_value == "techbros") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "computer-certification-center") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

var toggle = document.getElementById("menu");
var open = document.getElementById('open-menu');
var body = document.getElementById('body');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  open.classList.toggle('open');
  body.classList.toggle('blur');
}

let navbar = document.querySelector(".header-box");
var scrollprev = window.pageYOffset;
window.onscroll = function () {
  var scrollcur = window.pageYOffset;
  if (scrollprev > scrollcur) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  scrollprev = scrollcur;
}

$(".header-box ol li").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
});