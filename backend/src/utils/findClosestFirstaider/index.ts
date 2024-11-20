// import UserModel from '../../models/user.model';
// import noble from "noble";
// import wifi from "node-wifi";

// import { ObjectId } from "mongodb";

// export interface FirstAider {
//     _id?: ObjectId;
//     name: string;
//     bluetoothAddress: string;
//     wifiSSID: string;
//     location?: { lat: number, lng: number };
// }

// wifi.init({ iface: null });

// export const findFirstAiderByLocation = async (location: { lat: number, lng: number }): Promise<FirstAider | null> => {
//     // Logic to find the closest first aider using Bluetooth and WiFi data

//     const getFirstAiders = async (): Promise<any[]> => {
//         const firstAiders = await UserModel.find({ role: "FIRST_AIDER" });
//         if (!firstAiders || firstAiders.length < 1) {
//             return null;
//         }
//         return firstAiders
//     };

//     const firstAiders: FirstAider[] = await getFirstAiders();

//     // Scan for Bluetooth devices
//     noble.startScanning([], true);
//     const nearbyFirstAiders: FirstAider[] = [];

//     noble.on('discover', (peripheral) => {
//         const firstAider = firstAiders.find(fa => fa.bluetoothAddress === peripheral.address);
//         if (firstAider) {
//             nearbyFirstAiders.push(firstAider);
//         }
//     });

//     // Scan for WiFi networks
//     const networks = await wifi.scan();
//     const wifiFirstAiders = firstAiders.filter(fa => networks.some(net => net.ssid === fa.wifiSSID));

//     // Combine results and find the closest one
//     const allNearbyFirstAiders = [...nearbyFirstAiders, ...wifiFirstAiders];

//     return allNearbyFirstAiders.length > 0 ? allNearbyFirstAiders[0] : null;
// };

// function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
//     const R = 6371; // Radius of the Earth in km
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLon = (lon2 - lon1) * Math.PI / 180;
//     const a =
//         0.5 - Math.cos(dLat) / 2 +
//         Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//         (1 - Math.cos(dLon)) / 2;

//     return R * 2 * Math.asin(Math.sqrt(a));
// }
