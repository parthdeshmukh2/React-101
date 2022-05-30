import React, { useEffect, useState, useRef } from 'react'

const ProductsFetch = () => {

    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(0);
    // const [initalData, ]

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            console.log({data}, 'data is coming');
            setProd([...data])
            setLoading(false)
        }).catch((e) => {
            console.log('api failed')
        })
    }, [])
    const sortDataByKey = (key, order) => {
        const sortedData = prod.sort((a,b) => a[key] - b[key]);
        setProd([...sortedData])
        console.log('data is sorted',  Math.random(), {key, sortedData})
    }

    if(loading){
        return <div>Loading...</div>
    }

  return (
    <div>
        {prod.map(({id, title, price}) => <div key={id}>
        <div >{title}</div>
        <div>{price}</div>
        </div>)}
        <button onClick={() => sortDataByKey('price')}>sort by price</button>
    </div>
  )
}

export default ProductsFetch
