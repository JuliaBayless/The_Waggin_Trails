import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({


    //-------- Footer -----------------------------

    stickToBottom: {
        backgroundColor: '#C03C3C',
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },


    //--------- Details View------------------------------------------------------------------

    root: {
        flexGrow: 1,
        width: '100%'
    },
    rowLayout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center' // To be vertically aligned
    },
    iconLayout: {
        margin: '40px'
    },
    layout: {
        margin: '20px'
    },


    //--------- Nav Bar --------------------------------------------------

    header: {
        backgroundColor: "#C03C3C",
        position: "fixed",
    },
    logo: {
        fontFamily: "Short Stack, sans-serif",
        fontWeight: 600,
        textAlign: "left",
        color: "#FFFFFF",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "10px",
        // marginLeft: "38px",
        // marginRight: "10px"
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
        // marginRight: "50px"
      },


    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;