import React, { useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";


// button color? #56b8a7
const useStyles = makeStyles({

    root: {
        minWidth: 275,
    },
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
    pos: {
        marginBottom: 12,
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
    wrapper: {
        paddingTop: "150px",
    },
});

function Products() {
    const productsData = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const classes = useStyles();


    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container
                direction="row"
                justify="space-around"
                alignItems="stretch"
                spacing={5}
                wrap="wrap">
                {/* Only render if the data is already there, make a card for every product*/}
                {productsData && productsData.docs.map(product => (
                    <Grid item key={product.id}>
                        <Card className={classes.card} p={5}>
                            <Typography className={classes.title} gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography>
                                {product.h1}
                            </Typography>

                            <Typography>
                                {product.h2}
                            </Typography>

                            <Typography>
                                {product.h3}
                            </Typography>
                            <Grid container justify="space-between" alignItems="center" className={classes.bottomWrapper} >
                                <Grid item  >
                                    <Typography color="textSecondary" variant="h5">
                                        {product.unit} {product.price}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button size="large" variant="contained" color="primary">Add to cart</Button>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                ))
                }
            </Grid>
        </Container >
    )
}

export default Products