let searchTimer;
let currentView = "list";

document.getElementById("search").addEventListener("input", function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
    const keyword = this.value.toLowerCase();

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(keyword)
    );
    renderFilteredProducts(filtered);
    },500);
    })

    function renderFilteredProducts(list) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.innerText = `${p.name} - ${p.price} - ${p.category}`;
    app.appendChild(div);
  });
}



let products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Mobile", price: 20000, category: "Electronics" }
];

function renderProducts() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.innerText = `${p.name} - ${p.price} - ${p.category}`;
    app.appendChild(div);
  });
}

function addProduct() {
  console.log("addProduct called");

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;

  if (name === "" || category === "" || isNaN(price)) {
    alert("Fill all fields");
    return;
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  console.log("UPDATED ARRAY:", products);

  renderProducts();
}

document.getElementById("addBtn").addEventListener("click", addProduct);

renderProducts();

function renderProducts(filteredList = null) {
  const list = filteredList || products;
  const app = document.getElementById("app");
  app.innerHTML = "";

  if(currentView === "list") {
    // List view
    const table = document.createElement("table");
    list.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${p.name}</td><td>${p.price}</td><td>${p.category}</td>`;
      table.appendChild(row);
    });
    app.appendChild(table);
  } else {
    // Card view
    const container = document.createElement("div");
    container.classList.add("card-container");
    list.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `<b>${p.name}</b><br>Price: ${p.price}<br>Category: ${p.category}`;
      container.appendChild(div);
    });
    app.appendChild(container);
  }
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;

  if(!name || !category || isNaN(price)) {
    alert("Fill all fields");
    return;
  }

  products.push({id: products.length+1, name, price, category});
  renderProducts();
}

document.getElementById("search").addEventListener("input", function() {
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    const keyword = this.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    renderProducts(filtered);
  }, 500);
});

document.getElementById("toggleBtn").addEventListener("click", function() {
  currentView = currentView === "list" ? "card" : "list";
  renderProducts();
});

renderProducts;