import React, { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

// button color? #56b8a7
const useStyles = makeStyles({

    root: {
        minWidth: 275,
    },
    card: {
        maxWidth: "300px",
        minHeight: "400px",
        padding: "15px",

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
    priceWrapper: {
        alignSelf: "flex-end",
    },
});

function Products() {
    const [data, setData] = useState(null);
    // const { loading, setLoading } = useState(false)

    const classes = useStyles();
    const fetchData = async () => {
        const url = "https://falconx-development.coffee4tech.net/products/public?country=GB"
        const response = await fetch(url);
        const json = await response.json();

        console.log(data)
        setData(json);

    };

    useEffect(() => {
        fetchData();
    }, []);


    console.log(data);

    return (
        <Container maxWidth="lg">
            <Grid container
                direction="row"
                justify="space-around"
                alignItems="stretch"
                spacing={5}
                wrap="wrap">
                {/* Only render if the data is already there*/}
                {data && data.docs.map(product => (

                    <Grid item >
                        <Card key={product.id} className={classes.card}>
                            <CardContent>
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

                                <Grid container justify="space-between" alignItems="center" className={classes.priceWrapper} >
                                    <Grid item  >
                                        <Typography>
                                            {product.unit} {product.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">Add to cart</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>



                        </Card>
                    </Grid>
                ))
                }
            </Grid>
        </Container>
    )
}

export default Products