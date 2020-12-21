const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

const textAnim1 = TweenMax.fromTo(
  text,
  5,
  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);

const scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim1)
  .addTo(controller);

const textAnim2 = TweenMax.fromTo(
  end,
  1,
  {
    opacity: 0,
    y: "0px"
  },
  {
    opacity: 1,
    y: "60px"

  }
);

const scene3 = new ScrollMagic.Scene({
  duration: 0,
  triggerElement: section,
  triggerHook: 0,
})
  .setTween(textAnim2)
  .addTo(controller);

let accelamount = 0.1;
let scrollPos = 0;
let delay = 0;

scene1.on("update", (e) => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
