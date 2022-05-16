import React, { useState } from "react";
import HeaderGame from "../../components/GamePlay/header";
import Table from "../../components/GamePlay/table";

const GamePlay = () => {
    const [score, setScore] = useState(0);

    const scoreHandler = (score) => {
        setScore(() => {
            return score
        });
    }
    return (
        <main className="relative min-h-screen bg-slate-600 -mt-5">
            <div className="container w-full mx-auto">
                <div className="grid grid-cols-12 grid-rows-4 gap-4 ">
                    <div className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 border-2 rounded-md p-4 m-4">
                        <HeaderGame score={score} />
                    </div>
                    <div className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 row-span-3 flex items-center justify-center">
                        <Table onPlay={scoreHandler} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GamePlay;