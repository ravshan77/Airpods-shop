

// navbar toggle
const toggleBtn = document.getElementById('navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse')

toggleBtn.addEventListener('click', function(){
    navDiv.classList.toggle('showNav');
    if(toggleBtn.firstElementChild.className == "fas fa-bars fa-fw"){
        toggleBtn.firstElementChild.className = "fas fa-times fa-fw";
        document.body.style.overflow = "hidden";
    } else {
        toggleBtn.firstElementChild.className = "fas fa-bars fa-fw";
        document.body.style.overflow = "visible";
    }
});


// toggle icon show
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
    link.addEventListener('click', function(){
        document.body.style.overflow = "visible";
        navDiv.classList.remove('showNav');
        toggleBtn.firstElementChild.className = "fas fa-bars fa-fw";
    });
});

// slider 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let idCount = 0;
const reviewSlide = document.querySelectorAll('.review-item');

showCurrentSlide(idCount);
function showCurrentSlide(id){
    hideAllSlide();
    reviewSlide.forEach(function(item, idx){
        if(id == idx){
            item.classList.add('activeSlide');
        }
    });
}

function hideAllSlide(){
    reviewSlide.forEach(function(item){
        item.classList.remove('activeSlide');
    })
}

prevBtn.addEventListener('click', function(){
    idCount--;
    if(idCount < 0){
        idCount = reviewSlide.length - 1;
    }
    showCurrentSlide(idCount);
});
nextBtn.addEventListener('click', function(){
    idCount++;
    if(idCount == reviewSlide.length){
        idCount = 0;
    }
    showCurrentSlide(idCount);
});