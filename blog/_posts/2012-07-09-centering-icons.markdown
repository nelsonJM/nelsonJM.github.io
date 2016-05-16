---
layout: post
title: Centering icons
categories: Development
tags: CSS, Tips
excerpt: <p>Recently, someone asked me how to display a group of icons on one line, rather than the default vertical list. My answer was based on a general idea of how to do it and so it probably wasn't very helpful. This inspired me to figure out the solution and add a little extra to it. Below is the solution that I came up with. It places a group of icons on one line and centers each icon within it's list-item.</p>
---
<p>Recently, someone asked me how to display a group of icons on one line, rather than the default vertical list. My answer was based on a general idea of how to do it and so it probably wasn't very helpful. This inspired me to figure out the solution and add a little extra to it. Below is the solution that I came up with. It places a group of icons on one line and centers each icon within it's list-item.</p>
<p><a href="http://www.joshmarknelson.com/examples/center-icons">See the demo</a></p>
<p>First, the CSS</p>
<p>[prettify class="css"]<br />
      nav {<br />
         width: 360px;<br />
         margin: 90px auto;<br />
         background: #e3e3e3;<br />
         overflow: hidden;<br />
         -webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,.5);<br />
         box-shadow: 0 1px 5px 0 rgba(0,0,0,.5);<br />
      }<br />
      nav ul li {<br />
          float: left;<br />
          margin-right: 5px;<br />
          margin-left: 5px;<br />
          list-style: none;<br />
          width: 60px;<br />
          height: 60px;<br />
          line-height: 60px;<br />
          text-align: center;<br />
       }<br />
       nav ul li:first-child {<br />
          margin-left: 10px;<br />
       }<br />
       nav ul li:last-child {<br />
          margin-right: 10px;<br />
       }<br />
[/prettify]</p>
<p>Then, the HTML</p>
<p>[prettify class="html"]</p>
<nav>
<ul>
<li><img src="img/Bag1.png" /></li>
<li><img src="img/Book.png" /></li>
<li><img src="img/Cloud-Down.png" /></li>
<li><img src="img/Coffee.png" /></li>
<li><img src="img/Comment.png" /></li>
</ul>
</nav>
<p>[/prettify]</p>
