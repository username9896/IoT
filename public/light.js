document.addEventListener("DOMContentLoaded", function () {
    var brightnessInput = document.getElementById("brightness");
    var colorInput = document.getElementById("color");
    var lightBoxes = document.querySelectorAll(".light-box");

    brightnessInput.addEventListener("input", function () {
        updateLights();
    });

    colorInput.addEventListener("input", function () {
        updateLights();
    });

    function updateLights() {
        var brightnessValue = brightnessInput.value;
        var colorValue = colorInput.value;
        var rgbColor = hexToRgb(colorValue);

        // Adjust brightness
        var adjustedColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${brightnessValue / 100})`;

        // Apply color and brightness to all light boxes
        lightBoxes.forEach(function (lightBox) {
            lightBox.style.backgroundColor = adjustedColor;
            lightBox.style.color = getTextColor(rgbColor.r, rgbColor.g, rgbColor.b);
        });
    }

    // Function to convert hex color to RGB
    function hexToRgb(hex) {
        // Remove the hash character if it exists
        hex = hex.replace(/^#/, '');

        // Parse the hex value to RGB components
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return { r: r, g: g, b: b };
    }

    // Function to determine text color based on brightness
    function getTextColor(r, g, b) {
        // Calculate the relative luminance to determine brightness
        var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Use a threshold to determine if text should be light or dark
        return luminance > 0.5 ? "#FFA500" : "#FFFFFF"; // Orange if bright, white if dark
    }
});
