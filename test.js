! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).loadcf = {})
}(this, function(a) {
    "use strict";

   
	function n(b,e){
    var s, r, t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.dataset.cfBeacon = '{"token": "' + b + '}"}';
    s.defer = true;
	console.log("load beacon");
	console.log(b);
	console.log(s.dataset);
    s.onload = s.onreadystatechange = function() {
      console.log('loading done')	  
	};
  
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
	console.log('added to dom');
  }
   

   

   
    var t = 'adsfasdf';
	

    function e(t, e) {
        void 0 === e && (e = r), this.projectId = t, this.options = e, this.uniques = {}, this.trackPageData = null, this.trackPageChange = this.trackPageChange.bind(this), this.trackLastPageTimeSpent = this.trackLastPageTimeSpent.bind(this)
    }
    a.DEFAULT_APP = null, a.init = function(t, e) {        
        console.log('running init');
		console.log(t);
		return n(t, e), a.DEFAULT_APP
    }, a.parameters = t, 
    Object.defineProperty(a, "__esModule", {
        value: !0
    })
});