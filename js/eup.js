(async () => {
    const regions = await (await fetch('./regions.json')).json();
    const allCafes = await (await fetch('./cafes.json')).json();

    const params = new Map([...new URLSearchParams(location.search)]);
    const name = params.get('name') || 'jeju';

    const region = regions[name];
    const cafes = allCafes.filter(i => i['town'] === region['title']).slice(0,50);
  
    document.getElementById('eup-main').innerHTML = `
    <div class="container">
        <h2>${region['title']}</h2>
        <section class="features">
            <div class="row">
                ${region['features'].map(feature => `
                    <div class="col-sm-6">
                        <img src="${feature['image']}" alt="">
                        <strong>${feature['title']}</stong>
                        <p>${feature['description']}</p>
                    </div>
                `).join('')}
            </div>
        </section>
        <section class="word-cloud">
            <img src="${region['wordCloud']}" alt="">
        </section>
        <section class="cafes">
            <div class="row">
                ${cafes.map(cafe => `
                    <div class="col-sm-6">
                        <div class="cafe-item">
                            <img src="${cafe['image_url'] || './images/coffee.png'}" alt="사진">
                            <strong> ${cafe['cafe']} </strong>
                            <p> ${cafe['final_address']} </p>
                            <p> ${cafe['keywords']} </p>
                            <span> ${cafe['Tourism ']} </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    </div>
    `;
})();
