import React, { Component, Fragment } from "react";
import ShowTimeModal from './showTimeModal'

class Users extends Component {
constructor(props){
    super(props);
    this.state = {
        isModalOpen: false,
      };
    }
    showDuration = counter => {
        this.setState({
            isModalOpen: true
        })
    };

    toggleModal = (user) => {
        this.setState(({
            isModalOpen: !this.state.isModalOpen,
            user: user
        }));
    }

    render() {
        const {
            users,
        } = this.props;
        return (
            <Fragment>
            <div>
                {users.map(user => (
                    <button
                        className="btn btn-success m-2"
                        onClick={() => this.toggleModal(user)}
                    >
                        {user.real_name}
                    </button>
                ))}
            </div>
            <ShowTimeModal visible={this.state.isModalOpen} toggle={this.toggleModal} users={this.state.user}/>
            </Fragment>
        );
    }
}

export default Users;
