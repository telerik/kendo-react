---
title: Modify the Date Format in the Grid
description: An example on how to format ISO string dates in the KendoReact Grid.
type: how-to
page_title: Change the Date Format - KendoReact Grid
slug: grid-date-format
tags: grid, kendoreact, dates, format
ticketid: 1402874
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2.9.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I change an ISO date string which I have in my KendoReact Grid? Setting a `format` property does not affect the current date format.

## Solution

The KendoReact Grid formats only valid JavaScript `date` objects. To achieve the desired scenario, parse the ISO strings to JavaScript dates as soon as they are received from the server and work with the parsed data. This approach will also ensure that even if the filtering is done on the client, it will work.
