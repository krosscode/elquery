# Elquery
Element based media queries, for easier dynamic elements! Very light, and super simple to use.

## Example Usage

**HTML**

The `data-elquery` attribute is where you define the breakpoints of the element. The breakpoints are comma-seperated. For example: `416,512,576`.

Once the element is more than or equal to a breakpoint width, the breakpoint is added as a class, so you can easily style it in CSS. For example 416 would be added to the element as `.elquery-416`.

You can optionally give a breakpoint an identifier by prefixing it with the name and a colon. For example: `md:416` will add the `.elquery-md` class once the element has a width of 416 or more. If you do not define a breakpoint identifier. This might be preferable so you don't have to replace every instance of the number in your code, if you change a breakpoint on the element.
```html
<div class="contact-card" data-elquery="md:416,lg:512,xl:576">
    <div class="avatar"></div>

    <div class="info">
        <p class="name">Wallace Smith</p>
        <p class="job-title">Lead Developer</p>

        <p class="email"><strong>E-mail:</strong> wsmith@example.com</p>
    </div>
</div>
```

**JS**

All you need to do is import elquery and call the `.init()` method.

```js
import elquery from 'elquery';

// Initialize elquery
elquery.init();
```

You can initialize elquery at any point, but I recommend initializing it as early as you can, so the elements based media queries work right away.

**CSS**

Here is some example CSS for the HTML above.

```css
// md styling

.contact-card.elquery-md {
    text-align: left;
    flex-direction: row;
}

.contact-card.elquery-md .avatar {
    margin-bottom: 0;
    margin-right: 8rem;
}



// lg styling

.contact-card.elquery-lg .avatar {
    width: 32rem;
    height: 32rem;
}



// xl styling

.contact-card.elquery-xl {
    color: white;
    background-color: rgb(58, 133, 184);
}

.contact-card.elquery-xl .avatar {
    width: 48rem;
    height: 48rem;
}

.contact-card.elquery-xl .name {
    font-size: 8rem;
}

.contact-card.elquery-xl .job-title {
    font-size: 6rem;
}
```
