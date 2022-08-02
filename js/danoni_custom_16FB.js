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

}
