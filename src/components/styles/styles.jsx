import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    //---------- Chips ---------//

    chipsLayout: {
        margin: "2px",
    },

    //------ FavoritesHome --------//

    welcome: {
        fontFamily: "oxygen, open-sans",
        marginLeft: "8px",
        fontSize: "20px",
    },
    headerFav: {
        fontFamily: "oxygen",
        fontSize: "38px",
    },
    // favHeader: {
    //     backgroundColor: 'white',
    //     position: 'fixed',
    //     top: "20px",
       
    //     paddingTop: '40px',
    //     paddingBottom: '40px',
    //     width: "100%",
    // },
    listContainer: {
        height: "20px",
        paddingTop: "20px"
    },

    //------- FavoritesItems --------//

    cardLayout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // To be vertically aligned 
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
        fontSize: "16px",
        fontWeight: 600,
        textAlign: "center",
        color: "#FFFFFF",
        width: "120px",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "10px",
    },
    logout: {
        display: "flex",
        justifyContent: "left",
        marginLeft: "140px",
    },
    // pushes away from the nav bar
    boxMargin: {
        marginBottom: "70px"
    }

    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;