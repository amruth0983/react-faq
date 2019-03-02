import React, { Component } from "react";
import axios from "../../../axios-instance";

import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import "./NewFaq.css";

class NewFaq extends Component {
  state = {
    title: "",
    content: "",
    submitted: false,
    openNewFaqModal: true
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content
    };
    axios.post("/posts", data).then(response => {
      if (response.status === 201 && response.data) {
        this.props.closeModalAndRefreshList();
      }
    });
  };

  render() {
    let form = null;

    form = (
      <form onSubmit={this.postDataHandler}>
        <div className="NewPost">
          <label>Question</label>
          <input
            type="text"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <label>Answer</label>
          <textarea
            rows="4"
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <Button outline>Add</Button>
        </div>
      </form>
    );

    return (
      <Modal isOpen={this.props.openModal} className="modal-90w delete-modal">
        <ModalHeader toggle={this.props.closeOpenFaqModal}>
          <div className="heading-title">Add FAQ</div>
        </ModalHeader>
        <ModalBody>
          <div className="create-form">{form}</div>
        </ModalBody>
      </Modal>
    );
  }
}

export default NewFaq;
