const refreshButton = document.querySelector('.refresh-btn');

const generatePalette = () => {
    let randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
   randomHex = ``;
}
refreshButton.addEventListener('click', generatePalette)