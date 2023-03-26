<p align="center">
    <img width="auto" height="auto" src="https://previews.123rf.com/images/tatianadavidova/tatianadavidova2002/tatianadavidova200200042/140668413-exotic-cocktails-banner-watercolor-vector-cocktails.jpg" alt="logo" />
</p>

## **Cocktail Website**

The dashboard shows the following pieces of information:

1. Feature 1 - Home

When user arrives on home page, user can view 5 random cocktails on home page
Every cocktail will contain cocktail name, cocktail image, category
User can click a "Refresh" button on this page to get another 5 random cocktails

2. Feature 2 - Search

User can search for a cocktail and add it to favourites list
The search result will contains cocktail name, cocktail image and "Add" button
Press "Add" button will add the cocktail to Favourites list

3. Feature 3 - Favourites

User will see a list of favourites cocktails
User will see cocktail name, cocktail image and "Remove" button
User can remove a cocktail from favourites list

- [System requirements](#system-requirements)
- [Installing](#installing)
- [issues](#issues)

## System requirements

- Node

- Yarn Package Manager

## Installing

- Go to to root directory

- Install all dependencies for server with yarn

```bash
yarn install
```

- Start dev server (Ensure Port 3000 is free)

```bash
yarn dev
```

- The webpage will load in http://localhost:3000/

- for testing use command

```bash
yarn test
```

- for test coverage use command

```bash
yarn coverage
```

## Issues

The apis throws a CORS error on safari and Iphones

It is needed to be handled from the server to support cross origin

## Technologies

<p align="center">
  <img src="https://nextjs.org/static/blog/next-13/twitter-card.png" alt="next13" height = "100px" >
  <img src="https://jestjs.io/img/opengraph.png" alt="next13" height = "100px" >
  <img src="data:image/png;base64,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" alt="tailwind" height = "100px" >
  <img src="https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg" alt="redux-tool-kit" height = "100px">
  
</p>
