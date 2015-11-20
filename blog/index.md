---
layout: page
title: Abhishek Jain's Blog
headerText: Blog
excerpt: "An archive of blog posts by Abhishek Jain sorted by date."
search_omit: true
permalink: /blog/
---

<ul class="post-list">
{% for post in site.categories.blog %} 
        <li class="post-info">
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        </li>
{% endfor %}
</ul>
