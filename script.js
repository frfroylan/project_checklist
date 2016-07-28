var landReq = false;

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
	$('<li role="presentation"><a href="#' + domID + '" role="tab" data-toggle="tab">' + newID + '</a></li>').insertBefore('#newTab');

	//Update ProgressBar
	ProgressBar($newTab);

	//If landing page is required show those checkboxes
	$('.land-display').css('display', 'none');
	$('.land-req').on('click', function() {
		//Change the value of the progress bar increments to accommodate new checkboxes
		landReq = true;
		$('.land-display').toggle();
	});

}

//Uses the newly created tab to target its progress bar
function ProgressBar( currentTab){
	var checkboxes = currentTab.find('.checkbox');
	checkboxes.on('click', function(){
		var emptyValue = 0;

		//Checks each checkbox in the tab for checked or not checked
		checkboxes.each(function() {
			if($(this).is(':checked')){
				if(landReq === false){
					emptyValue += 5.4;
				}
				else{
					emptyValue += 4.6;
				}
			}
		});
		if(emptyValue > 30 && emptyValue < 70 ){
			currentTab.find('.progress-bar').removeClass('progress-bar-danger');
			currentTab.find('.progress-bar').addClass('progress-bar-warning');
		}
		else if(emptyValue >= 70){
			currentTab.find('.progress-bar').removeClass('progress-bar-warning');
			currentTab.find('.progress-bar').addClass('progress-bar-success');
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
