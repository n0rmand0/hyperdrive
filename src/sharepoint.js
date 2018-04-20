// var siteUrl = '/sites/MySiteCollection';
var siteUrl = 'https://pncilab.sharepoint.com/sites/Release-the-Friction';
var rtfTitle = 'CAPPM';

function retrieveListItems(title) {

    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle(rtfTitle);
        // Title
		// Phase
		// SubPhase
		// uType
		// Status
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><Query><Where><Geq><FieldRef Name=\'Title\'/>' +
        '<Value Type=\'String\'>1</Value></Geq></Where></Query><RowLimit>1</RowLimit></View>');
    this.collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem);

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}

function onQuerySucceeded(sender, args) {

    var listItemInfo = '';

    var listItemEnumerator = collListItem.getEnumerator();

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        listItemInfo += '\nProjectID: ' + oListItem.get_id() +
            ', Title: ' + oListItem.get_item('Title') +
            ', Phase: ' + oListItem.get_item('Phase') +
            ', SubPhase: ' + oListItem.get_item('SubPhase') +
            ', uType: ' + oListItem.get_item('uType') +
            ', Status: ' + oListItem.get_item('Status');
	}

    alert(listItemInfo.toString());
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

export default retrieveListItems;
