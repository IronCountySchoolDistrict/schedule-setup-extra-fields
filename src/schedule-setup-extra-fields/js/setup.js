/*global define, $j, psData*/

define(function() {
    'use strict';
    return {

        main: function() {
            this.insertElem();
            this.selectCloseOption();
        },

        /**
         * Insert the fields template after the fourth input field in the form.
         * @returns {undefined}
         */
        insertElem: function() {
            var template = $j($j('#next-year-template').html());
            var select = $j(':input').eq(4).parent().parent();
            template.insertAfter(select);

            //Set proper coloring for each tr by removing evenRow/oddRow
            // classes so nth-child odd coloring can be applied
            $j('table').eq(0).find('tr').attr({
                'class': ''
            });

            //Remove blank tr tags to fix nth-child odd css
            $j('tr').not(':parent').remove();
        },


        /**
         * Set the correct option for values that are close to the correct value.
         */
        selectCloseOption: function() {
            if (psData.boundaryHS === "Cedar City High" || psData.boundaryHS === "Cedar City High " || psData.boundaryHS === "704") {
                $j('#cedar-high-option').attr('selected', 'selected');
            }
            if (psData.boundaryHS === "Canyon View High" || psData.boundaryHS === "Canyon View High " || psData.boundaryHS === "712") {
                $j('#canyon-view-high-option').attr('selected', 'selected');
            }
            if (psData.boundaryHS === "Parowan High" || psData.boundaryHS === "Parowan High " || psData.boundaryHS === "708") {
                $j('#parowan-high-option').attr('selected', 'selected');
            }
        }
    };
});
