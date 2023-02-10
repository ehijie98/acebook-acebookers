# MongoDB User Collections Design

MongoDB is no SQL database

| SQL           | MongoDB                                  |
| ------------- | ---------------------------------------- |
| Table         | Collection                               |
| Field         | Key / Property                           |
| Record        | Document                                 |
| Relationships | Embedded documents / document references |

## User Specification

```
As a user, so that I can use Acebook from my personal account, I would like to sign up.

As a logged in user, so that I can share what I am doing online, i want to be able to make posts

As a logged in user, so I can keep up to date with what other people are doing, I want to see their posts

As a logged in user, so I can let people know I enjoy their post, I want to be able to like a post

As a logged in user, so that I know who is interacting with my posts, I want to see likes and comments on my posts

As a user, so that I can see latest posts first, I would like to view posts on a feed in reverse chronological order

```

### Keywords

```
Nouns:
user, account, post, feed, comment
```

```
Events:
sign up, log in, create post, view post, like post, comment, view feed
```

```
Required:

sign up: first name, last name, email address, d.o.b

log in: email, password

create post: user / author, text

view posts / feed: user, authors, posts
```

## User Properties

| Collection | Properties                                       |
| ---------- | ------------------------------------------------ |
| users      | first name, second name, email address, password |

Keys: `firstName`, `lastName`, `email`, `password`, `dob`

##

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "email", "password", "dob"],
      properties: {
        firstName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        lastName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          pattern:
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
          description: "must be a string and match the email pattern",
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        dob: {
          bsonType: "date",
          description: "must be a date and is required",
        },
      },
    },
  },
});
```

## Create User

```javascript
db.users.insertOne({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "secret",
});
```
