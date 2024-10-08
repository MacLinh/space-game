import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  meetingStarted = new Subject<any>();

  scoreSubmitted = new Subject<any>();

  levelChanged = new Subject<number>();

  gameClosed = new Subject();

  notified = new Subject<any>();

  constructor() {}

  /**
   * prevent user from starting new games so they can get on with work
   * @param urgent also lose the game for user now
   * @param customImage custom image to use for the bomb
   * @return Promise that is fulfilled once user has submitted their score and rejected if user closes game
   *    without submitting
   */
  signalMeetingStarted(urgent = false, customImage?: HTMLImageElement): Promise<any> {
    this.meetingStarted.next({ urgent, customImage });
    return new Promise((resolve, reject) => {
      this.scoreSubmitted.subscribe(score => resolve(score));
      this.gameClosed.subscribe(() => reject('GAME_CLOSED'));
    });
  }

  /**
   * end the game now
   */
  forceStopGame() {
    this.gameClosed.next();
  }

  /**
   * sets difficulty to specified level
   * @param level
   */
  setLevel(level: number) {
    if (level <= 0) {
      level = 1;
    }
    if (level > 10) {
      level = 10;
    }

    this.levelChanged.next(level);
  }

  /**
   * display messages in game
   * @param msg message
   * @param frames frames to display
   */
  notify(msg: string, frames = 150) {
    this.notified.next({ msg, frames });
  }
}
