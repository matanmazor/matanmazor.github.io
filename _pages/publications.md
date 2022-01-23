---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script>
	  $(document).ready(function(){
             console.log('a')
         });
         $(document).ready(function(){
             $('#show').click(function() {
               $('#menu').toggle("slide");
             });
         });
      </script>
   </head>
   <body>
      <div id="show">Click here to show or hide the DIV element.</div>
      <div id="menu" style="display: none;">
         <ol>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JQuery</li>
         </ol>
      </div>
   </body>

<sup>*</sup> Equal authorship