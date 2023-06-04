$(".header").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //find the break line that corresponds to this header
    $breakLine = $header.parent().siblings('.break-line');
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
        //toggle the visibility of the break line
        $breakLine.toggle();
    });
});
