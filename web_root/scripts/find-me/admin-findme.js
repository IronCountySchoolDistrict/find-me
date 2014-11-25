/*global $j*/
$j(document).ready(function () {
    var $findMeTemplate = $j($j('#find-me-template').html());
    var insertSelector = $j('.cust-content-alert');
    $findMeTemplate.insertBefore(insertSelector);
});