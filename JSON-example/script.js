async function populate() {
  const requestURL =
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text(); // receives in text format
  const superHeroes = JSON.parse(superHeroesText); // parse it as an object

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector('header');
  const h1Title = document.createElement('h1');
  h1Title.textContent = obj.squadName;
  header.appendChild(h1Title);

  const p = document.createElement('p');
  p.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(p);
}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj.members;

  heroes.forEach((hero) => {
    // Create Elements to attach on the DOM
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const ul = document.createElement('ul');

    // Change text contents
    h2.textContent = hero.name;
    p1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    p2.textContent = `Age: ${hero.age}`;
    p3.textContent = 'Superowers: ';

    const superPowers = hero.powers;
    superPowers.forEach((power) => {
      const li = document.createElement('li');
      li.textContent = power;
      ul.appendChild(li);
    });

    // Append to all elements to article
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(ul);

    section.appendChild(article);
  });
}

populate();
