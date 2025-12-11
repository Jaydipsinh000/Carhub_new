let categorycontainer = document.getElementById('car-category');

const categories = [
  "All",
  ...new Set(cars.map(car => car.category)),
];

// =========================
// RENDER CATEGORY BUTTONS
// =========================
function renderCategories() {
    categorycontainer.innerHTML = `
        <h2>Category</h2>`;

    categories.forEach(cat => {
        let btn = document.createElement("button");
        btn.textContent = cat;
        btn.dataset.category = cat;

        if (cat === "All") btn.classList.add("active");

        btn.addEventListener("click", (e) => {
            document.querySelectorAll('#car-category button')
                .forEach(b => b.classList.remove("active"));

            e.currentTarget.classList.add("active");

            filtercategory(cat);
        });

        categorycontainer.appendChild(btn);
    });
}

// =========================
// FILTER CARS BY CATEGORY
// =========================
function filtercategory(category) {
    const filtered = category === "All"
        ? cars
        : cars.filter(car => car.category === category);

    document.getElementById("car-container").innerHTML = "";
    renderCars(filtered);
}

// =========================
// RENDER CAR ITEMS
// =========================
function renderCars(list) {
    const container = document.getElementById("car-container");
    container.innerHTML = "";

    list.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-item");

        carDiv.innerHTML = `
            <div class="car-img-box">
                <img src="${car.image}" alt="${car.name}">
            </div>

            <h3>${car.name}</h3>
            <p class="price">₹${car.price}</p>

            <div class="details-box">
                <p><strong>Category:</strong> ${car.category}</p>
                <p><strong>Mileage:</strong> ${car.details.mileage}</p>
                <p><strong>Fuel:</strong> ${car.details.fuel}</p>
                <p><strong>Transmission:</strong> ${car.details.transmission}</p>
            </div>

            <button class="view-btn" onclick="openCarDetails(${car.id})">View Details</button>
        `;

        container.appendChild(carDiv);
    });
}

//  OPEN DETAILS PAGE

function openCarDetails(id) {
    window.location.href = `cardetail.html?id=${id}`;
}


// =========================
// INITIAL CALLS
// =========================
renderCategories();
renderCars(cars);
