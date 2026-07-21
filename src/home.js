export const homePage = () => {
    const contentContainer = document.createElement("div");
    const contentDiv = document.querySelector("#content");
    contentContainer.innerHTML =
        `        <h1>Teddy's Tapas</h1>
        <img src="teddystapas.jpg" alt="Teddy's Tapas">
        <p class="tagline">Where Every Bite is Bear-y Delicious!</p>
        <p>Discover the coziest corner of flavor town at Teddy's Tapas, the charming little restaurant that serves up Spanish-inspired small plates with a big bear hug of warmth and whimsy. Whether you're gathering with friends for a lively evening or treating yourself to a quiet moment of delight, Teddy's turns every meal into a paws-itively unforgettable experience. Our intimate dining room feels like a teddy bear picnic come to life — think soft lighting, playful bear-themed décor, and the irresistible aroma of sizzling garlic, fresh herbs, and golden honey.</p>
        <p>From the first "bear-y" good bite to the last sweet sip, Teddy's Tapas is pure comfort with a side of adventure. Come for the tapas, stay for the smiles (and maybe a teddy bear to take home).</p>`;

    contentDiv.appendChild(contentContainer);
}