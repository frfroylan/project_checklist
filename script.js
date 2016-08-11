// Document.Ready is the function that runs once on page load.
// Wire up your event listeners here
$(document).ready(function () {
	$('#new').keypress(function (e) {
		var key = e.which;
		if (key == 13) {
			AddTabFromTemplate($('#newProductName').val());
		}
	})

	$('#btnAddNew').on('click', function () {
		AddTabFromTemplate($('#newProductName').val());
	});

	// Listen for all js-deletetab in the context of #tab-content, even if the tab panels are dynamically generated
	$('#tab-content').on('click', '.js-deletetab', function () {
		// Find the parent tab-pane's ID and call the Remove Tab function
		RemoveTab($(this).parents('.tab-pane').attr('id'));
	});
});

// Other functions can go outisde document.ready and are available to call any time
function AddTabFromTemplate(newID) {
	// Sanitize ID in here is fine
	var domID = newID.replace(/ /g, '_');

	// Make a copy of the template
	$newTab = $('#template').clone();
	$newTab.attr('id', domID);

	// Insert the new tab page right before our "new" tab.
	$newTab.insertBefore('#new');

	// Create the tab item, too
	var tab = $('<li role="presentation"><a href="#' + domID + '" role="tab" data-toggle="tab">' + newID + '</a></li>').insertBefore('#newTab');
	tab = tab.find('a');

	//Update ProgressBar
	ProgressBar($newTab, tab);

}

//Uses the newly created tab to target its progress bar
function ProgressBar( currentTab, liTab){
	//Grab all the checkboxes
	var checkboxes = currentTab.find('.checkbox');
	liTab.css({ 
		'background-color': '#D9534F',// red = #D9534F;
		'color': 'white'
	});
	//Grab the Landing required checkboxes
	var landDisp = currentTab.find('.land-display');
	var landingPage = currentTab.find('.req');
	var landReq = false;
	landDisp.css('display', 'none');

	//If landing page is required display the rest of the checkboxes
	//	and updated the landReq bool
	landingPage.on('click', function(){
		if(landReq === false){
			landDisp.toggle();
			landReq = true;
		}
		else if(landReq === true){
			landDisp.toggle();
			landReq = false;
		}
	})

	checkboxes.on('click', function(){
		var emptyValue = 0;
		//Checks each checkbox in the tab for checked or not checked
		checkboxes.each(function() {				
			if($(this).is(':checked')){
				//If the landing required checkbox is checked update 
				//	the value of the emptyValue for progress bar
				if(landReq === false){
					emptyValue += 5.3;
				}
				else if(landReq === true){
					emptyValue += 4.4;
				}
			}
		});

		//Progressbar update section
		if(emptyValue > 30 && emptyValue < 70 ){
			currentTab.find('.progress-bar').removeClass('progress-bar-danger');
			currentTab.find('.progress-bar').addClass('progress-bar-warning');
			liTab.css('background-color', '#F0AD4E');// yellow = #F0AD4E;
		}
		else if(emptyValue >= 70){
			currentTab.find('.progress-bar').removeClass('progress-bar-warning');
			currentTab.find('.progress-bar').addClass('progress-bar-success');
			liTab.css('background-color', '#5CB85C');// green = #5CB85C;
		}
		currentTab.find('.progress-bar').css('width', emptyValue + '%').attr('aria-valuenow', emptyValue);
	});
}

function RemoveTab(targetID) {
	// This function will remove a tab by ID.
	$('#' + targetID).remove(); // remove the Tab-Pane

	// In the Tabs UL, find the href and remove the parent li associated.
	$('#tabs').find('[href="#' + targetID + '"]').parent('li').remove();
}
