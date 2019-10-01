# Testing

## Auth

### Router

Testing for POST /api/auth/register
- should add user and return status 201

Testing for POST /api/auth/login
- should return user and return status 200

### Users Model

Users.find()
- should resolve to an array
- should resolve to array of 3 users

Users.add(insertData)
- should resolve to length 4
- should resolve to the newly created user

Users.findById(id)
- findById(1) should resolve to the first user
- findById(2) should resolve to user with id of 2
- findById(3) should resolve to user with id of 3

Users.findBy(filter)
- findBy(username) should resolve to 1 user when searching username
- findBy(group_id) should resolve to 2 users when searching group_id: 1

Users.update(changes, id)
- update(changes, id) should resolve to 1 user with new changes

Users.remove(id)
- should remove the entry from the database
- should return the user information removed

## Events

### Events Router

### Events Model

<!-- 

      <h3 class="moreInfo" onclick="{showContent('eventEndpoints')}">Event Endpoints</h3>
      <div id="eventEndpoints" class="hid">
        
        <h4 class="moreInfo" onclick="{showContent('getEndpoints')}">Get</h4>
        <div id="getEndpoints" class="hid">
        <ul>
          <li class="moreInfo" onclick="{showContent('getEvents')}">Get All Events - Simple</li>
          <li class="moreInfo" onclick="{showContent('getAllEvents')}">Get All Events - Detailed</li>
          <li class="moreInfo" onclick="{showContent('getEvent')}">Get Event</li>
          <li class="moreInfo" onclick="{showContent('getGuestsbyEvent')}">Get Guests by Event</li>
          <li class="moreInfo" onclick="{showContent('getGuests')}">Get all Guests</li>
          <li class="moreInfo" onclick="{showContent('getGuest')}">Get Guest by ID</li>
          <li class="moreInfo" onclick="{showContent('getFoodNeeded')}">Get Food Needed for Event</li>
          <li class="moreInfo" onclick="{showContent('getBringingbyGuest')}">Get Guest Bringing Item</li> 
          <li class="moreInfo" onclick="{showContent('getFood')}">Get Food</li>
          <li class="moreInfo" onclick="{showContent('getFoodbyID')}">Get Food by ID</li>
          <li class="moreInfo" onclick="{showContent('getCategories')}">Get Categories</li>
          <li class="moreInfo" onclick="{showContent('getCategory')}">Get Category</li>
        </ul>
        </div>
        
        <h4 class="moreInfo" onclick="{showContent('addEndpoints')}">Add</h4>
        <div id="addEndpoints" class="hid">
        <ul>
          <li class="moreInfo" onclick="{showContent('addEvent')}">Add Event</li>
          <li class="moreInfo" onclick="{showContent('addGuest')}">Add Guest</li>
          <li class="moreInfo" onclick="{showContent('addGuest')}">Add Guest to an Event</li>
          <li class="moreInfo" onclick="{showContent('addFoodNeeded')}">Add Food Needed for Event</li>
          <li class="moreInfo" onclick="{showContent('addBringing')}">Add Guest Bringing Item</li> 
          <li class="moreInfo" onclick="{showContent('addFood')}">Add Food</li>
          <li class="moreInfo" onclick="{showContent('addCategory')}">Add Category</li>
        </ul>
        </div>
        
        <h4 class="moreInfo" onclick="{showContent('updateEndpoints')}">Update</h4>
        <div id="updateEndpoints" class="hid">
        <ul>
          <li class="moreInfo" onclick="{showContent('updateEvent')}">Update Event</li>
          <li class="moreInfo" onclick="{showContent('updateGuest')}">Update Guest</li>
          <li class="moreInfo" onclick="{showContent('updateFoodNeeded')}">Update Food Needed for Event</li>
          <li class="moreInfo" onclick="{showContent('updateBringing')}">Update Guest Bringing Item</li>
          <li class="moreInfo" onclick="{showContent('updateFood')}">Update Food</li>
          <li class="moreInfo" onclick="{showContent('updateCategory')}">Update Category</li>
        </ul>
        </div>
        
        <h4 class="moreInfo" onclick="{showContent('deleteEndpoints')}">Delete</h4>
        <div id="deleteEndpoints" class="hid">
        <ul>
          <li class="moreInfo" onclick="{showContent('deleteEvent')}">Delete Event</li>
          <li class="moreInfo" onclick="{showContent('deleteGuest')}">Add Guest</li>
          <li class="moreInfo" onclick="{showContent('removeGuestfromEvent')}">Remove Guest from an Event</li>
          <li class="moreInfo" onclick="{showContent('removeFoodNeeded')}">Remove Food Needed for Event</li>
          <li class="moreInfo" onclick="{showContent('deleteFood')}">Delete Food</li>
          <li class="moreInfo" onclick="{showContent('deleteCategory')}">Delete Category</li>
        </ul>
      </div>
      
    </div>
    
    <h2 class="moreInfo" onclick="{showContent('database')}">Database Structure</h2>
    <div id="database" class="hid">
      <ul>
        <li class="moreInfo" onclick="{showContent('dbUsers')}">User</li>
        <li class="moreInfo" onclick="{showContent('dbGroups')}">Groups</li>
        <li class="moreInfo" onclick="{showContent('dbEvents')}">Event</li>
        <!-- <li class="moreInfo" onclick="{showContent('dbLocations')}">Locations</li> -->
        <li class="moreInfo" onclick="{showContent('dbFood')}">Food</li>
        <li class="moreInfo" onclick="{showContent('dbCategories')}">Categories</li>
        <li class="moreInfo" onclick="{showContent('dbGuests')}">Guests</li>
        <li class="moreInfo" onclick="{showContent('dbGuestsEvents')}">Guests/Events</li>
        <li class="moreInfo" onclick="{showContent('dbFoodEvents')}">Food/Events</li>
        <li class="moreInfo" onclick="{showContent('dbFoodneededGuests')}">Food/Guests</li>
      </ul>
    </div> -->