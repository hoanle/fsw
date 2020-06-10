import React, { useEffect } from "react";
import './Detail.css';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import JobApis from './../../apis/JobApis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faMapPin, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

export default function Detail(props: any) {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const { loading, jobs, job, error } = useSelector((state: any) => state.jobReducer);

    const getJobDetail = () => {
        JobApis.getJobDetail(dispatch, id);
    }

    console.log(id);
    useEffect(() => {
        getJobDetail();
    }, [])

    return (
        <Container className="Detail-container">
            {
                job == null
                    ? <div></div>
                    : <Row>
                        <Col md={2}>
                            <Image className="JobItem-image" src="https://image.vietstock.vn/2016/10/26/inc-la-gi_1751529.png" />
                        </Col>
                        <Col md={10} className="Detail-col-right">
                            <h2>{job.title}</h2>
                            <div>
                                {
                                    job.tags.map((t:string) => {
                                        return <Button variant="outline-secondary" className="Detail-tag">{t}</Button>
                                    })
                                }
                            </div>
                            <div className="Detail-font-awesome">
                                <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
                            </div>

                            <div className="Detail-font-awesome">
                                <FontAwesomeIcon icon={faMapPin} /> {job.city} District {job.district}
                            </div>
                            <div className="Detail-font-awesome">
                                <FontAwesomeIcon icon={faCalendar} />  <Moment fromNow>{job.time}</Moment>
                            </div>
                            <div className="Detail-header">Benefit</div>
                            <ul>
                                {
                                    job.benefits.map((b:string) => {
                                        return <li className="Detail-li">{b}</li>
                                    })
                                }
                            </ul>
                            <div className="Detail-header">Description</div>
                            <div className="Detail-description">{job.description}</div>
                            <Button variant="danger" className="Detail-apply-button">Apply Now</Button>
                        </Col>
                    </Row>
            }

        </Container>
    );
}