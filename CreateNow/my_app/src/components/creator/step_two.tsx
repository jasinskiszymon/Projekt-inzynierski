import React, { useEffect, useState } from "react";
import { FormDataProps } from "./Final";
import styled  from 'styled-components';
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { NewHotelType } from "../../config/types/hotel";
import { hotelsCollection } from "../../config/controllers";
import "react-sweet-progress/lib/style.css";


const Wraps = styled.div`
  display: flex ;
  align-items:center ;
  flex-direction: column;
  
  
 option{
      
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
    }
  select{
    max-width: 300px;
    height: 60px;
    font-size: 17px ;
    font-weight: 600 ;
    border: 2px solid #acabab ;
    border-radius: 10px;
 
    

   
  }
  .demo-2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
}

  input:focus{
        outline: none;
        
    }
  .scroll{
    width: 570px;
    
  }
  .showbox{
    height: 30px;
    width: 150px;
    font-size: 18px;
    background:#f8f8fc ;
    border: 1px solid #f8f8fc;
    border-bottom: 2px solid black ;
    text-align: center;
  }
  .box{
    display:flex ;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    width: 600px;
    
    
  
  }
  .check{

  }
  
  `;
  export function Two({formData, setFormData}:FormDataProps){

    const [local, setLocal] = useState<NewHotelType[]>([]);
    const [loadingOne, setLoadingOne] = useState(true);
    const dbQuery_local = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "lokale"));
    console.log(formData.miasto, "KURwA TEST")
     useEffect(
       () =>
       onSnapshot(dbQuery_local, (snapshot: QuerySnapshot<DocumentData>) => {
         setLocal(
          snapshot.docs.map((doc) => {
             return {
               id: doc.id,
               ...doc.data(),
             };
           })
         );
         setLoadingOne(false)
       }),
     []
     );
     const [car, setCar] = useState<NewHotelType[]>([]);
     const [loadingTwo, setLoadingTwo] = useState(true);
     const dbQuery_car = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "samochody"));
     console.log(formData.miasto, "KURwA TEST")
      useEffect(
        () =>
        onSnapshot(dbQuery_car, (snapshot: QuerySnapshot<DocumentData>) => {
          setCar(
           snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
          setLoadingTwo(false)
        }),
      []
      );
   
  
    
     if (loadingOne) return <p></p>;
     if (loadingTwo) return <p></p>;
  
  return (
   <Wraps>

      <h3>Jaki lokal Ci odpowiada?</h3>
      <div>

        <select placeholder="Wybierz z listy" onChange={(e) => setFormData({ ...formData, lokale: e.target.value })} form="carform">
        <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
          {local.map((array) => <option value={array.nazwa}>{array.nazwa}</option>

          )};
        </select>
      </div>
      <h3>Czy będziesz będziesz potrzebował samochodu?</h3>
      <select placeholder="Wybierz z listy" onChange={(e) => setFormData({ ...formData, samochody: e.target.value })} form="carform">
      <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
        {car.map((array) => <option value={array.nazwa}>{array.nazwa}</option>

        )};

      </select>



    </Wraps>
  );
}

export default Two