import React, { useEffect, useState } from "react";
import { FormDataProps } from "./Final";
import styled  from 'styled-components';
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { NewHotelType } from "../../config/types/hotel";
import { hotelsCollection } from "../../config/controllers";
const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;

select{
  width: 300px;
    height: 55px;
    font-size: 17px ;
    font-weight: 600 ;
    border: 2px solid #acabab ;
    border-radius: 10px;
}
input.catering{
  height: 50px;
  width: 18px ;
  font-size:20px ;
  margin-top:-20px;
  border: 2px solid black ;
}

`;
export function Three({formData, setFormData}: FormDataProps) {

  const [band, setBand] = useState<NewHotelType[]>([]);
  const [loadingThree, setLoadingThree] = useState(true);
  const dbQuery_band = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "muzyka"));
 
   useEffect(
     () =>
     onSnapshot(dbQuery_band, (snapshot: QuerySnapshot<DocumentData>) => {
      setBand(
        snapshot.docs.map((doc) => {
           return {
             id: doc.id,
             ...doc.data(),
           };
         })
       );
       setLoadingThree(false)
     }),
   []
   );
   const [catering, setCatering] = useState<NewHotelType[]>([]);
   const [loadingFour, setLoadingFour] = useState(true);
   const dbQuery_catering = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "catering"));
    useEffect(
      () =>
      onSnapshot(dbQuery_catering, (snapshot: QuerySnapshot<DocumentData>) => {
        setCatering(
         snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
        setLoadingFour(false)
      }),
    []
    );
 

  
   if (loadingThree) return <p></p>;
   if (loadingFour) return <p></p>;



  return (
    
    <Wrapper>


  
      <h3>Jaki zespół Ci najbardziej odpowiada?</h3>
      <div>
      <select placeholder="Wybierz z listy"  onChange={(e)=> setFormData({...formData, muzyka: e.target.value})}  form="carform">
      <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
      {band.map((array) => 
      
      <option value={array.nazwa}>{array.nazwa}</option>

      )};
      </select>
      </div>
     <h3>Czy katering będzie Ci potrzeby?</h3>
     <select  placeholder="Wybierz z listy" onChange={(e)=> setFormData({...formData, catering: e.target.value})}  form="carform">
     <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
     {catering.map((array) => 

<option value={array.nazwa}>{array.nazwa}</option>

)};

    </select>
     
    




    </Wrapper>
  );
}

export default Three;