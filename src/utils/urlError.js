//
//  urlError
//

// Throw an error when a URL is needed, and none is supplied.

var urlError = function() {
  throw new Error('A "url" property or function must be specified');
};

export default urlError;
