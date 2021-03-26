import React, { useEffect } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from "@material-ui/core/IconButton"
import { removeFromCart, addToCart, decrement, priceTotal } from "../redux/actions/cartActions"
import { Box, Typography } from "@material-ui/core";



const useStyles = makeStyles({
    cartContainer: {
        padding: "20px",
        minWidth: "320px",
        minHeight: "300px"
    },
    cartItemContainer: {
        listStyle: "none",
        margin: "20px 0px"


    },
    quantityButtonContainer: {
        border: "1px solid lightgray",
        borderRadius: "5px",
        marginLeft: "auto",
    },
    itemCount: {
        borderRight: "1px solid lightgray",
        borderLeft: "1px solid lightgray",
        padding: "5px 10px"
    },
    cartItem: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    buttons: {
        padding: "1px 4px",
    },
    itemTotalContainer: {
        marginTop: "auto",
        display: "block",
        width: "100%"
    },
    total: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        paddingBottom: "20px"
    }
});

function ShoppingCart() {
    let cartItems = useSelector(state => state.cart.cartItems);
    let priceTotal = useSelector(state => state.cart.itemPriceTotal);
    console.log(priceTotal)

    const dispatch = useDispatch();



    const classes = useStyles();

    const handleDecrement = (product) => {
        if (product.count === 1) {
            dispatch(removeFromCart(product))
        } else {
            dispatch(decrement(product))
        }
    }


    const limitNameLength = (name) => {
        if (name.length > 19) {
            return `${name.substr(0, 19)}...`
        } else {
            return name
        }

    }

    return (
        <Paper variant="elevation" className="cart-container">
            <Grid container className={classes.cartContainer}>
                <ul>
                    {cartItems && cartItems.map(item => (
                        <li className={classes.cartItemContainer}>
                            <Grid item direction="row" className={classes.cartItem}>
                                {limitNameLength(item.name)}
                                <span className={classes.quantityButtonContainer}>
                                    <IconButton onClick={() => handleDecrement(item)} className={classes.buttons}><RemoveIcon /></IconButton>
                                    <span className={classes.itemCount}>{item.count}</span>
                                    <IconButton onClick={() => dispatch(addToCart(item))} className={classes.buttons}><AddIcon /></IconButton>
                                </span>
                            </Grid>
                        </li>
                    ))
                    }
                </ul>

                <Box container justifyContent="space-between" className={classes.itemTotalContainer} justifySelf="end">
                    <hr />
                    <div className={classes.total}>
                        <span >Total</span>
                        <span>{cartItems.length === 0 && "0"}{priceTotal}</span>
                    </div>
                </Box>
            </Grid>
        </Paper >
    )

}

export default ShoppingCart