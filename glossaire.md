# Glossaire : Développement Web avec Frameworks JS (React & Vue)

Ce document contient les termes techniques essentiels pour vous aider à comprendre et réussir votre projet.

## Concepts Fondamentaux
1. **SPA (Single Page Application)** : Une application web qui ne recharge pas toute la page lors d'une interaction utilisateur. Seuls les composants nécessaires sont mis à jour dynamiquement.
2. **Composant (Component)** : La brique de base d'un framework. C'est un bloc de code indépendant et réutilisable qui gère son propre affichage (HTML/CSS) et sa logique (JS).
3. **État (State)** : Un objet qui contient des données internes à un composant. Quand l'état change, le composant se "re-déclare" ou se met à jour automatiquement.
4. **Propriétés (Props)** : Des données transmises d'un composant parent à un composant enfant (passage de données unidirectionnel).
5. **DOM Virtuel (Virtual DOM)** : Une copie légère du DOM réel utilisée par React et Vue pour comparer les changements et optimiser les mises à jour de l'interface.
6. **Liaison de Données (Data Binding)** : Le lien entre le modèle de données (JavaScript) et la vue (HTML).

---

## Terminologie Spécifique (React)
1. **JSX (JavaScript XML)** : Une syntaxe qui permet d'écrire du HTML directement dans le code JavaScript de vos composants.
2. **Hooks** : Des fonctions spéciales (ex: `useState`, `useEffect`) qui permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes.
3. **Rendu (Rendering)** : Le processus par lequel React demande à vos composants d'afficher leur interface actuelle.

---

## Terminologie Spécifique (Vue.js)
1. **Directives** : Attributs HTML spéciaux (ex: `v-if`, `v-for`, `v-model`) qui ajoutent un comportement dynamique aux éléments.
2. **SFC (Single File Component)** : Un fichier `.vue` qui regroupe le `<template>` (HTML), le `<script>` (JS) et les `<style>` (CSS) d'un même composant.
3. **Composition API** : Un ensemble d'APIs (ex: `ref`, `reactive`, `onMounted`) permettant de structurer le code de manière flexible, similaire aux Hooks de React.

---

## Outils Utiles
1. **NPM (Node Package Manager)** : Le gestionnaire de paquets pour installer des bibliothèques externes.
2. **Vite** : Un outil de construction moderne et rapide utilisé pour lancer vos projets React ou Vue.
3. **DevTools** : Extensions de navigateur (Chrome/Firefox) indispensables pour inspecter et déboguer vos composants React ou Vue.
