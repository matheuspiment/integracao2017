var contrast = false;
var font = 0;
var h2SizeBackup;
var h3SizeBackup;
var h3TitleSizeBackup;
var h4SizeBackup;
var h5ASizeBackup;
var h5SizeBackup;
var h6SizeBackup;
var pWrapperBackup;
var pDescriptionSizeBackup;
var pDisciplinaSizeBackup;
var pCardSizeBackup;
var pSizeBackup;
var aBtnSizeBackup;
var aNavLink;
var aSizeBackup;
var iSizeBackup;
var alertSizeBackup;
var liSizeBackup;
var tableSizeBackup;

function fontSizeBackup() {
  h2SizeBackup = parseInt($( "h2" ).css("font-size"));
  h3SizeBackup = parseInt($( "h3" ).css("font-size"));
  h3TitleSizeBackup = parseInt($( "h3.title" ).css("font-size"));
  h4SizeBackup = parseFloat($( "h4" ).css("font-size"));
  h5ASizeBackup = parseInt($( "h5 a" ).css("font-size"));
  h5SizeBackup = parseInt($( "h5" ).css("font-size"));
  h6SizeBackup = parseInt($( "h6" ).css("font-size"));
	pWrapperBackup = parseInt($( ".wrapper p" ).css("font-size"));
  pDescriptionSizeBackup = parseInt($( "p.description" ).css("font-size"));
	pDisciplinaSizeBackup = 18.2;
	pCardSizeBackup = 18.2;
  pSizeBackup = parseInt($( "p" ).css("font-size"));
  aBtnSizeBackup = parseInt($( "a.btn" ).css("font-size"));
	aNavLinkBackup = parseInt($( ".sidebar a.nav-link" ).css("font-size"));
  aSizeBackup = parseInt($( "a" ).css("font-size"));
  iSizeBackup = parseInt($( "i" ).css("font-size"));
  alertSizeBackup = parseInt($( ".alert.alert-info" ).css("font-size"));
	listSizeBackup = 18.2;
  tableSizeBackup = parseFloat($( "table" ).css("font-size"));
}

function enableContrast() {
    if (contrast == false) {
      $( ".sidebar-collapse .navbar-collapse" ).addClass( "navbar-collapse-contrast" );
      $( ".bg-info" ).addClass( "bg-info-contrast" );
      $( ".btn-warning" ).addClass( "btn-info-contrast" );
      $( ".btn-info" ).addClass( "btn-info-contrast" );
      $( ".btn" ).addClass( "btn-contrast" );
      $( ".description" ).addClass( "description-contrast" );
      $( ".nav-pills-info" ).addClass( "nav-pills-info-contrast" );
			$( ".alert-info" ).addClass( "alert-info-contrast" );
      contrast = true;
    } else {
      $( ".sidebar-collapse .navbar-collapse" ).removeClass( "navbar-collapse-contrast" );
      $( ".bg-info" ).removeClass( "bg-info-contrast" );
      $( ".btn-info" ).removeClass( "btn-info-contrast" );
			$( ".btn-warning" ).removeClass( "btn-info-contrast" );
      $( ".btn" ).removeClass( "btn-contrast" );
      $( ".description" ).removeClass( "description-contrast" );
      $( ".nav-pills.nav-pills-info" ).removeClass( "nav-pills-info-contrast" );
			$( ".alert-info" ).removeClass( "alert-info-contrast" );
      contrast = false;
    }
}

function fontSize( option ) {
    var h2Size = parseInt($( "h2" ).css("font-size"));
    var h3Size = parseInt($( "h3" ).css("font-size"));
    var h3TitleSize = parseInt($( "h3.title" ).css("font-size"));
    var h4Size = parseFloat($( "h4" ).css("font-size"));
    var h5ASize = parseInt($( "h5 a" ).css("font-size"));
    var h5Size = parseInt($( "h5" ).css("font-size"));
    var h6Size = parseInt($( "h6" ).css("font-size"));
		var pSize = parseInt($( "p" ).css("font-size"));
		var pWrapper = parseInt($( ".wrapper p" ).css("font-size"));
		var pDescriptionSize = parseInt($( "p.description" ).css("font-size"));
		var pDisciplinaSize = parseFloat($( "p.description" ).css("font-size"));
		var pCardSize = parseFloat($( ".card p" ).css("font-size"));
    var aBtnSize = parseInt($( "a.btn" ).css("font-size"));
		var aNavLink = parseInt($( ".sidebar a.nav-link" ).css("font-size"));
    var aSize = parseInt($( "a" ).css("font-size"));
    var iSize = parseInt($( "i" ).css("font-size"));
    var alertSize = parseInt($( ".alert.alert-info" ).css("font-size"));
		var listSize = parseFloat($( ".list-content" ).css("font-size"));
    var tableSize = parseFloat($( "table" ).css("font-size"));

  if (option == 1 && font <=3) {
    h2Size = h2Size + 1 + "px";
    h3Size = h3Size + 1 + "px";
    h3TitleSize = h3TitleSize + 1 + "px";
    h4Size = h4Size + 1 + "px";
    h5ASize = h5ASize + 1 + "px";
    h5Size = h5Size + 1 + "px";
    h6Size = h6Size + 1 + "px";
    pDescriptionSize = pDescriptionSize + 1 + "px";
		pDisciplinaSize = pDisciplinaSize + 1 + "px";
		pCardSize = pCardSize + 1 + "px";
    pSize = pSize + 1 + "px";
    aBtnSize = aBtnSize + 1 + "px";
		aNavLink = aNavLink + 1 + "px";
    aSize = aSize + 1 + "px";
    iSize = iSize + 1 + "px";
    alertSize = alertSize + 1 + "px";
		pWrapper = pWrapper + 1 + "px";
		listSize = listSize + 1 + "px";
    tableSize = tableSize + 1 + "px";
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
		pDisciplinaSize = pDisciplinaSize - 1 + "px";
		pCardSize = pCardSize - 1 + "px";
    pSize = pSize - 1 + "px";
    aBtnSize = aBtnSize - 1 + "px";
		aNavLink = aNavLink - 1 + "px";
    aSize = aSize - 1 + "px";
    iSize = iSize - 1 + "px";
    alertSize = alertSize - 1 + "px";
		pWrapper = pWrapper - 1 + "px";
		listSize = listSize - 1 + "px";
    tableSize = tableSize - 1 + "px";
    font--;
  } else if(option == 0) {
    h2Size = h2Size - font + "px";
    h3Size = h3Size - font + "px";
    h3TitleSize = h3TitleSize - font + "px";
    h4Size = h4Size - font + "px";
    h5ASize = h5ASize - font + "px";
    h5Size = h5Size - font + "px";
    h6Size = h6Size - font + "px";
    pDescriptionSize = pDescriptionSize - font + "px";
		pCardSize = pCardSize - font + "px";
    pSize = pSize - font + "px";
		pDisciplinaSize = pDisciplinaSize - font + "px";
    aBtnSize = aBtnSize - font + "px";
		aNavLink = aNavLink - font + "px";
    aSize = aSize - font + "px";
    iSize = iSize - font + "px";
    alertSize = alertSize - font + "px";
		pWrapper = pWrapper - font + "px";
		listSize = listSize - font + "px";
    tableSize = tableSize - font + "px";
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
	$('.wrapper p').css({'font-size':pWrapper});
  $('p.description').css({'font-size':pDescriptionSize});
	$('#subjects p.description').css({'font-size':pDisciplinaSize});
	$('#subjects .card p').css({'font-size':pCardSize});
  $('a').css({'font-size':aSize});
  $('a.btn').css({'font-size':aBtnSize});
	$('.sidebar a.nav-link').css({'font-size':aNavLink});
  $('i').css({'font-size':iSize});
  $('.alert.alert-info').css({'font-size':alertSize});
	$('.list-content').css({'font-size':listSize});
  $('table').css({'font-size':tableSize});

}
