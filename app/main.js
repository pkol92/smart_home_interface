import {SmartDevice} from "../app/devices/smartDevices.js";
import {SmartBulb} from "../app/devices/bulb.js";
import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

const divPanel = document.getElementById("deviceList");
const listDevices = document.createElement("ul");
listDevices.setAttribute("id", "mainList");

divPanel.append(listDevices);

SmartDevice.map((device) => {
  const ulMain = document.getElementById("mainList");
  const ul = document.createElement("ul");
  for (const key in device) {
    if (device.hasOwnProperty(key)) {
        let li = document.createElement('li');
        li.innerText = `${key}: ${device[key]}`;
        ul.append(li);
    }
  }
  ulMain.append(ul);
})

const details = (device) => {
  const divDeviceView = document.getElementById("deviceView");
  const ul = document.createElement('ul');

  for (const key in device) {
      if (device.hasOwnProperty(key)) {
          let li = document.createElement('li');
          li.innerText = `${key}: ${device[key]}`;
          ul.append(li);
      }
  }

  divDeviceView.appendChild(ul);
}


details(SmartBulb);


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


// const url = '/api/v1/devices';

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let devices = data;

//     devices.map(function(device) {
//       let li = document.createElement('li');
//       let type = document.createElement('h3');
//       let id = document.createElement('h3');
//       let name = document.createElement('h3');
//       let connectionState = document.createElement('h3');

//       type.innerHTML = `${device.type}`;
//       id.innerHTML = `${device.id}`;
//       name.innerHTML = `${device.name}`;
//       connectionState.innerHTML = `${device.connectionState}`;

//       li.append(type, id, name, connectionState);
//       list.appendChild(li);
//     });
//   })
//   .catch(function(error) {
//     console.log(error);
// });

// listDevices.appendChild(list);

// const selectedDevice = (id) => {
//     fetch(`/api/v1/devices/${id}`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let device = data;
//     const divDeviceView = document.getElementById("deviceView");
//     const ul = document.createComment('ul');

//     for (const key in device) {
//         if (device.hasOwnProperty(key)) {
//             let li = document.createElement('li');
//             li.innerText = `${key}: ${device[key]}`;
//             ul.append(li);
//         }
//     }

//     divDeviceView.appendChild(ul);

//   })
//   .catch(function(error) {
//     console.log(error);
// });
// }
