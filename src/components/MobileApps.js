import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
 import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
 import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';


import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from "../animations/integrationAnimation/data.json";
import CallToAction from './ui/CallToAction';


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em",
    },
    arrowContainer: {
        marginTop: "0.5em",
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        },
    },
}));


const MobileApps = ({ setValue, setSelectedIndex }) => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Grid container direction="column">
            {/* ========= _______ Block =========== */ }
            <Grid item container direction="row" justify={ matchesMD ? 'center' : undefined }
                  className={ classes.rowContainer }
                  style={ { marginTop: matchesXS ? '1em' : '2em' } }
            >

                <Hidden mdDown>
                    <Grid item className={ classes.arrowContainer }
                          style={ { marginRight: '1em', marginLeft: '-3.5em' } }
                    >
                        <IconButton style={ { backgroundColor: 'transparent' } }
                                    component={ Link } to="/customsoftware"
                                    onClick={ () => setSelectedIndex(1) }
                        >
                            <img src={ backArrow } alt="back to Custom Software Development page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={ classes.heading }>
                    <Grid item>
                        <Typography variant="h2" align={ matchesMD ? 'center' : undefined }>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Whether you want an app for your customers, employees, or
                            yourself, we can build cross-platform native solutions for any
                            part of your business process. This opens you up to a whole new
                            world of possibilities by taking advantage of phone features like
                            the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={ classes.arrowContainer }>
                        <IconButton style={ { backgroundColor: 'transparent' } }
                                    component={ Link } to="/websites"
                                    onClick={ () => setSelectedIndex(3) }
                        >
                            <img src={ forwardArrow } alt="Forward to Website Development page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction={ matchesSM ? "column" : "row" }
                  style={ { marginTop: '15em', marginBottom: '15em' } }
                  className={ classes.rowContainer }
            >
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={ matchesSM ? 'center' : undefined }>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                            Our technology enables an innate interconnection between web and
                            mobile applications, putting everything you need right in one
                            convenient place.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                            This allows you to extend your reach, reinvent interactions, and
                            develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md>
                    <Lottie options={ defaultOptions } isStopped={ true }
                            style={ { maxWidth: '20em' } }
                    />
                </Grid>

                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={ matchesSM ? 'center' : 'right' }>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                            Our cutting-edge development process allows us to create apps for
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                            This significantly reduces costs and creates a more unified brand
                            experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ----------------- Extend Functionality Section  ------------------------ */ }
            <Grid item container direction={ matchesMD ? "column" : "row" }
                  style={ { marginBottom: '15em' } }
                  className={ classes.rowContainer }
            >
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ swiss } alt="swiss army knife" />
                    </Grid>
                </Grid>

                {/* ----------------- Extend Access Section  ------------------------ */ }
                <Grid item container direction="column" md alignItems="center"
                      style={ { marginTop: matchesMD ? '10em' : 0, marginBottom: matchesMD ? '10em' : 0 } }
                >
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ access } alt="tear-one-off sign"
                             style={ { maxWidth: matchesXS ? '20em' : '28em' } }
                        />
                    </Grid>
                </Grid>

                {/* ----------------- Increase Engagement Section  ------------------------ */ }
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ engagement } alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>

            {/* ========= CallToAction Block =========== */ }
            <Grid item>
                <CallToAction setValue={ setValue } />
            </Grid>

        </Grid>
    );
};


export default MobileApps;