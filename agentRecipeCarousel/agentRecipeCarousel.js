import { LightningElement, track } from 'lwc';

/**
 * Displays a horizontally scrollable set of recipe cards,
 * mimicking the Agentforce card carousel experience.
 */
export default class AgentRecipeCarousel extends LightningElement {
  @track cards = [];
  @track currentIndex = 0;

  // Demo-only dataset mirroring Recipe.json structure
  demoRecipes = [
    {
      title: 'Perfect Chocolate Chip Cookies',
      servings: '12',
      recipeURL: 'https://www.williams-sonoma.com/recipe/perfect-chocolate-chip-cookies.html',
      prepTime: '20',
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202509/0001/img94l.jpg',
      cookTime: '30'
    },
    {
      title: 'Chocolate Chip Cookies',
      servings: '6',
      recipeURL: 'https://www.williams-sonoma.com/recipe/chocolate-chip-cookies.html',
      prepTime: '15',
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202512/0002/img16l.jpg',
      cookTime: '11'
    },
    {
      title: 'Chocolate Chip Cookies',
      servings: '36',
      recipeURL: 'https://www.williams-sonoma.com/recipe/chocolate-chip-cookies-cf.html',
      prepTime: '15',
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202508/0007/img387l.jpg',
      cookTime: '20'
    },
    {
      title: 'Oatmeal-Chocolate Chip Cookies',
      servings: '60',
      recipeURL: 'https://www.williams-sonoma.com/recipe/oatmeal-chocolate-chip-cookies.html',
      prepTime: '15',
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202508/0005/img451l.jpg',
      cookTime: '10'
    },
    {
      title: 'Crispy Chocolate Chip Cookies',
      servings: '18',
      recipeURL: 'https://www.williams-sonoma.com/recipe/crispy-chocolate-chip-cookies.html',
      prepTime: '25',
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202508/0004/img343l.jpg',
      cookTime: '12'
    }
  ];

  connectedCallback() {
    this.cards = this.demoRecipes.map((r) => ({
      title: r.title,
      imageUrl: r.imageUrl,
      prep: r.prepTime ? `Prep: ${r.prepTime} min` : '',
      cook: r.cookTime ? `Cook: ${r.cookTime} min` : '',
      serves: r.servings ? `Serves: ${r.servings}` : '',
      ctaLabel: 'VIEW FULL RECIPE',
      ctaHref: r.recipeURL
    }));
    this.currentIndex = 0;
  }

  get isPrevDisabled() {
    return this.currentIndex === 0;
  }

  get isNextDisabled() {
    return this.cards.length === 0 || this.currentIndex >= this.cards.length - 1;
  }

  get trackStyle() {
    const offset = this.currentIndex * 100;
    return `transform: translateX(-${offset}%); transition: transform 0.3s ease;`;
  }

  get dots() {
    const total = this.cards.length;
    const dots = [];
    for (let i = 0; i < total; i += 1) {
      dots.push({
        index: i,
        className: `dot ${i === this.currentIndex ? 'active' : ''}`.trim(),
        label: `Go to slide ${i + 1}`
      });
    }
    return dots;
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex += 1;
    }
  }

  goTo(event) {
    const idxString = event.currentTarget?.dataset?.index;
    const idx = Number(idxString);
    if (!Number.isNaN(idx) && idx >= 0 && idx < this.cards.length) {
      this.currentIndex = idx;
    }
  }
}

