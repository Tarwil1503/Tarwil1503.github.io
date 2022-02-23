'use strict';
/**
 * Dancing☆Onigiri カスタム用jsファイル
 * その２：作品個別用
 * 
 * このファイルは、作品個別に設定できる項目となっています。
 * 譜面データ側で下記のように作品別の外部jsファイルを指定することで、
 * danoni_main.js の中身を変えることなく設定が可能です。
 * 
 * 設定例：
 * |customjs=danoni_custom-003.js,danoni_custom2.js|
 * 
 * ・グローバル変数、div要素、関数は danoni_main.js のものがそのまま利用できます。
 * ・danoni_main.jsの変数を直接書き換えると、動かなくなることがあります。
 * 　こまめのバックアップをおススメします。
 * ・ラベルなどのdiv要素を作る場合、「divRoot」の下にappendChild（div要素を追加）することで
 * 　画面遷移したときにきれいに消してくれます。
 * ・1つ目のcustom.jsとの違いは、関数名の末尾に"2"がついていることが異なります。
 * 
 */

/**
 * ローディング中処理
 * @param {event} _event ローディングプロパティ
 * 	_event.loaded 読込済バイト数
 * 	_event.total  読込総バイト数 
 */
function customLoadingProgress2(_event) {

}

/**
 * タイトル画面 [Scene: Title / Melon]
 */
function customTitleInit2() {
    // バージョン表記
    g_localVersion2 = ``;
}

/**
 * 譜面選択(Difficultyボタン)時カスタム処理 
 * @param {boolean} _initFlg 譜面変更フラグ (true:譜面変更選択時 / false:画面遷移による移動時)
 * @param {boolean} _canLoadDifInfoFlg 譜面初期化フラグ (true:譜面設定を再読込 / false:譜面設定を引き継ぐ)
 */
function customSetDifficulty2(_initFlg, _canLoadDifInfoFlg) {

}

/**
 * タイトル画面(フレーム毎表示) [Scene: Title / Melon]
 */
function customTitleEnterFrame2() {

}

/**
 * オプション画面(初期表示) [Scene: Option / Lime]
 */
function customOptionInit2() {

}

/**
 * 表示変更(初期表示) [Scene: Settings-Display / Lemon]
 */
function customSettingsDisplayInit2() {

}

/**
 * キーコンフィグ画面(初期表示) [Scene: KeyConfig / Orange]
 */
function customKeyConfigInit2() {
	
	g_currentj = (g_stateObj.scoreId === 0) ? 52 : 0;
	const hiddenKeys = (g_stateObj.scoreId === 0) ?
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75] : [];

	hiddenKeys.forEach(i => {
		document.getElementById(`arrow${i}`).style.display = `none`;
		document.getElementById(`arrowShadow${i}`).style.display = `none`;
		document.getElementById(`color${i}`).style.display = `none`;
		document.getElementById(`keycon${i}_0`).style.display = `none`;
		document.getElementById(`keycon${i}_1`).style.display = `none`;
	});
	

}

/**
 * 譜面読込画面 [Scene: Loading / Strawberry]
 * - この画面のみ、画面表示がありません。
 * - 処理が完了すると、自動的にメイン画面へ遷移します。
 */
function customLoadingInit2() {

}

/**
 * メイン画面(初期表示) [Scene: Main / Banana]
 */
function customMainInit2() {
	const currentFrame = g_scoreObj.baseFrame;
	const Allkeys = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
	
	Allkeys.forEach(_num => {
		const stepRoot = document.getElementById(`stepRoot${_num}`);
		const leftval = `${parseInt(stepRoot.style.left) - 110}px`;
		stepRoot.style.left = leftval;
	});
	if (currentFrame < 3234) {
		hidden([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]);
	}
	function hidden(step) {
		step.forEach(n => $id(`stepRoot${n}`).visibility = `hidden`);
	}
}

/**
 * メイン画面(フレーム毎表示) [Scene: Main / Banana]
 */
function customMainEnterFrame2() {



	function appear(step) {
		step.forEach(n => {
			const stepRoot = document.getElementById(`stepRoot${n}`);
			stepRoot.style.visibility = `visible`;
			stepRoot.animate({opacity: [0, 1]}, {duration: 800});
		});
	}

	async function disappear(step) {
		step.forEach(n => {
			const stepRoot = document.getElementById(`stepRoot${n}`);
			stepRoot.classList.add(`disappearStep`);
			stepRoot.animate({opacity: [1, 0]}, {duration: 800});
		});

		const _sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
		await _sleep(780);

		const disappearSteps = document.getElementsByClassName(`disappearStep`);
		Object.values(disappearSteps).forEach(step => {
			step.style.visibility = `hidden`;
			step.classList.remove(`disappearStep`);
		});
	}

	async function slide(oldSteps, newSteps, x, margin, distance, duration) {
		oldSteps.forEach((n, index) => {
			const stepRoot = document.getElementById(`stepRoot${n}`);
			const left = x + margin * index;
			stepRoot.classList.add(`hideenStep`);
			stepRoot.animate({left: [`${left}px`, `${left + distance}px`]}, {duration: duration});
		});

		newSteps.forEach(n =>
			document.getElementById(`stepRoot${n}`).classList.add(`visibleStep`));

		const _sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
		await _sleep(duration - 20);

		const hideenSteps = document.getElementsByClassName(`hideenStep`);
		const visibleSteps = document.getElementsByClassName(`visibleStep`);
		Object.values(hideenSteps).forEach(step => {
			step.style.visibility = `hidden`;
			step.classList.remove(`hideenStep`);
		});
		Object.values(visibleSteps).forEach(step => {
			step.style.visibility = `visible`;
			step.classList.remove(`visibleStep`);
		});
	}
}

/**
 * 結果画面(初期表示) [Scene: Result / Grape]
 */
function customResultInit2() {

}

/**
 * 結果画面(フレーム毎表示) [Scene: Result / Grape]
 */
function customResultEnterFrame2() {

}

/**
 * 判定カスタム処理 (引数は共通で1つ保持)
 * @param {number} difFrame タイミング誤差(フレーム数)
 */
/*
// イイ
function customJudgeIi2(difFrame){

}

// シャキン
function customJudgeShakin2(difFrame){

}

// マターリ
function customJudgeMatari2(difFrame){

}

// ショボーン
function customJudgeShobon2(difFrame){

}

// ウワァン
function customJudgeUwan2(difFrame){

}

// キター
function customJudgeKita2(difFrame){

}

// イクナイ
function customJudgeIknai2(difFrame){

}

// ダミー矢印
function customJudgeDummyArrow2(difFrame){

}

// ダミーフリーズアロー
function customJudgeDummyFrz2(difFrame){

}
*/