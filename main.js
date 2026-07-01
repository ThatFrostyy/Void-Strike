const ASSET = {
  background: "assets/Backgrounds/darkPurple.png",
  starLayer: "assets/Backgrounds/black.png",
  player: "assets/PNG/playerShip1_blue.png",
  playerDamage1: "assets/PNG/Damage/playerShip1_damage1.png",
  playerDamage2: "assets/PNG/Damage/playerShip1_damage2.png",
  enemyBlue: "assets/PNG/Enemies/enemyBlue1.png",
  enemyBlueHeavy: "assets/PNG/Enemies/enemyBlue3.png",
  enemyGreen: "assets/PNG/Enemies/enemyGreen2.png",
  enemyGreenScout: "assets/PNG/Enemies/enemyGreen5.png",
  enemyRed: "assets/PNG/Enemies/enemyRed1.png",
  enemyRedFast: "assets/PNG/Enemies/enemyRed5.png",
  enemyBlack: "assets/PNG/Enemies/enemyBlack4.png",
  enemyBoss: "assets/PNG/Extension/Ships/spaceShips_007.png",
  playerLaser: "assets/PNG/Lasers/laserBlue01.png",
  playerLaserWide: "assets/PNG/Lasers/laserBlue08.png",
  playerLaserPierce: "assets/PNG/Lasers/laserGreen14.png",
  enemyLaser: "assets/PNG/Lasers/laserRed01.png",
  enemyLaserWide: "assets/PNG/Lasers/laserRed08.png",
  enemyLaserFast: "assets/PNG/Lasers/laserRed10.png",
  enemyMissile: "assets/PNG/Extension/Missiles/spaceMissiles_040.png",
  meteorBrownBig: "assets/PNG/Meteors/meteorBrown_big2.png",
  meteorBrownJagged: "assets/PNG/Meteors/meteorBrown_big3.png",
  meteorBrownMed: "assets/PNG/Meteors/meteorBrown_med1.png",
  meteorBrownSmall: "assets/PNG/Meteors/meteorBrown_small1.png",
  meteorGreyBig: "assets/PNG/Meteors/meteorGrey_big1.png",
  meteorGreyWide: "assets/PNG/Meteors/meteorGrey_big2.png",
  meteorGreyMed: "assets/PNG/Meteors/meteorGrey_med2.png",
  meteorGreySmall: "assets/PNG/Meteors/meteorGrey_small2.png",
  meteorCrater1: "assets/PNG/Extension/Meteors/spaceMeteors_001.png",
  meteorCrater2: "assets/PNG/Extension/Meteors/spaceMeteors_002.png",
  meteorCrater3: "assets/PNG/Extension/Meteors/spaceMeteors_003.png",
  smoke: "assets/PNG/Extension/Effects/spaceEffects_015.png",
  smokeLarge: "assets/PNG/Extension/Effects/spaceEffects_016.png",
  spark: "assets/PNG/Effects/star2.png",
  engine: "assets/PNG/Effects/speed.png",
  shieldFx: "assets/PNG/Effects/shield1.png",
  powerSpread: "assets/PNG/Power-ups/powerupBlue_bolt.png",
  powerRapid: "assets/PNG/Power-ups/powerupYellow_bolt.png",
  powerShield: "assets/PNG/Power-ups/powerupRed_shield.png",
  powerStasis: "assets/PNG/Power-ups/powerupGreen_star.png",
  powerOverdrive: "assets/PNG/Power-ups/powerupMagenta_skull.png",
  currencyStar: "assets/PNG/Power-ups/star_gold.png",
};

const SOUND = {
  playerLaser: "assets/Audio/laserSmall_000.ogg",
  playerCharged: "assets/Audio/laserLarge_002.ogg",
  enemyLaser: "assets/Audio/laserRetro_001.ogg",
  missile: "assets/Audio/laserSmall_002.ogg",
  enemyExplosion: "assets/Audio/explosionCrunch_001.ogg",
  bigExplosion: "assets/Audio/explosionCrunch_004.ogg",
  lowBoom: "assets/Audio/lowFrequency_explosion_000.ogg",
  impact: "assets/Audio/impactMetal_002.ogg",
  shield: "assets/Audio/forceField_001.ogg",
  ui: "assets/Audio/doorOpen_001.ogg",
  missileWarning: "assets/Audio/sfx_twoTone.ogg",
  missilePop: "assets/Audio/sfx_zap.ogg",
  powerSpread: "assets/Audio/sfx_laser1.ogg",
  powerRapid: "assets/Audio/sfx_laser2.ogg",
  powerShield: "assets/Audio/sfx_shieldUp.ogg",
  powerStasis: "assets/Audio/sfx_twoTone.ogg",
  powerOverdrive: "assets/Audio/sfx_zap.ogg",
  powerExpire: "assets/Audio/sfx_shieldDown.ogg",
  starPickup: "assets/Audio/sfx_twoTone.ogg",
  musicMenu: "assets/Music/Map.wav",
  musicGame: "assets/Music/Mars.wav",
  musicBossIntro: "assets/Music/BossIntro.wav",
  musicBoss: "assets/Music/BossMain.wav",
};

const STORAGE_KEYS = {
  bestScore: "spaceShooter.bestScore",
  stars: "spaceShooter.stars",
  language: "spaceShooter.language",
  upgrades: "spaceShooter.upgrades",
};

const DEFAULT_UPGRADES = {
  maxLives: 0,
  fireRate: 0,
  moveSpeed: 0,
};

const UPGRADE_CONFIG = {
  maxLives: { max: 1, costs: [50] },
  fireRate: { max: 3, costs: [100, 250, 500] },
  moveSpeed: { max: 3, costs: [100, 250, 500] },
};

const LANGUAGES = {
  en: { code: "EN", name: "English" },
  sr: { code: "SR", name: "Srpski" },
};

const FONT_PIXEL = '"Kenney Future", "Courier New", monospace';
const FONT_UI = '"Trebuchet MS", Arial, sans-serif';

const TEXT = {
  en: {
    title: "VOID STRIKE",
    controlsTitle: "CONTROLS",
    controlsBody: "WASD / ARROWS  MOVE\nSPACE  FIRE\nESC  PAUSE",
    controlsVertical: "WASD / ARROWS  MOVE\nSPACE  FIRE\nESC  PAUSE",
    controlsSurvival: "WASD / ARROWS  MOVE\nMOUSE  AIM\nSPACE / CLICK  FIRE",
    controlsHelpBody: "VERTICAL\nWASD / ARROWS  MOVE\nSPACE  FIRE\nESC  PAUSE\n\nSURVIVAL\nWASD / ARROWS  MOVE\nMOUSE  AIM\nSPACE / CLICK  FIRE\nESC  PAUSE",
    start: "START",
    guide: "GUIDE",
    modeTitle: "GAME MODE",
    verticalMode: "VERTICAL",
    verticalDesc: "Classic upward run",
    survivalMode: "SURVIVAL",
    survivalDesc: "Top-down defense",
    powerGuide: "POWER GUIDE",
    close: "CLOSE",
    language: "LANGUAGE",
    topScore: "TOP SCORE",
    stars: "STARS",
    score: "SCORE",
    wave: "WAVE",
    paused: "PAUSED",
    pauseHint: "PRESS ESC TO RESUME",
    missileLock: "MISSILE LOCK",
    bossWave: "BOSS WAVE",
    bossDefeated: "BOSS DOWN",
    gameOver: "GAME OVER",
    finalScore: "FINAL SCORE",
    wallet: "WALLET",
    earned: "EARNED",
    upgrades: "UPGRADES",
    resetGame: "RESET GAME",
    upgradeLives: "MAX LIVES",
    upgradeFire: "FIRE RATE",
    upgradeSpeed: "MOVE SPEED",
    bought: "BOUGHT",
    buy: "BUY",
    bossReward: "BOSS REWARD",
    menu: "MENU",
    restart: "MENU",
    secondsShort: "s",
    langEnglish: "English",
    langSerbian: "Srpski",
    guideText: {
      spread: "Adds a third firing lane and splits charged shots into twin angled blasts.",
      rapid: "Cuts the cannon delay and pushes player lasers faster.",
      shield: "Wraps the ship in a shield that absorbs hits and clears nearby threats.",
      stasis: "Slows enemies, enemy fire, missiles, and meteors for safer dodging.",
      overdrive: "Boosts movement speed and adds extra damage to every shot.",
    },
  },
  sr: {
    title: "VOID STRIKE",
    controlsTitle: "KONTROLE",
    controlsBody: "WASD / STRELICE  KRETANJE\nSPACE  PALJBA\nESC  PAUZA",
    controlsVertical: "WASD / STRELICE  KRETANJE\nSPACE  PALJBA\nESC  PAUZA",
    controlsSurvival: "WASD / STRELICE  KRETANJE\nMIŠ  NIŠAN\nSPACE / KLIK  PALJBA",
    controlsHelpBody: "VERTIKALNO\nWASD / STRELICE  KRETANJE\nSPACE  PALJBA\nESC  PAUZA\n\nOPSTANAK\nWASD / STRELICE  KRETANJE\nMIS  NISAN\nSPACE / KLIK  PALJBA\nESC  PAUZA",
    start: "START",
    guide: "VODIČ",
    modeTitle: "MOD IGRE",
    verticalMode: "VERTIKALNO",
    verticalDesc: "Klasičan let nagore",
    survivalMode: "ODBRANA",
    survivalDesc: "Top-down talasi",
    powerGuide: "VODIČ MOĆI",
    close: "ZATVORI",
    language: "JEZIK",
    topScore: "NAJBOLJI",
    stars: "ZVEZDE",
    score: "REZULTAT",
    wave: "TALAS",
    paused: "PAUZIRANO",
    pauseHint: "PRITISNI ESC ZA NASTAVAK",
    missileLock: "RAKETA NIŠANI",
    bossWave: "BOSS TALAS",
    bossDefeated: "BOSS PAO",
    gameOver: "KRAJ IGRE",
    finalScore: "KONAČNI REZULTAT",
    wallet: "NOVČANIK",
    earned: "OSVOJENO",
    upgrades: "NADOGRADNJE",
    resetGame: "RESET IGRE",
    upgradeLives: "MAX ZIVOTI",
    upgradeFire: "BRZINA PALJBE",
    upgradeSpeed: "BRZINA KRETANJA",
    bought: "KUPLJENO",
    buy: "KUPI",
    bossReward: "BOSS NAGRADA",
    menu: "MENI",
    restart: "MENI",
    secondsShort: "s",
    langEnglish: "Engleski",
    langSerbian: "Srpski",
    guideText: {
      spread: "Dodaje treću liniju paljbe i deli napunjene hice u dva kosa projektila.",
      rapid: "Skraćuje pauzu između hitaca i ubrzava laserske projektile igrača.",
      shield: "Omotava brod štitom koji upija udarce i čisti bliske pretnje.",
      stasis: "Usporava neprijatelje, njihove hice, rakete i meteore za lakše izbegavanje.",
      overdrive: "Povećava brzinu kretanja i dodaje dodatnu štetu svakom hicu.",
    },
  },
};

const ENEMY_TYPES = [
  {
    texture: "enemyGreenScout",
    hp: 1,
    score: 10,
    scale: 0.72,
    speed: [170, 260],
    drift: [2.4, 4.6],
    fireChance: 0.52,
    fireDelay: [1200, 2300],
    fireCooldown: [1750, 2950],
    bulletSpeed: [560, 760],
    pattern: "fast",
    body: [64, 48],
  },
  {
    texture: "enemyBlue",
    hp: 1,
    score: 10,
    scale: 0.74,
    speed: [115, 185],
    drift: [1.2, 2.6],
    fireChance: 0.68,
    fireDelay: [1200, 2300],
    fireCooldown: [1750, 3000],
    bulletSpeed: [440, 610],
    pattern: "aimed",
    body: [66, 54],
  },
  {
    texture: "enemyRed",
    hp: 2,
    score: 20,
    scale: 0.76,
    speed: [98, 165],
    drift: [1.5, 3.2],
    fireChance: 0.72,
    fireDelay: [1300, 2450],
    fireCooldown: [1950, 3300],
    bulletSpeed: [390, 540],
    pattern: "spread",
    body: [70, 56],
  },
  {
    texture: "enemyBlueHeavy",
    hp: 3,
    score: 30,
    scale: 0.66,
    speed: [70, 120],
    drift: [0.6, 1.6],
    fireChance: 0.82,
    fireDelay: [1450, 2700],
    fireCooldown: [2300, 3800],
    bulletSpeed: [360, 520],
    pattern: "triple",
    body: [76, 62],
  },
  {
    texture: "enemyBlack",
    hp: 2,
    score: 25,
    scale: 0.82,
    speed: [82, 138],
    drift: [0.5, 1.4],
    fireChance: 0.86,
    fireDelay: [1350, 2550],
    fireCooldown: [2500, 4100],
    bulletSpeed: [360, 500],
    pattern: "missile",
    body: [58, 48],
  },
  {
    texture: "enemyRedFast",
    hp: 1,
    score: 15,
    scale: 0.78,
    speed: [190, 300],
    drift: [3.2, 5.8],
    fireChance: 0.5,
    fireDelay: [1050, 2050],
    fireCooldown: [1650, 2800],
    bulletSpeed: [620, 820],
    pattern: "fast",
    body: [58, 46],
  },
];

const SURVIVAL_BOSS_TYPE = {
  texture: "enemyBoss",
  hp: 34,
  score: 260,
  scale: 1.34,
  speed: [76, 108],
  drift: [0.2, 0.7],
  fireChance: 1,
  fireDelay: [500, 900],
  fireCooldown: [1050, 1500],
  bulletSpeed: [460, 640],
  pattern: "boss",
  body: [132, 86],
  isBoss: true,
};

const VERTICAL_BOSS_TYPE = {
  texture: "enemyBoss",
  hp: 42,
  score: 420,
  scale: 1.42,
  speed: [62, 82],
  drift: [0.45, 1.05],
  fireChance: 1,
  fireDelay: [450, 800],
  fireCooldown: [880, 1280],
  bulletSpeed: [520, 720],
  pattern: "boss",
  body: [132, 86],
  isBoss: true,
};

const METEOR_TYPES = [
  { texture: "meteorBrownBig", hp: 3, scale: 0.9, speed: [250, 360], score: 6, radius: 0.34 },
  { texture: "meteorBrownJagged", hp: 2, scale: 0.94, speed: [320, 460], score: 5, radius: 0.35 },
  { texture: "meteorGreyWide", hp: 3, scale: 0.94, speed: [260, 390], score: 7, radius: 0.35 },
  { texture: "meteorGreyMed", hp: 2, scale: 1.05, speed: [380, 560], score: 4, radius: 0.36 },
  { texture: "meteorBrownSmall", hp: 1, scale: 1.05, speed: [520, 720], score: 2, radius: 0.42 },
  { texture: "meteorGreySmall", hp: 1, scale: 1.12, speed: [560, 760], score: 2, radius: 0.42 },
  { texture: "meteorCrater1", hp: 4, scale: 0.34, speed: [230, 340], score: 9, radius: 0.38 },
  { texture: "meteorCrater2", hp: 4, scale: 0.34, speed: [240, 350], score: 9, radius: 0.38 },
  { texture: "meteorCrater3", hp: 4, scale: 0.34, speed: [250, 365], score: 9, radius: 0.38 },
];

const POWERUP_TYPES = [
  {
    id: "spread",
    name: "NOVA",
    texture: "powerSpread",
    sound: "powerSpread",
    color: 0x55ddff,
    duration: 11000,
    hint: "extra firing lane",
  },
  {
    id: "rapid",
    name: "RAPID",
    texture: "powerRapid",
    sound: "powerRapid",
    color: 0xffdf5b,
    duration: 10000,
    hint: "faster cannon",
  },
  {
    id: "shield",
    name: "AEGIS",
    texture: "powerShield",
    sound: "powerShield",
    color: 0xff5f8a,
    duration: 12000,
    hint: "absorbs hits",
  },
  {
    id: "stasis",
    name: "STASIS",
    texture: "powerStasis",
    sound: "powerStasis",
    color: 0x7dff8c,
    duration: 9000,
    hint: "slows threats",
  },
  {
    id: "overdrive",
    name: "DRIVE",
    texture: "powerOverdrive",
    sound: "powerOverdrive",
    color: 0xff5cff,
    duration: 8500,
    hint: "speed + damage",
  },
];

const DEPTH = {
  background: 0,
  stars: 1,
  objects: 5,
  player: 9,
  effects: 18,
  hud: 30,
  overlay: 50,
};

class ShooterScene extends Phaser.Scene {
  constructor() {
    super("ShooterScene");
  }

  get width() {
    return this.scale.gameSize.width;
  }

  get height() {
    return this.scale.gameSize.height;
  }

  loadStoredNumber(key) {
    try {
      const value = Number.parseInt(window.localStorage.getItem(key), 10);
      return Number.isFinite(value) ? value : 0;
    } catch {
      return 0;
    }
  }

  saveStoredNumber(key, value) {
    try {
      window.localStorage.setItem(key, String(Math.max(0, Math.floor(value))));
    } catch {
      // Storage may be blocked in private or embedded browser contexts.
    }
  }

  loadStoredUpgrades() {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.upgrades) || "{}");
      return {
        maxLives: Phaser.Math.Clamp(Number.parseInt(parsed.maxLives, 10) || 0, 0, UPGRADE_CONFIG.maxLives.max),
        fireRate: Phaser.Math.Clamp(Number.parseInt(parsed.fireRate, 10) || 0, 0, UPGRADE_CONFIG.fireRate.max),
        moveSpeed: Phaser.Math.Clamp(Number.parseInt(parsed.moveSpeed, 10) || 0, 0, UPGRADE_CONFIG.moveSpeed.max),
      };
    } catch {
      return { ...DEFAULT_UPGRADES };
    }
  }

  saveStoredUpgrades() {
    try {
      window.localStorage.setItem(STORAGE_KEYS.upgrades, JSON.stringify(this.upgrades || DEFAULT_UPGRADES));
    } catch {
      // Storage may be blocked in private or embedded browser contexts.
    }
  }

  resetStoredProgress() {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.bestScore);
      window.localStorage.removeItem(STORAGE_KEYS.stars);
      window.localStorage.removeItem(STORAGE_KEYS.upgrades);
    } catch {
      // Storage may be blocked in private or embedded browser contexts.
    }
    this.bestScore = 0;
    this.starCurrency = 0;
    this.runStars = 0;
    this.upgrades = { ...DEFAULT_UPGRADES };
    this.maxLives = this.getBaseMaxLives();
    this.lives = Math.min(this.lives || this.maxLives, this.maxLives);
    this.updateMenuStats();
    this.updateHudText();
    this.updateUpgradeOverlay();
    this.updateGameOverWalletText();
  }

  loadStoredLanguage() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEYS.language);
      return TEXT[value] ? value : "en";
    } catch {
      return "en";
    }
  }

  saveStoredLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEYS.language, language);
    } catch {
      // Storage may be blocked in private or embedded browser contexts.
    }
  }

  t(key) {
    return TEXT[this.language]?.[key] ?? TEXT.en[key] ?? key;
  }

  pinToScreen(...items) {
    items.flat().forEach((item) => {
      if (item?.setScrollFactor) item.setScrollFactor(0);
    });
  }

  preload() {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const barWidth = Math.min(440, this.width - 84);
    const barHeight = 18;
    const loadingText = this.add.text(centerX, centerY - 44, "LOADING", {
      fontFamily: FONT_UI,
      fontSize: "28px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 6,
    }).setOrigin(0.5);
    const percentText = this.add.text(centerX, centerY + 38, "0%", {
      fontFamily: FONT_PIXEL,
      fontSize: "15px",
      color: "#9ee8ff",
      stroke: "#06101e",
      strokeThickness: 4,
    }).setOrigin(0.5);
    const barBack = this.add.rectangle(centerX, centerY, barWidth, barHeight, 0x071224, 0.92)
      .setStrokeStyle(2, 0x75dfff, 0.82);
    const barFill = this.add.graphics();

    this.load.on("progress", (value) => {
      const fillWidth = Math.max(4, (barWidth - 6) * value);
      barFill.clear();
      barFill.fillStyle(0x2db7ff, 1);
      barFill.fillRoundedRect(centerX - barWidth / 2 + 3, centerY - barHeight / 2 + 3, fillWidth, barHeight - 6, 5);
      barFill.fillStyle(0xffffff, 0.38);
      barFill.fillRoundedRect(centerX - barWidth / 2 + 3, centerY - barHeight / 2 + 3, fillWidth, 4, 4);
      percentText.setText(`${Math.round(value * 100)}%`);
    });
    this.load.once("complete", () => {
      barFill.destroy();
      barBack.destroy();
      loadingText.destroy();
      percentText.destroy();
    });

    Object.entries(ASSET).forEach(([key, path]) => {
      this.load.image(key, path);
    });
    Object.entries(SOUND).forEach(([key, path]) => {
      this.load.audio(key, path);
    });
  }

  create() {
    this.score = 0;
    this.bestScore = this.loadStoredNumber(STORAGE_KEYS.bestScore);
    this.starCurrency = this.loadStoredNumber(STORAGE_KEYS.stars);
    this.upgrades = this.loadStoredUpgrades();
    this.language = this.loadStoredLanguage();
    this.languageMenuOpen = false;
    this.selectedMode = "vertical";
    this.gameMode = "vertical";
    this.runStars = 0;
    this.maxLives = this.getBaseMaxLives();
    this.lives = this.maxLives;
    this.waveNumber = 0;
    this.nextPlayerShot = 0;
    this.playerShotStep = 0;
    this.nextPlayerSfx = 0;
    this.nextEnemySfx = 0;
    this.nextImpactSfx = 0;
    this.nextMissileWarning = 0;
    this.nextEngineTrail = 0;
    this.invulnerableUntil = this.time.now + 2200;
    this.currentMusic = null;
    this.pendingMusic = null;
    this.musicPausedByGame = false;
    this.isGameOver = false;
    this.isPaused = false;
    this.gameStarted = false;
    this.activePowerups = {};
    this.powerupBadges = {};
    this.menuOrbs = [];
    this.menuAccentLines = [];
    this.activeBulletTrails = [];

    this.setCanvasCursor("default");
    this.game.canvas.setAttribute("tabindex", "0");
    this.game.canvas.focus();
    this.input.on("pointerdown", () => {
      this.game.canvas.focus();
      if (this.gameStarted && !this.isGameOver && !this.isPaused) {
        this.setCanvasCursor(this.isSurvivalMode() ? "crosshair" : "none");
      }
    });

    this.background = this.add.tileSprite(0, 0, this.width, this.height, "background")
      .setOrigin(0)
      .setDepth(DEPTH.background)
      .setScrollFactor(0);
    this.starLayer = this.add.tileSprite(0, 0, this.width, this.height, "starLayer")
      .setOrigin(0)
      .setAlpha(0.46)
      .setDepth(DEPTH.background + 1)
      .setScrollFactor(0);
    this.starGraphics = this.add.graphics().setDepth(DEPTH.stars).setScrollFactor(0);
    this.stars = this.createStars(190);
    this.createLighting();

    this.playerBullets = this.physics.add.group({ maxSize: 90 });
    this.enemyBullets = this.physics.add.group({ maxSize: 170 });
    this.enemies = this.physics.add.group({ maxSize: 70 });
    this.meteors = this.physics.add.group({ maxSize: 30 });
    this.powerups = this.physics.add.group({ maxSize: 8 });
    this.currencyStars = this.physics.add.group({ maxSize: 24 });

    this.createPlayer();
    this.createHud();
    this.createPauseOverlay();
    this.createMainMenu();
    this.createInput();
    this.createAudio();
    this.createCollisions();
    this.createVignette();

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.stopMusic, this);
    this.scale.on("resize", this.handleResize, this);
  }

  createPlayer() {
    const playerScale = Phaser.Math.Clamp(this.height / 980, 0.76, 1);
    this.player = this.physics.add.sprite(this.width / 2, this.height - 92, "player");
    this.player.setScale(playerScale);
    this.player.setDepth(DEPTH.player);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(58, 68, true);
    this.player.setData("baseScale", playerScale);
    this.player.setVisible(false);

    this.playerDamage = this.add.sprite(this.player.x, this.player.y, "playerDamage1")
      .setScale(playerScale)
      .setDepth(DEPTH.player + 1)
      .setAlpha(0)
      .setVisible(false);

    this.engineFlame = this.add.sprite(this.player.x, this.player.y + 42 * playerScale, "engine")
      .setScale(0.9 * playerScale, 1.15 * playerScale)
      .setDepth(DEPTH.player - 1)
      .setAlpha(0.75)
      .setVisible(false)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setTint(0x5fd8ff);

    this.tweens.add({
      targets: this.engineFlame,
      scaleY: 1.85 * playerScale,
      alpha: 0.3,
      yoyo: true,
      repeat: -1,
      duration: 110,
      ease: "Sine.easeInOut",
    });

    this.createHullPips();
  }

  createHud() {
    this.hudPanel = this.add.rectangle(18, 16, 188, 76, 0x061022, 0.42)
      .setOrigin(0)
      .setDepth(DEPTH.hud - 1)
      .setScrollFactor(0)
      .setStrokeStyle(1, 0x4ed8ff, 0.25)
      .setVisible(false);
    this.wavePanel = this.add.rectangle(this.width - 18, 16, 142, 42, 0x061022, 0.36)
      .setOrigin(1, 0)
      .setDepth(DEPTH.hud - 1)
      .setScrollFactor(0)
      .setStrokeStyle(1, 0x8fb4ff, 0.24)
      .setVisible(false);
    this.scoreText = this.add.text(24, 22, "", {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "24px",
      color: "#eaf4ff",
      stroke: "#030710",
      strokeThickness: 5,
    }).setDepth(DEPTH.hud).setScrollFactor(0).setBlendMode(Phaser.BlendModes.ADD);

    this.comboText = this.add.text(this.width - 24, 22, "", {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "18px",
      color: "#9fb5e5",
      stroke: "#030710",
      strokeThickness: 4,
    }).setOrigin(1, 0).setDepth(DEPTH.hud).setScrollFactor(0).setBlendMode(Phaser.BlendModes.ADD);

    this.currencyText = this.add.text(24, 53, "", {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "18px",
      color: "#ffe890",
      stroke: "#030710",
      strokeThickness: 4,
    }).setDepth(DEPTH.hud).setScrollFactor(0).setBlendMode(Phaser.BlendModes.ADD);

    this.scoreText.setVisible(false);
    this.comboText.setVisible(false);
    this.currencyText.setVisible(false);
    this.updateHudText();
  }

  updateHudText() {
    this.updateScoreText();
    this.updateWaveText();
    this.updateCurrencyText();
  }

  updateScoreText() {
    if (this.scoreText) {
      this.scoreText.setText(`${this.t("score")} ${this.score}`);
    }
  }

  updateWaveText() {
    if (this.comboText) {
      this.comboText.setText(`${this.t("wave")} ${this.waveNumber}`);
    }
  }

  updateCurrencyText() {
    if (this.currencyText) {
      this.currencyText.setText(`${this.t("stars")} ${this.starCurrency}`);
    }
  }

  createHullPips() {
    this.hullPips = [];
    for (let index = 0; index < this.maxLives; index += 1) {
      const pip = this.add.circle(0, 0, 5, 0x76f2ff, 1)
        .setDepth(DEPTH.player + 2)
        .setStrokeStyle(2, 0x09243f, 0.95)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setVisible(false);
      this.hullPips.push(pip);
    }

    this.updateHullPips();
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      fire: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    this.input.keyboard.on("keydown-SPACE", () => this.shootPlayerLaser(this.time.now));
    this.input.keyboard.on("keydown-ESC", () => this.togglePause());
  }

  createAudio() {
    const resumePending = () => this.resumePendingMusic();
    this.input.on("pointerdown", resumePending);
    this.input.keyboard.on("keydown", resumePending);
    if (Phaser.Sound?.Events?.UNLOCKED) {
      this.sound.once(Phaser.Sound.Events.UNLOCKED, resumePending);
    }
    this.playMusic("musicMenu", { volume: 0.18, loop: true, fade: 0 });
  }

  createPauseOverlay() {
    this.pauseOverlay = this.add.container(0, 0).setDepth(DEPTH.overlay + 5).setVisible(false).setScrollFactor(0);
    const shade = this.add.rectangle(0, 0, this.width, this.height, 0x030611, 0.72)
      .setOrigin(0);
    const title = this.add.text(this.width / 2, this.height / 2 - 38, this.t("paused"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "54px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 7,
    }).setOrigin(0.5);
    const hint = this.add.text(this.width / 2, this.height / 2 + 30, this.t("pauseHint"), {
      fontFamily: FONT_UI,
      fontSize: "22px",
      color: "#9ee8ff",
      stroke: "#06101e",
      strokeThickness: 5,
    }).setOrigin(0.5);
    const menuButton = this.createMenuButton(this.t("menu"), 206, 54, () => this.returnToMainMenu(), () => this.isPaused);
    menuButton.setPosition(this.width / 2, this.height / 2 + 104);

    this.pauseOverlay.add([shade, title, hint, menuButton.button, menuButton.text]);
    this.pinToScreen(shade, title, hint, menuButton.button, menuButton.text);
    this.pauseOverlayShade = shade;
    this.pauseOverlayTitle = title;
    this.pauseOverlayHint = hint;
    this.pauseMenuButton = menuButton;
  }

  createMainMenu() {
    this.menuOverlay = this.add.container(0, 0).setDepth(DEPTH.overlay + 8).setScrollFactor(0);
    const shade = this.add.rectangle(0, 0, this.width, this.height, 0x030611, 0.28).setOrigin(0);
    const titleHalo = this.add.circle(0, 0, 132, 0x1aa8ff, 0.14)
      .setBlendMode(Phaser.BlendModes.ADD);
    const title = this.add.text(0, 0, this.t("title"), {
      fontFamily: FONT_UI,
      fontSize: "64px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#08101f",
      strokeThickness: 8,
    }).setOrigin(0.5);

    const statsPanel = this.add.rectangle(0, 0, 430, 54, 0x071224, 0.86)
      .setStrokeStyle(2, 0x75dfff, 0.74);
    const bestText = this.add.text(0, 0, "", {
      fontFamily: FONT_PIXEL,
      fontSize: "13px",
      color: "#8fd8ff",
      stroke: "#08101f",
      strokeThickness: 3,
    }).setOrigin(0, 0.5);
    const statsStar = this.add.image(0, 0, "currencyStar")
      .setScale(0.38)
      .setBlendMode(Phaser.BlendModes.ADD);
    const starsText = this.add.text(0, 0, "", {
      fontFamily: FONT_PIXEL,
      fontSize: "13px",
      fontStyle: "bold",
      color: "#ffe890",
      stroke: "#08101f",
      strokeThickness: 3,
    }).setOrigin(0, 0.5);

    const verticalMode = this.createModeCard("vertical");
    const survivalMode = this.createModeCard("survival");
    const menuShipGlow = this.add.circle(0, 0, 92, 0x2dd6ff, 0.2)
      .setBlendMode(Phaser.BlendModes.ADD);
    const menuShipFlame = this.add.sprite(0, 0, "engine")
      .setScale(1.05, 1.6)
      .setTint(0x5fd8ff)
      .setAlpha(0.62)
      .setBlendMode(Phaser.BlendModes.ADD);
    const menuShip = this.add.image(0, 0, "player")
      .setScale(1.18)
      .setAngle(-3);
    const helpButton = this.createMenuButton("?", 46, 46, () => this.showControlsHelp(), () => !this.gameStarted);

    this.menuOverlay.add([
      shade,
      menuShipGlow,
      menuShipFlame,
      menuShip,
      titleHalo,
      title,
      statsPanel,
      bestText,
      statsStar,
      starsText,
      verticalMode.glow,
      verticalMode.button,
      verticalMode.title,
      survivalMode.glow,
      survivalMode.button,
      survivalMode.title,
      helpButton.button,
      helpButton.text,
    ]);
    this.menuShade = shade;
    this.menuTitleHalo = titleHalo;
    this.menuTitle = title;
    this.menuOrbs = [];
    this.menuAccentLines = [];
    this.menuStatsPanel = statsPanel;
    this.menuBestText = bestText;
    this.menuStatsStar = statsStar;
    this.menuStarsText = starsText;
    this.modeCards = { vertical: verticalMode, survival: survivalMode };
    this.menuShipGlow = menuShipGlow;
    this.menuShipFlame = menuShipFlame;
    this.menuShip = menuShip;
    this.menuHelpButton = helpButton;

    this.createLanguageSelector();
    this.createGuideOverlay();
    this.createControlsHelpOverlay();
    this.updateModeCards();
    this.updateMenuStats();
    this.layoutMainMenu();
    this.animateMainMenu();
  }

  createMenuButton(label, width, height, onClick, activeCheck = () => !this.gameStarted) {
    const button = this.add.rectangle(0, 0, width, height, 0x1f86ff, 1)
      .setStrokeStyle(2, 0xb6dbff, 1)
      .setInteractive();
    const text = this.add.text(0, 0, label, {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: height > 58 ? "26px" : "22px",
      fontStyle: "bold",
      color: "#ffffff",
    }).setOrigin(0.5);

    button.on("pointerover", () => {
      if (activeCheck()) {
        button.setFillStyle(0x3ab7ff, 1).setStrokeStyle(3, 0xffffff, 1);
        this.tweenScale([button, text], 1.045, 120);
        this.setCanvasCursor("pointer");
      }
    });
    button.on("pointerout", () => {
      if (activeCheck()) {
        button.setFillStyle(0x1f86ff, 1).setStrokeStyle(2, 0xb6dbff, 1);
        this.tweenScale([button, text], 1, 130);
        this.setCanvasCursor("default");
      }
    });
    button.on("pointerdown", () => {
      if (activeCheck()) {
        this.tweenScale([button, text], 0.96, 70);
        this.time.delayedCall(75, () => this.tweenScale([button, text], 1.03, 100));
        onClick();
      }
    });

    return {
      button,
      text,
      setPosition: (x, y) => {
        button.setPosition(x, y);
        text.setPosition(x, y);
      },
    };
  }

  tweenScale(targets, scale, duration) {
    this.tweens.add({
      targets,
      scaleX: scale,
      scaleY: scale,
      duration,
      ease: "Sine.easeOut",
    });
  }

  createModeCard(mode) {
    const button = this.add.rectangle(0, 0, 342, 100, 0x102f58, 0.98)
      .setStrokeStyle(3, 0x8edfff, 0.86)
      .setInteractive();
    const glow = this.add.rectangle(0, 0, 366, 122, 0x2dd6ff, 0.16)
      .setStrokeStyle(2, 0x8ff6ff, 0.32)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setVisible(false);
    const title = this.add.text(0, 0, "", {
      fontFamily: FONT_UI,
      fontSize: "24px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#041126",
      strokeThickness: 4,
    }).setOrigin(0.5);

    button.on("pointerover", () => {
      if (!this.gameStarted) {
        button.setFillStyle(mode === "survival" ? 0x7836c9 : 0x278cef, 1);
        glow.setVisible(true).setAlpha(0.42);
        this.tweenScale([button, glow, title], 1.035, 120);
        this.setCanvasCursor("pointer");
      }
    });
    button.on("pointerout", () => {
      if (!this.gameStarted) {
        this.updateModeCards();
        this.tweenScale([button, glow, title], 1, 130);
        this.setCanvasCursor("default");
      }
    });
    button.on("pointerdown", () => {
      if (!this.gameStarted) {
        this.selectedMode = mode;
        this.startGame(mode);
      }
    });

    return {
      button,
      glow,
      title,
      mode,
      setPosition: (x, y, width = 342, height = 100) => {
        glow.setSize(width + 24, height + 22);
        button.setSize(width, height);
        if (button.input?.hitArea) {
          button.input.hitArea.x = 0;
          button.input.hitArea.y = 0;
          button.input.hitArea.width = width;
          button.input.hitArea.height = height;
        }
        glow.setPosition(x, y);
        button.setPosition(x, y);
        title.setPosition(x, y);
        title.setFontSize(`${Phaser.Math.Clamp(height * 0.24, 20, 26)}px`);
      },
    };
  }

  animateMainMenu() {
    if (!this.menuOverlay) return;

    this.tweens.add({
      targets: this.menuTitleHalo,
      scale: { from: 0.94, to: 1.12 },
      alpha: { from: 0.09, to: 0.2 },
      duration: 1800,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    this.tweens.add({
      targets: this.menuShipFlame,
      alpha: { from: 0.34, to: 0.82 },
      scaleY: "+=0.28",
      duration: 130,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    this.tweens.add({
      targets: this.menuShipGlow,
      alpha: { from: 0.12, to: 0.32 },
      scale: "+=0.12",
      duration: 1200,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  selectMode(mode, playSound = true) {
    if (!["vertical", "survival"].includes(mode)) return;

    this.selectedMode = mode;
    if (this.menuControls) this.menuControls.setText(this.getControlsText());
    this.updateModeCards();
    this.layoutMainMenu();
    if (playSound) this.playSfx("ui", { volume: 0.12, rate: mode === "survival" ? 1.16 : 1.02 });
  }

  updateModeCards() {
    if (!this.modeCards) return;

    Object.values(this.modeCards).forEach((card) => {
      const isSurvival = card.mode === "survival";
      card.glow
        .setVisible(false)
        .setAlpha(0);
      card.button
        .setFillStyle(isSurvival ? 0x321260 : 0x0c4e95, 0.98)
        .setStrokeStyle(3, isSurvival ? 0xd7a0ff : 0xaee8ff, 0.88);
      card.title
        .setText(isSurvival ? `[ ♦ ${this.t("survivalMode")} ]` : `[ ▲ ${this.t("verticalMode")} ]`)
        .setColor(isSurvival ? "#f6e8ff" : "#e8fbff");
    });
  }

  getControlsText() {
    return this.t(this.selectedMode === "survival" ? "controlsSurvival" : "controlsVertical");
  }

  createLanguageSelector() {
    const button = this.add.rectangle(0, 0, 202, 64, 0x0f5faa, 1)
      .setStrokeStyle(3, 0xffffff, 0.96)
      .setInteractive();
    const label = this.add.text(0, 0, this.t("language"), {
      fontFamily: FONT_UI,
      fontSize: "13px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#041126",
      strokeThickness: 2,
    }).setOrigin(0.5);
    const selectedFlag = this.add.graphics();
    const valueText = this.add.text(0, 0, LANGUAGES[this.language].code, {
      fontFamily: FONT_UI,
      fontSize: "20px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#041126",
      strokeThickness: 3,
    }).setOrigin(0, 0.5);
    const arrow = this.add.text(0, 0, "v", {
      fontFamily: FONT_UI,
      fontSize: "18px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#041126",
      strokeThickness: 4,
    }).setOrigin(0.5);

    const dropdownPanel = this.add.rectangle(0, 0, 202, 104, 0x0f5faa, 1)
      .setStrokeStyle(3, 0xffffff, 0.94)
      .setVisible(false);
    const optionEn = this.createLanguageOption("en");
    const optionSr = this.createLanguageOption("sr");

    button.on("pointerover", () => {
      if (!this.gameStarted) this.setCanvasCursor("pointer");
    });
    button.on("pointerout", () => {
      if (!this.gameStarted && !this.languageMenuOpen) this.setCanvasCursor("default");
    });
    button.on("pointerdown", () => {
      if (!this.gameStarted) this.setLanguageMenuVisible(!this.languageMenuOpen);
    });

    this.menuOverlay.add([
      button,
      label,
      selectedFlag,
      valueText,
      arrow,
      dropdownPanel,
      optionEn.button,
      optionEn.flag,
      optionEn.text,
      optionSr.button,
      optionSr.flag,
      optionSr.text,
    ]);

    this.languageSelector = {
      button,
      label,
      selectedFlag,
      valueText,
      arrow,
      dropdownPanel,
      options: { en: optionEn, sr: optionSr },
    };
    this.drawFlag(selectedFlag, this.language, 34, 22);
    this.updateLanguageSelectorText();
    this.setLanguageMenuVisible(false);
  }

  createLanguageOption(language) {
    const button = this.add.rectangle(0, 0, 188, 42, 0x1770c7, 1)
      .setStrokeStyle(1, 0xdff9ff, 0.9)
      .setInteractive()
      .setVisible(false);
    const flag = this.add.graphics().setVisible(false);
    const text = this.add.text(0, 0, "", {
      fontFamily: FONT_UI,
      fontSize: "17px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#041126",
      strokeThickness: 2,
    }).setOrigin(0, 0.5).setVisible(false);

    button.on("pointerover", () => {
      if (!this.gameStarted && this.languageMenuOpen) {
        button.setFillStyle(0x1f65ad, 1);
        this.setCanvasCursor("pointer");
      }
    });
    button.on("pointerout", () => {
      button.setFillStyle(0x1770c7, 1);
      if (!this.gameStarted && this.languageMenuOpen) this.setCanvasCursor("default");
    });
    button.on("pointerdown", () => {
      if (!this.gameStarted && this.languageMenuOpen) this.setLanguage(language);
    });

    this.drawFlag(flag, language, 30, 20);
    return { button, flag, text, language };
  }

  drawFlag(graphics, language, width, height) {
    const x = -width / 2;
    const y = -height / 2;
    graphics.clear();
    graphics.fillStyle(0xffffff, 1);
    graphics.fillRoundedRect(x, y, width, height, 3);

    if (language === "sr") {
      graphics.fillStyle(0xc9303a, 1);
      graphics.fillRect(x, y, width, height / 3);
      graphics.fillStyle(0x2447a8, 1);
      graphics.fillRect(x, y + height / 3, width, height / 3);
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRect(x, y + (height * 2) / 3, width, height / 3);
      graphics.fillStyle(0xf2c94c, 1);
      graphics.fillCircle(x + width * 0.32, y + height * 0.5, height * 0.14);
    } else {
      const stripeHeight = height / 7;
      for (let index = 0; index < 7; index += 1) {
        graphics.fillStyle(index % 2 === 0 ? 0xc83d4a : 0xffffff, 1);
        graphics.fillRect(x, y + index * stripeHeight, width, stripeHeight + 0.5);
      }
      graphics.fillStyle(0x244a91, 1);
      graphics.fillRect(x, y, width * 0.45, height * 0.55);
      graphics.fillStyle(0xffffff, 1);
      for (let row = 0; row < 2; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          graphics.fillCircle(x + width * (0.12 + col * 0.11), y + height * (0.16 + row * 0.17), 1.1);
        }
      }
    }

    graphics.lineStyle(1.5, 0xd9f3ff, 0.86);
    graphics.strokeRoundedRect(x, y, width, height, 3);
  }

  setLanguageMenuVisible(visible) {
    this.languageMenuOpen = visible;
    if (!this.languageSelector) return;

    const items = [
      this.languageSelector.dropdownPanel,
      this.languageSelector.options.en.button,
      this.languageSelector.options.en.flag,
      this.languageSelector.options.en.text,
      this.languageSelector.options.sr.button,
      this.languageSelector.options.sr.flag,
      this.languageSelector.options.sr.text,
    ];
    items.forEach((item) => item.setVisible(visible));
    Object.values(this.languageSelector.options).forEach((option) => {
      if (option.button.input) option.button.input.enabled = visible;
    });
    this.languageSelector.arrow.setText(visible ? "^" : "v");
  }

  setLanguage(language) {
    if (!TEXT[language]) return;

    this.language = language;
    this.saveStoredLanguage(language);
    this.setLanguageMenuVisible(false);
    this.updateLanguageTexts();
    this.playSfx("ui", { volume: 0.14, rate: 1.05 });
  }

  updateLanguageSelectorText() {
    if (!this.languageSelector) return;

    this.languageSelector.label.setText(this.t("language"));
    this.languageSelector.valueText.setText(LANGUAGES[this.language].code);
    this.drawFlag(this.languageSelector.selectedFlag, this.language, 34, 22);
    this.languageSelector.options.en.text.setText(this.t("langEnglish"));
    this.languageSelector.options.sr.text.setText(this.t("langSerbian"));
  }

  updateLanguageTexts() {
    if (this.menuTitle) this.menuTitle.setText(this.t("title"));
    if (this.menuControlsTitle) this.menuControlsTitle.setText(this.t("controlsTitle"));
    if (this.menuControls) this.menuControls.setText(this.getControlsText());
    if (this.menuModeTitle) this.menuModeTitle.setText(this.t("modeTitle"));
    if (this.menuStartButton) this.menuStartButton.text.setText(this.t("start"));
    if (this.menuGuideButton) this.menuGuideButton.text.setText(this.t("guide"));
    if (this.menuHelpButton) this.menuHelpButton.text.setText("?");
    this.updateModeCards();
    if (this.guideTitle) this.guideTitle.setText(this.t("powerGuide"));
    if (this.guideCloseButton) this.guideCloseButton.text.setText(this.t("close"));
    if (this.controlsHelpTitle) this.controlsHelpTitle.setText(this.t("controlsTitle"));
    if (this.controlsHelpBody) this.controlsHelpBody.setText(this.t("controlsHelpBody"));
    if (this.controlsHelpCloseButton) this.controlsHelpCloseButton.text.setText(this.t("close"));
    if (this.pauseOverlayTitle) this.pauseOverlayTitle.setText(this.t("paused"));
    if (this.pauseOverlayHint) this.pauseOverlayHint.setText(this.t("pauseHint"));
    if (this.pauseMenuButton) this.pauseMenuButton.text.setText(this.t("menu"));
    if (this.upgradeCloseButton) this.upgradeCloseButton.text.setText(this.t("close"));
    if (this.upgradeResetButton) this.upgradeResetButton.text.setText(this.t("resetGame"));

    if (this.guideRows) {
      this.guideRows.forEach((entry) => {
        entry.rowTitle.setText(`${entry.type.name}  ${Math.round(entry.type.duration / 1000)}${this.t("secondsShort")}`);
        entry.body.setText(this.getPowerGuideText(entry.type.id));
      });
    }

    this.updateHudText();
    this.updateMenuStats();
    this.updateLanguageSelectorText();
    this.layoutMainMenu();
    this.layoutGuideOverlay();
    this.layoutControlsHelpOverlay();
  }

  createGuideOverlay() {
    this.guideOverlay = this.add.container(0, 0)
      .setDepth(DEPTH.overlay + 14)
      .setVisible(false);
    const shade = this.add.rectangle(0, 0, this.width, this.height, 0x01040d, 0.82)
      .setOrigin(0)
      .setInteractive();
    const panel = this.add.rectangle(0, 0, 760, 540, 0x071224, 0.96)
      .setStrokeStyle(2, 0x75c9ff, 0.76);
    const title = this.add.text(0, 0, this.t("powerGuide"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "36px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 6,
    }).setOrigin(0.5);

    this.guideOverlay.add([shade, panel, title]);

    this.guideRows = POWERUP_TYPES.map((type) => {
      const row = this.add.rectangle(0, 0, 660, 58, 0x0d1d35, 0.66)
        .setStrokeStyle(1, type.color, 0.28);
      const icon = this.add.image(0, 0, type.texture)
        .setScale(type.id === "overdrive" ? 0.72 : 0.58)
        .setBlendMode(Phaser.BlendModes.ADD);
      const rowTitle = this.add.text(0, 0, `${type.name}  ${Math.round(type.duration / 1000)}${this.t("secondsShort")}`, {
        fontFamily: "Trebuchet MS, Arial, sans-serif",
        fontSize: "18px",
        fontStyle: "bold",
        color: `#${type.color.toString(16).padStart(6, "0")}`,
        stroke: "#06101e",
        strokeThickness: 4,
      }).setOrigin(0, 0.5);
      const body = this.add.text(0, 0, this.getPowerGuideText(type.id), {
        fontFamily: "Trebuchet MS, Arial, sans-serif",
        fontSize: "15px",
        color: "#dceeff",
        stroke: "#06101e",
        strokeThickness: 3,
      }).setOrigin(0, 0.5);
      this.guideOverlay.add([row, icon, rowTitle, body]);
      return { row, icon, rowTitle, body, type };
    });

    const closeButton = this.createMenuButton(this.t("close"), 170, 48, () => this.hideGuide(), () => !this.gameStarted && this.guideOverlay?.visible);
    this.guideOverlay.add([closeButton.button, closeButton.text]);
    this.guideCloseButton = closeButton;
    this.guideShade = shade;
    this.guidePanel = panel;
    this.guideTitle = title;
    this.layoutGuideOverlay();
  }

  getPowerGuideText(id) {
    return TEXT[this.language]?.guideText?.[id] ?? TEXT.en.guideText[id] ?? "";
  }

  showGuide() {
    this.guideOverlay.setVisible(true);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.16, rate: 1.05 });
  }

  hideGuide() {
    this.guideOverlay.setVisible(false);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.12, rate: 0.92 });
  }

  createControlsHelpOverlay() {
    this.controlsHelpOverlay = this.add.container(0, 0)
      .setDepth(DEPTH.overlay + 16)
      .setVisible(false)
      .setScrollFactor(0);
    const shade = this.add.rectangle(0, 0, this.width, this.height, 0x01040d, 0.72)
      .setOrigin(0)
      .setInteractive();
    const panel = this.add.rectangle(0, 0, 520, 354, 0x071224, 0.97)
      .setStrokeStyle(2, 0x9deaff, 0.88);
    const title = this.add.text(0, 0, this.t("controlsTitle"), {
      fontFamily: FONT_UI,
      fontSize: "26px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 5,
    }).setOrigin(0.5);
    const body = this.add.text(0, 0, this.t("controlsHelpBody"), {
      fontFamily: FONT_UI,
      fontSize: "15px",
      color: "#dff8ff",
      align: "center",
      lineSpacing: 8,
      stroke: "#06101e",
      strokeThickness: 3,
    }).setOrigin(0.5);
    const closeButton = this.createMenuButton(this.t("close"), 164, 46, () => this.hideControlsHelp(), () => this.controlsHelpOverlay?.visible);

    shade.on("pointerdown", () => this.hideControlsHelp());
    this.controlsHelpOverlay.add([shade, panel, title, body, closeButton.button, closeButton.text]);
    this.controlsHelpShade = shade;
    this.controlsHelpPanel = panel;
    this.controlsHelpTitle = title;
    this.controlsHelpBody = body;
    this.controlsHelpCloseButton = closeButton;
    this.layoutControlsHelpOverlay();
  }

  showControlsHelp() {
    this.controlsHelpOverlay.setVisible(true);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.16, rate: 1.05 });
  }

  hideControlsHelp() {
    this.controlsHelpOverlay.setVisible(false);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.12, rate: 0.92 });
  }

  updateMenuStats() {
    if (!this.menuBestText) return;

    this.menuBestText.setText(`${this.t("topScore")} ${this.bestScore}`);
    this.menuStarsText.setText(`${this.t("stars")} ${this.starCurrency}`);
  }

  layoutMainMenu() {
    if (!this.menuOverlay) return;

    const width = this.width;
    const height = this.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const compact = width < 840 || height < 620;
    const contentX = compact ? centerX : width * 0.36;
    const titleY = compact ? Math.max(88, height * 0.16) : Math.max(118, height * 0.2);
    const statsWidth = Math.min(430, width - 42);
    const statsX = Math.max(21 + statsWidth / 2, statsWidth / 2 + 18);
    const statsY = 26 + 27;
    const buttonWidth = compact ? Math.min(width - 56, 356) : Phaser.Math.Clamp(width * 0.28, 350, 430);
    const buttonHeight = compact ? 82 : 104;
    const verticalY = compact ? titleY + 146 : centerY - 32;
    const survivalY = verticalY + buttonHeight + (compact ? 22 : 28);
    const shipScale = compact ? 0.72 : Phaser.Math.Clamp(height / 780, 0.95, 1.22);
    const shipX = compact ? centerX : Phaser.Math.Clamp(width * 0.69, contentX + buttonWidth * 0.62 + 130, width - 190);
    const shipY = compact ? Math.min(height - 150, survivalY + 150) : centerY + 8;
    const helpSize = 46;

    this.menuShade.setSize(width, height);
    this.menuTitle.setFontSize(compact ? `${Phaser.Math.Clamp(width / 11.2, 34, 50)}px` : "64px");
    this.menuTitle.setPosition(contentX, titleY);
    this.menuTitleBaseY = titleY;
    this.menuTitleBaseX = contentX;
    this.menuTitleHalo.setPosition(contentX, titleY).setScale(compact ? 0.74 : 1.08);
    this.menuStatsPanel.setPosition(statsX, statsY).setSize(statsWidth, 54);
    const statsLeft = statsX - statsWidth / 2 + 18;
    this.menuBestText.setPosition(statsLeft, statsY);
    const starsX = Math.min(statsLeft + this.menuBestText.width + 28, statsX + statsWidth / 2 - 128);
    this.menuStarsText.setPosition(starsX, statsY);
    this.menuStatsStar.setPosition(starsX + this.menuStarsText.width + 18, statsY);
    this.modeCards.vertical.setPosition(contentX, verticalY, buttonWidth, buttonHeight);
    this.modeCards.survival.setPosition(contentX, survivalY, buttonWidth, buttonHeight);
    this.menuShipBaseX = shipX;
    this.menuShipBaseY = shipY;
    this.menuShip.setPosition(shipX, shipY).setScale(1.18 * shipScale);
    this.menuShipGlow.setPosition(shipX, shipY + 8).setScale(shipScale * 1.05);
    this.menuShipFlame.setPosition(shipX, shipY + 56 * shipScale).setScale(1.05 * shipScale, 1.6 * shipScale);
    this.menuHelpButton.setPosition(26 + helpSize / 2, height - 28 - helpSize / 2);
    this.layoutLanguageSelector();
    this.layoutControlsHelpOverlay();
  }

  positionMenuOrbs() {
    if (!this.menuOrbs?.length) return;

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    this.menuOrbs[0].setPosition(Math.max(62, centerX - this.width * 0.34), Math.max(142, centerY - this.height * 0.2));
    this.menuOrbs[1].setPosition(Math.min(this.width - 74, centerX + this.width * 0.34), Math.min(this.height - 190, centerY + this.height * 0.18));
    this.menuOrbs[2].setPosition(centerX + Math.sin(this.time.now * 0.001) * 120, centerY - 26);
  }

  layoutLanguageSelector() {
    if (!this.languageSelector) return;

    const buttonWidth = 202;
    const buttonHeight = 64;
    const narrow = this.width < 760;
    const x = narrow ? this.width / 2 : this.width - buttonWidth / 2 - 48;
    const y = this.height - buttonHeight / 2 - (narrow ? 34 : 48);
    const dropdownY = y - 96;
    const enY = dropdownY - 24;
    const srY = dropdownY + 24;

    this.languageSelector.button.setPosition(x, y).setSize(buttonWidth, buttonHeight);
    this.languageSelector.label.setPosition(x, y - 15);
    this.languageSelector.selectedFlag.setPosition(x - 48, y + 13);
    this.languageSelector.valueText.setPosition(x - 22, y + 13);
    this.languageSelector.arrow.setPosition(x + 70, y + 12);
    this.languageSelector.dropdownPanel.setPosition(x, dropdownY).setSize(buttonWidth, 104);

    this.languageSelector.options.en.button.setPosition(x, enY);
    this.languageSelector.options.en.flag.setPosition(x - 62, enY);
    this.languageSelector.options.en.text.setPosition(x - 38, enY);
    this.languageSelector.options.sr.button.setPosition(x, srY);
    this.languageSelector.options.sr.flag.setPosition(x - 62, srY);
    this.languageSelector.options.sr.text.setPosition(x - 38, srY);
  }

  layoutGuideOverlay() {
    if (!this.guideOverlay) return;

    const width = this.width;
    const height = this.height;
    const panelWidth = Math.min(790, width - 52);
    const panelHeight = Math.min(560, height - 48);
    const centerX = width / 2;
    const centerY = height / 2;
    const panelLeft = centerX - panelWidth / 2;
    const rowWidth = panelWidth - 78;
    const rowGap = Math.min(74, (panelHeight - 170) / POWERUP_TYPES.length);
    const rowStartY = centerY - panelHeight / 2 + 126;

    this.guideShade.setSize(width, height);
    this.guidePanel.setPosition(centerX, centerY).setSize(panelWidth, panelHeight);
    this.guideTitle.setPosition(centerX, centerY - panelHeight / 2 + 48);

    this.guideRows.forEach((entry, index) => {
      const rowY = rowStartY + index * rowGap;
      entry.row.setPosition(centerX, rowY).setSize(rowWidth, 58);
      entry.icon.setPosition(panelLeft + 58, rowY);
      entry.rowTitle.setPosition(panelLeft + 102, rowY - 14);
      entry.body.setPosition(panelLeft + 102, rowY + 14);
      entry.body.setWordWrapWidth(rowWidth - 130);
    });

    this.guideCloseButton.setPosition(centerX, centerY + panelHeight / 2 - 46);
  }

  layoutControlsHelpOverlay() {
    if (!this.controlsHelpOverlay) return;

    const width = this.width;
    const height = this.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const panelWidth = Math.min(540, width - 52);
    const panelHeight = Math.min(450, height - 52);

    this.controlsHelpShade.setSize(width, height);
    this.controlsHelpPanel.setPosition(centerX, centerY).setSize(panelWidth, panelHeight);
    this.controlsHelpTitle.setPosition(centerX, centerY - panelHeight / 2 + 62);
    this.controlsHelpBody.setPosition(centerX, centerY + 22);
    this.controlsHelpBody.setWordWrapWidth(panelWidth - 58);
    this.controlsHelpCloseButton.setPosition(centerX, centerY + panelHeight / 2 - 46);
  }

  startGame(mode = this.selectedMode) {
    if (this.gameStarted) return;

    this.gameMode = mode === "survival" ? "survival" : "vertical";
    this.gameStarted = true;
    this.tweens.add({
      targets: this.menuOverlay,
      alpha: 0,
      duration: 360,
      ease: "Cubic.easeIn",
      onComplete: () => this.menuOverlay.setVisible(false).setAlpha(1),
    });
    if (this.guideOverlay) this.guideOverlay.setVisible(false);
    if (this.controlsHelpOverlay) this.controlsHelpOverlay.setVisible(false);
    this.player.setVisible(true);
    this.playerDamage.setVisible(true);
    this.engineFlame.setVisible(true).setAlpha(0.75);
    this.scoreText.setVisible(true);
    this.comboText.setVisible(true);
    this.currencyText.setVisible(true);
    this.hudPanel.setVisible(true);
    this.wavePanel.setVisible(true);
    this.hullPips.forEach((pip) => pip.setVisible(true));
    this.configureWorldForMode();
    this.setCanvasCursor(this.isSurvivalMode() ? "crosshair" : "none");
    this.invulnerableUntil = this.time.now + 1800;
    this.playSfx("ui", { volume: 0.2, rate: 1.1 });
    this.playGameplayMusic();
    this.playLaunchTransition();
    this.scheduleWave(350);
    if (!this.isSurvivalMode()) this.scheduleMeteor(950);
    this.schedulePowerup(2600);
    this.scheduleCurrencyStar(1800);
  }

  isSurvivalMode() {
    return this.gameMode === "survival";
  }

  getBaseMaxLives() {
    return 5 + (this.upgrades?.maxLives || 0);
  }

  getMoveSpeedBonus() {
    return [0, 34, 72, 116][this.upgrades?.moveSpeed || 0] || 0;
  }

  getFireRateMultiplier() {
    return [1, 0.9, 0.8, 0.68][this.upgrades?.fireRate || 0] || 1;
  }

  configureWorldForMode() {
    if (this.isSurvivalMode()) {
      const worldSize = 200000;
      const half = worldSize / 2;
      this.physics.world.setBounds(-half, -half, worldSize, worldSize);
      this.cameras.main.setBounds(-half, -half, worldSize, worldSize);
      this.player.setCollideWorldBounds(false);
      this.player.setPosition(0, 0);
      this.player.body.setVelocity(0, 0);
      this.player.setAngle(0);
      this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
      this.cameras.main.setRoundPixels(true);
      return;
    }

    this.physics.world.setBounds(0, 0, this.width, this.height);
    this.cameras.main.stopFollow();
    this.cameras.main.setBounds(0, 0, this.width, this.height);
    this.cameras.main.scrollX = 0;
    this.cameras.main.scrollY = 0;
    this.player.setCollideWorldBounds(true);
    this.player.setPosition(this.width / 2, this.height - 92);
    this.player.body.setVelocity(0, 0);
  }

  createCollisions() {
    this.physics.add.overlap(this.playerBullets, this.enemies, this.damageEnemy, null, this);
    this.physics.add.overlap(this.playerBullets, this.meteors, this.damageMeteor, null, this);
    this.physics.add.overlap(this.playerBullets, this.enemyBullets, this.destroyMissile, this.canShootMissile, this);
    this.physics.add.overlap(this.enemyBullets, this.player, this.playerHit, null, this);
    this.physics.add.overlap(this.enemies, this.player, this.playerHit, null, this);
    this.physics.add.overlap(this.meteors, this.player, this.playerHit, null, this);
    this.physics.add.collider(this.enemies, this.enemies, null, () => this.isSurvivalMode(), this);
    this.physics.add.overlap(this.powerups, this.player, this.collectPowerup, null, this);
    this.physics.add.overlap(this.currencyStars, this.player, this.collectCurrencyStar, null, this);
  }

  createVignette() {
    this.hitVignette = this.add.rectangle(0, 0, this.width, this.height, 0xff2456, 0)
      .setOrigin(0)
      .setDepth(DEPTH.overlay - 1)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScrollFactor(0);
  }

  createLighting() {
    this.shadowLayer = this.add.graphics().setDepth(DEPTH.stars + 1).setScrollFactor(0);
    this.lightLayer = this.add.graphics()
      .setDepth(DEPTH.effects - 2)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScrollFactor(0);
    this.deepSpacePatches = Array.from({ length: 9 }, () => ({
      x: Phaser.Math.Between(0, this.width),
      y: Phaser.Math.Between(0, this.height),
      radius: Phaser.Math.Between(180, 420),
      speed: Phaser.Math.FloatBetween(4, 16),
      phase: Phaser.Math.FloatBetween(0, Math.PI * 2),
    }));
    this.nebulaLights = Array.from({ length: 6 }, () => ({
      x: Phaser.Math.Between(0, this.width),
      y: Phaser.Math.Between(0, this.height),
      radius: Phaser.Math.Between(180, 360),
      color: Phaser.Utils.Array.GetRandom([0x2457ff, 0x7b38ff, 0x19d6ff, 0xff5b92]),
      alpha: Phaser.Math.FloatBetween(0.025, 0.06),
      speed: Phaser.Math.FloatBetween(5, 18),
    }));

    const postFx = this.cameras.main.postFX;
    if (postFx?.addBloom) {
      postFx.addBloom(0xffffff, 0.28, 0.28, 1.2, 1.15);
    }
  }

  createStars(count) {
    return Array.from({ length: count }, () => ({
      x: Phaser.Math.Between(0, this.width),
      y: Phaser.Math.Between(0, this.height),
      speed: Phaser.Math.FloatBetween(30, 155),
      size: Phaser.Math.FloatBetween(0.7, 2.3),
      alpha: Phaser.Math.FloatBetween(0.25, 0.88),
    }));
  }

  update(time, delta) {
    this.background.tilePositionY -= delta * 0.025;
    this.starLayer.tilePositionY -= delta * 0.13;
    this.updateStars(delta);
    this.updateLighting(time, delta);
    if (!this.gameStarted && this.menuOverlay?.visible) {
      this.updateMenuAmbience(time);
    }

    if (!this.gameStarted || this.isGameOver || this.isPaused) {
      return;
    }

    this.handlePlayerInput(time);
    this.updatePlayerVisuals(time);
    this.updateEnemyBullets(delta);
    this.updateProjectileTrails(time);
    this.updatePowerups(time);
    this.updateCurrencyStars();
    this.cleanProjectiles();
    this.updateEnemies(time, delta);
    if (!this.isSurvivalMode()) this.updateMeteors();
  }

  updateLighting(time, delta) {
    this.shadowLayer.clear();
    this.lightLayer.clear();
    this.shadowLayer.fillStyle(0x000000, 0.24);
    this.shadowLayer.fillRect(0, 0, this.width, this.height);

    this.deepSpacePatches.forEach((patch) => {
      patch.y += patch.speed * (delta / 1000);
      patch.x += Math.sin(time * 0.00018 + patch.phase) * 0.12;
      if (patch.y - patch.radius > this.height) patch.y = -patch.radius;
      this.shadowLayer.fillStyle(0x000000, 0.12);
      this.shadowLayer.fillCircle(patch.x, patch.y, patch.radius);
    });

    this.nebulaLights.forEach((light) => {
      light.y += light.speed * (delta / 1000);
      if (light.y - light.radius > this.height) light.y = -light.radius;
      this.drawGlow(this.lightLayer, light.x, light.y, light.radius, light.color, light.alpha);
    });

    if (!this.gameStarted && this.menuOverlay?.visible) {
      const pulse = 0.05 + Math.sin(time * 0.0015) * 0.016;
      this.drawGlow(this.lightLayer, this.width * 0.5, this.height * 0.34, Math.min(this.width, this.height) * 0.42, 0x1aa8ff, pulse);
      this.drawGlow(this.lightLayer, this.width * 0.66, this.height * 0.68, Math.min(this.width, this.height) * 0.34, 0xff5fc7, pulse * 0.72);
    }

    if (this.gameStarted && !this.isGameOver) {
      this.drawGlow(this.lightLayer, this.width * 0.5, this.height * 0.52, Math.min(this.width, this.height) * 0.34, 0x9a3dff, 0.022);
    }

    if (this.player && this.gameStarted && !this.isGameOver) {
      this.drawGlow(this.lightLayer, this.player.x, this.player.y, 150, 0x2ecbff, 0.08);
      if (this.hasPower("shield")) this.drawGlow(this.lightLayer, this.player.x, this.player.y, 210, 0xff5f91, 0.1);
      if (this.hasPower("overdrive")) this.drawGlow(this.lightLayer, this.player.x, this.player.y, 230, 0xff5cff, 0.1);
    }
  }

  drawGlow(graphics, x, y, radius, color, alpha) {
    graphics.fillStyle(color, alpha * 0.25);
    graphics.fillCircle(x, y, radius);
    graphics.fillStyle(color, alpha * 0.5);
    graphics.fillCircle(x, y, radius * 0.55);
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(x, y, radius * 0.2);
  }

  updateStars(delta) {
    this.starGraphics.clear();
    this.stars.forEach((star) => {
      star.y += star.speed * (delta / 1000);
      if (star.y > this.height + 8) {
        star.y = -8;
        star.x = Phaser.Math.Between(0, this.width);
      }

      this.starGraphics.fillStyle(0xffffff, star.alpha);
      if (star.speed > 112) {
        this.starGraphics.fillRect(star.x, star.y, star.size, star.size * 4.5);
      } else {
        this.starGraphics.fillCircle(star.x, star.y, star.size);
      }
    });
  }

  updateMenuAmbience(time) {
    if (!this.menuOverlay?.visible) return;

    const titlePulse = 0.92 + Math.sin(time * 0.006) * 0.035 + Math.sin(time * 0.019) * 0.015;
    this.menuTitle.setY((this.menuTitleBaseY || this.menuTitle.y) + Math.sin(time * 0.002) * 2.2);
    this.menuTitle.setAlpha(Phaser.Math.Clamp(titlePulse, 0.86, 1));

    if (this.menuShip) {
      const hover = Math.sin(time * 0.0018) * 9;
      const drift = Math.sin(time * 0.0012) * 3;
      const x = (this.menuShipBaseX || this.menuShip.x) + drift;
      const y = (this.menuShipBaseY || this.menuShip.y) + hover;
      this.menuShip.setPosition(x, y).setAngle(-3 + Math.sin(time * 0.0014) * 2.5);
      this.menuShipGlow.setPosition(x, y + 8);
      this.menuShipFlame.setPosition(x, y + 56 * (this.menuShip.scaleX / 1.18));
    }
  }

  handlePlayerInput(time) {
    if (this.isSurvivalMode()) {
      this.handleSurvivalInput(time);
      return;
    }

    const speed = (this.hasPower("overdrive") ? 620 : 500) + this.getMoveSpeedBonus();
    let velocityX = 0;
    let velocityY = 0;

    if (this.cursors.left.isDown || this.keys.left.isDown) velocityX -= speed;
    if (this.cursors.right.isDown || this.keys.right.isDown) velocityX += speed;
    if (this.cursors.up.isDown || this.keys.up.isDown) velocityY -= speed;
    if (this.cursors.down.isDown || this.keys.down.isDown) velocityY += speed;

    this.player.body.setVelocity(velocityX, velocityY);
    if (velocityX !== 0 && velocityY !== 0) {
      this.player.body.velocity.normalize().scale(speed);
    }

    this.player.setAngle(Phaser.Math.Clamp(velocityX / 24, -12, 12));

    if (this.cursors.space.isDown || this.keys.fire.isDown) {
      this.shootPlayerLaser(time);
    }
  }

  handleSurvivalInput(time) {
    const speed = (this.hasPower("overdrive") ? 610 : 500) + this.getMoveSpeedBonus();
    let velocityX = 0;
    let velocityY = 0;

    if (this.cursors.left.isDown || this.keys.left.isDown) velocityX -= speed;
    if (this.cursors.right.isDown || this.keys.right.isDown) velocityX += speed;
    if (this.cursors.up.isDown || this.keys.up.isDown) velocityY -= speed;
    if (this.cursors.down.isDown || this.keys.down.isDown) velocityY += speed;

    this.player.body.setVelocity(velocityX, velocityY);
    if (velocityX !== 0 && velocityY !== 0) {
      this.player.body.velocity.normalize().scale(speed);
    }

    const pointer = this.input.activePointer;
    const aimAngle = Math.atan2(pointer.worldY - this.player.y, pointer.worldX - this.player.x);
    this.player.setRotation(aimAngle + Math.PI / 2);

    if (this.cursors.space.isDown || this.keys.fire.isDown || pointer.isDown) {
      this.shootPlayerLaser(time);
    }
  }

  updatePlayerVisuals(time) {
    const scale = this.player.getData("baseScale");
    this.playerDamage.setPosition(this.player.x, this.player.y);
    this.playerDamage.setAngle(this.player.angle);
    this.playerDamage.setScale(scale);

    if (this.isSurvivalMode()) {
      const thrustAngle = this.player.rotation - Math.PI / 2;
      this.engineFlame.setPosition(
        this.player.x - Math.cos(thrustAngle) * 43 * scale,
        this.player.y - Math.sin(thrustAngle) * 43 * scale,
      );
      this.engineFlame.setRotation(this.player.rotation);
    } else {
      this.engineFlame.setPosition(this.player.x, this.player.y + 43 * scale);
      this.engineFlame.setAngle(this.player.angle);
    }
    this.updateHullPips();
    this.emitEngineTrail(time);

    const invulnerable = time < this.invulnerableUntil;
    this.player.setAlpha(invulnerable ? 0.58 + Math.sin(time * 0.04) * 0.25 : 1);
    this.playerDamage.setAlpha(this.getDamageOverlayAlpha() * (invulnerable ? 0.78 : 1));
  }

  emitEngineTrail(time) {
    if (time < this.nextEngineTrail || !this.player?.active) return;

    const moving = this.player.body.velocity.length() > 60;
    const delay = moving || this.hasPower("overdrive") ? 42 : 86;
    this.nextEngineTrail = time + delay;
    const scale = this.player.getData("baseScale") || 1;
    const thrustAngle = this.isSurvivalMode() ? this.player.rotation - Math.PI / 2 : Math.PI / 2;
    const x = this.player.x - Math.cos(thrustAngle) * 45 * scale + Phaser.Math.Between(-5, 5);
    const y = this.player.y - Math.sin(thrustAngle) * 45 * scale + Phaser.Math.Between(-5, 5);
    const color = this.hasPower("overdrive") ? 0xff5cff : moving ? 0x53e5ff : 0x55aaff;
    const ember = this.add.circle(x, y, Phaser.Math.FloatBetween(2.5, 5.5) * scale, color, moving ? 0.54 : 0.28)
      .setDepth(DEPTH.player - 2)
      .setBlendMode(Phaser.BlendModes.ADD);

    this.tweens.add({
      targets: ember,
      x: x - Math.cos(thrustAngle) * Phaser.Math.Between(12, 32) * scale,
      y: y - Math.sin(thrustAngle) * Phaser.Math.Between(12, 32) * scale,
      scale: 2.2,
      alpha: 0,
      duration: Phaser.Math.Between(220, 360),
      ease: "Sine.easeOut",
      onComplete: () => ember.destroy(),
    });
  }

  updateHullPips() {
    if (!this.hullPips) return;

    const scale = this.player.getData("baseScale") || 1;
    const spacing = 14 * scale;
    const startX = this.player.x - ((this.maxLives - 1) * spacing) / 2;
    const y = this.isSurvivalMode() ? this.player.y + 58 * scale : Math.min(this.player.y + 58 * scale, this.height - 14);

    this.hullPips.forEach((pip, index) => {
      const active = index < this.lives;
      pip.setPosition(startX + index * spacing, y);
      pip.setRadius(active ? 5.5 * scale : 4.2 * scale);
      pip.setAlpha(active ? 0.92 : 0.22);
      if (active) {
        pip.setFillStyle(this.lives <= 1 ? 0xff5577 : this.lives <= 2 ? 0xffd06c : 0x76f2ff, 1);
      } else {
        pip.setFillStyle(0x2c4a64, 0.45);
      }
    });
  }

  getDamageOverlayAlpha() {
    if (this.lives <= 1) return 0.95;
    if (this.lives === 2) return 0.62;
    return 0;
  }

  shootPlayerLaser(time) {
    if (!this.gameStarted || this.isPaused || this.isGameOver || time < this.nextPlayerShot) {
      return;
    }

    if (this.isSurvivalMode()) {
      this.shootSurvivalLaser(time);
      return;
    }

    this.playerShotStep += 1;
    const charged = this.playerShotStep % 6 === 0;
    const speedBoost = this.hasPower("rapid") ? 1.13 : 1;
    const speed = (charged ? -1120 : -1240) * speedBoost;
    const key = charged ? "playerLaserPierce" : "playerLaserWide";
    let shots = charged
      ? [{ offset: 0, vx: 0 }]
      : [{ offset: -15, vx: -42 }, { offset: 15, vx: 42 }];

    if (this.hasPower("spread")) {
      shots = charged
        ? [{ offset: -14, vx: -80 }, { offset: 14, vx: 80 }]
        : [{ offset: -22, vx: -118 }, { offset: 0, vx: 0 }, { offset: 22, vx: 118 }];
    }

    shots.forEach((shot) => {
      const damage = (charged ? 2 : 1) + (this.hasPower("overdrive") ? 1 : 0);
      this.spawnPlayerBullet(this.player.x + shot.offset, this.player.y - 48, key, shot.vx, speed, charged ? 1.05 : 0.82, damage);
    });

    this.playMuzzleFlash(this.player.x, this.player.y - 50, charged);
    if (time > this.nextPlayerSfx) {
      this.playSfx(charged ? "playerCharged" : "playerLaser", { volume: charged ? 0.28 : 0.18, rate: Phaser.Math.FloatBetween(0.96, 1.05) });
      this.nextPlayerSfx = time + 70;
    }
    const delayScale = (this.hasPower("rapid") ? 0.62 : 1) * this.getFireRateMultiplier();
    this.nextPlayerShot = time + (charged ? 230 : 138) * delayScale;
  }

  shootSurvivalLaser(time) {
    this.playerShotStep += 1;
    const charged = this.playerShotStep % 6 === 0;
    const pointer = this.input.activePointer;
    const aimAngle = Math.atan2(pointer.worldY - this.player.y, pointer.worldX - this.player.x);
    const speedBoost = this.hasPower("rapid") ? 1.13 : 1;
    const speed = (charged ? 1080 : 1220) * speedBoost;
    const key = charged ? "playerLaserPierce" : "playerLaserWide";
    let angles = charged ? [0] : [0];

    if (this.hasPower("spread")) {
      angles = charged ? [-0.14, 0.14] : [-0.2, 0, 0.2];
    }

    angles.forEach((offset) => {
      const angle = aimAngle + offset;
      const damage = (charged ? 2 : 1) + (this.hasPower("overdrive") ? 1 : 0);
      this.spawnPlayerBullet(
        this.player.x + Math.cos(angle) * 48,
        this.player.y + Math.sin(angle) * 48,
        key,
        Math.cos(angle) * speed,
        Math.sin(angle) * speed,
        charged ? 1.05 : 0.82,
        damage,
      );
    });

    this.playMuzzleFlash(this.player.x + Math.cos(aimAngle) * 50, this.player.y + Math.sin(aimAngle) * 50, charged);
    if (time > this.nextPlayerSfx) {
      this.playSfx(charged ? "playerCharged" : "playerLaser", { volume: charged ? 0.28 : 0.18, rate: Phaser.Math.FloatBetween(0.96, 1.05) });
      this.nextPlayerSfx = time + 70;
    }
    const delayScale = (this.hasPower("rapid") ? 0.62 : 1) * this.getFireRateMultiplier();
    this.nextPlayerShot = time + (charged ? 220 : 132) * delayScale;
  }

  spawnPlayerBullet(x, y, texture, vx, vy, scale, damage) {
    const bullet = this.playerBullets.get(x, y, texture);
    if (!bullet) return;

    bullet.enableBody(true, x, y, true, true);
    bullet.setTexture(texture);
    bullet.setScale(scale);
    bullet.setDepth(DEPTH.objects + 1);
    bullet.setBlendMode(Phaser.BlendModes.ADD);
    bullet.setVelocity(vx, vy);
    bullet.setRotation(Math.atan2(vy, vx) + Math.PI / 2);
    bullet.body.setSize(18, 58, true);
    bullet.setData("damage", damage);
    bullet.setData("trailColor", texture === "playerLaserPierce" ? 0x84ff78 : 0x5fdcff);
    bullet.setData("trailDelay", texture === "playerLaserPierce" ? 24 : 32);
    bullet.setData("nextTrail", this.time.now);
  }

  scheduleWave(delay = Phaser.Math.Between(900, 1500)) {
    this.time.delayedCall(delay, () => {
      if (this.isGameOver) return;
      this.spawnWave();
      this.scheduleWave(this.isSurvivalMode() ? Phaser.Math.Between(2500, 3700) : Phaser.Math.Between(1850, 2750));
    });
  }

  spawnWave() {
    if (this.isSurvivalMode()) {
      this.spawnSurvivalWave();
      return;
    }

    this.waveNumber += 1;
    this.updateWaveText();

    const bossWave = this.waveNumber >= 8 && this.waveNumber % 8 === 0 && !this.hasActiveBoss();
    if (bossWave) {
      this.spawnVerticalBoss();
      this.showBossWarning();
      this.playBossMusic();
    }

    const baseCount = Phaser.Math.Clamp(Math.floor(this.width / 245), 4, 6);
    const waveSize = bossWave ? Phaser.Math.Clamp(baseCount - 1, 3, 5) : Phaser.Math.Clamp(baseCount + Phaser.Math.Between(0, 1), 4, 7);
    const spacing = this.width / (waveSize + 1);
    const waveY = Phaser.Math.Between(-150, -82);

    for (let index = 0; index < waveSize; index += 1) {
      this.time.delayedCall(index * Phaser.Math.Between(65, 120), () => {
        if (this.isGameOver) return;

        const x = spacing * (index + 1) + Phaser.Math.Between(-44, 44);
        const y = waveY - Phaser.Math.Between(0, 120);
        const type = this.pickEnemyType();
        this.spawnEnemy(Phaser.Math.Clamp(x, 48, this.width - 48), y, type);
      });
    }
  }

  spawnSurvivalWave() {
    this.waveNumber += 1;
    this.updateWaveText();

    const bossWave = this.waveNumber >= 6 && this.waveNumber % 6 === 0 && !this.hasActiveBoss();
    if (bossWave) {
      this.spawnSurvivalBoss();
      this.showBossWarning();
      this.playBossMusic();
    }

    const waveSize = bossWave
      ? Phaser.Math.Clamp(4 + Math.floor(this.waveNumber * 0.55), 6, 11)
      : Phaser.Math.Clamp(5 + Math.floor(this.waveNumber * 1.25), 6, 18);
    for (let index = 0; index < waveSize; index += 1) {
      this.time.delayedCall(index * Phaser.Math.Between(70, 135), () => {
        if (this.isGameOver || !this.isSurvivalMode()) return;

        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Math.max(this.width, this.height) * Phaser.Math.FloatBetween(0.72, 0.95) + 180;
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;
        const type = this.pickEnemyType();
        this.spawnEnemy(x, y, type);
      });
    }
  }

  spawnVerticalBoss() {
    const boss = this.spawnEnemy(this.width / 2, -150, VERTICAL_BOSS_TYPE);
    if (!boss) return;

    boss.setVelocity(Phaser.Math.Between(-34, 34), 72);
    boss.setData("verticalAnchorY", Math.max(118, this.height * 0.18));
    boss.setData("verticalSweep", Phaser.Math.FloatBetween(0.7, 1.1));
    this.playBossSpawnEffect(this.width / 2, Math.max(110, this.height * 0.18));
  }

  hasActiveBoss() {
    let active = false;
    this.enemies.children.each((enemy) => {
      if (enemy.active && enemy.getData("isBoss")) active = true;
    });
    return active;
  }

  spawnSurvivalBoss() {
    const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    const distance = Math.max(this.width, this.height) * 0.56 + 260;
    const boss = this.spawnEnemy(
      this.player.x + Math.cos(angle) * distance,
      this.player.y + Math.sin(angle) * distance,
      SURVIVAL_BOSS_TYPE,
    );
    if (!boss) return;

    boss.setData("survivalRadius", Phaser.Math.Between(520, 690));
    boss.setData("survivalStrafe", Phaser.Math.FloatBetween(0.28, 0.48));
    boss.setData("survivalSpeed", Phaser.Math.Between(86, 118) + Math.min(this.waveNumber * 2.2, 95));
    this.playBossSpawnEffect(boss.x, boss.y);
  }

  pickEnemyType() {
    const roll = Phaser.Math.Between(0, 100);
    if (roll < 18) return ENEMY_TYPES[0];
    if (roll < 42) return ENEMY_TYPES[1];
    if (roll < 62) return ENEMY_TYPES[2];
    if (roll < 78) return ENEMY_TYPES[3];
    if (roll < 91) return ENEMY_TYPES[4];
    return ENEMY_TYPES[5];
  }

  spawnEnemy(x, y, type) {
    const enemy = this.enemies.get(x, y, type.texture);
    if (!enemy) return null;

    const difficultyBoost = Math.min(this.waveNumber * 2.3, 70);
    const isBoss = type.isBoss === true;
    const maxHp = type.hp + (isBoss ? Math.floor(this.waveNumber * 2.8) : 0);
    const speed = Phaser.Math.Between(type.speed[0], type.speed[1]) + difficultyBoost;
    this.destroyBossBar(enemy);
    enemy.enableBody(true, x, y, true, true);
    enemy.setTexture(type.texture);
    enemy.setScale(type.scale);
    enemy.setDepth(DEPTH.objects);
    enemy.setAngle(180);
    enemy.setVelocity(Phaser.Math.Between(-42, 42), speed);
    enemy.body.setSize(type.body[0], type.body[1], true);
    enemy.clearTint();
    enemy.setAlpha(1);
    enemy.setData("type", type);
    enemy.setData("isBoss", isBoss);
    enemy.setData("hp", maxHp);
    enemy.setData("maxHp", maxHp);
    enemy.setData("seed", Phaser.Math.FloatBetween(0, Math.PI * 2));
    enemy.setData("drift", Phaser.Math.FloatBetween(type.drift[0], type.drift[1]));
    enemy.setData("survivalSpeed", Phaser.Math.Between(type.speed[0], type.speed[1]) + Math.min(this.waveNumber * 5, 160));
    enemy.setData("survivalRadius", isBoss ? Phaser.Math.Between(520, 690) : Phaser.Math.Between(270, 520));
    enemy.setData("survivalOrbit", Phaser.Math.FloatBetween(0, 1) < 0.5 ? -1 : 1);
    enemy.setData("survivalStrafe", isBoss ? Phaser.Math.FloatBetween(0.28, 0.48) : Phaser.Math.FloatBetween(0.38, 0.76));
    enemy.setData("shooter", isBoss || this.isSurvivalMode()
      ? Phaser.Math.FloatBetween(0, 1) < Math.max(0.78, type.fireChance)
      : Phaser.Math.FloatBetween(0, 1) < type.fireChance);
    enemy.setData("nextShot", this.time.now + Phaser.Math.Between(type.fireDelay[0], type.fireDelay[1]) * (this.isSurvivalMode() ? 0.58 : 1));
    if (isBoss) {
      enemy.setDepth(DEPTH.objects + 1);
      enemy.setTint(0xffd6d6);
      enemy.setData("bossBar", this.add.graphics().setDepth(DEPTH.objects + 3));
      this.updateBossHealthBar(enemy);
    }
    return enemy;
  }

  updateEnemies(time, delta) {
    if (this.isSurvivalMode()) {
      this.updateSurvivalEnemies(time, delta);
      return;
    }

    this.enemies.children.each((enemy) => {
      if (!enemy.active) return;

      const type = enemy.getData("type");
      const isBoss = enemy.getData("isBoss") === true;
      const seed = enemy.getData("seed");
      const drift = enemy.getData("drift");
      const stasisScale = this.hasPower("stasis") ? 0.55 : 1;
      if (isBoss) {
        const anchorY = enemy.getData("verticalAnchorY") || 128;
        const sweep = enemy.getData("verticalSweep") || 0.85;
        const targetX = this.width / 2 + Math.sin(time * 0.0013 + seed) * Math.min(this.width * 0.32, 360) * sweep;
        const targetY = anchorY + Math.sin(time * 0.0018 + seed) * 24;
        enemy.setVelocity((targetX - enemy.x) * 1.85, (targetY - enemy.y) * 2.1);
        enemy.setRotation(Math.sin(time * 0.0018 + seed) * 0.08 + Math.PI);
        this.updateBossHealthBar(enemy);
      } else {
        enemy.x += Math.sin(time * 0.0025 + seed) * drift * (delta / 16.67);
        enemy.x = Phaser.Math.Clamp(enemy.x, 32, this.width - 32);
      }
      if (this.hasPower("stasis")) {
        enemy.setTint(0x8affb0);
        enemy.body.velocity.y *= 0.985;
      } else if (enemy.tintTopLeft === 0x8affb0) {
        enemy.clearTint();
      }

      if (enemy.getData("shooter") && enemy.y > 96 && enemy.y < this.height - 220 && time > enemy.getData("nextShot")) {
        this.shootEnemy(enemy);
        enemy.setData("nextShot", time + Phaser.Math.Between(type.fireCooldown[0], type.fireCooldown[1]) / stasisScale);
      }

      if (!isBoss && enemy.y > this.height + 90) {
        enemy.disableBody(true, true);
      }
    });
  }

  updateSurvivalEnemies(time, delta) {
    this.enemies.children.each((enemy) => {
      if (!enemy.active) return;

      const type = enemy.getData("type");
      const isBoss = enemy.getData("isBoss") === true;
      const avoidRadius = isBoss ? 178 : 92;
      const stasisScale = this.hasPower("stasis") ? 0.45 : 1;
      const dx = this.player.x - enemy.x;
      const dy = this.player.y - enemy.y;
      const distance = Math.max(1, Math.hypot(dx, dy));
      const toPlayerX = dx / distance;
      const toPlayerY = dy / distance;
      const holdRadius = enemy.getData("survivalRadius") || 380;
      const orbit = enemy.getData("survivalOrbit") || 1;
      const strafe = enemy.getData("survivalStrafe") || 0.55;
      const speed = (enemy.getData("survivalSpeed") || 180) * stasisScale;
      const tangentX = -toPlayerY * orbit;
      const tangentY = toPlayerX * orbit;
      let approach = Phaser.Math.Clamp((distance - holdRadius) / 150, -0.95, 1);
      if (distance < 175) approach = -1.35;
      let separationX = 0;
      let separationY = 0;
      let crowded = 0;

      this.enemies.children.each((other) => {
        if (!other.active || other === enemy) return;

        const apartX = enemy.x - other.x;
        const apartY = enemy.y - other.y;
        const apartSq = apartX * apartX + apartY * apartY;
        const pairAvoidRadius = other.getData("isBoss") ? Math.max(avoidRadius, 168) : avoidRadius;
        if (apartSq <= 0 || apartSq > pairAvoidRadius * pairAvoidRadius) return;

        const apart = Math.sqrt(apartSq);
        const push = (pairAvoidRadius - apart) / pairAvoidRadius;
        separationX += (apartX / apart) * push;
        separationY += (apartY / apart) * push;
        crowded += 1;
      });

      let velocityX = (toPlayerX * approach + tangentX * strafe) * speed + separationX * speed * 2.1;
      let velocityY = (toPlayerY * approach + tangentY * strafe) * speed + separationY * speed * 2.1;
      const maxSpeed = speed * (crowded ? 1.55 : 1.18);
      const velocityLength = Math.hypot(velocityX, velocityY) || 1;
      if (velocityLength > maxSpeed) {
        velocityX = (velocityX / velocityLength) * maxSpeed;
        velocityY = (velocityY / velocityLength) * maxSpeed;
      }

      enemy.setVelocity(velocityX, velocityY);
      enemy.setRotation(Math.atan2(dy, dx) + Math.PI / 2);

      if (this.hasPower("stasis")) {
        enemy.setTint(0x8affb0);
      } else if (enemy.tintTopLeft === 0x8affb0) {
        enemy.clearTint();
      }

      if (enemy.getData("shooter") && distance < 1120 && time > enemy.getData("nextShot")) {
        this.shootEnemy(enemy);
        const pressureScale = Phaser.Math.Clamp(1 - this.waveNumber * 0.012, 0.74, 1);
        enemy.setData("nextShot", time + Phaser.Math.Between(type.fireCooldown[0], type.fireCooldown[1]) * 0.82 * pressureScale / stasisScale);
      }

      if (isBoss) {
        this.updateBossHealthBar(enemy);
      }

      if (distance > (isBoss ? 3600 : 2600)) {
        this.cleanupEnemy(enemy);
      }
    });
  }

  cleanupEnemy(enemy) {
    const wasBoss = enemy.getData("isBoss") === true;
    this.destroyBossBar(enemy);
    enemy.disableBody(true, true);
    if (wasBoss && this.gameStarted && !this.isGameOver && !this.hasActiveBoss()) {
      this.playGameplayMusic();
    }
  }

  destroyBossBar(enemy) {
    const bar = enemy?.getData?.("bossBar");
    if (bar?.scene) {
      bar.destroy();
    }
    if (enemy?.setData) {
      enemy.setData("bossBar", null);
    }
  }

  updateBossHealthBar(enemy) {
    const bar = enemy.getData("bossBar");
    if (!bar?.scene) return;

    const maxHp = Math.max(1, enemy.getData("maxHp") || 1);
    const hp = Phaser.Math.Clamp(enemy.getData("hp") || 0, 0, maxHp);
    const width = Phaser.Math.Clamp(enemy.displayWidth * 1.22, 150, 235);
    const height = 12;
    const x = enemy.x - width / 2;
    const y = enemy.y - enemy.displayHeight * 0.56 - 28;
    const fillWidth = Math.max(4, (width - 4) * (hp / maxHp));

    bar.clear();
    bar.fillStyle(0x06101e, 0.86);
    bar.fillRoundedRect(x, y, width, height, 6);
    bar.lineStyle(2, 0xff9daf, 0.88);
    bar.strokeRoundedRect(x, y, width, height, 6);
    bar.fillStyle(hp / maxHp < 0.28 ? 0xff426d : 0xff6f8d, 0.95);
    bar.fillRoundedRect(x + 2, y + 2, fillWidth, height - 4, 5);
  }

  shootEnemy(enemy) {
    const type = enemy.getData("type");
    const baseAngle = this.angleToPlayer(enemy);
    const speedScale = this.hasPower("stasis") ? 0.65 : 1;
    const speed = Phaser.Math.Between(type.bulletSpeed[0], type.bulletSpeed[1]) * speedScale;
    const shotFrom = (angleOffset, sideOffset = 0) => {
      if (!this.isSurvivalMode()) {
        return { x: enemy.x + sideOffset, y: enemy.y + 42 };
      }

      const worldAngle = Math.PI / 2 - angleOffset;
      const sideAngle = worldAngle + Math.PI / 2;
      return {
        x: enemy.x + Math.cos(worldAngle) * 42 + Math.cos(sideAngle) * sideOffset,
        y: enemy.y + Math.sin(worldAngle) * 42 + Math.sin(sideAngle) * sideOffset,
      };
    };
    const fire = (texture, angleOffset, shotSpeed = speed, scale = 0.7, homing = false, sideOffset = 0) => {
      const shot = shotFrom(angleOffset, sideOffset);
      this.spawnEnemyBullet(shot.x, shot.y, texture, angleOffset, shotSpeed, scale, homing);
    };

    if (type.pattern === "spread") {
      const spreadBase = this.isSurvivalMode() ? baseAngle : 0;
      [-0.32, 0, 0.32].forEach((angle) => fire("enemyLaserWide", spreadBase + angle, speed));
    } else if (type.pattern === "boss") {
      [-0.48, -0.24, 0, 0.24, 0.48].forEach((angle, index) => {
        fire(index % 2 === 0 ? "enemyLaserWide" : "enemyLaserFast", baseAngle + angle, speed + index * 18, index % 2 === 0 ? 0.84 : 0.78);
      });
      fire("enemyMissile", baseAngle + Phaser.Math.FloatBetween(-0.18, 0.18), speed * 0.86, 0.96, true);
    } else if (type.pattern === "triple") {
      [-18, 0, 18].forEach((offset) => {
        const angle = this.isSurvivalMode() ? baseAngle + offset * 0.009 : 0;
        fire("enemyLaser", angle, speed + Math.abs(offset) * 2, 0.7, false, offset);
      });
    } else if (type.pattern === "missile") {
      fire("enemyMissile", this.isSurvivalMode() ? baseAngle : baseAngle * 0.65, speed, 0.86, true);
    } else if (type.pattern === "aimed") {
      fire("enemyLaser", baseAngle, speed);
    } else {
      fire("enemyLaserFast", this.isSurvivalMode() ? baseAngle : 0, speed, 0.82);
    }

    const muzzle = shotFrom(baseAngle);
    this.enemyMuzzleFlash(muzzle.x, muzzle.y);
    if (this.time.now > this.nextEnemySfx) {
      this.playSfx(type.pattern === "missile" ? "missile" : "enemyLaser", { volume: type.pattern === "missile" ? 0.18 : 0.1, rate: Phaser.Math.FloatBetween(0.92, 1.08) });
      this.nextEnemySfx = this.time.now + 130;
    }
  }

  angleToPlayer(enemy) {
    const dx = this.player.x - enemy.x;
    const dy = this.player.y - enemy.y;
    if (this.isSurvivalMode()) {
      return Math.PI / 2 - Math.atan2(dy, dx);
    }
    return Phaser.Math.Clamp(Math.atan2(dx, Math.max(dy, 80)), -0.55, 0.55);
  }

  spawnEnemyBullet(x, y, texture, angleOffset, speed, scale = 0.7, homing = false) {
    const bullet = this.enemyBullets.get(x, y, texture);
    if (!bullet) return;

    const vx = Math.sin(angleOffset) * speed;
    const vy = Math.cos(angleOffset) * speed;
    bullet.enableBody(true, x, y, true, true);
    bullet.setTexture(texture);
    bullet.setScale(scale);
    bullet.setDepth(DEPTH.objects + 1);
    bullet.setBlendMode(Phaser.BlendModes.ADD);
    bullet.setVelocity(vx, vy);
    bullet.setRotation(Math.atan2(vy, vx) + Math.PI / 2);
    bullet.body.setSize(texture === "enemyMissile" ? 14 : 9, texture === "enemyMissile" ? 28 : 34, true);
    bullet.setData("homing", homing);
    bullet.setData("speed", speed);
    bullet.setData("maxSpeed", homing ? speed + 220 : speed);
    bullet.setData("turnRate", homing ? Phaser.Math.FloatBetween(1.45, 2.15) : 0);
    bullet.setData("shootable", homing);
    bullet.setData("trailColor", homing ? 0xff6f7b : texture === "enemyLaserFast" ? 0xff9a5e : 0xff4968);
    bullet.setData("trailDelay", homing ? 34 : 46);
    bullet.setData("nextTrail", this.time.now);
    if (homing) {
      this.showMissileWarning();
    }
  }

  updateEnemyBullets(delta) {
    const dt = delta / 1000;
    this.enemyBullets.children.each((bullet) => {
      if (!bullet.active || !bullet.getData("homing")) return;

      const currentAngle = Math.atan2(bullet.body.velocity.y, bullet.body.velocity.x);
      const targetAngle = Math.atan2(this.player.y - bullet.y, this.player.x - bullet.x);
      const nextAngle = Phaser.Math.Angle.RotateTo(currentAngle, targetAngle, bullet.getData("turnRate") * dt);
      const stasisScale = this.hasPower("stasis") ? 0.56 : 1;
      const currentSpeed = Math.min((bullet.getData("maxSpeed") || 420) * stasisScale, bullet.body.velocity.length() + 95 * dt);

      bullet.setVelocity(Math.cos(nextAngle) * currentSpeed, Math.sin(nextAngle) * currentSpeed);
      bullet.setRotation(nextAngle + Math.PI / 2);
      this.playMissileTrail(bullet);
    });
  }

  scheduleMeteor(delay = Phaser.Math.Between(700, 1250)) {
    this.time.delayedCall(delay, () => {
      if (this.isGameOver) return;
      this.spawnMeteor();
      this.scheduleMeteor(Phaser.Math.Between(620, 1180));
    });
  }

  schedulePowerup(delay = Phaser.Math.Between(8500, 12500)) {
    this.time.delayedCall(delay, () => {
      if (this.isGameOver) return;
      this.spawnPowerup();
      this.schedulePowerup(Phaser.Math.Between(9500, 14500));
    });
  }

  scheduleCurrencyStar(delay = Phaser.Math.Between(3600, 6200)) {
    this.time.delayedCall(delay, () => {
      if (this.isGameOver) return;
      this.spawnCurrencyStarCluster();
      this.scheduleCurrencyStar(Phaser.Math.Between(4200, 7600));
    });
  }

  spawnCurrencyStarCluster() {
    const count = Phaser.Math.Between(1, 100) > 62 ? Phaser.Math.Between(2, 3) : 1;
    const baseX = this.isSurvivalMode()
      ? this.player.x + Phaser.Math.Between(-420, 420)
      : Phaser.Math.Between(80, this.width - 80);
    const baseY = this.isSurvivalMode()
      ? this.player.y + Phaser.Math.Between(-340, 340)
      : -44;
    for (let index = 0; index < count; index += 1) {
      const offset = (index - (count - 1) / 2) * Phaser.Math.Between(34, 52);
      const x = this.isSurvivalMode() ? baseX + offset : Phaser.Math.Clamp(baseX + offset, 54, this.width - 54);
      this.spawnCurrencyStar(x, baseY - index * 22);
    }
  }

  spawnMeteor() {
    const type = Phaser.Utils.Array.GetRandom(METEOR_TYPES);
    const meteor = this.meteors.get(Phaser.Math.Between(50, this.width - 50), -120, type.texture);
    if (!meteor) return;

    meteor.enableBody(true, meteor.x, -120, true, true);
    meteor.setTexture(type.texture);
    meteor.setScale(type.scale);
    meteor.setDepth(DEPTH.objects - 1);
    meteor.setAlpha(1);
    meteor.clearTint();
    meteor.setVelocity(Phaser.Math.Between(-72, 72), Phaser.Math.Between(type.speed[0], type.speed[1]));
    meteor.setAngularVelocity(Phaser.Math.Between(-210, 210));
    meteor.setData("type", type);
    meteor.setData("hp", type.hp);
    meteor.setData("maxHp", type.hp);
    meteor.body.setCircle(Math.min(meteor.width, meteor.height) * type.radius);
  }

  updateMeteors() {
    this.meteors.children.each((meteor) => {
      if (meteor.active && this.hasPower("stasis")) {
        meteor.setTint(0x8affb0);
        meteor.body.velocity.y *= 0.99;
      } else if (meteor.active && meteor.tintTopLeft === 0x8affb0) {
        meteor.clearTint();
      }

      if (meteor.active && meteor.y > this.height + 140) {
        meteor.disableBody(true, true);
      }
    });
  }

  spawnPowerup(forcedSpawn = null) {
    const type = Phaser.Utils.Array.GetRandom(POWERUP_TYPES);
    const spawn = forcedSpawn || this.getPickupSpawnPoint();
    const powerup = this.powerups.get(spawn.x, spawn.y, type.texture);
    if (!powerup) return;

    powerup.enableBody(true, spawn.x, spawn.y, true, true);
    powerup.setTexture(type.texture);
    powerup.setScale(1.05);
    powerup.setAlpha(1);
    this.tweens.killTweensOf(powerup);
    powerup.setDepth(DEPTH.objects + 2);
    powerup.setVelocity(
      Phaser.Math.Between(-28, 28),
      this.isSurvivalMode() ? Phaser.Math.Between(-28, 28) : Phaser.Math.Between(115, 165),
    );
    powerup.setAngularVelocity(Phaser.Math.Between(-110, 110));
    powerup.body.setCircle(16);
    powerup.setData("type", type);
    powerup.setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: powerup,
      scale: 1.25,
      alpha: 0.72,
      yoyo: true,
      repeat: -1,
      duration: 420,
      ease: "Sine.easeInOut",
    });
  }

  getPickupSpawnPoint() {
    if (this.isSurvivalMode()) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const distance = Phaser.Math.Between(190, 560);
      return {
        x: this.player.x + Math.cos(angle) * distance,
        y: this.player.y + Math.sin(angle) * distance,
      };
    }

    return {
      x: Phaser.Math.Between(70, this.width - 70),
      y: -44,
    };
  }

  updatePowerups(time) {
    this.powerups.children.each((powerup) => {
      const tooFar = this.isSurvivalMode()
        ? Phaser.Math.Distance.Between(powerup.x, powerup.y, this.player.x, this.player.y) > 1800
        : powerup.y > this.height + 60;
      if (powerup.active && tooFar) {
        this.tweens.killTweensOf(powerup);
        powerup.disableBody(true, true);
      }
    });

    Object.entries(this.activePowerups).forEach(([id, state]) => {
      if (time >= state.until) {
        this.expirePowerup(id);
      }
    });

    this.updatePowerupBadges(time);
    this.updatePowerupAuras(time);
  }

  spawnCurrencyStar(x, y) {
    const star = this.currencyStars.get(x, y, "currencyStar");
    if (!star) return;

    star.enableBody(true, x, y, true, true);
    star.setTexture("currencyStar");
    star.setScale(0.72);
    star.setAlpha(1);
    star.clearTint();
    this.tweens.killTweensOf(star);
    star.setDepth(DEPTH.objects + 3);
    star.setVelocity(
      Phaser.Math.Between(-36, 36),
      this.isSurvivalMode() ? Phaser.Math.Between(-36, 36) : Phaser.Math.Between(165, 235),
    );
    star.setAngularVelocity(Phaser.Math.Between(-180, 180));
    star.body.setCircle(15);
    star.setData("value", 1);
    star.setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: star,
      scale: 0.92,
      alpha: 0.78,
      yoyo: true,
      repeat: -1,
      duration: 360,
      ease: "Sine.easeInOut",
    });
  }

  updateCurrencyStars() {
    this.currencyStars.children.each((star) => {
      const tooFar = this.isSurvivalMode()
        ? Phaser.Math.Distance.Between(star.x, star.y, this.player.x, this.player.y) > 1800
        : star.y > this.height + 60;
      if (star.active && tooFar) {
        this.tweens.killTweensOf(star);
        star.disableBody(true, true);
      }
    });
  }

  collectCurrencyStar(player, star) {
    const value = star.getData("value") || 1;
    const x = star.x;
    const y = star.y;
    this.tweens.killTweensOf(star);
    star.disableBody(true, true);
    this.starCurrency += value;
    this.runStars += value;
    this.saveStoredNumber(STORAGE_KEYS.stars, this.starCurrency);
    this.updateCurrencyText();
    this.updateMenuStats();
    this.pulseHudText(this.currencyText, 0xffe890);
    this.playStarCollect(x, y, value);
  }

  collectPowerup(player, powerup) {
    const type = powerup.getData("type");
    this.tweens.killTweensOf(powerup);
    powerup.disableBody(true, true);
    this.activatePowerup(type);
  }

  activatePowerup(type) {
    const until = this.time.now + type.duration;
    this.activePowerups[type.id] = { type, until };
    this.playSfx(type.sound, { volume: 0.24, rate: Phaser.Math.FloatBetween(0.95, 1.08) });
    this.playPowerupBurst(this.player.x, this.player.y, type);

    if (!this.powerupBadges[type.id]) {
      const icon = this.add.image(0, 0, type.texture)
        .setScale(0.58)
        .setDepth(DEPTH.player + 4)
        .setBlendMode(Phaser.BlendModes.ADD);
      const label = this.add.text(0, 0, "", {
        fontFamily: "Trebuchet MS, Arial, sans-serif",
        fontSize: "12px",
        fontStyle: "bold",
        color: "#ffffff",
        stroke: "#05101c",
        strokeThickness: 4,
      }).setOrigin(0.5).setDepth(DEPTH.player + 5);
      this.powerupBadges[type.id] = { icon, label };
    }
  }

  expirePowerup(id) {
    const state = this.activePowerups[id];
    if (!state) return;

    delete this.activePowerups[id];
    const badge = this.powerupBadges[id];
    if (badge) {
      this.tweens.add({
        targets: [badge.icon, badge.label],
        alpha: 0,
        scale: 0.25,
        duration: 220,
        ease: "Sine.easeIn",
        onComplete: () => {
          badge.icon.destroy();
          badge.label.destroy();
          delete this.powerupBadges[id];
        },
      });
    }
    this.playSfx("powerExpire", { volume: 0.09, rate: 1.15 });
  }

  updatePowerupBadges(time) {
    const entries = Object.entries(this.activePowerups);
    const scale = this.player.getData("baseScale") || 1;
    entries.forEach(([id, state], index) => {
      const badge = this.powerupBadges[id];
      if (!badge) return;

      const angle = -Math.PI / 2 + (index - (entries.length - 1) / 2) * 0.42 + Math.sin(time * 0.004 + index) * 0.08;
      const radius = 62 * scale;
      const x = this.player.x + Math.cos(angle) * radius;
      const y = this.player.y + Math.sin(angle) * radius;
      const remaining = Math.max(0, Math.ceil((state.until - time) / 1000));
      badge.icon.setPosition(x, y).setAlpha(0.95);
      badge.label.setPosition(x, y + 18 * scale).setText(String(remaining)).setAlpha(0.95);
    });
  }

  updatePowerupAuras(time) {
    if (this.hasPower("shield")) {
      if (!this.shieldAura) {
        this.shieldAura = this.add.image(this.player.x, this.player.y, "shieldFx")
          .setDepth(DEPTH.player + 3)
          .setBlendMode(Phaser.BlendModes.ADD)
          .setAlpha(0.58);
      }
      this.shieldAura
        .setVisible(true)
        .setPosition(this.player.x, this.player.y)
        .setScale(1.55 + Math.sin(time * 0.006) * 0.08)
        .setAngle(time * 0.035);
    } else if (this.shieldAura) {
      this.shieldAura.setVisible(false);
    }
  }

  damageEnemy(bullet, enemy) {
    const damage = bullet.getData("damage") || 1;
    const type = enemy.getData("type");
    const isBoss = enemy.getData("isBoss") === true;
    bullet.disableBody(true, true);

    enemy.setData("hp", enemy.getData("hp") - damage);
    this.flashTarget(enemy, 0xffffff, 55);
    this.playHitSpark(enemy.x, enemy.y, isBoss ? 0xff95aa : 0x66e7ff, isBoss ? 13 : 8, isBoss ? 1.05 : 0.75);
    this.playImpactSlash(enemy.x, enemy.y, isBoss ? 0xff9daf : 0x8ff6ff, isBoss ? 1.22 : 0.78);
    this.playImpactSfx(isBoss ? 0.18 : 0.12);

    if (enemy.getData("hp") > 0) {
      if (isBoss) {
        enemy.body.velocity.scale(0.88);
        this.updateBossHealthBar(enemy);
      } else {
        enemy.body.velocity.y *= 0.82;
      }
      return;
    }

    const deathX = enemy.x;
    const deathY = enemy.y;
    this.cleanupEnemy(enemy);
    this.score += type.score;
    this.updateScoreText();
    this.pulseHudText(this.scoreText, 0x8ff6ff);
    this.drawFloatingText(deathX, deathY - 42, `+${type.score}`, isBoss ? 0xff9daf : 0x8ff6ff);
    if (isBoss) {
      this.playBossExplosion(deathX, deathY, type.scale);
      this.awardBossReward(deathX, deathY, this.isSurvivalMode() ? 35 : 25);
      if (!this.hasActiveBoss() && this.gameStarted && !this.isGameOver) {
        this.playGameplayMusic();
      }
    } else {
      this.playEnemyExplosion(deathX, deathY, type.scale);
    }
  }

  damageMeteor(bullet, meteor) {
    const damage = bullet.getData("damage") || 1;
    const type = meteor.getData("type");
    bullet.disableBody(true, true);

    meteor.setData("hp", meteor.getData("hp") - damage);
    meteor.body.velocity.x += Phaser.Math.Between(-55, 55);
    meteor.body.velocity.y -= Phaser.Math.Between(18, 55);
    meteor.setAngularVelocity(meteor.body.angularVelocity + Phaser.Math.Between(-130, 130));
    this.flashTarget(meteor, 0xf8f6dd, 70);
    this.playImpactSlash(meteor.x, meteor.y, 0xffd28a, type.scale || 1);
    this.playMeteorHit(meteor.x, meteor.y, meteor.getData("hp") <= 0);
    this.playImpactSfx(0.14);

    if (meteor.getData("hp") > 0) {
      return;
    }

    meteor.disableBody(true, true);
    this.score += type.score;
    this.updateScoreText();
    this.pulseHudText(this.scoreText, 0xffd28a);
    this.drawFloatingText(meteor.x, meteor.y - 28, `+${type.score}`, 0xffd28a);
    this.playRockBurst(meteor.x, meteor.y, type.scale);
  }

  canShootMissile(playerBullet, enemyBullet) {
    return enemyBullet.active && enemyBullet.getData("shootable") === true;
  }

  destroyMissile(playerBullet, missile) {
    playerBullet.disableBody(true, true);
    missile.disableBody(true, true);
    this.score += 3;
    this.updateScoreText();
    this.pulseHudText(this.scoreText, 0xff9daf);
    this.playMissileDestroyed(missile.x, missile.y);
  }

  playerHit(player, threat) {
    if (this.isGameOver) return;

    const bossContact = threat?.getData?.("isBoss") === true;
    if (this.time.now < this.invulnerableUntil) {
      if (threat?.disableBody && !bossContact) threat.disableBody(true, true);
      return;
    }

    if (this.hasPower("shield")) {
      if (threat?.disableBody && !bossContact) {
        this.playPlayerImpact(threat.x, threat.y);
        threat.disableBody(true, true);
      } else if (bossContact) {
        this.playPlayerImpact(threat.x, threat.y);
        threat.setVelocity((threat.x - this.player.x) * 0.9, (threat.y - this.player.y) * 0.9);
      }
      this.clearThreatBubble();
      this.cameras.main.shake(85, 0.0032);
      this.playSfx("shield", { volume: 0.18, rate: Phaser.Math.FloatBetween(1.05, 1.18) });
      return;
    }

    if (threat?.disableBody && !bossContact) {
      this.playPlayerImpact(threat.x, threat.y);
      threat.disableBody(true, true);
    } else if (bossContact) {
      this.playPlayerImpact(threat.x, threat.y);
      threat.setVelocity((threat.x - this.player.x) * 1.15, (threat.y - this.player.y) * 1.15);
    }

    this.lives -= 1;
    this.updateHullPips();
    this.invulnerableUntil = this.time.now + 1750;
    this.cameras.main.shake(125, 0.0062);
    this.flashVignette();
    this.clearThreatBubble();
    this.playerDamage.setTexture(this.lives <= 1 ? "playerDamage2" : "playerDamage1");
    this.playPlayerImpact(this.player.x, this.player.y);
    this.playSfx("shield", { volume: 0.22, rate: Phaser.Math.FloatBetween(0.94, 1.02) });

    if (this.lives <= 0) {
      this.endGame();
      return;
    }

    this.tweens.add({
      targets: this.player,
      scaleX: this.player.getData("baseScale") * 1.12,
      scaleY: this.player.getData("baseScale") * 0.9,
      yoyo: true,
      duration: 85,
      ease: "Quad.easeOut",
    });
  }

  cleanProjectiles() {
    this.playerBullets.children.each((bullet) => {
      const expired = this.isSurvivalMode()
        ? Phaser.Math.Distance.Between(bullet.x, bullet.y, this.player.x, this.player.y) > 1700
        : bullet.y < -80 || bullet.x < -80 || bullet.x > this.width + 80;
      if (bullet.active && expired) {
        bullet.disableBody(true, true);
      }
    });

    this.enemyBullets.children.each((bullet) => {
      const expired = this.isSurvivalMode()
        ? Phaser.Math.Distance.Between(bullet.x, bullet.y, this.player.x, this.player.y) > 1900
        : bullet.y > this.height + 90 || bullet.x < -90 || bullet.x > this.width + 90;
      if (bullet.active && expired) {
        bullet.disableBody(true, true);
      }
    });
  }

  updateProjectileTrails(time) {
    const renderTrail = (bullet, sizeScale = 1) => {
      if (!bullet.active || time < (bullet.getData("nextTrail") || 0)) return;

      bullet.setData("nextTrail", time + (bullet.getData("trailDelay") || 45));
      const color = bullet.getData("trailColor") || 0xffffff;
      const speed = Math.max(120, bullet.body.velocity.length());
      const radius = Phaser.Math.Clamp(speed / 230, 2.8, 7.5) * sizeScale;
      const trail = this.add.circle(bullet.x, bullet.y, radius, color, 0.34)
        .setDepth(DEPTH.effects - 1)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({
        targets: trail,
        scale: Phaser.Math.FloatBetween(1.8, 2.8),
        alpha: 0,
        duration: Phaser.Math.Between(180, 290),
        ease: "Sine.easeOut",
        onComplete: () => trail.destroy(),
      });
    };

    this.playerBullets.children.each((bullet) => renderTrail(bullet, bullet.getData("damage") > 1 ? 1.25 : 1));
    this.enemyBullets.children.each((bullet) => renderTrail(bullet, bullet.getData("homing") ? 1.35 : 0.9));
  }

  togglePause() {
    if (!this.gameStarted || this.isGameOver) return;

    this.isPaused = !this.isPaused;
    this.pauseOverlay.setVisible(this.isPaused);
    this.physics.world.isPaused = this.isPaused;
    this.tweens[this.isPaused ? "pauseAll" : "resumeAll"]();
    this.time.paused = this.isPaused;
    if (this.currentMusic) {
      if (this.isPaused) {
        this.currentMusic.pause();
        this.musicPausedByGame = true;
      } else if (this.musicPausedByGame) {
        this.currentMusic.resume();
        this.musicPausedByGame = false;
      }
    }
    this.setCanvasCursor(this.isPaused ? "default" : this.isSurvivalMode() ? "crosshair" : "none");
    this.playSfx("ui", { volume: 0.18, rate: this.isPaused ? 0.86 : 1.08 });
  }

  returnToMainMenu() {
    this.isPaused = false;
    this.time.paused = false;
    this.physics.world.isPaused = false;
    this.physics.resume();
    this.tweens.resumeAll();
    this.pauseOverlay?.setVisible(false);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.18, rate: 1.08 });
    this.scene.restart();
  }

  resetCameraForOverlay() {
    const camera = this.cameras.main;
    camera.stopFollow();
    camera.setBounds(0, 0, this.width, this.height);
    camera.scrollX = 0;
    camera.scrollY = 0;
  }

  setCanvasCursor(cursor) {
    this.input.setDefaultCursor(cursor);
    this.game.canvas.style.cursor = cursor;
  }

  playMusic(key, config = {}) {
    if (!this.sound) return;

    const next = {
      key,
      volume: config.volume ?? 0.24,
      loop: config.loop ?? true,
      fade: config.fade ?? 450,
    };
    this.pendingMusic = next;
    if (this.sound.locked) return;

    this.pendingMusic = null;
    if (this.currentMusic?.key === key) {
      if (this.currentMusic.isPaused) this.currentMusic.resume();
      if (!this.currentMusic.isPlaying) this.currentMusic.play();
      this.currentMusic.setVolume(next.volume);
      return;
    }

    const previous = this.currentMusic;
    const music = this.sound.add(key, {
      loop: next.loop,
      volume: next.fade > 0 ? 0 : next.volume,
    });
    this.currentMusic = music;
    music.play();

    if (next.fade > 0) {
      this.tweens.addCounter({
        from: 0,
        to: next.volume,
        duration: next.fade,
        ease: "Sine.easeOut",
        onUpdate: (tween) => {
          if (music.isPlaying) music.setVolume(tween.getValue());
        },
      });
    }

    if (previous) {
      this.tweens.addCounter({
        from: previous.volume ?? next.volume,
        to: 0,
        duration: Math.min(next.fade, 500),
        ease: "Sine.easeOut",
        onUpdate: (tween) => {
          if (previous.isPlaying || previous.isPaused) previous.setVolume(tween.getValue());
        },
        onComplete: () => {
          previous.stop();
          previous.destroy();
        },
      });
    }
  }

  resumePendingMusic() {
    if (!this.pendingMusic || this.sound.locked) return;

    const pending = this.pendingMusic;
    this.pendingMusic = null;
    this.playMusic(pending.key, pending);
  }

  playGameplayMusic() {
    this.playMusic("musicGame", { volume: 0.22, loop: true, fade: 650 });
  }

  playBossMusic() {
    if (this.currentMusic?.key === "musicBoss" || this.currentMusic?.key === "musicBossIntro") return;

    this.playMusic("musicBossIntro", { volume: 0.32, loop: false, fade: 140 });
    this.time.delayedCall(1850, () => {
      if (!this.isGameOver && this.isSurvivalMode() && this.hasActiveBoss()) {
        this.playMusic("musicBoss", { volume: 0.3, loop: true, fade: 520 });
      }
    });
  }

  stopMusic() {
    this.pendingMusic = null;
    if (!this.currentMusic) return;

    this.currentMusic.stop();
    this.currentMusic.destroy();
    this.currentMusic = null;
  }

  playSfx(key, config = {}) {
    if (!this.sound || this.sound.locked) return;

    this.sound.play(key, {
      volume: config.volume ?? 0.18,
      rate: config.rate ?? 1,
      detune: config.detune ?? 0,
    });
  }

  playImpactSfx(volume) {
    if (this.time.now < this.nextImpactSfx) return;

    this.playSfx("impact", { volume, rate: Phaser.Math.FloatBetween(0.86, 1.12) });
    this.nextImpactSfx = this.time.now + 90;
  }

  pulseHudText(text, tint = 0xffffff) {
    if (!text?.scene) return;

    text.setTint(tint);
    this.tweens.add({
      targets: text,
      scaleX: 1.16,
      scaleY: 1.16,
      duration: 86,
      yoyo: true,
      ease: "Quad.easeOut",
      onComplete: () => {
        text.setScale(1);
        text.clearTint();
      },
    });
  }

  hasPower(id) {
    const state = this.activePowerups[id];
    return Boolean(state && this.time.now < state.until);
  }

  clearThreatBubble() {
    const center = new Phaser.Math.Vector2(this.player.x, this.player.y);
    const clearGroup = (group, radius, effect) => {
      group.children.each((object) => {
        if (!object.active) return;

        const distance = Phaser.Math.Distance.Between(center.x, center.y, object.x, object.y);
        if (distance > radius) return;

        if (object.getData?.("isBoss")) {
          object.setData("hp", Math.max(1, (object.getData("hp") || 1) - 4));
          this.updateBossHealthBar(object);
          this.flashTarget(object, 0xffd7df, 85);
          this.playHitSpark(object.x, object.y, 0xff9daf, 16, 1.1);
          return;
        }

        if (effect === "rock") {
          this.playMeteorHit(object.x, object.y, true);
        } else if (effect === "ship") {
          this.playEnemyExplosion(object.x, object.y, 0.7);
        } else {
          this.playHitSpark(object.x, object.y, 0x76e6ff, 5, 0.42);
        }
        object.disableBody(true, true);
      });
    };

    this.playShockwave(this.player.x, this.player.y, 0x79f2ff, 210, 0.42);
    clearGroup(this.enemyBullets, 245, "bullet");
    clearGroup(this.enemies, 150, "ship");
    clearGroup(this.meteors, 135, "rock");
  }

  playMuzzleFlash(x, y, charged) {
    const color = charged ? 0x82ff78 : 0x67d8ff;
    const flash = this.add.circle(x, y, charged ? 16 : 11, color, 0.85)
      .setDepth(DEPTH.effects)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: flash,
      scale: charged ? 2.2 : 1.6,
      alpha: 0,
      y: y - 24,
      duration: 135,
      ease: "Quad.easeOut",
      onComplete: () => flash.destroy(),
    });
  }

  enemyMuzzleFlash(x, y) {
    const flash = this.add.circle(x, y, 9, 0xff4e5b, 0.75)
      .setDepth(DEPTH.effects)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: flash,
      scale: 1.9,
      alpha: 0,
      duration: 140,
      ease: "Quad.easeOut",
      onComplete: () => flash.destroy(),
    });
  }

  playMissileTrail(bullet) {
    if (Phaser.Math.Between(0, 100) > 22) return;

    const trail = this.add.circle(bullet.x, bullet.y, Phaser.Math.FloatBetween(3, 6), 0xff6f7b, 0.38)
      .setDepth(DEPTH.effects - 1)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: trail,
      scale: 2,
      alpha: 0,
      duration: 260,
      ease: "Sine.easeOut",
      onComplete: () => trail.destroy(),
    });
  }

  showMissileWarning() {
    if (this.time.now < this.nextMissileWarning) return;

    this.nextMissileWarning = this.time.now + 3200;
    this.playSfx("missileWarning", { volume: 0.08, rate: 0.82 });
    const warning = this.add.text(this.player.x, Math.max(72, this.player.y - 102), this.t("missileLock"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "16px",
      fontStyle: "bold",
      color: "#ff6f7d",
      stroke: "#12060a",
      strokeThickness: 5,
    }).setOrigin(0.5).setDepth(DEPTH.hud);
    const leftTick = this.add.rectangle(this.player.x - 82, warning.y, 32, 3, 0xff4260, 0.88)
      .setDepth(DEPTH.hud)
      .setBlendMode(Phaser.BlendModes.ADD);
    const rightTick = this.add.rectangle(this.player.x + 82, warning.y, 32, 3, 0xff4260, 0.88)
      .setDepth(DEPTH.hud)
      .setBlendMode(Phaser.BlendModes.ADD);

    this.tweens.add({
      targets: [warning, leftTick, rightTick],
      alpha: 0,
      y: "-=16",
      duration: 900,
      ease: "Sine.easeOut",
      onComplete: () => {
        warning.destroy();
        leftTick.destroy();
        rightTick.destroy();
      },
    });
  }

  showBossWarning() {
    this.playSfx("lowBoom", { volume: 0.28, rate: 0.72 });
    const y = Math.max(96, this.height * 0.16);
    const warning = this.add.text(this.width / 2, y, this.t("bossWave"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "42px",
      fontStyle: "bold",
      color: "#ffbfd0",
      stroke: "#14040b",
      strokeThickness: 8,
    }).setOrigin(0.5).setDepth(DEPTH.hud + 4).setScrollFactor(0);
    const topLine = this.add.rectangle(this.width / 2, y - 42, 260, 4, 0xff5f86, 0.84)
      .setDepth(DEPTH.hud + 3)
      .setScrollFactor(0)
      .setBlendMode(Phaser.BlendModes.ADD);
    const bottomLine = this.add.rectangle(this.width / 2, y + 42, 260, 4, 0xff5f86, 0.84)
      .setDepth(DEPTH.hud + 3)
      .setScrollFactor(0)
      .setBlendMode(Phaser.BlendModes.ADD);

    this.cameras.main.shake(160, 0.0045);
    this.tweens.add({
      targets: [warning, topLine, bottomLine],
      alpha: 0,
      scaleX: 1.12,
      duration: 1450,
      ease: "Sine.easeOut",
      onComplete: () => {
        warning.destroy();
        topLine.destroy();
        bottomLine.destroy();
      },
    });
  }

  playBossSpawnEffect(x, y) {
    this.playShockwave(x, y, 0xff5f86, 260, 0.48);
    this.playHitSpark(x, y, 0xff9daf, 30, 1.75);
    this.addSmokePuffs(x, y, 8, 1.15);
  }

  playMissileDestroyed(x, y) {
    this.playSfx("missilePop", { volume: 0.22, rate: Phaser.Math.FloatBetween(0.96, 1.12) });
    this.playShockwave(x, y, 0xff526d, 96, 0.68);
    this.playHitSpark(x, y, 0xff7f94, 22, 1.2);
    this.playHitSpark(x, y, 0x88eaff, 14, 0.9);
    this.addSmokePuffs(x, y, 3, 0.62);
    this.cameras.main.shake(65, 0.002);
  }

  playLaunchTransition() {
    const wash = this.add.rectangle(0, 0, this.width, this.height, 0x7bdcff, 0.18)
      .setOrigin(0)
      .setDepth(DEPTH.overlay - 2)
      .setScrollFactor(0)
      .setBlendMode(Phaser.BlendModes.ADD);
    const centerLine = this.add.rectangle(this.width / 2, this.height / 2, 4, this.height * 1.25, 0xffffff, 0.72)
      .setDepth(DEPTH.overlay - 1)
      .setScrollFactor(0)
      .setBlendMode(Phaser.BlendModes.ADD);

    this.cameras.main.shake(120, 0.003);
    this.tweens.add({
      targets: wash,
      alpha: 0,
      duration: 520,
      ease: "Cubic.easeOut",
      onComplete: () => wash.destroy(),
    });
    this.tweens.add({
      targets: centerLine,
      scaleX: 120,
      alpha: 0,
      duration: 440,
      ease: "Cubic.easeOut",
      onComplete: () => centerLine.destroy(),
    });
  }

  playPowerupBurst(x, y, type) {
    this.playShockwave(x, y, type.color, 145, 0.58);
    this.drawFloatingText(x, y - 72, `${type.name} ${Math.round(type.duration / 1000)}${this.t("secondsShort")}`, type.color);
    this.playHitSpark(x, y, type.color, 22, 1.15);
    this.drawGlow(this.lightLayer, x, y, 210, type.color, 0.12);

    if (type.id === "spread") {
      [-34, -18, 0, 18, 34].forEach((offset, index) => {
        const beam = this.add.rectangle(x + offset, y - 6, 4, 72, type.color, 0.78)
          .setDepth(DEPTH.effects)
          .setBlendMode(Phaser.BlendModes.ADD);
        this.tweens.add({
          targets: beam,
          y: y - 86,
          alpha: 0,
          scaleY: 1.8,
          duration: 360 + index * 25,
          ease: "Cubic.easeOut",
          onComplete: () => beam.destroy(),
        });
      });
    } else if (type.id === "rapid") {
      for (let i = 0; i < 12; i += 1) {
        const streak = this.add.rectangle(x + Phaser.Math.Between(-56, 56), y + Phaser.Math.Between(-22, 46), 3, Phaser.Math.Between(28, 58), type.color, 0.75)
          .setDepth(DEPTH.effects)
          .setBlendMode(Phaser.BlendModes.ADD);
        this.tweens.add({
          targets: streak,
          y: streak.y - Phaser.Math.Between(70, 130),
          alpha: 0,
          duration: Phaser.Math.Between(260, 520),
          ease: "Sine.easeOut",
          onComplete: () => streak.destroy(),
        });
      }
    } else if (type.id === "shield") {
      this.playShockwave(x, y, 0xff8aaa, 230, 0.42);
    } else if (type.id === "stasis") {
      const wash = this.add.rectangle(0, 0, this.width, this.height, type.color, 0.12)
        .setOrigin(0)
        .setDepth(DEPTH.effects - 3)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({
        targets: wash,
        alpha: 0,
        duration: 680,
        ease: "Sine.easeOut",
        onComplete: () => wash.destroy(),
      });
    } else if (type.id === "overdrive") {
      this.cameras.main.shake(80, 0.003);
      this.playShockwave(x, y, type.color, 260, 0.34);
    }
  }

  playStarCollect(x, y, value) {
    this.playSfx("starPickup", { volume: 0.16, rate: Phaser.Math.FloatBetween(1.05, 1.24) });
    this.playShockwave(x, y, 0xffdf5b, 72, 0.46);
    this.playHitSpark(x, y, 0xfff0a3, 12, 0.75);
    this.drawFloatingText(x, y - 34, `+${value}`, 0xffdf5b);

    const flash = this.add.image(x, y, "currencyStar")
      .setScale(0.55)
      .setDepth(DEPTH.effects)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: flash,
      scale: 1.45,
      alpha: 0,
      angle: 180,
      duration: 420,
      ease: "Cubic.easeOut",
      onComplete: () => flash.destroy(),
    });
  }

  drawFloatingText(x, y, text, color) {
    const label = this.add.text(x, y, text, {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "17px",
      fontStyle: "bold",
      color: `#${color.toString(16).padStart(6, "0")}`,
      stroke: "#04101d",
      strokeThickness: 5,
    }).setOrigin(0.5).setDepth(DEPTH.hud);
    this.tweens.add({
      targets: label,
      y: y - 34,
      alpha: 0,
      duration: 950,
      ease: "Sine.easeOut",
      onComplete: () => label.destroy(),
    });
  }

  playHitSpark(x, y, color, count, power) {
    for (let i = 0; i < count; i += 1) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const distance = Phaser.Math.Between(18, 58) * power;
      const particle = this.add.rectangle(x, y, Phaser.Math.Between(2, 5), Phaser.Math.Between(2, 8), color, 1)
        .setDepth(DEPTH.effects)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        alpha: 0,
        scale: 0.25,
        angle: Phaser.Math.Between(-180, 180),
        duration: Phaser.Math.Between(180, 360),
        ease: "Cubic.easeOut",
        onComplete: () => particle.destroy(),
      });
    }
  }

  playEnemyExplosion(x, y, scale) {
    this.cameras.main.shake(85, 0.0025);
    this.playSfx("enemyExplosion", { volume: 0.2, rate: Phaser.Math.FloatBetween(0.92, 1.08) });
    this.playShockwave(x, y, 0xffd86b, 90 * scale);
    this.playHitSpark(x, y, 0xfff2a8, 20, 1.25);
    this.playHitSpark(x, y, 0x4de6ff, 12, 1);
    this.addExplosionParticles(x, y, 18, scale, [0xfff2a8, 0xff9b4a, 0x76eaff]);
    this.addSmokePuffs(x, y, 4, 0.72);
  }

  playBossExplosion(x, y, scale) {
    this.cameras.main.shake(520, 0.011);
    this.playSfx("bigExplosion", { volume: 0.28, rate: 0.82 });
    this.playSfx("lowBoom", { volume: 0.3, rate: 0.72 });
    this.playShockwave(x, y, 0xff5f86, 330 * scale, 0.68);
    this.playShockwave(x, y, 0x76eaff, 210 * scale, 0.44);
    this.playHitSpark(x, y, 0xffd1dc, 52, 2.15);
    this.playHitSpark(x, y, 0x78eaff, 34, 1.55);
    this.addExplosionParticles(x, y, 54, 1.35 * scale, [0xffbfd0, 0xff6f8d, 0x76eaff, 0xffdf5b]);
    this.addSmokePuffs(x, y, 12, 1.35 * scale);
    this.drawFloatingText(x, y - 94, this.t("bossDefeated"), 0xff9daf);

    for (let index = 0; index < 5; index += 1) {
      this.time.delayedCall(110 + index * 85, () => {
        const burstX = x + Phaser.Math.Between(-96, 96);
        const burstY = y + Phaser.Math.Between(-72, 72);
        this.playShockwave(burstX, burstY, index % 2 ? 0x76eaff : 0xff8aa8, 92, 0.46);
        this.playHitSpark(burstX, burstY, index % 2 ? 0x76eaff : 0xffbfd0, 18, 1.1);
        this.addSmokePuffs(burstX, burstY, 3, 0.7);
      });
    }
  }

  playMeteorHit(x, y, destroyed) {
    this.playShockwave(x, y, destroyed ? 0xffbe77 : 0xaec7d1, destroyed ? 68 : 34, destroyed ? 0.5 : 0.28);
    this.playHitSpark(x, y, destroyed ? 0xffc286 : 0xc3d3d6, destroyed ? 18 : 8, destroyed ? 1.2 : 0.65);
  }

  playRockBurst(x, y, scale) {
    this.cameras.main.shake(105, 0.0028);
    this.playSfx("bigExplosion", { volume: 0.18, rate: Phaser.Math.FloatBetween(0.88, 1.06) });
    this.addSmokePuffs(x, y, 6, 0.9 * scale);
    this.playHitSpark(x, y, 0xd7c2a3, 24, 1.35);
  }

  playPlayerImpact(x, y) {
    this.playSfx("lowBoom", { volume: 0.24, rate: Phaser.Math.FloatBetween(0.9, 1.02) });
    this.playShockwave(x, y, 0xff375c, 120, 0.64);
    this.playHitSpark(x, y, 0xff7a90, 20, 1.2);
    this.playHitSpark(x, y, 0x75ddff, 12, 0.9);
  }

  playShockwave(x, y, color, radius, alpha = 0.6) {
    const ring = this.add.circle(x, y, 10)
      .setStrokeStyle(3, color, alpha)
      .setFillStyle(color, 0.18)
      .setDepth(DEPTH.effects)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.tweens.add({
      targets: ring,
      radius,
      alpha: 0,
      duration: 360,
      ease: "Cubic.easeOut",
      onComplete: () => ring.destroy(),
    });
  }

  playImpactSlash(x, y, color, scale = 1) {
    const slash = this.add.rectangle(x, y, 42 * scale, 5 * scale, color, 0.92)
      .setDepth(DEPTH.effects + 1)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setRotation(Phaser.Math.FloatBetween(-0.9, 0.9));
    const glint = this.add.circle(x, y, 8 * scale, 0xffffff, 0.62)
      .setDepth(DEPTH.effects + 1)
      .setBlendMode(Phaser.BlendModes.ADD);

    this.tweens.add({
      targets: slash,
      scaleX: 2.2,
      scaleY: 0.28,
      alpha: 0,
      duration: 180,
      ease: "Cubic.easeOut",
      onComplete: () => slash.destroy(),
    });
    this.tweens.add({
      targets: glint,
      scale: 2.4,
      alpha: 0,
      duration: 150,
      ease: "Quad.easeOut",
      onComplete: () => glint.destroy(),
    });
  }

  addSmokePuffs(x, y, count, scale) {
    for (let i = 0; i < count; i += 1) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const distance = Phaser.Math.Between(8, 48);
      const puff = this.add.circle(x, y, Phaser.Math.FloatBetween(8, 18) * scale, 0xb8c0d2, 0.24)
        .setDepth(DEPTH.effects - 1)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({
        targets: puff,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        scale: Phaser.Math.FloatBetween(1.6, 2.65),
        alpha: 0,
        duration: Phaser.Math.Between(460, 760),
        ease: "Sine.easeOut",
        onComplete: () => puff.destroy(),
      });
    }
  }

  addExplosionParticles(x, y, count, scale = 1, colors = [0xfff2a8, 0xff8b4a, 0x76eaff]) {
    for (let i = 0; i < count; i += 1) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const speed = Phaser.Math.FloatBetween(90, 390) * scale;
      const lifetime = Phaser.Math.Between(260, 620);
      const color = Phaser.Utils.Array.GetRandom(colors);
      const particle = i % 3 === 0
        ? this.add.rectangle(x, y, Phaser.Math.FloatBetween(4, 9) * scale, Phaser.Math.FloatBetween(1.6, 3.4) * scale, color, 0.95)
        : this.add.circle(x, y, Phaser.Math.FloatBetween(2, 4.6) * scale, color, 0.95);
      particle
        .setDepth(DEPTH.effects + 1)
        .setBlendMode(Phaser.BlendModes.ADD);

      this.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * speed,
        y: y + Math.sin(angle) * speed,
        scale: 0.05,
        alpha: 0,
        angle: Phaser.Math.Between(-180, 180),
        duration: lifetime,
        ease: "Cubic.easeOut",
        onComplete: () => particle.destroy(),
      });
    }
  }

  flashTarget(target, tint, duration) {
    target.setTintFill(tint);
    this.time.delayedCall(duration, () => {
      if (target.active) target.clearTint();
    });
  }

  flashVignette() {
    this.hitVignette.setAlpha(0.28);
    this.tweens.add({
      targets: this.hitVignette,
      alpha: 0,
      duration: 420,
      ease: "Quad.easeOut",
    });
  }

  getUpgradeCost(id) {
    const level = this.upgrades?.[id] || 0;
    const config = UPGRADE_CONFIG[id];
    if (!config || level >= config.max) return null;
    return config.costs[level];
  }

  buyUpgrade(id) {
    const cost = this.getUpgradeCost(id);
    if (!cost || this.starCurrency < cost) {
      this.playSfx("impact", { volume: 0.14, rate: 0.82 });
      return;
    }

    this.starCurrency -= cost;
    this.upgrades[id] = (this.upgrades[id] || 0) + 1;
    this.saveStoredNumber(STORAGE_KEYS.stars, this.starCurrency);
    this.saveStoredUpgrades();
    this.maxLives = this.getBaseMaxLives();
    this.playSfx("starPickup", { volume: 0.24, rate: 1.18 });
    this.updateMenuStats();
    this.updateHudText();
    this.updateUpgradeOverlay();
    this.updateGameOverWalletText();
  }

  createUpgradeOverlay() {
    if (this.upgradeOverlay) this.upgradeOverlay.destroy(true);
    this.resetCameraForOverlay();

    this.upgradeOverlay = this.add.container(0, 0)
      .setDepth(DEPTH.overlay + 10)
      .setVisible(false)
      .setScrollFactor(0);
    const shade = this.add.rectangle(0, 0, this.width, this.height, 0x01040d, 0.76)
      .setOrigin(0)
      .setInteractive();
    const panelWidth = Math.min(610, this.width - 48);
    const panelHeight = 430;
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const panel = this.add.rectangle(centerX, centerY, panelWidth, panelHeight, 0x071224, 0.97)
      .setStrokeStyle(2, 0x9deaff, 0.88);
    const title = this.add.text(centerX, centerY - 172, this.t("upgrades"), {
      fontFamily: FONT_UI,
      fontSize: "34px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 6,
    }).setOrigin(0.5);
    const wallet = this.add.text(centerX, centerY - 124, "", {
      fontFamily: FONT_PIXEL,
      fontSize: "16px",
      color: "#ffe890",
      stroke: "#06101e",
      strokeThickness: 4,
    }).setOrigin(0.5);

    this.upgradeOverlay.add([shade, panel, title, wallet]);
    this.upgradeWalletText = wallet;
    this.upgradeRows = [
      this.createUpgradeRow("maxLives", this.t("upgradeLives"), centerY - 62),
      this.createUpgradeRow("fireRate", this.t("upgradeFire"), centerY + 22),
      this.createUpgradeRow("moveSpeed", this.t("upgradeSpeed"), centerY + 106),
    ];
    this.upgradeRows.forEach((row) => this.upgradeOverlay.add([row.bg, row.label, row.status, row.button.button, row.button.text]));

    const closeButton = this.createMenuButton(this.t("close"), 156, 46, () => this.hideUpgradeOverlay(), () => this.upgradeOverlay?.visible);
    const resetButton = this.createMenuButton(this.t("resetGame"), 214, 46, () => this.resetStoredProgress(), () => this.upgradeOverlay?.visible);
    closeButton.setPosition(centerX - 118, centerY + 174);
    resetButton.setPosition(centerX + 118, centerY + 174);
    this.upgradeOverlay.add([closeButton.button, closeButton.text, resetButton.button, resetButton.text]);
    this.upgradeCloseButton = closeButton;
    this.upgradeResetButton = resetButton;
    this.pinToScreen([
      this.upgradeOverlay,
      shade,
      panel,
      title,
      wallet,
      ...this.upgradeRows.flatMap((row) => [row.bg, row.label, row.status, row.button.button, row.button.text]),
      closeButton.button,
      closeButton.text,
      resetButton.button,
      resetButton.text,
    ]);
    this.updateUpgradeOverlay();
  }

  createUpgradeRow(id, label, y) {
    const centerX = this.width / 2;
    const rowWidth = Math.min(520, this.width - 88);
    const bg = this.add.rectangle(centerX, y, rowWidth, 62, 0x0d1d35, 0.74)
      .setStrokeStyle(1, 0x75dfff, 0.32);
    const nameText = this.add.text(centerX - rowWidth / 2 + 20, y - 9, label, {
      fontFamily: FONT_UI,
      fontSize: "18px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#06101e",
      strokeThickness: 4,
    }).setOrigin(0, 0.5);
    const status = this.add.text(centerX - rowWidth / 2 + 20, y + 15, "", {
      fontFamily: FONT_PIXEL,
      fontSize: "12px",
      color: "#9ee8ff",
      stroke: "#06101e",
      strokeThickness: 3,
    }).setOrigin(0, 0.5);
    const button = this.createMenuButton("", 150, 42, () => this.buyUpgrade(id), () => this.upgradeOverlay?.visible);
    button.setPosition(centerX + rowWidth / 2 - 88, y);
    return { id, bg, label: nameText, status, button };
  }

  showUpgradeOverlay() {
    this.createUpgradeOverlay();
    this.upgradeOverlay.setVisible(true);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.16, rate: 1.04 });
  }

  hideUpgradeOverlay() {
    this.upgradeOverlay?.setVisible(false);
    this.setCanvasCursor("default");
    this.playSfx("ui", { volume: 0.12, rate: 0.92 });
  }

  updateUpgradeOverlay() {
    if (!this.upgradeWalletText || !this.upgradeRows) return;

    this.upgradeWalletText.setText(`${this.t("wallet")} ${this.starCurrency}`);
    this.upgradeRows.forEach((row) => {
      const level = this.upgrades?.[row.id] || 0;
      const max = UPGRADE_CONFIG[row.id].max;
      const cost = this.getUpgradeCost(row.id);
      row.status.setText(`TIER ${level}/${max}`);
      row.button.text.setText(cost ? `${this.t("buy")} ${cost}` : this.t("bought"));
      row.button.button
        .setFillStyle(cost && this.starCurrency >= cost ? 0x1f86ff : 0x27435e, 1)
        .setStrokeStyle(2, cost ? 0xb6dbff : 0x6d8195, cost ? 0.95 : 0.62);
    });
  }

  updateGameOverWalletText() {
    if (this.gameOverStarsText) {
      this.gameOverStarsText.setText(`${this.t("earned")} ${this.runStars}   ${this.t("wallet")} ${this.starCurrency}`);
    }
  }

  awardBossReward(x, y, reward = 25) {
    this.starCurrency += reward;
    this.runStars += reward;
    this.saveStoredNumber(STORAGE_KEYS.stars, this.starCurrency);
    if (this.lives > 0 && this.lives < this.maxLives) {
      this.lives += 1;
      this.updateHullPips();
      this.drawFloatingText(this.player.x, this.player.y - 72, "+1 HULL", 0x76f2ff);
    }
    this.updateCurrencyText();
    this.updateMenuStats();
    this.updateGameOverWalletText();
    this.drawFloatingText(x, y - 118, `+${reward} ${this.t("stars")}`, 0xffdf5b);
    this.drawFloatingText(x, y - 146, this.t("bossReward"), 0xff9daf);
    this.playSfx("starPickup", { volume: 0.28, rate: 0.86 });
    this.time.delayedCall(280, () => {
      if (!this.isGameOver) {
        const x = this.isSurvivalMode() ? this.player.x + Phaser.Math.Between(-170, 170) : Phaser.Math.Clamp(this.player.x + Phaser.Math.Between(-120, 120), 70, this.width - 70);
        const y = this.isSurvivalMode() ? this.player.y + Phaser.Math.Between(-150, 150) : Math.max(80, this.player.y - 260);
        this.spawnPowerup({ x, y });
      }
    });
  }

  endGame() {
    this.isGameOver = true;
    this.resetCameraForOverlay();
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      this.saveStoredNumber(STORAGE_KEYS.bestScore, this.bestScore);
    }
    this.updateMenuStats();
    this.player.setVelocity(0, 0);
    this.physics.pause();
    this.engineFlame.setAlpha(0);
    this.playerDamage.setTexture("playerDamage2").setAlpha(1);
    this.setCanvasCursor("default");
    this.playSfx("lowBoom", { volume: 0.28, rate: 0.82 });
    this.playMusic("musicMenu", { volume: 0.16, loop: true, fade: 900 });

    const overlay = this.add.graphics().setDepth(DEPTH.overlay).setScrollFactor(0);
    overlay.fillStyle(0x020713, 0.78);
    overlay.fillRect(0, 0, this.width, this.height);

    const panelWidth = Math.min(540, this.width - 48);
    const panelHeight = 420;
    const panelX = this.width / 2 - panelWidth / 2;
    const panelY = this.height / 2 - panelHeight / 2;
    overlay.lineStyle(2, 0x6db6ff, 0.75);
    overlay.fillStyle(0x071124, 0.9);
    overlay.fillRoundedRect(panelX, panelY, panelWidth, panelHeight, 18);
    overlay.strokeRoundedRect(panelX, panelY, panelWidth, panelHeight, 18);

    this.add.text(this.width / 2, this.height / 2 - 132, this.t("gameOver"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "54px",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#0a152a",
      strokeThickness: 7,
    }).setOrigin(0.5).setDepth(DEPTH.overlay + 1).setScrollFactor(0);

    this.add.text(this.width / 2, this.height / 2 - 66, `${this.t("finalScore")} ${this.score}`, {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "26px",
      color: "#9ee8ff",
      stroke: "#0a152a",
      strokeThickness: 5,
    }).setOrigin(0.5).setDepth(DEPTH.overlay + 1).setScrollFactor(0);

    this.gameOverStarsText = this.add.text(this.width / 2, this.height / 2 - 20, `${this.t("earned")} ${this.runStars}   ${this.t("wallet")} ${this.starCurrency}`, {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "20px",
      fontStyle: "bold",
      color: "#ffe890",
      stroke: "#0a152a",
      strokeThickness: 5,
    }).setOrigin(0.5).setDepth(DEPTH.overlay + 1).setScrollFactor(0);

    const upgradesButton = this.add.rectangle(this.width / 2, this.height / 2 + 62, 220, 56, 0x7b38ff, 1)
      .setStrokeStyle(2, 0xe1c7ff, 0.95)
      .setDepth(DEPTH.overlay + 1)
      .setScrollFactor(0)
      .setInteractive();

    this.add.text(this.width / 2, this.height / 2 + 62, this.t("upgrades"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "23px",
      fontStyle: "bold",
      color: "#ffffff",
    }).setOrigin(0.5).setDepth(DEPTH.overlay + 2).setScrollFactor(0);

    const restartButton = this.add.rectangle(this.width / 2, this.height / 2 + 136, 196, 54, 0x1f86ff, 1)
      .setStrokeStyle(2, 0xb6dbff, 0.95)
      .setDepth(DEPTH.overlay + 1)
      .setScrollFactor(0)
      .setInteractive();

    this.add.text(this.width / 2, this.height / 2 + 136, this.t("menu"), {
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      fontSize: "24px",
      fontStyle: "bold",
      color: "#ffffff",
    }).setOrigin(0.5).setDepth(DEPTH.overlay + 2).setScrollFactor(0);

    [upgradesButton, restartButton].forEach((button) => {
      button.on("pointerover", () => this.setCanvasCursor("pointer"));
      button.on("pointerout", () => this.setCanvasCursor("default"));
    });
    upgradesButton.on("pointerdown", () => {
      this.showUpgradeOverlay();
    });
    restartButton.on("pointerdown", () => {
      this.returnToMainMenu();
    });
  }

  handleResize(gameSize) {
    const width = gameSize.width;
    const height = gameSize.height;
    if (this.gameStarted && this.isSurvivalMode()) {
      const worldSize = 200000;
      const half = worldSize / 2;
      this.physics.world.setBounds(-half, -half, worldSize, worldSize);
      this.cameras.main.setBounds(-half, -half, worldSize, worldSize);
    } else {
      this.physics.world.setBounds(0, 0, width, height);
      this.cameras.main.setBounds(0, 0, width, height);
    }
    this.background.setSize(width, height);
    this.starLayer.setSize(width, height);
    this.hitVignette.setSize(width, height);
    this.hudPanel?.setPosition(18, 16);
    this.wavePanel?.setPosition(width - 18, 16);
    this.comboText?.setPosition(width - 24, 22);
    this.pauseOverlayShade.setSize(width, height);
    this.pauseOverlayTitle.setPosition(width / 2, height / 2 - 38);
    this.pauseOverlayHint.setPosition(width / 2, height / 2 + 30);
    this.pauseMenuButton?.setPosition(width / 2, height / 2 + 104);
    if (this.menuOverlay) {
      this.layoutMainMenu();
      this.layoutGuideOverlay();
      this.layoutControlsHelpOverlay();
    }

    if (!this.isGameOver) {
      if (!this.isSurvivalMode()) {
        this.player.setPosition(Phaser.Math.Clamp(this.player.x, 50, width - 50), Phaser.Math.Clamp(this.player.y, 80, height - 64));
      }
      this.comboText.setPosition(width - 24, 22);
      this.updateHullPips();
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game-container",
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#030610",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: ShooterScene,
};

window.addEventListener("load", () => {
  window.voidStrikeGame = new Phaser.Game(config);
});
