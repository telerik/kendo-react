---
title: BottomNavigationPositionMode
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BottomNavigationPositionMode."
api_reference: true
type: inner_api
slug: api_layout_bottomnavigationpositionmode
---

# BottomNavigationPositionMode
Specifies the BottomNavigation position and behavior when the page is scrolled
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/positioning#toc-position-mode)).

The possible values are:
* `fixed`(Default) &mdash; The BottomNavigation always stays at the bottom of the viewport, regardless of the page scroll position.
* `sticky` &mdash; Positions the BottomNavigation based on the user's scroll position. A sticky element toggles between
static and fixed CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property, depending on the scroll position.
It is positioned static until a given offset position is met in the viewport - then it "sticks" in place like `fixed` positionMode.

`type` BottomNavigationPositionMode = "sticky" | "fixed";
