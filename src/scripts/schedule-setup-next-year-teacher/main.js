/*global require*/
require.config({
    baseUrl: '/scripts',
    paths: {
        setup: 'schedule-setup-next-year-teacher/setup'
    }
});

require(['setup'], function(setup) {
    'use strict';
    setup.main();
});