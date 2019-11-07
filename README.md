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

#### Landing Page: Call-out 
Full width and height poster displaying all the 4 members of the Monkees is shown to greet the user and personify the band. A different picture is used for the 3 different media scales.

#### Landing Page: Discography
Features a three (Only two for the iPad device) Youtube videos of music from the Monkees are shown. The background is a repeated image, that was cropped from one of the Monkees' album. A button directing the user to the music page is available as well.

#### Landing Page: Listen Live
A picture of the Monkees performing at a live concert is shown discreetly in the background. Links to the Monkees' tour schedule and to an inquiry form are made readily availble.

#### Landing Page: Social Media
Buttons in the shape of the icons of the social media platforms, which will change the mouse icon into a pointing hand & cast a shadow when hovered over, are displayed here. 

#### About Page
Pictures and a concise description, quotes and skill set of each of the members are showcased here.

#### Music Page
This page features two of The Monkees' albums that are each displayed in a Spotify playlist. The user can also follow the band to listen to more of their music by clicking the follow Spotify button. The background of this page is a repeated, cropped piano picture that has been adjusted its opacity so the page is easy on the eyes.

#### Gigs Page
At this page, the user will be able to look at the tour schedule of the band, and fill up an inquiry form to book for their performances for events and ask questions about their availability. For the table part, the hovered row will be highlighted.

#### Text Font
The font used for the texts in this website is a block-text, that further customised by adding black linings at the borders of each of the letters.

### Features Left to Implement
* An alert bar showing that the Monkees' most upcoming tour is in Japan.
* A page that shows 'Thank you for your inquiry', with a button that returns the user to the landing page. This will be displayed after the user has filled up and submitted the inquiry form.


## Technologies Used

 * [HTML5](https://en.wikipedia.org/wiki/HTML5): Mark-up used language for website design.
 * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): Stylesheet language used to create the presentation of the website.
 * [JavaScript](https://www.javascript.com/): Links attached to allow for dropdown button to work.
 * [BootStrap](https://getbootstrap.com/): Used for the responsive layout, buttons, tables, card holder of the website.
 * [GoogleFonts](https://fonts.google.com/): For text styling.
 * [Strokes to Web Texts](https://css-tricks.com/adding-stroke-to-web-text/): To make the white texts pop out more.
 * [Spotify widget](https://developer.spotify.com/documentation/widgets/): To insert spotify playlists and a follow button.
 

## Testing

* Navigation Bar Links 
  1. Clicking on the guitar icon button of the 'Home' hyperlink will lead the user to the home page.
  2. Hovering on either the 'About', 'Gigs', 'Music' and 'Updates' hyperlink will turn the block texts darker and click each will send the user to the relevant pages respectively.
  3. Navigation bar is always available, standardised in style and functional across all of the pages.
 
 * Inquiry Form
  1. Go to the "Gigs" page.
  2. Leaving either, or all, of the name, telephone, email address or field (s) will not send the form and a prompt to fill in the empty field(s) will be issued.
  3. Incorrect email 'nomenclature' will not send the form, and user will be asked to key in a valid email address.
  4. When all the fields are correctly fill, the submit button will work and link to a (yet to be designed) thank you page and a return to landing page link.
  
 * Music Playlist
  1. Go to the "Music" page.
  2. User can click on the play button and the music will be played for a brief period of about 30 seconds for preview purposes.
  3. Clicking on the other songs from either of these 2 Spotify widgets repeats the result from 2.
  

 * Social Media Links 
  1. At the landing page, hovering across the social media icons will cast a shadow.
  2. Clicking on either of the icons will open a new tab to the correct and relevant social media page.
 
 * Table of Schedule
 Cells will be highlighted for easy reading when the cursor is hovered across it.

 The website has been tested with these browsers: Google, Safari, Mozilla Firefox, Internet Explorer.
 
 The website has been Validated using:
 * [HTML Validation](https://validator.w3.org/): No Errors or warnings found.
 * [CSS Validation](https://jigsaw.w3.org/css-validator/): No Errors found.

### Responsive Design
The website was tested using the Chrome browser developer tool, and verified to be responsive to the following device resolutions:
#### Desktops
For devices with a large screen width above 1200px

#### Tablets
iPad, iPadPro

#### Mobile devices
Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhoneX


## Deployment
This project was created using the [AWS Cloud 9](https://aws.amazon.com/cloud9/) integrated development environment (IDE). Version control and deployment was entirely done using GitHub. 

* The repository for this website can be found at: https://github.com/farahroslend/monkees.git

* The deployed site can be experienced from the following link: https://farahroslend.github.io/monkees/


## Credits
### Content
 * Fonts, text-styling: [GoogleFonts](https://fonts.google.com/), [Strokes to Web Texts](https://css-tricks.com/adding-stroke-to-web-text/)
 
 * The 'About Us' page contents were taken from: [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
 

### Media
* Videos and playlists were sourced from: [Youtube](https://www.youtube.com/), [Spotify](https://www.spotify.com/my-en/)
* Pictures: [Pinterest](https://www.pinterest.com/)

### Acknowledgement
Many thanks to the tutor from Code Institute's videos, for I learned a lot about website design and prototyping by observing how he did so when designing the 'Whiskey Drop' Website. My gratitude is also extended to Anna for her inputs from Slack, and especially to my mentor Narender Singh for his insightful feedback, and dedication to his students.  

## Author
* **Farah Roslend** - *Student of Code Institute from 2019 to 2020* 

