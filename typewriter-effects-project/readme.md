# Notes

## using data attributes

> data-wait = 3000,
> means wait for 3 sec/3000 ms b4 writing the text,

> data-words='["Developer", "Designer"]'

here v pass an array of words to the data attribute.

```html
<h1>
  Jissmon Jose The
  <span
    class="txt-type"
    data-wait="3000"
    data-words='["Developer", "Designer"]'
  ></span>
</h1>
```

- so here the idea is to show words from data-words attribute with in span of 3sec.
  along with the h1 value.

  eg: Jissmon Jose The Developer, Jissmon Jose The Designer.

---
