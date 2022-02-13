const divPanel = document.getElementById("deviceList");
const listDevices = document.createElement("ul");
listDevices.setAttribute("id", "listDevices")
const listDeviceDetails = document.createElement("ul");
divPanel.append(listDevices);

// const createListDevices = (divId, ulId, text) => {
//     const ul = document.getElementById(`${ulId}`);
//     const li = document.createElement("li");
//     const div = document.createElement("div");
//     div.setAttribute("id", `${divId}`);
//     const titleDevice = document.createElement("h3");
//     titleDevice.textContent = `${text}`;
//     div.append(titleDevice);
//     li.append(div);
//     ul.append(li);
// };

// const createDetailsList = (ulId, divId) => {
//     const ul = document.createElement("ul");
//     ul.setAttribute("id", `${ulId}`);

//     const liType = document.createElement("li");
//     liType.innerText = "Type:";
//     const liName = document.createElement("li");
//     liName.innerText = "Name:";
//     const liConnection = document.createElement("li");
//     liConnection.innerText = "Connection state:";

//     ul.append(liType, liName, liConnection);
//     const div = document.getElementById(`${divId}`)
//     div.append(ul);
// }


// const list = document.createDocumentFragment();

const url = '/api/v1/devices';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let devices = data;

    devices.map(function(device) {
      let li = document.createElement('li');
      let type = document.createElement('h3');
      let id = document.createElement('h3');
      let name = document.createElement('h3');
      let connectionState = document.createElement('h3');

      type.innerHTML = `${device.type}`;
      id.innerHTML = `${device.id}`;
      name.innerHTML = `${device.name}`;
      connectionState.innerHTML = `${device.connectionState}`;

      li.append(type, id, name, connectionState);
      list.appendChild(li);
    });
  })
  .catch(function(error) {
    console.log(error);
});

listDevices.appendChild(list);

const selectedDevice = (id) => {
    fetch(`/api/v1/devices/${deviceId}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let device = data;
    const divDeviceView = document.getElementById("deviceView");
    let li = document.createElement('li');

    let type = document.createElement('h3');
    let id = document.createElement('h3');
    let name = document.createElement('h3');
    let connectionState = document.createElement('h3');
    let isTurnedOn = document.createElement('h3');
    let brightness = document.createElement('h3');
    let color = document.createElement('h3');
    let powerConsumption = document.createElement('h3');
    let temperature = document.createElement('h3');

    type.innerHTML = `${device.type}`;
    id.innerHTML = `${device.id}`;
    name.innerHTML = `${device.name}`;
    connectionState.innerHTML = `${device.connectionState}`;
    isTurnedOn.innerHTML = `${device.isTurnedOn}`;
    brightness.innerHTML = `${device.brightness}`;
    color.innerHTML = `${device.color}`;
    powerConsumption.innerHTML = `${device.powerConsumption}`;
    temperature.innerHTML = `${device.temperature}`;


    li.append(type, id, name, connectionState);
    divDeviceView.appendChild(li);

  })
  .catch(function(error) {
    console.log(error);
});
}
// createListDevices("smartBulb", "listDevices", "Bulb");
// createListDevices("smartOutlet", "listDevices", "Outlet");
// createListDevices("smartTemperatureSensor", "listDevices", "Temperature Sensor");

// createDetailsList("bulb", "smartBulb");
// createDetailsList("outlet", "smartOutlet");
// createDetailsList("temperatureSensor", "smartTemperatureSensor");