# CareerFoundry

This simple landing page uses the Career Foundry mock-up API to get all offered courses on page load.
When selecting one of the courses, the API provides more detailed info regarding this particular course. 
Prices are shown in local currency, depending on the geolocation of the user (translated from IP-address thanks to the ipdata API).

Improvement possibilities:
1) We need a responsive frontend design, right now the landing page is optimized for Lenovo Yoga Slim 7 screen (other laptops work as well). We need media queries or we could use the bootstrap grid system.
2) We need an error handling in the javascript file, in case the geolocation can't be detected (for example when the user has an active add blocker as chrome extension). For this purpose, we might meed asynchronous requests.
3) We need testing, particulary to check API responses, for example by using the cypress tool for automated browser testing.
4) We need refactoring in the javascript file by organizing the API-calls in methods (at the moment the code doesn't follow the DRY-principles).
5) The ajax methods are a bit outdated, it would be better to use a javascript framework like React, to write javascript inside of the HTML-file.

Remarks:
1) I used the ipdata API instead of the ipstack API suggested in the challenge, since I already used it in previous projects. 
