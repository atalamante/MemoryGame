# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aaron Talamante**

Time spent: **9** hours spent in total

Link to project: https://sound-lightgame.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x]
  Visual Timer, Visual Strike Counter

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Link: http://g.recordit.co/L4eHqUxv4c.gif

Link: http://g.recordit.co/c7ylT1FEWL.gif

<img src = "http://g.recordit.co/L4eHqUxv4c.gif" width = 1100><br>

<img src = "http://g.recordit.co/c7ylT1FEWL.gif" width = 1100><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/cssref/css_colors.asp (CSS Colors for Styling)

https://www.w3schools.com/css/css3_buttons.asp (CSS Button Styling)

https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body (Helped figure out how to have a changing number next to a label such as the timer and strike counter)

https://www.youtube.com/watch?v=ubLC1JxMqfY (setInterval and clearInterval tutorial)

https://www.youtube.com/watch?v=GhePFBkdNYk (setInterval and clearInterval tutorial)

https://www.w3schools.com/jsref/met_win_setinterval.asp (setInterval article)

https://www.w3schools.com/jsref/met_win_clearinterval.asp (clearInterval article)

https://www.w3schools.com/js/js_random.asp (Math.random overview in Javascript)


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The main challenge I had with this submission is with setInterval and clearInterval. I struggled to understand these methods at first and how to apply them to this game. 
I continued to research the methods to find example usages of them. I used the given setInterval and clearInterval articles, but I had to find more beyond that. 
I watched two YouTube videos to see more examples of these methods being used. The resources I used are all listed above in question 1. These resources helped my understanding, so the only thing left to do was add the methods to the game. 
Once I implemented them and saw that the timer was counting down, I noticed that there was another issue. The best way I can describe it is that my program was not fully clearing the past interval. 
It would count down but would not reset from the past countdown. For example, I was able to figure out the pattern with 20 seconds left. It would change back to 30, but it would go 29, 19, 28, 17, and so on in that order. 
It was apparent that clearInterval was not in the right place, or I was missing a call for it. I experimented with the clearInterval call several times by putting it into several different spots in the code. 
It did not seem to fix it until I put it above the setInterval call. The way that I viewed the problem is that there is an extra setInterval being used to create this back-and-forth counter. 
It did not fully reset when the new one was beginning. I decided that putting the clearInterval before the call should eliminate the setInterval that was still counting down. 
This seemed to fix the problem with the counter because it no longer would bounce back and forth with the previous counter. This was my biggest challenge with setting up the timer, but there were other small issues with it. 
When the user would exceed the strike limit, the counter would not reset, but rather continue to count from where it was. This required a simple clearInterval line in the logic check where I see if the strikes have been exceeded. 
These were the main challenges that I encountered.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One of my questions about web development is how it compares to Android development or just app development in general. With Android development, you have several different layout options such as ConstraintLayout, LinearLayout, and RelativeLayout. 
These serve as a foundation for the application. For web development, do they have preset layouts that you use or is everything built from scratch? One of the most interesting things that I have learned through the Android University class is the use of API’s. 
Is it possible to make an API call doing web development? One of the main formats that I have become familiar with is JSON for API calls. Is this a widely used format or is there an industry standard format for web development? 
When it comes to Javascript, is this the primary language used for web applications? If not, what do you need to consider when it comes to determining what language to use before making your website? 
In general, what is the learning curve like for web development? I see similarities between Javascript and Java, but are HTML and CSS difficult to learn? 
I found Glitch to be an easy and straightforward web development tool. Is Glitch a widely used tool to create web applications? If not, is there a popular IDE or text editor that is used instead? 
This prework assignment has taught me a lot already regarding web development, and I look forward to learning even more!    

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would have added a way for the user to select a difficulty. Then, the game will be setup according to that difficulty. 
Currently, we have preset the pattern length to be 8, but I think that this could be a key part to varying the difficulties. 
An example of this is that the easy difficulty could be a pattern length of 4, normal could be 8, and hard could be 12. Also, the number of buttons could vary as well along with the timer. 
The buttons could follow the same setup as the pattern length with a count of 4, 8, and 12 as the difficulty increases. 
I think that 30 seconds is a good amount for the harder difficulty, so a timer of 45 seconds and 60 seconds could satisfy a normal and easy difficulty. 
For the strikes, 3 is good for the easy difficulty, 2 for normal, and 1 for hard. Besides a difficulty setting, I think adding a new game mode to this game would be an interesting feature. 
Instead of using both light and sound, I think that a game mode where you only choose to use one or the other would be a fun feature. I envision this to be a more challenging game mode since you only have one indicator. 
I think the additional features that I have in mind would be a great way to build on top of the current game.



## License

    Copyright Aaron Talamante

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.