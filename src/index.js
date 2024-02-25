function updateTime() {
  // ANKARA
  if (document.querySelector("#ankara")) {
    let ankara = document.querySelector("#ankara");
    let shownAnkaraDate = ankara.querySelector("p");
    let shownAnkaraTime = ankara.querySelector(".time");
    let ankaraDate = moment().tz("Europe/Istanbul");
    shownAnkaraDate.innerHTML = ankaraDate.format("MMMM Do YYYY");
    shownAnkaraTime.innerHTML = ankaraDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );

    // ABU-DHABI
    let abuDhabi = document.querySelector("#abu-dhabi");
    let shownAbuDhabiDate = abuDhabi.querySelector("p");
    let shownAbuDhabiTime = abuDhabi.querySelector(".time");
    let abuDhabiDate = moment().tz("Asia/Dubai");
    shownAbuDhabiDate.innerHTML = abuDhabiDate.format("MMMM Do YYYY");
    shownAbuDhabiTime.innerHTML = abuDhabiDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTZone = event.target.value;
  if (cityTZone === "current") {
    cityTZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTZone);
  let shownCities = document.querySelector("#cities");
  let city = cityTZone.replace("_", " ").split("/")[1];
  shownCities.innerHTML = ` <div class="city">
    <div class="city-info">
    <h2>${city}</h2>
    <p>${cityTime.format("MMMM Do YYYY")}</p>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss ")}<small>${cityTime.format(
    "A"
  )}</small></div>
        </div>`;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 900);
