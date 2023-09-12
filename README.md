## Guess the Spanish Word Web App
Web application for learning Spanish with 2 separate modes, and easy mode along with a more difficult hard mode.

Done in React.js, Node.js/Express and MongoDB.

Currently hosted on https://guess-the-spanish-word.fly.dev/

![Alt text](https://i.imgur.com/mYfypyh.jpg "Landing Page")

## Easy Mode
The easy mode shows the current Spanish word the user must guess correctly along with 4 options to choose from. There is 1 correct answer, and 3 other choices which are incorrect. The user must successfully choose the correct answer to gain a point, and successively get correct answers to continue to gain points. Wrong answers result in score being reset back to 0. 

![Alt text](https://i.imgur.com/iaHceHz.jpg "Easy mode")


## Hard Mode
The hard mode is slightly more difficult, a Spanish word is displayed and must be translated, however the user must input their guess into a text field with no words to choose from. Because languages in general are very context dependant, a synonym API is used to generate all similar words to the users guess then matched up with the translation in the database, and awarded a point if there is a match. Like the easy mode successive correct answers are awarded points with a wrong answer resetting the score back to 0.

![Alt text](https://i.imgur.com/iRN2neT.jpg "Hard mode")
