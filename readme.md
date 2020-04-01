## Personal website

I made this as an example of my knowledge of Next.js as all the other examples I have are not public. In order
to make this useful, I decided to make this example explain a bit about me. This is why I used Next.js instead
of ```create-react-app``` which would have been a bit more straightforward for an app of this size.

###Notes
* I wanted to use API routes with this project but I had some trouble running them on ```now```. They did get
deployed but I was getting some other problems so to simplify the whole thing I just pull the JSON directly
from my host on GitHub. I didnt really need to transform the data anyway so API routes would have just have been
a middle man for the data in the end.

* I also considered AMP for this but I only have 1 image and it is a ``webp`` so it is already pretty optimised and
I found whenever I had AMP enabled it would stop my jobs list rendering.

* I did this project over a weekend so, although I tried to make this as true to my professional development process
as possible, I was a bit strapped for time so there may be a few *dirty hacks*