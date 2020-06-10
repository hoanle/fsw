import React, { useEffect, useState, useRef } from "react";
import './Jobs.css';
import { Button, Row, Container, Col } from 'react-bootstrap';
import JobApis from './../../apis/JobApis';
import Job from "../../types/Job";
import JobItem from "../../components/JobItem/JobItem";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const QUERYSTR_PREFIX = "q";

export default function Jobs() {
    let query = useQuery();
    let history = useHistory();

    const dispatch = useDispatch();
    const loggedIn = useSelector((state: any) => state.authenticationReducer.loggedIn)
    
    const searchRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLSelectElement>(null);

    const { loading, jobs, job, error } = useSelector((state: any) => state.jobReducer);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const getJobs = () => {
        JobApis.getJobList(dispatch);
    }

    const onSearch = () => {
        console.log("onsearch");
        if (searchRef.current != null && cityRef.current != null) {
            let keyword = searchRef.current.value
            let city = cityRef.current.value
            dispatch({type: 'FILTER_JOB', city: city, keyword: keyword})
            history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
        } else {
            console.log("null");
        }
    }

    const tagClick = (e: any) => {
        if (searchRef.current != null) {
            searchRef.current.value = e.target.value;
        }
    }

    useEffect(() => {
        getJobs();
    }, [])
    return (
        <div className="Jobs-container">
            <Container className="col-9">
                <Row>
                    <Col className="Jobs-col no-padding">
                        <div style={{ height: '30px' }} />
                        <div className="Jobs-header">1,355 IT Jobs For Chất Developers</div>
                        <div style={{ height: '30px' }} />
                        <Row>
                            <input type="text" ref={searchRef} placeholder="Search jobs" className="col-md-7 col-sm-12 margin-left-right Jobs-box" />
                            <select ref={cityRef} className="col-md-2 col-sm-12 margin-left-right Jobs-box">
                                <option value="All">All cities</option>
                                <option value="Ha Noi">Ha Noi</option>
                                <option value="Ho Chi Minh">Ho Chi Minh</option>
                                <option value="Da Nang">Da Nang</option>
                                <option value="Others">Others</option>
                            </select>
                            <Button className="col-md-2 col-sm-12 margin-left-right Jobs-box" onClick={onSearch}>Search</Button>
                        </Row>
                        <div style={{ height: '50px' }} />
                        <Row>
                            <Button variant="dark" className="Jobs-tag" value="Designer" onClick={tagClick}>Designer</Button>
                            <Button variant="dark" className="Jobs-tag" value="Java" onClick={tagClick}>Java</Button>
                            <Button variant="dark" className="Jobs-tag" value="PHP" onClick={tagClick}>PHP</Button>
                            <Button variant="dark" className="Jobs-tag" value="Android" onClick={tagClick}>Android</Button>
                            <Button variant="dark" className="Jobs-tag" value="ReactJS" onClick={tagClick}>ReactJS</Button>
                            <Button variant="dark" className="Jobs-tag" value="iOS" onClick={tagClick}>iOS</Button>
                            <Button variant="dark" className="Jobs-tag" value="Leader" onClick={tagClick}>Leader</Button>
                            <Button variant="dark" className="Jobs-tag" value="QA" onClick={tagClick}>QA QC</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div style={{ height: '150px' }} />

            <div className="Jobs-main-search">
                <Col className="col-md-9 col-sm-12 Jobs-main-col">
                    {
                        jobs.map((x: Job) => {
                            return (<JobItem job={x} loggedIn={loggedIn} key={x.id} />)
                        })
                    }
                </Col>
            </div>
        </div>
    );
}