import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody } from 'reactstrap';

class ShowTimeModal extends Component {

    state = {
        timePeriod: '',
    };

    componentWillReceiveProps(nextProps){
        const {users} = nextProps;
        const date = new Date;
        const month = ((date.getMonth() + 1) <= 9) ? "0"+ (date.getMonth() + 1) : (date.getMonth() + 1);
        const dt = (date.getDate() <= 9) ? "0"+ date.getDate() : date.getDate();;
        const year = date.getFullYear();
        const fullDate = (year+"-"+month+"-"+dt);
        return (users !== undefined) ? users.activivty_periods.map((x) => {
            if(fullDate.toString() === x.start_time.split(",")[0]){
                this.setState({
                    timePeriod: x.start_time + "\n to \n" +x.end_time
                })
            }
        })
        : 
        this.setState({
            timePeriod: "Not available"
        });
    }

    showDuration = counter => {
        this.setState({
            isModalOpen: true
        })
    };

    getDuration = (e) => {
        const {users} = this.props;
        const date = e.target.value;
        return (users !== undefined) ? users.activivty_periods.map((x) => {
            if(date.toString() === x.start_time.split(",")[0]){
                this.setState({
                    timePeriod: x.start_time + "\n to \n" +x.end_time
                })
            }
        })
        : 
        this.setState({
            timePeriod: "Not available"
        });
    }

    toggleAndReset = () => {
        this.props.toggle();
    }


    render() {
        const {
            users,
            visible
        } = this.props;
        return (
            <div>
                <Card>
                <CardBody>
                <Modal isOpen={visible} toggle={this.toggleAndReset}>
                    <ModalHeader toggle={this.toggleAndReset}>Modal title</ModalHeader>
                    <ModalBody>
                            <label for="timePeriod">Get Time Period:</label>
                            <input type="date" id="timePeriod" name="timePeriod" onChange ={this.getDuration}/>
                            <div>{this.state.timePeriod}</div>
                            {/* <input type="submit" /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleAndReset}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                </CardBody>
                </Card>
            </div>
        );
    }
}

export default ShowTimeModal;
