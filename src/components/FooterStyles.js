
import { makeStyles } from '@mui/styles';

export const useStyles=makeStyles({
    root: {
        backgroundColor: '#222831',
        fontFamily: '"Segoe UI"',
        height: "110px",
        marginBottom: "0px",
    },
    footer__copyRight:{
        textAlign: 'center',
        color: 'white',
    },
    icon: {
        color: 'white',
        fontSize: '40px',
        marginTop: '10px',
        marginLeft: '15px',
        padding: '6px',
        borderRadius: '50%',
        backgroundColor: '#222831',
        "&:hover": {
            color: '#111010',
            backgroundColor: 'white',
            transform: 'translateY(-2px)',
        },
    },
});
