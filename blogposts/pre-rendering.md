---
title: "Two Forms of Pre-rendering"
date: "2023-03-14"
---

Nex.js has two forms of pre-rendering: **Statis Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

**Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
**Server-side Rendering** is the pre-rendering method that generates HTML ON **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a _hybrid_ Next.js app by using Statis Generatio for most pages and using Server-side Rendering for others.
