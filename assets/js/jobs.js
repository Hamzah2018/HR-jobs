// Get Jobs Offers
var offersJobs = Array.from(document.querySelectorAll('.offer-jobs-container article'));
// console.table(offersJobs);

// Get Number of Offer
var  offersCount = offersJobs.length;
console.log(offersCount);

// Set current Offer
var currentOffer = 1;

// Offer Number String Element
var slideNumberElement = document.getElementById('slide-number');

// var offersNumberElement = document.getElementById('offer-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Element
var paginationElement = document.createElement('ul');

// Set ID on Create Ui Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based on Slides Count
for(var i = 1; i <= offersCount; i++ ){
    // list item
    var paginationItem = document.createElement('li');
    // Set Custom Attribute
    paginationItem.setAttribute('data-index',i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Item to The Main UL List
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {
  
      currentOffer= parseInt(this.getAttribute('data-index'));
  
      theChecker();
  
    }
  
  }

  // Trigger The Checker Function
theChecker();
// Next Slide Function
function nextSlide(){
    
  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentOffer++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide(){
    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentOffer--;
    
        theChecker();
    
      }
    
}


// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentOffer) + ' of ' + (currentOffer);
  
    // Remove All Active Classes
    removeAllActive();
  
    // Set Active Class On Current Slide
    offersJobs[currentOffer- 1].classList.add('active');
  
    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentOffer- 1].classList.add('active');
  
    // Check if Current Slide is The First
    if (currentOffer== 1) {
  
      // Add Disabled Class on Previous Button
      prevButton.classList.add('disabled');
  
    } else {
  
      // Remove Disabled Class From Previous Button
      prevButton.classList.remove('disabled'); 
  
    }
  
    // Check if Current Slide is The Last
    if (currentOffer== offersCount) {
  
      // Add Disabled Class on Next Button
      nextButton.classList.add('disabled');
  
    } else {
  
      // Remove Disabled Class From Next Button
      nextButton.classList.remove('disabled');
  
    }
  
  }
  
  // Remove All Active Classes From Images and Pagination Bullets
  function removeAllActive() {
  
    // Loop Through Images
    offersJobs.forEach(function (article) {
  
      article.classList.remove('active');
  
    });
  
    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {
  
      bullet.classList.remove('active');
  
    });
  
  }