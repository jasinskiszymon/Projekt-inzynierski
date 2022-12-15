import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    
  } from "firebase/firestore";
  import { NavigateFunction } from "react-router-dom";
  // This is tree shaking from firestore
  import { AddHotelType } from "../config/types/hotel";
  import { AddEventType } from "../config/types/event";
  //import { AddHotelType } from "../types/hotel";
  import { app } from "./config";
  
  export const firestore = getFirestore(app);
  
  // HOTELS COLLECTION
  export const hotelsCollection = collection(firestore, "offers");

 
  export const addHotel = async (hotelData: AddHotelType) => {
    const newHotel = await addDoc(hotelsCollection, { ...hotelData });
    console.log(`The new hotel was created at ${newHotel.path}`);
  };
  
  export const deleteHotel = async (
    id: string | undefined,
    navigate: NavigateFunction
  ) => {
    const document = doc(firestore, `offers/${id}`);
    await deleteDoc(document);
    
    console.log("The hotel has now been deleted",document);
    navigate("/");
  };

   // EVENT COLLECTION
  export const eventsCollection = collection(firestore, "events");
  
  export const addEvent = async (eventData: AddEventType) => {
    const newEvent = await addDoc(eventsCollection, { ...eventData });
    console.log(`The new event was created at ${newEvent.path}`);
  };
  export const deleteEvent = async (
    id: string | undefined,
    navigate: NavigateFunction
  ) => {
    const document = doc(firestore, `events/${id}`);
    await deleteDoc(document);
    
    console.log("The hotel has now been deleted",document);
    navigate("/");
  };
  
//   // EDIT A DOCUMENT / DESCRIPTION
//   export const updateHotel = async (id: string | undefined, docData: any) => {
//     const getHotel = doc(firestore, `hotels/${id}`);
//     await setDoc(getHotel, docData, { merge: true });
//     console.log("The value has been written to the database");
//   };