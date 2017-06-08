---
title: "Google Summer of Code 2017 - Welcome!"
layout: post
date: 2017-05-31 13:00
headerImage: false
tag:
- gsoc
- googlesummerofcode
- googlecodein
- kde
- marble
star: true
category: [blog, kde]
author: mnafees
description: The welcome post for my Google Summer of Code 2017 journey
---

# Hello world!

Having been a part of Google Code-in 4 times as a student and once as a mentor, I've been working on open source projects for a while now, 7 years to be exact. While Google Code-in introduced me to the world of open source, it was also the beginning of my journey into programming and computer science. I first participated in Google Code-in when I was 14 years old. And to be honest, I love contributing to open source. Now that I am a University of Waterloo undergrad Computer Science student, I'm really happy that I'm part of the Google Summer of Code 2017 batch of accepted students and I am super excited about it! I will be working on [Marble Maps](https://play.google.com/store/apps/details?id=org.kde.marble.maps&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1), a [KDE](https://kde.org) mobile virtual globe that brings to you the OpenStreetMap to your Android devices.   

## What is Google Summer of Code (GSoC)?

People often ask me what Google Summer of Code (GSoC) is. It's a programme by Google for eligible university students to spend the summer working from home on an open source project. It's a great opportunity to start exploring open source. More information can be found on the [GSoC website](https://summerofcode.withgoogle.com/about/).

## KDE

The KDE® Community is a free software community dedicated to creating an open and user-friendly computing experience, offering an advanced graphical desktop, a wide variety of applications for communication, work, education and entertainment and a platform to easily build new applications upon. We have a strong focus on finding innovative solutions to old and new problems, creating a vibrant atmosphere open for experimentation.

## My GSoC 2017 Project

![Marble][1]

Marble Maps brings the highly detailed OpenStreetMap to your Android devices. It features a crisp, beautiful map with an intuitive user interface. This project is about extending it to support indoor maps (e.g. selecting and showing different levels of a building). The following are the goals to achieve from this project:
* Marble extracts [indoor related OSM tags](https://wiki.openstreetmap.org/wiki/Simple_Indoor_Tagging).
* Floor and connection elements (e.g. room, wall, door, staircase) are shown in the map. Similar to [OpenLevelUp](http://openlevelup.net/?lat=42.80043008955188&lon=-1.6367550194263458&zoom=19&tiles=0&level=0&transcend=1&unrendered=0&buildings=0&photos=0&notes=0).
* User interface to select floor levels and filtering of the map view based on the active floor level.
* Automatic adjustment of the floor level user interface (hide it when there are no indoor map elements in the view,  
   select minimum/maximum floor level automatically).
* Further adjustments to the UI to make the whole experience for the end user a delightful one.
* Extend libmarblewidget with additional classes and objects to be able to support all the above mentioned points.
* Improve indoor rendering.

##### Want to see my progress throughout the programme timeline? Go to my KDE Phabricator [Workboard](https://phabricator.kde.org/project/view/234/) to check it out!

### Let the coding begin!

[1]: https://marble.kde.org/img/marble-logo.png
