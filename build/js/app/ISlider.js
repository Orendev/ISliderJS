export default class ISlider
{
    constructor(config){
        this.self = this;
        this.slideIndex = config.slideIndex;
        this.islider = document.getElementById(config.id);
        this.slides = document.getElementsByClassName(config.slider_item);
        this.dots =  document.getElementsByClassName(config.dot_item);
        this.icontrols = this.islider.getElementsByClassName(config.controls_item);
        this.timer = config.timer;
        this.infinate = config.infinate;
    }


    init() {
        let self = this;
        this.showSlides(this.slideIndex);
        this.eventSlides();

        if(this.infinate){
            this.intervalID = setInterval(function () {
                self.showSlides(self.slideIndex += -1)
            } , self.timer);
        }
    }


    showSlides(n) {
        if(n > this.slides.length){
            this.slideIndex = 1;
        }
        if(n < 1){
            this.slideIndex = this.slides.length;
        }

        for (let i = 0; i < this.slides.length; i++){
            this.slides[i].style.display = "none";
        }
        for (let i = 0; i < this.dots.length; i++){
            this.dots[i].className = this.dots[i].className.replace("active","");
        }

        this.slides[this.slideIndex - 1].style.display = "block";
        this.dots[this.slideIndex - 1].className += " active";
    }

    moveAction(n) {
        this.showSlides(n);
    }

    eventSlides() {
        let self = this.self;

        for(let i = 0; i < this.icontrols.length; i++){
            this.icontrols[i].addEventListener("click", function () {
                self.moveAction(self.slideIndex += +this.dataset.action);
            }, false);
        }

        for(let i=0; i < this.dots.length; i++){
            this.dots[i].addEventListener("click", function () {
                self.moveAction(self.slideIndex = +this.dataset.action);
            }, false)
        }
    }


}


