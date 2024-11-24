document.addEventListener("DOMContentLoaded", () => {
    const streetField = document.querySelector("#street");
  
    const streets = [
      "Avenida Paseo de la Reforma",
      "Calle Río Lerma",
      "Calle Río Elba",
      "Calle Río Sena",
      "Calle Río Tíber",
      "Calle Río Nilo",
      "Calle Río Amazonas",
      "Calle Río Rhin",
    ];
  
    streets.forEach(street => {
      const option = document.createElement("option");
      option.value = street;
      option.textContent = street;
      streetField.appendChild(option);
    });
  
    document.querySelectorAll(".pet-button").forEach(button => {
      button.addEventListener("click", () => {
        const petType = button.dataset.type;
  
        document.querySelector(".button-container").classList.add("hidden");
        document.querySelector("#form-section").classList.remove("hidden");
  
        const form = document.querySelector("#location-form");
        form.onsubmit = (e) => {
          e.preventDefault();
          const city = document.querySelector("#city").value;
          const colony = document.querySelector("#colony").value;
          const street = document.querySelector("#street").value;
  
          const location = `${street}, ${colony}, ${city}`;
  
          const url = `https://www.google.com/maps/search/${encodeURIComponent(`centro de reciclaje ${petType} en ${location}`)}`;
          window.open(url, "_blank");
        };
      });
    });
  });
  