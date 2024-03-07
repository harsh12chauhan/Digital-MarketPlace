import axios from 'axios'

export const getAllProducts = async() => {    
    await axios.get('http://localhost:3000/allproducts')
        .then(res=>{return res.data})
        .catch(err=>console.log(err))
}
