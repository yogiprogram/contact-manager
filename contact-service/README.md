
**Technology Use in Project**

- Gradle
- Java 8
- Spring Boot
- Swagger 2.0 CodeGen and UI
- Database use emmbed H2 for demo purpose only 
- Hibernate (So that we can easily change datasource in future)
- Docker

**How to Modify Api**

API Yaml file : src/main/resources/swagger/contact_service.yml

Use Swagger Editor : https://editor.swagger.io/

**Build Project**

First generate api code using swagger codege and gradle 
`
./gradlew copyGeneratedCode build
`

**Run Service**

Note - Service port is 80888 and url is  http://localhost:8088/

Run using IDE. Boot class is ContactApplication.java

`
./gradlew bootRun
`

or 

`
java -jar build/libs/contact-service-0.0.1-SNAPSHOT.jar
`

**Docker build**

`
./gradlew buildDocker
`

** Test API **
Once server up you will test api using postman or curl or swagger ui using http://localhost:8088/swagger-ui.html

![Contact service swagger](https://github.com/yogiprogram/contact-manager/blob/master/screen_shot/Swagger_ui.png?raw=true)

**API Example**
1. List contacts
```

curl -X GET "http://localhost:8088/contacts" -H "accept: */

```
2. Add new contact
```

curl -X POST "http://localhost:8088/contacts" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"email\": \"jt@domain.com\", \"first_name\": \"John\", \"last_name\": \"Trump\", \"phone\": \"+91909232199\"}"

Reponse status 201 
{
  "id": "e9d37f03-e09e-4360-a690-3e51c9f95d7a",
  "first_name": "John",
  "last_name": "Trump",
  "email": "jt@domain.com",
  "phone": "+91909232199",
  "status": "ACTIVE"
}
```
3. Find Contact Information by contact Id
```

curl -X GET "http://localhost:8088/contacts/e9d37f03-e09e-4360-a690-3e51c9f95d7a" -H "accept: */*"

```
4. Edit / Update contact

```

curl -X PUT "http://localhost:8088/contacts/e9d37f03-e09e-4360-a690-3e51c9f95d7a" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"email\": \"jt@domain.com\", \"first_name\": \"John 1\", \"last_name\": \"Trump\", \"phone\": \"+91909232199\"}"

```
5. Delete Contact

```

curl -X DELETE "http://localhost:8088/contacts/e9d37f03-e09e-4360-a690-3e51c9f95d7a" -H "accept: */*"

```

