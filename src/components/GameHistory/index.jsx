import React from "react";

const GameHistory = ({data}) => {
    return (
        <div className="my-2 p-2 rounded-md bg-stone-200 min-h-[10rem] grid grid-cols-6 gap-4 shadow-lg">
            <div className="col-start-1 col-end-7 md:col-start-1 md:col-end-3">
                <img src="https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="profile" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="col-start-1 col-end-4 md:col-span-4 ml-2 flex items-start flex-col justify-center">
                <h1 className='text-lg font-bold mb-4'>BATU, GUNTING, KERTAS</h1>
                <p className='text-md font-medium'>Result : {data?.results ?? 'null'}</p>
                <p className='text-md font-medium'>Player Pick : {data?.pick ?? 'null'}</p>
                <p className='text-md font-medium'>Com Pick : {data?.comPick ?? 'null'}</p>
                <p className='text-md font-medium'>Score : <span className='font-bold'>{data?.score ?? 'null'}</span></p>
            </div>
        </div>
    )
}

export default GameHistory;