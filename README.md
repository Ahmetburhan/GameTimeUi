Game Time Challange


## Gametime Performers page

### setup
- `npm install`
- `npm start`
- open localhost:3000

### Rules
- You can google for resources, syntax or anything you wish
- You can use any libraries you like.
- It is an open book project!

### API to work with
- API request: `GET https://mobile-staging.gametime.co/v1/performers` without any params.
- API response: a portion of the response is depicted below. We only care about the following properties in each
  performer pbject. {`id`, `name`, `hero_image_url`, `category_group`}
  where,
  - `id`: is a unique performer id
  - `name`: is the name of the performer
  - `hero_image_url`: is the hero image link of the performer
  - `category_group`: is one of ['sport', 'concert', 'theater'] - NOTE: you only need this for the bonus task.
- Sample API response: 
```
{
    "performers": [
        {
            "abbrev": "SJ",
            "category": "nhl",
            "category_group": "sport",
            "contrast_color": "",
            "display_type": "performer_vs_performer",
            "id": "5270135d3bf376613a000002",
            "hero_image_url": "https://images.gametime.co/nhlsjs/hero@4x.jpg",
            "medium_name": "SJ Sharks",
            "name": "San Jose Sharks",
            "primary_color": "1C6EABFF",
            "short_name": "Sharks",
            "slug": "nhlsjs"
        },
        {
            "abbrev": "GSW",
            "category": "nba",
            "category_group": "sport",
            "contrast_color": "FFC33CFF",
            "display_type": "performer_vs_performer",
            "id": "5270135d3bf376613a000003",
            "hero_image_url": "https://images.gametime.co/nbagsw/hero@4x.jpg",
            "medium_name": "GS Warriors",
            "name": "Golden State Warriors",
            "primary_color": "04529CFF",
            "short_name": "Warriors",
            "slug": "nbagsw"
        },
        {
            "abbrev": "LA",
            "category": "nhl",
            "category_group": "sport",
            "contrast_color": "AFB7BAFF",
            "display_type": "performer_vs_performer",
            "id": "52af58b43bf3763ea7000003",
            "hero_image_url": "https://images.gametime.co/nhllak/hero@4x.jpg",
            "medium_name": "LA Kings",
            "name": "Los Angeles Kings",
            "primary_color": "6E6E6EFF",
            "short_name": "Kings",
            "slug": "nhllak"
        },
        {
            "abbrev": "LAC",
            "category": "nba",
            "category_group": "sport",
            "contrast_color": "",
            "display_type": "performer_vs_performer",
            "id": "52af58b43bf3763ea7000004",
            "hero_image_url": "https://images.gametime.co/nbalac/hero@4x.jpg",
            "medium_name": "LA Clippers",
            "name": "LA Clippers",
            "primary_color": "EE2843FF",
            "short_name": "Clippers",
            "slug": "nbalac"
        },
```
### Tasks

##### Notes
- Do as much as you can. you are not required to finish the project
- Don't worry about styling at all! just basic stuff.
- All libraries you need to finish this task is already included in package.json (including Redux)
- If you don't know redux, you can complete the task in pure react.

##### Main Task
- Render the list of performers on the page (3 cards per row) using React and Redux.
  - Recommended order of execution:
    - If using Redux:
      - 1.a: Create an action `FETCH_PERFORMERS` in actions folder to call the API and get the results.
      - 1.b: Fill out the `reducers/performers.js` reducer to populate the store with the returned array of performers
    - If using pure React:
      - 1. Fetch the list of performers in `componentDidMount()` method of your top component.
    - 2. Create a `components/Performer.js`
    - 3. Create a `components/PerformerList.js` to render and array of `components/Performer.js`.

##### Bonus Task (noone has ever completed this task)
- If you are REALLY REALLY fast, go ahead and do as much of this task as you can.
  - Create a drop-down filter on top of the page with the following options ['all', 'sport', 'music', 'theater']
  - Initially `all` should be selected and all performers should be rendered.
  - Upon changing the drop-down, filter the list of performers that their `category_group` matches the selected value.