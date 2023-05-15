---
layout: post
title:  "Clonage de voix avec Toucan"
author: caraduf
categories: [ intelligence artificielle, clonage de voix, linux, synthèse vocale ]
tags: [IA, clonage voix, tts]
image: assets/images/toucan.png
description: "Vous cherchez une solution pour que la petite voix de vos vidéos / présentations générée par synthèse vocale ressemble à votre propre voix ? Suivez le guide, je vous montre comment faire dans ce tutoriel."
featured: true
hidden: true
usemathjax: true
published: true
---

L'intelligence artificielle est arrivée en force l'an dernier (2022) avec Chat GPT. Ce programme continue de faire beaucoup parler de lui, et il occulte d'autres avancées, tout aussi intéressantes, notamment dans le secteur de la synthèse vocale et du clonage de voix. En effet des réseaux de neurones peuvent être désormais entrainés pour produire une voix naturelle à partir d'extraits plus ou moins longs d'une voix cible et lui ressembler à s'y méprendre (clonage de voix). 

En plus, à la différence de Chat GPT, les modèles pour la voix sont accessibles gratuitement, en source ouverte et disponibles hors connexion. Bref c'est une opportunité inespérée pour améliorer la qualité des projets qui utilisent une synthèse vocale pour leur bande son.

Bien sûr cette technologie de clonage de voix peut être mal utilisée, ou utilisée à des fins malveillantes. Mais comme elle est déjà disponible, autant bien savoir comment elle fonctionne et ce qu'on peut faire avec pour garder un esprit critique sur ce qu'on entend. 

Vous l'aurez donc compris, on va donc se focaliser dans cet article sur une méthode concrète de clonage de voix, grâce aux outils fournis par [Toucan](https://github.com/DigitalPhonetics/IMS-Toucan). Ce projet est, me semble-il, plus facile à prendre en main pour les débutants qu'un autre beaucoup plus complet et plus ancien, [Coqui TTS](https://github.com/coqui-ai/TTS)[^1], que nous aborderons dans un autre article.

Et pour conclure cette introduction, vous aurez noté que ce guide sur le clonage de voix est entièrement rédigé en français afin que cette technologie soit aussi accessible à la communauté francophone (cf la quasi totalité des guides et des projets sont en anglais).

[^1]: Coqui a pris la suite du projet Mozilla TTS.

Voici le menu de ce touffu article :
* TOC
{:toc}

#### Bref historique
Sans remonter à Mathusalem, un des premiers projets ouvert à avoir percé dans le domaine du clonage de voix a été [Real-Time Voice Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning) de CorentinJ débuté en 2019 et abandonné fin 2021. Ensuite, début 2022 l'équipe de [Coqui](https://github.com/coqui-ai/TTS) (qui avait repris le projet Mozilla TTS) a sorti son modèle [YourTTS](https://github.com/Edresson/YourTTS), accessible publiquement, et qui promettait de cloner une voix à partir d'à peine une minute d'extraits sonores de la voix cible. Au cours de la même période (lire [chapitre 2.3 de la publication en anglais](https://arxiv.org/pdf/2210.12223.pdf)), l'université de Stuttgart (section phonétique numérique) publiait son modèle [IMS-Toucan](https://multilingualtoucan.github.io/) sur lequel nous allons nous concentrer dans cet article.

#### Pourquoi Toucan ?
Nous allons utiliser le projet Toucan car il est assez simple. En effet, il y a très peu de paramètres à modifier, et on a des résultats assez rapidement. Par exemple, en un quart d'heure on peut avoir une nouvelle voix (si on a déjà son jeu de données). En plus il s'installe facilement. Il permet donc d'apprendre le clonage de voix rapidement, sans trop avoir à traiter de sombres erreurs qui peuvent parfois dérouter.

#### Matériel requis
Pour cloner une voix, il vous faut absolument une carte graphique (CG) de compétition. Par carte graphique de compétition, on entend une carte graphique performante et habituellement assez chère. À partir de là, plusieurs solutions plus ou moins onéreuses s'offrent à vous : soit utiliser gratuitement des CG partagées (mutualisées), soit investir dans un CG dédiée chez vous.

##### Carte graphique mutualisée
Sans leur faire de pub, Google Colab est une plateforme de calculs qui vous donne la possibilité de faire des calculs gratuitement sur des CG (plus ou moins) performantes. C'est intéressant, car c'est gratuit (ou 50€ par mois pour la formule la moins bridée) mais quand on débute et qu'on tâtonne on passe beaucoup de temps refaire les mêmes calculs, à résoudre les mêmes erreurs, à en corriger de nouvelles suite à une mise à jour, ou encore à attendre qu'une CG performante soit de nouveau disponible. 

Si on est déjà pro en Colab (ou autre), on peut l'utiliser, mais si on débute dans ce monde, je conseille vivement d'investir dans une CG digne à monter dans son ordi.

##### Carte graphique dédiée Nvidia
Avec la fin de l'euphorie des cryptos, les prix des cartes graphiques sont redescendus à des tarifs normaux. Avec Toucan, une carte graphique Nvidia dotée de 8 GO de mémoire vidéo (VRAM) fera l'affaire. Cependant, je conseille de prendre un peu de marge, si votre budget le permet, et de viser 24 GO de VRAM. 

Avoir plus de RAM permet d'avoir tellement plus de souplesse et de ne pas être arrêté en plein entrainement par une erreur "Manque de mémoire". À mon sens, l'apprentissage profond (deep learning) est déjà tellement complexe, qu'il est bienvenue de pouvoir se passer des erreurs due au matériel.

> Pour ma part, j'ai commencé le clonage de voix avec Coqui, sur Colab, puis comme j'avais une RTX 3070 avec 8 GO de VRAM à disposition (cf minage de cryptos), je l'ai utilisée. J'ai passé 6 mois à essayer de comprendre pourquoi mes entrainements s'arrêtaient sans raison (maintenant j'ai compris et je vous l'expliquerai :wink:). Ensuite j'ai revendu toutes les CG AMD de ma plateforme minière pour acheter une RTX 3090 d'occasion et être plus libre dans le choix des hyper paramètres d'entrainement (on verra plus tard de quoi il s'agit).

Vous noterez qu'il vous faut absolument une carte graphique NVidia pour entrainer un modèle. Non pas que les cartes AMD ne puissent pas faire ces calculs, mais plutôt que la majorité des projets utilisent la bibliothèque de calculs [CUDA](https://fr.wikipedia.org/wiki/Compute_Unified_Device_Architecture) qui fonctionne uniquement sur des CG Nvidia. Pour débuter il vaut donc mieux viser une CG directement compatible avec la plupart des projets de clonage de voix (et d'apprentissage machine en général), donc prendre une Nvidia.



##### Et le reste de l'ordinateur alors ?
C'est fameusement connu, mon ordinateur d'apprentissage date d'il y a plus de dix ans (Intel Core i5 2400 avec 4 cœurs). C'est celui qui m'a aussi servi pour le minage de cryptos. Il dispose d'une carte mère directement posée sur une étagère, de deux alimentations connectées ensemble (une pour la carte mère et une de 500 W exclusivement pour la CG qui réclame 350 W à plein régime), d'un disque SSD pour le système et d'un disque dur magnétique pour sauvegarder les modèles. J'ai quand même poussé la RAM de 4 GO d'origine à 16 GO (50€). Autant avec Coqui il se trainait un peu (lors des calculs de phonèmes qui se font sur CPU), autant avec Toucan il tourne suffisamment bien pour atteindre les 100 000 étapes en un peu plus d'un jour. C'est-à-dire qu'en une nuit il produit un modèle de déjà très bonne qualité.

Tout ceci pour vous dire que si vous prévoyez 1000 € de budget, mettez les principalement sur la CG plutôt que sur le reste. On trouve des RTX 3090 24 GO d'occasion entre 700 - 800€. Ne faites surtout pas l'erreur de miser sur un super processeur, une carte mère de luxe, et une carte graphique bas de gamme (ou intégrée), sinon vous serez frustré du résultat. Bien sûr si vous avez déjà un ordi performant équipé d'une carte graphique à 8 ou 12 GO de VRAM gardez votre config; grâce à Toucan et quelques conseils vous aurez des résultats déjà surprenants. Peut-être même qu'avec seulement 4 ou 6 GO de VRAM vous pourriez avoir des résultats. Ce ne devrait être juste que plus long (mais je n'ai pas essayé).

Si vous l'utilisez dans les mêmes conditions que moi, c'est-à-dire à distance sur le réseau local, vous n'aurez besoin ni d'écran, ni de clavier, ni de souris. Pour la liaison avec le réseau, j'utilise un boîtier CPL fourni par le fournisseur d'accès internet, ce qui limite le débit à 2 MO / s en interne, alors que le débit sur internet dépasse les 10 MO / s!

Autre point important, même si de nos jours ça ne devrait pas poser de problème, un un ou plusieurs supports de stockage sont nécessaires, car les modèles ont tendance à occuper beaucoup d'espace disque à la longue. Mon ordi est équipé d'un disque SSD de 512 GO pour le système et pour lancer Toucan, puis un disque dur magnétique de 1 ou 2 TO est utilisé pour régulièrement archiver les modèles et ainsi faire de la place sur le SSD pour créer de nouveaux modèles.

Donc en résumé, pour cloner une voix avec Toucan, une carte graphique Nvidia performante est recommandée. Le reste de l'ordinateur peut être très moyen.

#### Installation de Toucan

#### Premières inférences avec la voix Meta

#### Développement d'une nouvelle voix de synthèse
La voix de Meta vous plait, mais vous préféreriez par exemple une voix masculine. Toucan permet cela par un procédé appelé "affinage du modèle" (model fine-tuning).

##### Affinage du modèle Meta avec un nouveau jeu de données
En apprentissage profond, on distingue plusieurs procédés pour développer un modèle. Je vous explique succinctement ce qu'il en est. 

###### Modèle développé de zéro ("from scratch")
Tout d'abord on peut développer un modèle de zéro ("from scratch"). Ceci nécessite de tout apprendre au modèle, et donc de lui fournir pour cela de nombreuses données. Ces données vont lui permettre de déterminer une loi générale qui ensuite lui permettront ensuite d'associer à une nouvelle valeur jamais vue en entrée, la sortie la plus probable selon lui. 

Si on se concentre sur les modèles pour la synthèse vocale, vous allez donc abreuver votre modèle d'exemples de sons avec leurs retranscriptions respectives. Au fur et à mesure de son apprentissage, il va apprendre par exemple que telle lettre se prononce de telle façon dans tel contexte, et de telle façon dans un autre... 

La loi de probabilité qui associe la sortie (onde sonore) à l'entrée (texte) peut comporter plusieurs millions de paramètres. Au début de l'apprentissage, les paramètres du modèle sont tous à 0 (ou n'importe quelle valeur d'initialisation). 

Comme le modèle ne sait pas encore comment associer l'entrée (texte) à la sortie (son) vous entendez une suite de bruits.

EXEMPLE DE SON après quelques étapes d'entraînement

Dans le cadre de ce qui nous concerne, pour que le modèle apprenne à prononcer les phrases correctement, il va donc falloir l'entraîner en lui montrant des millions d'exemples différents. Après chaque exemple, le modèle s'exerce en essayant de produire des sons correspondants au texte, et il compare ce qu'il a généré à l'exemple sonore qu'on lui a fourni (en faisant l'hypothèse que cet exemple sonore correspond exactement au texte fourni). En fonction de la plus ou moins grande différence entre ce qu'il a produit et le vrai résultat attendu, il ajuste ses paramètres. La différence entre ce qu'il a produit et le vrai signal (celui qu'on lui a fourni) est appelé l'erreur. Et le modèle va tout faire pour arriver à une erreur nulle : il va donc chercher pendant tout son apprentissage à minimiser cette erreur en modifiant ses paramètres. 

Dans la réalité, le modèle ne s'entraîne pas exemple par exemple, mais lot d'exemples par lot d'exemples. C'est le fameux hyper-paramètre "taille du lot" ("batch size"). Ainsi pour un lot de taille 32, le modèle va essayer de balbutier -en même temps / en parallèle- les 32 exemples de phrases donnés, puis il va comparer ce qu'il a produit par rapport aux sons qu'on lui a fournis. En fonction de l'erreur commise (plus ou moins grande, plus ou moins dans la direction d'un des exemples), il va ajuster ses paramètres et recommencer une nouvelle étape pour voir si l'apprentissage va dans le bon sens ou pas.

On voit que plus il va traiter d'exemples en parallèle en même temps, plus vite il va tendre (converger) vers les bons paramètres.

La métaphore fréquemment utilisée pour comprendre cette taille de lot, est celle du voyageur qui veut, depuis Brest, se rendre à Rome. Tous les kilomètres, il fait une pause et demande à X personnes le chemin vers Rome. Ces gens, tous de bonne foi, lui répondent, chacun selon son point de vue, et le voyageur suit le chemin indiqué. On comprend que si X = 1, il risque de mettre beaucoup plus de temps (car une personne peut se tromper et lui indiquer une mauvaise direction), que si X = 16 (car il y a moins de risque que toutes se personnes se trompent, même si le risque existe). Je ne sais pas ce qu'il se passerait dans la réalité si on demandait à un nombre X très grand de personnes de nous indiquer le chemin vers Rome, mais dans le cadre de la synthèse vocal, il ne faut pas prendre X trop grand, sinon les effets sont contre-productifs (pour Toucan, le développeur évoque 128 pour $$X_m_a_x$$).

Dans la vraie vie, c'est la carte-graphique qui avalent ces X exemples en même temps, et se charge de faire les calculs en parallèle. Car en effet, les cartes-graphiques excellent dans les calculs "simples" parallèles (cf elles sont conçues pour générer la couleur de chaque pixels de l'écran le plus rapidement possible, donc le mieux est de faire le plus de calculs en parallèle, idéalement on aurait une ligne de calcul par pixel d'écran), contrairement aux processeurs centraux (CPU) qui eux excellent dans les calculs "complexes" à la chaîne. 

Et c'est là où l'on comprend l'importance de la taille de la mémoire vidéo, car c'est dans celle-ci que la carte-graphique va stocker ces exemples. Or pour représenter une seule seconde d'un enregistrement qualité CD, il faut plus de quarante-quatre milles échantillons, dont chacune des valeurs doit être stocker en mémoire. Heureusement il existe des astuces pour représenter ces exemples, ce qui permet de diminuer l'espace occupé en mémoire. Une des astuces consiste à représenter l'onde sonore comme un spectrogramme mel. Il est ainsi possible de mettre en mémoire vidéo tout un lot d'exemples, et plus la carte-graphique possède une grande mémoire vidéo, plus on peut traiter d'exemples en même temps et avancer plus vite vers la solution (ensemble des paramètres qui minimise l'erreur).

On voit aussi que plus le modèle comporte de paramètres, plus il va être précis dans ce qu'il générera... mais aussi plus il faut réitérer les mêmes calculs pour arriver aux bons paramètres, et plus il faut d'exemples divers et de qualité (il faut donc créer et vérifier manuellement des jeux de données comportant des extraits sonores et leur retranscription correspondante, ce qui peut occuper une équipe pendant plusieurs mois, donc coûter très cher).

En général, il faut plusieurs millions d'itérations pour arriver à un résultat de bonne qualité, ce qui peut prendre plusieurs semaines avec des tailles de lot assez importantes qui nécessitent du matériel coûteux et en nombreux exemplaires (chaque carte se partageant un lot trop grand pour rentrer en mémoire d'un seule carte). Des cartes graphiques spécialisées dans l'apprentissage machine ont un montant unitaire pouvant dépasser la dizaine de millier d'euros, comme on le voit dans l'illustration ci-dessous.

![Tarif pour une carte graphique très haut de gamme destinée à l'apprentissage machine en Mars 2023](/assets/images/gpu-price.jpg "Près de 30k€ pour une carte graphique très haut de gamme destinée à l'apprentissage machine, en Mars 2023")

Finalement, au bout d'un certain (long) temps, après de nombreuses étapes de calcul ("steps"), on arrive ~~à Rome~~ à une erreur assez faible pour permettre au modèle de prononcer le texte correctement. On a donc fini l'entraînement du modèle et maintenant qu'on a déterminé tous ses paramètres (on parle aussi de poids ("weights")), on peut utiliser le modèle pour "dire" n'importe quel texte, dans la mesure où le texte demandé correspond au domaine que le modèle a appris pendant son apprentissage. Ainsi un modèle entraîné sur un corpus en russe, ne pourra pas parler français, ou chinois, mais seulement russe (il existe des modèles multi lingues, comme Toucan).

Cependant, si le modèle a été entraîné dans une langue proche, il sait déjà comment prononcer des sons, et on pourrait l'affiner dans une autre langue pour lui apprendre une nouvelle langue. Et s'il a déjà été entraîné dans la bonne langue, on va pouvoir l'entraîner à prononcer les mots à la manière d'une certaine voix qu'on va lui apprendre. C'est l'objectif de l'affinage du modèle qu'on va voir juste après.

##### Modèle affiné à partir d'un modèle existant
Dans le paragraphe précédent, on a obtenu les différents paramètres (poids) d'un modèle général qui se débrouille très bien dans le domaine sur lequel il a été entraîné. Si l'on souhaite maintenant entraîner le modèle sur un nouveau domain, pas trop éloigné du premier domaine sur lequel le modèle a été entraîné (chapitre précédent), on va utiliser le procédé d'affinage ("fine-tuning").

L'affinage d'un modèle pré-entraîné ("pre-trained model") consiste donc à lui apprendre une nouvelle tâche à partir d'un jeu de données (beaucoup) plus limité.

Pour reprendre le modèle de synthèse vocale qui nous intéresse, quelqu'un (en général une entreprise de la tech', mais ça peut-être aussi une université dans le case de Toucan) fournit un modèle pré-entraîné à produire une onde sonore à partir de texte. Concrètement, il s'agit d'un fichier ".pt" pour [PyTorch](https://fr.wikipedia.org/wiki/PyTorch) (bibliothèque communément utilisée dans le domaine de l'apprentissage profond) qui contient l'ensemble des valeurs (poids) des différents paramètres du réseau neuronal. 

Un réseau neuronal est un assemblage de briques logicielles (potentiellement préexistantes) et agencées d'une certaine manière pour accomplir une tâche. Chaque neurone est un paramètre du modèle et est affecté d'un fameux "poids" qu'il faut trouver (cf partie précédente). Dans le domaine de la synthèse vocale, le plus célèbre est [Tacotron](https://datafranca.org/wiki/Tacotron2) développé par Google dans la seconde partie de la décennie précédente. Concernant Toucan, le réseau neuronal utilisé est basé sur [PortaSpeech](https://arxiv.org/abs/2109.15166)(publication en anglais). Comme ces réseaux neuronaux sont basés sur des briques pré-existantes, l'auteur du modèle peut décider d'en ajouter / modifier / supprimer certaines en fonction de ce qu'il veut faire. Il n'est pas rare que les modèles théoriques sortent sans donner les poids du modèle. En l'état, les modèles sont donc inutilisables et il faut donc les entraîner de zéro ("from scratch") pour en tirer des sons. 

Mais parfois comme dans le cas de Toucan (ou de [Coqui TTS](https://github.com/coqui-ai/TTS)), le modèle théorique est assorti d'un modèle pré-entraîné. C'est à dire qu'à l'aide le modèle pré-entraîné (donc connaissant les valeurs (poids) des différents neurones du réseau neuronal), et bien le modèle théorique est de suite opérationnel. On peut même le tester. Dans le cas de Toucan, le modèle pré-entraîné s'appelle "Meta" et grâce à lui on obtient ceci :

EXEMPLE DE TOUCAN EN fr (avec les chaussettes de l'archi)

On remarque donc que le modèle pré-entraîné fait très très bien son travail sur ce vire-langue. Il nous faut juste changer la voix.

On va donc se construire un jeu de données de quelques minutes (environ une centaine d'échantillons entre 2 et 8 secondes) de notre orateur choisi, et on va le donner à traiter par le modèle, comme à la section précédente sur l'apprentissage de zéro. Refaire pareil me direz-vous, mais à quoi sert donc le modèle pré-entraîné ?

Le modèle pré-entraîné va nous servir de point de départ, puisqu'il sait déjà parler correctement le français. Si on reprend l'image de tout à l'heure, et qu'on veut aller à Naples toujours depuis Brest, et bien le modèle pré-entraîné nous téléporte directement à Rome.



Assez parlé de théorie, passons à la pratique.


#### Trucs et astuces divers 
Voici une rubrique qui regroupe quelques astuces qui pourraient vous être utiles.

##### Comment suivre l'avancement de l'entraînement ?
Pour savoir quand poursuivre ou arrêter l'entraînement, je vous propose deux méthodes.

###### En s'aidant des spectrogrammes mels
Vous aurez noté que Toucan ne génère pas d'échantillons sonores au fur et à mesure de l'entraînement. Il génère par contre de nombreux spectrogrammes [mels](https://fr.wikipedia.org/wiki/%C3%89chelle_des_mels) stockés sous forme d'images png. 

![Exemple de spectrogramme généré par Toucan pendant l'entraînement](https://user-images.githubusercontent.com/91517923/202358243-49c898a6-8a6a-4af4-a484-96dec6afd94a.png "Exemple de spectrogramme généré par Toucan pendant l'entraînement")

En abscisses on a le temps, et en ordonnées on a la fréquence. La couleur donne une idée de l'intensité du signal.

Sur le signal ci-dessus, on reconnaît la voix d'un homme, car les hommes ont une fréquence fondamentale plus basse (grave). Ensuite les différentes lignes sont légèrement séparées, et on va chercher à avoir de plus large séparations entre ces lignes.

À titre de comparaison, le spectrogramme suivant est celui d'une femme, et comme les lignes sont plus séparées, le son est plus clair.

![Exemple de spectrogramme d'une voix féminine généré par Toucan pendant l'entraînement](https://user-images.githubusercontent.com/91517923/202784305-6f566c55-e9be-4d1c-b97c-445b526fa0c9.png "Exemple de spectrogramme d'une voix féminine généré par Toucan pendant l'entraînement")

Par conséquent en comparant les spectrogrammes on peut voir si l'entraînement va dans le bon sens et améliore la qualité ou si cette dernière ne progresse plus et qu'on peut donc arrêter l'entraînement. Cette méthode demande un peu d'entraînement pour exercer son regard, et comporte un biais. En effet, la transformation de spectrogramme en onde sonore réclame l'intervention d'un vocodeur. Or celui-ci doit être entraîné convenablement pour bien traduire le spectrogramme en onde sonore. Il vaut donc mieux générer manuellement des extraits sonores.

###### En générant des sons
Pour générer (synthétiser) un fichier son à partir d'un texte, on peut s'inspirer du script `run_text_to_file_reader.py` et de sa fonction `le_corbeau_et_le_renard(version, model_id="Meta", exec_device="cpu")` où :
- `version` correspond au nom de fichier (ne pas préciser l'extension), 
- `model_id` est le nom de votre modèle _sans_ préciser le préfixe _"PortaSpeech\_"_ qui sera ajouté automatiquement. Pour connaître le nom du modèle, se rendre dans le répertoire Models et chercher le modèle choisi.
- `exec_device` est l'appareil qu'on veut utiliser pour générer le fichier son. Choisir "cpu" pour utiliser le processeur central (plus lent), ou "cuda" pour utiliser la carte graphique (beaucoup plus rapide).

Comme toujours, avant de pouvoir générer un fichier son à partir d'un modèle, il faut lancer le script `run_weight_averaging.py` qui va générer l'indispensable fichier `best.pt` à partir des derniers points de contrôles ("checkpoint_xyz.pt").

Ensuite vous pouvez lancer `python3 run_text_to_file_reader.py` puis écouter le son généré qui se trouve dans le répertoire "audios". Ça vous donne donc un aperçu exact de la qualité de votre modèle à ce moment de l'entraînement.



#### Conclusion

