const effectTable = {
	// ダメージ処理
	dealDMG: ({ element, range, damage, bgd, proximityDamage = "0%", proximityBgd = 0 }) => {
		// 実際のダメージ計算・反映処理をここに記述
		console.log(`Execute: DealDMG -> Element: ${element}, Range: ${range}, Damage: ${damage}, BGD: ${bgd}`);
		if (proximityDamage !== "0%") {
			console.log(`  Proximity Bonus -> Damage: ${proximityDamage}, BGD: ${proximityBgd}`);
		}
	},

	// BGD固定バフ処理
	buffBGDFixed: ({ range, turn = 0, amount }) => {
		// 実際のバフ付与処理をここに記述
		console.log(`Execute: BuffBGDFixed -> Range: ${range}, Turn: ${turn}, Amount: ${amount}`);
	},

	// 魔力消費処理
	consumeMagic: ({ range, amount }) => {
		console.log(`Execute: consumeMagic -> Range: ${range}, Amount: ${amount}`);
	},

	// 100種類以上の他の効果もここに同様に追加していく
};