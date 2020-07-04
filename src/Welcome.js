import React from "react";
import * as MUI from "@material-ui/core/";
import Registration from "./Registration";

// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import TypoGraphy from "@material-ui/core/Typography";

const {
    CssBaseline,
    Box,
    Button,
    AppBar,
    Toolbar,
    Typography,
    TextField,
    InputAdornment,
    withStyles,
    createMuiTheme,
    MuiThemeProvider,
} = MUI;

const styles = (theme) => ({
    container: {
        backgroundColor: "blue",
        color: "red",
        width: "75%",
        height: 5 * theme.spacing.unit,
    },
});

const theme = createMuiTheme({
    palette: {
        primary1Color: "#455a64",
    },
});

function Welcome(props) {
    const classes = props.classes;

    return (
        // <MuiThemeProvider theme={theme}>
        <div>
            <AppBar> Heyhey</AppBar>
            <Typography variant="title" align="center" gutterBottom>
                Nightowls
            </Typography>

            <Registration />
        </div>
        // </MuiThemeProvider>
    );
}

export default withStyles(styles)(Welcome);