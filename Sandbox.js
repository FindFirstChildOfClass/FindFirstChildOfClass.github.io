// Mod name and information
elements.mod = {
    name: "Chemistry and Physics Pack",
    description: "Adds new physics and chemistry elements",
    author: "Claude",
    version: "1.0",
};

// Run when the mod loads
runAfterLoad(function() {
    // Quantum Particle
    if(!elements.quantum_particle) {
        elements.quantum_particle = {
            color: "#7F00FF",
            behavior: behaviors.POWDER,
            category: "energy",
            state: "solid",
            density: 0.1,
            temp: -273.15,
            conduct: 1,
            tempHigh: 100000,
            reactions: {
                "antimatter": { "elem1": null, "elem2": "radiation" }
            },
            tick: function(pixel) {
                if (Math.random() < 0.1) {
                    if (pixel.temp > 0) {
                        changeElement(pixel, "radiation");
                    }
                    if (Math.random() < 0.01) {
                        createPixel("quantum_particle", pixel.x + (Math.random()*2-1), pixel.y + (Math.random()*2-1));
                    }
                }
            }
        };
    }

    // Dark Matter
    if(!elements.dark_matter) {
        elements.dark_matter = {
            color: "#000033",
            behavior: behaviors.LIQUID,
            category: "special",
            density: 99999,
            temp: -270,
            conduct: 0,
            viscosity: 100000,
            reactions: {
                "matter": { "elem1": null, "elem2": "radiation" }
            },
            tick: function(pixel) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (Math.random() < 0.1) {
                            tryMove(pixel, pixel.x+i, pixel.y+j);
                        }
                    }
                }
            }
        };
    }

    // Plasma Field
    if(!elements.plasma_field) {
        elements.plasma_field = {
            color: ["#FF4500", "#FF6347", "#FF7F50"],
            behavior: behaviors.GAS,
            category: "energy",
            density: 0.01,
            temp: 10000,
            conduct: 1,
            reactions: {
                "water": { "elem1": "steam", "elem2": "steam" }
            },
            tick: function(pixel) {
                if (pixel.temp < 5000) {
                    changeElement(pixel, "fire");
                }
                if (Math.random() < 0.05) {
                    pixel.temp += 100;
                }
            }
        };
    }

    // Neutronium
    if(!elements.neutronium) {
        elements.neutronium = {
            color: "#4A4A4A",
            behavior: behaviors.SOLID,
            category: "special",
            density: 999999,
            temp: 1000000,
            conduct: 1,
            hardness: 1,
            tick: function(pixel) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (i === 0 && j === 0) continue;
                        let newPixel = pixelMap[pixel.x+i]?.[pixel.y+j];
                        if (newPixel && newPixel.element !== "neutronium") {
                            changeElement(newPixel, "neutronium");
                        }
                    }
                }
            }
        };
    }

    // Quantum Foam
    if(!elements.quantum_foam) {
        elements.quantum_foam = {
            color: ["#E6E6FA", "#D8BFD8", "#DDA0DD"],
            behavior: behaviors.LIQUID,
            category: "special",
            density: 0.001,
            temp: -273.15,
            conduct: 0,
            viscosity: 0.1,
            tick: function(pixel) {
                if (Math.random() < 0.1) {
                    let randomElem = ["quantum_particle", "radiation", "void"][Math.floor(Math.random()*3)];
                    if (Math.random() < 0.01) {
                        createPixel(randomElem, pixel.x, pixel.y);
                    }
                }
            }
        };
    }

    // Add reactions to existing elements
    if(elements.radiation && elements.radiation.reactions) {
        elements.radiation.reactions.quantum_particle = { "elem1": "quantum_foam", "elem2": null };
    }
    if(elements.void && elements.void.reactions) {
        elements.void.reactions.dark_matter = { "elem1": null, "elem2": "quantum_foam" };
    }
});
