import React, { Component } from 'react';
import axios from 'axios';
import {
    Container,
    Row,
    Spinner
} from 'reactstrap';

import Review from './Review';

class ReviewsContainer extends Component {
    state = {
        reviews: [],
        reviewsLoaded: false,
    }

    componentDidMount = () => {
        axios.get('https://sfs-web-scraper.herokuapp.com/')
          .then(res => {
            console.log(res);
            this.setState({ reviews: res.data, reviewsLoaded: true });
          })
      }

    handleRenderReviews = () => {
        if (this.state.reviewsLoaded) {
            return this.state.reviews.map((reviewState, index) => {
                return <Review reviewState={reviewState} key={index} index={index + 1} />
            })
        } else {
            return (
                <div>
                    <Spinner type="grow" color="primary" />
                    <p>Reviews loading...</p>
                </div>
            )
        }
    }

    render() {
        return(
            <Container>
                <Row style={{justifyContent: "center"}} className="mt-5">
                    {this.handleRenderReviews()}
                </Row>
            </Container>
        )
    }
}

export default ReviewsContainer;