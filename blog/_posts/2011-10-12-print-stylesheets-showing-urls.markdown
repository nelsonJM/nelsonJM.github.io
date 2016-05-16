---
layout: post
title: Print Stylesheets Showing URLs
categories: Code
tags: CSS
excerpt: <p>I learned a neat trick today related to <strong>print stylesheets</strong>. When a user prints out an airplane ticket, insurance cards, an article etc. from a website, the print out should receive its own stylesheet that removes unnecessary elements...</p>
---
<p>I learned a neat trick today related to <strong>print stylesheets</strong>.  When a user prints out an airplane ticket, insurance cards, an article etc. from a website, the print out should receive its own stylesheet that removes unnecessary elements such as the site navigation, sidebar, and anything else that is irrelevant to the print version.  In addition to removing elements, there are some things you can include to <strong>enhance the user experience</strong>.  One of those things is the URL of a link that may be relevant to the content that the user is interested in.</p>
<p>Here's an example of what it would look like:</p>
<p>Bear population in the U.S.A</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat tellus, dignissim quis ultricies id, ultricies eget lorem. Nam adipiscing sem at nisi vehicula in venenatis magna congue. Aliquam erat volutpat. Vestibulum eu neque id nulla vulputate sodales vitae et est. Ut vitae tristique dui. Suspendisse ultrices libero et lacus auctor vel imperdiet diam gravida. Aliquam iaculis, nisi nec malesuada venenatis, lacus nibh feugiat nunc, at malesuada libero magna id nisi. Praesent non tortor sed orci facilisis lobortis. Phasellus tincidunt viverra facilisis. Maecenas eu felis vitae augue sollicitudin tincidunt. Vivamus ullamcorper vehicula lorem, a vehicula mi interdum ac.</p>
<p><a href="http://www.defenders.org/wildlife_and_habitat/wildlife/black_bear.php">More great bear population info</a></p>
<p>http://www.defenders.org/wildlife_and_habitat/wildlife/black_bear.php</p>
<p>&nbsp;</p>
<p>The CSS that grabs that URL looks like this:</p>
<pre>#content .post a:after {
   content: " (" attr(href) ")";
}</pre>
<p>&nbsp;</p>
<p>This grabs the href attribute of the anchor tags and prints it just after the links.</p>
<p>&nbsp;</p>
<p>More information about pseudo-class <a href="https://developer.mozilla.org/en/CSS/:after">:after</a> can be found on <a href="https://developer.mozilla.org/en-US/">Mozilla Developer Network.</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
