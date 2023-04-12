console.log("🟢Conectado!");

//DOM ELEMENTS
const timeDisplay = document.querySelector("#timeDisplay");
const dateDisplay = document.querySelector("#dateDisplay");
const flightCode = document.querySelector("#flightCode");
const terminalGate = document.querySelector("#terminalGate");

//gate randomizer
const gate = Math.floor(Math.random() * (10 - 1) + 1);

//date randomizer
const dateNow = new Date().toLocaleDateString("es-cl", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

//hour randomizer
function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` + minutes : minutes;

  timeDisplay.textContent = `${hour}:${minutes}`;

  setTimeout(showTime, 1000);
}
showTime();

//flight randomizer
function getRandomFlight() {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charLength = characters.length;
  let airlineCode = "";

  for (i = 0; i < 2; i++) {
    airlineCode += characters.charAt(Math.floor(Math.random() * charLength));
  }

  const numberCode = Math.floor(Math.random() * (5000 - 1) + 1);

  return `${airlineCode}-${numberCode}`;
}

//DOM MANIPULATION
dateDisplay.textContent = dateNow;
flightCode.textContent = getRandomFlight();
terminalGate.textContent = gate;

window.addEventListener(
  "load",
  function () {
    alert(
      "Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma."
    );
  },
  false
);
