const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3> ${inpWord}</h3>
                    <p>${data[0].phonetic}</p>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                   
                   
                </div>
                <h class="details" style="color:  gray;"> Meaning </h>
                <ul>
              <li>  <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
    
                </p></li>
                <li><p class="word-meaning">   ${data[0].meanings[0].definitions[1].definition} </p></li>
              <li>  <p class="word-meaning">   ${data[0].meanings[0].definitions[2].definition} </p></li>
                </ul>
                <p class="details"  style="color: #ae9cff;"> Synonyms:   ${data[0].meanings[0].synonyms} </p>
                <p class = "details">
                ${data[0].meanings[1].partOfSpeech} </p>
                <p class="word-meaning">
                    ${data[0].meanings[1].definitions[0].example || ""}
                </p>
                <p class="source">Source:    ${data[0].sourceUrls[0]
                } </p> 
                `;

                 
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}