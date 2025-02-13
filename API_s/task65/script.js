 // Function to fetch word data
async function fetchWordData(word, container) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error(`Word not found: ${word}`);
      }
      const data = await response.json();
      displayWordData(data, container);
    } catch (error) {
      console.error("Error fetching word data:", error);
      container.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    }
  }
  
  // Function to display word data
  function displayWordData(data, container) {
    try {
      const wordInfo = data[0]; // First word object
  
      if (!wordInfo) {
        container.innerHTML = "<p>No data found for the word.</p>";
        return;
      }
  
      // Handle phonetics
      let phonetics = "";
      if (wordInfo.phonetics) {
        wordInfo.phonetics.forEach((p) => {
          if (p.text) {
            phonetics += `${p.text}, `;
          }
        });
        phonetics = phonetics.slice(0, -2) || "Not available"; // Remove trailing comma
      }
  
      const audio = wordInfo.phonetics?.find((p) => p.audio)?.audio || null;
  
      // Handle meanings
      let meaningsHTML = "";
      let allSynonyms = [];
      let allAntonyms = [];
  
      if (wordInfo.meanings) {
        wordInfo.meanings.forEach((meaning) => {
          if (meaning.partOfSpeech === "noun" || meaning.partOfSpeech === "verb") {
            let definitionsHTML = "";
            const limitedDefinitions = meaning.definitions.slice(0, 3); // Limit to 3 definitions/examples
  
            limitedDefinitions.forEach((def, index) => {
              const example = def.example ? `<p><strong>Example:</strong> ${def.example}</p>` : "";
              definitionsHTML += `
                <li>
                  <p>${index + 1}. ${def.definition}</p>
                  ${example}
                </li>
              `;
  
              // Collect synonyms and antonyms
              if (Array.isArray(def.synonyms) && def.synonyms.length > 0) {
                allSynonyms.push(...def.synonyms);
              }
              if (Array.isArray(def.antonyms) && def.antonyms.length > 0) {
                allAntonyms.push(...def.antonyms);
              }
            });
  
            meaningsHTML += `
              <div class="meaning">
                <h3>${meaning.partOfSpeech}</h3>
                <ul>${definitionsHTML}</ul>
              </div>
            `;
          }
        });
      }
  
      // Combine synonyms and antonyms
      const synonymsHTML = allSynonyms.length
        ? `<p><strong>Synonyms:</strong> ${[...new Set(allSynonyms)].slice(0, 10).join(", ")}</p>`
        : "<p><strong>Synonyms:</strong> Not available</p>";
  
      const antonymsHTML = allAntonyms.length
        ? `<p><strong>Antonyms:</strong> ${[...new Set(allAntonyms)].slice(0, 10).join(", ")}</p>`
        : "<p><strong>Antonyms:</strong> Not available</p>";
  
      // Render result
      container.innerHTML = `
        <h2>${wordInfo.word}</h2>
        <p><strong>Phonetic:</strong> ${phonetics}</p>
        ${
          audio
            ? `<div class="audio-container">
                <audio controls>
                  <source src="${audio}" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>`
            : "<p>No audio available.</p>"
        }
        ${meaningsHTML}
        <div class="synonyms-antonyms">
          ${synonymsHTML}
          ${antonymsHTML}
        </div>
      `;
    } catch (error) {
      console.error("Error displaying word data:", error);
      container.innerHTML = "<p>An error occurred while displaying the data.</p>";
    }
  }
  
  // Event Listener for Search Button
  document.getElementById("searchButton").addEventListener("click", () => {
    const word = document.getElementById("searchInput").value.trim();
    const container = document.getElementById("wordDataContainer");
  
    if (!word) {
      container.innerHTML = "<p>Please enter a word to search.</p>";
      return;
    }
  
    fetchWordData(word, container);
  });
  