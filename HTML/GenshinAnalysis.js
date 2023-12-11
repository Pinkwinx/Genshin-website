//importing stuff from html
const container = document.querySelector('.horizontal');
const imageContainer = document.querySelector('.image-container');
const lumineIdle = document.querySelector('.Lumine-Idle');
const lumineRun = document.querySelector('.Lumine-Run');

//button
document.getElementById("click").onclick = function() {
    const titleDiv = document.querySelector('.title');
    titleDiv.classList.add("fade-out");
    
    // Optionally, remove the div after the animation ends
    titleDiv.addEventListener("transitionend", function() {
        titleDiv.remove();
    });

    document.getElementById("custom-animation").classList.add("visible");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
};

//scrolling part
let isScrolling;
let isArrowKeyDown = {
    ArrowLeft: false,
    ArrowRight: false
};

let animationInterval;
//lumine animation
function toggleGifs() {
    lumineIdle.style.display = isScrolling || isArrowKeyDown.ArrowLeft || isArrowKeyDown.ArrowRight ? 'none' : 'block';
    lumineRun.style.display = isScrolling || isArrowKeyDown.ArrowLeft || isArrowKeyDown.ArrowRight ? 'block' : 'none';
}

function startAnimation() {
    if (!animationInterval) {
        animationInterval = setInterval(function() {
            lumineRun.style.display = 'block';
            lumineIdle.style.display = 'none';
        }, 100); // Adjust this interval for animation speed
    }
}

function stopAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
    lumineRun.style.display = 'none';
    lumineIdle.style.display = 'block';
}
//able to scroll with arrow keys
function handleHorizontalScroll(e) {
    const delta = (e.deltaY || -e.detail || e.wheelDelta);
    const direction = delta > 0 ? 1 : -1;
    const scrollSpeed = 1;

    if (direction > 0) {
        container.scrollLeft += 100;
    } else {
        container.scrollLeft -= 100;
    }

    e.preventDefault();

    isScrolling = true;
    toggleGifs();
    setTimeout(function() {
        isScrolling = false;
        toggleGifs();
    }, 200); // Adjust this value to suit your desired delay
}

function handleArrowKeys(e) {
    if (e.keyCode === 37) {
        container.scrollLeft -= 100;
        e.preventDefault();
        isArrowKeyDown.ArrowLeft = true;
        startAnimation();
    } else if (e.keyCode === 39) {
        container.scrollLeft += 100;
        e.preventDefault();
        isArrowKeyDown.ArrowRight = true;
        startAnimation();
    }

    isScrolling = true;
    toggleGifs();
    setTimeout(function() {
        isScrolling = false;
        toggleGifs();
    }, 200); // Adjust this value to suit your desired delay
}

function handleKeyUp(e) {
    if (e.keyCode === 37) {
        isArrowKeyDown.ArrowLeft = false;
        stopAnimation();
    } else if (e.keyCode === 39) {
        isArrowKeyDown.ArrowRight = false;
        stopAnimation();
    }

    isScrolling = false;
    toggleGifs();
}

if (document.addEventListener) {
    document.addEventListener('wheel', handleHorizontalScroll);
    document.addEventListener('mousewheel', handleHorizontalScroll);
    document.addEventListener('DOMMouseScroll', handleHorizontalScroll);
    document.addEventListener('keydown', handleArrowKeys);
    document.addEventListener('keyup', handleKeyUp);
} else {
    document.attachEvent('onmousewheel', handleHorizontalScroll);
    document.attachEvent('onkeydown', handleArrowKeys);
    document.attachEvent('onkeyup', handleKeyUp);
}
//verison line graphs
let verison = ['1.0','1.1','1.2','1.3','1.4','1.5','1.6','2.0','2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','3.0','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','4.0']
    new Chart(document.getElementById("lineGraph"), {
        type: 'line',
        data:{
            labels: verison,
            datasets: [{
                label: "How much Genshin makes each patch (in millions)",
                data: [{x:30,y:53.38},
                    {x:25,y:29.70},
                    {x:90,y:27.48},
                    {x:25,y:35.13},
                    {x:90,y:23.57},
                    {x:150,y:22.83},
                    {x:70,y:16.81},
                    {x:95,y:25.06},
                    {x:55,y:40.04},
                    {x:90,y:33.01},
                    {x:110,y:30.43},
                    {x:125,y:43.77},
                    {x:155,y:48.67},
                    {x:40,y:58.70},
                    {x:55,y:44.76},
                    {x:60,y:39.14},
                    {x:90,y:34.75},
                    {x:75,y:34.78},
                    {x:65,y:50.53},
                    {x:90,y:65.04},
                    {x:130,y:64.91},
                    {x:150,y:49.16},
                    {x:10,y:37.12},
                    {x:125,y:26.61},
                    {x:185,y:15.58},
                    {x:185,y:20.51}
                ],
                backgroundColor: 'rgb(17, 22, 99)',
            }]
        }
    })
//list for characters and rgb
let char = ['Albedo','Alhaitham','Arataki Itto','Baizhu','Cyno','Dehya','Eula','Ganyu','Hu Tao','Kaedehara Kazuha','Kamisato Ayaka','Kamisato Ayato','Keqing','Klee','Lyney','Nahida','Nilou','Raiden Shogun','Sangonomiya Kokomi','Shenhe','Tartaglia','Tighnari','Venti','Wanderer','Xiao','Yae Miko','Yelan','Yoimiya','Zhongli']
let charMode = [3,2,3,1,2,1,3,4,3,3,3,2,1,4,1,2,2,3,2,2,5,1,4,2,4,3,3,4,5]
let charRev = [44.57,35.82,53.12,9.11,32.25,13.20,36.10,67.24,84.26,52.08,88.35,60.69,9.51,61.02,11.47,60.12,43.75,104.50,16.15,52.96,55.67,19.07,89.07,36.26,80.68,42.70,90.21,64.20,81.37]
let charAbyss = [28.44,39.15,18.32,49.07,16.33,9.85,16.03,40.13,51.59,79.83,48.88,26.86,8.14,19.82,34.30,78.87,41.76,67.83,59.76,32.94,33.67,15.61,40.69,17.58,22.89,33.07,75.28,22.61,75.52]
let charbg = [
    'rgba(255, 205, 86)',
    'rgba(109, 170, 29)',
    'rgba(255, 205, 86)',
    'rgba(109, 170, 29)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64)',
    'rgba(134, 167, 201)',
    'rgba(134, 167, 201)',
    'rgba(255, 159, 64)',
    'rgba(75, 192, 192)',
    'rgba(134, 167, 201)',
    'rgba(54, 162, 235)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64)',
    'rgba(255, 159, 64)',
    'rgba(109, 170, 29)',
    'rgba(54, 162, 235)',
    'rgba(153, 102, 255)',
    'rgba(54, 162, 235)',
    'rgba(134, 167, 201)',
    'rgba(54, 162, 235)',
    'rgba(109, 170, 29)',
    'rgba(75, 192, 192)',
    'rgba(75, 192, 192)',
    'rgba(75, 192, 192)',
    'rgba(153, 102, 255)',
    'rgba(54, 162, 235)',
    'rgba(255, 159, 64)',
    'rgba(255, 205, 86)'
  ]
  let tartagliabg = [
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)'
  ]
  let cynobg = [
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)'
  ]
  let kazuhabg = [
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)'
  ]
  let eulabg = [
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(134, 167, 201)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(134, 167, 201, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(109, 170, 29, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235,0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)'
  ]
  //making new bar graphs
    new Chart(document.getElementById("barGraph1"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "How many times a 5-character has made an apperance on the featured banner",
                data: charMode,
                backgroundColor: charbg,
                  borderColor: charbg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("barGraph2"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Total amount a 5-character has made",
                data: charRev,
                backgroundColor: charbg,
                  borderColor: charbg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("tartagliaGraph1"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "How many times Tartaglia has made an apperance on the featured banner",
                data: charMode,
                backgroundColor: tartagliabg,
                  borderColor: tartagliabg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("tartagliaGraph2"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Total amount Tartaglia has made",
                data: charRev,
                backgroundColor: tartagliabg,
                  borderColor: tartagliabg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("cynoGraph1"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "How many times Cyno has made an apperance on the featured banner",
                data: charMode,
                backgroundColor: cynobg,
                  borderColor: cynobg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("cynoGraph2"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Total amount Cyno has made",
                data: charRev,
                backgroundColor: cynobg,
                  borderColor: cynobg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("barGraph3"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Avarage abyss usage rate of all 5-star limited characters in percentage",
                data: charAbyss,
                backgroundColor: charbg,
                  borderColor: charbg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("kazuhaGraph1"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Avarage abyss usage rate of Kazuha in percentage",
                data: charAbyss,
                backgroundColor: kazuhabg,
                  borderColor: kazuhabg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("kazuhaGraph2"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Total amount Kazuha has made",
                data: charRev,
                backgroundColor: kazuhabg,
                  borderColor: kazuhabg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("eulaGraph1"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Avarage abyss usage rate of Eula in percentage",
                data: charAbyss,
                backgroundColor: eulabg,
                  borderColor: eulabg,
                  borderWidth: 1
            }]
        }
    })
    new Chart(document.getElementById("eulaGraph2"), {
        type: 'bar',
        data:{
            labels: char,
            datasets: [{
                label: "Total amount Eula has made",
                data: charRev,
                backgroundColor: eulabg,
                  borderColor: eulabg,
                  borderWidth: 1
            }]
        }
    })
//add things to html
lumineIdle.style.display = 'block';
lumineRun.style.display = 'none';