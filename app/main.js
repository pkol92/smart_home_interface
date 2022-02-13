const divPanel = document.getElementById("deviceList");
const listDevices = document.createElement("ul");
listDevices.setAttribute("id", "listDevices")

divPanel.append(listDevices);

const createListDevices = (divId, ulId, text) => {
    const ul = document.getElementById(`${ulId}`);
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("id", `${divId}`);
    const titleDevice = document.createElement("h3");
    titleDevice.textContent = `${text}`;
    div.append(titleDevice);
    li.append(div);
    ul.append(li);
};

const createDetailsList = (ulId, divId) => {
    const ul = document.createElement("ul");
    ul.setAttribute("id", `${ulId}`);

    const liType = document.createElement("li");
    liType.innerText = "Type:";
    const liName = document.createElement("li");
    liName.innerText = "Name:";
    const liConnection = document.createElement("li");
    liConnection.innerText = "Connection state:";

    ul.append(liType, liName, liConnection);
    const div = document.getElementById(`${divId}`)
    div.append(ul);
}

createListDevices("smartBulb", "listDevices", "Bulb");
createListDevices("smartOutlet", "listDevices", "Outlet");
createListDevices("smartTemperatureSensor", "listDevices", "Temperature Sensor");

createDetailsList("bulb", "smartBulb");
createDetailsList("outlet", "smartOutlet");
createDetailsList("temperatureSensor", "smartTemperatureSensor");