---
title: 'When to Use Static Generation vs. Server-side Rendering'
date: '2023-03-17'
---

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can i pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frquently updated data, and the page content changes on every request.

In that case, you can ue **Server-side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you cna skip pre-rendering and use client-side JavaScript to populate data.
