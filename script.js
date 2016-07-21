script = function(){
                var newTabPanel = $('#new');
                var newTab = $('#newTab');

                /**If there are spaces in the product name replace them
                with _ because the product name is used for the ID**/
                sanitize = function(x){
                                var sanitized = x;
                                sanitized = sanitized.replace(' ' , '_');
                                return sanitized;
                };
                /**Generates new tab with ID = tabname **/
                genLi = function(){
                                $('.active').removeClass('active');
                                var prodName = $('#newProductName').val();
                                var prodNameSanitized = sanitize(prodName);

                                var newLi = $('<li role="presentation" class="active" id="newTab"><a href="#' + prodNameSanitized + '" role="tab" data-toggle="tab">'+ prodName +'</a></li>');
                                newTab.before(newLi);
                                genNewTabCont(prodNameSanitized);
                };
                /**Generates new tab content (checkboxes)**/
                genNewTabCont = function(id){
                                var newTabPane = $(
                                                '<div role="tabpanel" class="tab-pane active row" id="'+ id +'" onmouseup="countChecked('+ id +')">' +
                                                                '<div class="col-lg-6 content-left">' +
                                                                                '<div class="prod-files">' +
                                                                                                '<h3 class="prod-header">Files:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text" class="checkbox-text">Brochure &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">PDF Specs Active &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Application Diagram &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">CMS Specs HTML &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Panel Drawing &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Videos &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-img">' +
                                                                                                '<h3 class="prod-header">Images:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Product Images &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Gallery &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
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
                                                                                                                                '<span class="checkbox-text">Product XML &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Features = Active &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Product Shortcuts on &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Part numbers Active &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Product Page Live &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-land">' +
                                                                                                '<h3 class="prod-header">Landing Page:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Landing Page Needed? &nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Landing Page Slideshow &nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Landing Page Images &nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Landing Page Active &nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                                '<div class="prod-other">' +
                                                                                                '<h3 class="prod-header">Other:</h3>' +
                                                                                                '<div class="row">' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Homepage Slide&nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Regen Search Suggestion&nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">Regen Nav Bar&nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                                '<div class="col-sm-6">' +
                                                                                                                                '<span class="checkbox-text">Regen Product shortcuts&nbsp;</span><input id=' + id + '  class="checkbox" type="checkbox"><br>' +
                                                                                                                                '<span class="checkbox-text">AE Specs&nbsp;</span><input id=' + id + ' class="checkbox" type="checkbox">' +
                                                                                                                '</div>' +
                                                                                                '</div>' +
                                                                                '</div>' +
                                                                '</div>' +
                                                                '<div id="myProgress">' +
                                                                                '<div id=' + id + ' class="myBar"></div>' +
                                                                '</div>' +
                                                '</div>'
                                );
                                newTabPanel.before(newTabPane);
                };
                /**Checks if "Enter" was pressed, if it was add the product
                to a new tab**/
                $('#new').keypress(function(e){
                                var key = e.which;
                                if(key == 13) 
                                {
                                                genLi();
                                }
                })
                countChecked = function(barID) {

                }
}
