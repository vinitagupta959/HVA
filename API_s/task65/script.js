let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchButton');
let wordDataContainer = document.getElementById('wordDataContainer');
 
searchBtn.addEventListener('click', function () {
  fetchWordData(searchInput.value.trim());
});

 
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    fetchWordData(searchInput.value.trim());
  }
});

async function fetchWordData(word) {
  if (word === "") {
    wordDataContainer.innerHTML = `<h2>Please enter a word</h2>`;
  } else {
    try {
      let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      let data = await response.json();
console.log(data);
      if (data.length > 0) {
        let wordInfo = data[0];

        let phonetics = "N/A";
        if (wordInfo.phonetics.length > 0) {
          phonetics = wordInfo.phonetics[0].text;
        }

        let meanings = wordInfo.meanings;
        let content = `<div>
          <h2>${wordInfo.word}</h2>
          <p><strong>Phonetics:</strong> ${phonetics}</p>
        </div>`;

        for (let i = 0; i < meanings.length; i++) {
          let meaning = meanings[i];
          let definition = "No definition available";
          let example = "No example available";
          let synonyms = "No synonyms available";
          let antonyms = "No antonyms available";

          if (meaning.definitions.length > 0) {
            definition = meaning.definitions[0].definition;
            if (meaning.definitions[0].example) {
              example = meaning.definitions[0].example;
            }
          }

          if (meaning.synonyms.length > 0) {
            synonyms = meaning.synonyms.join(", ");
          }

          if (meaning.antonyms.length > 0) {
            antonyms = meaning.antonyms.join(", ");
          }

          content += `<div>
            <h3>${meaning.partOfSpeech}</h3>
            <p><strong>Meaning:</strong> ${definition}</p>
            <p><strong>Example:</strong> ${example}</p>
            <p><strong>Synonyms:</strong> ${synonyms}</p>
            <p><strong>Antonyms:</strong> ${antonyms}</p>
          </div>`;
        }

        wordDataContainer.innerHTML = content;
      } else {
        wordDataContainer.innerHTML = `<h2>Word not found</h2>`;
      }
    } catch (error) {
      console.log(error);
      wordDataContainer.innerHTML = `<h2>Word not found</h2>`;
    }
  }
}
