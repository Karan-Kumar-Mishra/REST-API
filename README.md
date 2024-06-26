# REST API

1. For get all user => https://rest-api-zvka.onrender.com/api/users
method: GET

2. For get a single user => http://127.0.0.1/api/<id of user>
Example
method: GET
```
https://rest-api-zvka.onrender.com/api/78
```
3. For create a user=>   https://rest-api-zvka.onrender.com/api/users
Example
method: POST
```
body {
        "first_name": "Cirstoforo",
        "last_name": "Luetkemeyer",
        "email": "cluetkemeyerg@feedburner.com",
        "gender": "Polygender",
        "ip_address": "21.45.250.211"
    },
```
4. For update a user => https://rest-api-zvka.onrender.com/api/users
Example
method: PUT
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
5.For delete a user => http://127.0.0.1/api/users
Example
method: DELETE
```
body{
    "key":34
}
```
