// 共通の凸設定 (ロール別&A1,A4)
// 
const defaultAscensionEffect = {
	highRarity: {
		breaker: [
			{
				ascension: 1,
				timing: "onBattleStart",
				type: "buffBGDFixed",
				range: "Self",
				amount: 5
			},
			{
				ascension: 1,
				timing: "onActionEnd",
				type: "buffSPDRatio",
				range: "Self",
				turn: 2,
				amount: "20%",
				condition: (unitId) => unitId.opponentTeam.getsBroken
			},
			{
				ascension: 4,
				timing: "onActionEnd",
				type: "advance",
				range: "All",
				amount: "20%",
				condition: (unitId) => unitId.opponentTeam.getsBroken
			}
		],
		attacker: [
			{
				ascension: 1,
				timing: "onActionEnd",
				type: "gainMPRatio",
				range: "Self",
				amount: "10%",
				condition: (unitId) => unitId.opponentTeam.getsBroken
			},
			{
				ascension: 1,
				timing: "onActionEnd",
				type: "buffATKRatio",
				range: "Self",
				turn: 2,
				amount: "20%",
				condition: (unitId) => unitId.opponentTeam.getsBroken
			},
			{
				ascension: 4,
				timing: "onActionEnd",
				type: "getAdditionalTurn",
				condition: (unitId) => unitId.opponentTeam.maxedBreakBonus
			}
		],
		buffer: [
			{
				ascension: 1,
				timing: "onBattleStart",
				type: "addBuffTurn",
				range: "Self",
				amount: 1
			},
			{
				ascension: 4,
				timing: "onBattleStart",
				type: "buffBuffEffect",
				range: "Self",
				amount: "50%"
			},
			{
				ascension: 4,
				timing: "onActionEnd",
				type: "gainSPFixed",
				amount: 1,
				condition: (unitId) => isActor(unitId) && battleState.actor.skillType == "SA"
			}
		],
		debuffer: [
			{
				ascension: 1,
				timing: "onBattleStart",
				type: "addDebuffTurn",
				range: "Self",
				amount: 1
			},
			{
				ascension: 4,
				timing: "onBattleStart",
				type: "buffDebuffEffect",
				range: "Self",
				amount: "30%"
			}
		],
		healer:	[
			{
				ascension: 1,
				timing: "onBattleStart",
				type: "buffMPRecoveryRate",
				range: "Self",
				amount: "30%"
			},
			{
				ascension: 4,
				timing: "onBattleStart",
				type: "buffMaxHPRatio",
				range: "Self",
				amount: "10%"
			},
			{
				ascension: 4,
				timing: "onActionEnd",
				type: "gainSPFixed",
				amount: 1,
				condition: (unitId) => isActor(unitId) && battleState.actor.skillType == "SA"
			}
		],
		defender: [
			{
				ascension: 1,
				timing: "onActionEnd",
				type: "gainMPFixed",
				amount: 5,
				condition: (unitId) => unitId.dmg >= 1 && !isFriend(unitId, battleState.actor)
			},
			{
				ascension: 1,
				timing: "onBattleStart",
				type: "buffShield",
				range: "Self",
				amount: "20%",
				stack: 2
			},
			{
				ascension: 4,
				timing: "onActionEnd",
				type: "gainMPFixed",
				amount: 5,
				condition: (unitId) => unitId.dmg >= 1 && !isFriend(battleState.actor)
			},
			{
				ascension: 4,
				timing: "onBattleStart",
				type: "buffDEFRatio",
				range: "All",
				amount: "20%"
			}
		]
	}
}
		
			

const ImportedUnitList = [
    { 
		id: "001001",
		name: "ルクス☆マギカ",
		image: "Icons/001001_Lux☆Magica.webp",
		element: "Light",
		role: "Breaker",
		spd: 107,
		mp: 75,
		stats: {
			lv1: { hp: 306, atk:87, def:102 },
			lv120: { hp:5499, atk:1566, def:1835 },
			lv140: { hp:5907, atk:1740, def:2039 }
		},
		actions: {
			BA: "001001_BA",
			BS: "001001_BS",
			SA: "001001_SA"
		},
		ability: [
            {
                timing: "onBattleStart",
                type: "buffBreakEffect",
                range: "Self",
                amount: "100%"
            },
            {
                timing: "onActionEnd",
                type: "buffSPDFixed",
                range: "Self",
                turn: 2,
                amount: 20,
                condition: (battleState) => battleState.opponentTeam.getsBroken
            }
        ],
		ascensionEffect: [
            {
                ascension: 1,
                timing: "onBattleStart",
                type: "setMagic",
                range: "Self",
                maxStack: 5
            },
            {
                ascension: 1,
                timing: "onActionEnd",
                type: "gainMagic",
                range: "Self",
                amount: 1,
                condition: (battleState) => battleState.actor.skillType == "BS" && isFriend(battleState.actor)
            },
            {
                ascension: 1,
                timing: "onActionEnd",
                type: "actAdditionalSkill",
                range: "Self",
                id: "001001_FuA",
                condition: (battleState) => battleState.self.magicStack == 5
            },
            {
                ascension: 2,
                timing: "onTurnStart",
                type: "gainMPFixed",
                range: "Self",
                amount: 5,
                condition: (battleState) => battleState.self.isActor
            },
            {
                ascension: 4,
                timing: "onBattleStart",
                type: "buffBGDFixed",
                range: "Self",
                amount: 5,
                condition: (battleState) => battleState.self.isActor && battleState.actor.skillType == "AdditionalAct"
            }
        ],
		supportAbility: [
            {
                timing: "onBattleStart",
                type: "buffBGDFixed",
                range: "Self",
                amount: 2
            },
            {
                timing: "onBattleStart",
                type: "buffBreakEffect",
                range: "Self",
                amount: "10%"
            }
        ],
        crystalis_EX: {
            name: "クラスのみんなには内緒だよ",
            effects: [
                {
                    timing: "onActionEnd",
                    type: "buffBGDRatio",
                    range: "Self",
                    turn: 2,
                    amount: "30%",
                    condition: (battleState) => battleState.opponentTeam.getsBroken
                },
                {
                    timing: "onBattleStart",
                    type: "buffBGDFixed",
                    range: "Self",
                    amount: 5
                }
            ]
        }
    },
    {
		id: "001002", 
		name: "プルウィア☆ノイヤー", 
		image: "Icons/001002_Pluvia☆Neujahr.webp",
		element: "Light",
		role: "Buffer",
		spd: 122,
		mp: 100,
		stats: {
			lv1: { hp: 328, atk: 97, def: 109 },
			lv120: { hp: 5902, atk: 1751, def: 1967 },
			lv140: { hp: 6339, atk: 1946, def: 2186 }
		},
		actions: {
			BA: "001002_BA",
			BS: "001002_BS",
			SA: "001002_SA"			
		},
		ascensionEffect: [
			...defaultAscensionEffect.highRarity.buffer,
			{
				ascension: 2,
				timing: "onBattleStart",
				type: "buffMPRecoveryRate",
				range: "Self",
				amount: "5%",
				condition: (unitId) => unitId.buff.includes(buffHNY)
			},
			{
				ascension: 2,
				timing: "onActionEnd",
				type: "gainMagic",
				range: "Self",
				amount: 2,
				condition: (unitId) => isActor(unitId) && battleState.actor.skillType == "BS"
			},
			{
				ascension: 2,
				timing: "onActionEnd",
				type: "buffSPDRatio",
				range: "Self",
				amount: "2%",
				stack: 5,
				condition: (unitId) => unitId.opponentTeam.hasCTD
			}
		]
	},
    {
        id: "001003",
        name: "プルウィア☆クララ",
        image: "Icons/001003_Pluvia☆Clara.webp",
        element: "Aqua",
        role: "Healer",
        spd: 107,
		mp: 100,
        stats: {
            lv1: { hp: 385, atk: 81, def: 107 },
            lv120: { hp: 6923, atk: 1462, def: 1917 },
            lv140: { hp: 7436, atk: 1624, def: 2130 }
        },
        actions: {
            BA: "001003_BA",
            BS: "001003_BS",
            SA: "001003_SA"
        }
    },
    {
        id: "001004",
        name: "プルウィア☆マギカ",
        image: "Icons/001004_Pluvia☆Magica.webp",
        element: "Light",
        role: "Breaker",
        spd: 114,
		mp: 75,
        stats: {
            lv1: { hp: 326, atk: 91, def: 107 },
            lv120: { hp: 5864, atk: 1629, def: 1922 },
            lv140: { hp: 6299, atk: 1810, def: 2136 }
        },
        actions: {
            BA: "001004_BA",
            BS: "001004_BS",
            SA: "001004_SA"
        }
    },
    {
        id: "002001",
        name: "時間停止攻撃",
        image: "Icons/002001_Time_Stop_Strike.webp",
        element: "Void",
        role: "Buffer",
        spd: 116,
		mp: 75,
        stats: {
            lv1: { hp: 314, atk: 100, def: 101 },
            lv120: { hp: 5643, atk: 1807, def: 1822 },
            lv140: { hp: 6061, atk: 2008, def: 2024 }
        },
        actions: {
            BA: "002001_BA",
            BS: "002001_BS",
            SA: "002001_SA"
        }
    },
    {
        id: "002002",
        name: "ミサイルによる集中砲火",
        image: "Icons/002002_Concentrated_Missile_Fire.webp",
        element: "Dark",
        role: "Attacker",
        spd: 98,
		mp: 90,
        stats: {
            lv1: { hp: 263, atk: 133, def: 85 },
            lv120: { hp: 4725, atk: 2399, def: 1535 },
            lv140: { hp: 5075, atk: 2666, def: 1706 }
        },
        actions: {
            BA: "002002_BA",
            BS: "002002_BS",
            SA: "002002_SA"
        }
    },
    {
        id: "002003",
        name: "黒い魔力による制圧",
        image: "Icons/002003_Dark_Art_Dominion.webp",
        element: "Void",
        role: "Attacker",
        spd: 100,
		mp: 150,
        stats: {
            lv1: { hp: 299, atk: 126, def: 91 },
            lv120: { hp: 5373, atk: 2259, def: 1638 },
            lv140: { hp: 5771, atk: 2510, def: 1820 }
        },
        actions: {
            BA: "002003_BA",
            BS: "002003_BS",
            SA: "002003_SA"
        }
    },
    { 
		id: "002004", 
		name: "キュゥべえボムによる爆破攻撃", 
		image: "Icons/002004_Splashin'_Kyubey_Blast.webp",
		element: "Dark",
		role: "Debuffer",
		spd: 123,
		mp: 75,
		stats: {
			lv1: { hp: 303, atk: 124, def: 91 },
			lv120: { hp: 5454, atk: 2232, def: 1638 },
			lv140: { hp: 5858, atk: 2480, def: 1820 }
		},
	},
    {
        id: "003001",
        name: "ティロ・フィナーレ",
        image: "Icons/003001_Tiro_Finale.webp",
        element: "Forest",
        role: "Buffer",
        spd: 120,
		mp: 75,
        stats: {
            lv1: { hp: 310, atk: 100, def: 103 },
            lv120: { hp: 5584, atk: 1804, def: 1845 },
            lv140: { hp: 5997, atk: 2004, def: 2050 }
        },
        actions: {
            BA: "003001_BA",
            BS: "003001_BS",
            SA: "003001_SA"
        }
    },
    {
        id: "003002",
        name: "ベベ・オー・ランタン",
        image: "Icons/003002_Bebe-O'-Lantern.webp",
        element: "Dark",
        role: "Debuffer",
        spd: 111,
		mp: 75,
        stats: {
            lv1: { hp: 306, atk: 119, def: 95 },
            lv120: { hp: 5508, atk: 2142, def: 1710 },
            lv140: { hp: 5916, atk: 2380, def: 1900 }
        },
        actions: {
            BA: "003002_BA",
            BS: "003002_BS",
            SA: "003002_SA"
        }
    },
    {
        id: "003003",
        name: "フィオレ・フィナーレ",
        image: "Icons/003003_Fiore_Finale.webp",
        element: "Forest",
        role: "Attacker",
        spd: 96,
		mp: 100,
        stats: {
            lv1: { hp: 296, atk: 130, def: 87 },
            lv120: { hp: 5330, atk: 2340, def: 1570 },
            lv140: { hp: 5725, atk: 2600, def: 1744 }
        },
        actions: {
            BA: "003003_BA",
            BS: "003003_BS",
            SA: "003003_SA"
        }
    },
    { 
		id: "003004",
		name: "パンナ・ヴォルティコーザ",
		image: "Icons/003004_Panna_Vorticosa.webp",
		element: "Forest",
		role: "Healer",
		spd: 109,
		mp: 90,
		stats: {
			lv1: { hp: 379, atk: 81, def: 109 },
			lv120: { hp: 6815, atk: 1462, def: 1953 },
			lv140: { hp: 7320, atk: 1624, def: 2170 }
		},
		actions: {
            BA: "003004_BA",
            BS: "003004_BS",
            SA: "003004_SA"
        }
	},
    {
		id: "003005",
		name: "ご招待のドッペル",
		image: "Icons/003005_Doppel_of_Invitations.webp",
		element: "Light",
		role: "Breaker",
		spd: 106,
		mp: 90,
		stats: {
			lv1: { hp: 320, atk: 92, def: 108 },
			lv120: { hp: 5751, atk: 1654, def: 1937 },
			lv140: { hp: 6177, atk: 1838, def: 2152 }
		},
		actions: {
            BA: "003005_BA",
            BS: "003005_BS",
            SA: "003005_SA"
        }
	},
    {
        id: "004001",
        name: "バルダメンテ・フォルティッシモ",
        image: "Icons/004001_Baldamente_Fortissimo.webp",
        element: "Aqua",
        role: "Defender",
        spd: 84,
		mp: 75,
        stats: {
            lv1: { hp: 319, atk: 68, def: 132 },
            lv120: { hp: 5735, atk: 1215, def: 2380 },
            lv140: { hp: 6160, atk: 1350, def: 2644 }
        },
        actions: {
            BA: "004001_BA",
            BS: "004001_BS",
            SA: "004001_SA"
        }
    },
    {
        id: "004002",
        name: "メロディア・アパッショナータ",
        image: "Icons/004002_Melodia_Appassionata.webp",
        element: "Aqua",
        role: "Debuffer",
        spd: 106,
		mp: 90,
        stats: {
            lv1: { hp: 312, atk: 118, def: 94 },
            lv120: { hp: 5616, atk: 2124, def: 1692 },
            lv140: { hp: 6032, atk: 2360, def: 1880 }
        },
        actions: {
            BA: "004002_BA",
            BS: "004002_BS",
            SA: "004002_SA"
        }
    },
    {
		id: "004003",
		name: "ボンナターレ・グラツィオーソ",
		image: "Icons/004003_Buon_Natale_Grazioso.webp",
		element: "Aqua",
		role: "Buffer",
		spd: 121,
		mp: 75,
		stats: {
			lv1: { hp: 332, atk: 96, def: 110 },
			lv120: { hp: 5967, atk: 1719, def: 1980 },
			lv140: { hp: 6409, atk: 1910, def: 2200 }
		},
		actions: {
            BA: "004003_BA",
            BS: "004003_BS",
            SA: "004003_SA"
        }
	},
    {
        id: "005001",
        name: "盟神抉槍",
        image: "Icons/005001_Kugatachi.webp",
        element: "Flame",
        role: "Attacker",
        spd: 86,
		mp: 90,
        stats: {
            lv1: { hp: 265, atk: 131, def: 87 },
            lv120: { hp: 4601, atk: 2432, def: 1544 },
            lv140: { hp: 5121, atk: 2620, def: 1736 }
        },
        actions: {
            BA: "005001_BA",
            BS: "005001_BS",
            SA: "005001_SA"
        }
    },
    {
		id: "005002",
		name: "聖夜捧呈",
		image: "Icons/005002_Yuletide_Gift.webp",
		element: "Flame",
		role: "Debuffer",
		spd: 106,
		mp: 75,
		stats: {
			lv1: { hp: 303, atk: 121, def: 94 },
			lv120: { hp: 5454, atk: 2178, def: 1692 },
			lv140: { hp: 5858, atk: 2420, def: 1880 }
		},
		actions: {
            BA: "005002_BA",
            BS: "005002_BS",
            SA: "005002_SA"
        }
	},
    {
		id: "005003",
		name: "紅珠焼菓",
		image: "Icons/005003_Crimson_Confectioner.webp",
		element: "Flame",
		role: "Breaker",
		spd: 112,
		mp: 75,
		stats: {
			lv1: { hp: 343, atk: 91, def: 111 },
			lv120: { hp: 6167, atk: 1643, def: 1989 },
			lv140: { hp: 6624, atk: 1826, def: 2210 }
		},
		actions: {
            BA: "005003_BA",
            BS: "005003_BS",
            SA: "005003_SA"
        }
	},
    {
		id: "006001",
		name: "魔法のケーキドーム",
		image: "Icons/006001_Magic_Cake_Dish.webp",
		element: "Light",
		role: "Healer",
		spd: 109,
		mp: 90,
		stats: {
			lv1: { hp: 407, atk: 74, def: 97 },
			lv120: { hp: 7322, atk: 1323, def: 1746 },
			lv140: { hp: 7865, atk: 1470, def: 1940 }
		},
		actions: {
            BA: "006001_BA",
            BS: "006001_BS",
            SA: "006001_SA"
        }
	},
    {
        id: "007001",
        name: "ホロウ・ウーマン",
        image: "Icons/007001_Hollow_Woman.webp",
        element: "Light",
        role: "Buffer",
        spd: 119,
		mp: 75,
        stats: {
            lv1: { hp: 329, atk: 93, def: 104 },
            lv120: { hp: 5924, atk: 1665, def: 1868 },
            lv140: { hp: 6363, atk: 1850, def: 2076 }
        },
        actions: {
            BA: "007001_BA",
            BS: "007001_BS",
            SA: "007001_SA"
        }
    },
    {
		id: "007002",
		name: "解はデジャ・ブ",
		image: "Icons/007002_Groundhog_Daze.webp",
		element: "Void",
		role: "Breaker",
		spd: 117,
		mp: 75,
		stats: {
			lv1: { hp: 324, atk: 100, def: 103 },
			lv120: { hp: 5832, atk: 1800, def: 1854 },
			lv140: { hp: 6264, atk: 2000, def: 2060 }
		},
		actions: {
            BA: "007002_BA",
            BS: "007002_BS",
            SA: "007002_SA"
        }
	},
    {
        id: "008001",
        name: "ストラーダ・フトゥーロ",
        image: "Icons/008001_Strada_Futuro.webp",
        element: "Light",
        role: "Breaker",
        spd: 112,
		mp: 75,
        stats: {
            lv1: { hp: 320, atk: 93, def: 106 },
            lv120: { hp: 5767, atk: 1672, def: 1912 },
            lv140: { hp: 6194, atk: 1858, def: 2124 }
        },
        actions: {
            BA: "008001_BA",
            BS: "008001_BS",
            SA: "008001_SA"
        }
    },
    {
        id: "008002",
        name: "沈黙のドッペル",
        image: "Icons/008002_Doppel_of_Silence.webp",
        element: "Dark",
        role: "Healer",
        spd: 102,
		mp: 75,
        stats: {
            lv1: { hp: 340, atk: 101, def: 92 },
            lv120: { hp: 6113, atk: 1822, def: 1651 },
            lv140: { hp: 6566, atk: 2024, def: 1834 }
        },
        actions: {
            BA: "008002_BA",
            BS: "008002_BS",
            SA: "008002_SA"
        }
    },
    {
        id: "009001",
        name: "アブソリュート・レイン",
        image: "Icons/009001_Absolute_Rain.webp",
        element: "Aqua",
        role: "Attacker",
        spd: 92,
		mp: 90,
        stats: {
            lv1: { hp: 257, atk: 135, def: 86 },
            lv120: { hp: 4622, atk: 2423, def: 1544 },
            lv140: { hp: 4965, atk: 2692, def: 1716 }
        },
        actions: {
            BA: "009001_BA",
            BS: "009001_BS",
            SA: "009001_SA"
        }
    },
    {
        id: "010001",
        name: "炎扇斬舞",
        image: "Icons/010001_Flame_Waltz.webp",
        element: "Flame",
        role: "Buffer",
        spd: 120,
		mp: 75,
        stats: {
            lv1: { hp: 311, atk: 97, def: 106 },
            lv120: { hp: 5589, atk: 1742, def: 1901 },
            lv140: { hp: 6003, atk: 1936, def: 2112 }
        },
        actions: {
            BA: "010001_BA",
            BS: "010001_BS",
            SA: "010001_SA"
        }
    },
    {
        id: "011001",
        name: "フォルターゲフェングニス",
        image: "Icons/011001_Folter_Gefängnis.webp",
        element: "Forest",
        role: "Defender",
        spd: 83,
		mp: 75,
        stats: {
            lv1: { hp: 307, atk: 68, def: 135 },
            lv120: { hp: 5530, atk: 1228, def: 2435 },
            lv140: { hp: 5939, atk: 1364, def: 2706 }
        },
        actions: {
            BA: "011001_BA",
            BS: "011001_BS",
            SA: "011001_SA"
        }
    },
    {
        id: "012001",
        name: "ウルトラグレートビッグハンマー",
        image: "Icons/012001_Ultra_Great_Big_Hammer.webp",
        element: "Dark",
        role: "Debuffer",
        spd: 122,
		mp: 95,
        stats: {
            lv1: { hp: 330, atk: 110, def: 86 },
            lv120: { hp: 5940, atk: 1980, def: 1548 },
            lv140: { hp: 6380, atk: 2200, def: 1720 }
        },
        actions: {
            BA: "012001_BA",
            BS: "012001_BS",
            SA: "012001_SA"
        }
    },
    {
        id: "013001",
        name: "アサルトパラノイア",
        image: "Icons/013001_Assault_Paranoia.webp",
        element: "Dark",
        role: "Breaker",
        spd: 112,
		mp: 90,
        stats: {
            lv1: { hp: 321, atk: 97, def: 107 },
            lv120: { hp: 5778, atk: 1744, def: 1930 },
            lv140: { hp: 6206, atk: 1938, def: 2144 }
        },
        actions: {
            BA: "013001_BA",
            BS: "013001_BS",
            SA: "013001_SA"
        }
    },
    {
        id: "014001",
        name: "エッジオブユニヴァース",
        image: "Icons/014001_The_Universe's_Edge.webp",
        element: "Flame",
        role: "Attacker",
        spd: 86,
		mp: 120,
        stats: {
            lv1: { hp: 256, atk: 135, def: 86 },
            lv120: { hp: 4612, atk: 2428, def: 1541 },
            lv140: { hp: 4953, atk: 2698, def: 1712 }
        },
        actions: {
            BA: "014001_BA",
            BS: "014001_BS",
            SA: "014001_SA"
        }
    },
    {
        id: "015001",
        name: "インフィニットポセイドン",
        image: "Icons/015001_Infinite_Poseidon.webp",
        element: "Aqua",
        role: "Breaker",
        spd: 108,
		mp: 75,
        stats: {
            lv1: { hp: 321, atk: 92, def: 107 },
            lv120: { hp: 5783, atk: 1660, def: 1922 },
            lv140: { hp: 6212, atk: 1844, def: 2136 }
        },
        actions: {
            BA: "015001_BA",
            BS: "015001_BS",
            SA: "015001_SA"
        }
    },
    {
        id: "016001",
        name: "ジャッジメントアース",
        image: "Icons/016001_Judgement_Earth.webp",
        element: "Forest",
        role: "Healer",
        spd: 107,
		mp: 90,
        stats: {
            lv1: { hp: 391, atk: 69, def: 107 },
            lv120: { hp: 7409, atk: 1174, def: 1863 },
            lv140: { hp: 7552, atk: 1384, def: 2130 }
        },
        actions: {
            BA: "016001_BA",
            BS: "016001_BS",
            SA: "016001_SA"
        }
    },
    {
        id: "017001",
        name: "パープルウィルオーウィスプ",
        image: "Icons/017001_Purple_Will-o'-Wisp.webp",
        element: "Flame",
        role: "Breaker",
        spd: 93,
		mp: 85,
        stats: {
            lv1: { hp: 288, atk: 83, def: 97 },
            lv120: { hp: 5123, atk: 1446, def: 1688 },
            lv140: { hp: 5559, atk: 1658, def: 1935 }
        },
        actions: {
            BA: "017001_BA",
            BS: "017001_BS",
            SA: "017001_SA"
        }
    },
    {
        id: "017002",
        name: "かりんのキオク",
        image: "Icons/017002_Karin's_Kioku.webp",
        element: "Flame",
        role: "Breaker",
        spd: 114,
        stats: {
            lv1: { hp: 288, atk: 84, def: 96 },
            lv120: { hp: 5132, atk: 1457, def: 1672 },
            lv140: { hp: 5570, atk: 1670, def: 1917 }
        },
        actions: {
            BA: "017002_BA",
            BS: "017002_BS"
        }
    },
    {
        id: "018001",
        name: "竜真螺旋咆撃",
        image: "Icons/018001_Ryushin_Spiral_Fury.webp",
        element: "Aqua",
        role: "Attacker",
        spd: 99,
		mp: 90,
        stats: {
            lv1: { hp: 232, atk: 120, def: 79 },
            lv120: { hp: 4127, atk: 2085, def: 1372 },
            lv140: { hp: 4479, atk: 2390, def: 1573 }
        },
        actions: {
            BA: "018001_BA",
            BS: "018001_BS",
            SA: "018001_SA"
        }
    },
    {
        id: "018002",
        name: "明日香のキオク",
        image: "Icons/018002_Asuka's_Kioku.webp",
        element: "Aqua",
        role: "Attacker",
        spd: 94,
        stats: {
            lv1: { hp: 233, atk: 121, def: 77 },
            lv120: { hp: 4156, atk: 2102, def: 1347 },
            lv140: { hp: 4510, atk: 2410, def: 1544 }
        },
        actions: {
            BA: "018002_BA",
            BS: "018002_BS"
        }
    },
    {
        id: "019001",
        name: "ネオ・ジェネシス☆彡",
        image: "Icons/019001_Neo_Genesis.webp",
        element: "Flame",
        role: "Breaker",
        spd: 118,
		mp: 75,
        stats: {
            lv1: { hp: 326, atk: 96, def: 107 },
            lv120: { hp: 5864, atk: 1669, def: 1886 },
            lv140: { hp: 6299, atk: 1854, def: 2196 }
        },
        actions: {
            BA: "019001_BA",
            BS: "019001_BS",
            SA: "019001_SA"
        }
    },
    {
        id: "020001",
        name: "創造の子どもたち",
        image: "Icons/020001_My_Creations.webp",
        element: "Forest",
        role: "Debuffer",
        spd: 121,
		mp: 90,
        stats: {
            lv1: { hp: 348, atk: 110, def: 85 },
            lv120: { hp: 5821, atk: 1735, def: 1832 },
            lv140: { hp: 6177, atk: 1816, def: 2276 }
        },
        actions: {
            BA: "020001_BA",
            BS: "020001_BS",
            SA: "020001_SA"
        }
    },
    {
        id: "021001",
        name: "Nine Phases",
        image: "Icons/021001_Nine_Phases.webp",
        element: "Void",
        role: "Breaker",
        spd: 111,
		mp: 75,
        stats: {
            lv1: { hp: 321, atk: 98, def: 106 },
            lv120: { hp: 5773, atk: 1757, def: 1915 },
            lv140: { hp: 6200, atk: 1952, def: 2128 }
        },
        actions: {
            BA: "021001_BA",
            BS: "021001_BS",
            SA: "021001_SA"
        }
    },
    {
		id: "021002",
		name: "Marigold Dadaism",
		image: "Icons/021002_Marigold_Dadaism.webp",
		element: "Flame",
		role: "Attacker",
		spd: 98,
		mp: 90,
		stats: {
			lv1: { hp: 304, atk: 123, def: 92 },
			lv120: { hp: 5465, atk: 2205, def: 1661 },
			lv140: { hp: 5870, atk: 2450, def: 1846 }
		},
		actions: {
            BA: "021002_BA",
            BS: "021002_BS",
            SA: "021002_SA"
        }
	},
    {
        id: "022001",
        name: "ルーチェ・スペランツァー",
        image: "Icons/022001_Luce_della_Speranza.webp",
        element: "Dark",
        role: "Buffer",
        spd: 119,
		mp: 100,
        stats: {
            lv1: { hp: 308, atk: 100, def: 104 },
            lv120: { hp: 5535, atk: 1791, def: 1872 },
            lv140: { hp: 5945, atk: 1990, def: 2080 }
        },
        actions: {
            BA: "022001_BA",
            BS: "022001_BS",
            SA: "022001_SA"
        }
    },
    {
		id: "023001",
		name: "断罪の光芒",
		image: "Icons/023001_Light_of_Reckoning.webp",
		element: "Void",
		role: "Attacker",
		spd: 96,
		mp: 90,
		stats: {
			lv1: { hp: 261, atk: 134, def: 85 },
			lv120: { hp: 4693, atk: 2410, def: 1535 },
			lv140: { hp: 5040, atk: 2678, def: 1706 }
		},
		actions: {
            BA: "023001_BA",
            BS: "023001_BS",
            SA: "023001_SA"
        }
	},
    {
        id: "024001",
        name: "絶対自壊演舞",
        image: "Icons/024001_Structure_Destruction.webp",
        element: "Void",
        role: "Healer",
        spd: 107,
		mp: 90,
        stats: {
            lv1: { hp: 381, atk: 71, def: 108 },
            lv120: { hp: 6858, atk: 1278, def: 1946 },
            lv140: { hp: 7366, atk: 1420, def: 2162 }
        },
        actions: {
            BA: "024001_BA",
            BS: "024001_BS",
            SA: "024001_SA"
        }
    },
    {
        id: "025001",
        name: "桜隠れ",
        image: "Icons/025001_Cherry_Blizzard.webp",
        element: "Dark",
        role: "Breaker",
        spd: 108,
		mp: 75,
        stats: {
            lv1: { hp: 323, atk: 96, def: 108 },
            lv120: { hp: 5805, atk: 1730, def: 1935 },
            lv140: { hp: 6235, atk: 1922, def: 2150 }
        },
        actions: {
            BA: "025001_BA",
            BS: "025001_BS",
            SA: "025001_SA"
        }
    },
    {
        id: "026001",
        name: "桜語り",
        image: "Icons/026001_Cherry_Ballad.webp",
        element: "Light",
        role: "Debuffer",
        spd: 122,
		mp: 75,
        stats: {
            lv1: { hp: 345, atk: 101, def: 90 },
            lv120: { hp: 6210, atk: 1818, def: 1620 },
            lv140: { hp: 6670, atk: 2020, def: 1800 }
        },
        actions: {
            BA: "026001_BA",
            BS: "026001_BS",
            SA: "026001_SA"
        }
    },
    {
        id: "027001",
        name: "夏希のキオク",
        image: "Icons/027001_Natsuki's_Kioku.webp",
        element: "Aqua",
        role: "Buffer",
        spd: 119,
        stats: {
            lv1: { hp: 275, atk: 90, def: 93 },
            lv120: { hp: 4897, atk: 1578, def: 1628 },
            lv140: { hp: 5314, atk: 1809, def: 1867 }
        },
        actions: {
            BA: "027001_BA",
            BS: "027001_BS"
        }
    },
    {
        id: "028001",
        name: "白椿",
        image: "Icons/028001_White_Camellia.webp",
        element: "Forest",
        role: "Attacker",
        spd: 97,
		mp: 90,
        stats: {
            lv1: { hp: 235, atk: 121, def: 76 },
            lv120: { hp: 4180, atk: 2112, def: 1330 },
            lv140: { hp: 4536, atk: 2421, def: 1525 }
        },
        actions: {
            BA: "028001_BA",
            BS: "028001_BS",
            SA: "028001_SA"
        }
    },
    {
        id: "028002",
        name: "ななかのキオク",
        image: "Icons/028002_Nanaka's_Kioku.webp",
        element: "Forest",
        role: "Buffer",
        spd: 116,
        stats: {
            lv1: { hp: 276, atk: 91, def: 93 },
            lv120: { hp: 4911, atk: 1589, def: 1614 },
            lv140: { hp: 5012, atk: 2182, def: 1670 }
        },
        actions: {
            BA: "028002_BA",
            BS: "028002_BS"
        }
    },
    {
        id: "029001",
        name: "かこのキオク",
        image: "Icons/029001_Kako's_Kioku.webp",
        element: "Forest",
        role: "Attacker",
        spd: 93,
        stats: {
            lv1: { hp: 231, atk: 121, def: 78 },
            lv120: { hp: 4113, atk: 2107, def: 1353 },
            lv140: { hp: 4463, atk: 2416, def: 1552 }
        },
        actions: {
            BA: "029001_BA",
            BS: "029001_BS"
        }
    },
    {
        id: "030001",
        name: "美雨のキオク",
        image: "Icons/030001_Meiyui's_Kioku.webp",
        element: "Aqua",
        role: "Breaker",
        spd: 113,
        stats: {
            lv1: { hp: 287, atk: 83, def: 96 },
            lv120: { hp: 5113, atk: 1455, def: 1678 },
            lv140: { hp: 5549, atk: 1669, def: 1924 }
        },
        actions: {
            BA: "030001_BA",
            BS: "030001_BS"
        }
    },
    {
        id: "031001",
        name: "サークル・オブ・ファイア",
        image: "Icons/031001_Circle_Of_Fire.webp",
        element: "Flame",
        role: "Healer",
        spd: 109,
		mp: 90,
        stats: {
            lv1: { hp: 364, atk: 61, def: 93 },
            lv120: { hp: 6484, atk: 1058, def: 1630 },
            lv140: { hp: 7037, atk: 1213, def: 1868 }
        },
        actions: {
            BA: "031001_BA",
            BS: "031001_BS",
            SA: "031001_SA"
        }
    },
    {
        id: "031002",
        name: "れいらのキオク",
        image: "Icons/031002_Reira's_Kioku.webp",
        element: "Flame",
        role: "Breaker",
        spd: 114,
        stats: {
            lv1: { hp: 291, atk: 82, def: 96 },
            lv120: { hp: 5176, atk: 1432, def: 1681 },
            lv140: { hp: 6400, atk: 1462, def: 1838 }
        },
        actions: {
            BA: "031002_BA",
            BS: "031002_BS"
        }
    },
    {
        id: "032001",
        name: "ダイヤ・スプラッシュ",
        image: "Icons/032001_Diamond_Splash.webp",
        element: "Aqua",
        role: "Breaker",
        spd: 113,
		mp: 75,
        stats: {
            lv1: { hp: 289, atk: 82, def: 97 },
            lv120: { hp: 5152, atk: 1438, def: 1686 },
            lv140: { hp: 5591, atk: 1649, def: 1933 }
        },
        actions: {
            BA: "032001_BA",
            BS: "032001_BS",
            SA: "032001_SA"
        }
    },
    {
        id: "032002",
        name: "せいかのキオク",
        image: "Icons/032002_Seika's_Kioku.webp",
        element: "Aqua",
        role: "Breaker",
        spd: 111,
        stats: {
            lv1: { hp: 291, atk: 82, def: 97 },
            lv120: { hp: 5185, atk: 1426, def: 1686 },
            lv140: { hp: 5627, atk: 1634, def: 1933 }
        },
        actions: {
            BA: "032002_BA",
            BS: "032002_BS"
        }
    },
    {
        id: "033001",
        name: "フリソソグミドリノハ",
        image: "Icons/033001_Verdant_Shower.webp",
        element: "Forest",
        role: "Breaker",
        spd: 110,
		mp: 75,
        stats: {
            lv1: { hp: 290, atk: 82, def: 96 },
            lv120: { hp: 5171, atk: 1433, def: 1683 },
            lv140: { hp: 5612, atk: 1643, def: 1930 }
        },
        actions: {
            BA: "033001_BA",
            BS: "033001_BS",
            SA: "033001_SA"
        }
    },
    {
        id: "033002",
        name: "みとのキオク",
        image: "Icons/033002_Mito's_Kioku.webp",
        element: "Forest",
        role: "Debuffer",
        spd: 116,
        stats: {
            lv1: { hp: 275, atk: 91, def: 93 },
            lv120: { hp: 4897, atk: 1594, def: 1614 },
            lv140: { hp: 5575, atk: 1647, def: 1940 }
        },
        actions: {
            BA: "033002_BA",
            BS: "033002_BS"
        }
    },
    {
        id: "034001",
        name: "ディスクリート・レーザー",
        image: "Icons/034001_Surging_Laser.webp",
        element: "Light",
        role: "Defender",
        spd: 85,
		mp: 120,
        stats: {
            lv1: { hp: 277, atk: 63, def: 120 },
            lv120: { hp: 4930, atk: 1094, def: 2099 },
            lv140: { hp: 5351, atk: 1255, def: 2407 }
        },
        actions: {
            BA: "034001_BA",
            BS: "034001_BS",
            SA: "034001_SA"
        }
    },
    {
        id: "034002",
        name: "こころのキオク",
        image: "Icons/034002_Kokoro's_Kioku.webp",
        element: "Light",
        role: "Defender",
        spd: 87,
        stats: {
            lv1: { hp: 279, atk: 61, def: 121 },
            lv120: { hp: 4969, atk: 1064, def: 2116 },
            lv140: { hp: 5392, atk: 1220, def: 2426 }
        },
        actions: {
            BA: "034002_BA",
            BS: "034002_BS"
        }
    },
    {
        id: "035001",
        name: "ナイトメア・スティンガー",
        image: "Icons/035001_Nightmare_Stinger.webp",
        element: "Dark",
        role: "Debuffer",
        spd: 118,
		mp: 75,
        stats: {
            lv1: { hp: 274, atk: 93, def: 92 },
            lv120: { hp: 4882, atk: 1614, def: 1598 },
            lv140: { hp: 5298, atk: 1850, def: 1832 }
        },
        actions: {
            BA: "035001_BA",
            BS: "035001_BS",
            SA: "035001_SA"
        }
    },
    {
        id: "035002",
        name: "帆奈のキオク",
        image: "Icons/035002_Hanna's_Kioku.webp",
        element: "Dark",
        role: "Breaker",
        spd: 113,
        stats: {
            lv1: { hp: 288, atk: 84, def: 96 },
            lv120: { hp: 5132, atk: 1457, def: 1674 },
            lv140: { hp: 5309, atk: 1850, def: 1829 }
        },
        actions: {
            BA: "035002_BA",
            BS: "035002_BS"
        }
    },
    {
        id: "036001",
        name: "メテオ・フィスト",
        image: "Icons/036001_Meteor_Punch.webp",
        element: "Flame",
        role: "Debuffer",
        spd: 120,
		mp: 75,
        stats: {
            lv1: { hp: 279, atk: 88, def: 94 },
            lv120: { hp: 4964, atk: 1542, def: 1642 },
            lv140: { hp: 5387, atk: 1768, def: 1883 }
        },
        actions: {
            BA: "036001_BA",
            BS: "036001_BS",
            SA: "036001_SA"
        }
    },
    {
        id: "036002",
        name: "ひみかのキオク",
        image: "Icons/036002_Himika's_Kioku.webp",
        element: "Flame",
        role: "Buffer",
        spd: 120,
        stats: {
            lv1: { hp: 277, atk: 89, def: 94 },
            lv120: { hp: 4940, atk: 1548, def: 1645 },
            lv140: { hp: 5361, atk: 1775, def: 1886 }
        },
        actions: {
            BA: "036002_BA",
            BS: "036002_BS"
        }
    },
    {
        id: "037001",
        name: "ソウル・サルベーション",
        image: "Icons/037001_Soul_Salvation.webp",
        element: "Void",
        role: "Debuffer",
        spd: 117,
		mp: 75,
        stats: {
            lv1: { hp: 304, atk: 103, def: 102 },
            lv120: { hp: 5465, atk: 1850, def: 1838 },
            lv140: { hp: 5870, atk: 2056, def: 2042 }
        },
        actions: {
            BA: "037001_BA",
            BS: "037001_BS",
            SA: "037001_SA"
        }
    },
    {
		id: "037002",
		name: "セイクリッド・ギフト",
		image: "Icons/037002_Sacred_Gift.webp",
		element: "Aqua",
		role: "Breaker",
		spd: 111,
		mp: 75,
		stats: {
			lv1: { hp: 347, atk: 91, def: 109 },
			lv120: { hp: 6242, atk: 1643, def: 1966 },
			lv140: { hp: 6705, atk: 1826, def: 2184 }
		},
		actions: {
            BA: "037002_BA",
            BS: "037002_BS",
            SA: "037002_SA"
        }
	},
    {
        id: "038001",
        name: "このはのキオク",
        image: "Icons/038001_Konoha's_Kioku.webp",
        element: "Aqua",
        role: "Healer",
        spd: 109,
        stats: {
            lv1: { hp: 366, atk: 62, def: 92 },
            lv120: { hp: 6522, atk: 1075, def: 1598 },
            lv140: { hp: 7078, atk: 1233, def: 1832 }
        },
        actions: {
            BA: "038001_BA",
            BS: "038001_BS"
        }
    },
    {
        id: "039001",
        name: "サンダー・トレント",
        image: "Icons/039001_Thunder_Torrent.webp",
        element: "Light",
        role: "Buffer",
        spd: 116,
		mp: 75,
        stats: {
            lv1: { hp: 277, atk: 89, def: 94 },
            lv120: { hp: 4940, atk: 1546, def: 1645 },
            lv140: { hp: 5361, atk: 1773, def: 1886 }
        },
        actions: {
            BA: "039001_BA",
            BS: "039001_BS",
            SA: "039001_SA"
        }
    },
    {
        id: "039002",
        name: "葉月のキオク",
        image: "Icons/039002_Hazuki's_Kioku.webp",
        element: "Light",
        role: "Debuffer",
        spd: 116,
        stats: {
            lv1: { hp: 281, atk: 88, def: 93 },
            lv120: { hp: 5007, atk: 1543, def: 1628 },
            lv140: { hp: 5434, atk: 1769, def: 1867 }
        },
        actions: {
            BA: "039002_BA",
            BS: "039002_BS"
        }
    },
    {
        id: "040001",
        name: "未確認飛行ファイヤー",
        image: "Icons/040001_Unknown_Flying_Fire.webp",
        element: "Flame",
        role: "Debuffer",
        spd: 118,
		mp: 75,
        stats: {
            lv1: { hp: 272, atk: 94, def: 91 },
            lv120: { hp: 4848, atk: 1634, def: 1587 },
            lv140: { hp: 5262, atk: 1874, def: 1820 }
        },
        actions: {
            BA: "040001_BA",
            BS: "040001_BS",
            SA: "040001_SA"
        }
    },
    {
        id: "040002",
        name: "あやめのキオク",
        image: "Icons/040002_Ayame's_Kioku.webp",
        element: "Flame",
        role: "Buffer",
        spd: 118,
        stats: {
            lv1: { hp: 281, atk: 90, def: 92 },
            lv120: { hp: 5007, atk: 1573, def: 1598 },
            lv140: { hp: 5434, atk: 1804, def: 1832 }
        },
        actions: {
            BA: "040002_BA",
            BS: "040002_BS"
        }
    },
    {
        id: "041001",
        name: "インビジブル・アサシン",
        image: "Icons/041001_Invisible_Assassin.webp",
        element: "Void",
        role: "Attacker",
        spd: 98,
		mp: 90,
        stats: {
            lv1: { hp: 233, atk: 122, def: 76 },
            lv120: { hp: 4146, atk: 2123, def: 1327 },
            lv140: { hp: 4500, atk: 2434, def: 1521 }
        },
        actions: {
            BA: "041001_BA",
            BS: "041001_BS",
            SA: "041001_SA"
        }
    },
    {
        id: "041002",
        name: "まさらのキオク",
        image: "Icons/041002_Masara's_Kioku.webp",
        element: "Light",
        role: "Attacker",
        spd: 97,
        stats: {
            lv1: { hp: 235, atk: 120, def: 77 },
            lv120: { hp: 4180, atk: 2101, def: 1338 },
            lv140: { hp: 4536, atk: 2408, def: 1534 }
        },
        actions: {
            BA: "041002_BA",
            BS: "041002_BS"
        }
    },
    {
        id: "042001",
        name: "キラ盛りビーム",
        image: "Icons/042001_Brilliant_Beam.webp",
        element: "Flame",
        role: "Buffer",
        spd: 119,
		mp: 75,
        stats: {
            lv1: { hp: 279, atk: 89, def: 94 },
            lv120: { hp: 4969, atk: 1546, def: 1634 },
            lv140: { hp: 5392, atk: 1773, def: 1874 }
        },
        actions: {
            BA: "042001_BA",
            BS: "042001_BS",
            SA: "042001_SA"
        }
    },
    {
        id: "042002",
        name: "梨花のキオク",
        image: "Icons/042002_Rika's_Kioku.webp",
        element: "Flame",
        role: "Attacker",
        spd: 96,
        stats: {
            lv1: { hp: 231, atk: 121, def: 78 },
            lv120: { hp: 4113, atk: 2107, def: 1356 },
            lv140: { hp: 4985, atk: 2154, def: 1735 }
        },
        actions: {
            BA: "042002_BA",
            BS: "042002_BS"
        }
    },
    {
		id: "042003",
		name: "キラハピ！スノードーム",
		image: "Icons/042003_Glitterjoy_Snow_Globe.webp",
		element: "Flame",
		role: "Healer",
		spd: 110,
		mp: 100,
		stats: {
			lv1: { hp: 370, atk: 84, def: 109 },
			lv120: { hp: 6653, atk: 1516, def: 1953 },
			lv140: { hp: 7146, atk: 1684, def: 2170 }
		},
		actions: {
            BA: "042003_BA",
            BS: "042003_BS",
            SA: "042003_SA"
        }
	},
    {
        id: "043001",
        name: "食べごろハンター",
        image: "Icons/043001_Yummy_Hunter.webp",
        element: "Light",
        role: "Buffer",
        spd: 117,
		mp: 75,
        stats: {
            lv1: { hp: 277, atk: 91, def: 92 },
            lv120: { hp: 4930, atk: 1590, def: 1603 },
            lv140: { hp: 5351, atk: 1823, def: 1838 }
        },
        actions: {
            BA: "043001_BA",
            BS: "043001_BS",
            SA: "043001_SA"
        }
    },
    {
        id: "043002",
        name: "理子のキオク",
        image: "Icons/043002_Riko's_Kioku.webp",
        element: "Light",
        role: "Breaker",
        spd: 114,
        stats: {
            lv1: { hp: 289, atk: 83, def: 96 },
            lv120: { hp: 5142, atk: 1449, def: 1677 },
            lv140: { hp: 5319, atk: 1841, def: 1832 }
        },
        actions: {
            BA: "043002_BA",
            BS: "043002_BS"
        }
    },
    {
        id: "044001",
        name: "漆黒のアルカナ",
        image: "Icons/044001_Tenebrous_Arcana.webp",
        element: "Forest",
        role: "Breaker",
        spd: 103,
		mp: 150,
        stats: {
            lv1: { hp: 332, atk: 85, def: 111 },
            lv120: { hp: 5972, atk: 1525, def: 1994 },
            lv140: { hp: 6415, atk: 1694, def: 2216 }
        },
        actions: {
            BA: "044001_BA",
            BS: "044001_BS",
            SA: "044001_SA"
        }
    },
    {
        id: "045001",
        name: "刻み込む桜の物語",
        image: "Icons/045001_A_Tale_of_Cherry_Blossoms.webp",
        element: "Aqua",
        role: "Attacker",
        spd: 90,
		mp: 90,
        stats: {
            lv1: { hp: 260, atk: 133, def: 87 },
            lv120: { hp: 4671, atk: 2385, def: 1566 },
            lv140: { hp: 5017, atk: 2650, def: 1740 }
        },
        actions: {
            BA: "045001_BA",
            BS: "045001_BS",
            SA: "045001_SA"
        }
    },
    {
		id: "046001",
		name: "無思考",
		image: "Icons/046001_Thoughtless.webp",
		element: "Dark",
		role: "Debuffer",
		spd: 112,
		mp: 75,
		stats: {
			lv1: { hp: 279, atk: 113, def: 100 },
			lv120: { hp: 5022, atk: 2034, def: 1800 },
			lv140: { hp: 5394, atk: 2260, def: 2000 }
		},
		ctions: {
            BA: "046001_BA",
            BS: "046001_BS",
            SA: "046001_SA"
        }
	},
    {
        id: "047001",
        name: "オシャンティックハリケーン",
        image: "Icons/047001_Glittering_Hurricane.webp",
        element: "Void",
        role: "Breaker",
        spd: 114,
		mp: 75,
        stats: {
            lv1: { hp: 290, atk: 82, def: 97 },
            lv120: { hp: 5161, atk: 1430, def: 1689 },
            lv140: { hp: 5601, atk: 1640, def: 1937 }
        },
        actions: {
            BA: "047001_BA",
            BS: "047001_BS",
            SA: "047001_SA"
        }
    },
    {
        id: "047002",
        name: "アシュリーのキオク",
        image: "Icons/047002_Ashley's_Kioku.webp",
        element: "Dark",
        role: "Attacker",
        spd: 95,
        stats: {
            lv1: { hp: 232, atk: 120, def: 78 },
            lv120: { hp: 4132, atk: 2090, def: 1367 },
            lv140: { hp: 5267, atk: 2120, def: 1838 }
        },
        actions: {
            BA: "047002_BA",
            BS: "047002_BS"
        }
    },
    {
        id: "048001",
        name: "粛清天使",
        image: "Icons/048001_Seraphic_Trial.webp",
        element: "Dark",
        role: "Attacker",
        spd: 94,
		mp: 90,
        stats: {
            lv1: { hp: 236, atk: 120, def: 77 },
            lv120: { hp: 4204, atk: 2096, def: 1338 },
            lv140: { hp: 4562, atk: 2403, def: 1534 }
        },
        actions: {
            BA: "048001_BA",
            BS: "048001_BS",
            SA: "048001_SA"
        }
    },
    {
        id: "048002",
        name: "クシュのキオク",
        image: "Icons/048002_Kush's_Kioku.webp",
        element: "Dark",
        role: "Attacker",
        spd: 96,
        stats: {
            lv1: { hp: 230, atk: 120, def: 78 },
            lv120: { hp: 4103, atk: 2101, def: 1364 },
            lv140: { hp: 4453, atk: 2408, def: 1564 }
        },
        actions: {
            BA: "048002_BA",
            BS: "048002_BS"
        }
    },
    {
		id: "049001",
		name: "ラ・リュミエール",
		image: "Icons/049001_La_Lumière.webp",
		element: "Light",
		role: "Defender",
		spd: 94,
		mp: 90,
		stats: {
			lv1: { hp: 294, atk: 74, def: 134 },
			lv120: { hp: 5292, atk: 1337, def: 2408 },
			lv140: { hp: 5684, atk: 1486, def: 2676 }
		},
		actions: {
            BA: "049001_BA",
            BS: "049001_BS",
            SA: "049001_SA"
        }
	},
    {
		id: "050001",
		name: "ロンブル",
		image: "Icons/050001_L'Ombre.webp",
		element: "Dark",
		role: "Buffer",
		spd: 121,
		mp: 100,
		stats: {
			lv1: { hp: 287, atk: 110, def: 101 },
			lv120: { hp: 5157, atk: 1980, def: 1811 },
			lv140: { hp: 5539, atk: 2200, def: 2012 }
		},
		actions: {
            BA: "050001_BA",
            BS: "050001_BS",
            SA: "050001_SA"
        }
	},
    {
		id: "051001",
		name: "デサンテグラシオン",
		image: "Icons/051001_Désintégration.webp",
		element: "Aqua",
		role: "Debuffer",
		spd: 114,
		mp: 90,
		stats: {
			lv1: { hp: 279, atk: 109, def: 104 },
			lv120: { hp: 5022, atk: 1962, def: 1872 },
			lv140: { hp: 5394, atk: 2180, def: 2080 }
		},
		actions: {
            BA: "051001_BA",
            BS: "051001_BS",
            SA: "051001_SA"
        }
	},
    {
		id: "052001",
		name: "ラ・ダンス・マカブル",
		image: "Icons/052001_La_Danse_Macabre.webp",
		element: "Void",
		role: "Debuffer",
		spd: 116,
		mp: 75,
		stats: {
			lv1: { hp: 314, atk: 115, def: 87 },
			lv120: { hp: 5643, atk: 2070, def: 1557 },
			lv140: { hp: 6061, atk: 2300, def: 1730 }
		},
		actions: {
            BA: "052001_BA",
            BS: "052001_BS",
            SA: "052001_SA"
        }
	},
    {
        id: "053001",
        name: "オラクルレイ",
        image: "Icons/053001_Oracle_Ray.webp",
        element: "Light",
        role: "Attacker",
        spd: 96,
		mp: 100,
        stats: {
            lv1: { hp: 256, atk: 135, def: 86 },
            lv120: { hp: 4601, atk: 2432, def: 1544 },
            lv140: { hp: 4942, atk: 2702, def: 1716 }
        },
        actions: {
            BA: "053001_BA",
            BS: "053001_BS",
            SA: "053001_SA"
        }
    },
    {
        id: "054001",
        name: "ヴァンパイアファング",
        image: "Icons/054001_Vampire_Fang.webp",
        element: "Dark",
        role: "Defender",
        spd: 87,
		mp: 75,
        stats: {
            lv1: { hp: 305, atk: 71, def: 134 },
            lv120: { hp: 5481, atk: 1274, def: 2408 },
            lv140: { hp: 5887, atk: 1416, def: 2676 }
        },
        actions: {
            BA: "054001_BA",
            BS: "054001_BS",
            SA: "054001_SA"
        }
    },
    {
        id: "055001",
        name: "リンクスインパクト",
        image: "Icons/055001_Lynx_Impact.webp",
        element: "Forest",
        role: "Healer",
        spd: 104,
		mp: 90,
        stats: {
            lv1: { hp: 365, atk: 60, def: 93 },
            lv120: { hp: 6503, atk: 1055, def: 1627 },
            lv140: { hp: 7057, atk: 1210, def: 1865 }
        },
        actions: {
            BA: "055001_BA",
            BS: "055001_BS",
            SA: "055001_SA"
        }
    },
    {
        id: "055002",
        name: "ゆまのキオク",
        image: "Icons/055002_Yuma's_Kioku.webp",
        element: "Forest",
        role: "Healer",
        spd: 101,
        stats: {
            lv1: { hp: 363, atk: 62, def: 93 },
            lv120: { hp: 6465, atk: 1079, def: 1616 },
            lv140: { hp: 7016, atk: 1237, def: 1852 }
        },
        actions: {
            BA: "055002_BA",
            BS: "055002_BS"
        }
    },
    {
		id: "056001",
		name: "天翔ける語り部",
		image: "Icons/056001_Soaring_Storyteller.webp",
		element: "Void",
		role: "Defender",
		spd: 93,
		mp: 75,
		stats: {
			lv1: { hp: 322, atk: 64, def: 134 },
			lv120: { hp: 5794, atk: 1157, def: 2417 },
			lv140: { hp: 6223, atk: 1286, def: 2686 }
		},
		actions: {
            BA: "056001_BA",
            BS: "056001_BS",
            SA: "056001_SA"
        }
	},
    {
        id: "057001",
        name: "もう絶望する必要なんてない！",
        image: "Icons/057001_Nothing_to_Despair,_Ever.webp",
        element: "Light",
        role: "Attacker",
        spd: 98,
		mp: 100,
        stats: {
            lv1: { hp: 282, atk: 140, def: 82 },
            lv120: { hp: 4531, atk: 2522, def: 1478 },
            lv140: { hp: 5446, atk: 2802, def: 1642 }
        },
        actions: {
            BA: "057001_BA",
            BS: "057001_BS",
            SA: "057001_SA"
        }
    },
    {
		id: "058001",
		name: "事象の改竄",
		image: "Icons/058001_Falsified_Phenomena.webp",
		element: "Dark",
		role: "Attacker",
		spd: 100,
		mp: 150,
		stats: {
			lv1: { hp: 284, atk: 136, def: 86 },
			lv120: { hp: 5114, atk: 2439, def: 1543 },
			lv140: { hp: 5493, atk: 2710, def: 1714 }
		},
		actions: {
            BA: "058001_BA",
            BS: "058001_BS",
            SA: "058001_SA"
        }
	},
    {
        id: "059001",
        name: "ティロフィナーレリベレーション",
        image: "Icons/059001_Tiro_Finale_Liberation.webp",
        element: "Dark",
        role: "Attacker",
        spd: 97,
		mp: 90,
        stats: {
            lv1: { hp: 269, atk: 127, def: 90 },
            lv120: { hp: 4833, atk: 2277, def: 1620 },
            lv140: { hp: 5191, atk: 2530, def: 1800 }
        },
        actions: {
            BA: "059001_BA",
            BS: "059001_BS",
            SA: "059001_SA"
        }
    },
    {
		id: "060001",
		name: "ラ・ポルトゥ・ドゥ・パラディ",
		image: "Icons/060001_La_Porte_du_Paradis.webp",
		element: "Light",
		role: "Attacker",
		spd: 98,
		mp: 150,
		stats: {
			lv1: { hp: 289, atk: 135, def: 85 },
			lv120: { hp: 5200, atk: 2430, def: 1526 },
			lv140: { hp: 5585, atk: 2700, def: 1696 }
		},
		actions: {
            BA: "060001_BA",
            BS: "060001_BS",
            SA: "060001_SA"
        }
	},
    {
		id: "061001",
		name: "フローラル・アイアンスパイク",
		image: "Icons/061001_Floral_Ironspike.webp",
		element: "Forest",
		role: "Attacker",
		spd: 100,
		mp: 150,
		stats: {
			lv1: { hp: 287, atk: 134, def: 87 },
			lv120: { hp: 5162, atk: 2412, def: 1557 },
			lv140: { hp: 5545, atk: 2680, def: 1730 }
		},
		actions: {
            BA: "061001_BA",
            BS: "061001_BS",
            SA: "061001_SA"
        }
	},
    {
		id: "062001",
		name: "ファイナル・フェイトブルーム",
		image: "Icons/062002_Final_Fatebloom.webp",
		element: "Dark",
		role: "Breaker",
		spd: 114,
		mp: 90,
		stats: {
			lv1: { hp: 331, atk: 94, def: 112},
			lv120: { hp: 5951, atk: 1688, def: 2016 },
			lv140: { hp: 6392, atk: 1876, def: 2240 }
		},
		actions: {
            BA: "062001_BA",
            BS: "062001_BS",
            SA: "062001_SA"
        }
	},
    {
		id: "063001",
		name: "例外の方が多い規則",
		image: "Icons/063001_Unlimited_Rulebook.webp",
		element: "Forest",
		role: "Breaker",
		spd: 112,
		mp: 75,
		stats: {
			lv1: { hp: 331, atk: 96, def: 109 },
			lv120: { hp: 5962, atk: 1733, def: 1967},
			lv140: { hp: 6403, atk: 1926, def: 2186 }
		},
		actions: {
            BA: "063001_BA",
            BS: "063001_BS",
            SA: "063001_SA"
        }
	},
    {
		id: "064001",
		name: "螺旋帰道",
		image: "Icons/064001_Screw_Zone.webp",
		element: "Aqua",
		role: "Defender",
		spd: 95,
		mp: 90,
		stats: {
			lv1: { hp: 319, atk: 63, def: 146 },
			lv120: { hp: 5740, atk: 1139, def: 2633},
			lv140: { hp: 6165, atk: 1266, def: 2926 }
		},
		actions: {
            BA: "064001_BA",
            BS: "064001_BS",
            SA: "064001_SA"
        }
	},
    {
		id: "065001",
		name: "怪異殺し",
		image: "Icons/065001_Kiss-shot.webp",
		element: "Flame",
		role: "Attacker",
		spd: 100,
		mp: 100,
		stats: {
			lv1: { hp: 294, atk: 132, def: 86 },
			lv120: { hp: 5287, atk: 2376, def: 1552},
			lv140: { hp: 5678, atk: 2640, def: 1724 }
		},
		actions: {
            BA: "065001_BA",
            BS: "065001_BS",
            SA: "065001_SA"
        }
	},
    {
		id: "066001",
		name: "まどか先輩のキオク",
		image: "Icons/066001_Madoka-senpai's_Kioku.webp",
		element: "Light",
		role: "Attacker",
		spd: 116,
		stats: {
			lv1: { hp: 88, atk: 88, def: 88 },
			lv120: { hp: 4325, atk: 2074, def: 1442 },
			lv140: { hp: 4646, atk: 2304, def: 1602 }
		},
		actions: {
            BA: "066001_BA",
            BS: "066001_BS"
        }
	}
];