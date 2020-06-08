import React, { useEffect, useState } from "react";
import './Jobs.css';
import { Button, Row, Container, Col } from 'react-bootstrap';
import JobApis from './../../apis/JobApis';
import Job from "../../types/Job";
import JobItem from "../../components/JobItem/JobItem";
import { useHistory, useLocation } from "react-router-dom";

type JobsProps = {
  user: boolean
}

const QUERYSTR_PREFIX = "q";

export default function Jobs(props: JobsProps) {
  let query = useQuery();
  let history = useHistory();

  const [jobList, setJobList] = useState<Job[]>([]);
  const [displayList, setDisplayList] = useState<Job[]>([]);
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("All");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const getJobs = async () => {
    let list = await JobApis.getJobList();
    setJobList(list);
    setDisplayList(list);
  }

  const handleTextChange = (e:any) => {
    console.log(e.target.value)
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setDisplayList(jobList)
    }
  }

  const handleCityChange = (e:any) => {
    console.log(e.target.value)
    setCity(e.target.value)
  }

  const onSearch = (e:any) => {
    let filtered = jobList.filter(x => {
      return x.description.includes(keyword) || x.title.includes(keyword) || x.tags.filter(t => t.includes(keyword)).length > 0
    }).filter(x1 => {
      if (city === "All") {
        return true;
      } else {
        return x1.city.includes(city);
      }
    })
    history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    setDisplayList(filtered)
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
              <input type="text" onChange={handleTextChange} value={keyword} placeholder="Search jobs" className="col-md-7 col-sm-12 margin-left-right Jobs-box" />
              <select className="col-md-2 col-sm-12 margin-left-right Jobs-box" onChange={handleCityChange}>
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
              <Button variant="dark" className="Jobs-tag" value="Designer" onClick={handleTextChange}>Designer</Button>
              <Button variant="dark" className="Jobs-tag" value="Java" onClick={handleTextChange}>Java</Button>
              <Button variant="dark" className="Jobs-tag" value="PHP" onClick={handleTextChange}>PHP</Button>
              <Button variant="dark" className="Jobs-tag" value="Android" onClick={handleTextChange}>Android</Button>
              <Button variant="dark" className="Jobs-tag" value="ReactJS" onClick={handleTextChange}>ReactJS</Button>
              <Button variant="dark" className="Jobs-tag" value="iOS" onClick={handleTextChange}>iOS</Button>
              <Button variant="dark" className="Jobs-tag" value="Leader" onClick={handleTextChange}>Leader</Button>
              <Button variant="dark" className="Jobs-tag" value="QA" onClick={handleTextChange}>QA QC</Button>
            </Row>
          </Col>
        </Row>
      </Container>

      <div style={{ height: '150px' }} />

      <div className="Jobs-main-search">
        <Col className="col-md-9 col-sm-12 Jobs-main-col">
          {
            displayList.map((x: Job) => {
              return (<JobItem job={x} user={props.user} key={x.id} />)
            })
          }
        </Col>
      </div>
    </div>
  );
}