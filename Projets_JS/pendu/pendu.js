document.addEventListener("DOMContentLoaded", (event) => {
  const lettreEntree = document.getElementById("letterEntree");
  const comfirmation = document.getElementById("sendLetter");
  const reset = document.getElementById("reset");
  const tiret = document.getElementById("tiret");
  const start = document.getElementById("start");
  const listeMot = [
    "banane",
    "voiture",
    "ordinateur",
    "maison",
    "chien",
    "chat",
    "montagne",
    "soleil",
    "plage",
    "foret",
    "football",
    "basketball",
    "tennis",
    "natation",
    "volleyball",
    "golf",
    "rugby",
    "hockey",
    "baseball",
    "piano",
    "guitare",
    "violon",
    "batterie",
    "flute",
    "saxophone",
    "trompette",
    "accordeon",
    "harmonica",
    "pizza",
    "hamburger",
    "sushi",
    "pates",
    "salade",
    "sandwich",
    "frites",
    "soupes",
    "steak",
    "poisson",
    "avion",
    "train",
    "voilier",
    "velo",
    "moto",
    "bus",
    "voiturette",
    "helicoptere",
    "camion",
    "taxi",
    "arbre",
    "fleur",
    "herbe",
    "rocher",
    "rivieres",
    "cascade",
    "lac",
    "ocean",
    "mer",
    "etang",
    "livre",
    "journal",
    "magazine",
    "bande dessinee",
    "romans",
    "poesie",
    "theatre",
    "biographie",
    "essai",
    "science-fiction",
    "orange",
    "pomme",
    "fraise",
    "raisin",
    "pasteque",
    "cerise",
    "banane",
    "kiwi",
    "ananas",
    "mangue",
    "ecole",
    "universite",
    "classe",
    "professeur",
    "eleve",
    "cours",
    "examen",
    "devoirs",
    "bibliotheque",
    "laboratoire",
    "mouette",
  ];
  const points = document.getElementById("point");
  const changermot = document.getElementById("changerBtn");
  const titreLettre = document.getElementById("titreLettre");
  const listLettre = document.getElementById("listLettre");
  const btnShowLettre = document.getElementById("showLettre");
  const resultat = document.getElementById("res");

  function EnableBtn() {
    start.disabled = false;
    comfirmation.disabled = false;
    changermot.disabled = false;
    btnShowLettre.disabled = false;
    reset.disabled = false;
  }

  function Starting() {
    DisableBtn();
    start.disabled = false;
    reset.disabled = true;
  }
  Starting();

  function DisableBtn() {
    start.disabled = true;
    comfirmation.disabled = true;
    changermot.disabled = true;
    btnShowLettre.disabled = true;
  }

  function Reset() {
    EnableBtn();
    lettreEntree.value = "";
    tiret.textContent = "";
    motCache = [];
    point = 10;
    points.textContent = "Score: " + point + "pts";
    listLettre.style.color = "white";
    titreLettre.style.color = "white";
    HideResultat();
    Starting();
  }

  function motAleatoire() {
    const index = Math.floor(Math.random() * listeMot.length);
    return listeMot[index];
  }

  let mot = "";
  let motCache = [];
  let point = 10;
  let letterUtilisee = [];

  function CbTTiret() {
    motCache = Array(mot.length).fill("_");
    tiret.textContent = motCache.join(" ");
  }

  function ListLettre() {
    letterUtilisee += [" / "];
    listLettre.textContent = letterUtilisee;
  }

  function Resultat() {
    if (point < 0) {
      resultat.style.color = "red";
      resultat.textContent = "ii Tu as Perdu !!";
      resultat.style.display = "block";
      DisableBtn();
    }
  }

  function ResultatW(motTrouve) {
    if (motTrouve) {
      resultat.textContent = "ii C'est le Bon mot !!";
      resultat.style.display = "block";
      TempoWin();
    }
  }

  function ChangementDeMot() {
    mot = motAleatoire();
    CbTTiret();
    listLettre.style.color = "white";
    titreLettre.style.color = "white";
  }

  function HideResultat() {
    resultat.style.display = "none";
    resultat.style.color = "red";
  }

  function TempoWin() {
    DisableBtn();
    resultat.style.color = "green";
    setTimeout(ChangementDeMot, 3000);
    setTimeout(EnableBtn, 3000);
    setTimeout(HideResultat, 3000);
  }

  start.addEventListener("click", function () {
    EnableBtn();
    mot = motAleatoire();
    CbTTiret();
    Resultat();
  });

  comfirmation.addEventListener("click", function () {
    let lettre = lettreEntree.value.trim().toLowerCase();
    let trouve = false;
    let motTrouve = false;
    Resultat();

    for (let i = 0; i < mot.length; i++) {
      if (lettre === mot[i]) {
        motCache[i] = lettre;
        trouve = true;
      } else if (lettre === mot) {
        motCache[i] = lettre[i];
        motTrouve = true;
        trouve = true;
      }
    }

    if (!trouve) {
      point -= 1;
      points.textContent = "Score : " + point;
      letterUtilisee += [lettre];
      ListLettre();
    } else {
      if (motTrouve) {
        point += 2;
        points.textContent = "Score : " + point;
        letterUtilisee = [];
        ListLettre();
        ResultatW(motTrouve);
      } else if (trouve) {
        point += 1;
        points.textContent = "Score : " + point;
        letterUtilisee += [lettre];
        ListLettre();
      }
    }

    tiret.textContent = motCache.join(" ");
    lettreEntree.value = "";

    btnShowLettre.addEventListener("click", function () {
      listLettre.style.color = "black";
      titreLettre.style.color = "black";
      point -= 3;
      points.textContent = "Score : " + point;
      Resultat();
    });
    Resultat();
  });

  reset.addEventListener("click", function () {
    Reset();
  });

  changermot.addEventListener("click", function () {
    ChangementDeMot();
    point -= 2;
    points.textContent = "Score : " + point;
    Resultat();
  });
});
