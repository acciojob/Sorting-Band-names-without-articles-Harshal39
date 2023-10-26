// Define the array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'AC/DC'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(the|a|an) /i, '').trim();
}

// Remove articles and sort the band names lexicographically
bandNames = bandNames.map(removeArticles).sort();

// Get the 'band' ul element from the HTML
const bandList = document.getElementById('band');

// Create list items for each band name and add them to the 'band' ul
bandNames.forEach(function (bandName) {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
});
