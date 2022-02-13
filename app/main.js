const divPanel = document.getElementById("deviceList");
const listDevices = document.createElement("ul");
listDevices.setAttribute("id", "listDevices")

divPanel.append(listDevices);

const createLi = (liId, ulId, text) => {
    const ul = document.getElementById(`${ulId}`);
    const li = document.createElement("li");
    const divLi = document.createElement("div");
    divLi.setAttribute("id", `${liId}`);
    const titleDevice = document.createElement("h3");
    titleDevice.textContent = `${text}`;
    divLi.append(titleDevice);
    li.append(divLi);
    ul.append(li);
};

createLi("smartBulb", "listDevices", "Bulb");
createLi("smartOutlet", "listDevices", "Outlet");
createLi("smartTemperatureSensor", "listDevices", "Temperature Sensor");
