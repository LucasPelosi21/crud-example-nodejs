# Example-CRUD

A complete example of a "CRUD" service (UserService) built with Nodejs.

---

### Stack
- Typescript
- TypeORM
- Swagger

---

### Project layout

```
|- src/
|   |- controllers/                       // Folder containing REST Controllers (UserController)
|   |- database/                          // Folder containing the database client
|   |- services/                          // Service business logic classes (UserService)
|   |- middlewares/                       // Middlewares for request-response cycle
|   |- models/                            // Contains the models for ORM (users.model)
|   |- repositories/                      // Encapsulate the logic required to access data sources (UserRepository)
|   |- routes/                            // All project routes (UserRouter)
|   |- schema/                            // Schema validations
|   |- utils/                             // File for utils functions
|   |- app.ts                             // Root file
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
