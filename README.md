# game-project# mbocon.github.io
Game link :

https://mbocon.github.io/

Technologies used : 

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)<br>
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)<br>
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)<br>
[jQuery](https://jquery.com/)<br>
[jQuery UI](https://jqueryui.com/)<br>

Quick sketch of page layout and code structure :

<img src="CSS/img/draft.jpg" width='450px'><br>
<img src="CSS/img/psuedo.jpg" width='450px' height='350px'><br>

GAME FLOW :

Player 1 starts by dragging and dropping submarines to the player grid<br>
Once player board is set-up the Player goes first by targeting/clicking an enemy square<br>
If a hidden enemy is located on the selected square the background-color of that square will change to red to indicate a hit<br>
If no enemy is present the background-color changes to teal to indicate a miss<br>
After player selects an enemy square the CPU retaliates by selecting a random player square<br>
If the selected player square holds a ship and the CPU selected correctly the color of players ship will change to red to indicate a hit<br>
Game continues until all player ships or all enemy ships are destroyed and the winner is announced


UNRESOLVED BUGS/ISSUES :

- Figure out why enemy ships are sometimes doubling up at same location on random deployment<br>
- Fix game logic to prevent double clicking when the player attacks to prevent destroyed enemy ship from changing colors again<br>
- Fix occasional double clicking on drag/drop for player deployment<br>

STILL NEED TO IMPLEMENT FOR BETTER UX :

- Change background color of randomly selected div if cpu attack misses<br>
- Add modals for when player destroys enemy<br>
- Need to build cross-platform responsiveness<br>





