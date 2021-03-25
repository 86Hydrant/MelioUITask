import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/cartActions"

const useStyles = makeStyles({
    card: {
        maxWidth: "300px",
        minHeight: "440px",
        padding: "30px",
        display: "flex",
        flexDirection: "column",

    },
    title: {
        fontSize: 20,
        color: "#303f9f",
        paddingBottom: "10px"
    },

    button: {
        backgroundColor: "#56b8a7",
    },
    bottomWrapper: {
        display: "flex",
        marginTop: "auto",
        marginBottom: "15px",
        paddingTop: "10px"
    },

});

function Product(props) {

    const dispatch = useDispatch();


    const classes = useStyles();

    return (
        <Grid item >
            <Card className={classes.card} p={5}>
                <Typography className={classes.title} gutterBottom>
                    {props.name}
                </Typography>
                <Typography>
                    {props.h1}
                </Typography>

                <Typography>
                    {props.h2}
                </Typography>

                <Typography>
                    {props.h3}
                </Typography>
                <Grid container justify="space-between" alignItems="center" className={classes.bottomWrapper} >
                    <Grid item  >
                        <Typography color="textSecondary" variant="h5">
                            {props.unit} {props.price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={(e) => dispatch(addToCart(props))} size="large" variant="contained" color="primary">Add to cart</Button>
                    </Grid>
                </Grid>

            </Card>
        </Grid>
    )
}

export default Product