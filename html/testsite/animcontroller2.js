//ANIMATION CONTROLLER SCRIPT
//MNO

class animStruct {
	constructor(img_id, frames, update_freq) {
      this.img_id = img_id;
      this.frames = frames;
	  this.update_freq = update_freq
      this.current_frame = 0;
  }
}

var frame_00 = 'assets/photos/DSC01128.jpg';
var frame_01 = 'assets/photos/DSC01185.jpg';
var frame_02 = 'assets/photos/DSC01194.jpg';
var frame_03 = 'assets/photos/DSC01203.jpg';
var frame_04 = 'assets/photos/DSC01204.jpg';
var frame_05 = 'assets/photos/DSC01207.jpg';
var frame_06 = 'assets/photos/DSC01208.jpg';
var frame_07 = 'assets/photos/DSC01209.jpg';
var frame_08 = 'assets/photos/DSC01210.jpg';
var frame_09 = 'assets/photos/DSC01212.jpg';
var frame_10 = 'assets/photos/DSC01219.jpg';

/*
var frame_00 = 'assets/photos/DSC02752.jpg';
var frame_01 = 'assets/photos/DSC02753.jpg';
*/
/*
var frame_00 = 'assets/photos/DSC09987.jpg';
var frame_01 = 'assets/photos/DSC09988.jpg';
*/
/*
var frame_00 = 'assets/photos/DSC02216.jpg';
var frame_01 = 'assets/photos/DSC02217.jpg';
var frame_02 = 'assets/photos/DSC02218.jpg';
*/

var anim_img_id_01 = document.getElementById('splash-flex-img-1-standard');

//var frames_01 = [frame_00, frame_01];
//var frames_01 = [frame_00, frame_01, frame_02];
var frames_01 = [frame_00, frame_01, frame_02, frame_03, frame_04, frame_05, frame_06, frame_07, frame_08, frame_02, frame_03, frame_04, frame_05, frame_06, frame_07, frame_08, frame_09, frame_10];

var freq_01 = 80;

var anim_1 = new animStruct(anim_img_id_01, frames_01, freq_01);

var t_1 = setInterval(function(){updateAnim(anim_1)}, anim_1.update_freq);

function updateAnim(anim) {
  anim.img_id.src = anim.frames[anim.current_frame];
  anim.current_frame++;
  if (anim.current_frame >= anim.frames.length) {anim.current_frame = 0;}
}