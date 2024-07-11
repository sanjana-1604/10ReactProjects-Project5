import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import Listcomponent from './Components/Listcomponent'
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
function App() {
  const [contacts, setContacts]= useState([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="p-5 w-[393px] bg-[#323334] absolute h-[100vh]">
      <Navbar/>
   <Searchbar />
 
   <div className="mt-4 flex flex-col gap-3">
   {  
    contacts.map((contact)=>{      
      return <Listcomponent key={contact.id} contact={contact}/>       
    })
   }
   </div>
   
   
    
    </div>
 
  )
}

export default App