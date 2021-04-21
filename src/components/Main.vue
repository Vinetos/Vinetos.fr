<template>
  <section class="hero is-fullheight is-primary is-bold" id="table">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img alt="VINETOS" src="../assets/img/vinetos.png" width="75">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu"></span>
          </div>
          <div class="navbar-menu" id="navbarMenu">
            <div class="navbar-end">
              <div class="tabs is-right">
                    <span class="navbar-item">
                      <a class="button is-white is-outlined" href="https://github.com/Vinetos"
                         target="_blank">
                        <span class="icon">
                            <i class="fab fa-github"></i>
                        </span>
                        <span title="Hello from the other side">Voir sur Github</span>
                      </a>
                    </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1-desktop is-size-2-touch is-uppercase is-family-code glitch" data-text="Vinetos">
          Vinetos
        </h1>
        <h2 class="subtitle is-size-6-touch has-text-centered is-inline-flex">
          Enthusiastic developer studying Computer Sciences
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <div class="tabs is-centered">
        <ul>
          <li><a href="https://github.com/vinetos" target="_blank"><span class="icon"><i
              class="fab fa-github"></i></span></a></li>
          <li><a href="https://twitter.com/vinetos" target="_blank"><span class="icon"><i
              class="fab fa-twitter"></i></span></a></li>
        </ul>
      </div>
    </div>
    <VueParticle dom-id="table" :config="particleConfig"/>
  </section>
</template>

<script>
import VueParticle from 'vue-particlejs'

export default {
  name: "Main",
  components: {
    VueParticle
  },
  data() {
    return {
      particleConfig: {
        particles: {
          number: {value: 50, density: {enable: true, value_area: 800}},
          color: {value: "#ffffff"},
          shape: {
            type: "circle",
            stroke: {width: 0, color: "#000000"},
            polygon: {nb_sides: 5},
            image: {src: "img/github.svg", width: 100, height: 100}
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false}
          },
          size: {
            value: 3,
            random: true,
            anim: {enable: false, speed: 40, size_min: 0.1, sync: false}
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {enable: false, rotateX: 600, rotateY: 1200}
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {enable: false, mode: "grab"},
            onclick: {enable: true, mode: "push"},
            resize: true
          },
          modes: {
            grab: {distance: 400, line_linked: {opacity: 1}},
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {distance: 200, duration: 0.4},
            push: {particles_nb: 4},
            remove: {particles_nb: 2}
          }
        },
        retina_detect: true
      }
    }
  }
}
</script>

<style scoped>
.hero.is-primary.is-bold {
  background: none;
}

.hero-foot {
  padding-bottom: 5rem;
}

/* Our mixin positions a copy of our text
directly on our existing text, while
also setting content to the appropriate
text set in the data-text attribute. */
.glitch {
  position: relative;
  color: white;
  font-size: 4em;
  letter-spacing: .5em;
  /* Animation provies a slight random skew. Check bottom of doc
  for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse; }
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  /* Creates an initial clip for our glitch. This works in
  a typical top,right,bottom,left fashion and creates a mask
  to only show a certain part of the glitch at a time. */
  clip: rect(44px, 450px, 56px, 0);
  /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
  with an alternating animation to keep things fresh. */
  animation: glitch-anim 5s infinite linear alternate-reverse; }
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse; }

/* Creates an animation with 20 steaps. For each step, it calculates
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  0% {
    clip: rect(93px, 9999px, 90px, 0);
    transform: skew(0.74deg);
  }
  5% {
    clip: rect(99px, 9999px, 47px, 0);
    transform: skew(0.96deg);
  }
  10% {
    clip: rect(60px, 9999px, 50px, 0);
    transform: skew(0.54deg);
  }
  15% {
    clip: rect(41px, 9999px, 28px, 0);
    transform: skew(0.72deg);
  }
  20% {
    clip: rect(84px, 9999px, 20px, 0);
    transform: skew(0.57deg);
  }
  25% {
    clip: rect(2px, 9999px, 29px, 0);
    transform: skew(0.56deg);
  }
  30% {
    clip: rect(2px, 9999px, 84px, 0);
    transform: skew(0.26deg);
  }
  35% {
    clip: rect(37px, 9999px, 45px, 0);
    transform: skew(0.87deg);
  }
  40% {
    clip: rect(52px, 9999px, 33px, 0);
    transform: skew(0.3deg);
  }
  45% {
    clip: rect(72px, 9999px, 92px, 0);
    transform: skew(0.33deg);
  }
  50% {
    clip: rect(12px, 9999px, 8px, 0);
    transform: skew(0.99deg);
  }
  55% {
    clip: rect(9px, 9999px, 35px, 0);
    transform: skew(0.42deg);
  }
  60% {
    clip: rect(20px, 9999px, 2px, 0);
    transform: skew(0.48deg);
  }
  65% {
    clip: rect(36px, 9999px, 58px, 0);
    transform: skew(0.98deg);
  }
  70% {
    clip: rect(1px, 9999px, 63px, 0);
    transform: skew(0.73deg);
  }
  75% {
    clip: rect(56px, 9999px, 35px, 0);
    transform: skew(0.18deg);
  }
  80% {
    clip: rect(57px, 9999px, 76px, 0);
    transform: skew(0.56deg);
  }
  85% {
    clip: rect(91px, 9999px, 35px, 0);
    transform: skew(0.15deg);
  }
  90% {
    clip: rect(1px, 9999px, 30px, 0);
    transform: skew(0.64deg);
  }
  95% {
    clip: rect(33px, 9999px, 78px, 0);
    transform: skew(0.18deg);
  }
  100% {
    clip: rect(29px, 9999px, 34px, 0);
    transform: skew(0.02deg);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(40px, 9999px, 53px, 0);
    transform: skew(0.63deg);
  }
  5% {
    clip: rect(3px, 9999px, 68px, 0);
    transform: skew(0.43deg);
  }
  10% {
    clip: rect(80px, 9999px, 81px, 0);
    transform: skew(0.19deg);
  }
  15% {
    clip: rect(81px, 9999px, 55px, 0);
    transform: skew(0.48deg);
  }
  20% {
    clip: rect(53px, 9999px, 70px, 0);
    transform: skew(0.16deg);
  }
  25% {
    clip: rect(30px, 9999px, 51px, 0);
    transform: skew(0.64deg); }
  30% {
    clip: rect(73px, 9999px, 26px, 0);
    transform: skew(0.57deg);
  }
  35% {
    clip: rect(49px, 9999px, 13px, 0);
    transform: skew(0.16deg);
  }
  40% {
    clip: rect(22px, 9999px, 99px, 0);
    transform: skew(0.48deg);
  }
  45% {
    clip: rect(83px, 9999px, 76px, 0);
    transform: skew(0.53deg);
  }
  50% {
    clip: rect(4px, 9999px, 42px, 0);
    transform: skew(0.24deg);
  }
  55% {
    clip: rect(91px, 9999px, 32px, 0);
    transform: skew(0.65deg);
  }
  60% {
    clip: rect(50px, 9999px, 70px, 0);
    transform: skew(0.95deg);
  }
  65% {
    clip: rect(7px, 9999px, 49px, 0);
    transform: skew(0.15deg);
  }
  70% {
    clip: rect(47px, 9999px, 18px, 0);
    transform: skew(0.65deg); }
  75% {
    clip: rect(78px, 9999px, 24px, 0);
    transform: skew(0.02deg);
  }
  80% {
    clip: rect(76px, 9999px, 83px, 0);
    transform: skew(0.77deg);
  }
  85% {
    clip: rect(41px, 9999px, 90px, 0);
    transform: skew(0.66deg);
  }
  90% {
    clip: rect(83px, 9999px, 32px, 0);
    transform: skew(0.94deg);
  }
  95% {
    clip: rect(45px, 9999px, 99px, 0);
    transform: skew(0.31deg);
  }
  100% {
    clip: rect(15px, 9999px, 63px, 0);
    transform: skew(0.07deg);
  }
}

@keyframes glitch-skew {
  0% {
    transform: skew(-1deg);
  }
  10% {
    transform: skew(-4deg);
  }
  20% {
    transform: skew(1deg);
  }
  30% {
    transform: skew(-3deg);
  }
  40% {
    transform: skew(3deg);
  }
  50% {
    transform: skew(2deg); }
  60% {
    transform: skew(1deg);
  }
  70% {
    transform: skew(2deg); }
  80% {
    transform: skew(-3deg);
  }
  90% {
    transform: skew(0deg);
  }
  100% {
    transform: skew(-2deg);
  }
}
</style>
