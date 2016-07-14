script = function(){
                newTabPanel = $('#new');
                newTab = $('#newTab');
 
                genLi = function(){
                                $('.active').removeClass('active');
                                var prodName = $('#newProductName').val();
                                var newLi = $('<li role="presentation" class="active" id="newTab"><a href="#' + prodName + '" role="tab" data-toggle="tab">'+ prodName +'</a></li>');
                                newTab.before(newLi);
                                genNewTabCont(prodName);
                }
                genNewTabCont = function(id){
                                var newTabPane = $(
                                                '<div role="tabpanel" class="tab-pane active row" id="'+ id +'">' +
                                                                '<div class="col-lg-6 content-left">' +
                                                                                '<div class="prod-files">' +
                                                                                                '<h3 class="prod-header">Files:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text" class="checkbox-text">Brochure &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">PDF Specs Active &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Application Diagram &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">CMS Specs HTML &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Panel Drawing &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Videos &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-img">' +
                                                                                                '<h3 class="prod-header">Images:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Product Images &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Gallery &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                '</div>' +
                                                                '<div class="col-lg-6 content-right">' +
                                                                                '<div class="prod-page">' +
                                                                                                '<h3 class="prod-header">Product Page:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Product XML &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Features = Active &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Product Shortcuts on &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Part numbers Active &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Product Page Live &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-land">' +
                                                                                                '<h3 class="prod-header">Landing Page:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Landing Page Needed? &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Landing Page Slideshow &nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Landing Page Images &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Landing Page Active &nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-other">' +
                                                                                                '<h3 class="prod-header">Other:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Homepage Slide&nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Regen Search Suggestion&nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Regen Nav Bar&nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Regen Product shortcuts&nbsp;</span><input class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">AE Specs&nbsp;</span><input class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                '</div>' +
                                                '</div>'
                                );
                                newTabPanel.before(newTabPane);
                }
}