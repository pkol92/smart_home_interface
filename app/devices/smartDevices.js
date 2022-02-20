// import { createServer, Model } from "miragejs"

// createServer({
//     models: {
//       device: Model,
//     },

//     routes() {
//         this.namespace = "api/v1"
    
//         this.get("/devices", (schema, request) => {
//           return schema.devices.all()
//         })

//         this.get("/devices/:id")
//     },

//     seeds(server) {
//         server.create("device",
//             {
//                 type: 'bulb',
//                 id: '1',
//                 name: 'bulb',
//                 connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
//                 isTurnedOn: 'true',
//                 brightness: 50, // <0, 100>
//                 color: 'red' // in the CSS formats
//             })
//         server.create("device",
//             {
//                 type: 'outlet',
//                 id: '2',
//                 name: 'outlet',
//                 connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
//                 isTurnedOn: 'false',
//                 powerConsumption: 3 // in watts
//             })
//         server.create("device",
//             {
//                 type: 'temperatureSensor',
//                 id: '3',
//                 name: 'temperatureSensor',
//                 connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
//                 temperature: 67 // in Celsius
//             })   
//     },
// })