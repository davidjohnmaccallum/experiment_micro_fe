# Simple Micro Front End

This is an experiment using NodeJS and Express to split a front end up into independently deployable units. It is about as simple as I can make it. It consists of an index page and four other pages: cashup, deliveries, drivers, reports. Each of these pages is a separate Express project which would run its own Express server, be stored in its own git repository, potentially be owned by a separate team and deployed independently. The index page project uses an HTTP proxy module to proxy requests through to the servers running the other pages. So from the users point of view it feels like one website.

![Diagram](diagram.drawio.png)

## Running

```sh
# Install dependencies
cd index; npm install; cd ..
cd cashup; npm install; cd ..
cd deliveries; npm install; cd ..
cd drivers; npm install; cd ..
cd reports; npm install; cd ..

# Start servers in the background
cd index; node index.js &; cd ..
cd cashup; node index.js &; cd ..
cd deliveries; node index.js &; cd ..
cd drivers; node index.js &; cd ..
cd reports; node index.js &; cd ..
```

Open website open http://localhost:3000