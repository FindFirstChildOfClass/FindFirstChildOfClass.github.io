elements.firestone = {
    name: "Firestone",
    color: "#FF4500",
    behavior: behaviors.SOLID,
    category: "special",
    density: 3000,
    tempHigh: 1500,
    stateHigh: "lava",
    reactions: {
        water: { elem1: "steam", elem2: "stone" },
    },
    burn: 30,
    burnTime: 60,
    burnInto: "ash",
    hidden: false,
};

elements.waterstone = {
    name: "Waterstone",
    color: "#4682B4",
    behavior: behaviors.SOLID,
    category: "special",
    density: 2500,
    tempHigh: 1200,
    stateHigh: "mud",
    reactions: {
        fire: { elem1: "steam", elem2: "stone" },
    },
    hidden: false,
};

elements.airstone = {
    name: "Airstone",
    color: "#87CEEB",
    behavior: behaviors.SOLID,
    category: "special",
    density: 200,
    tempHigh: 800,
    stateHigh: "cloud",
    reactions: {
        fire: { elem1: "smoke" },
        water: { elem1: "mist" },
    },
    hidden: false,
};
