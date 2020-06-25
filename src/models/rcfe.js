const mongoose = require('mongoose');

const rcfeSchema = new mongoose.Schema({
  facility_type: {
    type: String,
    required: true,
  },
  facility_number: {
    type: String,
    required: true,
  },
  facility_name: {
    type: String,
    required: true,
  },
  licensee: {
    type: String,
  },
  facility_administrator: {
    type: String,
  },
  facility_telephone_number: {
    type: String,
  },
  facility_address: {
    type: String,
  },
  facility_city: {
    type: String,
  },
  facility_state: {
    type: String,
  },
  facility_zip: {
    type: String,
  },
  county_name: {
    type: String,
  },
  regional_office: {
    type: String,
  },
  facility_capacity: {
    type: String,
  },
  facility_status: {
    type: String,
  },
  license_first_date: {
    type: String,
  },
  closed_date: {
    type: String,
  },
  last_visit_date: {
    type: String,
  },
  inspection_visits: {
    type: String,
  },
  complaint_visits: {
    type: String,
  },
  other_visits: {
    type: String,
  },
  total_visits: {
    type: String,
  },
  citation_numbers: {
    type: String,
  },
  poc_dates: {
    type: String,
  },
  all_visit_dates: {
    type: String,
  },
});

const Rcfe = mongoose.model('Rcfe', rcfeSchema, 'rcfe');

module.exports = Rcfe;
