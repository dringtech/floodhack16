---
layout: page
permalink: /outputs/timeline/
categories: [output]
title: Timeline of a flood recovery
summary:
  TBC
---
<ul>
{% for timeslice in site.data.recovery_map %}
  <li>
    {{ timeslice.title }}
    <ul>
      {% for topic in timeslice.topics %}
        <li>{{topic.title}}</li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
