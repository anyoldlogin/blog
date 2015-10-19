Template.home.created = function(){
  console.log('Created the home template');
};
Template.home.rendered = function(){
  console.log('Rendered the home template');
};

Template.home.destroyed = function(){
  console.log('Destroyed the home template');
};

Template.home.helpers({
  postsList: function(){
    return Posts.find({}, {sort: {timeCreated: -1}});
  }
});

Template.home.events({
  'click button.lazyload': function(e, template){
  var currentLimit = Session.get('lazyloadLimit');

  Session.set('lazyloadLimit', currentLimit + 2);
  }
});
