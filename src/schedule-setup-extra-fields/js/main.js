/*global require*/
require.config({
    paths: {
        setup: '/* @echo IMAGE_SERVER_URL *//schedule-setup-extra-fields/js/setup'
    }
});

require(['setup'], function(setup) {
    'use strict';
    setup.main();
});