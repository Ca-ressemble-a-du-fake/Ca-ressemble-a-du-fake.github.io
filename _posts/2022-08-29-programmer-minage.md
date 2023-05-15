---
layout: post
title:  "Découvrez comment il mine au soleil gratuitement et écologiquement"
author: caraduf
categories: [ minage, économies, tutoriel ]
tags: [minage, ethereum, carte graphique]
image: assets/images/minage-au-soleil.jpg
description: "On va voir comment faire en sorte que son ordinateur s'allume et s'éteigne tout seul, pour par exemple miner gratuitement à certaines heures, grâce à l'intensité lumineuse du soleil."
featured: true
hidden: true
usemathjax: true
published: true
---

Pour miner des crypto-monnaies gratuitement grâce au soleil, il faut pouvoir démarrer et éteindre sa plate-forme minière automatiquement. En plus d'être gratuit, ça rend le minage plus écologique.

Voici comment on va s'y prendre :

* TOC
{:toc}



#### Objectif visé et cadre de l'étude
 

Mon objectif est de miner suffisamment d'Ether pour financer mes achats de jeux vidéos [Steam](https://fr.wikipedia.org/wiki/Steam) que l'on peut payer en Ether chez certains revendeurs. La plate-forme de minage utilisée est issue d'une ancienne plate-forme qui a été simplifiée. À terme elle sera constituée d'une seule carte graphique haut de gamme mais pour l'heure elle en compte encore deux, comme on le voit ci-dessous.

![Nouvelle plate-forme minière simplifiée](/assets/images/new-rig-rtx.jpg "Nouvelle plate-forme minière simplifiée")

Comme ma demeure est équipée de panneaux solaires et que le tarif de l'électricité augmente fortement, l'idée est de faire tourner la plate-forme minière à l'énergie solaire produite localement par les panneaux photovoltaïques. Comme ça, ça ne me coûte rien, et ça me permet de tester régulièrement (une fois tous les deux mois) de nouveaux jeux. 

Ma consommation de jeux vidéos se suffit largement d'un minage intermittent, seulement quand le soleil brille. Le but est vraiment que ça ne me coûte rien de plus.

Pour arriver à mes fins (démarrer le minage aux heures ensoleillées / l'éteindre en dehors de ces heures), il est donc utile de savoir programmer son ordinateur[^1], comme ça même en mon absence le minage a lieu.

[^1]: Une plate-forme minière n'est autre qu'un ordinateur équipé de plusieurs cartes graphiques.

<!-- Pub -->

#### Démarrage et arrêt à heures fixes

Voyons dès à présent comment s'y prendre pour démarrer et arrêter son ordinateur à heures fixes. Ce n'est pas forcément la méthode la plus sûre pour garantir le minage 100 % gratuit (à l'énergie solaire), mais c'est celle qui est la plus rapide et la plus simple à mettre en œuvre. 

##### L'allumage automatique de l'ordi⚡ 

Avant de pouvoir miner, il faut que l'ordinateur s'allume et démarre. C'est ce qu'on va faire ici.
Bien que la plate-forme présentée fonctionne sous Linux, l'allumage automatique fonctionne aussi sous Windows puisque ça passe par le BIOS.

###### Réglages dans le BIOS

Le BIOS est le petit logiciel qui se lance au démarrage de l'ordinateur et émet parfois des bips. C'est lui qui va s'occuper d'allumer l'ordinateur et de le lancer.

![Exemple de BIOS Intel](/assets/images/bios.jpg "Exemple de BIOS Intel")

Depuis fort longtemps (au moins une dizaine d'années) un paramètre dans le BIOS permet de programmer l'allumage de l'ordinateur à un horaire donné. Ça n'est pas compliqué, il faut juste le chercher parmi tous les paramètres. Ici il s'appelle "Réveil" ("wake-up") et apparaît après l'activation du "Réveil depuis l'état S5" ("wake system from S5"). Je vous montre la procédure dans cette vidéo.

<iframe width="1138" height="711" src="https://www.youtube.com/embed/A57FbISpZhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

💡 Il faut faire attention à l'heure du BIOS qui s'affiche sur la première page car c'est elle qui fait foi. Dans la vidéo, on voit que le BIOS a 2 heures de décalage par rapport à l'heure de ma montre. C'est pourquoi je décale l'heure du réveil de 2 heures. 

Voilà maintenant la plate-forme minière s'allumera tous les jours à 9h30. Mais pour le moment, elle est juste allumée et ne mine pas encore.

Pour démarrer le minage, on présente deux méthodes. L'une a recours à [HiveOS](http://wikihiveosfr.fr/) qui est un environnement complet dédié au minage qui remplace le système d'exploitation habituel (ex Windows ou Ubuntu), et l'autre est plus générale et utilise une version quelconque de Linux (ex Debian, Ubuntu, ...).

###### Si vous avez HiveOS

Vous n'avez rien d'autre à faire puisque, par défaut, dès que HiveOS démarre, il se met à miner.

###### Si vous n'avez pas HiveOS

Dans le cas où votre ordinateur sert à autre chose qu'au minage, vous n'avez pas HiveOS d'installé et allez donc devoir créer manuellement l'événement de démarrage du minage.

1. Vous allez créer tout d'abord un script avec la commande de minage (réglage de la carte graphique (cf "overclocking"), lancement du logiciel de minage). Pensez à le rendre exécutable (bouton droit sur le fichier, propriétés, permissions, autoriser l'exécution du fichier comme un programme) ou avec un chmod -x. 

2. Ensuite pour lancer ce script, on va ajouter une planification pour cron, en passant par son éditeur qui n'est autre que crontab. ⚠️ Le script doit se lancer en mode sans privilèges, donc NE PAS UTILISER `sudo` pour lancer crontab. La commande suivante est recommandée.

    ```
    crontab -e
    ```
    On choisit "nano" comme éditeur s'il nous le demande, puis on ajoute une ligne 
    `32 9 * * * /home/user/chemin/vers/script.sh` et on sauvegarde.
    Cette commande lancera le script de lancement du minage tous les jours à 9h32 (heure du système d'exploitation, pas du BIOS).
    
    Comme l'heure du BIOS n'est pas réglée précisément, on laisse une grosse minute de battement pour que l'ordinateur démarre.
    
    On aurait pu lancer le script de minage au démarrage de l'ordinateur, mais il se lancerait à chaque démarrage, même quand on ne veut pas. Là, si on a une tache GPU à réaliser (ex : un invité veut jouer à un jeu vidéo), il suffit de redémarrer l'ordinateur après cet horaire et le script de minage n'est pas lancé.

Commencer à miner à 9h32 au Printemps ou en Été est bien suffisant car le soleil produit déjà suffisamment pour assurer la couverture des besoins électriques de la plate-forme, en hiver il faudra certainement rajouter une bonne heure. Il ne nous reste plus qu'à programmer l'heure à laquelle l'ordinateur devra s'éteindre.

#### L'extinction totale automatique💤

Tout d'abord précisons que pour éviter de gaspiller l'électricité lorsque l'ordinateur ne mine pas et qu'on ne s'en sert pas, on souhaite qu'il soit complètement éteint[^2] en dehors des périodes de minage ([pas de veille](https://www.ecoconso.be/fr/content/les-appareils-en-veille-ca-consomme-et-ca-coute-cher)). 

Les méthodes proposées ici concernent Linux car en général les plate-formes de minage ou d'apprentissage machine ont tout l'écosystème ad-hoc sous ce système d'exploitation. Les utilisateurs Windows trouveront une manière de faire [ici (non testée)](https://www.pcastuces.com/pratique/astuces/4018.htm).

On présente deux méthodes car l'une a recours à [HiveOS](http://wikihiveosfr.fr/) qui est un environnement complet dédié au minage qui remplace le système d'exploitation habituel (ex Windows ou Ubuntu), et l'autre est plus générale et utilise une version quelconque de Linux (ex Debian, Ubuntu, ...).

[^2]: Techniquement l'ordinateur est en veille mais dans un autre type de veille que celle que l'on choisit quand on clique sur "Mettre en veille". Quand l'ordinateur est éteint, seule l'horloge interne fonctionne encore grâce à une pile au lithium. La consommation dans ce mode est voisine de 0 W. Par contre lorsque l'ordinateur est "mis en veille", les composants internes sont mis en mode très faible consommation, mais restent toujours alimentés par la prise secteur. La consommation est alors comprise entre [3 et 10 W](https://www.thehomehacksdiy.com/how-much-power-does-a-computer-use-in-sleep-mode/).

##### Si vous avez HiveOS

###### 💡Ajout d'une étiquette à votre ferme💡
Avant de pouvoir appliquer la méthode pour programmer l'horaire d'extinction de l'ordinateur sous HiveOS, il y a une astuce à connaître. En effet, il faut d'abord "coller" une étiquette ("tag" sous HiveOS) à votre ferme si elle n'en a pas déjà. Sans cela vous ne pourrez pas sélectionner votre ferme dans le planificateur ("schedules" sous HiveOS). Voici comment faire sous l'appli HiveOS :

1. Sélectionnez votre ferme puis appuyez sur les trois petits points en bas à droite.
    ![Sélection de la ferme à étiqueter](/assets/images/ajout-tag-selection-ferme.jpg "Sélection de la ferme à étiqueter") 

2. Ouvrez alors dans Paramètres de la ferme ("Settings").
    ![Ouvrir les paramètres de la ferme](/assets/images/ajout-tag-parametres.jpg "Ouvrir les paramètres de la ferme") 

3. Faites défiler vers le bas et à la rubrique Étiquettes ("Tags") ajoutez en une ("Add Tag") s'il n'y en a pas. Ici la plate-forme produit 150 MH/s en Eth, je l'ai donc nommée "150Rig".
    ![Attribuer une étiquette à la ferme](/assets/images/ajout-tag-nom.jpg "Attribuer une étiquette à la ferme s'il n'y en a pas déjà une") 
    
Vous êtes prêt à passer à la suite! 

###### Ajout d'une planification

Maintenant que votre ferme a une étiquette,

1. Retournez sur votre ferme et sélectionnez la. Ensuite dans le menu du bas à droite ("More"), sélectionnez les planifications ("Schedules").
    ![Sélection de la ferme](/assets/images/schedules-select-worker.jpg "Sélection de la ferme") 
    
    La fenêtre suivante s'ouvre :
    ![Vue d'ensemble d'une planification](/assets/images/schedules-broad-view.jpg "Vue d'ensemble d'une planification") 


2. Ajoutez alors un événement ("Add event").
    ![Ajout d'un nouvel événement](/assets/images/schedules-add-event.jpg "Ajout d'un nouvel événement") 

3. C'est à ce moment là que l'étiquette de la ferme est requise (rubrique "Tags"). Sélectionnez donc votre ferme grâce à son étiquette.
    ![Sélection de la ferme par son étiquette](/assets/images/schedules-select-tag.jpg "Sélection de la ferme par son étiquette") 

4. Faites défiler l'écran vers le bas jusqu'à trouver la rubrique concernant la commande à lancer ("Run command"). Choisissez alors éteindre ("Shutdown") dans la liste.
    ![Sélection de la commande d'extinction](/assets/images/schedules-select-command.jpg "Sélection de la commande d'extinction") 

5. Faites défiler encore vers le bas et à la rubrique Répétition ("Repeat") choisissez Quotidiennement à l'horaire ("Daily at time").
    ![Sélection du type de répétition](/assets/images/schedules-set-repeat.jpg "Sélection du type de répétition") 
    
6. Entrez l'horaire d'arrêt de l'ordinateur
    ![Définition de l'heure d'arrêt de l'ordinateur](/assets/images/schedules-set-time.jpg "Définition de l'heure d'arrêt de l'ordinateur") 

7. Enfin nommez cet événement (rubrique "Name") et vérifiez qu'il est bien active ("Event is running" en vert).
    ![Attribution d'un nom à l'événement](/assets/images/schedules-set-name.jpg "Attribution d'un nom à l'événement") 
    
Dorénavant HiveOS s'occupera d'envoyer la commande "shutdown" à l'horaire fixé. Vous n'avez plus à vous en occuper.


##### Si vous n'avez pas HiveOS

Dans le cas où votre ordinateur sert à autre chose qu'au minage, vous n'avez pas HiveOS d'installé et allez donc devoir créer manuellement l'événement de mise hors tension de l'ordi.

1. Vous allez directement ajouter une planification pour cron, en passant par son éditeur qui n'est autre que crontab. Cette fois on utilise bien `sudo` car la commande `shutdown` requiert les droits administrateur :

    ```
    sudo crontab -e
    ```
    
    On ajoute alors `0 20 * * * /sbin/shutdown -h now` et on sauvegarde.
    
    L'ordinateur s'éteindra tous les jours (cf * * *) à 20 h tapantes en lançant la commande `/sbin/shutdown - h now`. On ne spécifie pas que `root` doit lancer cette commande, puisqu'on édite déjà le CRON du super utilisateur.
    
    On ne créé pas de script car la commande est simple.
    
Observons maintenant si on obtient le résultat escompté :

<iframe width="1138" height="711" src="https://www.youtube.com/embed/PSUYy6rlglg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
#### 💡Bonus : déboggage de CRON💡

Pour vérifier que votre commande CRON se lance bien, vous pouvez utiliser `sudo grep cron /var/log/syslog`

Si jamais vous voyez des erreurs avec MTA, installez postfix, puis mailutils et lancer la commande `mail` ou `sudo mail` pour lire les messages systèmes, notamment ceux de CRON. 


#### Conclusion

Cet article nous a permis de voir comment programmer son ordinateur, par exemple pour qu'il mine automatiquement à certains horaires afin que sa consommation électrique soit couverte par la production des panneaux solaires. Évidemment cette méthode fonctionne mieux en été qu'en hiver, et elle n'est pas infaillible puisqu'on n'est pas à l’abri d'un temps couvert! Mais c'est déjà bien utile si sa plate-forme de minage est reléguée dans le garage et qu'on l'oublie facilement! 
À l'été 2022, cette méthode a très bien fonctionné car le soleil était au rendez-vous pratiquement tous les jours.

Pour améliorer la méthode, on peut envisager de ne déclencher le minage que lorsque la production solaire est suffisante. Mais ça n'est pas pour tout de suite, ce sera l'objet d'un futur article ✏️! 

