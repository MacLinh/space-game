const BaseFolder = 'assets/game';
const SFXBaseFolder = `${BaseFolder}/sfx`;
export function loadImages() {
  return new Promise((resolve, reject) => {
    const res: any = {};
    let numImages = 0;
    let numLoaded = 0;
    function loadImage(s: string) {
      numImages++;
      const img = new Image();
      img.src = s;
      img.onload = () => {
        numLoaded++;
        if (numLoaded === numImages) {
          resolve(res);
        }
      };
      return img;
    }

    res.asteroids = {
      asteroid1: [
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid1.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid2.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid3.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid4.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid5.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid6.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid7.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid8.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid9.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid10.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid11.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid12.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid13.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid14.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid15.svg`)
      ],
      asteroid2: [
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid1.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid2.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid3.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid4.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid5.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid6.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid7.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid8.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid9.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid10.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid11.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid12.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid13.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid14.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid15.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid16.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid17.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid18.svg`)
      ],
      asteroid3: [
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid1.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid2.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid3.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid4.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid5.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid6.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid7.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid8.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid9.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid10.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid11.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid12.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid13.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid14.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid15.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid16.svg`),
        loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid17.svg`)
      ],
      damaged: {
        asteroid1: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid1.svg`)],
        asteroid2: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid2.svg`)],
        asteroid3: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid3.svg`)]
      }
    };
    res.aliens = {
      alien1: [
        loadImage(`${BaseFolder}/aliens/alien1/alien1.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien2.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien3.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien4.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien5.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien6.svg`),
        loadImage(`${BaseFolder}/aliens/alien1/alien7.svg`)
      ],
      alien2: [
        loadImage(`${BaseFolder}/aliens/alien2/alien1.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien2.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien3.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien4.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien5.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien6.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien7.svg`),
        loadImage(`${BaseFolder}/aliens/alien2/alien8.svg`)
      ]
    };
    res.coin = [
      loadImage(`${BaseFolder}/ammo/ammo1.svg`),
      loadImage(`${BaseFolder}/ammo/ammo2.svg`),
      loadImage(`${BaseFolder}/ammo/ammo3.svg`),
      loadImage(`${BaseFolder}/ammo/ammo4.svg`),
      loadImage(`${BaseFolder}/ammo/ammo5.svg`),
      loadImage(`${BaseFolder}/ammo/ammo6.svg`),
      loadImage(`${BaseFolder}/ammo/ammo7.svg`),
      loadImage(`${BaseFolder}/ammo/ammo8.svg`),
      loadImage(`${BaseFolder}/ammo/ammo9.svg`)
    ];
    res.coinShine = [
        loadImage(`${BaseFolder}/ammo/shine/shine1.svg`),
        loadImage(`${BaseFolder}/ammo/shine/shine2.svg`),
        loadImage(`${BaseFolder}/ammo/shine/shine3.svg`),
        loadImage(`${BaseFolder}/ammo/shine/shine4.svg`),
        loadImage(`${BaseFolder}/ammo/shine/shine5.svg`)
    ];
    res.ship = [
      loadImage(`${BaseFolder}/ship/ship1.svg`),
      loadImage(`${BaseFolder}/ship/ship2.svg`),
      loadImage(`${BaseFolder}/ship/ship3.svg`),
      loadImage(`${BaseFolder}/ship/ship4.svg`),
      loadImage(`${BaseFolder}/ship/ship5.svg`),
      loadImage(`${BaseFolder}/ship/ship6.svg`)
    ];
    res.damagedShip = [loadImage(`${BaseFolder}/ship/damaged-ship/ship.svg`)];
    res.explosions = {
      asteroid: [
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion1.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion2.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion3.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion4.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion5.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion6.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion7.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion8.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion9.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion10.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion11.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion12.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion13.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion14.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion15.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion16.svg`),
        loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion17.svg`)
      ],
      ship: [
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion1.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion2.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion3.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion4.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion5.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion6.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion7.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion8.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion9.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion10.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion11.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion12.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion13.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion14.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion15.svg`),
        loadImage(`${BaseFolder}/explosions/ship-explosion/explosion16.svg`)
      ],
      laser: [
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion1.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion2.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion3.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion4.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion5.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion6.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion7.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion8.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion9.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion10.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion11.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion12.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion13.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion14.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion15.svg`),
        loadImage(`${BaseFolder}/explosions/laser-explosion/explosion16.svg`)
      ],
      alienLaser: [
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion1.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion2.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion3.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion4.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion5.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion6.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion7.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion8.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion9.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion10.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion11.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion12.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion13.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion14.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion15.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion16.svg`),
        loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion17.svg`)
      ]
    };
    res.mainMenu = loadImage(`${BaseFolder}/main-menu.svg`);
    res.mainMenuMeetingStarted = loadImage(`${BaseFolder}/main-menu-2.svg`);
    res.helpMenu = loadImage(`${BaseFolder}/instructions.svg`);
    res.gameOverMenu = loadImage(`${BaseFolder}/game-over.svg`);
    res.gameOverMenuMeetingStarted = loadImage(`${BaseFolder}/game-over-2.svg`);
    res.pointer = loadImage(`${BaseFolder}/pointer.svg`);
    res.toolbars = {
      container: loadImage(`${BaseFolder}/toolbars/healthbar-container.svg`),
      healthbar: loadImage(`${BaseFolder}/toolbars/healthbar.svg`),
      ammobar: loadImage(`${BaseFolder}/toolbars/ammobar.svg`),
      distancebar: loadImage(`${BaseFolder}/toolbars/distancebar.svg`)
    };
    res.toolbarsTransparent = {
      container: loadImage(`${BaseFolder}/toolbars/healthbar-container-transparent.svg`),
      healthbar: loadImage(`${BaseFolder}/toolbars/healthbar-transparent.svg`),
      ammobar: loadImage(`${BaseFolder}/toolbars/ammobar-transparent.svg`),
      distancebar: loadImage(`${BaseFolder}/toolbars/distancebar-transparent.svg`)
    };
    res.mitelbar = loadImage(`${BaseFolder}/mitelbar.svg`);
    res.laser = [loadImage(`${BaseFolder}/lasers/laser.svg`)];
    res.alienLaser = [loadImage(`${BaseFolder}/lasers/alien-laser.svg`)];
    res.comet = [
      loadImage(`${BaseFolder}/lasers/comet/comet1.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet2.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet3.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet4.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet5.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet6.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet7.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet8.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet9.svg`),
      loadImage(`${BaseFolder}/lasers/comet/comet10.svg`)
    ];
    res.bomb = [
      loadImage(`${BaseFolder}/lasers/bomb/bomb1.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb2.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb3.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb4.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb5.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb6.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb7.svg`),
      loadImage(`${BaseFolder}/lasers/bomb/bomb8.svg`)
    ];
    res.missile = [
      loadImage(`${BaseFolder}/missile/missile1.svg`),
      loadImage(`${BaseFolder}/missile/missile2.svg`),
      loadImage(`${BaseFolder}/missile/missile3.svg`),
      loadImage(`${BaseFolder}/missile/missile4.svg`),
      loadImage(`${BaseFolder}/missile/missile5.svg`),
      loadImage(`${BaseFolder}/missile/missile6.svg`),
      loadImage(`${BaseFolder}/missile/missile7.svg`),
      loadImage(`${BaseFolder}/missile/missile8.svg`),
      loadImage(`${BaseFolder}/missile/missile9.svg`),
      loadImage(`${BaseFolder}/missile/missile10.svg`)
    ];
    res.background = loadImage(`${BaseFolder}/background.svg`);
    res.meetingStarted = [loadImage(`${BaseFolder}/meeting-started-notification.svg`)];
    return res;
  });
}

export function loadSong() {
  const song = new Audio(`${SFXBaseFolder}/mitel-space-song.mp3`);
  song.volume = 0.64;
  return song;
}

export function loadBoost() {
  const boost = new Audio(`${SFXBaseFolder}/boost.mp3`);
  return boost;
}

export function loadLaser() {
  const laser = new Audio(`${SFXBaseFolder}/laser.mp3`);
  return laser;
}

export function loadMissile() {
  const missile = new Audio(`${SFXBaseFolder}/missile.mp3`);
  return missile;
}

export function loadNoAmmo() {
  const noAmmo = new Audio(`${SFXBaseFolder}/no-ammo.mp3`);
  return noAmmo;
}

export function loadDamage() {
  const damage = new Audio(`${SFXBaseFolder}/ship-damage.mp3`);
  return damage;
}

export function loadShipExplosion() {
  const shipExplosion = new Audio(`${SFXBaseFolder}/ship-explosion.mp3`);
  return shipExplosion;
}

export function loadAsteroidExplosion() {
  const asteroidExplosion = new Audio(`${SFXBaseFolder}/asteroid-explosion.mp3`);
  return asteroidExplosion;
}
