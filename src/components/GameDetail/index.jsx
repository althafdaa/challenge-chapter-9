import React, { useEffect, useState } from 'react';
import classes from './index.css'
import { Link } from 'react-router-dom';
import Leaderboard from '../Leaderboard';
import { db } from "../../configs/firebase.config"
import { collection, getDocs } from "firebase/firestore"
import { query, limit, orderBy } from 'firebase/firestore';


    let users = []
    // console.log("satu", users);
    const colRef = collection(db, 'users')
    // getDocs(colRef)
    //     .then((snapshot) => {
    //     // console.log(snapshot.docs)
            
    //     snapshot.docs.forEach((doc)=> {
    //     users.push({...doc.data(), id: doc.id })
    //     // const q = query(colRef, orderBy("userName"), limit(2));
    //     // console.log(q);
    //     })
    //     // console.log("dua", users);
    // })  
    //     .catch((err) => {
    //     console.log("error", err.messege);
    // });

const GameDetail = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const q = query(colRef, orderBy("score", "desc"), limit(2));
        // console.log(q, "ini q");
        const data = await getDocs(q)
        setData(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }));
    }
    // console.log(getData);
    
   
    useEffect(()=> {
        getData()
    }, [])
    console.log(users);     


    return (
        <main className="relative min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className="relative text-center text-4xl mb-5">
                            <span>Rock, Papper, Scissors</span>
                        </div>
                        <div className=" relative">
                            <img src="https://user-images.githubusercontent.com/92288572/168407755-d2e3e9f0-fcdc-4a0d-8bb4-215490345f6a.jpg" 
                            alt="profile" 
                            className="rounded w-96 h-48 mx-auto mb-12" />
                        </div>
                        <div className="relative ">
                            <div className="text-center bg-[#f1f1f1] rounded ">
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing 
                                    elit. Pariatur ipsum suscipit quis rerum, 
                                    vel voluptatum, sint laudantium fugit amet 
                                    quo libero eos necessitatibus odio et officia,
                                    odit doloribus dolorem neque.
                                </span>
                            </div>
                            <div className="mb-4 mt-12 relative">
                            <Link to="/game">
                                <button className="px-12 py-2 mx-[6rem] bg-yellow-600 rounded-full shadow-lg text-white font-bold text-[12px] lg:text-xl hover:text-black transition-all">
                                    PLAY NOW
                                </button>
                            </Link>
                             </div>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-6 md:col-end-13 mt-5 md:mt-0">
                        <div className="grid grid-cols-12 grid-rows-4 gap-4">
                            <div className="col-span-12 row-span-3 pl-2">
                                <h1 className='text-lg text-center font-bold'>Leaderboard Game</h1>
                                <div className={classes}>
                                    <div className="h-[60vh] overflow-y-auto px-2 scroll">
                                        {data?.map((item, idx) => {
                                        return <Leaderboard data={item} key={idx} />;
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

export default GameDetail;