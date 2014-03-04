# Find Your Rep Widget

A Basic jQuery plugin that renders a form into the specified target, geocoding
input and displaying results from Sunlight's Congress and Open States APIs.

## Usage:

**To add to your page:**

1. Link jQuery and `dist/jquery.findyourrep-pack.min.js` on your page (in that order).
2. Call `findYourRep()` on an element:

```javascript
    $('.myDiv').findYourRep({
        apikey: 'your-key'
    });
```

**To build & contribute:**

1. Clone this repo
2. Install Node.js if you don't have it
3. Run `npm install && bower install && grunt demo`

## Options:

Passed as a javascript object to the constructor, just like any jQ plugin.

- `apikey`: Your Sunlight Labs API key (required)
- `apis`: A comma-delimited list of apis to query.  
          For U.S. Congress only, use `apis: 'congress'`  
          For U.S. and State Legislatures, use `apis: 'congress, openstates'`  
          Default is `'congress, openstates'`.
- `title`: The title of the widget. Default is 'Find Your Representatives'
- `text`: The text that displays above the textarea for the user's address.  
          Default is 'Enter your address to see who represents you.'
- `action`: The text of the button that finds your reps. Default is 'Go!'

## License:

BSD3