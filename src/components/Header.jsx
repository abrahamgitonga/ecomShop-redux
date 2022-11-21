import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
   Card,
  CardTitle,
  Table
} from "reactstrap";
import "./styles.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from '@mui/material/Badge';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {FaTrash} from 'react-icons/fa';
import {Link, useParams} from 'react-router-dom';
import {DLT} from '../redux/actions/Action';


function Header() {
  const [price, setPrice] = useState(0);
  console.log(price);
  let dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = useSelector((state) => state.cartReducer.carts);

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  const total = () => 
  {
    let price = 0;
    getData.map((el,id)=>{
      return price += el.price
    });
    setPrice(price);
  }

  useEffect(()=> {
    total();
  }, [total])


  return (
    <div>
      <Navbar color="dark" className="header">
        <h3 className="text-white">E SHOP</h3>
        <NavItem>
          <Link to="/" className="text-white">
            Home
          </Link>
        </NavItem>

        <NavbarText>
          <Badge badgeContent={getData ? getData.length : 0} color="success">
            <AiOutlineShoppingCart
              className="cart"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Badge>
        </NavbarText>
      </Navbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Card>
            <CardTitle>
              {
                getData.length>0 ? <div style={{ width: "24rem", padding: 10 }}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getData.map((item)=>{
                          return(<><tr>
                            <td><Link to={`/cart/${item.id}`}><img src={item.imgdata} width="120" alt=""/></Link></td>
                            <td>
                              <p>{item.rname}</p>
                              <p>Price: ksh{item.price}</p>
                              <p>Quantity: {item.qnty}</p>
                              <p onClick={()=>dlt(item.id)}><FaTrash className="trash"  /></p>
                              </td>
                           
                          </tr>
                          <tr>
                            
                            <td>Total: ksh{price}</td>
                            </tr></>)
                        })
                      }
                    </tbody>
                  </Table>
                </div>
                :<h4 className="p-2">No items in cart!</h4>
              }
            </CardTitle>
          </Card>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
