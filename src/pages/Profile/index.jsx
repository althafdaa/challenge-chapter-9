import React from 'react';
import GameHistory from '../../components/GameHistory';
import classes from './index.css'

const Profile = () => {
    return (
        <main className="relative min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className=" relative">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="profile" className="rounded-full w-48 h-48 mx-auto mb-6" />
                        </div>
                        <div className="relative ">
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4 relative">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0">
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
                                    <h1 className='absolute left-[50%] top-[50%] tr text-xl font-medium translate-x-[-50%] translate-y-[-50%]'>100</h1>
                                </div>
                            </div>
                            <div className="col-span-12 row-span-3 pl-2">
                                <h1 className='text-lg font-medium'>History Game</h1>
                                <div className={classes}>
                                    <div className="h-[60vh] overflow-y-auto px-2 scroll">
                                        <GameHistory />
                                        <GameHistory />
                                        <GameHistory />
                                        <GameHistory />
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