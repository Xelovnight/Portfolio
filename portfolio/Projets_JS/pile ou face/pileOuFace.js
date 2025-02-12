console.log("Le pile ou face");

document.addEventListener("DOMContentLoaded", (event) => {
  let max = 2;
  let gambleValue = 5;
  let randomValue = 5;
  let AGagner = false;
  let resGamble = 50;
  const buttonLancer = document.getElementById("lanceur");
  const afficheurRes = document.getElementById("resultat");
  const gambleRes = document.getElementById("gambleRes");
  const buttonGambleF = document.getElementById("gambleF");
  const buttonGambleP = document.getElementById("gambleP");
  const buttonReset = document.getElementById("reset");
  const gambleAmmount = document.getElementById("gambleAmmount");
  const buttonSendGamble = document.getElementById("sendGamble");
  let gamble = 0;
  let money = document.getElementById("money");
  let mise = document.getElementById("mise");

  function Reset() {
    console.log("reset");
    afficheurRes.textContent = " ";
    gambleRes.textContent = " ";
    gambleAmmount.value = 0;
    mise.textContent = "Mise: 0$";
  }

  buttonReset.addEventListener("click", function () {
    Reset();
    resGamble = 50;
    money.textContent = "Argent: " + resGamble + "$";
  });

  function CalculateGamble() {
    console.log("Calcule le parie à renvoyer .....");
    console.log("value de gamble  =  ", gamble);
    if (AGagner === true) {
      resGamble = resGamble + gamble;
      console.log("Gagner, parie = ", resGamble);
      money.textContent = "Argent: " + resGamble + "$";
    } else if (AGagner === false) {
      resGamble = resGamble - gamble;
      console.log("Perdu, parie = ", resGamble, "-", gamble);
      money.textContent = "Argent: " + resGamble + "$";
    }
  }

  buttonSendGamble.addEventListener("click", function () {
    gamble = parseInt(gambleAmmount.value, 10);

    if (gambleValue === 0 || gambleValue === 1) {
      if (gamble > resGamble || gamble <= 0) {
        console.log(
          "Erreur, la valeur de la mise est supérieur à l'argent disponible"
        );
        mise.textContent = "valeur incohérente";
        setTimeout(Reset, 2500);
      } else if (resGamble >= gamble && gamble > 0) {
        (mise.textContent = "Mise: " + gamble + "$"),
          console.log("la mise est de:", gamble);
      }
    } else if (gambleValue === 5) {
      mise.textContent = "merci de choisir pile ou face";
      console.log("pas de guess");
    }
  });

  buttonGambleP.addEventListener("click", function () {
    gambleValue = 0;
  });

  buttonGambleF.addEventListener("click", function () {
    gambleValue = 1;
  });

  buttonLancer.addEventListener("click", function () {
    randomValue = Math.floor(Math.random() * max);

    if (randomValue === 0) {
      console.log("PILE");
      afficheurRes.textContent = "PILE";
    } else if (randomValue === 1) {
      console.log("FACE");
      afficheurRes.textContent = "FACE";
    }

    if (
      (randomValue === 1 && gambleValue === 1) ||
      (randomValue === 0 && gambleValue === 0)
    ) {
      console.log("Gagné");
      gambleRes.textContent = "i Tu as gagné GG !";
      AGagner = true;
      resultat.style.color = "#28a745";
      gambleRes.style.color = "#28a745";
    } else if (
      (randomValue === 0 && gambleValue === 1) ||
      (randomValue === 1 && gambleValue === 0)
    ) {
      console.log("Perdu");
      gambleRes.textContent = "Tu as perdu";
      AGagner = false;
      resultat.style.color = "#dc3545";
      gambleRes.style.color = "#dc3545";
    }

    function visibility() {
      afficheurRes.style.opacity = "1";
      gambleRes.style.opacity = "1";
    }

    var coin = document.getElementById("coin");
    coin.classList.add("flip");

    setTimeout(() => {
      coin.classList.remove("flip");
    }, 2000);

    setTimeout(visibility, 2500);
    setTimeout(CalculateGamble, 2500);
    afficheurRes.style.opacity = "0";
    gambleRes.style.opacity = "0";
    setTimeout(Reset, 5000);
  });
});
