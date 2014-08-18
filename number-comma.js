/*
 * This DataTables plugin sorts a numeric column with price link.
 * Cells can include a link and a EUR sign.
 *
 *  @name numeric-comma
 *  @summary Sort columns with numeric value using comma as decimal separator.
 *  @author [Pekka Huhtala]
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'numeric-comma', targets: 0 },
 *       ]
 *    } );
 */


jQuery.fn.dataTableExt.oSort['numeric-comma-pre'] = function (a, b) {
    a = $(a).text().replace("€", "");
    a = $.trim(a);
    var x = (a == "-") ? 0 : a.replace(/,/, ".");
    x = parseFloat(x);
    return x;

}
jQuery.fn.dataTableExt.oSort['numeric-comma-asc'] = function (a, b) {
    x = parseFloat(a);
    y = parseFloat(b);
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};

jQuery.fn.dataTableExt.oSort['numeric-comma-desc'] = function (a, b) {
    x = parseFloat(a);
    y = parseFloat(b);
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
};

