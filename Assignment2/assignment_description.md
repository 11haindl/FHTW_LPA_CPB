# Assignment 2

## Develop a food scanner

Use the following API for gathering information about products: https://world.openfoodfacts.org/api/v0/product/90169069.json

- Ionic in combination with ReactJS
- Create an ionic application with bottom tabs for navigation 
  - Home, Favourite Products, About (2P)
- Home Tab
  - Text input and button for manually searching for products (5P)
  - Second button for opening the barcode scanner (5P)
  - Query data from the given API 
    - Query the data and use the appropriate infrastructure (10P)
    - During retrieval of information from the API: Display a loading indicator so that the user sees the progress or at least that the app is doing something (5P)
  - When the scan is successful
    - Display the result either in a modal dialog or directly beneath the controls
      - Use haptics vibrate to indicate that the scan was successful (5P)
      - At least use one of the images as preview image (2P)
      - Print some useful information about the product  (4P)
      - Add a save as favourite button (4P)
    - When the scan ist unsuccessful 
      - Display a toast with a user friendly error message (10P)
- Favourite Products Tab
  - Display the favourite products in a list (10P)
    - Reuse the design from the result of the home page
- About Tab
  - Create a navigable list with sub pages (via click on a list item navigate to a new page)
    - Developer Information (5P)
    - Scan History
      - Display a list of already scanned products (only the name) (2P)
      - On click on one of the list items open a modal dialog and display all information (10P)
- Save favourites and history to the device storage (5P)
- Use an appropriate state management approach (Redux, MobX, Provider) (5P)
- Run the app either on the simulator or on a real device and take one or two screenshots and attach them to the README.md (7P)
- Add a splash screen that is hidden, when all important data is loaded (3P)


## Checkmark für points

- Home/Favourite/Products/About Tab (2 Punkte)
- Text input and button for manually searching for products (5 Punkte)
- Second button for opening the barcode scanner (5 Punkte)
- Query the data and use the appropriate infrastructure (10 Punkte)
- During retrieval of information from the API: Display a loading indicator so that the user sees the progress or at least that the app is doing something (5 Punkte)
- Use haptics vibrate to indicate that the scan was successful (5 Punkte)
- At least use one of the images as preview image (2 Punkte)
- Print some useful information about the product (4 Punkte)
- Add a save as favourite button (4 Punkte)
- Display a toast with a user friendly error message (10 Punkte)
- Display the favourite products in a list (10 Punkte)
- Developer Information (5 Punkte)
- Display a list of already scanned products (only the name) (2 Punkte)
- On click on one of the list items open a modal dialog and display all information (10 Punkte)
- Save favourites and history to the device storage (5 Punkte)
- Use an appropriate state management approach (Redux/MobX/ Provider) (5 Punkte)
- Run the app either on the simulator or on a real device and take one or two screenshots and attach them to the README.md (7 Punkte)
- Add a splash screen that is hidden when all important data is loaded (3 Punkte)
