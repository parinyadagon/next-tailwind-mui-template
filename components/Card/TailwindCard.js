import React from 'react'

TailwindCard.defaultProps = {
    title: 'Mui card',
    description: 'description... ',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: '/',
    maxWidth: 300,
    maxHeight: 500,
    imageHeight: 200,
    padding: "0px",
    margin: "10px",
}

export default function TailwindCard({ title, description, image, link, alt, maxWidth, imageHeight, maxHeight, padding, margin }) {
    return (
        <div className="max-w-sm m-2 p-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-700 curser-pointer">
            <img className="rounded-t-lg w-full" src={image} />
            <div className="p-5 ">
                <h5 className=" text-2xl m-0 font-bold tracking-tight text-gray-900 dark:text-slate-300">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </a>
            </div>
        </div>
    )
}
