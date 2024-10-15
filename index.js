// Create a GitHub repository called `Froyo`
// Create an HTML file and a JavaScript file. 
// Create prompt requesting user input listing previously ordered froyo flavors separated by commas.
// Parse the user's input into an array. 
// Store the user's input.
// Convert user input into an object.
// Log that object to the console. 
// Push to GitHub.


const userInput = prompt(`What flavors of Froyo have you ordered recently? List them out here, separated by commas.`, `vanilla, vanilla, coffee, coffee, strawberry, chocolate, caramel`);

const froyoFlavors = userInput.split(`,`);

const flavorCounts = {};

for (let i = 0; i < froyoFlavors.length; i++) {
  const flavor = froyoFlavors[i];
  if (flavor) {
      flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  }
}

console.log(flavorCounts);




