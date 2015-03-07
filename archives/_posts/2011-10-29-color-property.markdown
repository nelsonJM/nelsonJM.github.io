---
layout: post
status: publish
published: true
title: Color property
author:
  display_name: jmnelson
  login: jmnelson
  email: jmarknel@gmail.com
  url: ''
author_login: jmnelson
author_email: jmarknel@gmail.com
wordpress_id: 234
wordpress_url: http://www.joshmarknelson.com/?p=234
date: !binary |-
  MjAxMS0xMC0yOSAxNDozMzo1MSAtMDUwMA==
date_gmt: !binary |-
  MjAxMS0xMC0yOSAxNDozMzo1MSAtMDUwMA==
categories:
- Development
tags:
- CSS
comments: []
---
<p>This morning I learned about the color property, specifically how it is used to change the background color of an element.  I know this is easy stuff, but I wanted to post it just for the sake of documentation.  Using the color property in this way is as simple as:</p>
<p>#someElement {</p>
<p>background-color: gray;</p>
<p>}</p>
<p>Gray is called a color keyword.  Keywords are ok to use as you are testing your design, but because their support differs among browsers, it's best to stick with numeric or functional notation.</p>
<p>&nbsp;</p>
<pre>#someElement {
   background-color: rgb(233,0,156); 
}</pre>
<p>Here the color value is written with decimal functional notation.  This is a function with the values 233, 0, and 156 being passed to it as arguments which modify the function's behavior.  The order of the arguments is red(233), green(0), and blue(156).  To get 100% red, we would need to change the first value to 255.  To get 100% green we would need to change the second value from 0 to 255 too, and so on.</p>
<pre></pre>
