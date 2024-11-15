# YChat

## Methode
- ESlint config Airbnb pour la continuité de code
- camelCase pour le nom des variables
- stylisation avec Sass --> methode BEM pour les classes

## Objectifs MVC
- Création de comptes users et connexion (nom, prenom, email, photo de profil, mot de passe)
- Utilisation du eslint config Airbnb
- Intégration d'un backend en CONVEX
- Envois de messages entre users grâce à un uuid mais différent du nom user
- Suivi des "messages lus" (date ou heure si moins de 24h)
- Possibilité de créer des groupes de messages
- envois de photos et messages vocaux

## Objectifs Optionnels 

- Gestions des "amis" et cacher le nom et la photo de profil si non amis 
- Messages cryptés de bout en bout
- systeme de recherche des discussion en utilisant le nom du destinataire 
- version mobile
- systeme de "contacts favoris"

## Etapes 
- Maquettes
- Init et config du projet: react, convex, eslint, prettier
- MCD BDD
- Landing Page

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
