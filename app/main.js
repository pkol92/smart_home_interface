import interact from "interactjs";
import { createServer, Model } from "miragejs";

//create fake server 
createServer({
  models: {
    device: Model,
  },

  routes() {
      this.namespace = "api/v1"
  
      this.get("/devices")

      this.get("/devices/:id")
  },

  seeds(server) {
    server.create("device",
      {
          type: 'bulb',
          id: '1',
          name: 'bulb',
          connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
          isTurnedOn: 'true',
          brightness: 50, // <0, 100>
          color: 'red' // in the CSS formats
      }
    )

    server.create("device",
      {
          type: 'outlet',
          id: '2',
          name: 'outlet',
          connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
          isTurnedOn: 'false',
          powerConsumption: 3 // in watts
      }
    )

    server.create("device",
      {
          type: 'temperatureSensor',
          id: '3',
          name: 'temperatureSensor',
          connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
          temperature: 67 // in Celsius
      }
    )   
  },
})

const divPanel = document.getElementById("deviceList");
const listDevices = document.createElement("div");
listDevices.setAttribute("id", "mainList");

divPanel.append(listDevices);

const runApi = () => {
  fetch("/api/v1/devices/")
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(json => mainList(json.devices,"mainList"));
};

runApi();

const mainList = (data, divId) => {
  data.map((device) => {
    const mainDiv = document.getElementById(`${divId}`);
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    const div = document.createElement('div');

    mainDiv.append(btn);
    btn.append(div);

    let type = document.createElement('p');
    let name = document.createElement('p');
    let connectionState = document.createElement('p');

    type.innerHTML = `type: ${device.type}`;
    name.innerHTML = `name: ${device.name}`;
    connectionState.innerHTML = `connection state: ${device.connectionState}`;

    div.append(type, name, connectionState);
    addButton(btn, device.id);
  })
};

const addButton = (button, id) => {
  button.addEventListener("click", ()=> {
  showDetails(id)
})}

const detaleList = (list, divId) => {
  const div = document.getElementById(`${divId}`);
  div.style.padding = "1rem";
  if (div.firstChild) {
    div.firstChild.remove();
    const divList = document.createElement('div');
    for (const key in list) {
        if (list.hasOwnProperty(key)) {
            let p = document.createElement('p');
            p.innerText = `${key}: ${list[key]}`;
            divList.append(p);
        }
    }
    div.appendChild(divList);
  } else {
    const divList = document.createElement('div');
    for (const key in list) {
        if (list.hasOwnProperty(key)) {
            let p = document.createElement('p');
            p.innerText = `${key}: ${list[key]}`;
            divList.append(p);
        }
    }
    div.appendChild(divList);
  }
};

const showDetails = (id) => {
  fetch(`/api/v1/devices/${id}`)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(json => detaleList(json.device, "deviceView"),
  console.log(`${id}`));
}

setInterval(detaleList(), 100);

//create dragging posibility
const position = { x: 0, y: 0 }

interact('.deviceView').draggable({
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
  ],
  listeners: {
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})
