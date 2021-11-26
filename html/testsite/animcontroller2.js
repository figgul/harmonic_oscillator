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

var frame_00 = 'assets/DSC02752.jpg';
var frame_01 = 'assets/DSC02753.jpg';

var anim_img_id_01 = document.getElementById('splash-flex-img-1-standard');

var frames_01 = [frame_00, frame_01];

var freq_01 = 100;

var anim_1 = new animStruct(anim_img_id_01, frames_01, freq_01);

var t_1 = setInterval(function(){updateAnim(anim_1)}, anim_1.update_freq);

function updateAnim(anim) {
  anim.img_id.src = anim.frames[anim.current_frame];
  anim.current_frame++;
  if (anim.current_frame >= anim.frames.length) {anim.current_frame = 0;}
}