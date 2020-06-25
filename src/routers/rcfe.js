const express = require('express');
const Rcfe = require('../models/rcfe');

const router = new express.Router();

router.get('/communities', async (req, res) => {
  try {
    const searchParameters = {};
    if (req.query.city) {
      searchParameters['Facility City'] = new RegExp(`${req.query.city}`, 'i');
    }
    if (req.query.zip) {
      searchParameters['Facility Zip'] = req.query.zip;
    }
    if (req.query.address) {
      searchParameters['Facility Address'] = new RegExp(`${req.query.address}`, 'i');
    }
    if (req.query.facility_number) {
      searchParameters['Facility Number'] = req.query.facility_number;
    }
    const fetchData = async () => {
      const rcfeList = await Rcfe.find(searchParameters);
      if (!rcfeList.length) {
        return res.status(404).send('Could not locate communities matching your search');
      }
      return res.json(rcfeList);
    };
    fetchData();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
