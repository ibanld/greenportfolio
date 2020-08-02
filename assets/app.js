/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

var replace = new ReplaceMe(document.querySelector('.replace-me'));

const perfil = document.getElementById('profile');
const inicio = document.getElementById('home');
const portfolio = document.getElementById('projects');
const studies = document.getElementById('grad');

//variables para saber en que section estamos
let start = false;
let prof = false;
let acad = false;

//click en enlace perfil

perfil.addEventListener('click', function () {
  start = true;
  var tl7 = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 2000,
  });
  tl7
    .add({
      targets: '.pantalla',
      translateY: '0vh',
    })
    .add({
      targets: '.nav-bar',
      translateX: '95vw',
    })
    .add({
      targets: '#inicio',
      begin: function () {
        document.querySelector('#inicio').style.display = 'none';
        document.querySelector('#perfil').style.display = 'block';
      },
    })
    .add({
      targets: '.pantalla',
      translateY: '-105vh',
    });
  if (acad == true) {
    acad = false;
    start = true;
    var tl11 = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 2000,
    });
    tl11
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '95vw',
      })
      .add({
        targets: '#formacion',
        begin: function () {
          document.querySelector('#formacion').style.display = 'none';
          document.querySelector('#perfil').style.display = 'block';
        },
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  } else if (prof == true) {
    prof = false;
    var tl12 = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 2000,
    });
    tl12
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '95vw',
      })
      .add({
        targets: '#inicio',
        begin: function () {
          document.querySelector('#portfolio').style.display = 'none';
          document.querySelector('#perfil').style.display = 'block';
        },
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  }
});

//click en enlace portfolio
portfolio.addEventListener('click', function () {
  prof = true;
  var tl4 = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 2000,
  });

  tl4
    .add({
      targets: '.pantalla',
      translateY: '0vh',
    })
    .add({
      targets: '.nav-bar',
      translateY: '-105vh',
    })
    .add({
      targets: '.nav-bar',
      translateX: '95vw',
    })
    .add({
      targets: '#inicio',
      begin: function () {
        document.querySelector('#inicio').style.display = 'none';
        document.querySelector('#portfolio').style.display = 'block';
      },
    })
    .add({
      targets: '.nav-bar',
      translateY: '0vh',
    })
    .add({
      targets: '.pantalla',
      translateY: '-105vh',
    });

  if (start == true) {
    start = false;
    prof = true;
    var tl5 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl5
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateY: '102vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#perfil',
        begin: function () {
          document.querySelector('#perfil').style.display = 'none';
          document.querySelector('#portfolio').style.display = 'block';
        },
      })
      .add({
        targets: '.nav-bar',
        translateY: '0vh',
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  } else if (acad == true) {
    acad = false;
    prof = true;
    var tl6 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl6
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateY: '-105vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#portfolio',
        begin: function () {
          document.querySelector('#formacion').style.display = 'none';
          document.querySelector('#portfolio').style.display = 'block';
        },
      })
      .add({
        targets: '.nav-bar',
        translateY: '0vh',
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  }
});

//click en enlace formacion
studies.addEventListener('click', function () {
  acad = true;
  var tl1 = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 2000,
  });

  tl1
    .add({
      targets: '.pantalla',
      translateY: '0vh',
    })
    .add({
      targets: '.nav-bar',
      translateY: '102vh',
    })
    .add({
      targets: '.nav-bar',
      translateX: '95vw',
    })
    .add({
      targets: '#inicio',
      begin: function () {
        document.querySelector('#inicio').style.display = 'none';
        document.querySelector('#formacion').style.display = 'block';
      },
    })
    .add({
      targets: '.nav-bar',
      translateY: '0vh',
    })
    .add({
      targets: '.pantalla',
      translateY: '-105vh',
    });

  if (start == true) {
    acad = true;
    start = false;
    var tl2 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl2
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateY: '-102vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#inicio',
        begin: function () {
          document.querySelector('#perfil').style.display = 'none';
          document.querySelector('#formacion').style.display = 'block';
        },
      })
      .add({
        targets: '.nav-bar',
        translateY: '0vh',
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  } else if (prof == true) {
    acad = true;
    prof = false;
    var tl3 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl3
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateY: '102vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '95vw',
      })
      .add({
        targets: '#portfolio',

        begin: function () {
          document.querySelector('#portfolio').style.display = 'none';
          document.querySelector('#formacion').style.display = 'block';
        },
      })
      .add({
        targets: '.nav-bar',
        translateY: '0vh',
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  }
});

//click en enlace inicio

inicio.addEventListener('click', function () {
  if (start == true) {
    start = false;
    var tl8 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl8
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#perfil',
        begin: function () {
          document.querySelector('#inicio').style.display = 'block';
          document.querySelector('#perfil').style.display = 'none';
        },
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  } else if (prof == true) {
    prof = false;
    var tl9 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl9
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#perfil',
        begin: function () {
          document.querySelector('#inicio').style.display = 'block';
          document.querySelector('#portfolio').style.display = 'none';
        },
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  } else if (acad == true) {
    acad = false;
    var tl10 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    tl10
      .add({
        targets: '.pantalla',
        translateY: '0vh',
      })
      .add({
        targets: '.nav-bar',
        translateX: '0vw',
      })
      .add({
        targets: '#perfil',
        begin: function () {
          document.querySelector('#inicio').style.display = 'block';
          document.querySelector('#formacion').style.display = 'none';
        },
      })
      .add({
        targets: '.pantalla',
        translateY: '-105vh',
      });
  }
});

// mouseOver scaling
perfil.addEventListener('mouseover', function () {
  anime({
    targets: '.fa-user-astronaut',
    scale: 1.8,
    rotate: '1turn',
  });
});

perfil.addEventListener('mouseout', function () {
  anime({
    targets: '.fa-user-astronaut',
    scale: 1,
    rotate: '1turn',
  });
});

inicio.addEventListener('mouseover', function () {
  anime({
    targets: '.fa-home',
    scale: 1.8,
    rotate: '1turn',
  });
});

inicio.addEventListener('mouseout', function () {
  anime({
    targets: '.fa-home',
    scale: 1,
    rotate: '1turn',
  });
});

portfolio.addEventListener('mouseover', function () {
  anime({
    targets: '.fa-laptop-code',
    scale: 1.8,
    rotate: '1turn',
    rotate: '1turn',
  });
});

portfolio.addEventListener('mouseout', function () {
  anime({
    targets: '.fa-laptop-code',
    scale: 1,
    rotate: '1turn',
  });
});

studies.addEventListener('mouseover', function () {
  anime({
    targets: '.fa-graduation-cap',
    scale: 1.8,
    rotate: '1turn',
  });
});

studies.addEventListener('mouseout', function () {
  anime({
    targets: '.fa-graduation-cap',
    scale: 1,
    rotate: '1turn',
  });
});

//acordeon diplomas
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
