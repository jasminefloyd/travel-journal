import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore"; 

const travelData = [
    {
        id: 1,
        coverImg: "sydney.png",
        locationName: "Mount Fuji",
        country: "Japan",
        travelDates: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    },
    {
        id: 2,
        coverImg: "sydney.png",
        locationName: "Mount Fuji",
        country: "Japan",
        travelDates: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",

    },
    {
        id: 3,
        coverImg: "sydney.png",
        locationName: "Mount Fuji",
        country: "Japan",
        travelDates: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",

    },
    {
        id: 4,
        coverImg: "sydney.png",
        locationName: "Mount Fuji",
        country: "Japan",
        travelDates: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",

    },
];

const migrateData = async () => {
  const collectionRef = collection(db, "travelData");
  for (const data of travelData) {
    await addDoc(collectionRef, data);
  }
  console.log("Data migration completed!");
};

migrateData();
