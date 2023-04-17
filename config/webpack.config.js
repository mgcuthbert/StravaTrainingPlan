'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) =>
    merge(common, {
        entry: {
            popup: PATHS.src + '/popup/popup.ts',
            stravaTrainingPlan: PATHS.src + '/stravaTrainingPlan.ts',
            githubFetcher: PATHS.src + '/githubFetcher.ts'
        },
        devtool: argv.mode === 'production' ? false : 'source-map',
    });

module.exports = config;