var slides = document.querySelectorAll('.slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var currentSlide = 0;

function showSlide() {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', function() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

nextBtn.addEventListener('click', function() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

showSlide();

document.querySelector('#sub__but').onclick = function() {
  if (document.querySelector('#sub input').value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector('#sub_div').innerHTML += `
      <div class="sub_div">
        <span id="taskname">
          ${document.querySelector('#sub input').value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
};
