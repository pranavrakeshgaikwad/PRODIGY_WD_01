const watchCatalog = [
    
    { title: 'NP2576WM01 Analog Watch - For Women', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/l13whow0/watch/h/c/c/-original-imagcqzchcngfd7a.jpeg?q=70', price: '₹3,754', offer: '20% off', gender: 'Women', type: 'Analog' },
    { title: 'PWRM-King Day And Date Functioning High Quality Combo', brand: 'Piaoma', image: 'https://rukminim1.flixcart.com/image/612/612/l08gsy80/watch/z/i/3/1-pwrm-king-piaoma-men-original-imagc2k8ch8vkstx.jpeg?q=70', price: '₹270', offer: '86% off', gender: 'Unisex', type: 'none' },
    { title: '77085PP03 Volt Analog Watch - For Men', brand: 'SONATA', image: 'https://rukminim1.flixcart.com/image/612/612/l02r1jk0/watch/v/y/f/-original-imaf8qx8rmzayqrs.jpeg?q=70', price: '₹524', offer: '25% off', gender: 'Men', type: 'Analog' },
    { title: 'LCS-8188 TRENDING DAY & DATE FUNCTIONING Analog Watch', brand: 'LOIS CARON', image: 'https://rukminim1.flixcart.com/image/612/612/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=70', price: '₹319', offer: '82% off', gender: 'Unisex', type: 'Analog' },
    { title: 'Gents Exclusive 3 Designer Combo (Casual+PartyWear+Formal)', brand: 'Rizzly', image: 'https://rukminim1.flixcart.com/image/612/612/k48rwcw0/watch/d/z/y/gents-exclusive-3-designer-combo-rizzly-original-imaf5pu2gyaznhmc.jpeg?q=70', price: '₹343', offer: '61% off', gender: 'Unisex', type: 'none' },
    { title: 'Mesh Strap All Blue Men Watch & Free Premium King Stone', brand: 'WHITE STONE', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/watch/b/j/i/2-mesh-strap-all-blue-men-watch-free-premium-king-stone-bracelet-original-imagggbz5cvavzhk.jpeg?q=70', price: '₹200', offer: '59% off', gender: 'Men', type: 'none' },
    { title: 'NQ1805NM02 Analog Watch - For Men', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/kg2l47k0-0/watch/z/t/5/1805nm02-titan-original-imafwe7aupegsngp.jpeg?q=70', price: '₹5,476', offer: '15% off', gender: 'Men', type: 'Analog' },
    { title: 'Brand - A Digital Watch With Square LED Shockproof Multi', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/watch/k/l/x/2-brand-a-digital-watch-with-square-led-shockproof-multi-original-imagha9hmrbvn4kg.jpeg?q=70', price: '₹258', offer: '74% off', gender: 'Unisex', type: 'Digital' },
    { title: '38024PP25 Minimalists Analog Watch - For Men', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70', price: '₹680', offer: '20% off', gender: 'Men', type: 'Analog' },
    { title: 'VH000008C Analog Watch - For Women', brand: 'VAN HEUSEN', image: 'https://rukminim1.flixcart.com/image/612/612/kg8avm80-0/watch/2/f/c/vh000008c-van-heusen-original-imafwgaaukt5qyc8.jpeg?q=70', price: '₹1,350', offer: '54% off', gender: 'Women', type: 'Analog' },
    { title: 'HMTY-7008 ORIGINAL GOLD PLATED DAY & DATE FUNCTIONING F', brand: 'HYMT', image: 'https://rukminim1.flixcart.com/image/612/612/ku1k4280/watch/q/3/j/1-hmty-7008-hymt-men-original-imag79f5qgbyn4rn.jpeg?q=70', price: '₹470', offer: '84% off', gender: 'Unisex', type: 'none' },
    { title: 'CSD-276-GLD Original Gold Plating Day and Date Series A', brand: 'CASADO', image: 'https://rukminim1.flixcart.com/image/612/612/k1tm1e80/watch/s/k/d/csd-276-gld-casado-original-imafhrdbtjyzjyj2.jpeg?q=70', price: '₹283', offer: '90% off', gender: 'Unisex', type: 'none' },
    { title: 'ANLG-428-GREY-BROWN Matte Grey Dial | Caramel Brown Syn', brand: 'ANALOGUE', image: 'https://rukminim1.flixcart.com/image/612/612/ku1k4280/watch/0/u/d/1-anlg-428-grey-brown-analogue-men-original-imag79fpyp5esbhm.jpeg?q=70', price: '₹209', offer: '86% off', gender: 'Unisex', type: 'none' },
    { title: 'HL-2022 New Trending Full Black Round Waterproof Gym Fi', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/kxxl9jk0/watch/9/8/x/1-hl-2022-new-trending-full-black-round-waterproof-gym-fitness-original-imaga9u8te7hghvz.jpeg?q=70', price: '₹266', offer: '82% off', gender: 'Unisex', type: 'none' },
    { title: 'NN38045PP03 Trendies Digital Watch - For Men', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/7/c/g/c-38045pp03-fastrack-original-imaf8qx7vzuxrxr8.jpeg?q=70', price: '₹1,832', offer: '20% off', gender: 'Men', type: 'Digital' },
    { title: 'Unique Designed Waterproof Black Round Big Dial Digital', brand: 'HINISH', image: 'https://rukminim1.flixcart.com/image/612/612/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=70', price: '₹289', offer: '67% off', gender: 'Unisex', type: 'none' },
    { title: '7088-SILVER DAY AND DATE WORKING Analog Watch - For Me', brand: 'HMTr', image: 'https://rukminim1.flixcart.com/image/612/612/krjjde80/watch/c/o/e/7088-silver-hmtr-original-imag5b9qe7xhc4jz.jpeg?q=70', price: '₹248', offer: '84% off', gender: 'Unisex', type: 'Analog' },
    { title: 'New Combo Of Black and White Square Dial with Silicone', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/watch/0/g/t/2-new-combo-of-black-and-white-square-dial-with-silicone-strap-original-imagemq4bdgd4heg.jpeg?q=70', price: '₹266', offer: '82% off', gender: 'Unisex', type: 'none' },
    { title: 'CheckBlueRay0507 Day And Date Functioning Mens and Boys', brand: 'Espoir', image: 'https://rukminim1.flixcart.com/image/612/612/kcxpbww0/watch/e/w/j/checkblueray0507-espoir-original-imafty4ujpfwj3dv.jpeg?q=70', price: '₹261', offer: '85% off', gender: 'Unisex', type: 'none' },
    
];

function displayCatalog() {
    const catalogElement = document.getElementById('catalog');

    watchCatalog.forEach((watch, index) => {
        const watchCard = document.createElement('div');
        watchCard.classList.add('watch-card');
        watchCard.innerHTML = `
            <img src="${watch.image}" alt="${watch.title}" class="watch-image">
            <h3>${watch.title}</h3>
            <p><strong>Brand:</strong> ${watch.brand}</p>
            <p><strong>Price:</strong> ${watch.price}</p>
            <p><strong>Offer:</strong> ${watch.offer}</p>
            <p><strong>Gender:</strong> ${watch.gender}</p>
            <p><strong>Type:</strong> ${watch.type}</p>
        `;

        catalogElement.appendChild(watchCard);
    });
}

function initializeWatchSelection() {
    const selectElement = document.getElementById('watchSelect');

    watchCatalog.forEach((watch, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index;
        optionElement.text = watch.title;
        selectElement.add(optionElement);
    });
}

function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const resultElement = document.getElementById('result');

    if (selectedIndices.length < 2) {
        resultElement.textContent = "Please select at least two watches for comparison.";
        return;
    }

    const scores = selectedIndices.map(index => ({ index, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    scores.forEach(({ index, score }) => {
        resultElement.innerHTML += `<p>${watchCatalog[index].title}: ${score}%</p>`;
    });
}

displayCatalog();
initializeWatchSelection();


function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const resultElement = document.getElementById('result');

    if (selectedIndices.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    const scores = selectedIndices.map(index => ({ index, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ index, score }) => {
        const watchTitle = watchCatalog[index].title;
        const row = table.insertRow();
        row.innerHTML = `<td>${watchTitle}</td><td>Random Basis</td><td>${score}%</td>`;
    });

    resultElement.appendChild(table);
}



function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const selectedWatches = Array.from(selectElement.selectedOptions)
        .map(option => parseInt(option.value))
        .map(index => watchCatalog[index])
        .filter(watch => watch.title.toLowerCase().includes(searchInput));

    const resultElement = document.getElementById('result');

    if (selectedWatches.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    const scores = selectedWatches.map(watch => ({ watch, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Image</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ watch, score }) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${watch.title}</td>
            <td><img src="${watch.image}" alt="${watch.title}" style="max-width: 100px;"></td>
            <td>Random Basis</td>
            <td>${score}%</td>
        `;
    });

    resultElement.appendChild(table);
}

// ...