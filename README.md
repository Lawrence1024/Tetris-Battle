# Tetris-Battle
This is a Tetris game that supports single and multi-player options. Written in 2018 with JavaScript, HTML, CSS.

Things to notice in the project:
	
1. There are two modes (single-player and multi-player).

	(found in Final_Tetris.html)

2. The player's name is collected in order to display later next to their scores.

	(found in UserNameMenu.js)

3. The first letter of the name inputed in single player mode will be capitalized, and the rest of the letters will be lower cased.

	(found in UserNameMenu.js)
4. There are rankings saved in local storage for high scores 
set in the single-player mode. There is a high score page where the
 rankings are displayed in a "textarea".

	(found in library.js and Menu.js)

5. Trash (lines of black blocks) could be sent and cleared in the multi-player mode.
	(found in PlayField.js)

6. There is a button that clears all high scores and ranks in local storage. However,
 people need a password in order to execute the command. In other words,
 unless people have the password, they can't clear the record.
	
	(found in Menu.js)

7. There is a "hold" function in multi-player player mode. The "hold" function
 is not available in single player mode. The "hold" function allows the player to hold a block and switch it out for another block.
					(found in Holder.js)

8. After a multi-player game, the trophy on the game over page will have the
 winner's name. Additionally, a crown will appear above the winner's name.

	(found in library.js)

9. After a single-player game, the trophy on the final page will have the
 current ranking of the player (comparing to the high score page).
		
	(found in library.js)

10. In the multi-player mode, you can hold on to a key and move your
 block without being affected by your opponent's movement. Notice that
 there is a temporary pause after you first hold onto the key, and the block
 will keep moving afterwards.

	(found in library.js)

11. There is background music when the game is playing. There are sound effects when
 bombs are ignited, and when two or more lines are cleared at the same time.

	(found in Final_Tetris.html)

12. The menu page is a canvas wrapper and the buttons have shading in order
 to make them look more 3D.
	(found in Menu.js)

13. There is a "controls" page where the player can learn the controls of the two
 different game modes.

	(found in Menu.js)

14. Brief explanations about the game mode will appear when the player hovers their
 mouse over the button.

	(found in Menu.js)

15. In the multi-player mode, the game will end once one of the players are
 "knocked out" or the timer (3 minutes) runs out. Whoever gets knocked
 out will automatically lose the game. If no one gets knocked out,
 whoever has the 	higher score wins.

	(found in PlayField.js and TimeArea.js)

16. There is a "play again" option at the final page when the game is over.

	(found in Menu.js)

17. When there are same names on the ranking list, the system will only
 record the higher score.

	(found in library.js)
