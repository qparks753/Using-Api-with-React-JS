import React from 'react';
import { useState } from 'react';
import logo from "../src/components/logo.png";
import '../src/App.css';
import Films from "./components/Films";
import People from "./components/People";




const App = ()=>{

    function Home(){
        return(
          <section className='home-showcase'>
           <h3 >Welcome to the Studio Ghibli Api Lab</h3>
           <p>This lab highlights the usage of React and Api skills. It uses conditional rendering,
                data fetching from a REST Api through using a useEffect hook, manages multiple array maps using
                an useState hook, and Bootstrap for style. Please click the buttons to view resources.  </p>
       </section>
    )};

    const [selected, setSelected] = useState('');

    const showSelected = () => {
        switch(selected) {
          case 'home':
            return  <Home />;
          case 'people':
            return  <People />;
          case 'films':
            return  <Films />;
          default:
            return <Home />;
       }
    }



    return (

   <div>
       <section className='image-holder'>
       <img className='home-image' src={logo} alt="Studio Ghibli Logo" />
       </section>
       <section className='home-btns'>
           <button onClick={() => setSelected('home')}>Home</button>
           <button onClick={() => setSelected('films')}>Films</button>
           <button onClick={() => setSelected('people')}>People</button>
       </section>
       <section>
           
             {showSelected()} 
         
       </section>
       

       
       
       {/* <Home /> */}
       {/* <Films /> */}
       {/* <People /> */}

   </div>
    );
};


export default App;