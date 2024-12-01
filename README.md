# YChat

## Oral 
Passage à 14h20 --> 10 min d'oral et 5 min de question
Présentation du projet, démonstration et retour professionel 

Prez perso, roles + contexte > Technos, methodo du projet (schema de bdd etc) > Demo préparée (inscription/connexion, envois de message, création de groupe) > Expliquer les difficultés, limites du projet, apprentissage > conclusion (comment ça s'est passé personnellement, avis perso)

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