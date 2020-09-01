export class Paralax {

    parallax1 = document.querySelector('#planete-1');
    parallax2 = document.querySelector('#planete-2');

    parallax4 = document.querySelector('#planete-4');


    listener = window.addEventListener('scroll',() => {
        // this.parallax1.style.backgroundPositionY = (window.scrollY * 0.4 - 300 + "px");
        // this.parallax2.style.backgroundPositionY = (window.scrollY * 0.3 + 100 + "px");
        // this.parallax4.style.backgroundPositionY = (window.scrollY * 0.1 + 400 + "px");

        // var PosY = window.scrollY;
        // console.log(window.scrollY);
    });
}