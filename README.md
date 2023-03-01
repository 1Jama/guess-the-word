## Guess the Spanish Word Web App
Web application for learning spanish with 2 seperate modes, and easy mode along with a more difficiult hard mode.

Done in React.js, Node.js and MongoDB.

Currently hosted on https://guess-the-spanish-word.fly.dev/

## Easy Mode
The easy mode shows the current spanish word the user must guess correctly along with 4 options to choose from. There is 1 correct answer, and 3 other choices which are incorrect. The user must successfuly choose the correct answer to gain a point, and successively get correct answers to continue to gain points. Wrong answers result in score being reset back to 0. 

![Alt text](https://i.imgur.com/G18qDuc.jpg "Easy mode")


## Hard Mode
The hard mode is slightly more difficult, a Spanish word is displayed and must be translated, however the user must input their guess into a text field with no words to choose from. Because langues in general are very context dependant, a synonym API is used to generate all similar words to the users guess then matched up woth the translation in the database, and awarded a point if there is a match. Like trhe easy mode successive correct answers are awarded points with a wrong answer resetting the score back to 0.

![Alt text](https://i.imgur.com/UFblVX4.jpg "Hard mode")
