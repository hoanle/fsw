import React from 'react';
import Job from '../../types/Job';
import { Card, Image, Col, Button } from 'react-bootstrap';
import './JobItem.css';
import Moment from 'react-moment';
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

type JobItemProp = {
    job: Job, 
    user: boolean
}
const JobItem = (props: JobItemProp) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/job/${props.job.id}`);
    }

    return (
        <div onClick={handleClick} className={props.job.isHotjob ? "JobItem-card-hot" : "JobItem-card"}>
            <Image className="JobItem-image" src="https://image.vietstock.vn/2016/10/26/inc-la-gi_1751529.png" />
            <Col md={8} xs={10} className="JobItem-col">
                <Card.Title> {props.job.title}</Card.Title>
                {
                    props.user 
                    ? <div className="JobItem-signin-salary"><FontAwesomeIcon icon={faDollarSign} /> {props.job.salary}</div>
                    : <div className="JobItem-signin-salary"><FontAwesomeIcon icon={faDollarSign} /> <Link to="/login">Sign in to view</Link></div> 
                }

                <ul>
                    {
                        props.job.benefits.map(b => {
                            return <li className="JobItem-li" key={b}>{b}</li>
                        })
                    }
                </ul>

                <p className="JobItem-description">
                    {props.job.description}
                </p>
                <div>
                    {
                        props.job.tags.map(t => {
                            return <Button variant="outline-secondary" className="JobItem-tag" key={t}>{t}</Button>
                        })
                    }
                </div>
            </Col>
            <Col md={2} sm={0} className="d-md-block d-sm-none">
                <div className="JobItem-col-right">
                    <div>
                        {
                            props.job.isHotjob ? <label className="JobItem-hotjob">Hot Job</label> : ""
                        }
                    </div>

                    <div>
                        {
                            `${props.job.city}`
                        }
                        <br />
                        {
                            `District ${props.job.district}`
                        }
                    </div>
                    <div>
                        {
                            <Moment fromNow>{props.job.time}</Moment>
                        }
                    </div>
                </div>

            </Col>
        </div>)
}

export default JobItem;