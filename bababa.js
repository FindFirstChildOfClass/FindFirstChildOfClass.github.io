elements.silver_powder = {
    color: "#C0C0C0",
    behavior: behaviors.POWDER,
    category: "powders",
    density: 10.5,
    state: "solid",
    description: "A fine metallic powder that conducts electricity.",
    conduct: 0.8,
};

elements.ruby_dust = {
    color: "#E0115F",
    behavior: behaviors.POWDER,
    category: "powders",
    density: 4.0,
    state: "solid",
    description: "Crystalline powder that sparkles in light.",
    temperature: 20,
    tempHigh: 2000,
    stateHigh: "molten_ruby",
};

elements.molten_ruby = {
    color: "#FF0000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 3.8,
    state: "liquid",
    temperature: 2050,
    tempLow: 2000,
    stateLow: "ruby_dust",
};

elements.bone_meal = {
    color: "#F8F6EA",
    behavior: behaviors.POWDER,
    category: "powders",
    density: 2.0,
    state: "solid",
    description: "Fertilizer that helps plants grow.",
    reactions: {
        "plant": { "elem1": null, "elem2": ["plant", "plant"] },
        "grass": { "elem1": null, "elem2": ["grass", "grass"] },
        "flower": { "elem1": null, "elem2": ["flower", "flower"] }
    }
};

elements.magnetic_dust = {
    color: "#4A4A4A",
    behavior: [
        "XX|XX|XX",
        "M2|XX|M2",
        "M1|M1|M1",
    ],
    category: "powders",
    density: 5.0,
    state: "solid",
    description: "Magnetic powder that attracts to itself.",
};

elements.glow_powder = {
    color: ["#FFFF00", "#FFFFAA", "#FFFFFF"],
    behavior: behaviors.POWDER,
    category: "powders",
    density: 1.2,
    state: "solid",
    description: "Glowing powder that emits light.",
    tick: function(pixel) {
        if (Math.random() < 0.1) {
            pixel.color = pixelColorPick(pixel)
        }
    }
};

runAfterLoad(function() {
    if (enabledMods.includes("mods.js")) {
        elements.silver_powder.maxSize = 1;
        elements.ruby_dust.maxSize = 1;
        elements.bone_meal.maxSize = 1;
        elements.magnetic_dust.maxSize = 1;
        elements.glow_powder.maxSize = 1;
    }
});
