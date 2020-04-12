# Project 2 : Housing Board Development Resales

In Singapore, the government aims to provide affordable housing for her residents and the tasks are handled by the Housing & Development Board(HDB) who is Singapore's public housing authority. Singapore's public housing has completed more than 1 million flats since 1960 and is housing over 80% of the population. Resales flat are HDB flats currently owned by someone else. They have already been lived in for at least the Minimum Occupation Period, which is typically five years. 

I created this website to let user find out about past resales HDB flats transactions. The user will usually be interested to find out resales flats depending on location, highest price, lowest price, size of the flat, flat storey level and remaining lease (a new flat typically has a 99-year lease before returned to the state). This website can filter them to user interests and generate past resales transactions that meet his/her criteria. Moreover, the user is able to show the location of the results on the map. This gives user a bird-eye view of the price with respect to its location with its vicinity to  public transports systems, schools and amenities (e.g. sports, health, malls, churches etc.).
Therefore, user can roughly estimate or expect the hdb resales prices for locations and flat type that they are interested in quickly. This help in their budgeting concerns, choice of location and negotation perspectives.

[Link to my website!](https://ksngo.github.io/Project2/)
 
## UX

This website is for anyone who is interested to find out more about the past resales price transactions in Singapore. They could be a person with interests to buy hdb resales flat, a person who is property agent, a person who is interested to sell his/her own hdb resales flat after the minimum occupancy period or a person interested to know where the highest or lowest resales flat are in Singapore.

- As an interested resales HDB buyer, I want to find out past resales HDB price in a town, so that I can have an expectations of price range in the town.
*User can filter by town and check out the resale price transactions in descending price order.

- As an interested resales HDB buyer, I  am interested in only above 10 storeys level, 4-rooms(1-living room + 3 bed-rooms) model in Singapore, so that I can start zooming on prospective locations/venues to begin my resales HDB searches in the market.
* User can filter by storey levels, room-type and select all towns to return all transaction results in ascending price or descending price. User can navigate through the generated results table and see if any location, price catch their attention and show quickly its location on map.

- As an interested resales HDB buyer, I want to compare the past hdb resales transactions in a town and compare their prices in relation to their proximity to the train station.
*User can filter by town and filter more if any specific requirements and generate the results and plot to map. The marker on map contains **all information of the result** so that user does not need to refer to table again to make out e.g. the price. From the map, by clicking on the markers, user can start comparing if proximity to train station has a remarkable calling price.

- As a property agent looking to sell a resale flat, I want to show to customer the resales prices around its venue, so that it can either show them that the price is comparable with any past resales transactions or explain to them if price is above/lower markets expectations. 
* User can filter by town or street name and display all transaction results.

- As a interested resale HDB seller, I am interested how much value my flat could yield in terms of location, flat-type, room-type and the significance of location and storey range can affect the price, so that I can have knowledge of the rough value of my flat.
* User can filter by street, flat-type, room type , location of my flat, particular storey range (e.g. 1-3) and generate past resales transaction results to know the price evaluated of flats around his/her area. To compare significance of storey range to price, user can reset and generate results with different storey range(e.g.13-15).


## Features

### Existing Features

#### Header Bar
- About this <li> tag - On hover over, shows hidden <div> tag on information for users to understand the goal of this website, guide to use this website and the data source.

#### Main Buttons
-Display Filters <button> tag - allow user to show out the filters below it. Button name changed to 'Hide filters'. When clicked again, the filters will become hidden from view.
-Results in descending price <button> tag - allow user to display results in table in descending price. After pressing once, the results will display in table below it. The neighbour button 'Results in ascending price' will also be disabled. The button's name will change to  'Next 50 results' for user to click again to show the next 50 results on table. Once results are exhausted, the button hover-over cursor effect will change from pointer to default and the hover-effect to red will stop too.
-Results in ascending price <button> tag - allow user to display results in table in ascending price. Similar user interactive effects with 'Results in descending price' button.
-Rest <button> tag - allow user to remove existing shown table, remove markers on the map and zoom map to default zoom and default latitude/longtitude.
-Number of Results <div> tag - allow user to know how many results are yielded. This tag is normally hidden till 'Results in ascending/descending price' button is clicked.

#### Filters Buttons
-Filter by Town <button> tag -display to user town checkboxes.
    -multiple towns <input> tags checkbox -allow user to checked on any towns for selection. Select all checkbox will checked all towns at one go.
-Filter by Street name <button> tag -display to user street names dropdowns.
    -multiple street names <options><select> tags - allow user to choose one street name of choice.
-Show extra filters <button> tag - slide in from right to show the remaining filter options. Button name changes to 'hide extra filters'. When clicked again, the extra filters display will slide right to hidden from view.
    -year <input> tag number - allow user to insert years.
    -room <input> tag checkbox - allow user to select room types.
    -storey <input> tag checkbox -allow user to select storey range.
    -area <input> tag number -allow user to insert area.
    -flat model <input> tag checkbox - allow user to select model.

#### Return to top
-upward chevron <a> tag - allow user to return to top of page.

#### Results table
-table <table> tag - allow user to read the results returned from their choices of filtering.
-last column of table <input> tag checkbox - allow user to check and generate marker for respective result onto map. For convenience, a checkbox on the header can be checked to generate the 50 markers to map. The marker contain popout information that show each respective table row's data.

#### Mobile Responsive
- The main buttons will rearranged to vertical column for media device less than 800px.
- The display of extra filters will also move to below "filter by town/street" estate space for media device less than 800px.
- The table will change orientation of its text to vertical-lr for media device less than 1000px.


### Features Left to Implement
- **Disallow user from adding more filters once he/she starts generating results and prompts him/her to click 'reset' if he/she wants to start a new set of filters.**
- When user clicked on the checkbox in table to show a single marker on the map, move webpage to centralise on this marker. May need to research on leaflet documentation to implement.
- Do not allow the map to scroll past other area beyond Singapore. Need to research on leaflet documentation to implement.
- The csv file is available as early to 1990. As the crossfilter dimension filtering will crash for large file sizes, I will only limit my csv file to 6.5mb which spans between 2017 to 2020. Can explore how to remedy by backend methods and if there are more unforeseen circumstances occuring for handling larger csv files.
-**It will be good to add pop-out information over the many choices of flat models because personally I don't understand some of them myself.**

## Technologies Used

- [JQuery](https://code.jquery.com/jquery-3.4.1.min.js)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Axios](https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js)
    - The project uses **Axios** to handling promise-based request and response.
- [Crossfilter](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js)
    - The project uses **crossfilter** to do multidimensional filtering and aggregation of tabular data.
- [csvtojson](https://cdn.jsdelivr.net/npm/csvtojson@2.0.10/browser/csvtojson.min.js)
    - The project uses **csvtojson** to convert csv to json.
- [Leaflet](https://leafletjs.com/)
    - The project uses **Leaflet** for interactive maps.
- [Leaflet Control OSM Gencoder](https://github.com/k4r573n/leaflet-control-osm-geocoder)
    - The project uses **leaflet control osm geocoder** to provide a search box on map to input address and return whereabout on map.
- [Nominatim API](https://nominatim.org/release-docs/latest/api/Search/)
    - The project uses **Nominatim API** to look up location longtitude and latitude from a textual description.
- [data.gov.sg](https://data.gov.sg/dataset/resale-flat-prices)
    - The project uses **data.gov.sg** for csv files.
- [Fontawesome 4.7](https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)
    - The project uses **FontAwesome 4.7** for some fonts used in webpage.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** for styling font family in webpage.
- [Pure CSS Checkbox by Stas Melnikov](https://codepen.io/melnik909/pen/YjGZqQ)
    - The project refers to Stas Melnikov's work as a guide, methods and styles to create extra filters section's checkboxes.
- [Back to Top button with CSS & Jquery](https://www.templatemonster.com/blog/back-to-top-button-css-jquery/)
    - The project refers to article by Matthew Cain as a guide to return to top button.
- [Check if JS object is empty](https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty)
    - The project copies the function method to check if javascript object is empty from kyleross article.
- [Checkbox Trickery](https://codepen.io/lonekorean/pen/RPZZPe/)
    - The project refers to Will Boyd's work as a guide, methods and styles to create my town's checkboxes.

    
## Testing

1. Manual Testing: 
    1. The Display Filter button when clicked shows content.
    2. The Hide Filter button when clicked hides content.
    3.  The Filter by Town button and Filter by Street name button are able to show the options respectively and I can use the form functions.
    4. The show extra filters button and hide extra filters button allow the extra content to slide in and out.
    5. The extra filter content selections are able to be checked or input with values.
    6. I have gone through each types of filter options (e.g. town, street, year, room, storey, floor area, flat model) and generate results by clicking 'Results in descending price' ,'Next 50 results', 'Results in ascending price' and 'Reset' buttons. The results returned to table are as what I have chosen and arranged in price order corresponding to the 'Results' button pressed.  I have checked the checkboxes in the table to plot markers to the map and the markers appear fine. The pop-out information is able to carry the respective table's row result and show upon within the pop-out box. And, the markers shows on top of the correct block and street name. 

2. Different browsers and screen sizes:
    1. The map is unable to render itself on microsoft Edge and firefox. It is able to show map on google Chrome.
    2.  The website is able to transform its content with no major issue to width of 300px and above. I have discussed the main changes for mobile responsiveness in the above section on Mobile Responsive.

3. Bugs/problems:
    1. If the results call for the similar block and street name, the marker will lay on top each other depending which is called last. This also spells for future feature to address this by checking for similar block and street name results amongst the 50 results, and group the info and make the info availble within a scrollable pop-out box of the marker.
    2. The nominatim API may return a general latitude and longtitude for street name for ambiguous cases. For this example, I shall use blk 601 and street name Ang Mo Kio Ave 5. As shown in image, blk 601 has also adjacent Yio Chu Kang Road near it. **It's something pending for me to look into.**

    ![Image](myfile.jpg)
    
 
## Deployment

My website is hosted with github.

## Credits

Credits to Code Institute for this readme-template.
Credits to the creators for the technologies or code references mentioned above.

### Content/Media

The geocoder.png file is obtained from the geocoder leaflet plugin link. The resales data source is from data.gov.sg. The remaining content is original unless the technologies used mentioned above. 



