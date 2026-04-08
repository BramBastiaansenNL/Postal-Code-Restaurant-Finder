async function fetchRestaurants() {
    const postcodeInput = document.getElementById("postcode");
    const postcode = postcodeInput.value.replace(/\s+/g, "").toUpperCase();

    const loading = document.getElementById("loading");
    const errorDiv = document.getElementById("error");
    const results = document.getElementById("results");

    // Reset UI
    errorDiv.classList.add("hidden");
    results.innerHTML = "";
    loading.classList.remove("hidden");

    try {
        console.log("Fetching postcode:", postcode);

        const response = await fetch(
            `https://corsproxy.io/?https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`
        );

        console.log("Response:", response);

        if (!response.ok) {
            throw new Error("API error");
        }

        const data = await response.json();

        console.log("Data:", data);

        let restaurants = data.restaurants;

        if (!restaurants || restaurants.length === 0) {
            throw new Error("No restaurants found");
        }

        // Limit to 10
        restaurants = restaurants.slice(0, 10);

        // Sort by rating (default)
        restaurants.sort((a, b) => b.rating.starRating - a.rating.starRating);

        displayRestaurants(restaurants);

    } catch (error) {
        showError(error.message);
    } finally {
        loading.classList.add("hidden");
    }
}

function displayRestaurants(restaurants) {
    const results = document.getElementById("results");

    restaurants.forEach(r => {
        const cuisines = r.cuisines.map(c => c.name).join(", ");

        const rating = r.rating.starRating || 0;

        const stars = "⭐".repeat(Math.round(rating));

        const address = r.address
            ? `${r.address.firstLine || ""}, ${r.address.city || ""}`
            : "Address not available";

        const card = `
            <div class="card">
                <h2>${r.name}</h2>
                <p><strong>Cuisines:</strong> ${cuisines}</p>
                <p><strong>Rating:</strong> ${rating} ${stars}</p>
                <p><strong>Address:</strong> ${address}</p>
            </div>
        `;

        results.innerHTML += card;
    });
}

function showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}