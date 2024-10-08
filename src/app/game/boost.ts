import { Sprite } from './sprite';
import { Player } from './player';
import { loadBoost } from './assets';

export class Boost extends Sprite {
  applyBoost(player: Player) {
    player.ammo += 10;
    this.alive = false;
    this.audio = loadBoost();
  }
}
