// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // Returning from inner callback function.
    //console.log('Callback: I have the data!: ');
    (!error ? callback(data) : callback(undefined));
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
  // console.log("End of breedDetailsFromFile");
};

// we try to get the return value
breedDetailsFromFile('Bombay', (catBreed) => {
  //console.log(`In code: ${catBreed}`);
  return catBreed;
});

module.exports = breedDetailsFromFile;