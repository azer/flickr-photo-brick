var Brick = require("brick");
var PTSerif = require("pt-serif");
var formatDate = require("format-date");

var Photo = Brick(PTSerif, {
  New: New,
  ready: ready,
  show: show
});

module.exports = Photo;

function New () {
  var photo = Photo.apply(this, arguments);
  photo.date = formatDate('{day} {month-name}, {day-name} {hours}:{minutes}', new Date(Number(photo.date_faved * 1000)));
  return photo;
}

function show (photo) {
  photo.brick.bind('.photo', {
    'data-id': photo.id,
    'style': 'background-image:url(' + photo.urls.medium + ')',
    'data-url': photo.urls.large,
    'href': 'http://flickr.com/' + photo.owner + '/' + photo.id
  });
}

function ready (photo) {
  photo.brick.element.style('display', 'block');
}
