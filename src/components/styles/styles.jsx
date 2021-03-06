import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    //------- About -------//
    top: {
        fontFamily: "montserrat, open-sans",
        paddingTop: '20px'
    },
    about: {
        paddingBottom: "20px",
    },
    aboutBottom: {
        paddingBottom: "80px",
    },

    //------- AddParkForm -------//
    inputs: {
        width: "300px",
        marginTop: "50px",
        marginBottom: "20px",
        margin: "10px",
        display: 'block',
    },
    addParkBtn: {
        marginBottom: "20px",
        margin: "20px"
    },

    //---------- Chips ---------//

    chipsLayout: {
        margin: "4px",
    },

    //--------- Details View -----------//

    detailsHeader: {
        fontFamily: "montserrat, open-sans",
        fontSize: "40px",
        textAlign: "center"
    },
    subHeader: {
        fontFamily: "montserrat, open-sans",
    },
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
    noFavs: {
        fontFamily: "oxygen, sans-serif",
        backgroundColor: "#fefefe",
        border: "1px solid black",
        fontSize: "24px",
        fontWeight: "700",
        textAlign: 'center',
        marginRight: "20%",
        marginTop: "20px",
        marginLeft: "20%",
        padding: "20px"
    },
    //--------- Details Edit View -----------//

    iconLayout: {
        margin: '40px'
    },
    layout: {
        margin: '20px'
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
    //do you have a profile?
    profile: {
        fontFamily: "oxygen, sans-serif",
        backgroundColor: "#fefefe",
        border: "1px solid black",
        fontSize: "20px",
        fontWeight: "700",
        marginRight: "215px",
        marginTop: "50px",
        marginLeft: "20px"
    },


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
        marginLeft: "24px",
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
        fontFamily: "oxygen, sans-serif",
        fontSize: "16px",
        marginRight: "215px",
        marginTop: "20px",
    },
    redBtnRegister: {
        fontFamily: "oxygen, sans-serif",
        fontSize: "18px",
        marginRight: "235px",
        marginTop: "20px",
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;