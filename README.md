# REST API

1. For get all user => https://rest-api-zvka.onrender.com/api/users


For get a single user => http://127.0.0.1/api/<id of user>
Example
```
https://rest-api-zvka.onrender.com/api/78
```

2. For create a user=>   https://rest-api-zvka.onrender.com/api/users
Example 
```
body {
        "first_name": "Cirstoforo",
        "last_name": "Luetkemeyer",
        "email": "cluetkemeyerg@feedburner.com",
        "gender": "Polygender",
        "ip_address": "21.45.250.211"
    },
```


3. For update a user => https://rest-api-zvka.onrender.com/api/users
Example 
```
body {
        "key": 34,
        "first_name": "Cirstoforo",
        "last_name": "Luetkemeyer",
        "email": "cluetkemeyerg@feedburner.com",
        "gender": "Polygender",
        "ip_address": "21.45.250.211"
    },
```


4.For delete a user => http://127.0.0.1/api/users
Example
```
body{
    "key":34
}
```
