import { Component } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {requestStopTimer} from '../../../services/StopTimer';

export default class PopUpTime extends Component {
    constructor(props) {
        super(props);
        this.state={
            "issueGitId":"",
            "togglTimer" : ""
        }
        
    }

    closeDialog = ()=>{
        this.setState({open : !this.props.open});
    }

    stopTimer = ()=>{
        alert(this.props.projectIdGit);
        requestStopTimer(this.props.projectIdGit,this.props.issueGitId(), this.props.togglTimerId).subscribe(
            data=>{this.props.stopTimer()},
            error=>{})
    }

    render() {
        return (
            <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Desea parar el cronómetro y registrar el tiempo en toggl y gitlab?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.cancelStopDialog()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.stopTimer} color="primary">
                        Finalizar
                    </Button >
                </DialogActions>
            </Dialog>
        );
    }
}