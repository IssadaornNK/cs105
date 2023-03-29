import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Grid,
} from "@mui/material";
function Content() {
    return (
        <Box>
            <Grid container spacing={2} pt={2} >
                <Grid item xs={12}>
                    <Typography variant="h4">Welcome to My Website</Typography>
                    <Typography variant="body1" gutterBottom>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Card sx={{ maxWidth: { xs: 500,sm:800, md: 350 }}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="butterfly"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <tr></tr>
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel <tr></tr>
                                    pretium lectus quam id leo in. Elit eget gravida cum sociis natoque <tr></tr>
                                    penatibus et magnis dis.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item sm={6} md={6}xs={12}>
                    <Card sx={{ maxWidth: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1623474237394-055b5c5b9095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
                                alt="blue butterfly"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <tr></tr>
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel <tr></tr>
                                    pretium lectus quam id leo in. Elit eget gravida cum sociis natoque <tr></tr>
                                    penatibus et magnis dis.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item sm={6} md={6}xs={12}>
                    <Card sx={{ maxWidth: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1546345414-16d37d6baa05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                                alt="butterfly"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <tr></tr>
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel <tr></tr>
                                    pretium lectus quam id leo in. Elit eget gravida cum sociis natoque <tr></tr>
                                    penatibus et magnis dis.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Content