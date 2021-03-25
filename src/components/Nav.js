import React from "react"
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import ShoppingCart from "./ShoppingCart"

const useStyles = makeStyles((theme) => ({
    shoppingBasket: {
        marginLeft: "auto",
    },

}));


function Nav() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography>Melio UI Task</Typography>
                <IconButton edge="end" className={classes.shoppingBasket}>
                    <ShoppingBasketOutlinedIcon style={{ color: grey[50] }} />
                </IconButton>
                <ShoppingCart />
            </Toolbar>
        </AppBar>
    )
}

export default Nav