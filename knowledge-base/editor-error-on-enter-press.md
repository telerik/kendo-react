---
title: Editor Raises an Error on Enter Press
description: Learn how to troubleshoot when the Kendoreact Editor raises an error on Enter press.
type: how-to
page_title: Editor Raises an Error on Enter Press - KendoReact Editor
slug: editor-error-on-enter-press
tags: editor, kendoreact, error, enter
ticketid: 9999999
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>4.5.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

When I press Enter in the KendoReact Editor this errors occurs `"RangeError: Can not convert <> to a Fragment (looks like multiple versions of prosemirror-model were loaded)".`

## Solution

Currently, it happens with the KendoReact Editor examples when opened in the StackBlitz, CodeSandBox or an app where yarn has been used.

If you open an example in StackBlitz, download it and run it locally, you will see that it works as expected. It also works as expected in the [KendoReact website](https://www.telerik.com/kendo-react-ui/components/editor/paste/). The error happens when different versions of [ProseMirror](https://prosemirror.net/) packages are loaded.

To prevent this error in your app:

- If you use yarn, define all the ProseMirror packages versions in the [resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) section in your app's package.json file. The correct ProseMirror packages versions are listed in the package.json file of the `@progress/kendo-editor-common` package which a dependency of the editor and located in the editor's node_modules folder (`node_modules\@progress\kendo-editor-common\package.json`).
- If you have customizations and you have installed additionally the `@progress/kendo-editor-common` package, make sure that the installed version is the same as the version listed in the editor's dependencies (`node_modules\@progress\kendo-react-editor\package.json`).

If you do not need to use the ProseMirror packages to customize or extend the editor's functionality and do not use yarn, you will not get such an error.
