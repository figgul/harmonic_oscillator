//ANIMATION CONTROLLER SCRIPT
//MNO

var frame_00 = 'assets/birdbook/page_02_panel_02_frame_00.png';
var frame_01 = 'assets/birdbook/page_02_panel_02_frame_01.png';
var frame_02 = 'assets/birdbook/page_02_panel_02_frame_02.png';
var frame_03 = 'assets/birdbook/page_02_panel_02_frame_03.png';
var frame_04 = 'assets/birdbook/page_02_panel_02_frame_04.png';
var frame_05 = 'assets/birdbook/page_02_panel_02_frame_05.png';
var frame_06 = 'assets/birdbook/page_02_panel_02_frame_06.png';
var frame_07 = 'assets/birdbook/page_02_panel_02_frame_07.png';
var frame_08 = 'assets/birdbook/page_02_panel_02_frame_08.png';
var frame_09 = 'assets/birdbook/page_02_panel_02_frame_09.png';
var frame_10 = 'assets/birdbook/page_02_panel_02_frame_10.png';
var frame_11 = 'assets/birdbook/page_02_panel_02_frame_11.png';

var anim_img_id = document.getElementById('page_02_panel_02_anim');

var frames = [frame_00, frame_01, frame_02, frame_03, frame_04, frame_05, frame_06, frame_07, frame_08, frame_09, frame_10, frame_11];

var current_frame = 0;

var t = setInterval(updateAnim, 100);

function updateAnim() {
  anim_img_id.src = frames[current_frame];
  current_frame++;
  if (current_frame >= frames.length) {current_frame = 0;}
}