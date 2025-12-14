function getData() {
    // NESTED
    fetch("./assets/data.json")
        .then(response => response.json())
        .then(items => {
            items.forEach(item => {
                console.log(item)

                const card = document.createElement("div")
                const href = `detail.html?id=${encodeURIComponent(item.id)}`;
                const productList = document.getElementById("productList")

                card.className = "product"
                card.style.backgroundImage = `url(${item.image})`

                card.innerHTML = `
                <div class="product-content">
                <h1 class="title" style="color:#6AECE1;">${item.title}</h1>
                
                <p class="description">${item.description}</p>

                <div class="product-stats">

                <div class="stat">
                    <span class="label">Warna</span>
                    <span class="value">${item.color}</span>
                </div>

                <div class="stat">
                    <span class="label">Baterai</span>
                    <span class="value">${item.battery}</span>
                </div>

                <div class="stat">
                    <span class="label">Bobot</span>
                    <span class="value">${item.weight}</span>
                </div>

                <div class="stat">
                <span class="label">Latency</span>
                <span class="value">${item.latency}</span>
                </div>

                <div class="stat">
                    <span class="label">Harga</span>
                    <span class="value">${item.price}</span>
                </div>

                </div>
                `;

                const content = card.querySelector(".product-content")

                if (content) {
                    content.onclick = () => {
                        window.location.href = href
                    }
                }
                productList.appendChild(card)
            });
        })
}

getData();