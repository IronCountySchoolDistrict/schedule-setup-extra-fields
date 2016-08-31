/*global psData*/
import $ from 'jquery';

export function init() {
  insertElem();
  selectCloseOption();
}

/**
 * Insert the fields template after the fourth input field in the form.
 * @returns {undefined}
 */
function insertElem() {
    var template = $($('#next-year-template').html());
    var select = $(':input').eq(4).parent().parent();
    template.insertAfter(select);

    //Set proper coloring for each tr by removing evenRow/oddRow
    // classes so nth-child odd coloring can be applied
    $('table').eq(0).find('tr').attr({
        'class': ''
    });

    //Remove blank tr tags to fix nth-child odd css
    $('tr').not(':parent').remove();
}

/**
 * Set the correct option for values that are close to the correct value.
 */
function selectCloseOption() {
    if (psData.boundaryHS === "Cedar City High" || psData.boundaryHS === "Cedar City High " || psData.boundaryHS === "704") {
        $('#cedar-high-option').attr('selected', 'selected');
    }
    if (psData.boundaryHS === "Canyon View High" || psData.boundaryHS === "Canyon View High " || psData.boundaryHS === "712") {
        $('#canyon-view-high-option').attr('selected', 'selected');
    }
    if (psData.boundaryHS === "Parowan High" || psData.boundaryHS === "Parowan High " || psData.boundaryHS === "708") {
        $('#parowan-high-option').attr('selected', 'selected');
    }
}
