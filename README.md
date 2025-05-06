# Portfolio with Sanity CMS

This portfolio site integrates a static HTML/CSS frontend with Sanity CMS for content management.

## Description

Create a portfolio webpage that lists these 3 projects:

- Semester Project 2
- JavaScript Frameworks CA
- Project Exam 2

This page must:

- List the 3 projects as cards
- Each card must have:
- the title of the project,
- a description,
- a screenshot of how the project looks when running,
- a link to the GitHub repo and a live site if it is online.

## Built With

![HTML5](https://img.shields.io/badge/-HTML5-white?style=for-the-badge&logo=html5)
![SASS](https://img.shields.io/badge/-Sass-white?style=for-the-badge&logo=sass)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-white?style=for-the-badge&logo=bootstrap)
![Sanity CMS](https://img.shields.io/badge/-Sanity_CMS-white?style=for-the-badge&logo=sanity)

## Project Structure

- `/` - Static HTML/CSS/JS files for the portfolio
- `/y/` - Sanity Studio project

## Getting Started

### Setting up the Sanity Studio

1. Navigate to the Sanity Studio directory:
```bash
cd y
```

2. Install dependencies:
```bash
npm install
```

3. Start the Sanity Studio development server:
```bash
npm run dev
```
This will start the Sanity Studio at [http://localhost:3333](http://localhost:3333).

4. Add your content in the Sanity Studio:
   - Create a Hero section
   - Add an About section
   - Add your Skills
   - Add your Projects

### Running the portfolio website

1. From the root directory, run:
```bash
http-server
```
This will serve your website at [http://localhost:8080](http://localhost:8080).

## Deployment

### Deploying Sanity Studio

```bash
cd y
npx sanity deploy
```

Your Sanity Studio is deployed at: https://industry-knowledge.sanity.studio/

### Deploying the Portfolio Website

You can deploy the static HTML/CSS/JS files to GitHub Pages or Netlify.

## Sanity Project Info

- **Project ID:** eoxsg65n
- **Dataset:** industry-knowledge
- **API Version:** 2023-05-03

## Contact

arnasb30001@gmail.com

## Prerequisites

- Node.js and npm (for Sanity Studio development)
- A static HTTP server for the frontend (e.g., `http-server` via npm, or Live Server extension in VS Code)
