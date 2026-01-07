# Betia Official Website

Site vitrine professionnel pour Betia, chanteuse et directrice artistique malgache.

## Fonctionnalités
- Présentation bilingue (français/anglais) avec sélecteur de langue
- Galerie artistique, discographie, vidéos, presse
- Formulaire de contact fonctionnel (Formspree)
- Design moderne, responsive, animations

## Installation locale

**Prérequis :** Node.js

1. Installe les dépendances :
   ```bash
   npm install
   ```
2. Lance le serveur de développement :
   ```bash
   npm run dev
   ```
Le site sera accessible sur [http://localhost:5173](http://localhost:5173)

## Déploiement sur Vercel

1. Pousse le code sur un dépôt GitHub
2. Va sur [vercel.com](https://vercel.com/) et connecte ton compte GitHub
3. Clique sur “Add New Project” et sélectionne ton repo
4. Vercel détecte Vite automatiquement, clique “Deploy”
5. Ton site sera accessible sur `https://nom-du-projet.vercel.app`

## Personnalisation
- Modifie les images dans le dossier `assets/`
- Les textes sont traduits dans `locales/fr.json` et `locales/en.json`
- Les données (projets, réseaux, etc.) sont dans `constants.tsx`

## Auteur
Développé par Antsa Herilala Rakoto

---

*Ce site a été conçu pour mettre en valeur l’univers artistique de Betia, avec une expérience utilisateur moderne et accessible.*
