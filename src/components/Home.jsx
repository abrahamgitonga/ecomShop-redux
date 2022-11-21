import React, {useState, useRef} from 'react'
import Cardsdata from './CardData';
import './styles.css';
import {Card, CardTitle, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ADD} from '../redux/actions/Action'
import { addDoc, collection } from '@firebase/firestore'


function Home() {
    const[menuData, setMenuData] = useState(Cardsdata);
    // console.log(menuData);

    const dispatch = useDispatch();

   
    const send = (e)=>{
        dispatch(ADD(e))
    }
    const cartRef= useRef();

    const handleSave = async(e)=>{
        e.preventDefault();
        // console.log(cartRef.current.value)

    }

  return (
    <>
    <h2 className='text-center m-5'>Menu Details</h2>
    <div className='container mx-auto cards'>
      
      {menuData.map((item)=>{
       return(
       <>
        <Card onSubmit={handleSave} className='card-item'>
            <Link to={`/cart/${item.id}`}><img src={item.imgdata} width="100%" height="250"alt=''/></Link>
            <CardTitle>
                <h4>{item.rname}</h4>
            </CardTitle>
            <CardBody>
               <span>Price: ksh {item.price}</span>
             
            </CardBody>
            <Button ref={cartRef} color="info" onClick={()=>send(item)}>Add To Cart</Button>
        </Card>
       </>)
      })}
    </div>
    </>
  )
}

export default Home