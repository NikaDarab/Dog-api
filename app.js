/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */


function getDogImage(numberOfDogs) {
  console.log(numberOfDogs);
  let baseUrl = 'https://dog.ceo/api/breeds/image/random';
  fetch(`${baseUrl}/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
  //console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.result-list').empty();
  console.log(responseJson.message.length);
  if (responseJson.message.length > 0){
    for (let i = 0; i < responseJson.message.length; i++){
      console.log('read');
      //console.log (`"url" : ${responseJson[i]}`)
      $('.result-list').append(
        `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
      );
    }
  }else {
    $('.result-list').append('<li> No Results</li>');
  }
  //display the results section
  $('.results').removeClass('hidden');
}
//<h2>Look at this dog!</h2>
//        <img class="results-img" alt="placeholder"></img>
/*function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden');
  }
  */
function watchForm() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let numberOfDogs = $('#numberOfPics').val();
    console.log(numberOfDogs);
    //numberOfDogs.val("")
    getDogImage(numberOfDogs);
  });
}
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});