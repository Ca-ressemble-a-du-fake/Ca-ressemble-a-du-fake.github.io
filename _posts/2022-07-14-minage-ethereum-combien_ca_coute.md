---
layout: post
title:  "Le minage d'Ether est-il (encore) rentable ?"
author: anatole
categories: [ minage, électricité ]
tags: [minage, ethereum, carte graphique]
image: assets/images/rentabilite-minage.jpg
description: "Miner des Ethers oui, mais à quel coût et pour quels profits ? "
featured: true
hidden: true
usemathjax: true
published: true
---

Miner des Ethers virtuels est tentant, mais quels profits peut-on vraiment espérer, une fois qu'on retranche tous les coûts bien réels? Cet article regarde de près les impacts de la consommation électrique et des impôts sur la rentabilité du minage de l’Ether.

Voici le menu :

* TOC
{:toc}

#### Hypothèses et objectif visé

Notre objectif dans cet article est de répondre à la question du titre, à savoir de déterminer au bout de combien de temps le minage de l’Ether devient rentable et de comparer cette durée à ce qui est annoncé sur divers sites.
On fera tout d’abord l’hypothèse que l'on possède déjà tout le matériel nécessaire au minage (ordinateur, carte(s) graphique(s), et alimentations), et qu’il ne tombe pas en panne pendant l’aventure[^1], en se concentrant sur les coûts d’exploitation (électricité et impôts). On verra tout de même ensuite si cette première hypothèse de déjà posséder x cartes graphiques tient la route 😜!
Bien sûr on reste dans le cadre d’un minage de loisir (ie pour son plaisir, pas pour manger).

Maintenant que le sujet est cadré, voyons ce qu'on peut espérer de notre plate-forme minière de 184 MH /s (pour de l'Ether) consommant 620 W, que vous [connaissez déjà]({% post_url 2022-07-10-photovoltaique-to-mine-or-to-revendre-a-EDF %})).

[^1]: D'expérience, les cartes graphiques sont très endurantes et ne nécessitent que très peu de maintenance (ex passer la soufflette). Des cartes de cinq, huit ou dix ans fonctionnent toujours impeccablement, alors même qu'elles ont été achetées d’occasion.



#### À quel profit s'attendre 💰?

<!-- Pub -->

Commençons par la partie réjouissante🤑.

D'après la tableau de bord offert par le [bassin de minage](https://fr.wikipedia.org/wiki/Minage_de_cryptomonnaie#Regroupements_des_mineurs), à l'heure d'écrire ces lignes, le taux de hachage de 184 MH/s mesuré sur l'installation minière produit 0,000110 Ether (Ξ) / h soit près de 1 Ξ par an (0,96 Ξ). Au cours actuel (1600 € / Ξ), ça équivaut donc à **1541 € au bout d'un an**. Bien sûr, si le cours de l'Ether s'envole, on gagnera (beaucoup) plus, sinon on pourra perdre beaucoup aussi. Ceci dit 1541 € est déjà une coquette somme d'argent, d'autant plus qu'elle est gagnée sans effort (l'ordinateur fonctionne tout seul).
Notez bien que pour le moment on ne prend pas en compte le coût initial des cartes graphiques (ici 2600 €) car on estime qu'elles pourront être revendues par la suite[^2]. Remarquez cependant, que si pendant la période de pénurie de cartes graphiques (2021) on pouvait se permettre de revendre ses cartes d’occasion a un tarif plus élevé que le prix de vente recommandé par le constructeur et donc faire une plus-value, en 2022 ce temps-là est révolu et les cartes d’occasion se vendent avec une forte décote.

[^2]: Il est vrai que même si elles fonctionnent en continu, les cartes graphiques qui minent de l'Ether ne seront pas inutilisables ensuite, puisqu'elles fonctionnent en sous-régime (sous-puissance), et à charge (température) constante et plutôt faible. Pour le minage d'autres crypto-monnaies, ça peut être différent, car certains algorithmes sont plus énergivores que d'autres (eg KawPow qui change d'algorithme régulièrement) et vont [faire augmenter la température de fonctionnement ou la faire varier](https://fr.quora.com/Le-minage-de-crypto-monnaie-r%C3%A9duit-il-la-dur%C3%A9e-de-vie-des-autres-composants-Gpu-cpu-psu-ram-carte-m%C3%A8re-etc). 

#### Combien ça coûte ?

Penchons-nous maintenant sur le coût d'exploitation (sans casse) et les profits à espérer.

##### Quel est l'impact du minage sur sa facture d'électricité ?

On va s'intéresser quelques instants au coût électrique du minage avec la plate-forme décrite précédemment et pour un kWh à 0,17 € ([selon EDF](https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille_prix_Tarif_Bleu.pdf)). Grâce au wattmètre inséré dans la prise, on mesure une consommation d'environ 620 W (soit $$0,17\times0,620 = 0,105$$ € pour chaque heure de fonctionnement). 


![Wattmètre mesurant la consommation de la plate-forme minière](/assets/images/wattmeter.jpg "Wattmètre mesurant la consommation de la plateforme minière")

Donc si on le rapporte à une année (8760 h) de fonctionnement continu, ça nous donne $$8760\times0,105 = 923$$ € de plus sur la facture annuelle du fournisseur d'électricité. Près d'un millier d'euros rien que pour payer la facture électrique!!! Si elles remplissent bien les poches de quelqu’un, les monnaies virtuelles, c'est bien celles des fournisseurs d'électricité!


##### Quel est l'impact du minage sur ses impôts ?

🎉 Surpriiiiise 🥳! Si vos [gains de minage dépassent 305 €](https://www.economie.gouv.fr/cedef/regime-fiscal-cryptomonnaies) vous devez payer des impôts dessus, à hauteur de 30 % (voir l'[article dédié pour y échapper]({% post_url 2022-07-11-minage-gratuit %})). Pour vous faciliter la tache, Coinbase vous propose même de générer le rapport des transactions effectuées sur leur plate-forme pour informer les autorités fiscales !

![Exemple de rapport généré par Coinbse](/assets/images/coinbase-report.jpg "Rapport des transactions sur Coinbase à destination des autorités fiscales")
En appliquant ces 30 % d’impôts à notre cas, on arrive à retrancher encore $$0,3\times1541=462$$ €. Ça commence à faire, pas vrai ?
#### Bonus : On inclut le coût d'achat du matériel 😜?

Ça vous dit de prendre en compte le coût d'achat du matériel dans le calcul ? Juste pour voir ce que ça donne sans notre hypothèse "on possède déjà tout le matériel de minage". En effet, posséder déjà cinq cartes graphiques moyen ou haut de gamme n'est pas le fruit du hasard (contrairement à l'ordinateur qui sert de support, qui lui peut avoir été récupéré). Donc dans le cas présenté, l'investissement initial se monte à 2600 € (en 2021).

##### Au bout de quelle durée le minage de l'Ether devient-il rentable ?

Penchons-nous un instant sur le calcul du retour sur investissement selon différentes méthodes.

###### En utilisant des sites internet

Souvent on peut lire qu'une carte graphique est [rentabilisée au bout d'une à deux années](https://www.tomshardware.fr/quels-gpu-sont-les-plus-rentables-pour-miner-en-fevrier-2022/), voire même au bout de [quatre mois](https://overclocking.com/les-5-meilleurs-gpu-pour-le-mining-en-2022/). Le calcul est simple, on détermine la production journalière d'ether convertie en euros pour une carte graphique donnée, avec une [difficulté](https://cryptoast.fr/ethereum-difficulte-minage-atteint-record-tandis-utilisation-reseau-diminue/) du réseau ether et un taux de change donnés. On divise ensuite le prix d'achat de carte par cette production journalière et on a le fameux nombre de jours avant d'atteindre la rentabilité. Le calcul est juste, on ne tient compte que du prix d'achat et pas du coût d'exploitation. Si on l'applique dans notre cas (investissement de 2600 €) qui se rapproche du prix de la RTX 3090 utilisé dans le tableau, on obtient donc une rentabilité de notre installation juste avant deux ans (683 jours).

![Rentabilité de notre installation minière selon le site Tom's Hardware](/assets/images/prevision-rentabilite-gpu.jpg "Rentabilité de notre installation minière selon le site Tom's Hardware")

On devrait même atteindre le seuil de rentabilité $$683\times(1 - \frac{120}{184}) = 237$$ jours plus tôt puisque la puissance de hachage de notre installation minière est 50 % plus grande que celle de la RTX 3090. La rentabilité devrait donc nous sourire au cours du premier trimestre de l'année suivant notre investissement. 

D'autres [sites proposent de calculer le bénéfice journalier](https://minerstat.com/coin/ETH) pour une puissance de hachage, une consommation électrique, un tarif de l'électricité, et des frais de coopérative[^3] données. Là c'est déjà un peu plus réaliste, car dans notre cas, à l'heure d'écrire ces lignes, on obtient 2,6 € par jour, donc en moins de trois années, ce serait rentable. On est déjà à plus du double de la durée précédemment calculée grâce aux données de Tom's Hardware.

Et si on ajoutait les impôts aux frais de coopérative ? Des frais sont des frais, alors allons-y!

![Prévision de production d'ether en tenant compte des impôts selon Minerstat](/assets/images/prevision-minerstat.jpg "Prévision de production d'Ether en tenant compte des impôts selon Minerstat")

On voit ainsi qu'avec un bénéfice journalier de 65 centimes d’euro le seuil de rentabilité est atteint au bout de $$\frac{2600}{0,6519}=3988$$ jours! Un peu moins de 11 ans, soit quatre fois plus long que sans les impôts!!! 

Le site [whattomine](https://www.whattomine.com/coins/151-eth-ethash?hr=184.0&p=620.0&fee=31.0&cost=0.17&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate) prend en considération l’investissement et nous donne un retour sur investissement "un peu" plus pessimiste de 24 ans (8914 jours) ! Ils ont dû se perdre dans les calculs !
![Prévision de production d'ether en tenant compte des impôts selon Whattomine](/assets/images/prevision-whattomine.jpg "Prévision de production d'Ether en tenant compte des impôts selon Whattomine")

Les deux sites ne sont pas d'accord sur les résultats, on va essayer d'y voir plus clair en effectuant le calcul à la main. 


[^3]: Le bassin / la coopérative de minage prend des frais de gestion sur chaque versement qu'il fait aux mineurs. Ce montant est de 1 % du versement dans le cas présent.

###### En faisant le calcul nous-même 

On va vérifier les résultats fournis par Minerstat en opérant le calcul nous-même. 

On récupère donc chaque année 0,96 Ξ (1541 €) auxquels on retranche 923 € d'électricité, et 30 % d’impôts (462 €). Il nous reste donc chaque année $$1541 - 923 - 1541\times0,30 = 155$$ €, ce qui entraîne un seuil de rentabilité atteint au bout de $$\frac{2600}{155} = 16,6$$ ans!!! De pire en pire mes amis.

Pourquoi une telle différence avec Minerstat ? Parce que d'une part je me suis trompé dans le tarif du kWh (0,16 € au lieu de 0,17 €), et d'autre part ils appliquent probablement aussi un taux de conversion € / $ qu'on a choisi unitaire pour faciliter les calculs, et on ne connaît pas la formule qu'ils appliquent.

Mais l'ordre de grandeur est similaire et tourne autour d'une ou deux dizaines d'années ce qui de toute façon est impraticable dans la réalité! **Imaginez attendre 2031, 2038, ou 2046 pour rentrer dans vos frais**, si tant est que l’Ether existe toujours et que vous puissiez encore miner avec le matériel initial !

#### On ne peut donc plus gagner d'argent en minant de l'Ether ?

La rentabilité du minage de l'Ether est mise à rude épreuve. Mais tout n'est peut-être pas perdu. Voyons ensemble plusieurs hypothèses pour tenter d’accélérer l’arrivée du bénéfice positif.

##### Si on a l'électricité gratuite grâce à des panneaux solaires ?
Si on jouit déjà de panneaux solaires installés grâce aux [subventions de l’état](https://www.economie.gouv.fr/particuliers/aides-installation-photovoltaiques), on peut alors faire fonctionner notre plate-forme minière selon deux modes. Soit on la fait fonctionner seulement le jour quand il y a suffisamment de soleil, soit on la fait fonctionner en continu (on profite de l’énergie gratuite quand le soleil brille).
###### Fonctionnement intermittent
Si maintenant on ne fait fonctionner notre installation de minage que quand il y a suffisamment de soleil, on supprime alors le coût de l'énergie. "😎C'est tout bénef💵 pour nous🏖️" me direz-vous ? Oui mais attention, car on ne produira que quand il y aura du soleil.
Si on émet l'hypothèse d'une [durée d'ensoleillement](https://www.meteo-paris.com/actualites/l-ensoleillement-en-france-et-son-evolution-ces-dernieres-annees) de 2000h, soit 23% de l'année et que l'installation photovoltaïque est suffisante (5 kWc[^4] par exemple), alors on pourra certes produire gratuitement des Ethers, mais en nombre bien moindre (en gros on produira un quart de la production continue).

Dans le cas de l'installation minière présentée, avec un facteur de charge de 23% (correspondant à la durée d'ensoleillement), on obtient une "chiffre d'affaires" de 352 € (cf $$0,23\times0,96\times1594$$) auquel il faut tout de même retrancher les 30% d’impôts (105 €) ce qui donne au final un **bénéfice annuel de 246 €**. Pas mal quand même et à comparer au bénéfice obtenu si on avait revendu[^5] cette électricité à EDF OA (EDF Obligation d'Achat) de 124 € (cf $$0,10\times2000\times0,620$$). Au passage, on voit que tant que le taux de change de l'Ether reste au delà de 562 € (cf $$\frac{124}{0,23\times0,96}$$), il est plus intéressant de miner, comme on l'a détaillé dans [l'article précédent]({% post_url 2022-07-10-photovoltaique-to-mine-or-to-revendre-a-EDF %}). 


Si on veut le simuler cette situation sur [whattomine](https://www.whattomine.com/coins/151-eth-ethash?hr=42&p=620.0&fee=31.0&cost=0&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate), il faut mettre les paramètres suivants :

- Coût du kWh = 0 (car généré par les panneaux solaires).
- Puissance de hachage = $$0,23\times184 = 42$$ MH/s puisque tout se passe comme si on avait une plateforme de minage quatre fois moins puissante qui tournait en continu.
- On garde les frais à 31 % (impots + frais de la coopérative de minage).

![Prévision de durée de remboursement en utilisant les panneaux solaires et en tenant compte des impôts selon Whattomine](/assets/images/prevision-whattomine-solaire-avec-impots.jpg "Prévision de durée de remboursement en utilisant les panneaux solaires et en tenant compte des impôts selon Whattomine")
 
Cette fois, on engrange 0,64 € par jour ce qui permet d'atteindre le seuil de rentabilité plus rapidement, au bout tout de même d'une dizaine d'années (11 ans exactement) et après avoir payé plus de 10 k€ de note d'électricité et 5 k€ d’impôts.
C’est pas mal, mais peut-on faire mieux ?
###### Fonctionnement en continu
Si maintenant on fait fonctionner son installation de minage en continu. On ne soutire rien du réseau dans les périodes ensoleillées (comme précédemment) et on continu de miner la nuit. Avec les mêmes hypothèses d’ensoleillement que précédemment, ça équivaut à baisser le tarif électrique de 23 % donc de payer $$(1-0,23)\times0,17 = 0,13$$ € / kWh. Ce qui permet de produire [0,86 € par jour en incluant les impôts (rentabilité atteinte au bout de 8 ans) ](https://www.whattomine.com/coins/151-eth-ethash?hr=184.0&p=620.0&fee=31.0&cost=0.13&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate). C’est mieux mais toujours impraticable.


[^4]: On ne prend pas en considération la perte de productivité des panneaux solaires au cours du temps.
[^5]: EDF OA rachète l’électricité produite 0,10 € / kWh.

##### Et s'il n'y avait pas les impôts ?
"On paye trop d’impôts", "ce sont toujours les mineurs qui payent", "la France est le pays où l’on paye le plus d’impôts sur le minage", … Combien de fois a-t-on entendu ces propos ? Alors c’est le moment de se faire enfin plaisir et de dézinguer les impôts (virtuellement) !

Pour connaître la rentabilité de notre plate-forme minière dans un monde sans impôts (mais avec quand même les frais de la coopérative de minage) on met simplement les [frais à 1 % au lieu de 31 % sur whattomine](https://www.whattomine.com/coins/151-eth-ethash?hr=184.0&p=620.0&fee=1.0&cost=0.17&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate). 

![Prévision de durée de remboursement en utilisant les panneaux solaires et sans impôts selon Whattomine](/assets/images/prevision-whattomine-sans-impots.jpg "Prévision de durée de remboursement en utilisant les panneaux solaires et sans impôts selon Whattomine")
Grosse déception, car même sans impôts, il faudrait plus de quatre ans et demi pour rentabiliser l'investissement initial, ce qui n’est toujours pas praticable. 
##### Si on combine panneaux solaires (subventionnés par l’état) et absence d’impôts ?
Pour connaître la rentabilité de notre plate-forme minière fonctionnant la journée à l'énergie solaire, et la nuit au nucléaire / charbon / gaz / pétrole s'il n'y avait pas les impôts, on met simplement les [frais à 1 % au lieu de 31 % et le tarif du kWh à 0,13 € sur whattomine](https://www.whattomine.com/coins/151-eth-ethash?hr=184.0&p=620.0&fee=1.0&cost=0.13&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate). 
![Prévision de durée de remboursement en utilisant les panneaux solaires et sans impôts selon Whattomine](/assets/images/prevision-whattomine-continu-solaire-sans-impots.jpg "Prévision de durée de remboursement en utilisant les panneaux solaires et sans impôts selon Whattomine")
Nouvelle grosse déception, car même avec des panneaux solaires, et sans impôts, il faut encore trois ans et quatre mois pour rentrer dans ses frais et commencer à gagner de l’argent avec de l’Ether. Et puis de toute façon, il faut les payer ces impôts ! 
Alors on tente une dernière option ? 
##### Et si on reste / retourne chez 💕Papa – Maman🧸?
Et bien là, jackpot, plus d’impôts, plus de frais d’électricité, et on retombe alors sur le résultat donné par Tom’s hardware [d’un peu plus d’un an et demi](https://www.whattomine.com/coins/151-eth-ethash?hr=184.0&p=620.0&fee=1.0&cost=0.0&cost_currency=USD&hcost=2600.0&span_br=7&span_d=7&commit=Calculate) avant d’atteindre le seuil de rentabilité. On ne pourra pas faire mieux ma p’tite dame !
![Prévision de durée de remboursement si on ne paie aucun frais selon Whattomine](/assets/images/prevision-whattomine-chez-papa-maman.jpg "Prévision de durée de remboursement si on ne paie aucun frais selon Whattomine")

##### Récapitulatif des scénarios de minage d'Ether

Pour une mise de départ de 2600 €, voici les retours sur investissement que l'on a obtenu en fonction des différents scénarios de minage d'Ether.

- PV signifie qu'on utilise les panneaux Photo-Voltaïques (soit en continu [24h/24], soit seulement quand l'ensoleillement est suffisant [intermittent]). 
- Le taux de change pris en compte est de 1600 € / Ξ qui correspond au taux rencontré au moment d'écrire ces lignes (été 2022).

---

|-------|-------|------|
| Scénario --- | Bénéfice annuel (€) --- | Retour sur investissement (années) |
|-------|--------|---------|
| Minage 24h/24 avec impôts avec élec | 155 | 16,6 |
| PV intermittent avec impôts | 246 | 10,6 |
| PV 24h/24 avec impôts avec élec | 314 | 8,3 |
| Minage 24h/24 SANS impôts avec élec | 555 | 4,7 |
| Minage 24h/24 SANS impôts SANS élec | 1475 | 1,8 |
|-------|-------|------|  
{:.table-striped}

---


En résumé, on retire de ces différentes scénarios de minage d’Ether, que pour rentabiliser une installation minière avant qu'elle ne devienne obsolète, il faut accepter de la faire tourner 24h / 24. Si on a des panneaux solaires ça abaisse bien de manière non négligeable (près d'un quart) sa facture électrique car on mine gratuitement 2000 h par an (quand il y a du soleil). Pour l’installation présentée, payée à prix d’or ce n’est toutefois pas suffisant pour atteindre (légalement) le seuil de rentabilité en moins de deux ans.

#### Existe-il des alternatives au minage d'Ether 

Vous avez envie de participer à l'aventure des crypto-monnaies, mais n'avez pas envie de le faire à perte. Que faire ?

##### Miner encore de l'Ether ?

Gagner de l'argent rapidement avec de l'Ether semble difficile, ou alors il faut pouvoir trouver du matériel à un bon tarif (en ce milieu d'année 2022, la RTX 3090 peut se trouver entre 800 et 900 € sur le marché d'occasion soit un tiers du prix du neuf au début 2022), et vendre ses Ethers au bon moment. 

Par exemple, si vous achetez deux RTX 3090 (puissance de hachage totale 240 MH/s) pour 1800 € (consommation estimée à 800 W), en prenant en compte les impôts et l'électricité vous obtiendrez [1,16 € / jour](https://www.whattomine.com/coins/151-eth-ethash?hr=240.0&p=800.0&fee=31.0&cost=0.13&cost_currency=USD&hcost=1800.0&span_br=7&span_d=7&commit=Calculate) et atteindrez le seuil de rentabilité au bout de quatre ans. [Sans impôts ce seuil est atteint en moins de 2 ans](https://www.whattomine.com/coins/151-eth-ethash?hr=240.0&p=800.0&fee=1.0&cost=0.13&cost_currency=USD&hcost=1800.0&span_br=7&span_d=7&commit=Calculate).

Sauf que si le prix du matériel baisse pour vous, il baissera aussi pour les autres. Donc certains ne vont pas hésiter à investir dans une puissance de hachage plus importante. La [difficulté du réseau Ether](https://cryptoast.fr/ethereum-difficulte-minage-atteint-record-tandis-utilisation-reseau-diminue/) va augmenter et il vous sera plus difficile de produire des Ethers. Donc votre rentabilité va baisser. Sans compter qu'avec la l'opération de [Fusion](https://coins.fr/fusion-ethereum-opportunite-court-terme-investisseurs/) et le passage à la preuve d'enjeux (15 septembre 2022), le minage d'Ether ne sera plus possible. Donc même si vous faites une affaire sur le cartes graphiques, vous ne pourrez pas miner l'Ether suffisamment longtemps pour rentabiliser votre investissement. Mais qui a dit qu'il n'y avait que l'Ether à miner ?


##### Miner autre chose ?

En effet l'Ether n'est pas la seule crypto qu'il est possible de miner. Ainsi il se peut que d'autres suivent le même parcours que l'Ether ou le Bitcoin et s'affichent à des taux records dans quelques années. Si vous avez le nez creux et flairez la bonne crypto-monnaie, vous pourrez ainsi la miner facilement, en obtenir des milliers voire des millions assez facilement, et lorsque son cours dépassera le seuil choisi, en revendre tout ou partie. Ça s'appelle faire un pari 🎰!

Pour trouver LA crypto à miner, il faut surtout trouver un projet sérieux (⚠️ aux crypto-pourries (dénomées ["shitcoins"](https://academy.bit2me.com/fr/qu%27est-ce-qu%27un-shitcoin/) en anglais)), et cela demande un peu de temps pour lire les livres-blancs des projets, et passer en revue les différents forums.

Par exemple, en ce moment [Flux](https://runonflux.io/mining.html) ou [Neoxa](https://www.neoxa.net/) sont faciles à miner. C'est à dire qu'en quelques jours vous pouvez amasser quelques centaines voire quelques milliers de ces crypto-monnaies ... comme c'était le cas au début du Bitcoin où une nuit de minage processeur produisait une cinquantaine de Bitcoins. Si un jour leur prix décolle vous touchez le pactole, si tant est que vous surveilliez assidûment le cours de ces cryptos pour ne pas manquer l'heure 🤣! Sinon vous aurez perdu la consommation d'une ou deux semaines.


#### Conclusion : alors qui c'est le dindon de la farce à l'Ether 🦃?

Finalement, du côté sombre du minage (de l’Ether), on retient que le **coût d'exploitation** de cette installation de minage d'Ether  (pourtant modeste), est **exorbitant** et qu'atteindre le seuil de rentabilité n'est pas toujours une sinécure, surtout si on prends en compte les impôts, et même si on possède une énergie gratuite à certaines heures (cf panneaux solaires).

On note aussi l'importance de **miner en continu**, sinon ce seuil de rentabilité s'échappe au loin et devient inatteignable du fait de l'évolution des performances des nouvelles cartes graphiques qui rendront la vôtre obsolète en comparaison.

Par conséquent les sites qui utilisent seulement le taux de change de l'Ether à un moment donné pour calculer les retours sur investissement, omettent une large part du calcul et affichent donc des durées chimériques (par fainéantise, à dessein pour inciter les visiteurs à investir dans le matériel présenté et cliquer sur le lien proposé ?). Et puis ils oublient de mentionner que [l’Ether ne se minera plus à partir du 15 Septembre 2022](https://journalducoin.com/ethereum/mineurs-eth-plein-the-merge/) (sauf contre-temps).

Ainsi plus généralement, si vous êtes attiré par le minage, on ne saurait trop recommander de bien se poser avant d'investir et de passer un peu de temps sur les forums des crypto visées si elles sont jeunes, ou sur  [Whattomine](https://www.whattomine.com/coins/151-eth-ethash) en ajoutant le taux d’impôts dans les frais si elles sont plus matures.

En définitive il y a quand même un côté clair au  minage (en général), mais celui-ci requiert  de la patience. Il consiste à **miner une crypto sérieuse, facile à miner**, pour laquelle vous adhérez au projet (ex: Raven, Neoxa, Flux, Ergo...). Les jeunes cryptos ont cette facilité de minage. Ensuite il suffit d’attendre que leur cours dépasse un seuil que vous vous êtes fixé pour vendre tout ou partie de vos actifs. Par exemple, pour ma part, ce seuil est atteint quand mes actifs dans une crypto atteignent 1000 €. 

À mon sens, en tant que mineur amateur avec près de deux ans d'expérience, il ne sert à rien de s'acharner à miner des crypto-monnaies sur lesquelles il y a déjà bon nombre de mineurs, car on génère des cryptos trop lentement quand la facture électrique grossit elle rapidement. En ces heures de restriction énergétique il peut être plus prudent d'essayer d'être malin 🤓(dénicher la future pépite et la miner facilement) plutôt que bourrin 💪(miner la pépite actuelle en dépensant beaucoup d'énergie).
