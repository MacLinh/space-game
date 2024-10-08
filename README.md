# space-game

**[Link to play here](https://maclinh.github.io/space-game/)**

*Sprite sheets thanks to https://github.com/obaida-adi*
<br/>
This is Sprite animated game built with RxJS, HTML canvas, and deployed as an Angular app on Github Pages.

This was originally built as an exercise to explore algorithms, animations, collision handling, explosions, physics, and geometry. As such, no formal framework or libraries were used. 

Some challenges that were resolved:

 - Keeping the animations smooth when a large number of sprites are on screen
 - alien sprites turning to face the player while in motion
 - explosions that are larger than the original sprite
 - detecting collisions correctly
 - hp bars and different damage depending on weapon
 - splash damage 
 - sound effects that can be toggled on or off
 - missiles that accelerate to a maximum speed
 - sprite sheets of different length and thus different refresh rates
 - keeping track of ammo and displaying
 - game difficulty scaling
 - users pressing more than one key at a time
 - deploying and hosting the app
 - design and architecture 

The game was designed to be played while users were waiting in the lobby of Mitel's meeting app. As such, the game component can receive external instructions to terminate early, stream messages, and save high score via the `gameService` api.

<br/>

## To build this app locally:

This project is not kept up to date so we will use node version manager to install an older version

    nvm install 12.0.0
    nvm use 12.0.0
    npm ci

To build the app

    npm run build
to serve the app locally

    npm run start

