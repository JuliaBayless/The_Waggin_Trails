import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({


    //------Footer -----------------------------

    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#C03C3C'
    },
    designBar: {
        backgroundColor: '#C03C3C',
    },

    //---------Details View------------------------------------------------------------------

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
    }





    //tell heroku to make this priority styling
}, { index: 1 }); //end useStyles





export default useStyles;