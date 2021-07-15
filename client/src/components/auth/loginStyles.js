import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    paperContainer: {
        padding: 20,
        marginTop: 30,
    },
    fields: {
        width: '100%',
        margin: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {

    },
    [theme.breakpoints.up('md')]: {
        paperContainer: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
        },
    }
}));