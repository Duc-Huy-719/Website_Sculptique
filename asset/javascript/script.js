function setMain(btn) {
        const img = btn.querySelector("img");
        const main = document.getElementById("mainImage");
        if (img && main) main.src = img.src;
      }

      function openNutrition() {
        document.getElementById("nutritionModal").classList.remove("hidden");
      }
      function closeNutrition() {
        document.getElementById("nutritionModal").classList.add("hidden");
      }

      function setRefill(label) {
        // demo only
        console.log("Refill:", label);
      }

      function syncStickyPrice() {
        const selected = document.querySelector('input[name="bundle"]:checked');
        if (!selected) return;
        const card = selected.closest("label");
        const price = card?.dataset?.price || "$31.96";
        document.getElementById("stickyPrice").textContent = price;
      }

      function addToCart() {
        syncStickyPrice();
        const selected = document.querySelector('input[name="bundle"]:checked');
        const card = selected?.closest("label");
        const price = card?.dataset?.price || "";
        const compare = card?.dataset?.compare || "";
        const autoship = document.getElementById("autoship")?.checked;

        alert(
          "Demo Add to Cart\n" +
            "Selected price: " +
            price +
            (compare ? " (was " + compare + ")" : "") +
            "\nAutoship: " +
            (autoship ? "Yes" : "No")
        );
      }

      // update sticky price when changing bundles
      document.addEventListener("change", (e) => {
        if (e.target && e.target.name === "bundle") syncStickyPrice();
      });
      syncStickyPrice();