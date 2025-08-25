function createCard() {
  const card = document.createElement("div");
  const cardBottom = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h3");
  const cardReleaseTime = document.createElement("div");
  cardImg.src = "images/png/movie-image.png";

  card.appendChild(cardImg);

  cardTitle.textContent = "Movie title";

  cardBottom.appendChild(cardTitle);
  let date = new Date();
  date.setSeconds(15);
  let seconds = date.getSeconds();
  const timer = setInterval(() => {
    let time = "00:" + seconds + ":00";
    seconds--;

    cardReleaseTime.innerHTML = `<p class = "card-release">Release in: <span class = "release-timer">${time}</span></p>`;

    if (seconds <= -1) {
      cardReleaseTime.innerText = "Released";
      cardReleaseTime.classList.add("released");
    }
  }, 1000);

  cardReleaseTime.classList.add("timer");

  cardBottom.appendChild(cardReleaseTime);

  card.appendChild(cardBottom);

  card.classList.add("card");
  cardBottom.classList.add("card-bottom");

  return card;
}

const cardContainer = document.getElementById("card-container");

const cards = [1, 2, 3, 4, 5];

cards.forEach(() => {
  const card = createCard();
  cardContainer.appendChild(card);
});
