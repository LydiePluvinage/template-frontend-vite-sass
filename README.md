## Concept

Voici un template déjà configuré pour vos projets front-end.

## Setup & Use

### Project Initialization

- Clone this repo
- Run command `npm install`

### Available Commands

- `dev` : Starts both servers (frontend + backend) in one terminal
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Vercel_ : Deployment platform. Once you have a Vercel account, run `npm run deploy`, follow the instructions. Go to Vercel, link your github account and your branch. Every push on main will now rebuild your code and automatically deploy it.
