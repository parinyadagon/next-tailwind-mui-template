import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

MuiCard.defaultProps = {
    title: 'Mui card',
    description: 'description...   ffffffffffffff fffffffffffffffffd ffffffffffffff fffffffff ffffffffffff fffffffffffff ffffffffffffffffffffffffffff ffffff  fffffffffffffffffffff fffffffffffffffffff',
    image: 'https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_960_720.jpg',
    link: '/',
    maxWidth: 300,
    maxHeight: 550,
    imageHeight: 350,
    padding: "0px",
    margin: "10px",
}

export default function MuiCard({ title, description, image, link, alt, maxWidth, imageHeight, maxHeight, padding, margin }) {
    return (
        <Card sx={{ maxWidth: maxWidth, maxHeight: maxHeight, padding: padding, margin: margin }} className="dark:bg-slate-600 rounded-lg shadow-lg  drop-shadow-xl ">
            <CardActionArea sx={{ height: '100%' }}>
                {/* <div className="aspect-square"> */}
                <CardMedia
                    component="img"
                    max-height={imageHeight}
                    image={image}
                    alt={alt}
                />
                {/* </div> */}
                <CardContent >
                    <div className="font-bold font-sans antialiased text-sm lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl pb-2 dark:text-slate-300">
                        {title}
                    </div>
                    <div className="font-normal font-sans antialiased text-xs md:text-sm lg:text-sm xl:text-md 2xl:text-md 3xl:text-md text-ellipsis max-h-24 overflow-hidden leading-normal text-left dark:text-gray-400">
                        {description}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}

