import { Controls } from './player';
import { GameComponent } from './game.component';

export class Menu {
  state: 'MAIN' | 'HELP' | 'GAME_OVER';
  selected: 'START' | 'HELP';

  name = '';
  validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+?.';
  maxNameLength = 10;

  cursorFlash = 0;

  constructor(private images, private game: GameComponent) {
    this.state = 'MAIN';
    this.selected = 'START';
  }

  draw(c: CanvasRenderingContext2D) {
    let img;
    switch (this.state) {
      case 'MAIN': {
        img = this.game.meetingStarted ? this.images.mainMenuMeetingStarted : this.images.mainMenu;
        c.drawImage(img, 0, 0, this.game.width, this.game.height);
        if (!this.game.meetingStarted) {
          switch (this.selected) {
            case 'START': {
              c.drawImage(this.images.pointer, 217, 399 - this.images.pointer.height);
              break;
            }
            case 'HELP': {
              c.drawImage(this.images.pointer, 217, 462 - this.images.pointer.height);
              break;
            }
            default: {
              throw Error('Implement this');
            }
          }
        }
        break;
      }
      case 'HELP': {
        img = this.images.helpMenu;
        c.drawImage(img, 0, 0, this.game.width, this.game.height);
        if (this.game.meetingStarted) {
          this.state = 'MAIN';
        }
        break;
      }
      case 'GAME_OVER': {
        img = this.game.meetingStarted ? this.images.gameOverMenuMeetingStarted : this.images.gameOverMenu;
        c.drawImage(img, 0, 0, this.game.width, this.game.height);
        c.font = '32px Montserrat';
        c.fillStyle = '#FFFFFF';
        c.fillText(this.game.score + '', 350, 240);
        c.fillText(this.game.highScore + '', 350, 290);

        c.fillStyle = '#000000';
        if (this.cursorFlash < 25 && this.name.length < this.maxNameLength) {
          c.fillText(this.name + '_', 150, 490);
        } else {
          c.fillText(this.name, 150, 490);
        }
        this.cursorFlash++;
        if (this.cursorFlash === 50) {
          this.cursorFlash = 0;
        }
        break;
      }
      default: {
        throw Error('Implement this');
      }
    }
  }

  keyDown(key: string) {
    switch (this.state) {
      case 'HELP':
      case 'MAIN': {
        if (this.game.meetingStarted) {
          break;
        }
        switch (key) {
          case Controls.up:
          case Controls.left: {
            if (this.selected !== 'START') {
              this.selected = 'START';
            }
            break;
          }
          case Controls.down:
          case Controls.right: {
            if (this.selected !== 'HELP') {
              this.selected = 'HELP';
            }
            break;
          }
          case Controls.fire:
          case 'Enter': {
            switch (this.state) {
              case 'MAIN': {
                if (this.selected === 'START') {
                  this.game.startGame(this.game.keys['Shift']);
                } else {
                  this.state = 'HELP';
                }
                break;
              }
              case 'HELP': {
                this.state = 'MAIN';
              }
            }
            break;
          }
        }
        break;
      }
      case 'GAME_OVER': {
        switch (key) {
          case Controls.fire: {
            if (this.game.meetingStarted) {
              this.state = 'MAIN';
            } else {
              this.game.startGame(this.game.keys['Shift']);
            }
            break;
          }
          case 'Enter': {
            // non empty
            if (this.name) {
              this.submitScore(this.name, this.game.highScore);
              this.state = 'MAIN';
            }
            break;
          }
          case 'Delete':
          case 'Backspace': {
            if (this.name.length) {
              this.name = this.name.slice(0, -1);
            }
            break;
          }
          default: {
            if (this.name.length < this.maxNameLength && this.validCharacters.indexOf(key) !== -1) {
              // this.cursor = false;
              // setTimeout(() => this.cursor = true;)
              this.name += key;
            }
            break;
          }
        }
      }
    }
  }

  submitScore(name, score) {
    // todo make api call
    console.log(`Name: ${name} Score: ${score}`);
    this.game.gameService.scoreSubmitted.next({ name, score });
  }
}
