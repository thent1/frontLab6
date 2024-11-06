const cardsLayout = document.getElementById("cardsLayoutId");
const message = document.getElementById("resultId");
    function processTemplate(picture, name, country, postcode, phone) {
        return (`<div class='card'>
                <img src="${picture}" class="imageClass"> 
                <h2 class="textField">${name}</h2> 
                <h4 class="textField">${country}</h4> 
                <h4 class="textField">${postcode}</h4>
                <h4 class="textField">${phone}</h4></div>`)
    }

const downloadButton = document.getElementById("downloadButtonId");
downloadButton.addEventListener("click", (e) => {
    fetch("https://randomuser.me/api")
        .then(response => {
            if (response.ok) {
                message.innerHTML = "Successfully downloaded";
            } else {
                message.innerHTML = "error";
            }

            return response.json();
        })
        .then(data => {
            const picture = data.results[0].picture.large;
            const name = data.results[0].name.first + ' ' + data.results[0].name.last;
            const country = data.results[0].location.country;
            const postcode = data.results[0].location.postcode;
            const phone = data.results[0].phone;
            cardsLayout.innerHTML += processTemplate(picture, name, country, postcode, phone)
        })
        .catch(error => {
            console.log("Error occurred:" + error)
        })

})
