// Product data
const products = [
  {
    id: "1001",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "slayyin-black-tshirt 1.png",
      "black-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1003",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "black-tshirt 5.png",
      "slayyin-black-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1004",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "black-tshirt 3.png",
      "slayyin-black-tshirt 4.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1005",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "black-tshirt 2.png",
      "black-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1006",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "black-tshirt 1.png",
      "black-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1002",
    name: "Classic White T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "slayyin-white-tshirt oversized 1.png",
      "slayyin-white-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1007",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "slayyin-white-tshirt oversized 2.png",
      "black-tshirt 1.png",
      "black-tshirt 4.png",
      "black-tshirt 3.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1015",
    name: "College ID Card Holder",
    price: 299,
    salePrice: 249,
    images: [
      "slayyin-white-tshirt oversized 4.png",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },

  {
    id: "1008",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "blazer black.png",
      "blazer blue.png",
      "blazer brown.png",
      "blazer green.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1009",
    name: "Classic Black T-Shirt Oversized",
    price: 599,
    salePrice: 499,
    images: [
      "blazer blue.png",
      "blazer black.png",
      "blazer brown.png",
      "blazer green.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
  },

  {
    id: "1010",
    name: "Urban Hoodie",
    price: 1299,
    salePrice: 999,
    images: [
      "blazer brown.png",
      "blazer black.png",
      "blazer blue.png",
      "blazer green.png",
    ],
    category: "Casuals",
    description:
      "Stylish urban hoodie with modern design. Great for casual outings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black"],
    material: "80% Cotton, 20% Polyester",
  },
  {
    id: "1011",
    name: "College Blazer",
    price: 2499,
    salePrice: 1999,
    images: [
      "blazer green.png",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-formals",
    description:
      "Professional college blazer with embroidered logo. Perfect for formal events.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black"],
    material: "Premium Wool Blend",
  },
  {
    id: "1012",
    name: "College ID Card Holder",
    price: 299,
    salePrice: 249,
    images: [
      "product-idcard.png",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },

  {
    id: "1013",
    name: "College ID Card Holder",
    price: 299,
    salePrice: 249,
    images: [
      "product-cap.png",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },

  {
    id: "1014",
    name: "College ID Card Holder by Slayyin College ID Card Holder by Slayyin",
    price: 299,
    salePrice: 249,
    images: [
      "product-mug.png",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },

  {
    id: "4",
    name: "College ID Card Holder",
    price: 299,
    salePrice: 249,
    images: [
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },

  {
    id: "4",
    name: "College ID Card Holder",
    price: 299,
    salePrice: 249,
    images: [
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
      "hoopers-showcase.jpg",
    ],
    category: "college-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
  },
];

// Load products function
function loadProducts(category = "all") {
  const productsContainer = document.getElementById("productsContainer");
  const seeMoreSection = document.getElementById("seeMoreSection");

  if (!productsContainer) {
    console.error("Products container not found");
    return;
  }

  productsContainer.innerHTML = ""; // Clear existing products

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  // Show/hide "See More" button based on product count and screen size
  // Desktop: 4 columns, Tablet/Mobile: 2 columns
  const getColumnsPerRow = () => {
    if (window.innerWidth <= 768) return 2; // Mobile/Tablet: 2 columns
    return 4; // Desktop: 4 columns
  };

  const columnsPerRow = getColumnsPerRow();
  const productsPerTwoRows = columnsPerRow * 2;

  if (filteredProducts.length > productsPerTwoRows) {
    if (seeMoreSection) {
      seeMoreSection.style.display = "block";
    }
    // Ensure limited class is applied for initial state
    productsContainer.classList.add("limited");
  } else {
    if (seeMoreSection) {
      seeMoreSection.style.display = "none";
    }
    // Remove limited class if there are few products
    productsContainer.classList.remove("limited");
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Create image element with error handling
    const img = document.createElement("img");
    img.src = product.images[0] || "placeholder.jpg";
    img.alt = product.name;
    img.onerror = function () {
      this.src = "placeholder.jpg";
      console.error(`Failed to load image for product: ${product.name}`);
    };

    productCard.innerHTML = `
      <div class="product-image">
        ${img.outerHTML}
        <div class="wishlist-icon" onclick="event.stopPropagation(); addToWishlist('${
          product.id
        }')">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-price">
          ${
            product.salePrice
              ? `<span class="sale-price">₹${product.salePrice.toFixed(
                  2
                )}</span>
               <span class="original-price">₹${product.price.toFixed(
                 2
               )}</span>`
              : `<span>₹${product.price.toFixed(2)}</span>`
          }
        </div>
        <button class="buy-now-btn" onclick="event.stopPropagation(); redirectToWhatsApp('${
          product.id
        }', '${product.name}', ${product.salePrice || product.price})">
          <i class="fab fa-whatsapp"></i> Buy Now
        </button>
      </div>
    `;

    productCard.onclick = () => {
      // Store product data in localStorage for the product details page
      localStorage.setItem("currentProduct", JSON.stringify(product));
      window.location.href = `product-details.html?id=${product.id}`;
    };

    productsContainer.appendChild(productCard);
  });
}

// Search functionality
function searchProducts(searchTerm, resultsContainer) {
  try {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="search-result-item no-results">No products found</div>';
    } else {
      resultsContainer.innerHTML = results
        .map(
          (product) => `
            <div class="search-result-item" onclick="window.location.href='product-details.html?id=${
              product.id
            }'">
              <img src="${product.images[0] || "placeholder.jpg"}" alt="${
            product.name
          }">
              <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">
                  ${
                    product.salePrice
                      ? `<span class="sale-price">₹${product.salePrice.toFixed(
                          2
                        )}</span>
                         <span class="original-price">₹${product.price.toFixed(
                           2
                         )}</span>`
                      : `<span>₹${product.price.toFixed(2)}</span>`
                  }
                </div>
              </div>
            </div>
          `
        )
        .join("");
    }
    resultsContainer.classList.add("active");
  } catch (error) {
    console.error("Error searching products:", error);
    resultsContainer.innerHTML =
      '<div class="search-result-item no-results">Error searching products</div>';
    resultsContainer.classList.add("active");
  }
}

// See More functionality
function toggleSeeMore() {
  const productsContainer = document.getElementById("productsContainer");
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const seeMoreText = seeMoreBtn.querySelector(".see-more-text");

  if (productsContainer.classList.contains("limited")) {
    // Expand to show all products
    productsContainer.classList.remove("limited");
    seeMoreText.textContent = "See Less";

    // Smooth transition
    productsContainer.style.transition =
      "max-height 0.8s ease, overflow 0.8s ease";

    // After expansion, ensure no clipping on hover
    setTimeout(() => {
      productsContainer.style.overflow = "visible";
    }, 800);
  } else {
    // Collapse to show only 2 rows
    productsContainer.classList.add("limited");
    seeMoreText.textContent = "See More";

    // Reset overflow for limited view
    productsContainer.style.overflow = "hidden";
    productsContainer.style.transition =
      "max-height 0.8s ease, overflow 0.8s ease";

    // Scroll back to the products section for better UX
    setTimeout(() => {
      document.getElementById("featured-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}

// Initialize products functionality when DOM is loaded
function initializeProducts() {
  // Initialize category buttons
  const categoryButtons = document.querySelectorAll(".category-btn");
  let currentCategory = "all";

  // Add click event listeners to category buttons
  if (categoryButtons) {
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");
        // Update current category
        currentCategory = button.dataset.category;
        // Load products for selected category
        loadProducts(currentCategory);
      });
    });
  }

  // Initialize search functionality
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const mobileSearchResults = document.getElementById("mobileSearchResults");
  let searchTimeout;

  function handleSearch(input, resultsContainer) {
    clearTimeout(searchTimeout);
    const searchTerm = input.value.toLowerCase().trim();

    if (searchTerm.length < 2) {
      resultsContainer.classList.remove("active");
      return;
    }

    searchTimeout = setTimeout(() => {
      searchProducts(searchTerm, resultsContainer);
    }, 300);
  }

  if (searchInput) {
    searchInput.addEventListener("input", () =>
      handleSearch(searchInput, searchResults)
    );
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", () =>
      handleSearch(mobileSearchInput, mobileSearchResults)
    );
  }

  // Load initial products
  loadProducts();

  // Handle window resize for responsive "See More" logic
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Get current category filter
      const activeCategory = document.querySelector(".category-btn.active");
      const currentCategory = activeCategory
        ? activeCategory.dataset.category
        : "all";
      loadProducts(currentCategory);
    }, 250);
  });

  // Initialize scroll reveal
  const productsContainer = document.getElementById("productsContainer");
  if (productsContainer) {
    function revealOnScroll() {
      const containerPosition =
        productsContainer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (containerPosition < screenPosition) {
        productsContainer.classList.add("active");
      }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }
}

// Export functions for global access (if needed)
window.loadProducts = loadProducts;
window.searchProducts = searchProducts;
window.toggleSeeMore = toggleSeeMore;
window.initializeProducts = initializeProducts; 