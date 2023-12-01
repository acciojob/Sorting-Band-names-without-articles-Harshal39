 document.addEventListener('DOMContentLoaded', function () {
            // Array of band names
            var bandNames = [
                "The Rolling Stones",
                "Led Zeppelin",
                "The Beatles",
                "Radiohead",
                "Aerosmith",
                "Anthrax",
                "Nirvana"
            ];

            // Function to sort band names without articles
            function sortBandsWithoutArticles(bands) {
                return bands.sort(function (a, b) {
                    // Remove articles and convert to lowercase for comparison
                    const cleanA = a.replace(/^(a|an|the)\s+/i, '').toLowerCase();
                    const cleanB = b.replace(/^(a|an|the)\s+/i, '').toLowerCase();
                    return cleanA.localeCompare(cleanB);
                });
            }

            // Get the sorted band names
            var sortedBands = sortBandsWithoutArticles(bandNames);

            // Display the sorted band names in the 'bands' ul
            var ul = document.getElementById('bands');
            sortedBands.forEach(function (band) {
                var li = document.createElement('li');
                li.textContent = band;
                ul.appendChild(li);
            });
        });