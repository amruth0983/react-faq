import React, { Component } from "react";
import { Button } from "reactstrap";
class Section extends Component {
  state = {
    open: false,
    className: "accordion-content accordion-close",
    headingClassName: "accordion-heading",
    faqList: this.props.postsList
  };

  handleClick = () => {
    const { open } = this.state;
    if (open) {
      this.setState({
        open: false,
        className: "accordion-content accordion-close",
        headingClassName: "accordion-heading"
      });
    } else {
      this.setState({
        open: true,
        className: "accordion-content accordion-open",
        headingClassName: "accordion-heading clicked"
      });
    }
  };

  render() {
    const post = this.props.post;
    const { className } = this.state;
    const { headingClassName } = this.state;
    return (
      <div className="parent-accordion">
        <div className={headingClassName} onClick={this.handleClick}>
          <span class="arrow" />
          {post.title}
        </div>
        <div className={className}>
          <p>{post.body}</p>
          {this.state.open ? (
            <Button
              outline
              onClick={event =>
                this.props.removeFaq(
                  event,
                  this.props.post.id,
                  this.props.index
                )
              }
            >
              Remove
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Section;
