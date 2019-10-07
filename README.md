# Homepagie - A replacement for your browser's default homepage

Demo: https://eds-custom-homepage.netlify.com/

Just copy the link and set as the homepage in your browser. That's it.

Bookmarks are written to local storage, do not sync with any web serice (yet)

Geolocation for the weather service uses the user's IP address,
then calls the 2 following APIs:
weather - http://api.apixu.com/v1/current.json
city by IP - https://ipapi.co/json

Background picture is randomly selected from the picsum API - https://picsum.photos/v2/list

More funcs to be added.

To run locally: 
1. clone repo
2. navigate into the folder and run `yarn`
3. run `yarn start`
