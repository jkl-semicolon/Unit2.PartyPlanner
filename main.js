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
  newEvent: {},
}

const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events'

const partiesDiv = document.querySelector('#partiesDiv');
const $submit = document.querySelector('#submit');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const emojis = [
	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];
const getEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
// Got random emoji array + function from https://gist.github.com/ikr7/c72843556ef3a12014c3
const colors = ['FF8080','FFCF96','F6FDC3','CDFAD5'];

$submit.addEventListener("click",async (event) => {
  event.preventDefault();
  // if (!pName.value || !pLocation.value || !datetime.value || !description.value) {
  //   alert('🐧 Make sure you fill out all form fields completely! 🐧');
  //   pName.value = '';
  //   pLocation.value = '';
  //   datetime.value = '';
  //   description.value = '';
  //   return;
  // }
  state.newEvent.name = pName.value;
  state.newEvent.location = pLocation.value;
  state.newEvent.date = datetime.value + ':35.766Z';
  state.newEvent.description = description.value;
  // state.newEvent.cohortId = 56;
  // state.newEvent.id = Math.floor(Math.random() * 10000000000000);
  // pName.value = '';
  // pLocation.value = '';
  // datetime.value = '';
  // description.value = '';
  console.log(state.newEvent);

  // postDataFunction(API_URL, state.newEvent)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch ((error) => {
  //     console.error("Error:", error);
  //   });
  // console.log(state.newEvent);
  // for (const property in state.newEvent) {
  //   delete state.newEvent[property];
  // }
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.newEvent),
    });
    if (!response.ok) {
      throw new Error("Failed to create artist");
    }
    // pName.value = '';
    // pLocation.value = '';
    // datetime.value = '';
    // description.value = '';
    render();
  } catch (error) {
    console.error(error);
  }
  console.log(state.newEvent);
  // pName.value = '';
  // pLocation.value = '';
  // datetime.value = '';
  // description.value = '';
});


const postDataFunction = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  return await response.json()
}

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

// Function for background color of our containers.
const formatColor = () => {
  const nodeList = document.querySelectorAll(".partyDiv");
  for (let i=0; i<nodeList.length; i+=4) nodeList[i].style.backgroundColor = `${colors[0]}`;
  for (let i=1; i<nodeList.length; i+=4) nodeList[i].style.backgroundColor = `${colors[1]}`;
  for (let i=2; i<nodeList.length; i+=4) nodeList[i].style.backgroundColor = `${colors[2]}`;
  for (let i=3; i<nodeList.length; i+=4) nodeList[i].style.backgroundColor = `${colors[3]}`;
  // TO-DO: Look into nesting for loops to reduce redundancy in code
}

const render = async () => {
  eventsArray = await getState();
  if (eventsArray === state.events) return;
  else state.events = eventsArray;

  while (partiesDiv.hasChildNodes()) partiesDiv.removeChild(partiesDiv.firstChild);
  eventsArray.forEach((event) => {
    
    const containersContainer = document.createElement('div');
    containersContainer.setAttribute('class','partyDivContainer');
    const container = document.createElement('div');
    container.className = 'example_e partyDiv';
    const inlineContainer = document.createElement('div');
    inlineContainer.setAttribute('class','inlineDiv');
    const inlineMiddleContainer = document.createElement('div');
    inlineMiddleContainer.setAttribute('id','inlineMiddle');
    // Create containers // TO-DO: remove redundant container

    // TO-DO: fix the border issue between the inlineContainer children.

    const name = document.createElement('h2');
    name.innerHTML = `${getEmoji()} ${event.name}`;
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

    // TO-DO: Clean up this forEach method with some functions.

    container.appendChild(name);
    inlineMiddleContainer.appendChild(date);
    inlineContainer.appendChild(location);
    inlineContainer.appendChild(inlineMiddleContainer);
    inlineContainer.appendChild(time);
    container.appendChild(inlineContainer);
    container.appendChild(description);
    containersContainer.appendChild(container);
    partiesDiv.appendChild(containersContainer);
    // console.log(partiesDiv);
    // console.log(typeof partiesDiv);
    // console.log(container); //////////////////////////////////////////////////////////
  })  // TO-DO: remove console.log comments
  formatColor();
  // console.log(state.events); /////////////////////////////////////////////////////////
  // console.log(eventsArray);  ////////////////////////////////////////////////////////
}

const addInterval = setInterval(render(), 5000);

// TO-DO Fix the 'Uncaught SyntaxError: Unexpected identifier 'Promise' issue in console.




//  CODE TROUBLESHOOTING CHECKLIST
// 1. Check all (),[],{} and make sure they line up correctly.
// 2. Check all ; and , in the code and make sure they are used correctly.
// 3. Check all `, ', and " in the code and make sure they are placed correctly.
// 4. Check all for loops; make sure for...in and for...of are used correctly,
//    and make sure all the expressions in regular for loops make sense.
// 5. Check html page for correct .js and .css linking.
// 6. Check html page and css page for correct ID and class linkage;
//    review all css selectors in .css for correct formatting.
// 7. Inspect different html elements after render and see how they fit together in the DOM.