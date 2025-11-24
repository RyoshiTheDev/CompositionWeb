/* ============================================
   CS2 ITEMS DATABASE (WITH YOUR UPLOADED IMAGES)
   Rarity tiers + drop chances
   ============================================ */

// ----- IMAGE PATHS -----
const itemImages = {
   
    pandoras: "img/Pandoras_gloves.webp",
    fadeButterfly: "img/Fade_butterfly.jpg",
    talonSapphire: "img/Talon_knife.jpg",
    awpZeno: "img/Blue_sniper.webp",
    famas: "img/simple_famas.webp",
    mp7Crimson: "img/purple_skin.webp",
    m9Blue: "img/m9_blue.webp",
    m4Fade: "img/M4_fade.png",
    akCase: "img/case_hardened_ak47.webp",
    goldKnife: "img/Knife_gold.jpg"
};

console.log("famas:", itemImages.famas);
console.log("awpZeno:", itemImages.awpZeno);


;


// ----- LEGENDARY TIER (2%) -----
const legendaryItems = [
    { name: "Pandora’s Box Gloves", img: itemImages.pandoras, rarity: "legendary" },
    { name: "Butterfly Knife | Fade", img: itemImages.fadeButterfly, rarity: "legendary" },
    { name: "Talon Knife | Sapphire", img: itemImages.talonSapphire, rarity: "legendary" },
    { name: "M4A1-S | Fade", img: itemImages.m4Fade, rarity: "legendary" },
    { name: "AK-47 | Case Hardened (Blue Gem)", img: itemImages.akCase, rarity: "legendary" },
    { name: "Gold Specialist Knife", img: itemImages.goldKnife, rarity: "legendary" }
];

// ----- EPIC TIER (8%) -----
const epicItems = [
    { name: "AWP | Zeno", img: itemImages.awpZeno, rarity: "epic" }
];

// ----- RARE TIER (20%) -----
const rareItems = [
    { name: "FAMAS | Half Sleeve", img: itemImages.famas, rarity: "rare" },
    { name: "MP7 | Crimson Foil", img: itemImages.mp7Crimson, rarity: "rare" },
    { name: "MP5-SD | Savannah Halftone", img: itemImages.m9Blue, rarity: "rare" }
];

// ----- COMMON TIER (70%) -----
const commonItems = [
    { name: "Basic Weapon Skin", img: itemImages.famas, rarity: "common" },
    { name: "Low-Tier Sticker", img: itemImages.mp7Crimson, rarity: "common" },
    { name: "Low-Tier Case Skin", img: itemImages.awpZeno, rarity: "common" }
];

// Export for loot.js
const lootTable = {
    legendary: legendaryItems,
    epic: epicItems,
    rare: rareItems,
    common: commonItems
};

const dropOdds = {
    legendary: 0.02, // 2%
    epic: 0.10,       // 8%
    rare: 0.30,       // 20%
    common: 0.70      // 70%
};

console.log("Loaded correct ITEMS.JS");

