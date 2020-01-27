import React, { Component } from "react";
import "./table.scss"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { IssuesService } from "../../services/IssuesData";
import PopUpTime from "./PopupFinish/PopUpTime";
import PopUpStart from "./PopUpStart/PopUpStart";



export default class TableGit extends Component {
    constructor(props) {
        super(props);
        this.intervalId = 0;
        this.state = {
            popUpStart: false,
            popup: false,
            default: "None",
            activeProjectId: "",
            idTimerToggl: "",
            projects: {}
        }
        this.getIssuesData = this.getIssuesData.bind(this);

    }

    componentDidMount() {
        this.getIssuesData();
    }

    issueGitId = () =>{
        if(this.state.projects[this.state.activeProjectId]){
            return this.state.projects[this.state.activeProjectId].activeId;
        }else{
            return 0;
        }
    }

    getIssuesData = () => {
        IssuesService.subscribe(json => {
            Object.values(json.projects).map(row => { row.activeId = row.issues[0].id; row.time = 0; row.projectToggleId = "" });
            this.setState({ projects: json.projects });
            console.log(this.state);
        })

    }

    closeStopDialog = () => {
        let auxState = this.state;
        auxState.popup = false;
        this.setState(auxState);
    }

    //Metodos encargados de todo lo relacionado con los dropdown
    handleChangeDropwdown = (event, index) => {
        let changeData = this.state;
        Object.values(changeData)[index].activeId = event.data.value;
        this.setState(changeData);
    }

    dropdown = (issues, index, activeId) => {
        return <Select
            native

            value={{ "label": issues[activeId] !== undefined ? issues[activeId].id : this.state.default }}
            onChange={(e) => this.handleChangeDropwdown(e, index)}
            inputProps={{
                name: 'sf',
                id: 'age-native-simple',
            }}
        >

            {issues.map((issue, index) => <option value={issue.id}>{issue.id}</option>)}

        </Select>
    }

    //Métodos relacionados con el click del boton
    button = (id, index) => {
        if (!this.state.projects[id].started) {
            return <Button variant="contained" color="primary" onClick={() => this.startClick(id)}> Start</Button>
        } else {
            return <Button variant="contained" color="secondary" onClick={() => this.openStopDialog()} > Finish</Button>
        }

    }

    startClick = (id) => {
        if (this.state.activeProjectId == "") {
            let auxState = this.state;
            auxState.popUpStart = true;
            auxState.activeProjectId = id;
            this.setState(auxState);
        }
    }

    startTimer = (projectToggleId, idTimerToggl) => {
        if (this.state.activeProjectId != "") {
            let auxState = this.state;
            auxState.idTimerToggl = idTimerToggl;
            auxState.projects[this.state.activeProjectId].started = true;
            auxState.projects[this.state.activeProjectId].projectToggleId = projectToggleId;
            auxState.popUpStart = false;
            this.setState(auxState);
            this.intervalId = setInterval(() => this.timer(), 1000);
        }
    }

    timer = () => {
        let auxState = this.state;
        let activeProjectId = this.state.activeProjectId;
        console.log(activeProjectId);
        auxState.projects[activeProjectId].time = auxState.projects[activeProjectId].time + 1;
        this.setState(auxState);
    }

    timeFormat = (id) => {
        if (this.state.projects[id]) {
            return new Date(this.state.projects[id].time * 1000).toISOString().substr(11, 8);
        }

        return "00:00:00";
    }

    cancelStartDialog = () => {
        let auxState = this.state;
        auxState.popUpStart = false;
        this.setState(auxState);
    }

    openStopDialog = () => {
        let auxState = this.state;
        auxState.popup = true;
        this.setState(auxState);
    }

    cancelStopDialog = () => {
        let auxState = this.state;
        auxState.popup = false;
        this.setState(auxState);
     
    }

    stopTimer = () => {
        this.clearTimer();
        let auxState = this.state;
        auxState.popup = false;
        auxState.projects[this.state.activeProjectId].started = false;
        auxState.activeProjectId = "";
        this.setState(auxState);
    }

    clearTimer = () => {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }



    render() {
        return (
            <React.Fragment>
                {this.state.popup}
                <TableContainer style={{ width: "90%", margin: "5%", marginLeft: "10%" }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Proyecto</TableCell>
                                <TableCell align="center">Issues</TableCell>
                                <TableCell align="center">Proyecto toggl</TableCell>
                                <TableCell align="center">Tiempo</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Object.values(this.state.projects).map((row, index) => (
                                    <React.Fragment key={index}>
                                        <TableRow key={"row-" + index}>
                                            <TableCell key={"row-id-" + index}>{row.id}</TableCell>
                                            <TableCell key={"dropdown-" + index} align="center">{this.dropdown(row.issues, index, row.activeId)}</TableCell>
                                            <TableCell key={"timer-id-" + index} align="center">{this.timeFormat(row.id)}</TableCell>
                                            <TableCell key={"button-id-" + index} align="center">
                                                {this.button(row.id, index)}
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <PopUpTime open={this.state.popup} issueGitId={this.issueGitId} projectIdGit = {this.state.activeProjectId}
                            togglTimerId={this.state.idTimerToggl} cancelStopDialog={this.cancelStopDialog} 
                            stopTimer = {this.stopTimer}/>
                <PopUpStart open={this.state.popUpStart} cancelStartDialog={this.cancelStartDialog}
                    startTimer={this.startTimer} />
            </React.Fragment>
        );
    }
}