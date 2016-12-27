import $ from 'jquery';
/*global $*/
export default function() {
    $(() => {
        $(document).ready(function () {
            var $findMeTemplate = $($('#find-me-template').html());
            var insertSelector = $('#cust-student-alert');
            $findMeTemplate.insertBefore(insertSelector);
        });
    });
}
