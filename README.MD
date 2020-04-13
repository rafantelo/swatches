# Rafael A. Codiing Swatches
This is my REST API Backend code for Swatches.

# Description
This application is designed to show a grid of swatches (images) with their description. You can add a new swatch, if the image is not set, then you can add a solid color as background. Be careful, this version only allows you to update the status of the swtach. But don't worry, you still can use the REST API explained below to update other fields or delete the swatch you need.

# Prerequisites for installation locally
- Node 12+ (not tested in older versions)
- MongoDB 4+ (not tested in older versions)

# REST API Installation
Go to the backend folder and execute:
```
$ npm install
```

# Usage
To run with default port (3000)
```
$ npm start
```

To run with a specified port
```
$ PORT=3003 npm start
```

To run using pm2
```
$ pm2 start pm2.json
```

# Github code
https://github.com/rafantelo/swatches.git

# Frontend URL
http://rafael-swatch.s3-website.us-east-2.amazonaws.com/

# REST API Endpoints
## Get a list of all Swatches (GET)
```
http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api/swatches
```

## Get a specific Swatch (GET)
```
http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api/swatches/{your swatch name}
```

## Create (POST)
```
http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api/swatches
Content-Type: application/json
{
  "active": true,
  "name": "Aloha",
  "price": 12.34,
  "image": "https://raw.githubusercontent.com/RauxaRepo/Coding-Challenge-Services-Engineering/master/swatches/aloha-lg.jpg",
  "thumb": "https://raw.githubusercontent.com/RauxaRepo/Coding-Challenge-Services-Engineering/master/swatches/aloha-sm.jpg",
  "color": "#1590ff"
}
```

## Delete (GET)
Used GET to delete, because in the README file it was explicit the use of GET, POST, PUT (DELETE was not part of the list)
```
http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api/swatches/delete/{your swatch name}
```

## Update (PUT)
```
http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api/swatches/{your swatch name}
Content-Type: application/json
{
  "active": false,
  "name": "Aloha",
  "price": 12.34,
  "image": "https://raw.githubusercontent.com/RauxaRepo/Coding-Challenge-Services-Engineering/master/swatches/aloha-lg.jpg",
  "thumb": "https://raw.githubusercontent.com/RauxaRepo/Coding-Challenge-Services-Engineering/master/swatches/aloha-sm.jpg",
  "color": "#1590ff"
}
```

# NOTES
Changes made to the data structure
- Unfortunately, I was not able to ask for the images, that is why I added another field named thumb, which contains the small image
- The price type used is number (10), but in the interface is shown as $10
- The name has a unique constraint and is indexed
- Missing logger

Original structure:
```
{
    "active": Boolean
    "name": String,
    "price": String,
    "image": String,
    "color": String
    "date": String
}
```

Used structure:
```
{
    "active": Boolean
    "name": String,
    "price": Number,
    "image": String,
    "thumb": String,
    "color": String
    "date": String
}
```

# NOTES BEFORE PRODUCTION
- Finish all unit tests, and do e2e tests
- Test frontend code
- Change Backend and Frontend to use HTTPS
- Improve the design
- Morgan logger should be changed to tiny
- log files must have logrotate to avoid disk space issues