///////////////// Text animation section started //////////////////////////////////////////////

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid #000}";
    document.body.appendChild(css);
};

/////////////////// Text animation section end //////////////////////////////////////////////

/////////////////// onscroll navigation section started /////////////////////////////////////

        let section = document.querySelectorAll('section');
        let navLink = document.querySelectorAll('ul li a');

        window.onscroll = () => {
            section.forEach(sec=>{
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id')
                
                if( top >= offset && top < offset + height){
                    navLink.forEach(links => {
                        links.classList.remove('active')
                        document.querySelector('ul li a[href*='+id+']').classList.add('active');
                    });
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                        //mybutton.style.display = "block";
                        document.getElementById("nav").style.background = "rgba(255, 255, 255,0.8)";
                        document.getElementById("myBtn").style.display="block";
                      } else {
                        document.getElementById("nav").style.background = "transparent";
                       document.getElementById("myBtn").style.display="none";
                      }
                };
            });
        };

///////////////////// onscroll navigation section end ////////////////////////////////

//////////////////////// onscrolltop function started here ///////////////////////////////

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}  
/////////////////////////// onscrolltop function end here /////////////////////////////////////
/////////////////////////// slick slider function start here //////////////////////////////////
let leftArrow = document.getElementsByClassName("slick-prev")
let rightArrow = document.getElementsByClassName("slick-next")

// leftArrow.appendChild("img")
$('.hobbies-container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
/////////////////////////// slick slider function end here ////////////////////////////////////