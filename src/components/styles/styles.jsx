import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    //------- FavoritesItems --------//

    cardLayout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center' // To be vertically aligned
    },
    cardTitle: {
        fontFamily: "Short Stack, sans-serif",
        fontSize: "38px",
        fontWeight: 600,
    },


    //-------- Footer ---------//

    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },


    //--------- Details View-----------//

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


    //--------- Nav Bar ------------//

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
    },
    logout: {
        display: "flex",
        justifyContent: "left",
        marginLeft: "50px"
    },
    // pushes away from the nav bar
    boxMargin: {
        marginBottom: "70px"
    }

    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;