import React from 'react';
import {
    Col,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardText
} from 'reactstrap';

export default ({reviewState, index}) => (
    <Col md={4}>
        <Card style={{margin: '0 10px', height: '400px'}}>
            <CardHeader>{index}. {reviewState.reviewTitle}</CardHeader>
            <CardBody> 
                <CardText>{reviewState.reviewContent}</CardText>
            </CardBody>
            <CardFooter>
                <CardText>Total Stars: {reviewState.starCount * 5}</CardText>
            </CardFooter>
        </Card>
    </Col>
)