import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    //------- AddParkForm -------//
    inputs: {
        width: "300px",
        marginTop: "50px",
        marginBottom: "20px",
        margin: "10px",
        display: 'block',
    },

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


    //--------- Details View -----------//

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

    //-------- Login Form -----//

    LoginHeader: {
        fontFamily: "oxygen, open-sans",
        paddingLeft: "20px",
        fontSize: "40px",
        marginBottom: "10px",

    },
    LogInput: {
        backgroundColor: "#FFFFFF",
        margin: "10px",
        marginLeft: "50px",
    },

    //-------- Login Page -----//




    //--------- Nav Bar ------------//

    header: {
        backgroundColor: "#C03C3C",
        position: "fixed",
    },
    logo: {
        fontFamily: "Short Stack, sans-serif",
        fontSize: "18px",
        fontWeight: 600,
        textAlign: "center",
        color: "#FFFFFF",

        // width: "120px",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "10px",
    },
    logout: {
        display: "flex",
        justifyContent: "right",
        marginLeft: "40px",
    },
    // pushes away from the nav bar
    boxMargin: {
        marginBottom: "70px"
    },

    //-------- searchBar -----//
    searchInput: {
        backgroundColor: "#FFFFFF",
    },
    //-------- Use everywhere -----//

    redBtn: {
        fontFamily: "oxygen, sans-serif",
        fontSize: "18px",
        marginLeft: "20px",
        marginTop: "10px",
      
    },
    blackBtn: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "16px",
        marginRight: "215px",
        marginTop: "20px",
    }


    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;