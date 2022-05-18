import React from "react"
import { Link } from "react-router-dom"

const Leaderboard = ({data}) => {
    return (
        <Link to={data?.route ?? '/profile'}>
            <div className="my-2 p-2 rounded-md bg-white min-h-[10rem] grid grid-cols-6 gap-4 shadow-lg">
            <div className="col-start-1 col-end-7 md:col-start-1 md:col-end-3">
                <img src={data?.profileImg} alt="profile" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="col-start-1 col-end-4 md:col-span-2 ml-2 flex items-start flex-col justify-center">
                <h1 className='text-lg font-bold mb-4'>{data?.username}</h1>
                <p className='text-md font-medium'>Rank : {data?.rank}</p>
                <p className='text-md font-medium'>Pangkat : {data?.pangkat}</p>
            </div>
            <div className="col-start-5 col-end-7 md:col-span-2 flex justify-center items-center">
                <p className='text-md font-medium'>Score : <span className='font-bold'>{data?.score}</span></p>
            </div>
        </div>
        </Link>
    )
}

export default Leaderboard;