function get(className){
    return document.querySelector(className)
 }

 var mobCode = get('.mobNumIp').value;

 const slides = document.querySelectorAll('.bannerSect');
 var currentSlide = [...get('.bannerSect.current').parentNode.children].indexOf(get('.bannerSect.current')) - 1;
 var nextSlide = currentSlide+1;
 var prevSlide;
 slides.forEach(slide => {
     get('.dots').append(document.createElement("span"))
 });
 const dots = document.querySelectorAll('.dots span');
 dots[0].style.backgroundColor = "lightGray";
 get('.arrowLeft').style.display = 'none';
 function goToSlide(currentSlide, val){
     slides[currentSlide].className = 'bannerSect';
     slides[currentSlide].style.transform = "translateX("+ val +"%)";
     if(val == -100){
         slides[nextSlide].style.transform = "translateX("+ 0 +"%)";
         slides[nextSlide].className = 'bannerSect current';
     }
     else{
         slides[prevSlide].style.transform = "translateX("+ 0 +"%)";
         slides[prevSlide].className = 'bannerSect current';
     }
 }
 function checkArrow(currentSlide){
     get('.arrowLeft').style.display = 'flex';
     get('.arrowRight').style.display = 'flex';
     if(currentSlide==0){
         get('.arrowLeft').style.display = 'none'
     }
     else if(currentSlide==slides.length-1){
         get('.arrowRight').style.display = 'none'
     }
 }
 function checkDots(current){
     dots.forEach(dot => {
         dot.style.backgroundColor = "white"
     });
     dots[current].style.backgroundColor = "lightGray";
 }



 document.addEventListener('click', function(e){
    if(e.target.classList.contains("popup")){
     get('.popup').classList.remove('active')
    }
 })

document.querySelectorAll('.openPopup').forEach(pop => {
    pop.addEventListener('click', function(e){
        get('.popup').classList.add('active')
})
})



get('.inputForm').addEventListener('submit', function(e){
    e.preventDefault();
    if(get('.mobNumIp').value.length == mobCode.length){
        alert("Mobile Num Empty")
    }
    alert("Submitted")
})

get('.mobNumIp').addEventListener('keyup', function(e){
    var mobNum = this.value.slice(mobCode.length).replace(/[^\d]/,'');
    this.value = mobCode+mobNum;
})
get('.fnameIp').addEventListener('keyup', function(e){
   this.value = this.value.replace(/[^a-zA-Z]/,'');
})

get('.menu').addEventListener('click', function(){
    if(get('.menu').classList.contains('active')){
        get('.menu').classList.remove('active')
        get('.navCollapse').classList.remove('active');
    }
    else{
        get('.menu').classList.add('active')
        get('.navCollapse').classList.add('active');
    }
})


get('.arrowLeft').addEventListener('click', function(){
    currentSlide = [...get('.bannerSect.current').parentNode.children].indexOf(get('.bannerSect.current')) - 1;
    prevSlide = currentSlide-1;
    goToSlide(currentSlide, 100);
    checkArrow(prevSlide);
    checkDots(prevSlide)
})
get('.arrowRight').addEventListener('click', function(){
     currentSlide = [...get('.bannerSect.current').parentNode.children].indexOf(get('.bannerSect.current')) - 1;
    nextSlide = currentSlide+1;
    goToSlide(currentSlide, -100);
    checkArrow(nextSlide);
    checkDots(nextSlide)
})