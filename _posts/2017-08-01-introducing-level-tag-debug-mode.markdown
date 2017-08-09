---
title: "Marble - Introducing the Level Tag Debug Mode"
layout: post
date: 2017-08-01 00:30
headerImage: false
tag:
- gsoc
- googlesummerofcode
- googlecodein
- kde
- marble
star: true
category: kde
author: mnafees
description: New level tag debug mode in Marble
---

# New Feature! 🎉

The OpenStreetMap has support for indoor levels for buildings/areas which can be used for indoor mapping for apps like Marble.
And hence, here it is for you - the debug mode in Marble that can be enabled to look through such indoor levels. This is meant
to just enable the user to look through our Vector OSM map theme for buildings/areas/placemarks for a particular level.

# How does it look!!? 😃

![Indoor level debug mode][1]

# How can I use it?

It's super easy to enable the indoor level tag debug mode. All you need to launch Marble (from the current master) with the
"--debug-levels" flag. Then navigate to anywhere in the OSM Vector map and change the debug level with "Ctrl" + "0" upto "Ctrl" + "9"
key combination. So suppose I want to only see the areas/buildings that have been tagged with indoor level 5, I will press "Ctrl" and "5"
and voila! You can also use the "Ctrl" + "-" (Minus) and "Ctrl" + "+" (Plus) key combinations to change levels up and down respectively.
If you need to exit the indoor level debug mode, just press the "L" key and to re-enable it you can use the same.

<strong>PS: If you are using macOS/OS X then instead of the Ctrl key you need to use the Cmnd ⌘ key</strong>

### Feedback?

Please reach out to me in the comments!

[1]: https://www.mnafees.me/assets/images/indoor-level-debug-mode.gif

