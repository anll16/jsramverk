import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Birthday from './Birthday';
import Modal from '@material-ui/core/Modal';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        textAlign: 'center',
    };
}



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    card: {
        minWidth: 275,
        maxWidth: '80%'
    },
    grid: {
        margin: 10,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Form = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [birthDay, setBirthday] = React.useState('');
    const [modal, setModal] = React.useState(false);

    const inputRef = React.useRef(null);
    const classes = useStyles();


    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container direction="column" align="center">
                        <ValidatorForm
                            ref={inputRef}
                            onSubmit={(value) => console.log(value)}
                            onError={errors => console.log(errors)}
                        >
                            <Grid item className={classes.grid} xs={12}>
                                <TextValidator
                                    label="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    value={name}
                                    validators={['required', 'matchRegexp:^[a-zåäöA-ZÅÄÖ]+$', 'minStringLength:2', 'maxStringLength:20']}
                                    errorMessages={['this field is required', 'name is not valid']}
                                />
                            </Grid>
                            <Grid item className={classes.grid} xs={12}>
                                <TextValidator
                                    label="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                            </Grid>
                            <Grid item className={classes.grid} xs={12}>
                                <TextValidator
                                    label="Birthday"
                                    onClick={() => setModal(true)}
                                    onChange={(e) => setBirthday(e.target.value)}
                                    name="birthday"
                                    value={birthDay}
                                    type="text"
                                    validators={['required', 'minStringLength:6', 'matchRegexp:^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))']}
                                    errorMessages={['this field is required', 'not in expected date format']}
                                />
                            </Grid>
                            <Grid item className={classes.grid} xs={12}>
                                <TextValidator
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    value={password}
                                    type="password"
                                    validators={['required', 'minStringLength:6', 'matchRegexp:^(?=.*[a-z])', 'matchRegexp:^(?=.*[A-Z])', 'matchRegexp:^(?=.*[0-9])']}
                                    errorMessages={['this field is required', 'must be 6 characters', 'must have one lowercase character', 'must have one uppercase character', 'must have one number']}
                                />
                            </Grid>
                            <Grid item className={classes.grid} xs={12}>

                                <Button type="submit">Submit</Button>
                            </Grid>
                        </ValidatorForm>
                    </Grid>
                </CardContent>
            </Card>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modal}
                onClose={() => setModal(false)}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Birthday done={(value) => {
                        setBirthday(value);
                        setModal(false);
                    }}/>
                </div>
            </Modal>
        </Container>
    )

};

export default Form;
