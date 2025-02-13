document.addEventListener("DOMContentLoaded", (event) => {
  btnTelechargement = document.getElementById("boutonTelechargement");
  btnVoirMonTravail = document.getElementById("voirMonTravail");

  btnTelechargement.addEventListener("click", function () {
    document.getElementById("telechargerCV").click();
  });
});
