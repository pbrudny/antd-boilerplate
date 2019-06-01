import { Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import { Assignment, Weekend, Cake, Build, KeyboardReturn } from "@material-ui/icons";

import { CssBaseline, Chip } from '@material-ui/core';
import Timeline from 'theme/Timeline/Timeline';
import Button from "theme/CustomButtons/Button.jsx";

import { withStyles } from '@material-ui/core/styles';

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
  mainContent: {
    flex: 1
  },
  mainOffer: {
    marginTop: '5px'
  },
  sidebar: {
    backgroundColor: '#f3f6f8',
    overflowY: 'scroll',
    width: '100%',
    position: 'fixed',
    top: '129px',
    bottom: '0',
    left: '0',
  },
  sidebarInner: {
    position: 'relative',
    marginTop: '0px'
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
    fontSize: '15px',
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
  skillTag: {
    display: 'inlineBlock',
    color: '#00acc1',
    marginLeft: '6px',
    border: '1px solid #00acc1',
    borderRadius: '5px',
    padding: '4px 7px',
    lineHeight: '11px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    minWidth: '1ch',
    fontSize: '13px',
    background: 'azure'
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
  positionTitle: {
    fontSize: '23px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginTop: '10px',
    marginBottom: '6px'
  },
  companyLink: {
    color: 'gray'
  },
  navBar: {
    height: '50px',
    background: 'black'
  }
});

class Job extends Component {
  myRef = React.createRef();

  render() {
    const {
      classes,
      job,
    } = this.props;
    const stories = [
      {
        inverted: true,
        badgeColor: "info",
        badgeIcon: Build,
        title: "Requirements",
        titleColor: "black",
        body: (
          <div>
            <h3>Must have</h3>
            <p>
              <span className={classes.skillTag}>Java</span>
              <span className={classes.skillTag}>HTML5</span>
              <span className={classes.skillTag}>CSS</span>
            </p>
            <hr />
            <h3>Nice to have</h3>
            <p>
              <span className={classes.skillTag}>AWS</span>
              <span className={classes.skillTag}>Docker</span>
              <span className={classes.skillTag}>Kubernetes</span>
            </p>
          </div>
        )
      },
      {
        badgeColor: "info",
        badgeIcon: Assignment,
        title: "Description",
        titleColor: "black",
        inverted: true,
        body: (
          <p>
            {job.fields.details}
          </p>
        )
      },
      {
        inverted: true,
        badgeColor: "info",
        badgeIcon: Cake,
        title: "Benefits",
        titleColor: "black",
        body: (
          <div>
            <ul>
              <li>Sport subscription</li>
              <li>Training budget</li>
              <li>Private healthcare</li>
              <li>Flat structure</li>
              <li>Lunch card</li>
              <li>Small teams</li>
              <li>International projects</li>
            </ul>
          </div>
        )
      },
      {
        badgeColor: "info",
        badgeIcon: Weekend,
        title: "Perks",
        titleColor: "black",
        inverted: true,
        body: (
          <ul>
            <li>Free coffee</li>
            <li>Bike parking</li>
            <li>Playroom</li>
            <li>Shower</li>
            <li>Free snacks</li>
            <li>Free lunch</li>
            <li>Free parking</li>
            <li>Modern office</li>
            <li>Startup atmosphere</li>
          </ul>
        )
      }
    ];

    return (
      <div className={classes.layout}>
        <Row>
          <Col span={2} offset={4}>
            <Button style={{marginTop: '82px'}}
              to={'/'}
              component={Link}
              color='info'
            >
              <KeyboardReturn />
              Back
            </Button>
          </Col>
          <Col span={12} offset={0}>
            <div className={classes.mainOffer}>
              <Paper>
               <Row>
                 <Col span={2} offset={2}>
                   <div className={classes.companyLogoContainer}>
                     <img
                       className={classes.companyLogo}
                       src={job.fields.companyLogo.fields.file.url}  alt="logo"
                     />
                   </div>
                 </Col>
                 <Col span={18} offset={1}>
                   <div className={classes.positionTitle}>
                     { job.fields.position}
                   </div>
                   <h3>

                     <Link
                       to={job.fields.companyWebsite}
                       className={classes.companyLink}
                     >{ job.fields.companyName }</Link> | { job.fields.companyBasicAddress }, Germany</h3>
                    <p><span className={classes.salary}>
                      €{ job.fields.salaryBottom } {" - "}
                      €{ job.fields.salaryTop }{ " "}
                    </span></p>
                 </Col>
               </Row>
             </Paper>
            </div>
          </Col>
        </Row>
        <CssBaseline/>
        <div className={classes.mainContent}>
          <div className={classes.sidebar}>
            <div className={classes.sidebarInner}>
              <Row>
                <Col span={20} offset={4}>
                  <Timeline stories={stories} />
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={4}>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job);
