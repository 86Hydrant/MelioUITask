import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from "@material-ui/core/IconButton"
import { removeFromCart, addToCart, } from "../redux/actions/cartActions"


const useStyles = makeStyles({
    cartContainer: {
        padding: "20px",
    },
    cartItem: {
        listStyle: "none",
    }
});

function ShoppingCart() {
    let cartItems = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch();

    const classes = useStyles();



    return (
        <Paper variant="elevation" className="cart-container">
            <Grid container className={classes.cartContainer}>
                <ul>
                    {cartItems && cartItems.map(item => (
                        <li className={classes.cartItem}>{item.name}
                            <span><IconButton onClick={() => dispatch(removeFromCart(item))} size="small"><RemoveIcon /></IconButton>{item.count}<IconButton onClick={() => dispatch(addToCart(item))} size="small"><AddIcon /></IconButton></span>
                        </li>
                    ))
                    }
                </ul>
            </Grid>
        </Paper >
    )

}

export default ShoppingCart