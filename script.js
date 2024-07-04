function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function toggleDescription() {
    const description = document.getElementById("project-description");
    const button = document.querySelector(".btn.project-btn[onclick='toggleDescription()']");
    if (description.classList.contains("hidden")) {
      description.classList.remove("hidden");
      button.textContent = "Hide Description";
    } else {
      description.classList.add("hidden");
      button.textContent = "Show Description";
    }
  }
  



  let slideIndex = [1, 1, 1];
  let slideId = ["project1", "project2", "project3"];
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  
  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
  }
  
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dotContainer = document.getElementById(slideId[no] + "-slideshow").getElementsByClassName("dot");
  
    if (n > x.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = x.length; }
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    
    for (i = 0; i < dotContainer.length; i++) {
      dotContainer[i].className = dotContainer[i].className.replace(" active", "");
    }
    
    x[slideIndex[no] - 1].style.display = "block";
    dotContainer[slideIndex[no] - 1].className += " active";
  }