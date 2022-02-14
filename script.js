const wrapperCards = document.querySelector(".wrapper");
let cardItem;

function addElementAddClass(element, classElement) {
  const newElement = document.createElement(element);
  newElement.classList.add(classElement);

  return newElement;
}

function insertText(element, text) {
  return (element.innerHTML += text);
}

class CreaterCards {
  constructor(name, category, level, price, descr, img) {
    this.name = name;
    this.category = category;
    this.level = level;
    this.price = price;
    this.descr = descr;
    this.img = img;
  }

  create() {
    cardItem = addElementAddClass("div", "wrapper__cards__card");
    wrapperCards.prepend(cardItem);


    const imgCat = addElementAddClass("div", "img-cat");
    imgCat.style.background = `url(${this.img}) no-repeat center`;
    imgCat.style.cssText = `background: url(${this.img}) no-repeat center;
    background-size:contain;`;
    cardItem.append(imgCat);

    const title = addElementAddClass("h3", "title");
    insertText(title, this.name);
    cardItem.prepend(title);

    const categoryCat = addElementAddClass("p", "card__category");
    categoryCat.innerHTML = "Category: ";
    insertText(categoryCat, this.category);
    cardItem.append(categoryCat);
    
    const levelWrapper = addElementAddClass("div", "star-rating__wrap");
    cardItem.append(levelWrapper);

    const createStarsActive = (n) => {
      while (n) {
        const levelItem = addElementAddClass("input", "star");
        levelItem.type = 'radio';
        levelItem.name = 'star';
        levelItem.id = `star${Math.random()}`
        levelWrapper.append(levelItem);

        const label = addElementAddClass("label", "label-star");
        label.setAttribute('for', `${levelItem.id}`);
        label.setAttribute('default', `true`);
        levelWrapper.append(label);
        n--;
      }
    };
    
    createStarsActive(5);

    const priceCat = addElementAddClass("p", null);
    priceCat.innerHTML = "Price: ";
    insertText(priceCat, this.price);
    cardItem.append(priceCat);

    const descrCat = addElementAddClass("p", null);
    insertText(descrCat, this.descr);
    cardItem.append(descrCat);
  }
}

const block1 = new CreaterCards(
  "Fluff",
  "Cool cat",
  4,
  "200$",
  "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
  "img/cat1.jpg"
).create();

const block2 = new CreaterCards(
    "Johnny",
    "Cool cat",
    5,
    "300$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat2.jpg"
  ).create();

  
const block3 = new CreaterCards(
    "Rock",
    "Cool cat",
    5,
    "340$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat3.jpg"
  ).create();

  const block4 = new CreaterCards(
    "Dennis",
    "Cool cat",
    3,
    "1000$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat4.jpg"
  ).create();

  const block5 = new CreaterCards(
    "Alisha",
    "Cool cat",
    4,
    "900$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat5.jpg"
  ).create();

  const block6 = new CreaterCards(
    "Caitlin",
    "Cool cat",
    5,
    "100$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat6.jpg"
  ).create();

  const block7 = new CreaterCards(
    "Virgil Snow",
    "Cool cat",
    3,
    "400$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice. Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat7.jpg"
  ).create();

  const block8 = new CreaterCards(
    "Patience",
    "Cool cat",
    5,
    "320$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat8.jpg"
  ).create();

  const block9 = new CreaterCards(
    "Clement",
    "Cool cat",
    4,
    "210$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat9.jpg"
  ).create();

  const block10 = new CreaterCards(
    "Moses",
    "Cool cat",
    4,
    "500$",
    "The cat is very cute and cool. He will become a good friend to you. Likes to hunt mice.Come for this beautiful cat, and he will delight you every day! Likes to sleep and purr.",
    "img/cat10.jpg"
  ).create();
