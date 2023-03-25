---
layout: post
title:  "Clonage de voix avec Toucan"
author: anatole
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

#### Matériel requis

#### Conclusion

