# Project 2 : Housing Board Development Resales

In Singapore, the government aims to provide affordable housing for her residents and the tasks are handled by the Housing & Development Board(HDB) who is Singapore's public housing authority. Singapore's public housing has completed more than 1 million flats since 1960 and is housing over 80% of the population. Resales flat are HDB flats currently owned by someone else. They have already been lived in for at least the Minimum Occupation Period, which is typically five years. 

I created this website to let user find out about past resales HDB flats transactions. The user will usually be interested to find out resales flats depending on location, highest price, lowest price, size of the flat, flat storey level and remaining lease (a new flat typically has a 99-year lease before returned to the state). This website can filter them to user interests and generate past resales transactions that meet his/her criteria. Moreover, the user is able to show the location of the results on the map. This gives user a bird-eye view of the price with respect to its location with its vicinity to  public transports systems, schools and amenities (e.g. sports, health, malls, churches etc.).
Therefore, user can roughly estimate or expect the hdb resales prices for locations and flat type that they are interested in quickly. This help in their budgeting concerns, choice of location and negotation perspectives.
 
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

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z

#### Header Bar
- About this - allows users to understand the goal of this website, guide to use this website and the data source.

#### Main Buttons
-Display Filters - allow user to show out the filters
-Display table in descending price - allow user to display results in table in descending price.
-Display table in ascending price - allow user to display results in table in ascending price

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

