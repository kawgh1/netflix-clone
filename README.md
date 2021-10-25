-   live site [here](https://netflix-clone-ec4be.web.app)

**npx create-react-app netflix-clone --template redux**

-   firebase init
-   firebase out folder -> build
-   firebase configure as Single Page App -> Yes
-   npm run build
-   firebase deploy

## Things I added
- Movie Details on click
- Pull movie trailer from youtube where available
- Mobile styling
- Total re-design of navigation, sign in, sign up pages and authentication

## Tools Used

-   BEM Naming convention

-   React Router
-   **npm install react-router-dom**

-   React Youtube
-   **npm install react-youtube**

- Stripe API

- Firebase Stripe API Extension
    - "Run Subscription Payments with Stripe"
    - Cloud functions to automate customer transactions, subscription options
    - Firebase security rules


        rules_version = '2';
        service cloud.firestore {
        match /databases/{database}/documents {
            match /customers/{uid} {
            allow read: if request.auth.uid == uid;

            match /checkout_sessions/{id} {
                allow read, write: if request.auth.uid == uid;
            }
            match /subscriptions/{id} {
                allow read: if request.auth.uid == uid;
            }
            }

            match /products/{id} {
            allow read: if true;

            match /prices/{id} {
                allow read: if true;
            }
            
            match /tax_rates/{id} {
                allow read: if true;
            }
            }
        }
        }

    - Configure Stripe Webhooks
    - Demo
    - https://youtu.be/AHYVxg-lJX4?t=2538
    - on Stripe API under Developers -> WebHooks
    - click 'Add Endpoint'
    - Add these events
    - Select the following events:

        product.created
        product.updated
        product.deleted
        price.created
        price.updated
        price.deleted
        checkout.session.completed
        customer.subscription.created
        customer.subscription.updated
        customer.subscription.deleted
        tax_rate.created (optional)
        tax_rate.updated (optional)

    - update Stripe webhook secret in firebase Stripe extension
    with secret from Stripe

    Configure the Stripe customer portal
    Set your custom branding in the settings.
    Configure the Customer Portal settings.
    Toggle on "Allow customers to update their payment methods".
    Toggle on "Allow customers to update subscriptions".
    Toggle on "Allow customers to cancel subscriptions".
    Add the products and prices that you want to allow customer to switch between.
    Set up the required business information and links.

-   TMDB movie database API - https://www.themoviedb.org/?language=en-US - Example JSON object for a movie
    Object {
    backdrop_path: "/3tfgZt36SQ1FdbEV0YCLdzpkRn3.jpg",
    first_air_date: "2021-09-30",
    genre_ids: (2) […],
    id: 129600,
    name: "Baki Hanma",
    origin_country: (1) […],
    original_language: "ja",
    original_name: "範馬刃牙",
    overview: "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.", popularity: 425.418, … },
    ​backdrop_path: "/3tfgZt36SQ1FdbEV0YCLdzpkRn3.jpg",
    first_air_date: "2021-09-30",
    genre_ids: Array [ 16, 10759 ],
    id: 129600,
    name: "Baki Hanma",
    origin_country: Array [ "JP" ],
    original_language: "ja",
    original_name: "範馬刃牙",
    overview: "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.",
    popularity: 425.418,
    poster_path: "/k3HCQALcUyxebVZcfy57BIDYXUz.jpg",
    vote_average: 8.1,
    vote_count: 14,
