// CloudFront Function: Viewer Request
// Appends /index.html to directory-style URLs so S3 serves the correct file.
// Deploy as a CloudFront Function associated with the Viewer Request event.

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // If URI ends with '/' add index.html
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  // If URI doesn't have a file extension, assume it's a directory and add /index.html
  else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }

  return request;
}
