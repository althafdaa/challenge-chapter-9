import React from "react";

const HeaderGame = (props) => {
    return (
        <div className="flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold uppercase">Rock <br /> Paper <br /> Scissors</h1>
            <div className="bg-white text-center p-2 rounded-md w-[5rem]">
                <small className="text-cyan-600 uppercase text-sm font-medium">score</small>
                <p className="text-black text-2xl font-bold m-0 ">{props.score}</p>
            </div>
        </div>
    )
}

export default HeaderGame;