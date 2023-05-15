---
layout: post
title:  "Panneaux photovoltaïques : to mine or to revendre à EDF ?"
author: caraduf
categories: [ minage, vie pratique, énergie ]
tags: [panneaux solaires, minage, ethereum]
image: assets/images/mine-or-sell-energy.jpg
description: "Quelle est la meilleure façon de s'enrichir quand on est équipé de panneaux solaires sur son toit ? Revendre à EDF OA ou miner de l'ether (Ξ) et spéculer ?"
featured: true
hidden: true
usemathjax: true
---

Vous êtes déjà en possession de cartes graphiques (en anglais GPU) et votre toit est déjà couvert de panneaux solaires ? Découvrez si pour vous enrichir, il vaut mieux miner des ethers ou s'il vaut mieux consommer le moins possible pour revendre sa production à EDF Obligation d'Achat (EDF OA). On va utiliser le matériel déjà installé que l'on va présenter tout de suite.


#### Présentation de l'installation solaire et de la plate-forme de minage

L'installation solaire installée ici peut fournir au maximum 5,3 kW. Elle a été installée dans le but de soutenir le réseau électrique local et pour avoir la satisfaction de consommer sa propre électricité. 

La plate-forme minière utilisée ici est composée de 2 AMD RX 570 (2 x 29 MH/s, 2 x 100 W), une RTX 3700 (61 MH/s, 120 W) et 2 GTX 1660 Super (2 x 32 MH/s, 2 x 75 W). La voici en image.

![plate-forme minière](/assets/images/mining-rig.jpg "plate-forme minière")

Cette plate-forme est assez modeste puisqu'elle ne fournit que 184 MH/s, bien qu'elle consomme tout de même 620 W en continu, soit 5,4 MWh sur une année, ce qui représente environ la production solaire des 7 premiers mois de l'année 2022. C'est donc assez colossal! Mais continuons tout de même notre enquête.

![Wattmètre mesurant la consommation de la plate-forme minière](/assets/images/wattmeter.jpg "Wattmètre mesurant la consommation de la plate-forme minière")


<!-- Pub -->


#### To mine or not to mine ?

Avant de répondre à la question de savoir s'il vaut mieux miner de l'ether grâce à l'énergie solaire gratuite ou la revendre directement à EDF OA, posons les hypothèses de calcul.

Chaque kWh produit est acheté 0,10 € [^1] par [EDF OA](https://www.edf-oa.fr/), et chaque kWh consommé nous est facturé 0,17 € ([source EDF](https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille_prix_Tarif_Bleu.pdf)). 

Concernant le minage d'ether, le tableau de bord du [bassin de minage](https://greenbull-campus.fr/immobilier/guide/patrimoine/diversifier/mining-pool-definition) indique à l'heure actuelle une production horaire de 0,000110 Ξ, et la consommation est celle indiquée précédemment (620 W).

Par conséquent dès que $$Prod_{Ξ/h} \times Taux_{Euro/Ether} \gt Conso_{Ξ} \times Tarif_{Achat_{EDF}}$$ il est plus intéressant financièrement de miner pour revendre (plus tard) ses Ether. Si on passe à l'application numérique, on calcule que dès que le taux de change de l'ether passe la barre des 563 € (cf $$0,620 \times \frac{0,10}{0,000110}$$), on peut vendre ses ether précédemment minés.

Attention toutefois, car souvent les bassin de minage ne permettent de retirer ses ether produits qu'à partir d'une certaine somme (ex 0,01 Ξ) et que des [frais de gaz](https://ethereum.org/fr/developers/docs/gas/) s'appliquent pour toute transaction en ether. Il vaut donc mieux miner et stocker sa production d'ether dans le bassin de minage en attendant d'en avoir assez pour les verser sur son compte ethereum (ex sur son [portefeuille crypto](https://fr.wikipedia.org/wiki/Portefeuille_de_crypto-monnaie)).

[^1]: On parle ici de l'électricité produite "en surplus", c'est-à-dire celle qui n'est pas autoconsommée sur place (dans la maison) et qui est donc injectée sur le réseau électrique.

#### Conclusion

En résumé, on a vu qu'effectivement, tant que le cours de l'ether était au dessus du seuil de 563 € [^2]  il était plus intéressant d'utiliser une partie de sa production solaire pour faire tourner une plate-forme minière et générer ainsi des ether que de vendre passivement l'énergie en surplus à EDF OA. Ça reste toutefois de la spéculation sur le cours de l'ether et il faut garder à l'esprit que le minage de l'ether tire à sa fin (cf passage du réseau Ethereum à la [preuve d'enjeu](https://fr.wikipedia.org/wiki/Preuve_d%27enjeu), autrement nommé ["La fusion"](https://ethereum.org/fr/upgrades/merge/)). 

Mais pour le moment, c'est l'été, le soleil brille en abondance, le minage fonctionne, le cours de l'ether remonte (il était descendu juste en dessous des 1000€ en mai 2022,  et il remonte pour être maintenant voisin des 1600€), donc dans ces conditions, il est raisonnable de continuer à miner au soleil !

Mais au fait, ne pourrait-on pas aller encore plus loin, et carrément miner gratuitement ? Sans même impacter sa feuille d’impôts (aucun recours à une société-écran domiciliée aux Bahamas bien sûr) ? C’est ce que nous verrons dans le prochain articlΞ. 

[^2]: Ce seuil est fonction de la plate-forme minière (MH/s et W consommés).

