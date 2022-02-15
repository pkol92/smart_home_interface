const SmartDevice = [
    {
        type: 'bulb', // 'bulb', 'outlet' or 'temperatureSensor';
        id: '1',
        name: 'bulb',
        connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
    },
    {
        type: 'outlet', // 'bulb', 'outlet' or 'temperatureSensor';
        id: '2',
        name: 'outlet',
        connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
    },
    {
        type: 'temperatureSensor', // 'bulb', 'outlet' or 'temperatureSensor';
        id: '3',
        name: 'temperatureSensor',
        connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
    }
]

export default SmartDevice;
