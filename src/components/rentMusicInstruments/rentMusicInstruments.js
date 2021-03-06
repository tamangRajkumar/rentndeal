
import React from "react";
import allInstrumetsLists from "../allVehiclesList"
import Cards from "../CardsVerticalAligned"

function rentMusicInstruments(){
    return(
        <div>
        {/* Musical Instruments section */}
        <h1 className="text-white">
            Hello world
        </h1>


        {/* Search Filters */}
        <div className="text-center">
            <h1 className="mt-28 font-bold  text-2xl">
                Search By Filters                 
            </h1>
            <div className="flex m-3 justify-center ">
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > All Instruments </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Guitars/Zooms </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Drums </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Speakers/Mic/Stands  </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Madal and Fluets </button>
      
         
            </div>


            <div className="mx-32 mt-5 space-y-10">
            {/* All Instruments Lists  */}
           {allInstrumetsLists.map(
               function(list){
                   return(
                       <Cards 
                            key={list.id}
                            name={list.name}
                            img={list.imgURL}
                            place={list.place}
                            rating={list.rating}
                            cost={list.cost}
                            href={list.forHref}



                       />
                   )
               }
           )}

            </div>



        </div>


        </div>

    );


    }


export default rentMusicInstruments;



