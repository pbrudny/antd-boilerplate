import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from 'antd';
import store from '../stores/store';
import FilterBar from "../common/FilterBar";
import Danger from "theme/Typography/Danger.jsx";
import Card from "theme/Card/Card.jsx";
import CardHeader from "theme/Card/CardHeader.jsx";
import CardIcon from "theme/Card/CardIcon.jsx";
import CardBody from "theme/Card/CardBody.jsx";
import CardFooter from "theme/Card/CardFooter.jsx";
import Table from "theme/Table/Table.jsx";
import CardText from "theme/Card/CardText.jsx";
import Bar from 'stats/Bar.jsx';
import Chart from 'stats/Chart.jsx';

const styles = theme => ({
  layout: {
    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
    fontWeight: '400',
    color: '#37474f',
    backgroundColor: '#f3f6f8',
    height: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  stats: {
    backgroundColor: '#f3f6f8',
    position: 'fixed',
    width: '50%',
    top: '178px',
    bottom: '0',
  },
  sidebar: {
    backgroundColor: '#f3f6f8',
    overflowY: 'scroll',
    width: '50%',
    position: 'fixed',
    top: '178px',
    bottom: '0',
  },
  sidebarInner: {
    position: 'relative',
    marginTop: '15px',
    marginRight: '20px'
  },
  offerItem: {
    cursor: 'pointer',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)',
    height: '78px',
    margin: '0 10px 12px 10px',
    padding: '0',
    backgroundColor: '#FFF',
    display: 'flex',
    fontSize: '11px',
    flex: '0 0 125px',
    position: 'relative',
  },
  itemBorder: {
    width: '5px',
    borderRadius: '6px 0 0 6px'
  },
  item: {
    display: 'flex',
    textDecoration: 'none',
    minWidth: '0',
    color: 'rgba(0,0,0,0.87)',
    height: '100%',
    fontSize: '14px',
    alignItems: 'center',
    flex: '1'
  },
  itemRow: {
    width: '100%',
    paddingRight: '20px',
    minWidth: '0'
  },
  offerBorder: {
    background: 'linear-gradient(0deg, #3FC5E6, #4FA4FD)',
    width: '5px',
    borderRadius: '6px 0 0 6px'
  },
  companyLogoContainer: {
    height: '40px',
    flex: '0 0 125px',
    position: 'relative',
    margin: '20px'
  },
  companyLogo: {
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '40px',
    maxWidth: '85px',
    display: 'block'
  },
  primaryLine: {
    color: '#5a6371',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: '18px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: '0 5px 0 0',
    lineHeight: '23px',
    fontWeight: '600'
  },
  flexRight: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  salaryRow: {
    lineHeight: '11px'
  },
  salary: {
    verticalAlign: 'middle',
    color: '#00acc1',
    textAlign: 'right',
    fontSize: '18px',
    whiteSpace: 'nowrap'
  },
  age: {
    margin: '0 0 0 16px',
    padding: '4px 7px',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    lineHeight: '11px',
    border: '1px solid #e0e0e0'
  },
  secondaryLine: {
    display: 'flex',
    margin: '6px 0 0 0'
  },
  companyInfo: {
    color: '#99a1ab',
    whiteSpace: 'nowrap'
  },
  companyAddress: {
    margin: '0 0 0 15px'
  },
  tags: {
    margin: '0 0 0 auto',
    whiteSpace: 'nowrap',
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  tag: {
    display: 'inlineBlock',
    color: '#99a1ab',
    marginLeft: '6px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    textTransform: 'lowercase',
    padding: '4px 7px',
    lineHeight: '11px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    minWidth: '1ch'
  },
  icon: {
    fontSize: '14px',
    color: '#c7ced6',
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1',
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    marginRight: '3px'
  },
});

class Jobs extends Component {
  render() {
    const {
      classes,
      jobs,
    } = this.props;
    return (
      <>
        <FilterBar />

        <CssBaseline/>
        <div className={classes.mainContent}>
          <Row>
            <Col span={12}>
              <div className={classes.sidebar}>
                <div className={classes.sidebarInner}>
                  <ul className={classes.offersList}>
                    {jobs.map(job => (
                      <li key={job.sys.id} className={classes.offerItem}>
                        <div
                          className={classes.itemBorder}
                          style={{background: job.fields.technology.fields.background}}>
                        </div>
                        <Link to={"/jobs/" + job.fields.slug} className={classes.item}>
                          <div className={classes.companyLogoContainer}>
                            <img
                              className={classes.companyLogo}
                              src={job.fields.companyLogo.fields.file.url}  alt="logo"
                            />
                          </div>
                          <div className={classes.itemRow}>
                            <div className={classes.primaryLine}>
                            <span className={classes.title}>
                              { job.fields.position }
                            </span>
                              <div className={classes.flexRight}>
                              <span className={classes.salaryRow}>
                                <span className={classes.salary}>
                                  { job.fields.salaryBottom } {" - "}
                                  { job.fields.salaryTop }{ " "}
                                  { job.fields.currency.fields.display }

                                </span>
                              </span>
                                <span className={classes.age}>
                                2 days ago
                              </span>
                              </div>
                            </div>
                            <div className={classes.secondaryLine}>
                            <span className={classes.companyInfo}>
                              <span className={classes.companyName}>
                                <div className={classes.icon}>
                                  <Icon type="rocket" />
                                </div>
                                { job.fields.companyName }
                              </span>
                              <span className={classes.companyAddress}>
                                <div className={classes.icon}>
                                  <Icon type="environment" />
                                </div>
                                { job.fields.companyBasicAddress }
                              </span>
                            </span>
                              <span className={classes.tags}>
                              { job.fields.descriptionTags.map(tag => (
                                <span key={tag} className={classes.tag}>{tag}</span>
                              ))}
                            </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className={classes.stats}>
                <Row>
                  <Col span={11}>
                    <Card>
                      <CardHeader color="info" text>
                        <CardText color="info">
                          <h4 className={classes.cardTitleWhite}>Stats</h4>
                          <h4 className={classes.cardCategoryWhite}>
                          </h4>
                        </CardText>
                      </CardHeader>
                      <CardBody>
                        <Table
                          hover
                          tableHeaderColor="warning"
                          tableData={[
                            ["1", "Junior PHP developer", "€2000 - €3000"],
                            ["1", "Mid PHP developer", "€3000 - €4000"],
                            ["1", "Senior PHP developer", "€4000 - €6000"],
                          ]}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col span={11} offset={1}>
                    <Card>
                      <CardHeader color="info" text>
                        <CardText color="info">
                          <h4 className={classes.cardTitleWhite}>Comes together with</h4>
                          <h4 className={classes.cardCategoryWhite}>
                          </h4>
                        </CardText>
                      </CardHeader>
                      <CardBody>
                        <Table
                          hover
                          tableHeaderColor="warning"
                          tableData={[
                            ["1", "HTML", "50%"],
                            ["2", "CSS", "45%"],
                            ["3", "GitHub", "20%"],
                          ]}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={11}>
                    <Card chart>
                      <CardHeader color="warning">
                        <Chart />
                      </CardHeader>
                      <CardBody>
                        <h4 className={classes.cardTitle}>PHP dev</h4>
                        <p className={classes.cardCategory}>Offers number</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col span={11} offset={1}>
                    <Card chart>
                      <CardHeader color="info">
                        <Bar />
                      </CardHeader>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Average salary</h4>
                        <p className={classes.cardCategory}>PHP</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

Jobs.propTypes = {
  classes: PropTypes.object.isRequired,
  jobs: PropTypes.array.isRequired,
};

export default withStyles(styles)(Jobs);
