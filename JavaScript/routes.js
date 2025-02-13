document.addEventListener("DOMContentLoaded", (event) => {
  const btnVoirMonTravail = document.getElementsByClassName("voirMonTravail");
  const btnVoirCV = document.getElementsByClassName("doc");
  const btnVoirGithub = document.getElementsByClassName("git");
  const btnDIRISI = document.getElementsByClassName("DIRISI");
  const btnPolice = document.getElementsByClassName("Police");
  const btnLbc = document.getElementsByClassName("Lbc");

  const link = document.createElement("a");

  // redirection vers le CV
  for (let bouton of btnVoirCV) {
    bouton.addEventListener("click", function () {
      link.href = "../pages/CV.html";
      link.click();
    });
  }

  // redirection vers le site de la dirisi
  for (let bouton of btnDIRISI) {
    bouton.addEventListener("click", function () {
      link.href = "https://www.defense.gouv.fr/dirisi";
      link.click();
    });
  }

  // redirection vers le site du BDSIT
  for (let bouton of btnPolice) {
    bouton.addEventListener("click", function () {
      link.href =
        "https://choisirleservicepublic.gouv.fr/offre-emploi/ddsp77sgobdsit---technicien-de-proximite-en-informatique-et-telecommunications-sic-reference-MINT_BS077PNB-73701/";
      link.click();
    });
  }

  // redirection vers le site de LBC Pro
  for (let bouton of btnLbc) {
    bouton.addEventListener("click", function () {
      link.href = "https://www.lbcpro.fr/";
      link.click();
    });
  }

  // redirection vers la page Projets
  for (let bouton of btnVoirMonTravail) {
    bouton.addEventListener("click", function () {
      link.href = "../pages/Projets.html";
      link.click();
    });
  }

  // redirection vers Github
  for (let bouton of btnVoirGithub) {
    bouton.addEventListener("click", function () {
      link.href = "https://github.com/Xelovnight";
      link.click();
    });
  }
});
