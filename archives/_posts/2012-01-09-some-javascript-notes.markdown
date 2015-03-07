---
layout: post
status: publish
published: true
title: Some JavaScript notes
author:
  display_name: jmnelson
  login: jmnelson
  email: jmarknel@gmail.com
  url: ''
author_login: jmnelson
author_email: jmarknel@gmail.com
wordpress_id: 272
wordpress_url: http://www.joshmarknelson.com/?p=272
date: !binary |-
  MjAxMi0wMS0wOSAwNDo1NzowMSAtMDYwMA==
date_gmt: !binary |-
  MjAxMi0wMS0wOSAwNDo1NzowMSAtMDYwMA==
categories:
- Development
tags: []
comments: []
---
<p>Watched Jeff Way screencast 'JS from Null' series, chapter 3. Here's a note that I jotted down.</p>
<p>You create a string:<br />
even though it's a string, it has methods available to it.<br />
Here's what happens (Jeff Way breaks it down):</p>
<ol>
<li>it will be converted into the string object</li>
<li>the method of the string object will be called</li>
<li>the value will be returned</li>
<li>and then the object will be deleted, only leaving the string</li>
</ol>
