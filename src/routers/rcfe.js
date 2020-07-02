const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const mongoose = require('mongoose')
const Rcfe = require('../models/rcfe');
const { resolve } = require('path');

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
    if (req.query.facilityNumber) {
      searchParameters['Facility Number'] = req.query.facilityNumber;
    }
    const rcfeList = await Rcfe.find(searchParameters);
    if (!rcfeList.length) {
      return res.status(404).send('Could not locate communities matching your search');
    }
    return res.json(rcfeList);
  } catch (e) {
    res.status(500).send('Server Error');
  }
});

router.post('/communities', async (req, res) => {
  const communities = [];

  fs.createReadStream(path.resolve('assets', 'rcfe-export.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error=>console.log(error))
    .on('data', row=>communities.push(row))
    .on('end', async () => {
      try {
        await Rcfe.collection.drop();
        await Rcfe.insertMany(communities);
        res.send('communities updated');
      } catch (e) {
        console.log(e);
      }
    });
});

module.exports = router;
