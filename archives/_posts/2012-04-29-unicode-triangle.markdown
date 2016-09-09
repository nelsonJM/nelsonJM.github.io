---
layout: post
title: Unicode triangle
categories: Development
tags: CSS3
excerpt: <p>I've been following a tutorial on <a href="http://tutsplus.com/">Tuts+</a> and thought I'd share my progress so far and a tidbit of knowledge I picked up. The tidbit is related to the triangle in the image below (the orange arrow is not part of the design, it's just there to help identify the triangle. Thanks <a href="http://skitch.com/">Skitch</a>!). Here's <a href="http://www.joshmarknelson.com/examples/mobile-form/">what I have so far</a>.</p>
---
<p>I've been following a tutorial on <a href="http://tutsplus.com/">Tuts+</a> and thought I'd share my progress so far and a tidbit of knowledge I picked up. The tidbit is related to the triangle in the image below (the orange arrow is not part of the design, it's just there to help identify the triangle. Thanks <a href="http://skitch.com/">Skitch</a>!). Here's <a href="http://www.joshmarknelson.com/examples/mobile-form/">what I have so far</a>.</p>
<p>&nbsp;</p>
<p><img class="alignleft size-full wp-image-431" title="Tooltip pop-up" src="/assets/uploads/2012/04/Email-Domain-Autocomplete.png" alt="" width="187" height="126" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>The triangle plays a small, but crucial role in the tooltip pop-up. The entire pop-up is created using the following CSS:</p>
<p>Initial styling:</p>
<p>[prettify class="css"]<br />
.suggestion {<br />
line-height: 1.2em;<br />
font-weight: bold;<br />
font-size: 12px;<br />
position: absolute;<br />
top: -18px;<br />
left: 100px;<br />
color: #fff;<br />
border-radius: 5px;<br />
box-shadow: 0 1px 0px #75797a inset, 0 1px 2px #555;<br />
border: 1px solid #000;<br />
padding: 8px 10px; /* must be same as li */<br />
background: #3a3a3f; /* Old browsers */<br />
background: -moz-linear-gradient(top, #3a3e3f 0%, #323637 50%, #292a2c 51%, #212224 100%); /* FF3.6+ */<br />
background: -webkit-gradient(linear, left top, left bottom, color- stop(0%,#3a3e3f), color-stop(50%,#323637), color-stop(51%,#292a2c), color-stop(100%,#212224)); /* Chrome,Safari4+ */<br />
background: -webkit-linear-gradient(top, #3a3e3f 0%,#323637 50%,#292a2c 51%,#212224 100%); /* Chrome10+,Safari5.1+ */<br />
background: -o-linear-gradient(top, #3a3e3f 0%,#323637 50%,#292a2c 51%,#212224 100%); /* Opera 11.10+ */<br />
background: -ms-linear-gradient(top, #3a3e3f 0%,#323637 50%,#292a2c 51%,#212224 100%); /* IE10+ */<br />
background: linear-gradient(top, #3a3e3f 0%,#323637 50%,#292a2c 51%,#212224 100%); /* W3C */<br />
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3e3f', endColorstr='#212224',GradientType=0 ); /* IE6-9 */<br />
}<br />
[/prettify]</p>
<p>Introduce triangle:</p>
<p>[prettify class="html"]<br />
.suggestion:hover { cursor: pointer; }<br />
.suggestion::after {<br />
<span style="color: #f26535;">content: "\25BC";</span><br />
font-size: 12px;<br />
position: absolute;<br />
bottom: -10px;<br />
left: 50%;<br />
color: #000;<br />
}<br />
[/prettify]<br />
As an alternative to using an image, the triangle's escaped unicode is used as the value for the <code>content</code> property. The only thing left to do is position the triangle, which is what the remaining code accomplishes.</p>
<p>&nbsp;</p>
