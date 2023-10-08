document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add-btn");
    var tableBody = document.querySelector("#data-table tbody");

    addButton.addEventListener("click", function () {
        // Generate random data for the new device
        var id = Math.floor(Math.random() * 1000) + 1;
        var deviceName = "Smart Device " + id;
        var status = Math.random() > 0.5 ? "Online" : "Offline";
        var location = "Location " + Math.floor(Math.random() * 10) + 1;

        // Add the new device to the table
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${deviceName}</td>
            <td>${status}</td>
            <td>${location}</td>
        `;
        tableBody.appendChild(newRow);
    });
});
