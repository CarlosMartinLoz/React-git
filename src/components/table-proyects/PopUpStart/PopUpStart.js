import { Component } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { requestStartTimer } from "../../../services/StartTimer";
import { checkInput ,numbersOnly,allowEverything} from "../../../services/checkInput";
import { makeStyles } from "@material-ui/core/styles";

export default class PopUpStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            togglProyectId: "",
            descripcion: ""
        };
    }

     useStyles = makeStyles(theme => ({
        inputRoot: {
            padding: "200px"
        }
      }));

    startTimer = () => {
        requestStartTimer(this.state.togglProyectId, this.state.descripcion).subscribe(
            response => { this.props.startTimer(this.state.togglProyectId, response.idTimer) },
            error => { });
    }

    textTogglIdChange = (event) => {
        if (checkInput(12, event.target.value,numbersOnly)) {
            let auxState = this.state;
            auxState.togglProyectId = event.target.value;
            this.setState(auxState);
        }

    }

    textDescriptionchange = (event) => {
        if (checkInput(50, event.target.value,allowEverything)) {
            let auxState = this.state;
            auxState.descripcion = event.target.value;
            this.setState(auxState);
        }
    }

    render() {
        const classes = this.useStyles;
        return (
            <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Para empezar el cronómetro introduzca la id del proyecto de Toggl.
                </DialogContentText>
                <Grid container alignItems="flex-start" justify="center" direction="row">

                        <TextField
                            margin="dense"
                            classes={classes}
                            id="idToggl"
                            label="ID Toggle"
                            type="email"
                            inputProps={{min: 0, style: { textAlign: 'center' }}}
                            value={this.state.togglProyectId}
                            onChange={this.textTogglIdChange}
                            style={{marginRight: '10px'}}
                        />

                        <TextField
                            margin="dense"
                            classes={classes}
                            id="name"
                            label="Descripción"
                            type="email"
                            style={{marginRight: '10px'}}
                            inputProps={{min: 0, style: { textAlign: 'center' }}}
                            value={this.state.descripcion}
                            onChange={this.textDescriptionchange}
                        />
                        </Grid>
              

                </DialogContent>
                <DialogActions>
                    <Button onClick={ this.props.cancelStartDialog} color="primary">
                        Cancel
                </Button>
                    <Button color="primary" onClick={this.startTimer}>
                        Aceptar
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}