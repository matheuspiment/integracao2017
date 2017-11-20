var contrast = false;
var font = 0;
var h2SizeBackup;
var h3SizeBackup;
var h3TitleSizeBackup;
var h4SizeBackup;
var h5ASizeBackup;
var h5SizeBackup;
var h6SizeBackup;
var pDescriptionSizeBackup;
var pSizeBackup;
var aBtnSizeBackup;
var aSizeBackup;
var iSizeBackup;

function fontSizeBackup() {
  h2SizeBackup = parseInt($( "h2" ).css("font-size"));
  h3SizeBackup = parseInt($( "h3" ).css("font-size"));
  h3TitleSizeBackup = parseInt($( "h3.title" ).css("font-size"));
  h4SizeBackup = parseInt($( "h4" ).css("font-size"));
  h5ASizeBackup = parseInt($( "h5 a" ).css("font-size"));
  h5SizeBackup = parseInt($( "h5" ).css("font-size"));
  h6SizeBackup = parseInt($( "h6" ).css("font-size"));
  pDescriptionSizeBackup = parseInt($( "p.description" ).css("font-size"));
  pSizeBackup = parseInt($( "p" ).css("font-size"));
  aBtnSizeBackup = parseInt($( "a.btn" ).css("font-size"));
  aSizeBackup = parseInt($( "a" ).css("font-size"));
  iSizeBackup = parseInt($( "i" ).css("font-size"));
}

function enableContrast() {
    if (contrast == false) {
      $( ".sidebar-collapse .navbar-collapse" ).addClass( "navbar-collapse-contrast" );
      $( ".bg-info" ).addClass( "bg-info-contrast" );
      $( ".btn-info" ).addClass( "btn-info-contrast" );
      $( ".btn" ).addClass( "btn-contrast" );
      $( ".description" ).addClass( "description-contrast" );
      $( ".nav-pills-info" ).addClass( "nav-pills-info-contrast" );
      contrast = true;
    } else {
      $( ".sidebar-collapse .navbar-collapse" ).removeClass( "navbar-collapse-contrast" );
      $( ".bg-info" ).removeClass( "bg-info-contrast" );
      $( ".btn-info" ).removeClass( "btn-info-contrast" );
      $( ".btn" ).removeClass( "btn-contrast" );
      $( ".description" ).removeClass( "description-contrast" );
      $( ".nav-pills.nav-pills-info" ).removeClass( "nav-pills-info-contrast" );
      contrast = false;
    }
}

function fontSize( option ) {
    var h2Size = parseInt($( "h2" ).css("font-size"));
    var h3Size = parseInt($( "h3" ).css("font-size"));
    var h3TitleSize = parseInt($( "h3.title" ).css("font-size"));
    var h4Size = parseInt($( "h4" ).css("font-size"));
    var h5ASize = parseInt($( "h5 a" ).css("font-size"));
    var h5Size = parseInt($( "h5" ).css("font-size"));
    var h6Size = parseInt($( "h6" ).css("font-size"));
    var pDescriptionSize = parseInt($( "p.description" ).css("font-size"));
    var pSize = parseInt($( "p" ).css("font-size"));
    var aBtnSize = parseInt($( "a.btn" ).css("font-size"));
    var aSize = parseInt($( "a" ).css("font-size"));
    var iSize = parseInt($( "i" ).css("font-size"));

  if (option == 1 && font <=3) {
    h2Size = h2Size + 1 + "px";
    h3Size = h3Size + 1 + "px";
    h3TitleSize = h3TitleSize + 1 + "px";
    h4Size = h4Size + 1 + "px";
    h5ASize = h5ASize + 1 + "px";
    h5Size = h5Size + 1 + "px";
    h6Size = h6Size + 1 + "px";
    pDescriptionSize = pDescriptionSize + 1 + "px";
    pSize = pSize + 1 + "px";
    aBtnSize = aBtnSize + 1 + "px";
    aSize = aSize + 1 + "px";
    iSize = iSize + 1 + "px";
    font++;

  } else if (option == -1 && font >=1) {
    h2Size = h2Size - 1 + "px";
    h3Size = h3Size - 1 + "px";
    h3TitleSize = h3TitleSize + 1 + "px";
    h4Size = h4Size - 1 + "px";
    h5ASize = h5ASize - 1 + "px";
    h5Size = h5Size - 1 + "px";
    h6Size = h6Size - 1 + "px";
    pDescriptionSize = pDescriptionSize - 1 + "px";
    pSize = pSize - 1 + "px";
    aBtnSize = aBtnSize - 1 + "px";
    aSize = aSize - 1 + "px";
    iSize = iSize - 1 + "px";
    font--;
  } else if(option == 0) {
    h2Size = h2SizeBackup + "px";
    h3Size = h3SizeBackup + "px";
    h3TitleSize = h3TitleSizeBackup + "px";
    h4Size = h4SizeBackup + "px";
    h5ASize = h5ASizeBackup + "px";
    h5Size = h5SizeBackup + "px";
    h6Size = h6SizeBackup + "px";
    pDescriptionSize = pDescriptionSizeBackup + "px";
    pSize = pSizeBackup + "px";
    aBtnSize = aBtnSizeBackup + "px";
    aSize = aSizeBackup + "px";
    iSize = iSizeBackup + "px";
    font = 0;
  }

  $('h2').css({'font-size':h2Size});
  $('h3').css({'font-size':h3Size});
  $('h3.title').css({'font-size':h3TitleSize});
  $('h4').css({'font-size':h4Size});
  $('h5').css({'font-size':h5Size});
  $('h5 a').css({'font-size':h5ASize});
  $('h6').css({'font-size':h6Size});
  $('p').css({'font-size':pSize});
  $('p.description').css({'font-size':pDescriptionSize});
  $('a').css({'font-size':aSize});
  $('a.btn').css({'font-size':aBtnSize});
  $('i').css({'font-size':iSize});

}
