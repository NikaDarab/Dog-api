/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// function getDogImage(numberOfDogs) {
//   console.log(numberOfDogs);
//   let baseUrl = 'https://dog.ceo/api/breeds/image/random/';
//   fetch(`${baseUrl}${numberOfDogs}`)
//     .then(response => response.json())
//     .then(responseJson =>
//       displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again later.'));
// }

function getDogBreed(breedOfDog) {
  let baseUrl = 'https://dog.ceo/api/breed/';
  fetch(`${baseUrl}${breedOfDog}/images`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert('Something went wrong. Try again later.'));
}

// function displayResults(responseJson) {
//   console.log(responseJson);
//   $('.result-list').empty();
//   console.log(responseJson.message.length);
//   if (responseJson.message.length > 0){
//     for (let i = 0; i < responseJson.message.length; i++){
//       console.log('read');
//       $('.result-list').append(
//         `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
//       );
//     }
//   }else {
//     $('.result-list').append('<li> No Results</li>');
//   }
//   $('.results').removeClass('hidden');
// }
function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let html = '';
  html = `<img src="${responseJson.message}" class="results-img"/>`;
  if (responseJson.status === 'error') {
    alert('Something went wrong. Try again later.');
  } else {
    //display the results section
    $('.results').replaceWith(html);
    $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('.js-search-form').submit((event) => {
    // console.log('here');
    event.preventDefault();
    let newInput = $('#dogs').val();
    console.log(newInput);
    getDogImage(newInput);
  });

  $('.js-breed-form').submit((event) => {
    event.preventDefault();
    let newBreed = $('#breed').val();
    getDogBreed(newBreed);
  });
}

$(function () {
  console.log('App loaded!');
  watchForm();
});
