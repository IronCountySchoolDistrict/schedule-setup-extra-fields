/*global require*/
require.config({
    baseUrl: '/scripts',
    paths: {
        setup: 'ScheduleSetupNextYearTeacher/setup'
    }
});

require(['setup'], function (setup) {
    'use strict';
    setup.main();
});