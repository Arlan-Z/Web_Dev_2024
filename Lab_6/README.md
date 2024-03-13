# Album
>Note: If jsonplaceholder links are not available, please, use any VPN in our traffic.

In this laboratory work you have to try to use the Route and Http modules in your Angular project.  

1. URL: /home - static markup page
1. URL: /about - static markup page
1. You should have CRUD (create / read / update / delete) operations for albums.
1. URL: /albums - a list of albums from this url. Each item should:
have delete button with implementation
be clickable, after selecting one of them, a detail page must be opened.
1. URL: /albums/:id - detail page of selected item (example). This page should contain:
information about selected item
editable input for changing album title and “Save” button
“Return back” button
“Photos” link which will redirect to photos page of selected album
1. URL: /albums/:id/photos - photos page of selected album (example). This page will render all images in any format and will have a “Return back” button.
1. Root url: “”, must be redirect to: /home 
1. Albums and photos must be fetched using HTTP module and must be passed to components through albums.service.ts and must be Observable
1.Your components:  
Home Component  
About Component  
Albums Component  
Album Detail Component  
Album Photos Component  

>Useful links  
[Router Module](https://angular.io/guide/router)  
[Observables](https://angular.io/guide/observables)    
[Http Client Module](https://angular.io/guide/understanding-communicating-with-http)  
[Angular Services](https://angular.io/tutorial/toh-pt4)
  
GOOD LUCK :)
