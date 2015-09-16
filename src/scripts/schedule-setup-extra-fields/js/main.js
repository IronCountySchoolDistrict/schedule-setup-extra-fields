/*global require*/
require.config({
    paths: {
        setup: '/scripts/schedule-setup-extra-fields/js/setup'
    }
});

require(['setup'], function(setup) {
    'use strict';
    setup.main();
});
