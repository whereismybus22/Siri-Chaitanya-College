document.addEventListener("DOMContentLoaded", function () {
    const incharges = [
        { name: "Incharge 1", description: "Bhaskar", phone: "tel:9398546535", whatsapp: "https://wa.me/9398546535" }
    ];

    const drivers = [
        { name: "Route 1", description: "Bus Driver", phone: "tel:9550425792", whatsapp: "https://wa.me/9550425792" }
    ];

    const inchargeContainer = document.getElementById("busIncharge");
    const driversContainer = document.getElementById("busDrivers");
    const btnIncharges = document.getElementById("showIncharges");
    const btnDrivers = document.getElementById("showDrivers");
    const sectionIncharges = document.getElementById("busInchargesDisplay");
    const sectionDrivers = document.getElementById("busDriversDisplay");
    const allCards = document.querySelectorAll(".incharge-card"); 

    function populateCards(data, container) {
        container.innerHTML = "";
        if (data.length > 0) {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "incharge-card";
                card.innerHTML = `
                    <div class="left">
                        <i class="bi bi-person-fill person-icon"></i>
                        <div class="text-left ml-1">
                            <div class="incharge-name">${item.name}</div>
                            <div class="incharge-desc">${item.description}</div>
                        </div>
                    </div>
                    <div class="right">
                        <a href="${item.phone}" class="icon-link"><i class="bi bi-telephone-fill"></i></a>
                        <a href="${item.whatsapp}" class="icon-link" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }

    populateCards(incharges, inchargeContainer);
    populateCards(drivers, driversContainer);
    function filterCards(query) {
        const lowerCaseQuery = query.toLowerCase();
        const allCards = document.querySelectorAll(".incharge-card");
        allCards.forEach(card => {
            const nameElement = card.querySelector(".incharge-name");
            const descElement = card.querySelector(".incharge-desc");
            const name = nameElement ? nameElement.textContent.toLowerCase() : "";
            const desc = descElement ? descElement.textContent.toLowerCase() : "";
            card.style.display = (name.includes(lowerCaseQuery) || desc.includes(lowerCaseQuery)) ? "flex" : "none";
        });
    }

    document.getElementById("search").addEventListener("input", function () {
        filterCards(this.value);
    });

    document.getElementById("clearSearch").addEventListener("click", function () {
        document.getElementById("search").value = "";
        filterCards(""); 
    });

    btnIncharges.addEventListener("click", function () {
        inchargeContainer.style.display = "block";
        driversContainer.style.display = "none";
        sectionIncharges.style.display = "block";
        sectionDrivers.style.display = "none";
        btnIncharges.classList.add("active");
        btnDrivers.classList.remove("active");
        filterCards(document.getElementById("search").value); 
    });

    btnDrivers.addEventListener("click", function () {
        inchargeContainer.style.display = "none";
        driversContainer.style.display = "block";
        sectionIncharges.style.display = "none";
        sectionDrivers.style.display = "block";
        btnIncharges.classList.remove("active");
        btnDrivers.classList.add("active");
        filterCards(document.getElementById("search").value); 
    });
    inchargeContainer.style.display = "block";
    driversContainer.style.display = "none";
    sectionIncharges.style.display = "block";
    sectionDrivers.style.display = "none";
    btnIncharges.classList.add("active");
});
document.getElementById('contactdriverBtn').addEventListener('click', function() {
    window.location.href = '../pages/drivercontact.html'; 
});
