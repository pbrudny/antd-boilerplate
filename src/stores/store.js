import { observable, decorate, action } from 'mobx';
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export class Store {
  allJobs = [];
  cityFilter = "all";
  technologyFilter = "all";
  jobs = [];
  cities = [];
  technologies = [];
  currentJob = {};
  expBottom = 1;
  expTop = 3;
  salaryBottom = 2000;
  salaryTop = 8000;

  // get latestCount() {
  //   return this.jobs.filter(job => job.fields.status === 'registered').length;
  // }

  getJobs() {
    client.getEntries({
      content_type: 'job'
    })
      .then((response) => {
        console.log('we have got jobs', response.items);
        this.jobs = this.allJobs = response.items;
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };

  getJob(slug) {
    client.getEntries({
      content_type: 'job',
      'fields.slug': slug
    })
      .then((response) => {
        console.log('we have got job', response.items[0]);
        this.currentJob = response.items[0];
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };

  getTechnologies() {
    client.getEntries({
      content_type: 'technology',
      limit: 12,
      order: 'fields.buttonPosition'
    })
      .then((response) => {
        console.log('we have got technologies', response.items);
        this.technologies = response.items;
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };

  getCities() {
    client.getEntries({
      content_type: 'city',
      limit: 7,
      order: 'fields.buttonPosition'
    })
      .then((response) => {
        console.log('we have got cities', response.items);
        this.cities = response.items;
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };

  filterJobs() {
    const salaryFiltered = this.allJobs.filter(job => {
      return !(job.fields.salaryTop < this.salaryBottom || this.salaryTop < job.fields.salaryBottom)
    })

    const expFiltered = salaryFiltered.filter(job => {
      return job.fields.expBottom >= this.expBottom && job.fields.expTop <= this.expTop
    })

    if (this.cityFilter ==="all" && this.technologyFilter ==="all") {
      return this.jobs = expFiltered
    }

    this.jobs = expFiltered.filter(job => {
      if (this.cityFilter !=="all" && this.technologyFilter !=="all") {
        return job.fields.technology.fields.name === this.technologyFilter && job.fields.city.fields.name === this.cityFilter
      }

      if (this.cityFilter !=="all") {
        return job.fields.city.fields.name === this.cityFilter
      }

      if (this.technologyFilter !=="all") {
        return job.fields.technology.fields.name === this.technologyFilter
      }
    })
  }

  filterByTechnology(technology) {
    this.technologyFilter = technology
    return this.filterJobs()
  }

  filterByCity(city) {
    this.cityFilter = city
    return this.filterJobs()
  }
}

decorate(Store, {
  salaryBottom: observable,
  salaryTop: observable,
  expBottom: observable,
  expTop: observable,
  cityFilter: observable,
  technologyFilter: observable,
  allJobs: observable,
  jobs: observable,
  cities: observable,
  technologies: observable,
  currentJob: observable,
  getJob: action,
  getJobs: action,
  filterByCity: action,
  filterByTechnology: action,
  filterJobs: action,
  getCities: action,
  getTechnologies: action
});

export default new Store();
