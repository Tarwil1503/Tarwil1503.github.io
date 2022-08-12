'use strict';

function customTitleInit() {

	
	g_keycons.colorGroupNum = 1;
	const keyPtn = ["5_0", "5_1", "5_2"];
	const viewGroup = _type => {
		if (g_headerObj[`${_type}Use`]) {
			keyPtn.forEach (keyCtrlPtn => {
				if (g_keyObj[`${_type}${keyCtrlPtn}_${g_keycons.colorGroupNum}`] !== undefined) {
					g_keyObj[`${_type}${keyCtrlPtn}`] =  g_keyObj[`${_type}${keyCtrlPtn}_${g_keycons[`${_type}GroupNum`]}`].concat();
				}
			});
		}
	}
	viewGroup("color");
	document.getElementById("lblArrow").style.transform = 'rotate(270deg)';
	document.getElementById("lblArrow").style.opacity = 0.1;
	document.getElementById("lblmusicTitle1").style.animationTimingFunction = 'cubic-bezier(.71,.84,.27,.93)';

}
