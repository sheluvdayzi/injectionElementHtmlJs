let main = document.querySelector('main');


    // Variable qui stock mes cards
const cards = [ 
    {
        title: 'Title',
        img: './assets/img/couleur-gris-cmjn-imprimerie.jpg',
        txt: 'la description'
    },

    {
        title: 'Title',
        img: './assets/img/couleur-gris-cmjn-imprimerie.jpg',
        txt: 'la description'
    }
];


    // Boucle qui parcours tout mon tableau cards
for(const card of cards){
        // Crée chaque element qui contiendra un element de mon tableau cards
    let article = document.createElement('article');
    let title = document.createElement('h2');
    let img = document.createElement('img');
    let txt = document.createElement('p');


        // Ajouter une class
    title.className = 'titre';
    img.className = 'image';
    txt.className = 'description';


        // Ajouter ce que contient les element crée
    title.textContent = card.title;
    img.src = card.img;
    img.alt = 'image grise';
    txt.textContent = card.txt;

    
        // L'ajouter en html (Parents au debut et enfants a la fin)
    main.appendChild(article);
    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(txt);
}

