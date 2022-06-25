import React from 'react'

import MuiCard from '@/components/Card/MuiCard'
import TailwindCard from '@/components/Card/TailwindCard'

const data = [
    {
        id: 1,
        title: 'Mui card',
        description: 'description... ',
        image: 'https://cdn.pixabay.com/photo/2022/04/26/09/38/grapes-7157943__340.jpg',
    },
    {
        id: 2,
        title: 'Mui card',
        description: 'description... ',
        image: 'https://cdn.pixabay.com/photo/2020/09/01/21/03/sunset-5536777__340.jpg',
    },
    {
        id: 3,
        title: 'Mui card',
        description: 'description... ',
        image: 'https://cdn.pixabay.com/photo/2021/11/26/12/45/lemon-6825808__340.jpg',
    },
    {
        id: 4,
        title: 'Mui card',
        description: 'description... ',
        image: 'https://cdn.pixabay.com/photo/2021/10/27/09/36/elephants-6746586__340.jpg',
    },
    {
        id: 5,
        title: 'Mui card',
        description: 'description... ',
        image: 'https://cdn.pixabay.com/photo/2022/05/30/16/09/tatra-mountains-7231545__340.jpg',
    },
]

export default function card() {
    return (
        <>
            <div className="grid grid-cols-1 gap-2  dark:bg-slate-800">
                <div className='grid grid-cols-1 justify-center justify-items-center mb:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5' >
                    {data.map(item => <MuiCard image={item.image} key={item.id} />)}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2  dark:bg-slate-800">
                <div className='grid grid-cols-1 justify-center justify-items-center mb:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5' >
                    {data.map(item => <TailwindCard image={item.image} key={item.id} />)}
                </div>
            </div>
        </>
    )
}
