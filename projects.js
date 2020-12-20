let projects = {
  // fitness tracker app
  project0: {
    name: 'bluebird_ski',
    easy_name: 'Bluebird Ski Shop',
    short_desc:
      'A fully functioning website built with Django, featuring Stripe payments and Postgres database. Deployed using AWS S3 and Heroku.',
    long_desc:
      'A fully functioning website built with Django, featuring Stripe payments and Postgres database. Deployed using AWS S3 and Heroku.',
    tech_used: [
      'HTML',
      'CSS',
      'Python',
      'Django',
      'Bootstrap',
      'Javascript',
      'jQuery',
      'Stripe',
      'AWS S3',
    ],
    images: [
      ['Images/bluebird/bluebird_hp.png', 'Bluebird Homepage Page'],
      ['Images/bluebird/bluebird_product_detail.png', 'Bluebird Product Detail'],
      ['Images/bluebird/bluebird_checkout.png', 'Bluebird Checkout Page'],
    ],
    github_link: 'https://github.com/pmarre/bluebird_ski/',
    live_link: 'https://bluebird-ski-shop.herokuapp.com/',
    more_goals: [
      'Create a login/sign-up page',
      'Build with Django framework',
      'Use Stripe Payments',
    ],
    features: [
      ['Product Page', 'Users can quickly view all details of the product and add to cart easily.'],
      [
        'Check Out Page',
        'A clear checkout form for users to purchase services. Once purchase is confirmed, users recieve email with confirmation.',
      ],
    ],
  },
  project1: {
    name: 'fitness_tracker',
    easy_name: 'FitnessTracker',
    short_desc:
      'A CRUD app built with Python & Flask for tracking workouts overtime. All data is stored in MongoDB. Website is deployed on Heroku.',
    long_desc:
      'A CRUD app built with Python & Flask for tracking workouts. Users are able to create logins and store information/workouts/photos. All data is stored in MongoDB.',
    tech_used: ['HTML', 'CSS', 'Python', 'Flask', 'Bootstrap', 'Javascript', 'jQuery'],
    images: [
      ['Images/fitness_tracker/about.png', 'FitnessTracker About Page'],
      ['Images/fitness_tracker/sign_up.png', 'FitnessTracker Sign-Up Page'],
      ['Images/fitness_tracker/fitness_tracker_hp.png', 'FitnessTracker Dashboard'],
    ],
    github_link: 'https://github.com/pmarre/fitness-tracker',
    live_link: 'https://fitness-tracker-ms3.herokuapp.com/',
    more_goals: [
      'Create a login/sign-up page',
      'Give users CRUD functionality',
      'Store data in database (MongoDB)',
    ],
    features: [
      [
        'Sign-Up Page',
        'Users who are new to the site are directed to a sign-up page to create a new account.',
      ],
      [
        'User Dashboard',
        'Once logged in, users are taken to their dashboard, a central hub for all their workout information. From this page, users can add, view, edit, and delete workouts.',
      ],
    ],
  },
  // scratch
  project2: {
    name: 'scratch',
    easy_name: 'Scratch',
    short_desc:
      'A responsive website that utilizes the Spoonacular API to display recipes to users.',
    long_desc:
      'A fully responsive site built with HTML, Javascript, JQuery, AJAX, and the Spoonacular API for recipes.',
    tech_used: ['HTML', 'CSS', 'Javascript', 'jQuery', 'AJAX'],
    images: [
      ['Images/scratch/homepage.png', 'Scratch Homepage'],
      ['Images/scratch/recipe_card.png', 'Recipe Card'],
      ['Images/scratch/saved_recipes.png', 'Saved Recipes'],
    ],
    github_link: 'https://github.com/pmarre/scratch',
    live_link: 'https://pmarre.github.io/scratch/',
    more_goals: [
      'Create a searchable recipe site',
      'Use AJAX to refresh data without refreshing the whole page',
      'Allow users to save recipes using local storage',
    ],
    features: [
      [
        'Recipe Card',
        'After searching a recipe, users can click to view the full recipe and instructions. Nutrition is displayed using Google Charts API',
      ],
      [
        'Saved Recipes',
        "Users can favorite recipes and view them later by accessing the 'Saved Recipes' page",
      ],
    ],
  },
  // jordan pipe's band
  project3: {
    name: 'jordan_pipes',
    easy_name: "Jordan Pipe's Band",
    short_desc: 'A responsive website built to showcase a fictional band.',
    long_desc: 'A responsive website built with HTML and CSS.',
    tech_used: ['HTML', 'CSS'],
    images: [
      ['Images/jordan_pipes/homepage.png', 'Jordan Pipes Band Homepage'],
      ['Images/jordan_pipes/tourdates.png', 'Tour Dates Page'],
      ['Images/jordan_pipes/contact.png', 'Contact Card'],
    ],
    github_link:
      'https://github.com/pmarre/full_stack_cert/tree/master/01_html_css/user_centric_dev/milestone_project',
    live_link:
      'https://pmarre.github.io/full_stack_cert/01_html_css/user_centric_dev/milestone_project/index.html',
    more_goals: [
      'Build a responsive site',
      'Clearly provide all information a user may need',
      'Use only HTML and CSS',
    ],
    features: [
      [
        'Tour Dates',
        'Users can clearly see all upcoming tour dates, share via social media, and buy tickets.',
      ],
      ['Contact Card', 'Users can easily contact website owner to book band for a show.'],
    ],
  },
};
