# Back End for Potluck Planner

## Back End Deployed with Herokuapp

[https://planthepotluck.herokuapp.com/](https://planthepotluck.herokuapp.com/)

## Pitch: 

If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets you get why this app is important. In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck. 

# Product Canvas

## Proposal

### What problem does your app solve?

Client wants to have an application that allows the user to login and manage potlucks. 

### Be as specific as possible; how does your app solve the problem?

This app will allow:
- The user to login
- Manage their own potluck event
- Invite friends to attend the potluck event 
- Adjust dates, location, and times of their own events
- Has a list feature to add food items
- Guests should be able to confirm they are going to the event
- Guests should be able to select items to bring.


### What is the mission statement?

Help organizers and attendees plan potluck scheduling and food items.

## Features

### What features are required for your minimum viable product?

1. As an organizer I can create an upcoming potluck and invite my friends to attend.
2. As an organizer I can adjust dates, times and locations of the potluck.
3. As an organize I can use the list feature in my app to add food items that we'd like to see at the potluck.
4. As a guest to a potluck I want to be able to confirm that I'm going to the upcoming event.
5. As a guest I'd like to be able to select which items I'd like to be responsible for bringing.

*NOTE:* All of the user stories above should only require a single user type. Users can create "potlucks" and add other users to them.

### What features may you wish to put in a future release?

- Any updates is emailed to anyone signed up on the event.
- Ability to export the date and time to a calendar.
- Admin can choose if guests can invite other guests
- Interactive Online List
- Reminder emails sent to participants 24 hours prior to date
- Organizer Email Options. Receive alerts when items are booked or cancelled
- Ability to list meal preferences and allergies
- Printable list
- Invitations via email, faceboook, twitter, and more
- Organizer can book items for others
- Optional donation fund add on

### What do the top 3 similar apps do for their users?

Reviewing: thingtobring.com, mealtrain.com/learn/potluck, and signupgenius.com

- Track who is bringing what to the party
- Email invites to friends
- RSVP
- Themes potlucks
- Ability to list meal preferences and allergies.
- Portion Calculator
- Add multiple administrators to your account
- Group messaging
- Option for Prebuilt Potlucks or Custom Potlucks
- Option to link recipes

### Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?

- Styled-components
- Formik
- react-router-dom
- npm
- axios

Do APIs require you to contact its maintainer to gain access?

- Start out with no, may require token in future.

Are you required to pay to use the API?
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

### Target Audience

- Who is your target audience? Be specific.

Anyone who is planning or attending a potluck.

- What feedback have you gotten from potential users?

Past potlucks had people bringing mostly drinks and there was not enough food.
Having people coming but not bring anything
Waiting until the last minute to say they are coming and randomly bring something.
Having people sign up others and say they are bringing something without the guest knowing about it.

- Have you validated the problem and your solution with your target audience? How?

Sign up list for items to bring
List of Maximum amounts of items, have categories that have limits of the number of items that can be signup under the category
RVSP date and time, emails guests to remind them to reply with “going”, “not going”, “don’t know”
Guests can create a login to secure what they sign up for. 

### Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

# Planning

#### Group Trello Board [https://trello.com/b/LhtzQb6t/potluck-planner]
#### Back end Trello Board [https://trello.com/b/qCvJzRWF/lambda-notesbackend-sandy-jernigan]

# Development Back End

Some informtion is included below, more detailed information is available on the index.html page.

## Currently hosted at https://planthepotluck.herokuapp.com/ 

Please see the index page for more information about the Product including: Models, Endpoints, and Database structure.

### [Models](/#models)

[User](###User)
[Event](###Event)
[Food](###Foods)

### [Endpoints](##endpoints)

##### [User Endpoints](###User-Endpoints)

- [Sign Up](#####Signup)
- [Login](#####Login)
- [Update User](#####Update-User)   // TODO
- [Delete USer](#####Delete-User)   // TODO

##### [Event Endpoints](###Event-Endpoints)

- [Get All Events](#####Get-All)
- [Get Event](#####Get-Event)       // TODO
- [Add Event](#####Add-Event)       // TODO
- [Update Event](#####Update-Event) // TODO
- [Delete Event](#####Delete-Event) // TODO


## Models
---
<span id="models"></span>

### User 

```javascript
  "groupid": 1,
  "username": "john",
  "password": "examplepass",
  "firstname": "Johnathan",
  "lastname": "Doe",
  "preferredname": "John",
  "email": "john@email.com",
  "group_id": 1

```

#### Group

```javascript
{
  "groupid": 1,
  "groupname": "Developers",
  "description": "Description of the group"
}
```

### Event

```javascript
{
  "eventid": 1,
  "eventname": "John's First Potluck",
  "description": "Birthday Party Potluck for Jane.",
  "eventdate": "8-23-2019",
  "eventtime": "6:00 PM",
  "location": "John's Backyard",
  "username": "john", // user that created the event
  "foods": [
    { 
      "foodname": "Hamburgers",
      "quantity": 24,
      "description": "hamburger meat",
      "category": "meat",
      "vegetarian" : false,
      "vegan" : false,
      "gutenfree" : null,
      "bringing": [
        {
        "guestname": "guest1", // this is marked as bringing
        "quantity": 12 // qty guest plans to bring
        },
        {
        "guestname": "guest2", // this is marked as bringing
        "quantity": 12 // qty guest plans to bring
        },
      ]
    },
    { 
      "foodname": "Hamburger Buns",
      "quantity": 24,
      "description": null,
      "category": "bread",
      "vegetarian" : true,
      "vegan" : null,
      "gutenfree" : false,
      "bringing": null // if null no one is selected as bringing yet
    },
  ],
  "guests": [ // array of guests 
    "guest_id": 1,
    "guest_id": 2
  ]
}
```

#### Locations

```javascript
{
    "locationid": 1,
    "location": "John's Backyard",
    "description": "At John and Jane's house"
}
```

### Foods

```javascript
{
  "foodid": 1,
  "foodname": "Hamburger Buns",
  "description": null,
  "categoryid": 1,
  "vegetarian" : true,
  "vegan" : null,
  "gutenfree" : false,
}
```

#### Categories

```javascript
{
  "category_id": 1,
  "category_name": "bread",
  "category_description": "breads made from either flour, oats, rye, etc"
}
```

### Guests

```javascript
{
  "guest_id": 1,
  "guestname": "guest1",
  "guestemail": "jane@email.com",
  "user_id": null
}
```

## Endpoints

### User-Endpoints

---
  <h1>Pitch  <button class="button" onclick="{showContent(document.getElementById('pitchinfo'))}">v</button></h1>

##### Signup

**Endpoint:** `/api/auth/register`
**Type:** `POST`
**Description:**

```
  Sign up a new user
```

**Expected Input**

```javascript
{
  // username and email must be unique
  // username, password, and email are required

  "username": "testuser",
  "password": "password",
  "email": "user@email.com",
  "firstname": "Johnathan",
  "lastname": "Doe",
  "preferredname": "John",
  "group_id": null
}
```

---

##### Login

**Endpoint:** `/api/auth/login`
**Type:** `POST`
**Description:**

```
    Gets authentication token for user with given credentials
```

**Expected Input**

```javascript
{
    "username": "SomeUser",
    "password": "TheirPassword"
}
```

_sample request_

```javascript
const body = {
  "username": "SomeUser",
  "password": "TheirPassword"
};

axios.post(`${BASE_URL}/api/auth/login`, body);

```

**Expected Return**

```javascript
status = 200

{
  message: `Welcome SomeUser!`,
  token
}

```

**Expected Return if fails**

```javascript
status = 401

{ message: 'Invalid Request. Please check the username and password submitted.' }

```

---
