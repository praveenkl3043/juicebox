function logout() {

    window.location.href = "login.html";

}


function showShopStatus() {

    const statusOptions = document.getElementById("statusOptions");

    statusOptions.classList.toggle("show");

}


function setShopStatus(status, event) {

    event.stopPropagation();

    fetch("http://127.0.0.1:5000/api/shop/status", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            status: status
        })

    })

    .then(response => response.json())

    .then(data => {

        const shopStatus = document.getElementById("shopStatus");
        const statusOptions = document.getElementById("statusOptions");

        if (data.status === "open") {
            shopStatus.textContent = "🟢 Open";
        }

        else if (data.status === "break") {
            shopStatus.textContent = "⏸️ Break";
        }

        else if (data.status === "closed") {
            shopStatus.textContent = "🔴 Closed";
        }

        statusOptions.classList.remove("show");

    })

    .catch(error => {

        console.error("Error updating shop status:", error);

        alert("Unable to update shop status.");

    });
}
function loadShopStatus() {

    fetch("http://127.0.0.1:5000/api/shop/status")

        .then(response => response.json())

        .then(data => {

            const shopStatus = document.getElementById("shopStatus");

            if (data.status === "open") {
                shopStatus.textContent = "🟢 Open";
            }

            else if (data.status === "break") {
                shopStatus.textContent = "⏸️ Break";
            }

            else if (data.status === "closed") {
                shopStatus.textContent = "🔴 Closed";
            }

        })

        .catch(error => {

            console.error("Error loading shop status:", error);

        });
}


loadShopStatus();