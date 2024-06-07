/*dimLayer javascript is very similar so i wrote comment only this file*/

jQuery(document).ready(function($) {
   //if click
   $('.popupLayer').click(function(){
        var $href = $(this).attr('href');
        //do function
        layer_popup($href);
    });

    function layer_popup(el){
        var $el = $(el);        //save layer id to el
        var isDim = $el.prev().hasClass('dimBg');   //boolean variable for detecting the dimmed layer

        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn(); //if isDim set .dimlayer fadeIn else el.fadeIn

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // Place a layer in the center of the screen.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2, //set center
                marginLeft: -$elWidth/2 //set center
            })
        } else {
            $el.css({top: 0, left: 0});
        }

        //if close button click
        $el.find('a.btn-layerClose').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); //Click the Close button to close the layer.
            return false;
        });

        //if background click
        $('.layer .dimBg').click(function(){
            $('.dim-layer').fadeOut(); //fadeout
            return false;
        });
    }
});
