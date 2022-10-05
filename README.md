# Example-CRUD

A complete example of a "CRUD" service (UserService) built with Nodejs.

### Stack:


### Project layout

```
|- src/
|   |
|   |- controller/                       // Folder containing REST Controllers (UserController)
|   |- database/                         // Folder containing the database client
|   |- service/                          // Service business logic classes (UserService)
|   |- app.ts                            // Root file
```

---

### Endpoints 
#### User Service

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|http://localhost:3000/users | Create new User |
|`PUT`|http://localhost:3000/users/{userId} | Update User by ID |
|`GET`|http://localhost:3000/users/{userId} | Get User by ID |
|`DELETE`|http://localhost:3000/users/{userId} | Delete User by ID |
|`GET`|http://localhost:3000/docs | Swagger UI page |
