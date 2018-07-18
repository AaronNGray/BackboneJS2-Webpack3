//
//
//

import $ from 'jQuery';

// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
// Override this if you'd like to use a different library.
function ajax() {
  return $.ajax.apply($, arguments);
}

export default ajax;
