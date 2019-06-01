import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import {CircularProgress, withStyles} from "@material-ui/core";
import {Button, Col, Icon, Row, Slider} from "antd";
// import Button from "theme/CustomButtons/Button.jsx";
import store from "../stores/store";
import {observer} from "mobx-react";


const marks = {
  0: '0',
  1000: '1k',
  2000: '2k',
  3000: '3k',
  4000: '4k',
  5000: '5k',
  6000: '6k',
  7000: '7k',
  8000: '8k',
  9000: '9k',
  10000: '10k'
};

const expLevels = {
  0: 'trainee',
  1: 'junior',
  2: 'mid',
  3: 'senior',
  4: 'expert'
};

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
  filtersBar: {
    padding: '0 40px 0 18px',
    height: '126px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '3px',
  },
  filters: {
    width: '100%',
  },
  places: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px'
  },
  place: {
    marginRight: '10px',
    display: 'block',
    cursor: 'pointer',
  },
  technologies: {
    marginTop: '15px',
    display: 'flex',
  },
  technology: {
    marginRight: '10px',
    display: 'block',
    cursor: 'pointer',
  },
  salarySlider: {
    width: '100%',
    paddingLeft: '0px',
    paddingBottom: '5px'
  },
  expSlider: {
    width: '100%',
    paddingLeft: '0px',
    paddingBottom: '5px'
  },
});

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.filterByCity = this.filterByCity.bind(this);
    this.filterByTechnology = this.filterByTechnology.bind(this);
    this.onSalaryChange = this.onSalaryChange.bind(this);
    this.onExpChange = this.onExpChange.bind(this);
  }

  componentDidMount() {
    store.getCities();
    store.getTechnologies();
    store.getJobs();
  }

  getColor(name, filterValue) {
    if (name === filterValue) {
      return "primary"
    } else {
      return "default"
    }
  }

  filterByCity(evt) {
    const city = evt.currentTarget.value
    store.filterByCity(city)
    this.props.history.push('/')
  }

  filterByTechnology(evt) {
    const technology = evt.currentTarget.value
    store.filterByTechnology(technology)
    this.props.history.push('/')
  }

  onSalaryChange = (value) => {
    store.salaryBottom = value[0]
    store.salaryTop = value[1]
    store.filterJobs()
    this.props.history.push('/')
  }

  onExpChange = (value) => {
    store.expBottom = value[0]
    store.expTop = value[1]
    store.filterJobs()
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props;
    const { cities, technologies, jobs } = store
    if (!cities || !technologies || !jobs) {
      return (
        <CircularProgress />
      )
    }
    return (
      <div className={classes.filtersBar}>
        <div className={classes.filters}>
          <Row>
            <Col span={12} offset={1}>
              <div className={classes.places}>
                {cities.map(city => (
                  <Button
                    color="info"
                    key={city.fields.name}
                    className={classes.place}
                    size="small"
                    type={this.getColor(city.fields.name, store.cityFilter)}
                    value={city.fields.name}
                    onClick={this.filterByCity}
                  >
                    {city.fields.name}
                  </Button>
                ))}

              </div>
              <div className={classes.technologies}>
                {technologies.map(tech => (
                  <Button
                    color="info"
                    key={tech.fields.name}
                    className={classes.technology}
                    size="small"
                    type={this.getColor(tech.fields.name, store.technologyFilter)}
                    value={tech.fields.name}
                    onClick={this.filterByTechnology}
                  >
                    {tech.fields.name}
                  </Button>
                ))}
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.salarySlider}>
                <Slider
                  min={0}
                  max={10000}
                  step={100}
                  range marks={marks}
                  defaultValue={[store.salaryBottom, store.salaryTop]}
                  onChange={this.onSalaryChange}
                />
              </div>
              <div className={classes.expSlider}>
                <Slider
                  min={0}
                  max={4}
                  step={1}
                  range
                  marks={expLevels}
                  defaultValue={[store.expBottom, store.expTop]}
                  onChange={this.onExpChange}
                  tooltipVisible={false}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

FilterBar = observer(FilterBar);
FilterBar = withRouter(FilterBar);

export default withStyles(styles)(FilterBar);
