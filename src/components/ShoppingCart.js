import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"

const useStyles = makeStyles({
    cartContainer: {
        padding: "20px",
    },
});

function ShoppingCart() {
    let cartItems = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch;

    console.log(cartItems)

    const classes = useStyles();

    return (
        <Paper variant="elevation" className="cart-container">
            <Grid container className={classes.cartContainer}>
                <ul>
                    {cartItems && cartItems.map(item => (
                        <li>{item.name}</li>
                    ))
                    }
                </ul>
            </Grid>
        </Paper>
    )

}

export default ShoppingCart