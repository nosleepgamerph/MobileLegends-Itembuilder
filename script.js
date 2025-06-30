const items = document.querySelectorAll('.item');
const slots = document.querySelectorAll('.circle-slot');
const clearBtn = document.getElementById('clear-build');
const computeBtn = document.getElementById('compute-stats');
const heroSelect = document.getElementById('hero-select');
const heroPfp = document.getElementById('hero-pfp');

const statIds = {
  hp: 'stat-hp',
  hpRegen: 'stat-hp-regen',
  physicalAttack: 'stat-physical-attack',
  physicalDefense: 'stat-physical-defense',
  attackSpeed: 'stat-attack-speed',
  attackSpeedRatio: 'stat-attack-speed-ratio',
  mana: 'stat-mana',
  manaRegen: 'stat-mana-regen',
  magicPower: 'stat-magic-power',
  magicDefense: 'stat-magic-defense',
  movementSpeed: 'stat-movement-speed',
  movementSpeedRatio: 'stat-movement-speed-ratio',
  physicalPen: 'stat-physical-pen',
  magicPen: 'stat-magic-pen',
  critAttack: 'stat-crit-attack',
  critLifesteal: 'stat-lifesteal',
  critChance: 'stat-crit-chance',
  cooldown: 'stat-cooldown',
  adaptiveAttack: 'stat-adaptive-attack',
  adaptiveAttackRatio: 'stat-adaptive-attack-ratio',
  lifesteal: 'stat-lifesteal',
  spellvamp: 'stat-spellvamp'
  
};

const statElements = {};
for (const key in statIds) {
  statElements[key] = document.getElementById(statIds[key]);
}

const heroImages = {
  "0": "https://i.pinimg.com/736x/9f/16/72/9f1672710cba6bcb0dfd93201c6d4c00.jpg",
  //-----------------Marksman----------------------
  "Layla": "https://static.wikia.nocookie.net/mobile-legends/images/0/02/Hero181-icon.png/revision/latest/scale-to-width-down/50?cb=20241021145229",
  "Miya": "https://static.wikia.nocookie.net/mobile-legends/images/8/8c/Hero011-icon.png/revision/latest/scale-to-width-down/50?cb=20241021145035",
  "Bruno": "https://static.wikia.nocookie.net/mobile-legends/images/f/f9/Hero121-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145152",
  "Clint": "https://static.wikia.nocookie.net/mobile-legends/images/7/73/Hero131-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145158",
  "Moskov": "https://static.wikia.nocookie.net/mobile-legends/images/2/2e/Hero311-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145343",
  
  "Karrie": "https://static.wikia.nocookie.net/mobile-legends/images/d/de/Hero401-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145437",
  "Irithel": "https://static.wikia.nocookie.net/mobile-legends/images/5/58/Hero431-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145456",
  "Hanabi": "https://static.wikia.nocookie.net/mobile-legends/images/f/ff/Hero601-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145634",
  "Claude": "https://static.wikia.nocookie.net/mobile-legends/images/2/29/Hero651-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145701",
  "Granger": "https://static.wikia.nocookie.net/mobile-legends/images/7/7c/Hero791-icon.png/revision/latest/scale-to-width-down/56?cb=20241108062800",
  
  "Wanwan": "https://static.wikia.nocookie.net/mobile-legends/images/2/24/Hero891-icon.png/revision/latest/scale-to-width-down/56?cb=20250118142135",
  "Popol and Kupa": "https://static.wikia.nocookie.net/mobile-legends/images/a/ab/Hero941-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153117",
  "Brody": "https://static.wikia.nocookie.net/mobile-legends/images/1/12/Hero1001-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153151",
  "Beatrix": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Hero1051-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153218",
  "Natan": "https://static.wikia.nocookie.net/mobile-legends/images/2/25/Hero1071-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153231",

  "Melissa": "https://static.wikia.nocookie.net/mobile-legends/images/0/09/Hero1141-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153310",
  "Ixia": "https://static.wikia.nocookie.net/mobile-legends/images/a/a2/Hero1211-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153350",
  
  "Lesley": "https://static.wikia.nocookie.net/mobile-legends/images/8/82/Hero531-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145551",
  "Kimmy": "https://static.wikia.nocookie.net/mobile-legends/images/1/15/Hero711-icon.png/revision/latest/scale-to-width-down/56?cb=20250402105900",

  "Yi Sun-shin": "https://static.wikia.nocookie.net/mobile-legends/images/e/ed/Hero301-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145338",
  "Edith": "https://static.wikia.nocookie.net/mobile-legends/images/3/36/Hero1111-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153252",
  
  //-------------------------Fighter-------------------------
  "Balmond": "https://static.wikia.nocookie.net/mobile-legends/images/9/93/Hero021-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145042",
  "Freya": "https://static.wikia.nocookie.net/mobile-legends/images/4/4e/Hero221-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145253",
  "Chou": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Hero261-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145315",
  "Sun": "https://static.wikia.nocookie.net/mobile-legends/images/f/fe/Hero271-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145321",
  "Alpha": "https://static.wikia.nocookie.net/mobile-legends/images/3/38/Hero281-icon.png/revision/latest/scale-to-width-down/56?cb=20250406000959", 
  
  "Ruby": "https://static.wikia.nocookie.net/mobile-legends/images/1/1d/Hero291-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145332",
  "Lapu-Lapu": "https://static.wikia.nocookie.net/mobile-legends/images/e/ee/Hero371-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145417",
  "Argus": "https://static.wikia.nocookie.net/mobile-legends/images/c/c7/Hero451-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145507",
  "Jawhead": "https://static.wikia.nocookie.net/mobile-legends/images/1/1c/Hero541-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145558",
  "Martis": "https://static.wikia.nocookie.net/mobile-legends/images/a/ac/Hero581-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145622", 
  
  "Aldous": "https://static.wikia.nocookie.net/mobile-legends/images/9/95/Hero641-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145655",
  "Leomord": "https://static.wikia.nocookie.net/mobile-legends/images/8/88/Hero671-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145713",
  "Thamuz": "https://static.wikia.nocookie.net/mobile-legends/images/1/17/Hero721-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145742",
  "Minsitthar": "https://static.wikia.nocookie.net/mobile-legends/images/1/1e/Hero741-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145754",
  "Badang": "https://static.wikia.nocookie.net/mobile-legends/images/a/a4/Hero771-icon.png/revision/latest/scale-to-width-down/56?cb=20241021152939", 
 "Guinevere": "https://static.wikia.nocookie.net/mobile-legends/images/f/f1/Hero801-icon.png/revision/latest/scale-to-width-down/56?cb=20241021152957",
  
  "X.Borg": "https://static.wikia.nocookie.net/mobile-legends/images/7/7a/Hero831-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153015",
  "Dyrroth": "https://static.wikia.nocookie.net/mobile-legends/images/6/62/Hero851-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153026",
  "Masha": "https://static.wikia.nocookie.net/mobile-legends/images/c/c5/Hero881-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153044",
  "Silvanna": "https://static.wikia.nocookie.net/mobile-legends/images/4/40/Hero901-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153056",
  "Yu Zhong": "https://static.wikia.nocookie.net/mobile-legends/images/5/53/Hero951-icon.png/revision/latest/scale-to-width-down/50?cb=20241021153123",
  "Khaleed": "https://static.wikia.nocookie.net/mobile-legends/images/d/d2/Hero981-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153140",
  
  "Phoveus": "https://static.wikia.nocookie.net/mobile-legends/images/8/88/Hero1061-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153224",
  "Aulus": "https://static.wikia.nocookie.net/mobile-legends/images/b/bf/Hero1081-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153236",
  "Cici": "https://static.wikia.nocookie.net/mobile-legends/images/6/65/Hero1231-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153402",
  "Lukas": "https://static.wikia.nocookie.net/mobile-legends/images/1/1c/Hero1271-icon.png/revision/latest/scale-to-width-down/56?cb=20250125233414",

  
  "Alucard": "https://static.wikia.nocookie.net/mobile-legends/images/c/c7/Hero071-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145111",
  "Bane": "https://static.wikia.nocookie.net/mobile-legends/images/e/e7/Hero111-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145146",
  "Zilong": "https://static.wikia.nocookie.net/mobile-legends/images/5/5f/Hero161-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145216",
  "Hilda": "https://static.wikia.nocookie.net/mobile-legends/images/1/11/Hero351-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145405",
  "Roger": "https://static.wikia.nocookie.net/mobile-legends/images/9/97/Hero391-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145430",
  
  "Terizla": "https://static.wikia.nocookie.net/mobile-legends/images/a/ab/Hero821-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153009",
  "Paquito": "https://static.wikia.nocookie.net/mobile-legends/images/3/35/Hero1031-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153208",
  "Yin": "https://static.wikia.nocookie.net/mobile-legends/images/b/b5/Hero1131-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153303",
  "Fredrinn": "https://static.wikia.nocookie.net/mobile-legends/images/f/f4/Hero1171-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153327",
  "Arlott": "https://static.wikia.nocookie.net/mobile-legends/images/2/22/Hero1201-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153344",

  "Gatotkaca": "https://static.wikia.nocookie.net/mobile-legends/images/c/cb/Hero411-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145443",
  "Grock": "https://static.wikia.nocookie.net/mobile-legends/images/d/dd/Hero441-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145502",
  "Kaja": "https://static.wikia.nocookie.net/mobile-legends/images/2/28/Hero621-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145645",
  
  "Benedetta": "https://static.wikia.nocookie.net/mobile-legends/images/4/47/Hero971-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153134",
  "Barats": "https://static.wikia.nocookie.net/mobile-legends/images/1/1a/Hero991-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153146",
  "Julian": "https://static.wikia.nocookie.net/mobile-legends/images/c/c2/Hero1161-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153321",
  "Suyou": "https://static.wikia.nocookie.net/mobile-legends/images/c/c4/Hero1261-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153421",
  "Kalea": "https://static.wikia.nocookie.net/mobile-legends/images/5/56/Hero1281-icon.png/revision/latest/scale-to-width-down/56?cb=20250402015050",

  
  
  
  //----------------------------Assassin--------------------------
  "Saber": "https://static.wikia.nocookie.net/mobile-legends/images/8/87/Hero031-icon.png/revision/latest/scale-to-width-down/56?cb=20250406000724",
  "Karina": "https://static.wikia.nocookie.net/mobile-legends/images/8/8a/Hero081-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145117",
  "Fanny": "https://static.wikia.nocookie.net/mobile-legends/images/7/78/Hero171-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145223",
  "Hayabusa": "https://static.wikia.nocookie.net/mobile-legends/images/c/cb/Hero211-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145247",
  
  "Natalia": "https://static.wikia.nocookie.net/mobile-legends/images/6/6a/Hero241-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145304",
  "Lancelot": "https://static.wikia.nocookie.net/mobile-legends/images/2/29/Hero471-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145518",
  "Helcurt": "https://static.wikia.nocookie.net/mobile-legends/images/e/eb/Hero511-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145541",
  "Gusion": "https://static.wikia.nocookie.net/mobile-legends/images/9/94/Hero561-icon.png/revision/latest/scale-to-width-down/50?cb=20241021145610",
  
  "Hanzo": "https://static.wikia.nocookie.net/mobile-legends/images/f/f4/Hero691-icon.png/revision/latest/scale-to-width-down/56?cb=20250118142130",
  "Ling": "https://static.wikia.nocookie.net/mobile-legends/images/c/ca/Hero841-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153020",
  "Aamon": "https://static.wikia.nocookie.net/mobile-legends/images/b/bc/Hero1091-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153241",
  "Joy": "https://static.wikia.nocookie.net/mobile-legends/images/c/c1/Hero1181-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153333",
  
  "Nolan": "https://static.wikia.nocookie.net/mobile-legends/images/e/e1/Hero1221-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153356",
  "Harley": "https://static.wikia.nocookie.net/mobile-legends/images/9/92/Hero421-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145449",
  "Selena": "https://static.wikia.nocookie.net/mobile-legends/images/d/d4/Hero631-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145650",
  "Kadita": "https://static.wikia.nocookie.net/mobile-legends/images/4/46/Hero751-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145759",
  "Mathilda": "https://static.wikia.nocookie.net/mobile-legends/images/c/cf/Hero1021-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153203",

  //----------------------------Tank----------------------------
  "Tigreal": "https://static.wikia.nocookie.net/mobile-legends/images/f/f2/Hero061-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145106",
  "Akai": "https://static.wikia.nocookie.net/mobile-legends/images/b/be/Hero091-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145133",
  "Franco": "https://static.wikia.nocookie.net/mobile-legends/images/2/25/Hero101-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145139",
  "Hylos": "https://static.wikia.nocookie.net/mobile-legends/images/0/0c/Hero491-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145529",
  "Uranus": "https://static.wikia.nocookie.net/mobile-legends/images/b/ba/Hero591-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145629",
  
  "Belerick": "https://static.wikia.nocookie.net/mobile-legends/images/d/d7/Hero701-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145730",
  "Khufra": "https://static.wikia.nocookie.net/mobile-legends/images/c/cd/Hero781-icon.png/revision/latest/scale-to-width-down/56?cb=20241021152946",
  "Baxia": "https://static.wikia.nocookie.net/mobile-legends/images/0/09/Hero871-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153038",
  "Atlas": "https://static.wikia.nocookie.net/mobile-legends/images/6/6e/Hero931-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153111",
  
  "Gloo": "https://static.wikia.nocookie.net/mobile-legends/images/4/45/Hero1041-icon.png/revision/latest/scale-to-width-down/56?cb=20250402105857",
  "Minotaur": "https://static.wikia.nocookie.net/mobile-legends/images/0/08/Hero191-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145234",
  "Johnson": "https://static.wikia.nocookie.net/mobile-legends/images/7/73/Hero321-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145350",
  "Chip": "https://static.wikia.nocookie.net/mobile-legends/images/9/94/Hero1241-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153409",
  
  "Carmilla": "https://static.wikia.nocookie.net/mobile-legends/images/2/23/Hero921-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153106",
  "Esmeralda": "https://static.wikia.nocookie.net/mobile-legends/images/8/88/Hero811-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153002",
  
  
  //----------------------------Mage--------------------
  "Nana": "https://static.wikia.nocookie.net/mobile-legends/images/c/c3/Hero051-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145100",
  "Eudora": "https://static.wikia.nocookie.net/mobile-legends/images/2/2a/Hero151-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145210",
  "Gord": "https://static.wikia.nocookie.net/mobile-legends/images/2/27/Hero231-icon.png/revision/latest/scale-to-width-down/56?cb=20250109162109",
  "Kagura": "https://static.wikia.nocookie.net/mobile-legends/images/e/ef/Hero251-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145310",
  "Cyclops": "https://static.wikia.nocookie.net/mobile-legends/images/9/96/Hero331-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145355",
  
  "Aurora": "https://static.wikia.nocookie.net/mobile-legends/images/2/2c/Hero361-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145411",
  "Vexana": "https://static.wikia.nocookie.net/mobile-legends/images/6/6d/Hero381-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145423",
  "Odette": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Hero461-icon.png/revision/latest/scale-to-width-down/56?cb=20250118142124",
  "Zhask": "https://static.wikia.nocookie.net/mobile-legends/images/5/54/Hero501-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145534",
  "Pharsa": "https://static.wikia.nocookie.net/mobile-legends/images/e/ef/Hero521-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145546",
  
  "Valir": "https://static.wikia.nocookie.net/mobile-legends/images/6/60/Hero571-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145616",
  "Chang'e": "https://static.wikia.nocookie.net/mobile-legends/images/5/5c/Hero611-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145640",
  "Vale": "https://static.wikia.nocookie.net/mobile-legends/images/f/fb/Hero661-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145708",
  "Lunox": "https://static.wikia.nocookie.net/mobile-legends/images/f/f6/Hero681-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145719",
  "Harith": "https://static.wikia.nocookie.net/mobile-legends/images/5/5a/Hero731-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145748",

  "Lylia": "https://static.wikia.nocookie.net/mobile-legends/images/a/a4/Hero861-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153033",
  "Cecilion": "https://static.wikia.nocookie.net/mobile-legends/images/8/85/Hero911-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153102",
  "Luo Yi": "https://static.wikia.nocookie.net/mobile-legends/images/f/f0/Hero961-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153129",
  "Yve": "https://static.wikia.nocookie.net/mobile-legends/images/c/cd/Hero1011-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153157",
  "Valentina": "https://static.wikia.nocookie.net/mobile-legends/images/6/62/Hero1101-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153247",
  "Zetian":"https://static.wikia.nocookie.net/mobile-legends/images/5/5c/Hero1291-icon.png/revision/latest/scale-to-width-down/56?cb=20250402020310",

  "Xavier": "https://static.wikia.nocookie.net/mobile-legends/images/8/80/Hero1151-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153316",
  "Novaria": "https://static.wikia.nocookie.net/mobile-legends/images/a/a1/Hero1191-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153339",
  "Zhuxin": "https://static.wikia.nocookie.net/mobile-legends/images/0/05/Hero1251-icon.png/revision/latest/scale-to-width-down/56?cb=20250406000840",
  "Faramis": "https://static.wikia.nocookie.net/mobile-legends/images/3/34/Hero761-icon.png/revision/latest/scale-to-width-down/56?cb=20241021152934",
  "Alice":"https://static.wikia.nocookie.net/mobile-legends/images/f/fd/Hero041-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145054",

  //--------------------------Support---------------------
  "Rafaela": "https://static.wikia.nocookie.net/mobile-legends/images/5/5e/Hero141-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145203",
  "Estes": "https://static.wikia.nocookie.net/mobile-legends/images/9/92/Hero341-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145400",
  "Diggie": "https://static.wikia.nocookie.net/mobile-legends/images/e/e3/Hero481-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145524",
  "Angela": "https://static.wikia.nocookie.net/mobile-legends/images/1/13/Hero551-icon.png/revision/latest/scale-to-width-down/56?cb=20250406000608",
  "Floryn": "https://static.wikia.nocookie.net/mobile-legends/images/2/20/Hero1121-icon.png/revision/latest/scale-to-width-down/56?cb=20241021153258",
  "Lolita":"https://static.wikia.nocookie.net/mobile-legends/images/1/17/Hero201-icon.png/revision/latest/scale-to-width-down/56?cb=20241021145241"
  
};

const heroBaseStats = {
  //Marksman
  Layla: { hp: 4369, hpRegen: 8.2, physicalAttack: 230, physicalDefense: 71, attackSpeed: 1.37, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Miya: { hp: 4367, hpRegen: 	9.0, physicalAttack: 255, physicalDefense: 74, attackSpeed: 1.41, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50 , movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Bruno: { hp: 4517, hpRegen: 9.0, physicalAttack: 343, physicalDefense: 76, attackSpeed: 1.29, attackSpeedRatio: 80, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Clint: { hp: 4669, hpRegen: 10.2, physicalAttack: 318, physicalDefense: 79, attackSpeed: 1.45, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Moskov: { hp: 4257, hpRegen: 9.4, physicalAttack: 300, physicalDefense: 75, attackSpeed: 1.09, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Irithel: { hp: 4537, hpRegen: 10.2, physicalAttack: 272, physicalDefense: 75, attackSpeed: 1.24, attackSpeedRatio: 80, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Hanabi: { hp: 4057, hpRegen: 9.0, physicalAttack: 217, physicalDefense: 74, attackSpeed: 1.41, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Claude: { hp: 4155, hpRegen: 	11.2, physicalAttack: 195, physicalDefense: 56 , attackSpeed: 1.24, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Granger: { hp: 4220, hpRegen: 8.2, physicalAttack: 326, physicalDefense: 71, attackSpeed: 1.23, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Wanwan: { hp: 4409, hpRegen: 8.2, physicalAttack: 242, physicalDefense: 59, attackSpeed: 	1.15, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  "Popol and Kupa": { hp: 4385, hpRegen: 9.0, physicalAttack: 193, physicalDefense: 67, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Brody: { hp: 4597, hpRegen: 10.4, physicalAttack: 245, physicalDefense: 66, attackSpeed: 	1.91, attackSpeedRatio: 70, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 253, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Beatrix: { hp: 4699, hpRegen: 10.0, physicalAttack: 250, physicalDefense: 64, attackSpeed: 	1.42, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 257, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Natan: { hp: 4523, hpRegen: 9.0, physicalAttack: 264, physicalDefense: 63, attackSpeed: 1.00, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Melissa: { hp: 4528, hpRegen: 9.6, physicalAttack: 221, physicalDefense: 78, attackSpeed: 1.08, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 248, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Ixia: { hp: 4699, hpRegen: 8.2, physicalAttack: 205, physicalDefense: 73, attackSpeed: 1.33, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Karrie: { hp: 4588, hpRegen: 11, physicalAttack: 295, physicalDefense: 77, attackSpeed: 1.32, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Lesley: { hp: 4247, hpRegen: 10.4, physicalAttack: 238, physicalDefense: 67, attackSpeed: 1.25, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 45, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Kimmy: { hp: 4095, hpRegen: 11.2, physicalAttack: 216, physicalDefense: 69, attackSpeed: 1.00, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 45, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},

  "Yi Sun-shin": { hp: 4425, hpRegen: 10.4, physicalAttack: 212, physicalDefense: 69, attackSpeed: 1.17, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Edith: { hp: 5489, hpRegen: 17.4, physicalAttack: 190, physicalDefense: 71, attackSpeed: 0.94, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  



  //Fighter
  Balmond: { hp: 6180, hpRegen: 	17.8, physicalAttack: 237, physicalDefense: 90, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Freya: { hp: 5671, hpRegen: 	16.2, physicalAttack: 231, physicalDefense: 83, attackSpeed: 1.58, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Chou: { hp: 5536, hpRegen: 14, physicalAttack: 262, physicalDefense: 87, attackSpeed: 1.48, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Sun: { hp: 5838, hpRegen: 	15.8, physicalAttack: 207, physicalDefense: 86, attackSpeed: 1.37, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Alpha: { hp: 5712, hpRegen: 	15, physicalAttack: 238, physicalDefense: 74 , attackSpeed: 1.58, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Ruby: { hp: 4889, hpRegen: 	14.0, physicalAttack: 226, physicalDefense: 74, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 45, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  "Lapu-Lapu": { hp: 5614, hpRegen: 12.6, physicalAttack: 234, physicalDefense: 71, attackSpeed: 1.4, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Argus: { hp: 5190, hpRegen: 13.6, physicalAttack: 195, physicalDefense: 77 , attackSpeed: 1.23, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Jawhead: { hp: 5780, hpRegen: 15.0, physicalAttack: 234, physicalDefense: 88, attackSpeed: 1.40, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Martis: { hp: 5594, hpRegen: 	12.6, physicalAttack: 250, physicalDefense: 90 , attackSpeed: 1.43, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Aldous: { hp: 5328, hpRegen: 16.6, physicalAttack: 279, physicalDefense: 83 , attackSpeed: 1.18, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Leomord: { hp: 5748, hpRegen: 	13.2, physicalAttack: 269, physicalDefense: 74 , attackSpeed: 1.26, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Thamuz: { hp: 5740, hpRegen: 13.0, physicalAttack: 222, physicalDefense: 80 , attackSpeed: 1.26, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Badang: { hp: 5788, hpRegen: 	13.8, physicalAttack: 244, physicalDefense: 87, attackSpeed: 1.55, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Minsitthar: { hp: 5470, hpRegen: 	13.2, physicalAttack: 250, physicalDefense: 87, attackSpeed: 1.53, attackSpeedRatio: 80, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Guinevere: { hp: 5286, hpRegen: 14.0, physicalAttack: 255, physicalDefense: 68 , attackSpeed: 1.59, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  "X.Borg": { hp: 2524, hpRegen: 13.6, physicalAttack: 232, physicalDefense: 90, attackSpeed: 1.22, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Dyrroth: { hp: 5768, hpRegen: 15.0, physicalAttack: 266, physicalDefense: 75 , attackSpeed: 1.56, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 265, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Masha: { hp: 4353, hpRegen: 10.0, physicalAttack: 227, physicalDefense: 50, attackSpeed: 1.45, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 67, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Silvanna: { hp: 5586, hpRegen: 14.0, physicalAttack: 256, physicalDefense: 72, attackSpeed: 1.59, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  "Yu Zhong": { hp: 5428, hpRegen: 	18.6, physicalAttack: 293, physicalDefense: 83, attackSpeed: 1.11, attackSpeedRatio: 80, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Khaleed: { hp: 5718, hpRegen: 13.2, physicalAttack: 266, physicalDefense: 87, attackSpeed: 1.26, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
 
  Phoveus: { hp: 5698, hpRegen: 	17.6, physicalAttack: 240, physicalDefense: 87 , attackSpeed: 1.14, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 252, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Aulus: { hp: 5628, hpRegen: 16.6, physicalAttack: 268, physicalDefense: 73, attackSpeed: 1.12, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Cici: { hp: 5129, hpRegen: 14.0, physicalAttack: 226, physicalDefense: 74, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 45, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Lukas: { hp: 5378, hpRegen: 14.2, physicalAttack: 248, physicalDefense: 83, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  


  Alucard: { hp: 5593, hpRegen: 	14.0, physicalAttack: 244, physicalDefense: 86, attackSpeed: 1.54, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Bane: { hp: 5811, hpRegen: 	16.8, physicalAttack: 269, physicalDefense: 84, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Zilong: { hp: 5517, hpRegen: 	12.6, physicalAttack: 216, physicalDefense: 90, attackSpeed: 	1.53, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 265, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Hilda: { hp: 6149, hpRegen: 17.2, physicalAttack: 218, physicalDefense: 124, attackSpeed: 1.33, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 71, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Roger: { hp: 5089, hpRegen: 10.2, physicalAttack: 317, physicalDefense: 81, attackSpeed: 1.25, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Terizla: { hp: 5738, hpRegen: 17.6, physicalAttack: 307, physicalDefense: 69, attackSpeed: 1, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Paquito: { hp: 5458, hpRegen: 	16.0, physicalAttack: 262, physicalDefense: 74, attackSpeed: 1.60, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Yin: { hp: 5238, hpRegen: 	16.0, physicalAttack: 210, physicalDefense: 71, attackSpeed: 1.45, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 252, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Fredrinn: { hp: 6069, hpRegen: 14.8, physicalAttack: 240, physicalDefense: 76 , attackSpeed: 1.34, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Arlott: { hp: 5428, hpRegen: 	14.2, physicalAttack: 260, physicalDefense: 82, attackSpeed: 1.23, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},

  Gatotkaca: { hp: 5569, hpRegen: 	16.8, physicalAttack: 228, physicalDefense: 58 , attackSpeed: 1.25, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Grock: { hp: 6179, hpRegen: 	16.8, physicalAttack: 250, physicalDefense: 68, attackSpeed: 1.18, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Kaja: { hp: 5549, hpRegen: 	18.8, physicalAttack: 218, physicalDefense: 78 , attackSpeed: 1.33, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 45, movementSpeed: 270, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
 
  Benedetta: { hp: 4851, hpRegen: 	12.8, physicalAttack: 256, physicalDefense: 73, attackSpeed: 1.41, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Barats: { hp: 5765, hpRegen: 	17.2, physicalAttack: 207, physicalDefense: 80, attackSpeed: 1.15, attackSpeedRatio: 50, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 268, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Julian: { hp: 5664, hpRegen: 	14.2, physicalAttack: 257, physicalDefense: 74, attackSpeed: 1.39, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 262, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Suyou: { hp: 4607, hpRegen: 13.2, physicalAttack: 289, physicalDefense: 72, attackSpeed: 1.36, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 56, movementSpeed: 225, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Kalea: { hp: 5650, hpRegen: 	16.2, physicalAttack: 255, physicalDefense: 81, attackSpeed: 1.42, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},

  
  

  
  //Assassin 
  Saber: { hp: 4960, hpRegen: 	13.2, physicalAttack: 254, physicalDefense: 77, attackSpeed: 1.36, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Karina: { hp: 5262, hpRegen: 14.0, physicalAttack: 236, physicalDefense: 83, attackSpeed: 1.54, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Fanny: { hp: 4400, hpRegen: 	12.4, physicalAttack: 269, physicalDefense: 68, attackSpeed: 1.44, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 265, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Hayabusa: { hp: 4620, hpRegen: 	13.6, physicalAttack: 251, physicalDefense: 75, attackSpeed: 1.31, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Natalia: { hp: 4935, hpRegen: 13.2, physicalAttack: 243, physicalDefense: 75, attackSpeed: 1.30, attackSpeedRatio: 60, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Lancelot: { hp: 4607, hpRegen: 	13.2, physicalAttack: 289, physicalDefense: 60, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Helcurt: { hp: 4853, hpRegen: 	13.2, physicalAttack: 275, physicalDefense: 73, attackSpeed: 1.46, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Gusion: { hp: 4888, hpRegen: 	14.0, physicalAttack: 234, physicalDefense: 67, attackSpeed: 1.46, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 38, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Hanzo: { hp: 4624, hpRegen: 	13.2, physicalAttack: 268, physicalDefense: 73, attackSpeed: 1.37, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Ling: { hp: 4418, hpRegen: 14.0, physicalAttack: 240, physicalDefense: 81, attackSpeed: 1.26, attackSpeedRatio: 40, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Aamon: { hp: 4742, hpRegen: 14.2, physicalAttack: 255, physicalDefense: 66, attackSpeed: 1.29, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Joy: { hp: 5408, hpRegen: 	14.0, physicalAttack: 255, physicalDefense: 78, attackSpeed: 1.54, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 45, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Nolan: { hp: 4607, hpRegen: 	13.2, physicalAttack: 289, physicalDefense: 72 , attackSpeed: 1.34, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Harley: { hp: 4356, hpRegen: 	11.4, physicalAttack: 201, physicalDefense: 72, attackSpeed: 1.27, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Selena: { hp: 4984, hpRegen: 	11.0, physicalAttack: 204, physicalDefense: 59, attackSpeed: 1.21, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Kadita: { hp: 4691, hpRegen: 11.6, physicalAttack: 178, physicalDefense: 74, attackSpeed: 1.24, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Mathilda: { hp: 5290, hpRegen: 10.8, physicalAttack: 214, physicalDefense: 80, attackSpeed: 1.07, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 252, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
 
  
  //Tank
  Tigreal: { hp: 6879, hpRegen: 16.8, physicalAttack: 207, physicalDefense: 95, attackSpeed: 1.31, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 71, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Akai: { hp: 5861, hpRegen: 	16.8, physicalAttack: 194, physicalDefense: 76, attackSpeed: 1.34, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 71, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Franco: { hp: 6534, hpRegen: 18.6, physicalAttack: 217, physicalDefense: 93, attackSpeed: 1.24, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Hylos: { hp: 7749, hpRegen: 40.8, physicalAttack: 198, physicalDefense: 71, attackSpeed: 1.31, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Uranus: { hp: 5009, hpRegen: 14.4, physicalAttack: 217, physicalDefense: 47, attackSpeed: 1.31, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 24, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Belerick: { hp: 5719, hpRegen: 	16.8, physicalAttack: 208, physicalDefense: 54, attackSpeed: 1.18, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Khufra: { hp: 6139, hpRegen: 	18.2, physicalAttack: 204, physicalDefense: 119, attackSpeed: 1.22, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 71, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Baxia: { hp: 5471, hpRegen: 	16.8, physicalAttack: 204, physicalDefense: 72, attackSpeed: 1.28, attackSpeedRatio: 90, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Atlas: { hp: 6011, hpRegen: 	16.8, physicalAttack: 259, physicalDefense: 70 , attackSpeed: 1.09, attackSpeedRatio: 90, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Gloo: { hp: 6179, hpRegen: 20.8, physicalAttack: 210, physicalDefense: 65, attackSpeed: 1.09, attackSpeedRatio: 80, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Minotaur: { hp: 6345, hpRegen: 17.2, physicalAttack: 195, physicalDefense: 73, attackSpeed: 1.17, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 45, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Johnson: { hp: 6099, hpRegen: 16.8, physicalAttack: 209, physicalDefense: 96, attackSpeed: 1.24, attackSpeedRatio: 100, mana: 0, manaRegen: 0, magicPower: 0, magicDefense: 50, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Chip: { hp: 5378, hpRegen: 16.8, physicalAttack: 207, physicalDefense: 79, attackSpeed: 1.31, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Carmilla: { hp: 5706, hpRegen: 14.0, physicalAttack: 255, physicalDefense: 75, attackSpeed: 1.59, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Esmeralda: { hp: 5254, hpRegen: 11.4, physicalAttack: 191, physicalDefense: 75, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 45, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  

  //Mage
  Nana: { hp: 4321, hpRegen: 11.0, physicalAttack: 217, physicalDefense: 59, attackSpeed: 1.43, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Eudora: { hp: 4771, hpRegen: 12.0, physicalAttack: 193, physicalDefense: 77, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Gord: { hp: 4928, hpRegen: 10.6, physicalAttack: 196, physicalDefense: 69, attackSpeed: 1.10, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Kagura: { hp: 4376, hpRegen: 12.8, physicalAttack: 230, physicalDefense: 60, attackSpeed: 1.16, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Cyclops: { hp: 4797, hpRegen: 12.0, physicalAttack: 193, physicalDefense: 76, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Aurora: { hp: 4496, hpRegen: 11.0, physicalAttack: 225, physicalDefense: 73, attackSpeed: 1.21, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Vexana: { hp: 4406, hpRegen: 11.8, physicalAttack: 193, physicalDefense: 63, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Odette: { hp: 4481, hpRegen: 11.0, physicalAttack: 178, physicalDefense: 60, attackSpeed: 1.24, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 220, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Zhask: { hp: 4256, hpRegen: 11.0, physicalAttack: 208, physicalDefense: 63, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Pharsa: { hp: 4255, hpRegen: 11.0, physicalAttack: 199, physicalDefense: 73, attackSpeed: 1.12, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  
  Valir: { hp: 4511, hpRegen: 11.0, physicalAttack: 171, physicalDefense: 77, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  "Change'e": { hp: 4163, hpRegen: 11.0, physicalAttack: 222, physicalDefense: 55, attackSpeed: 1.15, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Vale: { hp: 4263, hpRegen: 	11.0, physicalAttack: 215, physicalDefense: 71, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 15, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Lunox: { hp: 4735, hpRegen: 11, physicalAttack: 202, physicalDefense: 52 , attackSpeed: 1.15, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Harith: { hp: 4690, hpRegen: 11.4, physicalAttack: 187, physicalDefense: 79 , attackSpeed: 1.26, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},

  Lylia: { hp: 4384, hpRegen: 11, physicalAttack: 207, physicalDefense: 61, attackSpeed: 1.18, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38 , movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Cecilion: { hp: 4451, hpRegen: 11, physicalAttack: 171, physicalDefense: 62, attackSpeed: 1.11, attackSpeedRatio: 100, mana: 2660, manaRegen: 9.4, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  "Luo Yi": { hp: 5156, hpRegen: 	11.2, physicalAttack: 193, physicalDefense: 74, attackSpeed: 1.12, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 45, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Yve: { hp: 5066, hpRegen:	11.4, physicalAttack: 205, physicalDefense: 66, attackSpeed: 1.11, attackSpeedRatio: 100, mana: 1900, manaRegen: 	6.8, magicPower: 0, magicDefense: 38, movementSpeed: 255, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Valentina: { hp: 5326, hpRegen: 11.4, physicalAttack: 205, physicalDefense: 75, attackSpeed: 1.11, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Zetian:{ hp: 4440, hpRegen: 11.0, physicalAttack: 0, physicalDefense: 72, attackSpeed: 1.04, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},

  Xavier: { hp: 4611, hpRegen: 	11.0, physicalAttack: 198, physicalDefense: 59, attackSpeed: 1.11, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Novaria: { hp: 4228, hpRegen: 11.0, physicalAttack: 202, physicalDefense: 56, attackSpeed: 1.15, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 45, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Zhuxin: { hp: 4256, hpRegen: 11.4, physicalAttack: 205, physicalDefense: 69, attackSpeed: 1.12, attackSpeedRatio: 100, mana: 1200, manaRegen:	9.6, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Faramis: { hp: 4902, hpRegen: 10.8, physicalAttack: 216, physicalDefense: 66, attackSpeed: 1.09, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 38, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Alice:{ hp: 4946, hpRegen: 11.4, physicalAttack: 191, physicalDefense: 80, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 2850, manaRegen: 10.2, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},


  //Support
  Rafaela: { hp: 4268, hpRegen: 11.4, physicalAttack: 218, physicalDefense: 70, attackSpeed: 1.13, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 245, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Estes: { hp: 3950, hpRegen: 11.4, physicalAttack: 221, physicalDefense: 65, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Diggie: { hp: 4183, hpRegen: 11.4, physicalAttack: 216, physicalDefense: 60, attackSpeed: 1.14, attackSpeedRatio: 100, mana: 1900, manaRegen:	6.8, magicPower: 0, magicDefense: 50, movementSpeed: 250, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Angela: { hp: 4206, hpRegen: 11.0, physicalAttack: 216, physicalDefense: 69, attackSpeed: 1.13, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Floryn: { hp: 4256, hpRegen: 11.8, physicalAttack: 222, physicalDefense: 68, attackSpeed: 1.11, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 240, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},
  Lolita: { hp: 4803, hpRegen: 18.0, physicalAttack: 211, physicalDefense: 71, attackSpeed: 1.16, attackSpeedRatio: 100, mana: 1900, manaRegen: 6.8, magicPower: 0, magicDefense: 50, movementSpeed: 260, physicalPen: 0, magicPen: 0, critAttack: 0, critChance: 0, cooldown: 0},




};

let currentHero = null;
let computed = false;

// === Get item stats from slots ===
function getItemStats() {
  const stats = Object.fromEntries(Object.keys(statIds).map(key => [key, 0]));
  slots.forEach(slot => {
    const item = slot.querySelector('.item');
    if (item) {
      for (const key in stats) {
        stats[key] += parseFloat(item.dataset[key]) || 0;
      }
    }
  });
  return stats;
}

// === Format stat for display ===
function formatStat(key, value) {
  return ['attackSpeedRatio', 'critChance', 'cooldown', 'movementSpeedRatio', 'lifesteal','spellvamp', 'adaptiveAttackRatio'].includes(key) ? `${value}%` : value.toString();
}

// === Update stat display (??? + bonus) ===
function updateStatDisplay() {
  computed = false;
  const bonus = getItemStats();
  for (const key in statElements) {
    statElements[key].textContent = `??? + (${formatStat(key, bonus[key])})`;
  }
}

// === Compute final total (base + bonus) ===
function computeStats() {
  const bonus = getItemStats();
  const base = currentHero ? heroBaseStats[currentHero] : Object.fromEntries(Object.keys(statIds).map(key => [key, 0]));
  for (const key in statElements) {
    const total = (base[key] || 0) + (bonus[key] || 0);
    statElements[key].textContent = formatStat(key, total);
  }
  computed = true;
}

// === Add drag events to item ===
function addDragEvents(item) {
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.outerHTML);
    setTimeout(() => item.remove(), 0);
  });
}

// === Drag & Drop + Click-to-remove ===
slots.forEach(slot => {
  slot.addEventListener('dragover', e => e.preventDefault());
  slot.addEventListener('drop', e => {
    e.preventDefault();
    if (slot.children.length === 0) {
      const data = e.dataTransfer.getData('text/plain');
      const temp = document.createElement('div');
      temp.innerHTML = data;
      const newItem = temp.firstChild;
      newItem.classList.add('added-item');
      addDragEvents(newItem);
      slot.appendChild(newItem);
      updateStatDisplay();
    }
  });

  slot.addEventListener('click', e => {
    if (e.target.classList.contains('item')) {
      e.target.remove();
      updateStatDisplay();
    }
  });
});

// === Click to add item ===
items.forEach(item => {
  item.addEventListener('click', () => {
    const emptySlot = Array.from(slots).find(slot => slot.children.length === 0);
    if (!emptySlot) return;
    const newItem = item.cloneNode(true);
    newItem.classList.add('added-item');
    addDragEvents(newItem);
    emptySlot.appendChild(newItem);
    updateStatDisplay();
  });
});

// === Clear button ===
clearBtn.addEventListener('click', () => {
  slots.forEach(slot => slot.innerHTML = '');
  currentHero = null;
  heroSelect.value = "0";
  heroPfp.src = heroImages["0"];
  updateStatDisplay();
});

// === Hero selection ===
heroSelect.addEventListener('change', () => {
  currentHero = heroSelect.value === "0" ? null : heroSelect.value;
  heroPfp.src = heroImages[currentHero] || heroImages["0"];
  updateStatDisplay();
});

// === Compute button ===
computeBtn.addEventListener('click', computeStats);

// === Initialize ===
updateStatDisplay();
