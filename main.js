/*
    Your friend is an event organizer and 
has asked you to build a website for them. 
They want to be able to keep track of 
all the parties they are organizing. 
They want to be able to see a list of all the parties, 
add new parties, and delete parties.

USER STORY:

A user enters the website and finds a list of the names, 
dates, times, locations, and descriptions of all the parties that are happening.

STRETCH GOAL: There is also a form that allows the user to 
enter information about a new party that they want to schedule. 
After filling out the form and submitting it, the user observes 
their party added to the list of parties.

STRETCH GOAL 2: Next to each party in the list is a delete button. 
The user clicks the delete button for one of the parties. 
That party is then removed from the list.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!                                                      !!!!!!!!!!
!!!!!!!!!!     PSEUDOCODE FOR USER STORY SANS STRETCH GOALS     !!!!!!!!!!
!!!!!!!!!!                                                      !!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

1. Create getState function to get the state of the /events resource from the API.
  a. The state will include information on names, dates, 
         times, locations, and descriptions.
2. Create render function to render the state onto our webpage.
  a. Run once upon opening the webpage.
  b. Calls the getState function.
  c. If getState returns something different from our local state, we will update.
  d. Iterates over the state we get and creates html elements for each
    - Append text to those html elements
  e. Append/replace these html elements on our document.
3. Set interval to let the render function run frequently.

*/

const state = {
  events: [],
}

const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events'

const partiesDiv = document.querySelector('#partiesDiv');

const getState = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    if (json.success) {
      console.log(json.data);
      console.log(json);
      return json.data;
    }
  } catch (error) {console.log('ERROR ALERT: ', error)};
}

const render = async () => {
  const eventsArray = await getState();
  if (eventsArray !== state.events) state.events = eventsArray;
  else return;

  state.events.forEach((event) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','partyDiv');
    const newName = 
    
  })

  console.log(state.events);
  console.log(eventsArray);
}

render();