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
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const getState = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    if (json.success) {
      // console.log(json.data);  /////////////////////////////////////////////////
      // console.log(json); ///////////////////////////////////////////////////////
      // TO-DO: remove console.log comments
      return json.data;
    }
  } catch (error) {console.log('ERROR ALERT: ', error)};
}

// Function for formatting our date.
const formatDate = (date) => {
  const strArray = date.split('');
  let monthNum = strArray[5] + strArray[6];
  if (monthNum[0] === '0') monthNum = monthNum.substring(1);
  return `${months[Number(monthNum)]} ${strArray[8]}${strArray[9]}, ${strArray[0]}${strArray[1]}${strArray[2]}${strArray[3]}`
}

// Function for formatting our time.
const formatTime = (time) => {
  let milTimeQuery = time[0] + time[1];
  if (milTimeQuery === 12) return `12:${time[3]}${time[4]} pm`;
  else if (milTimeQuery > 12) return `${milTimeQuery - 12}:${time[3]}${time[4]} pm`;
  else if (milTimeQuery === '00') return `12:${time[3]}${time[4]} am`;
  else return `${time[1]}:${time[3]}${time[4]} am`;
}

const render = async () => {
  const eventsArray = await getState();
  if (eventsArray !== state.events) state.events = eventsArray;
  else return;

  state.events.forEach((event) => {
    
    const container = document.createElement('div');
    container.setAttribute('class','partyDiv');
    const inlineContainer = document.createElement('div');
    inlineContainer.setAttribute('class','inlineDiv');
    const inlineMiddleContainer = document.createElement('div');
    inlineMiddleContainer.setAttribute('id','inlineMiddle');
    // Create containers // TO-DO: remove redundant container

    const name = document.createElement('h2');
    name.innerHTML = `\uD83C\uDF89 ${event.name}`;
    const location = document.createElement('h4');
    location.setAttribute('id','leftInlineDiv');
    if (event.location.length > 12) location.setAttribute('id','tooBigH4');
    // TO-DO: remove redundant if statement
    location.innerHTML = event.location;
    const date = document.createElement('h4');
    date.setAttribute('id','middleInlineDiv');
    date.innerHTML = formatDate(event.date.slice(0,10));
    const time = document.createElement('h4');
    time.setAttribute('id','rightInlineDiv');
    time.innerHTML = formatTime(event.date.slice(11,16));
    const description = document.createElement('p');
    description.innerHTML = event.description;
    // Create our html elements

    container.appendChild(name);
    inlineMiddleContainer.appendChild(date);
    inlineContainer.appendChild(location);
    inlineContainer.appendChild(inlineMiddleContainer);
    inlineContainer.appendChild(time);
    container.appendChild(inlineContainer);
    container.appendChild(description);
    partiesDiv.appendChild(container);
    // console.log(container); //////////////////////////////////////////////////////////
  })  // TO-DO: remove console.log comments

  // console.log(state.events); /////////////////////////////////////////////////////////
  // console.log(eventsArray);  ////////////////////////////////////////////////////////
}

render();