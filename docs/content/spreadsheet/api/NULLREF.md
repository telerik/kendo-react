---
title: NULLREF
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the NULLREF."
api_reference: true
type: inner_api
slug: api_spreadsheet_nullref
---

# NULLREF
An object (a singleton) and not a class.
It represents the NULL reference, and could occur, for example, when you intersect two disjoint ranges, or when a formula depends on a cell that has been deleted.
For example, when you put in some cell `=test(B5)` and then right-click on column `B` and delete it.
To test when something is the `NULL` reference, just do `x === NULLREF`.
