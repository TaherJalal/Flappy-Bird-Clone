<h1>Read Me1</h1>
<p>This Is A Flappy Bird Clone</p>
<p>Technologies Used In This Project Are Nothing Fancy But HTML,CSS And Vanilla Javascript</p>
<a href="https://www.figma.com/file/genJzufZ07oupUPmI8A0PR/Untitled?node-id=0%3A1&t=U6zkLTSMXP33FSWv-1">WireFrame By Figma</a>
<h2>User Stories</h2>
<p>Story 1) user is given to make a mouse event to make the block jump <br>Story 2) user is given a score to track his score <br>Story 3) user will be able to restart the game after the alert fires</p>

<h2>Documentation</h2>
<p>1-Started With A Basic HTML,CSS And JavaScript Files And Linked Them Together<br>2- Made A Section Inside The Body With 3 Divs Each With A Diffrent ID <br>3- For The CSS I Added the hieght and width of each item as well as the background color and made an infinite animation for a block to start at the near right side of the container to the far left exceding the container and used the css overflow:hidden for the conatiner to cover that up, to make a poll or a block wall i already made 2 divs html the its basically a black blockl pole and a white div with the same width but diffrent hieght to appear as if it has a hole<br>4- For the javascript i added an eventlistener for each time the animation is fired to change to position of the white div in the y axis so that each animation the white div overlaps the black one, then used useInterfal function to simulate the garvity and and each time i click on mouse the character the block will go higher<br>5- Then it's just a matter of if statements to check if the block at the very left is in contact with the black pole or if the block makes contact at the ground then game over!</p>

<h2>Unsolved Problems</h2>
<p>1- the best score is not cached , so good luck tracking your score that is if you ever play this game<br> the score counter was incrementing forever even after losing unless you restart the session so i had to make the session restart everytime you lose/p>

 
  
  <h2>Favourite Functions to work with:</h2>
  <p>useInterval() is a function that accepts 1 to 2 parameters, first one is to execute another function and the other is to specify a time to execute it again. its basically an infinite loop and you can specify the time in ms for each time you want the function to be executed again</p>
