// Abre o modal com a imagem clicada e exibe o texto
function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt; // Adiciona o texto da imagem
}

// Fecha o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
