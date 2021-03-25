import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cartContainer: {
        padding: "20px",
    },
});

function ShoppingCart() {

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