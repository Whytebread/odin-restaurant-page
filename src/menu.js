export const menuPage = () => {
    const contentContainer = document.createElement("div");
    const contentDiv = document.querySelector("#content");
    contentContainer.innerHTML =
        `<h1>Menu<h1>
            
        <p>All tapas are designed for sharing — because everything’s better with friends (and a little bear-y sweetness)!<p>

            <h3>Paw-some Starters<h3>

            <ul>
                <li>Honey-Bear Bruschetta – Toasted bread topped with ricotta, wildflower honey, fresh figs, and a sprinkle of toasted almonds. The sweetest way to start your adventure. $9 </li>

                <li>Paw-Print Patatas Bravas – Crispy potatoes in a spicy tomato sauce with garlic aioli “bear claws.” So good you’ll want to paw-sitively lick the plate. $8 </li>

                <li>Teddy’s Classic Croquetas – Creamy jamón and béchamel bites, fried to golden perfection. Little bundles of joy, just like a teddy bear hug. $10</li>

            </ul>

            <h3>Bear-y Tasty Mains</h3>

            <ul>
                <li>Grilled Octo-Paws – Tender grilled octopus with paprika, olive oil, and lemon. Eight arms of flavor, zero scary bits. $14</li>
                
                <li>Cuddle-Up Chorizo & Honey – Spanish chorizo sautéed with local honey and rosemary. Sweet, spicy, and irresistibly huggable. $12</li>

                <li>Bear’s Favorite Gambas al Ajillo – Succulent shrimp in garlic, chili, and white wine. Piping hot and ready to make you roar with delight. $13</li>

                <li>Veggie Bear Bowl – Roasted seasonal vegetables, chickpea “honey” puree, and toasted pine nuts. Plant-based paws-itivity for our herbivore friends. $11</li>
            </ul>

            <h3>Sweet Ending Bites</h3>

            <ul>

                <li>Churro Bear Tails – Warm churros dusted with cinnamon sugar, served with chocolate dipping sauce and a honey bear drizzle. $8 </li>

                <li>Flan-tastic Teddy – Classic Spanish flan with a caramel bear paw on top. So smooth it’ll melt your heart. $7 </li>

            <h3>Paw-some Drinks</h3>

            <ul>
                <li>Teddy’s Honey Sangria – Red or white wine with fresh fruit, orange juice, and a generous splash of local honey. The bear necessities in a glass. $11</li>

                <li>Bear-y Berry Mojito – Fresh mint, lime, berries, and a touch of honey. Refreshing enough to make you do a happy bear dance. $12</li>

                <li>Espresso Bear-ccino – Rich espresso with steamed milk and a dusting of cocoa “fur.” Perfect for after-dinner cuddles. $6</li>

                <li>Non-Alcoholic Paw Punch – Sparkling grape juice, berries, and honey. For our tiniest teddy bears. $5</li>

                <li>Add a side of “Bear Hugs” (warm bread with garlic butter and honey) for $6.</li>`;

    contentDiv.appendChild(contentContainer);
}