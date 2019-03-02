import React, { Component } from "react";
import axios from "../../axios-instance";

import FaqContent from "../../components/FaqContent";
import AddFaq from "./NewFaq/NewFaq";
import AuxHoc from "../../hoc/Aux-hoc/Aux-hoc";

import { Button } from "reactstrap";
import "./Faq.css";

class Faq extends Component {
  state = {
    posts: null,
    loading: true,
    error: null,
    openAddFaqModal: false
  };

  componentDidMount() {
    this.getFaqList();
  }

  getFaqList = () => {
    axios
      .get(`/posts`)
      .then(res => {
        const posts = res.data;

        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        });
      });
  };

  renderLoading = () => {
    return (
      <div className="accordion-container">
        <h1 className="error">Loading...</h1>
      </div>
    );
  };

  renderError = () => {
    return <div>Something went wrong, Will be right back.</div>;
  };

  openAddFaqModal = () => {
    this.setState({ openAddFaqModal: true });
  };

  closeOpenFaqModal = () => {
    this.setState({ openAddFaqModal: false });
  };

  closeModalAndRefreshList = () => {
    this.closeOpenFaqModal();
    this.getFaqList();
  };

  removeFaq = (event, id, faqIndex) => {
    axios.delete("/posts/" + id).then(response => {
      if (response.status === 200) {
        this.setState({
          posts: this.state.posts.filter((faq, index) => index !== faqIndex)
        });
      }
    });
  };

  renderPosts = () => {
    const { posts, error } = this.state;

    if (error) {
      this.renderError();
    }

    return (
      <div className="accordion-container">
        <div className="faq-header">
          <h1 class="faq-title">Frequently Asked Questions</h1>
          <Button onClick={this.openAddFaqModal}>Add</Button>
        </div>
        <div className="faq-list">
          {posts.map((post, index) => (
            <FaqContent
              post={post}
              key={post.id}
              index={index}
              removeFaq={this.removeFaq}
            />
          ))}
        </div>
        {this.state.openAddFaqModal ? (
          <AddFaq
            openModal={this.state.openAddFaqModal}
            closeOpenFaqModal={this.closeOpenFaqModal}
            closeModalAndRefreshList={this.closeModalAndRefreshList}
          />
        ) : null}
      </div>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <AuxHoc>
        <div>{loading ? this.renderLoading() : this.renderPosts()}</div>
      </AuxHoc>
    );
  }
}

export default Faq;
