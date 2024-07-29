// document.getElementById("toggler-bar").addEventListener("click" ,()=>{
   
//     document.querySelector(".nav-list").classList.toggle("show")
// })
$(document).ready(function() {
  console.log("Document is ready.");

  var currentPath = window.location.pathname.split("/").pop();
  console.log("Current path:", currentPath);

  if (currentPath === '') {
     currentPath = 'index.html';
  }

  $('.nav-items li').removeClass('active');

  var matchingLink = $('.nav-items li a[href="./' + currentPath + '"]');
  console.log("Matching link:", matchingLink);

  matchingLink.parent().addClass('active');
  console.log("Active class added to:", matchingLink.parent());
});

$(document).ready(function(){

    $(".toggler").click(function(){
        $(".nav-list").toggle(1000);
    })

});


document.addEventListener("DOMContentLoaded", function() {
  const icon = document.getElementById("icon");

  const changeIcon = () => {
      icon.classList.toggle("fa-times");
      icon.classList.toggle("fa-bars");
  };

  icon.addEventListener("click", changeIcon);
});




const counters = [
    { element: document.getElementById('counter1'), count: 0, limit: 34, interval: 200 },
    { element: document.getElementById('counter2'), count: 0, limit: 50, interval: 200 },
    { element: document.getElementById('counter3'), count: 0, limit: 100, interval: 100 },
    { element: document.getElementById('counter4'), count: 0, limit: 100, interval: 100 }
];

counters.forEach(counter => {
    function updateCounter() {
        counter.count++;
        counter.element.textContent = counter.count;
        if (counter.count >= counter.limit) {
            clearInterval(counter.intervalId);
        }
    }

    counter.intervalId = setInterval(updateCounter, counter.interval);
});





// menu bar

const items = document.querySelectorAll('.item');

function insertViewTransitionName() {
  items.forEach((item,i) => {
    item.style.viewTransitionName = `item-${i++}`;
  });
}

function updateBtn(btn) {
  document.querySelector('.active').classList.remove('active');
  btn.classList.add('active');
}

const resetMenu = () => items.forEach((item) => item.classList.remove('hide'));

function updateMenu(tag) {
  resetMenu();
  items.forEach((item) => {
    if (item.dataset.type !== tag && tag !== 'all') {
      item.classList.add('hide');
    }
  })
}

function activate(e) {
  updateMenu(e.target.dataset.tag);
  updateBtn(e.target)
}

function init(e) {
  if (!e.target.matches('button')) return;
  insertViewTransitionName();
  !document.startViewTransition
    ? activate(e)
    : document.startViewTransition(() => activate(e));
}

window.addEventListener('click',init,false);



// swipper js

var swiper = new Swiper(".card_slider", {
  spaceBetween: 30,
  loop:true,
  speed:1000,
  // autoplay:{
  //   dealy:2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


// $(document).ready(function(){
//   $(".nav-items li").click(function(){
//       // Remove active class from all li elements
//       $(".nav-items li").removeClass("active");
      
//       // Add active class to the clicked li element
//       $(this).addClass("active");
//   });
// });
