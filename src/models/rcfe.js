const mongoose = require('mongoose');

const rcfeSchema = new mongoose.Schema({
  facility_type: {
    type: String,
    alias: 'Facility Type',
    required: true,
  },
  facility_number: {
    type: String,
    alias: 'Facility Number',
    required: true,
  },
  facility_name: {
    type: String,
    alias: 'Facility Name',
    required: true,
  },
  licensee: {
    type: String,
    alias: 'Licensee',
  },
  facility_administrator: {
    type: String,
    alias: 'Facility Administrator',
  },
  facility_telephone_number: {
    type: String,
    alias: 'Facility Telephone Number',
  },
  facility_address: {
    type: String,
    alias: 'Facility Address',
  },
  facility_city: {
    type: String,
    alias: 'Facility City',
  },
  facility_state: {
    type: String,
    alias: 'Facility State',
  },
  facility_zip: {
    type: String,
    alias: 'Facility Zip',
  },
  county_name: {
    type: String,
    alias: 'County Name',
  },
  regional_office: {
    type: String,
    alias: 'Regional Office',
  },
  facility_capacity: {
    type: String,
    alias: 'Facility Capacity',
  },
  facility_status: {
    type: String,
    alias: 'Facility Status',
  },
  license_first_date: {
    type: String,
    alias: 'License First Date',
  },
  closed_date: {
    type: String,
    alias: 'Closed Date',
  },
  last_visit_date: {
    type: String,
    alias: 'Last Visit Date',
  },
  inspection_visits: {
    type: String,
    alias: 'Inspection Visits',
  },
  complaint_visits: {
    type: String,
    alias: 'Complaint Visits',
  },
  other_visits: {
    type: String,
    alias: 'Other Visits',
  },
  total_visits: {
    type: String,
    alias: 'Total Visits',
  },
  citation_numbers: {
    type: String,
    alias: 'Citation Numbers',
  },
  poc_dates: {
    type: String,
    alias: 'POC Dates',
  },
  all_visit_dates: {
    type: String,
    alias: 'All Visits Dates',
  },
  latitude: {
    type: String,
    alias: 'Latitude',
    required: true,
  },
  longitude: {
    type: String,
    alias: 'Longitude',
    required: true,
  },
});

const Rcfe = mongoose.model('Rcfe', rcfeSchema, 'rcfe');

module.exports = Rcfe;
