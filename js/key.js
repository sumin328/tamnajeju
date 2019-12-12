(async () => {
    const views = await (await fetch('./views.json')).json();
    const allCafes = await (await fetch('./cafes.json')).json();

    const params = new Map([...new URLSearchParams(location.search)]);
    const name = params.get('name') || 'viewmat';

    const view = regions[name];
    const cafes = allCafes.filter(i => i['key1'] === view['title']).slice(0,50);
  
    document.getElementById('eup-main').innerHTML = `
    <div class="container">
        <h2>${view['title']}</h2>
        <section class="features">
            <div class="row">
                ${view['features'].map(feature => `
                    <div class="col-sm-6">
                        <img src="${feature['image']}" alt="">
                        <strong>${feature['title']}</stong>
                        <p>${feature['description']}</p>
                    </div>
                `).join('')}
            </div>
        </section>
        <section class="word-cloud">
            <img src="${view['wordCloud']}" alt="">
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
