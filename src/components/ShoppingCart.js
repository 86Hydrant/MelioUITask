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
    let productsInCart = useSelector(state => state.cartItems);
    const dispatch = useDispatch;

    const classes = useStyles();

    return (
        <Paper variant="elevation" className="cart-container">
            <Grid container className={classes.cartContainer}>
                <p>Hello Product</p>
            </Grid>
        </Paper>
    )

}

export default ShoppingCart