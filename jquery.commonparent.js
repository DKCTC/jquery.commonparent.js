(function($) {
	//plugins for finding common parent elements in a set of elements
	$.fn.commonParents = function (exclude){
		//-exclude: exclude the matched elements from the returned result
		//if there is only one element, return it
		if(this.length == 1){ return this; }
		var cachedThis = this,
			//include the first item in case it contains the rest of the elements
			//-this reverses the order of the elements in the obj
			//--$.parents returns the elements traveling up the tree
			//--adding the first passed node reverses the order
			parents = cachedThis.first().parents().add(cachedThis.first())
				.filter(function () {
					//if the first element contains the rest of them, include it
					return (!exclude && !!$(this).is(cachedThis) && cachedThis.first().find(cachedThis).length == cachedThis.not(cachedThis.first()).length)
						|| $(this).find(cachedThis).length === cachedThis.length;
				});
		
		return parents;
	};
	$.fn.commonParent = function (exclude){
		//-exclude: exclude the matched elements from the returned result
		//return the common parent that is closest to the elements
		return $(this).commonParents(exclude).last();
	};
}(jQuery));