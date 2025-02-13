const pdfUrl = "../assets/contexteGSB.pdf"; // Mise à jour du chemin du PDF
let pdfDoc = null;

async function loadPDF(url) {
  try {
    const loadingTask = pdfjsLib.getDocument(url);
    pdfDoc = await loadingTask.promise;
    console.log("PDF chargé avec succès ✅");
    renderPages();
  } catch (error) {
    console.error("Erreur lors du chargement du PDF ❌", error);
    document.getElementById("loading").innerText =
      "❌ Impossible de charger le PDF.";
  }
}

async function renderPages() {
  const pdfCarousel = document.getElementById("pdf-carousel");
  document.getElementById("loading").style.display = "none"; // Masquer le message de chargement

  // Supprimer les anciennes pages (si elles existent)
  pdfCarousel.innerHTML = "";

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: 0.9 }); // Pas de zoom dynamique ici

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport: viewport }).promise;

    // Convertir le canvas en image
    const imgUrl = canvas.toDataURL("image/png");

    // Ajouter l'image au slider
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${imgUrl}" alt="Page ${i}">`;
    pdfCarousel.appendChild(slide);
  }

  // Initialiser Swiper après ajout des images
  new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Délai d'automatisation plus lent (5 secondes entre chaque page)
      disableOnInteraction: false,
    },
    speed: 1000, // Ralentir le défilement (1 seconde pour passer à la page suivante)
  });
}

// Télécharger le PDF
function downloadPDF() {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop(); // Nom du fichier
  link.click();
}

// Charger le PDF
loadPDF(pdfUrl);
