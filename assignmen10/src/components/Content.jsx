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
            <Grid container spacing={2} sx={{ marginLeft: 1 }} pt={2} >
                <Typography variant="h4">Welcome to My Website</Typography>
                <Typography>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <tr></tr>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <tr></tr>
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <tr></tr>
                    deserunt mollit anim id est laborum."
                </Typography>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
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

                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
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

                <Grid item xs={2}>
                    <Card sx={{ maxWidth: 345 }}>
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

            </Grid>
        </Box>
    )
}

export default Content