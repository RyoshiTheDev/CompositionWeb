/* ======================================================
   LOOT BOX ENGINE
   Uses: items.js (lootTable + dropOdds)
   Handles: rolls, sounds, animations, spending tracker
   ====================================================== */

// SPENDING TRACKER
let totalSpent = 0;
const spinCost = 2.49;

// SOUND FILES
const spinSound = new Audio("sounds/spin.mp3");
const openSound = new Audio("sounds/open.mp3");
const clickSound = new Audio("sounds/neonClick.mp3");
const legendarySound = new Audio("sounds/legendaryDrop.mp3");

// ROLL FUNCTION ----------------------------------------
function openLootBox() {
    clickSound.play();

    const box = document.getElementById("lootBoxImage");
    const resultText = document.getElementById("result");
    const itemImage = document.getElementById("itemImage");

    // RESET
    resultText.innerHTML = "";
    itemImage.src = "";
    itemImage.className = "";

    // Add shake animation
    box.classList.add("shake");

    spinSound.play();

    // Roll delay (simulate animation)
    setTimeout(() => {
        box.classList.remove("shake");
        openSound.play();

        const roll = Math.random();
        let rarityResult;
        let itemResult;

        // RARITY BASED ON ODDS
        if (roll < dropOdds.legendary) {
            rarityResult = "legendary";
            itemResult = pickRandom(lootTable.legendary);
        } else if (roll < dropOdds.legendary + dropOdds.epic) {
            rarityResult = "epic";
            itemResult = pickRandom(lootTable.epic);
        } else if (roll < dropOdds.legendary + dropOdds.epic + dropOdds.rare) {
            rarityResult = "rare";
            itemResult = pickRandom(lootTable.rare);
        } else {
            rarityResult = "common";
            itemResult = pickRandom(lootTable.common);
        }

        // UPDATE UI
        resultText.innerHTML = itemResult.name;
        resultText.className = rarityResult;

        itemImage.src = itemResult.img;
        itemImage.className = rarityResult;

        // LEGENDARY FLASH EFFECT
        if (rarityResult === "legendary") {
            legendarySound.play();
            itemImage.classList.add("legendary-flash");
        }

        // SPENDING COUNTER
        totalSpent += spinCost;
        document.getElementById("spent").innerHTML =
            `Total Spent: $${totalSpent.toFixed(2)}`;

    }, 1500); // Wait 1.5 seconds
}

// PICK RANDOM ITEM FROM TIER ---------------------------
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
