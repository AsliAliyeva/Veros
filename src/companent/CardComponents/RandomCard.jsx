import  { useContext, useEffect } from 'react'
import { useState } from 'react'
import { DATA } from '../../Context/DataContex'



function RandomCard() {
   
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                        <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default RandomCard