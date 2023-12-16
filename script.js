
/*FAQ*/
let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})

/*slideshow*/
const carousel = document.querySelector(".carousel"),
firstImg =  carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, preventPageX, preventScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () =>{
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>{
  icon.addEventListener("click", () =>{
    carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  })
})

const dragStart = (e) =>{
  isDragStart = true
  preventPageX = e.pageX;
  preventScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - preventPageX;
  carousel.scrollLeft = preventScrollLeft - positionDiff;
}

const dragStop = () =>{
  isDragStart = false
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

/*chart*/

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Kamagong', 'Coconut', 'Narra'],
        datasets: [{
            label: 'Tree Popularity',
            data: [25, 40, 79],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
       resposive: true,
    }
});
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ili-ilo','Bagio','Cebu', 'Negros Occidental', 'Negros Oriental'],
      datasets: [{
        label: 'Fun Raised on Deffirent Locations',
        data: [10234, 45230, 19123, 13984, 32980],
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
        }]
    },
    options: {
       resposive: true,
    }
});