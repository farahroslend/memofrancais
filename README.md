# Memo: A Flashcards & Quiz Application

## Project Brief
### Creating my own project
* Build a flashcard deck of 20 cards that has a French word on one side and its English word equivalent on the otherside.
* User is able to flip the cards around, and browse through the other cards in the deck.
* The cards updates its content when the user explores the deck forwards and backwards.
* Build a quiz of 20 questions. User will have to choose between 2 English words that would be the meaning for the word in French.
* The user will be informed if he/she had picked the right or wrong answer.
* The contents of the quiz will update itself, when the user decides to move onto the next French word.


## UX
Design | Importance
--- | ---
Functionality | 9/10
User experiences | 6/10
HTML / CSS | 5/10

**The project aims to be educational, so there is a strong emphasis on functionality.**

## Features

### Available
**Flashcards**
  - `flip()`
   -- allows user to flip forwards, backwards about the x-axis to view French and English words. This function is supported by JQuery.
  - `click_updatesCounterRIGHT()`, `click_updatesCounterLEFT()`
  -- keeps a record in a form of a number (known as the 'counter'), as the user is progressing. This number will also be used to index the French and English words, and update the current content of the flashcard. For example, when the user clicks to move onto the next/previous flashcard, the counter will increase/decrease by 1 and the flashcard will index counter -1 of the French/English words array.

**Quiz**
- `correctOptionPlacer()`
-- randomly places the correct English equivalent meaning for the French word between option A and option B placeholders. Meanwhile, the remaining placeholder will be populated by the wrong option.
- `optionASelected()`, `optionBSelected()`
-- colours the placeholder green if the user selects the right answer and displays 'C'est exact!' if the user selects the right answer and colours the placeholder red and comments 'Non', if the user selects the wrong answer.
- `click_updatesCounter()`
-- allows the user to navigate forwards through the quiz, updates the French word, English words options, and removes the colour and comments from the placeholder.

### To Be Implemented
- User input words/can create and customise flashcards deck
- Score for the quiz
- Report card of weak and strong French words for the quiz

### Room for Improvement
- Better UX with sounds for right, wrong answers in quiz
- Responsiveness of the application. This application is only user-friendly through a wide screen, since it's currently a desktop-first interactive design.

## **Technologies Used**

- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Font Awesome](https://fontawesome.com/)
- [JQuery](https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js)

## **Testing Tools**
- [Git](https://git-scm.com/) -- for version control.
- [W3C Markup Validation Service](https://validator.w3.org/) -- html testing.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) -- CSS testing.
- [JSHint](https://jshint.com/) -- Javascript proofing.

## **Deployment**
Project is published and browsable via https://farahroslend.github.io/memofrancais/


## **Credits**
Thanks to MicroslavSvec for README.md write up tips, Narender my mentor for his support and MIT for creating and making Bootstrap and JQuery an open source.
