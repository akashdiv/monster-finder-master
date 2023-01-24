import { monsters } from './monsters.js';

for (let monster of monsters) {
    showMonster(monster);
}

function showMonster(monster) {
    const htmlMrkup = `
    <div class="monster">
        <img src="https://robohash.org/${monster.id}?set=set2" alt="${monster.name}" />
        <p class="name">${monster.name}</p>
        <p class="email">${monster.email}</p>
    </div>
    `;

    document.querySelector('.monsters').insertAdjacentHTML('afterbegin', htmlMrkup);

}

notFound()

function notFound() {
    const htmlMrkup = `
    <div class="p-5 not-found" style="display: none">
        <span>404</span>
        <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
    </div>
    `;
    
    document.querySelector('.monsters').insertAdjacentHTML('afterbegin', htmlMrkup);

}

document.querySelector('#search-monster').addEventListener('keyup', function(e){
    const keyword = e.target.value.toLowerCase();

    const query = document.querySelectorAll('.monster');

    let notFound = true;

    for (let monster of query) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
            notFound = false;
        } else {
            monster.style.display = 'none';
        }
    }
    if (notFound) {
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    }
})

document.querySelector('#search-monster').addEventListener('submit', e => {
    e.preventDefault();
})