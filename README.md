# Attributions and Reference Materials:

1. API security methodology provided by Alexandro Perez in https://alexandroperez.github.io/mws-walkthrough/?1.4.mapbox-api-key

2. Relative positioning and sizing methodology: https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/

3. Flexbox methodology used: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

4. Rules for positioning adjustments: https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/

5. Reference for CSS media query rules: https://www.w3schools.com/cssref/css3_pr_mediaquery.asp

6. Reference for resectioning map element to header: https://www.youtube.com/watch?v=uxmB8MlO3m8&t=0s&list=LLanbTOqGzRq5Bdur3FjWlpA&index=3

7. Reference for formating of skip links: https://classroom.udacity.com/nanodegrees/nd024/parts/641b7f6f-d7cb-4862-a3b2-28c6ee21e596/modules/a33d818c-c5ce-40be-903d-08fa3c8a13a3/lessons/3f4a8855-31f7-412e-8ad2-6f4e243f2ef8/concepts/79590516900923

8. Reference for declaring a service worker via a link tag: https://philna.sh/blog/2016/08/17/install-a-service-worker-declaratively/

9. Reference for including the error code in a failed registration console log: https://www.youtube.com/watch?v=ksXwaWHCW6k  at minute 11:11

10. BUGFIX: Get rid of favicon error: https://stackoverflow.com/questions/31075893/im-getting-favicon-ico-error

11. ARIA label rules: https://cccaccessibility.org/web/web-developer-tutorials/aria-labelledby-vs-aria-describedby-vs-aria-label

12. BUGFIX: Corrected syntax of service worker fetch event: https://developers.google.com/web/fundamentals/primers/service-workers/

13. Use of HTML lang attribute: https://www.w3.org/International/questions/qa-html-language-declarations

14. Adding alt atribute to images via JavaScript: https://www.w3schools.com/jsref/prop_img_alt.asp

15. BUGFIX: Fix for body overflow issue in restaurant.html: https://css-tricks.com/findingfixing-unintended-body-overflow/

16. BUGFIX: Fix for readability issue in restaurant.html reviews container: https://css-tricks.com/almanac/properties/f/flex-direction/

17. Reference for tabindex attribute added to HTML files: https://www.w3schools.com/tags/att_tabindex.asp

18. BUGFIX: Service worker not calling from restaurant.html page - service worker call added

19. Reference for adding ARIA parameters to breadcrumb and map elements in restaurant.html page: https://a11yproject.com/posts/getting-started-aria/




# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



