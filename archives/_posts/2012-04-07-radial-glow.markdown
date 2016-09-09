---
layout: post
title: Radial glow
categories: Development
tags: CSS3
excerpt: <p>Today I watched a tutorial on styling forms and came away with some knowledge on how to create a glow effect using CSS3 gradients. Here's a radial glow applied to a nice seamless texture of diagonal lines.</p><p><a href="/assets/uploads/2012/04/Radial-Glow-Practice1.png"><img class="alignnone size-medium wp-image-391" title="Radial Glow Practice" src="/assets/uploads/2012/04/Radial-Glow-Practice1-300x127.png" alt="Radial glow effect using CSS." width="300" height="127" /></a></p>
---
<p>Today I watched a tutorial on styling forms and came away with some knowledge on how to create a glow effect using CSS3 gradients. Here's a radial glow applied to a nice seamless texture of diagonal lines.</p>
<p><a href="/assets/uploads/2012/04/Radial-Glow-Practice1.png"><img class="alignnone size-medium wp-image-391" title="Radial Glow Practice" src="/assets/uploads/2012/04/Radial-Glow-Practice1-300x127.png" alt="Radial glow effect using CSS." width="300" height="127" /></a></p>
<p>Code:</p>
<pre>body {
         height: 400px;
         background: url(diagonal-left-2px-space.jpg);
         background: -webkit-radial-gradient(rgba(255, 255, 255, .1) 20%, rgba(255, 255, 255, 0) 65%) no-repeat, url(diagonal-left-2px-space.jpg);
         background: -moz-radial-gradient(rgba(255, 255, 255, .1) 20%, rgba(255, 255, 255, 0) 65%) no-repeat, url(diagonal-left-2px-space.jpg);

         background: -o-radial-gradient(rgba(255, 255, 255, .1) 20%, rgba(255, 255, 255, 0) 65%) no-repeat, url(diagonal-left-2px-space.jpg);

         background: -ms-radial-gradient(rgba(255, 255, 255, .1) 20%, rgba(255, 255, 255, 0) 65%) no-repeat, url(diagonal-left-2px-space.jpg);

         background: radial-gradient(rgba(255, 255, 255, .1) 20%, rgba(255, 255, 255, 0) 65%) no-repeat, url(diagonal-left-2px-space.jpg);

      }</pre>
