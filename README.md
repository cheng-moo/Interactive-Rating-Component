# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.



### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactiveratingcomponent-css-flexbox-js-eventlistener-BJ6vKWGXc]
- Live Site URL: [https://medblutex.github.io/Interactive-Rating-Component/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

So far the main points i learned doing this project : 
  -Designing with compatible colors (CSS)
  
  -Using transitions with hovering (CSS)
  
  -Toggling between multiple choices (JS)
  
  -The concept of e.target and storing it's innerHTML to variable (JS)
  
  -Using <span> tag to make a value dynamic (JS)
  
  -removeEventListener() when i don't want the event to continue after a certain  condition (JS)
  
  -The Concept of adding and removing classes to determine the display of an element (JS)

```css
.proud-of-this-css {
   transition: all 0.3s;
}
```
```js
function selected (e) {
    e.preventDefault();
    ratingArray = Array.from(ratingNum);
    for (const item of ratingArray) {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
    if(e.target.classList = 'rating-num') {
        e.target.classList.add('selected');
        rate = e.target.innerHTML;
        selection.innerHTML = rate;
        submit.addEventListener('click', thankYou);
    } 
    
}
```



### Continued development
  
  - transitions
  - DOM
  - eventListeners

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@medblutex](https://www.frontendmentor.io/profile/medblutex)
- Twitter - [@Ching_Mo_](https://www.twitter.com/Ching_Mo_)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.


