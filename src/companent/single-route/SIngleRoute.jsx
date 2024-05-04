import React,{useState,useEffect} from 'react'
import axios  from '../../api/index'
import { useParams } from 'react-router-dom'



const SIngleRoute = () => {
    const {id} =useParams()
     const [product,setProduct] = useState(null)
 

 useEffect(() => {
axios
.get(`/products/${id}`)
.then(arr => setProduct(arr.data))
.catch(arrr=>console.log('arr>>>>>' , arrr))

 },[])

    return (
    <div className='container'>
        <h1>salom js</h1>
        <img src={product?.image} alt="" />
    </div>
  )
}

export default SIngleRoute