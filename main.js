// Array de productos
const products = [
    {
        name: 'Casco Y.100R Subsonic',
        price: 215.99,
        stars: 2.5,
        reviews: 320,
        seller: 'NEXX',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20132/nexx-y_100r_subsonic_black_gold_matt_01yr1014484100-4-M-20132577107.jpg?v=5971cb85a6dba96fa40f908800560960'
    },
    {
        name: 'Casco RPHA 12 Quartararo',
        price: 649.99,
        stars: 4.8,
        reviews: 180,
        seller: 'HJC',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20127/hjc-rpha_12_quartararo_replica_black_mc5_20127447-1-M-20127447235.jpg?v=088acff0d5c265d9d737ad40f4d394b0'
    },
    {
        name: 'Casco X.WST3 Zero Pro',
        price: 519.99,
        stars: 4.2,
        reviews: 450,
        seller: 'NEXX',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20132/nexx-x_wst3_zero_pro_carbon_red_matt_01xs323425883-1-M-2013258125.jpg?v=24e89ddf27da36d996be69ebee91da90'
    },
    {
        name: 'Casco Commander 2',
        price: 374.99,
        stars: 4.3,
        reviews: 275,
        seller: 'TechTrAIROHend',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20129/airoh-commander_2_white_pai54a13111801c-2-M-2012902615.jpg?v=f1ce48c520890a800c685310b80f6b72'
    },
    {
        name: 'Casco GT-Air 3 Nile TC9',
        price: 729.99,
        stars: 4.6,
        reviews: 198,
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20127/shoei-gt_air_3_nile_tc9_csgta307092-3-M-20127441122.jpg?v=306c255e6e0a01d6d4750b7d5215b2c1'
    },
    {
        name: 'Casco Skwal i3 Zarco',
        price: 399.95,
        stars: 4.7,
        reviews: 156,
        seller: 'SHARK',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20137/shark-cskskwali3_dk_zarfce_wvb-1-M-201371691.jpg?v=5e6ade36263d47cf7afbce6f5e87f5eb'
    },
    {
        name: 'Casco X-804 RS Ultra ',
        price: 689.95,
        stars: 4.4,
        reviews: 389,
        seller: 'NOLAN',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20129/nolan-x_804_rs_ultra_carbon_iridium_edition_carbon_iridescent_x840005810059-7-M-20129387161.jpg?v=5933c3c50a32d0c47ae9c136e65c020a'
    },
    {
        name: 'Casco Ridill 2 Assya ',
        price: 199.95,
        stars: 4.5,
        reviews: 234,
        seller: 'SHARK',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20121/shark-cskridill_2_anrs_kvv-2-M-2012197743.jpg?v=70ba9314a293d0e6485fbf19f185724b'
    },
    {
        name: 'Casco RPHA 1 Quartararo',
        price: 999.95,
        stars: 4.8,
        reviews: 167,
        seller: 'HJC',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20023/hjc-rpha_1_quartararo_le_mans_sp_mc28_18272805-3-M-20023685149.jpg?v=54623232c65b5e2906dc5ad5fb977a88'
    },
    {
        name: 'Casco ADF-9000 Air Feat',
        price: 439.95,
        stars: 4.3,
        reviews: 298,
        seller: 'SCORPION',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20054/scorpion-adf_9000_air_feat_black_silver_red_184_472_163_02-1-M-2005422290.jpg?v=9989d39ae8374cd32d14947beaf37269'
    },
    {
        name: 'Casco Exo-520 EVO AirLena',
        price: 259.95,
        stars: 3.8,
        reviews: 86,
        seller: 'SCORPION',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20054/scorpion-exo_520_evo_air_lena_matt_white_silver_red_172_499_310_02-1-M-20054214282.jpg?v=88b668c82c2f5f7cc8e0c6ecb5fa9e94'
    },
    {
        name: 'Casco Skwal i3 Venum',
        price: 399.95,
        stars: 4.3,
        reviews: 298,
        seller: 'SHARK',
        image: 'https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/20121/shark-skwal_i3_venum_black_red_gold_he0832e_krq-3-M-20121984145.jpg?v=7bda43402ea1af4e7a2e9cfd84643656'
    }
];

// Función para generar los filtros
function generateFilters() {
    const filtersSection = document.querySelector('.filters');
    filtersSection.innerHTML = `
        <h2>Filtros</h2>
        <div class="filter-options">
            <label>
                Precio máximo:
                <input type="number" id="maxPrice" min="0" step="10" placeholder="€">
            </label>
            <label>
                Estrellas mínimas:
                <select id="minStars">
                    <option value="0">Todas</option>
                    <option value="4">4+ estrellas</option>
                    <option value="4.5">4.5+ estrellas</option>
                </select>
            </label>
            <label>
                Vendedor:
                <select id="sellerFilter">
                    <option value="all">Todos</option>
                    <option value="NEXX">NEXX</option>
                    <option value="HJC">HJC</option>
                    <option value="TechTrAIROHend">TechTrAIROHend</option>
                    <option value="SHARK">SHARK</option>
                    <option value="NOLAN">NOLAN</option>
                    <option value="SCORPION">SCORPION</option>
                </select>
            </label>
        </div>
    `;

    // Añadir event listeners para los filtros
    document.getElementById('maxPrice').addEventListener('change', filterProducts);
    document.getElementById('minStars').addEventListener('change', filterProducts);
    document.getElementById('sellerFilter').addEventListener('change', filterProducts);
}

// Función para filtrar y generar las tarjetas de productos
function filterProducts() {
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const minStars = parseFloat(document.getElementById('minStars').value);
    const selectedSeller = document.getElementById('sellerFilter').value;
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= maxPrice;
        const starsMatch = product.stars >= minStars;
        const sellerMatch = selectedSeller === 'all' || product.seller === selectedSeller;
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        return priceMatch && starsMatch && sellerMatch && nameMatch;
    });

    generateProductCards(filteredProducts);
}

// Función para generar las tarjetas de productos
function generateProductCards(productsToShow = products) {
    const container = document.querySelector('.products-container');
    container.innerHTML = ''; // Limpiar contenedor

    productsToShow.forEach(product => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}€</p>
            <p class="seller">Vendido por ${product.seller}</p>
            <p class="rating">${product.stars} estrellas (${product.reviews} reseñas)</p>
        `;

        container.appendChild(productCard);
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    generateFilters();
    generateProductCards();

    // Añadir event listener para la barra de búsqueda
    document.getElementById('searchBar').addEventListener('input', filterProducts);
});