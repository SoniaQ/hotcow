jQuery(document).ready(function() {
  var width  = jQuery(document).width();
  var line = 1;
  var column = 1;

  if (width > 990) {

    jQuery('.member').each(function( index ) {

      if (column == 4) {
        line++;
        column = 1;
      }


      jQuery(this).attr({'data-line': line , 'data-column': column});
      jQuery(this).find('.lnk-member').attr({'data-line': line , 'data-column': column});

      column++;

    });


    } else {

    jQuery('.member').each(function( index ) {

      if (column == 3) {
        line++;
        column = 1;
      }


      jQuery(this).attr('data-line',line);
      jQuery(this).attr('data-column',column);

      jQuery(this).find('.lnk-member').attr('data-line',line);
      jQuery(this).find('.lnk-member').attr('data-column',column);

      column++;

    });
  }
});

jQuery('.member').on('click', function(event) {
  event.preventDefault();

  if(!jQuery(this).find('span').hasClass('lnk-active')){

    if (jQuery('.members .member-details').length > 0) {
      jQuery('.members .member-details').slideUp('slow', function() {
        jQuery(this).remove();
      });
    }

    jQuery('.members .clearfix').remove();

    jQuery('.member span').removeClass('lnk-active').addClass('lnk-member');

    jQuery(this).find('.lnk-member').addClass('lnk-active');
    jQuery(this).find('.lnk-member').removeClass('lnk-member');

    var width  = jQuery(document).width();
    var line  = jQuery(this).attr('data-line');
    var column = jQuery(this).attr('data-column');

    jQuery('.member').removeClass('active');
    jQuery('.member[data-line="'+ line + '"][data-column="'+column+'"]').addClass('active');

    var html   = '<div class="col-lg-12 col-xs-12 member-details member-'+line+'-'+column+'">'+
            '<div class="interno">'+
              '<div class="nome">' +
                jQuery('.member[data-line="'+ line + '"][data-column="'+column+'"] .member-data .nome').html() +
              '</div>' +
              '<div class="area">' +
                jQuery('.member[data-line="'+ line + '"][data-column="'+column+'"] .member-data .area').html() +
              '</div>' +
              '<div class="conteudo">' +
                jQuery('.member[data-line="'+ line + '"][data-column="'+column+'"] .member-content').html() +
              '</div>' +
            '</div>' +
           '</div>';


    if (width > 1150) {

      if(jQuery('.member[data-line="' + line + '"][data-column="3"]').length > 0) {
        jQuery('.member[data-line="' + line + '"][data-column="3"]').after(html);
      } else {
        if(jQuery('.member[data-line="' + line + '"][data-column="2"]').length > 0) {
          jQuery('.member[data-line="' + line + '"][data-column="2"]').after(html);
        } else {
          jQuery('.member[data-line="' + line + '"][data-column="1"]').after(html);
        }
      }

     } else {

      if(jQuery('.member[data-line="' + line + '"][data-column="2"]').length > 0) {
          jQuery('.member[data-line="' + line + '"][data-column="2"]').after(html);
        } else {
          jQuery('.member[data-line="' + line + '"][data-column="1"]').after(html);
        }
     }


    jQuery('.members .member-details').slideDown('slow');


  } else {

    jQuery('.member').removeClass('active');

    jQuery('.members .member-details').slideUp('slow', function() {
      jQuery(this).remove();
    });

    jQuery('.members .clearfix').remove();


    jQuery(this).find('.lnk-active').addClass('lnk-member');
    jQuery(this).find('.lnk-active').removeClass('lnk-active');

  }
});
