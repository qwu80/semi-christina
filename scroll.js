let sceneCount = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();
  

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 0.5;
        
        d3bands_0();
      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);


    let scene_0_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_0_5'
    })
    .setClassToggle('#scene_0_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {
        sceneCount = 0.7;
        
        d3bands_0_5();
      } else {
        sceneCount = 0.5;
      }
    })
    .addTo(controller);

    let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.7) {
        sceneCount = 1;
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        // console.log(constant_fermi) 
        // console.log(constant_temperature)
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 0.7;
      }
    })
    .addTo(controller);


  

  let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;

        // add_e("130");
        temp=270
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        d3bands();
        reset_d3bands()
        d3bands();

        d3bands_2();

          add_e(130);
        
      } else {
        sceneCount = 1;
        constant_fermi = -0.28*0.026
        reset_d3bands_2();
        d3bands_2();

      }
    })
    .addTo(controller);

  let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 3;
        d3bands_3();

        
       
        electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        add_h(130);
        temp =270
    
      } else {
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        d3bands();
        reset_d3bands()
        d3bands();

        sceneCount = 2;
        appearArray_s1 = []
        electron_add=0
        hole_add=0
        whiteArray_e=[]
        blackArray_h=[]

        add_e(130);
      }
    })
    .addTo(controller);



    let scene_3_end = new ScrollMagic.Scene({
      triggerElement: '#scene_3_end'
    })
    .setClassToggle('#scene_3_end', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        sceneCount = 3.1;
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        d3bands();
        reset_d3bands()
        d3bands();

        d3bands_3_1();

        setTemperature(20); 
      

        electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        add_e(130);
        temp =20
       
        
      } else {
        sceneCount = 3;
        appearArray_s1 = []
        electron_add=0
        hole_add=0
        whiteArray_e=[]
        blackArray_h=[]
        add_h(130);
        temp =270
      }
    })
    .addTo(controller);

  let scene_4 = new ScrollMagic.Scene({
      triggerElement: '#scene_4'
    })
    .setClassToggle('#scene_4', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        sceneCount = 4;
      } else {
        sceneCount = 3;
      }
    })
    .addTo(controller);

    // let scene_5 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_5'
    // })
    // .setClassToggle('#scene_5', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 4) {
    //     sceneCount = 5;
    //   } else {
    //     sceneCount = 4;
    //   }
    // })
    // .addTo(controller);

    // let scene_6 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_6'
    // })
    // .setClassToggle('#scene_6', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 5) {
    //     sceneCount = 6;
    //   } else {
    //     sceneCount = 5;
    //   }
    // })
    // .addTo(controller);

  // let scene_7 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_7'
  //   })
  //   .setClassToggle('#scene_7', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 6) {
  //       sceneCount = 7;
  //     } else {
  //       sceneCount = 6;
  //     }
  //   })
  //   .addTo(controller);

  // let scene_8 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_8'
  //   })
  //   .setClassToggle('#scene_8', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 7) {
  //       d3fourlevels();
  //       sceneCount = 8;
  //     } else {
  //       sceneCount = 7;
  //     }
  //   })
  //   .addTo(controller);
}