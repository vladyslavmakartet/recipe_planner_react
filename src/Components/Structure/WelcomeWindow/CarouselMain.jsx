import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Item } from './Item';

export const CarouselMain = () => {
    var items = [
        {
            name: "1",
            description: "Create your recipes"
        },
        {
            name: "2",
            description: "Add ingredients"
        },
        {
            name: "3",
            description: "Make a shopping list"
        }
    ]

    return (
        <Carousel
            autoPlay={true}
            fullHeightHover={false}
            animation="slide"
            interval="4000"
            
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}