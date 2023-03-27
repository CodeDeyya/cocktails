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
- [File Structure](#file-structure)

You can access the website from [here](https://amused.vercel.app/)

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

## File Structure

The main code is written inside the `src` file

- `components` file is used to store all react components which can be used in multiple domains
- `domains` file contain components relevant to specific page
- `api` file contains api files per page named as ${page}.api.ts
- `models` file contains all types
- `store` file contains the redux store and slices
- `test` file contains all tests

## Issues

- As there is no persistant DB the user favourites will be lost on refresh


## Technologies

<p align="center">
  <img src="https://nextjs.org/static/blog/next-13/twitter-card.png" alt="next13" height = "100px" >
  <img src="https://jestjs.io/img/opengraph.png" alt="next13" height = "100px" >
  <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" alt="tailwind" height = "100px" >
  <img src="https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg" alt="redux-tool-kit" height = "100px">
  
</p>
