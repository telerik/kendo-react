---
title: AnimationInterface
description: "Learn how to build custom functionality when working with the React Animations by Kendo UI with the help of the AnimationInterface."
api_reference: true
type: inner_api
slug: api_animation_animationinterface
---

# AnimationInterface
Inherited by all animations. Represents the properties you can set to an Animation.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### appear?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Defines whether a transition should happen on the first mount.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### componentChildClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the CSS class names that are set to each of the animated children elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### componentChildStyle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles that are set to each of the animated children elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether to animate the entering (showing) element ([see example](https://www.telerik.com/kendo-react-ui/components/animation/disabled-state)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### exit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether to animate a leaving (disappearing) element ([see example](https://www.telerik.com/kendo-react-ui/components/animation/disabled-state)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### mountOnEnter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Specifies if the Animation uses lazy-mounting on the first `in={true}`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when you add a component to an existing Animation component and the Animation has not started yet ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-adding-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEntered?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when you add a component to an existing Animation component and the Animation is now finished ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-adding-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEntering?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when you add a component to an existing Animation component and the Animation is now happening ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-adding-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExit?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event called after the Animation has reached its exit state ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-removing-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExited?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event called after the Animation has reached its exited state ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-removing-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExiting?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event called after the Animation has reached its exiting state ([more information and example](https://www.telerik.com/kendo-react-ui/components/animation/hooks#toc-removing-child-elements)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitionEnterDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


300


</code>


</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the entering (`animation in`) Animation ([see example](https://www.telerik.com/kendo-react-ui/components/animation/duration)). After the time runs out, the Animation is terminated.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitionExitDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


300


</code>


</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the exiting (`animation out`) Animation ([see example](https://www.telerik.com/kendo-react-ui/components/animation/duration)). After the time runs out, the Animation is terminated.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### unmountOnExit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Specifies if the Animation unmounts after it reaches its exited state.





</td>
</tr>
</tbody>
</table>



