---
layout: post
title:  "Miner des cryptos sans payer l'électricité (ni des impôts), vous en rêviez ?"
author: caraduf
categories: [ minage, économies, tutoriel ]
tags: [minage, ethereum, carte graphique]
image: assets/images/mining-rig.jpg
description: "Miner des cryptos sans impacter sa facture d'électricité ni ses impôts, ça vous tente ? "
featured: true
hidden: true
usemathjax: true
published: true
---

Est-ce possible de miner sans impacter votre facture électrique et sans alourdir vos impôts ? Et est-ce que ça peut rapporter gros ? C'est à ces deux questions que cet article se propose de répondre. Voici le programme :

* TOC
{:toc}


#### Hyptothèses et objectif visé

Dans cet article, on garde comme hypothèses, que l'on effectue du minage de loisir (ie pour son plaisir, pas pour manger), et qu'on possède déjà tout le matériel nécessaire au minage (ordinateur, carte(s) graphique(s)), ainsi que des panneaux photovoltaïques en quantité suffisante pour largement couvrir la consommation des cartes. Ici la consommation représente 12% de la puissance installée et n'entre pas en concurrence avec les autres consommateurs d'électricité de la maison, puisque la plupart de la journée, l'électricité produite est excédentaire et donc exportée sur le réseau. 

On prend l'exemple du minage d'Ether mais cet article est assez général pour s'appliquer à n'importe quelle crypto.

Quant à l'objectif de ma modeste installation minière ([présentée dans article précédent]({% post_url 2022-07-10-photovoltaique-to-mine-or-to-revendre-a-EDF %})), il est simplement de générer suffisamment d'ether pour acheter des jeux vidéos [Steam](https://fr.wikipedia.org/wiki/Steam) que l'on peut payer en ether (chez certains revendeurs). Bon, qui dit minage dit forte consommation d'électricité alors ...

<!-- Pub -->

#### Peut-on miner sans impacter sa facture d'électricité ?
 
Dans notre cas d'une maison équipée de panneaux solaires, si on veut "miner de la crypto" gratuitement (sans payer de surplus sur sa facture d'électricité), on n'a pas d'autre choix que de miner aux heures d'ensoleillement suffisant afin que la production électrique des panneaux solaires couvre la consommation de la plate-forme minière[^1]. Vous l'aurez compris, c'est donc les panneaux solaires qui permettent de miner gratuitement. 

Toutefois les profits du minage de loisir (autrement dénommé "occasionnel" par les services de Bercy) sont taxables à hauteur de 30 % s'ils dépassent un certain seuil (305€ en 2022). 

#### Comment échapper (légalement) à l’impôt sur le minage ?

Imaginez tout d'abord si pendant votre période de minage, les journées ont été peu ensoleillées, donc que vous avez décuplé votre facture électrique, et que vendez vos Ethers au mauvais moment. Par exemple, vous vendez 1 Ξ que vous avez miné  pendant une année, lorsque le cours de l'Ether est à 1000 € / Ξ. Vous empochez donc 1000 €[^2], et les service fiscaux de Bercy vous demandent de payer 30 % de ces profits, soit 300 € conformément à la loi. Cependant, comme les journées ont été peu ensoleillées, votre fournisseur d'électricité vous demande aussi 800 € (dont 160 € de TVA). Par conséquent vos dépenses se montent à $$300 + 800 = 1100$$ € alors que vos profits ne sont que de 1000 €. Vous avez certes participé à l'aventure des cryptos en aidant à valider des transactions, mais votre opération de minage vous a donc **coûté** 100 €, et vous avez été taxé deux fois (TVA et impôts) ce qui normalement n'est pas permis. Vous pouvez par conséquent entreprendre des démarches auprès du fisc pour récupérer une part du magot. Mais ça va vous demander pas mal d'énergie. Or il y a plus simple.

La solution ici consiste à utiliser un porte-monnaie (wallet) non centralisé sur une plate-forme d'échange. Par exemple, je connais [My Ether Wallet](https://www.clubic.com/antivirus-securite-informatique/cryptage-cryptographie/crypto-monnaie/avis-400839-avis-myetherwallet-2022-la-blockchain-ethereum-accessible-a-tous.html), mais il y en a pour chaque crypto. ⚠️Attention cela demande toutefois une organisation rigoureuse⚠️ et de bien stocker en lieu sûr (avec plusieurs sauvegardes dont une sur papier) vos mot-de-passe / phrase-de-passe pour y accéder, car il n'y a aucun moyen de le retrouver si vous le perdez, contrairement à une solution à la Coinbase qui vous offre toujours une possibilité d'accéder à votre compte si "vous avez perdu votre mot-de-passe", car ils doivent le stocker en clair quelque part. 

💡Pensez à prévoir de pouvoir toujours accéder à une copie de ces mots-de-passe au cas-où (si votre ordinateur n'est plus accessible pour X raison, ou si votre maison brûle ou est cambriolée). Du côté de Coinbase, il n'y a rien à prévoir, si ce n'est de ne pas réutiliser des mots-de-passe, car s'ils se font pirater, il est fort possible que votre argent investi disparaisse.

L'intérêt d'utiliser un tel porte-monnaie est double :

- D'une part, personne ne peut savoir combien vous avez sur votre compte crypto tant que vous ne claironnez pas à tout bout de champs que vous êtes le propriétaire rebelle de telle adresse crypto qui b**se le fisc comme il veut. Même si je ne sais pas ce que le fisc pourrait faire s’ils savaient que vous êtes le propriétaire de telle adresse sur le réseau Ether, sauf à vous épingler lorsqu'ils retrouveront que vous (votre adresse) a échangé des Ethers avec une autre adresse qui appartient à un site qui offre des services (ex des jeux) contre crypto et que donc vous leur devez des impôts.

- D'autre part, lorsque vous dépenserez vos crypto contre un service dans la même crypto, vous ne paierez que les frais du réseau (ex : les frais de gaz pour le réseau Ether) et pas les frais de la plate-forme d'échange ([1 % par exemple sur Coinbase](https://help.coinbase.com/en/commerce/getting-started/fees). Vous devenez donc maître des frais "bancaires" qui vous sont appliqués!

#### En résumé

Les jeux reviennent donc à 0€ grâce aux panneaux solaires, et il n'y a aucun impôt à déclarer puisqu'[on ne convertit pas les crypto en Euros](https://www.economie.gouv.fr/cedef/regime-fiscal-cryptomonnaies) et qu'on ne paye pas de TVA sur l'électricité auto-consommée (puisqu'elle vient des panneaux solaires et pas du réseau). En outre, comme on ne passe pas par une plate-forme américaine (ex Coinbase, Binance, ...), il n'y a pas de commission sur les transactions. Mais ce n'est pas tout, vous ne confiez pas vos données personnelles (Carte d'identité, IBAN, passeport, numéro de carte bleue ...) à une entreprise privée (étrangère), plus ou moins correctement sécurisée, avec plus ou moins des failles informatiques qui seront potentiellement exploitées par des pirates qui révéleront vos données au grand jour ou usurperons votre identité. 
En gérant votre porte-monnaie vous même, vous ne paierez que les frais de transaction (en [gaz sur le réseau Ethereum](https://cryptoast.fr/gas/)). Et si l'on s'y prend bien en choisissant les bons jours (week-end) et les bons horaires (ex pour ses achats en Ether on peut aller sur [ici](https://ethereumprice.org/gas/)) ces frais de transaction[^3] sont limités. 
Si l’envie vous prend de miner au soleil gratuitement et écologiquement[^4], retrouvez-moi dans un [prochain article]({% post_url 2022-08-29-programmer-minage %}) qui détaillera des solutions techniques.



[^1]: Une solution technique pour parvenir à ces fins est proposée dans un [article spécifique]({% post_url 2022-08-29-programmer-minage %}).
[^2]: On simplifie ici en ne tenant pas compte de la commission prise par la plateforme d'échange (ex Coinbase, Binance, ...).
[^3]: Ces frais s'appliquent aussi chez Coinbase, Binance, ... et s'ajoutent aux frais de la plateforme d'échange.
[^4]: Le minage par preuve de travail n’est pas écologique du tout. On use des cartes-graphiques en leur faisant faire des calculs répétitifs et inutiles, simplement pour les occuper et éviter qu’elles n’aillent trop vite. 
