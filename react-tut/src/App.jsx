import React from 'react'
import axios from 'axios'
const App = () => {
    const getProducts = () => {
        console.log('Function called')
        const api = 'https://fakestoreapi.com/products'
        axios
            .get(api).then(products => {
                console.log(products)

            })
            .catch((err) => console.log(err))
    }

    const addProducts = () => {
        console.log('Post function called');
        const api = 'https://fakestoreapi.com/products'
        axios
            .post(api, {
                title: 'Juhi Chawala',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            })
            .then(() => {
                console.log('Post Done')
            })
            .catch((err) => {
                console.log("Got Error")
            })
    }
    return (

        <div>
            {addProducts()}
            {getProducts()}
        </div>
    )
}

export default App
