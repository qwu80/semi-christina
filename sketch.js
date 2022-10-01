let appearArray_s1 = []

let blackArray_h = [];
let blackID_h  = [];
let whiteArray_e = [];
var time_count_graph =0;

let num_e;
let num_h;

let volume1;

let cc=0

let appear_id 
let disappear_id 

let tempe_fraction_e



//fraction
//donor
let n_c
let delta_ED
let fraction_e = []
let fraction_e_count
let fraction_e_count_t
let dif_e //difference in freeze count
let dif_e_current //difference in freeze difference count and existing paired e count

//acceptor 
let n_v
let delta_EA
let fraction_h = []
let fraction_h_count
let fraction_h_count_t
let dif_h //difference in freeze count
let dif_h_current //difference in freeze difference count and existing paired e count





//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100);


settings = {
  nucleus: false,
  nn: false,
  kk: false,
  valence: true,
  conduction: true
}
var generation_R = 100;
var generation_Rate; 
var generation_Rate_c; 
var current_Electron = 0;
var current_Hole = 0; 
var current_Electron_c = 0;
var current_Hole_c = 0; 
var constant_EH = 0.0000001;
var recombination_R = 0;
var recombination_Rate = 1;
var recombination_Rate_c = 1;
var ni; 
var nn;
var constant_beta = Math.pow(10,-12);
let count_buffer = 0;

var time_count =0;

let x_probability;
let x_probability_time;

////////////////////////////////
let whiteArray = [];
let blackArray = [];
let whiteID = [];
let blackID = [];
let white_seek_ball = [];
let black_seek_ball = [];
let global_id = 0;

let global_id_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;

let t_f_prob = false;

let appearArray = [];
let disappearArray = [];
let disappearArray_s1 = [];

let disappearArray_2 = []; //circles 
let disappearArray_2_pair = []; //circles 
let disappearArray_dot = [];

let generate_num; 

let gap = 200;
let l = 560;
let w = 120;

let scene1_aArray = [];
let scene1_dArray = [];
let scene1_aArray2 = [];
let scene1_dArray2 = [];

let fading = 255;

let loopp = true;

let change_square = -30
let change_length = 100+change_square;

let temp = 270; 

let ni_s1;
var generation_Rate_s1; 
var current_Electron_s1 = 0;
var current_Hole_s1 = 0; 
var recombination_Rate_s1 = 1;
var constant_beta_s1 = Math.pow(10,-12);

let g_rate;

let stop_s1 = false; 

let numm;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

var run1;
var run45;
var run3;

let button_reset;

let middle_position_Array = [];
let disappear_count = 0;
/////////
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var time_count =0;

var time_count_blink =100;

let fade;
var appear1 = 0;

let latticeAtoms = [];
let latticeAtoms_2 = [];
let latticeAtoms_e = [];
let latticeAtoms_h = [];
var globalOrbitalCount = 0;

let free_electron = [];
let free_hole = [];
let random_direction;

var opacity;


let electronLatticePositions = [];

let random_num1 = [];

let id_electron_s1 = 0;
let id_hole_s1 = 0;

var blink;
let interval_blink = 1000;

function mouseClicked() {

  // if(sceneCount==1){
  //   // reset_d3bands()
  //   // d3bands();
   
  // }

  if (sceneCount == 2) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms_e[i][j].mouseHover() && latticeAtoms_e[i][j].opacity>0 && (latticeAtoms_e[i][j].selected  == true))  {
            latticeAtoms_e[i][j].selectAtom();
            free_electron.push(new freeElectron(latticeAtoms_e[i][j].x+width/45, latticeAtoms_e[i][j].y-width/45, 1, id_electron_s1));
            id_electron_s1++;
      
            reset_d3bands_2()
            d3bands_2()
        
        }
      }
    }
  }

  if (sceneCount == 3) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms_h[i][j].mouseHover()&& latticeAtoms_h[i][j].opacity>0&& (latticeAtoms_h[i][j].selected  == true)) {
  
          
            latticeAtoms_h[i][j].selectAtom();
            free_hole.push(new freeElectron(latticeAtoms_e[i][j].x, latticeAtoms_e[i][j].y-width/45, 2, id_hole_s1));
            // goToHole[id_hole_s1] = random(electronLatticePositions);
            let nummm = int(random(-3,3))
            random_hole[id_hole_s1] = createVector(width / 2+random(random_num1).x*nummm* 90 ,-width/45+height / 2 + random(random_num1).y*nummm* 90);
            // random_direction[id_hole_s1]= createVector(int(random(-1,2)),int(random(-1,2)))
            id_hole_s1++;
 
            reset_d3bands_3()
            d3bands_3()
          
        }
      }
    }
  }

}

function setup() {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  frameRate(10);
  setInterval(time_graph, 0.00000000002);

  ////////////
 // generate balls based on frequency
//  run45 = setInterval(function(){genBalls(1);}, interval_45); // scene changing T


 run1 = setInterval(function(){genBalls_scene1(1);}, interval_1); // scene 1 gen

 blink = setInterval(function(){blinking();}, interval_blink); // blinking

//  setInterval(function(){genBalls_scene2(1);}, 100); // scene 2 gen

//  run3 = setInterval(function(){genBalls_scene3(1);}, interval_3); // scene 3 gen contant T

 
 setInterval(timeIt, 1000);

 setInterval(timeIt_blink, 10);
/////////
  sceneCount = 0;

  ///
  goToHole = [];


  random_hole = [];

  random_direction=[];

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));

  for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
    latticeAtoms[i] = [];
    latticeAtoms_e[i] = [];
    latticeAtoms_h[i] = [];
    let selected = false;
    for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
      // if ((i == 0  && (j == 1 || j == 0 || j == -1)) || (j == 0 && (i == 0 || i == -1 || i == 1))) {
        selected = true;
      // } else {
      //   selected = false;
      // }
      rx = abs(i * 90);
      ry = abs(j * 90);
      opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);


      latticeAtoms[i][j] = new  LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 0);
      latticeAtoms_e[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 1); //e
      latticeAtoms_h[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected, opacity, 2); //h

  
    }
  }

  for (let i=-4; i <= 4; i++) {
    for (let j = -4; j <= 4; j++) {
      electronLatticePositions.push({
        x: width / 2 + i * 90 +width/45, 
        y: height / 2 + j * 90
      });
    }
  }

  for (let i=-1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) 
    for (let k = -4; k <= 4; k++){
      random_num1.push({
        x: i,
        y: j,
        z: k
      });
    }
  }


}

function draw() {
  background(18, 18, 18);
  s_x = windowWidth/scale_x;
  s_y = windowHeight/scale_y;


  if (mouseX > 0) {
    select('body').addClass('noselect');
  } else {
    if (select('body').hasClass('noselect')) {
      select('body').removeClass('noselect');
    }
  }

  if (sceneCount == 0.5) {
  
    // console.log(browserZoomLevel)


    if (0.56<y_cordi/100<2 || -2<y_cordi/100<-0.56 ){
      d3bands_0_update()
    }
    if (0.56<y_cordi/100 && 2>y_cordi/100){
      num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
      opacity_circle=0
    } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
      num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
      opacity_circle=1
      //Math.round(50*Math.pow(-0.56+m/100,1/2))
    } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
      num_Line_text=0
      opacity_circle=0
    } 

    
 

    for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
      for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
 
        rx = abs(i * 90);
        ry = abs(j * 90);
        opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
  
        stroke(255, 255, 255, opacity-10 );
        line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90 + 90, height / 2 +j * 90);
        line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90, height / 2 +j * 90 + 90);
      }
    }

    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latticeAtoms[i][j].show();
      }
    }


 

  } else  if (sceneCount == 0.7) {
  
    // console.log(browserZoomLevel)


    if (0.56<y_cordi/100<2 || -2<y_cordi/100<-0.56 ){
      d3bands_0_update_5()
    }
    if (0.56<y_cordi/100 && 2>y_cordi/100){
      num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
      opacity_circle=0
    } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
      num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
      opacity_circle=1
      //Math.round(50*Math.pow(-0.56+m/100,1/2))
    } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
      num_Line_text=0
      opacity_circle=0
    } 

    
 

    for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
      for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
 
        rx = abs(i * 90);
        ry = abs(j * 90);
        opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);
  
        stroke(255, 255, 255, opacity-10 );
        line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90 + 90, height / 2 +j * 90);
        line(width / 2 +i * 90, height / 2 +j * 90, width / 2 +i * 90, height / 2 +j * 90 + 90);
      }
    }

    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latticeAtoms[i][j].show();
      }
    }


 

  }
   else if (sceneCount == 1) {


    // new code 

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].show ==0){
    //     whiteArray.splice(i);
    //   }
    // }

    // for (let i = 0; i < blackArray.length; i++) {
    //   if (blackArray[i].show ==0){
    //     blackArray.splice(i);
    //   }
    // }



    // d3bands_update_up()
    // console.log(y_cordi)
    
    // settings.nucleus = true
   
    // console.log(x_cordi_real)
    

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

    //Math.round(100*((Math.log((1/((i+10)/100))-1))*0.026/constant_temperature*300+constant_fermi))
 //   x_probability = 1/(1+Math.exp((y_cordi-constant_fermi)/(0.026*constant_temperature/300)));
   


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    if (0.56<y_cordi/100 && 2>y_cordi/100){
      num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
      // opacity_circle=0
      // opacity_circle_up=1
    } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
      num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
      // opacity_circle=1
      // opacity_circle_up=0
      //Math.round(50*Math.pow(-0.56+m/100,1/2))
    } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
      num_Line_text=0
      opacity_circle=0
      opacity_circle_up=0
    } 

    d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    fill(255)
    rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // line(110,640,160,640)

    fill(235, 58, 52)
    ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    //270-320 y
    //0-300 x
    // 320 = 300a+270
    // a= (320-270)/300
    // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);

    fill(255)
    textSize(18);
  
    text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {

    //   if (whiteArray[i].dead == 1){
     
    //     whiteArray.splice(i);
    //   }
    // }
      
      for (let i = 0; i < whiteArray.length; i++) {
        if (whiteArray[i].dead == 0){
        whiteArray[i].display();
        whiteArray[i].appear_update();
        whiteArray[i].update();
  
       
  
        if (whiteArray[i].appear>255) {
          whiteArray[i].random_walk();
        }
  
      }
      }
     
    

    // for (let i = 0; i < blackArray.length; i++) {
  
    //   if (blackArray[i].dead == 1){
     
    //     blackArray.splice(i);
    //     }
    //   }
      
      for (let i = 0; i < blackArray.length; i++) {
        if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();


      
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    
    }
  }
    
    //  // new code 
    
    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].show ==0){
    //     whiteArray.splice(i);
    //   }
    // }

    // for (let i = 0; i < blackArray.length; i++) {
    //   if (blackArray[i].show ==0){
    //     blackArray.splice(i);
    //   }
    // }

  //   for (let i = 0 ; i<disappearArray.length; i++) {
  //     if (typeof disappearArray[i] != "undefined") {
  //     if (disappearArray[i].alpha<1) {
  //       disappearArray.splice(disappearArray[i], 1);
  //     }
  //   }
  // }

  //   for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
  //     if (typeof disappearArray_2_pair[i] != "undefined") {
  //     if (disappearArray_2_pair[i].disappear<1) {
  //       disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  //     }
  //   }
  //   }

  // //   for (let i = 0 ; i<whiteArray.length; i++) {
  // //     if (typeof whiteArray[i] != "undefined") {
  // //     if (whiteArray[i].show !=1) {
  // //       whiteArray.splice(whiteArray[i], 1);
  // //     }
  // //   }
  // // }



  //   for (let i = 0 ; i<appearArray.length; i++) {
  //     if (appearArray[i].alpha<1) {
  //       appearArray.splice(appearArray[i], 1);
  //     }
  //   }

  //   for (let i = 0 ; i<disappearArray_2.length; i++) {
  //     if (typeof disappearArray_2[i] != "undefined") {
  //     if (disappearArray_2[i].disappear<1) {
  //       disappearArray_2.splice(disappearArray_2[i], 1);
  //     }
  //   }
  // }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();
          // whiteArray.splice(i);
          // blackArray.splice(k);


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(whiteArray[i], 1);
         blackArray.splice(blackArray[k], 1);
         break

         
         
     
       }
   }

    }









  
    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    fill(25,25,25,100)
    rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);



    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
    // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
    // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
    text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
    text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
    

    textSize(14*s_x)
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )

      textSize(10*s_x)
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )

    //restart
  

    // fill(255, 58, 23,210);
    // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
  


    // textSize(17*s_x)
    // noStroke()
    // strokeWeight(2)
    // fill(255);
    // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);


    if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
    //   fill(125, 241, 148,210);
    // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
  
    textSize(17*s_x)
    noStroke()
    strokeWeight(2)
    fill(255);
    text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
    }

  } else if (sceneCount == 2) {

    if (0.56<y_cordi/100 && 2>y_cordi/100){
      num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
      // opacity_circle=0
      // opacity_circle_up=1
    } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
      num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
      // opacity_circle=1
      // opacity_circle_up=0
      //Math.round(50*Math.pow(-0.56+m/100,1/2))
    } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
      num_Line_text=0
      opacity_circle=0
      opacity_circle_up=0
    } 

    d3bands_update_2()
 
    
    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;


    drawingContext.setLineDash([0]);


    if (time_count ==0) {
      if (electron_add >0 || hole_add>0) {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
          
      
          // globalX += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));

          time_count_graph=1 
        }  else {
          // globalX += step;
        }

       

      } else {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
        generation_Rate_c = 0.01*ni;
        
    
        // globalX += step;
        
        current_Electron_c += generation_Rate_c-recombination_Rate_c; 
        current_Hole_c += generation_Rate_c-recombination_Rate_c;
        recombination_Rate_c = current_Electron_c*0.01;
        time_count_graph=1
        } else {
          // globalX += step;
        
        }
      }
    } else {
      // globalX += step;
    }

    

  


  
      //temp draw

    // fill(235, 177, 52);
    fill(255)
    rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // line(110,640,160,640)

    fill(235, 58, 52)
    ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    //270-320 y
    //0-300 x
    // 320 = 300a+270
    // a= (320-270)/300
    // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);

    fill(255)
    textSize(18);
  
    text(temp+"K",(70+140)*s_x,(640+115)*s_y)


    

    // g_rate = 0.000000112099*generation_Rate_c+0.999998791


      // g_rate = 0.000002036*generation_Rate_c+0.99999

      g_rate = 0.00000112099*generation_Rate_c+0.999998791
    
      // g_rate = 0.000000112099*generation_Rate_c+0.999998791
      // g_rate = generation_Rate_c/10000+1

   
    var target = createVector(300, 300);
    

    for (let i = 0; i < whiteArray.length; i++) {
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }

     
    }

  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }







    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
        //  whiteArray.splice(whiteArray[i], 1);
        //  blackArray.splice(blackArray[k], 1);
         break       
       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
        //  whiteArray.splice(whiteArray[i], 1);
        //  blackArray.splice(blackArray[k], 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }






  
    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    fill(25,25,25,100)
    rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);



    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
    // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
    // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
    text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
    text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
    

    textSize(14*s_x)
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )

      textSize(10*s_x)
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )

    //restart
  

    // fill(255, 58, 23,210);
    // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
  


    // textSize(17*s_x)
    // noStroke()
    // strokeWeight(2)
    // fill(255);
    // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);


    if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
    //   fill(125, 241, 148,210);
    // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
  
    textSize(17*s_x)
    noStroke()
    strokeWeight(2)
    fill(255);
    text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
    }
 



  } else if (sceneCount == 3) {


num_e = (2*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300))))));
num_h = (2*num_Line_text*(1-(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300)))))));
    // console.log(num_e)


    if (0.56<y_cordi/100 && 2>y_cordi/100){
      num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
      // opacity_circle=0
      // opacity_circle_up=1
    } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
      num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
      // opacity_circle=1
      // opacity_circle_up=0
      //Math.round(50*Math.pow(-0.56+m/100,1/2))
    } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
      num_Line_text=0
      opacity_circle=0
      opacity_circle_up=0
    } 


    d3bands_update_3()
  
 
    
    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;


    drawingContext.setLineDash([0]);


    if (time_count ==0) {
      if (electron_add >0 || hole_add>0) {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
          
      
          // globalX += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));

          time_count_graph=1 
        }  else {
          // globalX += step;
        }

       

      } else {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
        generation_Rate_c = 0.01*ni;
        
    
        // globalX += step;
        
        current_Electron_c += generation_Rate_c-recombination_Rate_c; 
        current_Hole_c += generation_Rate_c-recombination_Rate_c;
        recombination_Rate_c = current_Electron_c*0.01;
        time_count_graph=1
        } else {
          // globalX += step;
        
        }
      }
    } else {
      // globalX += step;
    }

    

  


  
      //temp draw


    fill(255)
    rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
 

    fill(235, 58, 52)
    ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    //270-320 y
    //0-300 x
    // 320 = 300a+270
    // a= (320-270)/300
    // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);

    fill(255)
    textSize(18);
  
    text(temp+"K",(70+140)*s_x,(640+115)*s_y)


    

    // g_rate = 0.000000112099*generation_Rate_c+0.999998791


      // g_rate = 0.000002036*generation_Rate_c+0.99999
    
      g_rate = 0.00000112099*generation_Rate_c+0.999998791
      // g_rate = 0.000000112099*generation_Rate_c+0.999998791
      // g_rate = generation_Rate_c/10000+1

   
    var target = createVector(300, 300);
    

    for (let i = 0; i < whiteArray.length; i++) {
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }

     
    }

  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



  //   for (let i = 0 ; i<disappearArray.length; i++) {
  //     if (typeof disappearArray[i] != "undefined") {
  //     if (disappearArray[i].alpha<1) {
  //       disappearArray.splice(disappearArray[i], 1);
  //     }
  //   }
  // }

  //   for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
  //     if (typeof disappearArray_2_pair[i] != "undefined") {
  //     if (disappearArray_2_pair[i].disappear<1) {
  //       disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  //     }
  //   }
  //   }




  //   for (let i = 0 ; i<appearArray.length; i++) {
  //     if (appearArray[i].alpha<1) {
  //       appearArray.splice(appearArray[i], 1);
  //     }
  //   }

  //   for (let i = 0 ; i<disappearArray_2.length; i++) {
  //     if (typeof disappearArray_2[i] != "undefined") {
  //     if (disappearArray_2[i].disappear<1) {
  //       disappearArray_2.splice(disappearArray_2[i], 1);
  //     }
  //   }
  // }



    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
        //  whiteArray.splice(whiteArray[i], 1);
        //  blackArray.splice(blackArray[k], 1);
         break       
       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
        //  whiteArray.splice(whiteArray[i], 1);
        //  blackArray.splice(blackArray[k], 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }






  
    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    fill(25,25,25,100)
    rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);



    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
    // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
    // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
    text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
    text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
    

    textSize(14*s_x)
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
      // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
      text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )

      textSize(10*s_x)
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
      text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
      // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )

    //restart
  

    // fill(255, 58, 23,210);
    // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
  


    // textSize(17*s_x)
    // noStroke()
    // strokeWeight(2)
    // fill(255);
    // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);


    if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
    //   fill(125, 241, 148,210);
    // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
  
    textSize(17*s_x)
    noStroke()
    strokeWeight(2)
    fill(255);
    text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
    }
 



  }  
  
  else if (sceneCount == 3.1) {




    num_e = (2*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300))))));
    num_h = (2*num_Line_text*(1-(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300)))))));
        // console.log(num_e)
    
    
        if (0.56<y_cordi/100 && 2>y_cordi/100){
          num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
          // opacity_circle=0
          // opacity_circle_up=1
        } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
          num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
          // opacity_circle=1
          // opacity_circle_up=0
          //Math.round(50*Math.pow(-0.56+m/100,1/2))
        } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
          num_Line_text=0
          opacity_circle=0
          opacity_circle_up=0
        } 
    
    
        d3bands_update_3_1()
      
     
        
        s_x = windowWidth/scale_x;
        s_y = windowHeight/scale_y;
    
    
        drawingContext.setLineDash([0]);
    
    
        if (time_count ==0) {
          if (electron_add >0 || hole_add>0) {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
              generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
              
          
              // globalX += step;
              
              current_Electron_c += generation_Rate_c-recombination_Rate_c; 
              current_Hole_c += generation_Rate_c-recombination_Rate_c;
              recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));
    
              time_count_graph=1 
            }  else {
              // globalX += step;
            }
    
           
    
          } else {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
            generation_Rate_c = 0.01*ni;
            
        
            // globalX += step;
            
            current_Electron_c += generation_Rate_c-recombination_Rate_c; 
            current_Hole_c += generation_Rate_c-recombination_Rate_c;
            recombination_Rate_c = current_Electron_c*0.01;
            time_count_graph=1
            } else {
              // globalX += step;
            
            }
          }
        } else {
          // globalX += step;
        }
    
        
    
      
    
    
      
          //temp draw
    
    
        fill(255)
        rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
        ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
     
    
        fill(235, 58, 52)
        ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
        rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);
    
        //270-320 y
        //0-300 x
        // 320 = 300a+270
        // a= (320-270)/300
        // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);
    
        fill(255)
        textSize(18);
      
        text(temp+"K",(70+140)*s_x,(640+115)*s_y)
    
    
        
    
        // g_rate = 0.000000112099*generation_Rate_c+0.999998791
    
    
          // g_rate = 0.000002036*generation_Rate_c+0.99999
        
          g_rate = 0.00000112099*generation_Rate_c+0.999998791
          // g_rate = 0.000000112099*generation_Rate_c+0.999998791
          // g_rate = generation_Rate_c/10000+1
    
       
        var target = createVector(300, 300);
        
    
        for (let i = 0; i < whiteArray.length; i++) {

          if (whiteArray[i].swap ==0) {
          whiteArray[i].display();
          whiteArray[i].appear_update();
          whiteArray[i].update();
    
          
       
          if (whiteArray[i].appear>255) {
            whiteArray[i].random_walk();
          }
    
        }

        if (whiteArray[i].swap ==1) {


           //if not freeze and not override 
           if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==0) {
            if (whiteArray[i].appear>255) {
              whiteArray[i].straight_walk()
              if (whiteArray[i].position.y > 49*s_y) {
                whiteArray[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 ){
                whiteArray[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray[m].assigned =1
                whiteArray[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray[i].assigned ==1) {
            whiteArray[i].easy_seek()

            if (abs(whiteArray[i].position.x-whiteArray[i].target.x)<10 && abs(whiteArray[i].position.y-whiteArray[i].target.y)<10) {

      
              whiteArray[i].stop()
              whiteArray[i].position = createVector(appearArray_s1[whiteArray[i].match].x,appearArray_s1[whiteArray[i].match].y)
            

            }

          }


        }

         
        }
    
      
    
    
        for (let i = 0; i < blackArray.length; i++) {
        
          
          blackArray[i].display();
          blackArray[i].appear_update();
          blackArray[i].update();
    
      
          if (blackArray[i].appear>255) {
            blackArray[i].random_walk();
          }
        
    
         
        }
    ////h 
        for (let i = 0; i < blackArray_h.length; i++) {
  

        
          if (blackArray_h[i].id == "h") {
            blackArray_h[i].display();
            blackArray_h[i].appear_update();
            blackArray_h[i].update();
  
      
            if (fraction_h_count>0){
//not moving in initialize
              blackArray_h[i].freeze = 1
              fraction_h_count-=1
   

            } 


          } 
          


          blackArray_h[i].display();
          blackArray_h[i].appear_update();
          blackArray_h[i].update();


          //if not freeze and not override 
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==0) {
            if (blackArray_h[i].appear>255) {
              blackArray_h[i].straight_walk()
              if (blackArray_h[i].position.y > 49*s_y) {
                blackArray_h[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==5){
                blackArray_h[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                blackArray_h[m].assigned =1
                blackArray_h[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==1) {
            blackArray_h[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(blackArray_h[i].position.x-blackArray_h[i].target.x)<10 && abs(blackArray_h[i].position.y-blackArray_h[i].target.y)<10) {

      
              blackArray_h[i].stop()
              blackArray_h[i].position = createVector(appearArray_s1[blackArray_h[i].match].x,appearArray_s1[blackArray_h[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    
        for (let i = 0; i < whiteArray_e.length; i++) {
  

        
          if (whiteArray_e[i].id == "e") {
            whiteArray_e[i].display();
            whiteArray_e[i].appear_update();
            whiteArray_e[i].update();
  
      
            if (fraction_e_count>0){
//not moving in initialize
              whiteArray_e[i].freeze = 1
              fraction_e_count-=1
   

            } 


          } 
          


          whiteArray_e[i].display();
          whiteArray_e[i].appear_update();
          whiteArray_e[i].update();


          //if not freeze and not override 
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==0) {
            if (whiteArray_e[i].appear>255) {
              whiteArray_e[i].straight_walk()
              if (whiteArray_e[i].position.y > 49*s_y) {
                whiteArray_e[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==4){
                whiteArray_e[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray_e[m].assigned =1
                whiteArray_e[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==1) {
            whiteArray_e[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(whiteArray_e[i].position.x-whiteArray_e[i].target.x)<10 && abs(whiteArray_e[i].position.y-whiteArray_e[i].target.y)<10) {

      
              whiteArray_e[i].stop()
              whiteArray_e[i].position = createVector(appearArray_s1[whiteArray_e[i].match].x,appearArray_s1[whiteArray_e[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    ////no splice bunny
    
      //   for (let i = 0 ; i<disappearArray.length; i++) {
      //     if (typeof disappearArray[i] != "undefined") {
      //     if (disappearArray[i].alpha<1) {
      //       disappearArray.splice(disappearArray[i], 1);
      //     }
      //   }
      // }
    
      //   for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      //     if (typeof disappearArray_2_pair[i] != "undefined") {
      //     if (disappearArray_2_pair[i].disappear<1) {
      //       disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      //     }
      //   }
      //   }
    
    
    
    
      //   for (let i = 0 ; i<appearArray.length; i++) {
      //     if (appearArray[i].alpha<1) {
      //       appearArray.splice(appearArray[i], 1);
      //     }
      //   }
    
      //   for (let i = 0 ; i<disappearArray_2.length; i++) {
      //     if (typeof disappearArray_2[i] != "undefined") {
      //     if (disappearArray_2[i].disappear<1) {
      //       disappearArray_2.splice(disappearArray_2[i], 1);
      //     }
      //   }
      // }

   

////////////////




    
        for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
          if (disappearArray_2_pair[i].disappear<1) {
            disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      
          } else {
            continue
          }
        }
        }
    
        for (let i = 0; i < appearArray.length; i++) {
          appearArray[i].display();
          appearArray[i].update();
    
         
        }
        

        //note
        for (let i = 0; i < appearArray_s1.length; i++) {
          appearArray_s1[i].display();
          appearArray_s1[i].update();
         
        }
        for (let i = 0; i < disappearArray.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray[i].display();
          disappearArray[i].update();
          }
        }
    
    
        for (let i = 0; i < disappearArray_dot.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray_dot[i].display();
          // disappearArray_dot[i].update();
          }
        }
    
    
        
        // new  double circle
        for (let i = 0; i < disappearArray_2.length; i++) {
          if (typeof disappearArray_2[i] != "undefined") {
          disappearArray_2[i].display();
          disappearArray_2[i].update_circle();
          disappearArray_2[i].update_location();
          // disappearArray_2[i].seek(middle_position_Array[i]);
          
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
    
        disappearArray_2_pair[i].display();
        disappearArray_2_pair[i].update_circle();
        disappearArray_2_pair[i].update_location();
        // disappearArray_2_pair[i].seek(middle_position_Array[i]);
       
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
            for (let k = 0; k < disappearArray_2.length; k++) {
              if (typeof disappearArray_2[k] != "undefined") {
               if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
                disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
                disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
    
               }
              
              
              
              }}}}
    
    
    
    
    
    
    //disappear
          for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
           && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray[k].stop();
             whiteArray[i].noShow();
             blackArray[k].noShow();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break       
           }
       }
    
        }
    
    
        //disappear white & black new h 
        for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
           && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray_h[k].stop();
             whiteArray[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
         
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
     
        }
    
    
             //disappear new white e & black 
             for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
            //disappear new white e & new black h
            for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray_h.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray_h[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray_h[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
    
    
    
    
      
        // temp = slider_temperature.value();
    
    
        stroke(125, 241, 148,100);
        strokeWeight(1);
        fill(25,25,25,100)
        rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);
    
        noFill();
        rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);
    
    
    
        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
        // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
        text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
        text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
        
    
        textSize(14*s_x)
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )
    
          textSize(10*s_x)
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )
    
        //restart
      
    
        // fill(255, 58, 23,210);
        // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
      
    
    
        // textSize(17*s_x)
        // noStroke()
        // strokeWeight(2)
        // fill(255);
        // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
    
    
        if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
        //   fill(125, 241, 148,210);
        // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
      
        textSize(17*s_x)
        noStroke()
        strokeWeight(2)
        fill(255);
        text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
        }
     
    
    
    
      } else if (sceneCount == 3.15) {
    
  
    

  } else if (sceneCount == 3.25) {


  } else if (sceneCount == 4) {
  
  }
}


setTemperature = (te) => {
  constant_temperature = te;
  temp = te;
  if (sceneCount == 1) {
   
    temp = te;
    constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    // console.log(constant_fermi) 
    // console.log(constant_temperature)
    reset_d3bands()
    d3bands()

  } else if (sceneCount==2){
    //postive 

    temp = te;

    nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

    // console.log(constant_fermi_positive)

    reset_d3bands_2()
    d3bands_2()


  } else if (sceneCount==3){
    //negative
   
    temp = te;
    // constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000

    nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (hole_add+Math.pow((Math.pow(hole_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_negative = -((0.026/300)*temp * Math.log(inside))+((-0.28)*(0.026/300*temp))

    reset_d3bands_3()
    d3bands_3()
  }
   if (sceneCount==3.1){
    
    temp = te;


    //freeze

    nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add*tempe_fraction_e+Math.pow((Math.pow(electron_add*tempe_fraction_e,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

    reset_d3bands_3_1()
    d3bands_3_1()

    ///  fraction cal   // n_c delta_ED

    current_Electron_c = Math.round(electron_add ) 
    e_count = Math.pow(100,((Math.log10(Math.round(electron_add ) )-8)/2))/1000
  
////e//////////////////////////////////
  n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
  // let tempe_fraction_e
  tempe_fraction_e = (-1+Math.pow(1+8*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp),1/2))/(4*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp))
  
  if (tempe_fraction_e == NaN) {
    current_Electron_c = 0.0000001
  } else {
    current_Electron_c = Math.round(electron_add ) * tempe_fraction_e
  }
  
  
  console.log (tempe_fraction_e)
  fraction_e.push(Math.round(100*tempe_fraction_e)/100)
  // console.log(tempe_fraction_e+"donor")

  fraction_e_count_t = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))+1
  //freeze count 
 
  if (fraction_e_count_t > Math.round(e_count*(1-fraction_e[fraction_e.length-2])+1)){
//more freeze , random go to location, override electron,,,low temp 
dif_e = fraction_e_count_t- Math.round(e_count*(1-fraction_e[fraction_e.length-2])+1)

console.log(dif_e+"more freeze")

for (let i = 0; i < whiteArray_e.length; i++) {
  if ( dif_e> 0 && whiteArray_e[i].freeze == 0 ) {
    whiteArray_e[i].override = 1
    dif_e-=1
  }
}

if (dif_e>0) {

  for (let i = 0; i < whiteArray.length; i++) {
    if ( dif_e> 0 && whiteArray[i].freeze == 0 && whiteArray[i].swap == 1 ) {
      whiteArray[i].override = 1
      dif_e-=1
    }
  }

}


  } 
  
  if (fraction_e_count_t < Math.round(e_count*(1-fraction_e[fraction_e.length-2])+1)){
//less freeze 


dif_e =(Math.round(e_count*(fraction_e[fraction_e.length-1]))+1) -  Math.round(e_count*(fraction_e[fraction_e.length-2])+1) 
console.log(dif_e+"more moving")
for (let i = 0; i < whiteArray_e.length; i++) {
  if (whiteArray_e[i].id == "e" && dif_e> 0 &&whiteArray_e[i].freeze == 1 || (whiteArray_e[i].override==1&&whiteArray_e[i].movingVelocity == 0&& dif_e> 0)) {
    whiteArray_e[i].freeze = 0
    whiteArray_e[i].override = 0

    whiteArray_e[i].restart()

    dif_e-=1
    
  }
}
  }
////////////////////////////////


/////h/////////////////////
n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
let tempe_fraction_h
tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
fraction_h.push(Math.round(100*tempe_fraction_h)/100)
// console.log(tempe_fraction_h+"acceptor")

fraction_h_count_t = Math.round(h_count*(1-fraction_h[fraction_h.length-1]))+1
  //freeze count 
 
  if (fraction_h_count_t > Math.round(h_count*(1-fraction_h[fraction_h.length-2])+1)){
    //more freeze , random go to location, override electron,,,low temp 
    dif_h = fraction_h_count_t- Math.round(h_count*(1-fraction_h[fraction_h.length-2])+1)
    
    console.log(dif_h+"more freeze")

for (let i = 0; i < blackArray_h.length; i++) {
  if ( dif_h> 0 && blackArray_h[i].freeze == 0 ) {
    blackArray_h[i].override = 1
    dif_h-=1
  }
}

if (dif_h>0) {

  for (let i = 0; i < blackArray.length; i++) {
    if ( dif_h> 0 && blackArray[i].freeze == 0 && blackArray[i].swap == 1 ) {
      blackArray[i].override = 1
      dif_h-=1
    }
  }

}

  }
  if (fraction_h_count_t < Math.round(h_count*(1-fraction_h[fraction_h.length-2])+1)){
    //less freeze 
    
    
    dif_h =(Math.round(h_count*(fraction_h[fraction_h.length-1]))+1) -  Math.round(h_count*(fraction_h[fraction_h.length-2])+1) 
    console.log(dif_h+"more moving")
    for (let i = 0; i < blackArray_h.length; i++) {
      if (blackArray_h[i].id == "h" && dif_h> 0 &&blackArray_h[i].freeze == 1 || (blackArray_h[i].override==1&&blackArray_h[i].movingVelocity == 0&& dif_h> 0)) {
        blackArray_h[i].freeze = 0
        blackArray_h[i].override = 0
    
        blackArray_h[i].restart()
    
        dif_h-=1
        
      }
    }
    ////////////////////////////////
    
    
  
      
    
  
  
}



  }

}

setVolume = (v) => {
  volume1 = v
  num_multi = 1/v

}


checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (latticeAtoms[i][j].selected) {
        latticeAtoms[i][j].boundary = false;
      } else if (latticeAtoms[i - 1][j].selected || latticeAtoms[i + 1][j].selected || latticeAtoms[i][j - 1].selected || latticeAtoms[i][j + 1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}



timeIt = () => {
  if (time_count > 0) {
    time_count--;
  }
}

timeIt_blink = () => {
  if (time_count_blink > 0) {
    time_count_blink--;
  }
  if (time_count_blink ==0) {
    time_count_blink=100
  }
}


genBalls_scene1 = (num) =>{
  clearInterval(run1);
  interval_1 = 2000/g_rate;
  run1 = setInterval(function(){genBalls_scene1(1);}, interval_1);

  
  // generate *num* balls
if (loopp = true && sceneCount ==1  || sceneCount ==2 || sceneCount ==3|| sceneCount ==3.1 && whiteArray.length<13000) {

if (time_count>0) {

} else if (time_count==0){
  for (let i=0; i < num; i ++){
    let a = random(200*s_x,900*s_x);
    let b = random(30*s_y,730*s_y);

    appearArray.push(new Appear(a,b,10,0));

    whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    blackArray.push(new Vehicle(a, b, 10, global_id, 1));
    whiteID.push(global_id);
    blackID.push(global_id);
    global_id += 1;
  }
}
}

}


blinking = () =>{
  clearInterval(blink);
  interval_blink = 2000;
  blink = setInterval(function(){blinking();}, interval_blink);



}

genBalls = (num) =>{
  clearInterval(run45);
  interval_45 = 2000/g_rate;
  run45 = setInterval(function(){genBalls(1);}, interval_45);

  // generate *num* balls
  if (sceneCount == 13 || sceneCount == 12 ){
    if (time_count>0) {
      whiteArray = [];
      blackArray = [];
    

      recombination_Rate_c = 0;
    
      recombination_Rate = 0;
 

      recombination_Rate_c = 0;

    } else if (time_count==0){
  for (let i=0; i < num; i ++){
    let a = random(120*s_x,900*s_x);
    let b = random(30*s_y,730*s_y);

    appearArray.push(new Appear(a,b,10,0));

    whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    blackArray.push(new Vehicle(a, b, 10, global_id, 1));
    whiteID.push(global_id);
    blackID.push(global_id);
    global_id += 1;
  }
}
  }


 


}

time_graph = () => {
  if (time_count_graph > 0) {
    time_count_graph-=1;
  }
}




add_e= (a) =>{
  electron_add = Math.pow(10,a/10);

  let nnn = electron_add.toExponential(1)
  document.getElementById("add_e_text").value=nnn
  document.getElementById("add_e_text_2").value=nnn

  time_count = 0;

  appearArray_s1 = [];
  

  if (sceneCount ==2 ||sceneCount ==3||sceneCount ==3.1) {
//add donor reset
time_count = 3;
whiteArray = [];
blackArray = [];

current_Electron_c = 0;
current_Hole_c = 0;
recombination_Rate_c = 0;

generation_Rate_c = 0
recombination_Rate = 0;
current_Electron = 0;
current_Hole = 0;

recombination_Rate_c = 0;


appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
appearArray_s2 = []
blackArray_h = [];
blackID_h  = [];

  } 

  
 

  if (sceneCount ==3.1) {
  
    
  
      current_Electron_c = Math.round(electron_add ) 

  e_count = Math.pow(100,((Math.log10(Math.round(electron_add ))-8)/2))/1000

  ///  fraction cal   // n_c delta_ED

  n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
  // let tempe_fraction_e
  tempe_fraction_e = (-1+Math.pow(1+8*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp),1/2))/(4*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp))

  current_Electron_c = Math.round(electron_add ) *tempe_fraction_e
  // console.log(Math.round(100*tempe_fraction_e)/100)
  fraction_e.push(Math.round(100*tempe_fraction_e)/100)

  fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
  // console.log(fraction_e_count)
  // console.log(tempe_fraction_e+"donor")
  console.log("constant_temperature")
  console.log(constant_temperature)
  constant_fermi_final = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
  constant_fermi_final = Math.round(1000*constant_fermi_final)/1000

  //freeze

  nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  let inside = (electron_add*tempe_fraction_e+Math.pow((Math.pow(electron_add*tempe_fraction_e,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

  
  // nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  //   let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  //   constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

 
        reset_d3bands_3_1() 
        d3bands_3_1()
///

  for (let i=0; i < e_count; i ++){

    let a = random(200*s_x,900*s_x);
    let b = random(30*s_y,730*s_y);  
    appearArray_s1.push(new Appear(a,b,10,4,i));
//id start from 0 ,color 4

    whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
    whiteID_e.push(global_id);
    global_id += 1;
    }
  
  
    ///////hole



      current_Hole_c = Math.round(hole_add) 
      // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
      h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000

      //note_bun

      ///  fraction cal   // n_c delta_ED

 n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
 let tempe_fraction_h
 tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))

 fraction_h.push(Math.round(100*tempe_fraction_h)/100)

 fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
 // console.log(fraction_e_count)
 // console.log(tempe_fraction_e+"donor")
///

     for (let i=0; i < h_count; i ++){

      let a = random(200*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);
    
      appearArray_s1.push(new Appear(a,b,10,5,i));
  
      blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
      blackID_h.push(global_id);
      global_id += 1;
      }
    
  

  }

  
       
   if (sceneCount ==2 ) {
    if (electron_add - hole_add >=0) {
      //more e
      
      current_Electron_c = Math.round(electron_add ) - Math.round(hole_add);
      // e_count  = Math.round(Math.log10(current_Electron_c)); 
  
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
  
      
      constant_fermi = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
      constant_fermi = Math.round(1000*constant_fermi)/1000

      //mark me
  
      nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)
 
        reset_d3bands_2() 
        d3bands_2()

      for (let i=0; i < e_count; i ++){
  
   
  
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4));
    
        whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
  
  
    } 
   }
  
  
  
  
  

}

add_h= (a) =>{
  hole_add = Math.pow(10,a/10)

  let pp = hole_add.toExponential(1)
  document.getElementById("add_h_text").value=pp

  time_count = 0;
  appearArray_s1 = [];
  if (sceneCount ==2 ||sceneCount ==3||sceneCount ==3.1) {
    //add donor reset
    time_count = 3;
    whiteArray = [];
    blackArray = [];
    
    current_Electron_c = 0;
    current_Hole_c = 0;
    recombination_Rate_c = 0;
    
    generation_Rate_c = 0
    recombination_Rate = 0;
    current_Electron = 0;
    current_Hole = 0;
    
    recombination_Rate_c = 0;
    
    
    appearArray_s1 = []
    whiteArray_e = [];
    whiteID_e  = [];
    
    appearArray_s1 = []
    blackArray_h = [];
    blackID_h  = [];
    
      } 
  

  // appearArray_s1 = []
  //   whiteArray_e = [];
  //   whiteID_e  = [];
  //   appearArray_s1 = []
  //   blackArray_h = [];
  //   blackID_h  = [];


  if (sceneCount ==3.1) {
  
 
    current_Electron_c = Math.round(electron_add ) 
    e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
  
    ///  fraction cal   // n_c delta_ED
  
    n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
    // let tempe_fraction_e
    tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
  
    fraction_e.push(Math.round(100*tempe_fraction_e)/100)
  
    fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
    // console.log(fraction_e_count)
    // console.log(tempe_fraction_e+"donor")
  ///
  
    for (let i=0; i < e_count; i ++){
  
      let a = random(200*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);  
      appearArray_s1.push(new Appear(a,b,10,4,i));
  //id start from 0 ,color 4
  
      whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
      whiteID_e.push(global_id);
      global_id += 1;
      }
    
    
      ///////hole
  
  
  
        current_Hole_c = Math.round(hole_add) 
        // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
        h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
  
        //note_bun
  
        ///  fraction cal   // n_c delta_ED
  
   n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
   let tempe_fraction_h
   tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
  
   fraction_h.push(Math.round(100*tempe_fraction_h)/100)
  
   fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
   // console.log(fraction_e_count)
   // console.log(tempe_fraction_e+"donor")
  ///
  
       for (let i=0; i < h_count; i ++){
  
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);
      
        appearArray_s1.push(new Appear(a,b,10,5,i));
    
        blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
        blackID_h.push(global_id);
        global_id += 1;
        }
      
    
  
    }
  
    
         
     
    if (sceneCount == 3) {
     
        // more h
        current_Hole_c = Math.round(hole_add) - Math.round(electron_add);
        // h_count  = Math.round(Math.log10(current_Hole_c)); 
    
        h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
        // constant_fermi_negative = -0.026*constant_temperature/300*Math.log((hole_add+Math.pow(Math.pow(hole_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026
        // constant_fermi_negative = Math.round(1000*constant_fermi_negative)/1000

        nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (hole_add+Math.pow((Math.pow(hole_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_negative = -((0.026/300)*temp * Math.log(inside))+((-0.28)*(0.026/300*temp))
 
          reset_d3bands_3() 
          d3bands_3()

    
        for (let i=0; i < h_count; i ++){
    
          let a = random(200*s_x,900*s_x);
          let b = random(30*s_y,730*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5));
      
          blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
          blackID_h.push(global_id);
          global_id += 1;
          }
        
    
      
    }
    
    
    
    
  


 
  

    

}



resetGraph= () => {

  settings.nucleus = document.querySelector('#nuclei-freeze').checked;

  settings.nn = document.querySelector('#nn').checked;
  settings.kk = document.querySelector('#kk').checked;

  setTemperature(constant_temperature)
}