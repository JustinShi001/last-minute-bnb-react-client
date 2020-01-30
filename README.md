# Bucket List Client
## An explanation of the what the app does and how it works.
Last minute BnB is a travel booking app that allows users to create apartment listings
as hosts or make reservations to apartments as travelers. Reservations will show
up on apartment page once made. It's based on React front end and Ruby on Rails
backend.

## Links
  [**frontend repo**](https://github.com/JustinShi001/last-minute-bnb-react-client)

  [**backend repo**](https://github.com/JustinShi001/Last-Minute-BnB-backend)

  [**deployed client**](https://justinshi001.github.io/last-minute-bnb-react-client/)

  [**deployed api**](https://quiet-shore-94387.herokuapp.com/)

## List unsolved problems which would be fixed in future iterations.
 - Allow search function for `Apartments`
 - Add/View a map with locations you would like to travel to
 - Block dates if a new reservation is being created with unavailable dates.
## Installation
Last Minute BnB requires React to run.
### Deploy:
```sh
$ npm install
$ npm run deploy
```
### Development:
```sh
$ npm install
$ npm run server
```

## Planning
### User stories:
  * As an un-registered user, I would like to see all the listings

  * As a signed in host, I want to be able to do CRUD functions on my listings.

  * As a signed in traveler, I want to be able to reserve a room on another host's listing using a calendar

  * As a signed in traveler, I want to be able to do CRUD actions on messages to other hosts

  * The listing will have photos, price, availability, location

  * Stretch: integrate google maps API to show locations.

  * Stretch: being able to review users
### Wireframes
![main screen](https://i.imgur.com/NQvSvgF.jpg)
### ERD
![main screen](https://i.imgur.com/c4clVMb.jpg)
## Document your planning, process and problem-solving strategy
### Trello Schedule
Day 1 and Day 2 was mostly spent on project planning, ERD, and reviewing lecture notes. I was stuck on creating the
first resource `Apartment` properly on Day 2 for quiet some time. This issue was solved on Day 3 AM.

Also went back and force between rails and express and ended up with rails. On day 3 things went pretty well with setting
up the backend data schema, and was also able to make good progress on front end CRUD actions for 2nd resource, `reservations`

On day 4, I finished more functions for `reservations` resource on the front end.

Then spent about 4 hours trying to reach some stretch goals (none succeeded), including:
  - uploading image to AWS S3
  - search apartment function

Other features I would like to have:
  - message function once traveler makes an reservation on a host's apartment
  - google maps api.
  - polish up the css.

### Good practices
  - Always checkout a new branch for a new feature
  - Commit often (3-5 times/day at least)

License
----
MIT
