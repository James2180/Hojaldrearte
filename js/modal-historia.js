const modal = document.getElementById("modal-historia");
const btn = document.getElementById("open-historia");
const closeBtn = document.querySelector(".close-btn");

// Abrir la pestaña al hacer clic
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar al hacer clic en la (X)
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const shareBtn = document.getElementById('share-button');

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'Hojaldrearte',
      text: 'Mira estos pasteles de hojaldre artesanales, ¡tienen 144 capas!',
      url: window.location.href // Toma la URL actual de tu página
    })
    .then(() => console.log('Compartido con éxito'))
    .catch((error) => console.log('Error al compartir', error));
  } else {
    // Si el navegador no soporta la función (como en algunas PC), 
    // puedes hacer que copie el link al portapapeles o simplemente no haga nada.
    alert("Copia el enlace de la barra de direcciones para compartir.");
  }
});