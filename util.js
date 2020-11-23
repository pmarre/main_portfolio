function buildPortfolioCard(data) {
  for (let i = 0; i < Object.keys(data).length; i++) {
    let key = `project${i}`;
    let project = data[key];

    let tech = project.tech_used;
    console.log(project.easy_name);
    tech.forEach((item) => {
      $('tech-stack').append(`<li>${item}</li>`);
    });

    $('.portfolio').append(`  <div class="container">
    <div class="port-item">
      <div class="image-1" style="background-image: url('${project.images[0][0]}')"}></div>
      <div class="text"><h1>${project.easy_name}</h1>
      <p>${project.short_desc}</p>
            <button class="more-btn">
              <a href="#sideBar-${i + 1}" class="more_link" id="sideBar-${i + 1}"
                >More Info</a>
            </button>
            <ul class="tech-stack">
              
            </ul>
          </div>
        </div>
      </div>`);

    $('.portfolio').after(`
      <section class="moreInfo container" id="moreInfo-${i + 1}">
      <div class="moreItem${i + 1}">
        <div class="close">&times;</div>
        <h1>${project.easy_name}</h1>
        <div class="sourceBtns">
          <button class="source">
            <a href="${project.github_link}" target="_blank">View Code</a>
          </button>
          <button class="site">
            <a href="${project.live_link}" target="_blank">View Site</a>
          </button>
        </div>
        <p>
        ${project.long_desc}
        </p>
        <h3>More Goals:</h3>
        <ul>
          <li>${project.easy_name}</li>
          <li>${project.easy_name}</li>
          <li>${project.easy_name}</li>
        </ul>
        <figure class="moreImg">
          <img src="${project.images[0][0]}" alt="${project.images[0][1]}" class="img" />
          <figcaption>${project.images[0][1]}</figcaption>
        </figure>
        <h1>${project.features[0][0]}</h1>
        <p>
        ${project.features[0][1]}
        </p>
        <figure class="moreImg">
          <img src="Images/pet_shop_admin.png" alt="Sandy's Pet Shop Admin Page" class="img" />
          <figcaption>Sandy's Pet Shop Admin Page</figcaption>
        </figure>
        <h1>${project.features[1][0]}</h1>
        <p>${project.features[1][1]}</p>
        <figure class="moreImg">
          <img src="Images/pet_shop_location.png" alt="Sandy's Pet Shop Homepage" class="img" />
          <figcaption>Sandy's Pet Shop Location Page</figcaption>
        </figure>
      </div>
    </section>
      `);
  }
}

function addCard(data) {
  buildPortfolioCard(data);
}
