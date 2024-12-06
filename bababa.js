elements.magic_sand = {
    color: ["#ffcc00", "#ff9900", "#ff6600"], // Glowing colors
    behavior: [
        "XX|M1|XX", // The element is stable and doesn't fall
        "M1|CH:water>glowing_water|M1", // If touching water, transform into glowing water
        "XX|M1|XX"
    ],
    category: "powders", // Categorized as a powder element
    state: "solid", // Solid state
    density: 1500, // Medium density
    
    tick: function(pixel) {
        // Change color over time
        if (!pixel.colorIndex) pixel.colorIndex = 0;
        pixel.colorIndex = (pixel.colorIndex + 1) % this.color.length;
        pixel.color = this.color[pixel.colorIndex];
    },
};

// Add a new element: Glowing Water
elements.glowing_water = {
    color: "#00ccff",
    behavior: behaviors.LIQUID, // Default liquid behavior
    category: "liquids", // Categorized as a liquid
    state: "liquid", // Liquid state
    density: 1000, // Similar to water
    
    // Emit light (simulated by glowing effect)
    light: 10, // Glow intensity
};
