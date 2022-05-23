import React from 'react';
import GameHistory from '../../components/GameHistory';
import classes from './index.css'
import { useState, useEffect } from 'react';
import {  getDoc , doc} from 'firebase/firestore';
import {  db } from '../../configs/firebase.config';
import { getAuth } from 'firebase/auth';



const Profile = () => {
    const [data, setData] = useState(null)
    const auth = getAuth()

    const getData = async () => {
        const docRef = doc(db, 'users', auth?.currentUser?.uid)

        try {
            const result = await getDoc(docRef)
            

            if (result.exists()){
                setData(result?.data());
            }
            else setData(null)

        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=> {
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className="relative min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className=" relative">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="rounded-full w-48 h-48 mx-auto mb-6" />
                        </div>
                        <div className="relative ">
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input readOnly placeholder={data?.fullName} type="text" name="name" id="name" className="font-extrabold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input readOnly placeholder={data?.email}  type="email" name="email" id="email" className=" font-extrabold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                
                                <div className="mb-4">
                                    <label readOnly placeholder={data?.rank}  type="text" className="block text-gray-700 text-sm font-bold mb-2">
                                        Rank
                                    </label>
                                    <input readOnly placeholder={data?.rank}  type="email" name="email" id="email" className=" font-extrabold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4 relative ">
                                    <button disabled type="submit" className="cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0 ">
                                        Edit Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-6 md:col-end-13 mt-5 md:mt-0">
                        <div className="grid grid-cols-12 grid-rows-4 gap-4">
                            <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13 flex items-center justify-center md:justify-end">
                                <h1 className='text-xl font-medium'>Total Score :</h1>
                                <div className='relative h-[5rem] w-[5rem] bg-amber-400 border rounded-full ml-5 mr-0 my-5 shadow-md'>
                                    <h1 className='absolute left-[50%] top-[50%] tr text-xl font-medium translate-x-[-50%] translate-y-[-50%]'>{data?.totalScore}</h1>
                                </div>
                            </div>
                            <div className="col-span-12 row-span-3 pl-2">
                                <h1 className='text-lg font-medium'>History Game</h1>
                                <div className={classes}>
                                    <div className="h-[60vh] overflow-y-auto px-2 scroll">
                                    {data?.history?.map((item, idx) => {
                                        return <GameHistory data={item} key={idx} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Profile;