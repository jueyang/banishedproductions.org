var photoSetId = "{{page.flickr}}";
var flickrApi = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=19493fa9bbf4ab6081b55b2df529144d&photoset_id=" + photoSetId + "&format=json&nojsoncallback=1";
$.getJSON(flickrApi, function(res) {
	var photos = res.photoset.photo;
	for (var i = 0; i<9 ;i++){
		var photoUrl = "http:\/\/farm"+ photos[i].farm +
			".staticflickr.com\/" + photos[i].server + 
			"\/"+ photos[i].id + 
			"_"+photos[i].secret +
			"_q.jpg"
        var pic  = $('#flickr').append('<img class="col4" id="photo'+ i +'" src="'+photoUrl+ '"/>');
	}
});