
//Navbar/Sidebar
const menuBtn = document.querySelectorAll('.menu');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

//Toggle sidebar open/close
menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    //Animation delay
    let delay = 100;
    //Toggle open class
    menu.classList.toggle('menu-open');

    //Sidenav Link Slide Animations
    setTimeout(() => {
        //Reset animations after all of them end
        resetAnimations();
    }, delay * (links.length + 1));

    //Add animation to links
    links.forEach(link => {
        //opacity
        link.style.opacity = "0";
        //Animation
        link.style.animation = "slideIn 400ms ease-in-out forwards";
        //delay
        link.style.animationDelay = delay + "ms";

        //Increase delay for each link
        delay += 100;
    });

    //Reset animation so they can be activated again 
    function resetAnimations() {
        //select all links
        links.forEach(link => {
            //remove animations
        link.style.animation = "none";
        //set opacity back to default
        link.style.opacity = "1";
        });
    }
}

//slider
const cntrl = document.querySelectorAll('.slide');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('slider-count');
const progress = document.querySelector('.progress div');

let id = 0;
//data
//array with image paths for the slider
const images =[
    './images/img1.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
];

//progress widths for rhe slider
const progressWidth = [
    '33%',
    '66%',
    '100%',
];

//text variations for the slider
const text = [
    'Work',
    'Active',
    'Travel',
];

//pagination controls
for(let i = 0; i < cntrl.length; i++) {
    //add click event for all pagination 
    cntrl[i].addEventListener('click', () => {
        //run the slider function
        slider(i);
        //set id to clicked pagination index
        id = i;
        //stop auto slide
        stopAutoSlide();
    });
    //add click event for all pagination on mobile 
    cntrlMob[i].addEventListener('click', () => {
        //run the slider function
        slider(i);
        //set id to clicked pagination index
        id = i;
        //stop auto slide
        stopAutoSlide();
    });
}

function slider(i) {
    //change thumbnail image
    img.src = images[i];
    //progress progression
    progress.style.width = progressWidth[i];
    //change title
    title.innerText = text[i] + "Collection";
    //change sub title
    subTitle.forEach(sub => {
        sub.innerText = text[i] + "Collection"
    });

    //change slide number
    count.innerText = "/0" + (i + 1);

    //remove active class from all 
    for(let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    //reset active class to clicked element
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

//slider automation

function nextSlide () {
    //increment img id
    id++;
    //check if id is greater than the number of available slides
    if (id > cntrl.length - 1) {
        id = 0;
    }

    //run the slider function
    slider(id);
}

//automate slider
let autoSlide = setInterval(nextSlide, 10000);

//stop automatic slide
function stopAutoSlide() {
    clearInterval(autoSlide);

    //restart auto slider
    autoSlide = setInterval(nextSlide, 10000);
}