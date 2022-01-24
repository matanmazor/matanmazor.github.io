---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style> 
input {
  display: none;
  float:left;
}

.description {
  -webkit-transition: height 1s ease;
  max-height: 0;
  overflow: hidden;
}

input:checked + .description {
  max-height: 500px;
}
</style>

<script>
console.log('a')
</script>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<sup>*</sup> Equal authorship