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
  width: 280px;
    height: 38px;
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
}
p{
  font-style: oblique;
}
`;
export function Four({formData, setFormData}: FormDataProps) {

  const [photo, setPhoto] = useState<NewHotelType[]>([]);
  const [loadingFive, setLoadingFive] = useState(true);
  const dbQuery_photo = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "fotografia"));
 
   useEffect(
     () =>
     onSnapshot(dbQuery_photo, (snapshot: QuerySnapshot<DocumentData>) => {
      setPhoto(
        snapshot.docs.map((doc) => {
           return {
             id: doc.id,
             ...doc.data(),
           };
         })
       );
       setLoadingFive(false)
     }),
   []
   );
   const [cameraman, setCameraman] = useState<NewHotelType[]>([]);
   const [loadingSix, setLoadingSix] = useState(true);
   const dbQuery_cameraman = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "kamerzysta"));
    useEffect(
      () =>
      onSnapshot(dbQuery_cameraman, (snapshot: QuerySnapshot<DocumentData>) => {
        setCameraman(
         snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
        setLoadingSix(false)
      }),
    []
    );
    const [bonus, setBonus] = useState<NewHotelType[]>([]);
    const [loadingSeven, setLoadingSeven] = useState(true);
    const dbQuery_bonus = query(hotelsCollection, where("miasto", "==", formData.miasto),where("kategoria", "==", "dodatki"));
     useEffect(
       () =>
       onSnapshot(dbQuery_bonus, (snapshot: QuerySnapshot<DocumentData>) => {
         setBonus(
          snapshot.docs.map((doc) => {
             return {
               id: doc.id,
               ...doc.data(),
             };
           })
         ); 
         setLoadingSeven(false)
       }),
     []
     );
  

  
   if (loadingFive) return <p></p>;
   if (loadingSix) return <p></p>;
   if (loadingSeven) return <p></p>;


  return (
    
    <Wrapper>
      
      <h3>Zdjecia z twojego wydarzenia? Wybierz fotografa z listy...</h3>
      <div>
      <select placeholder="Wybierz z listy" onChange={(e)=> setFormData({...formData, fotografia: e.target.value})}  form="carform">
      <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
      {photo.map((array) => 
      
      <option value={array.nazwa}>{array.nazwa}</option>

      )};
      </select>
      </div>
      
     <h3>Jesli potrzebujesz kamerzysty wybierz go z listy?</h3>
     <select placeholder="Wybierz z listy"  onChange={(e)=> setFormData({...formData, kamerzysta: e.target.value})}  form="carform">
     <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
     {cameraman.map((array) => 

<option value={array.nazwa}>{array.nazwa}</option>

)};

    </select>
    

    <div>
     <h3>Czy chcesz coś dodatkowego?</h3>
     <select  onChange={(e)=> setFormData({...formData, dodatki: e.target.value})}  form="carform">
     <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
     {bonus.map((array) => 

<option value={array.nazwa}>{array.nazwa}</option>

)};

    </select>
    </div>
    </Wrapper>
  );
}

export default Four;