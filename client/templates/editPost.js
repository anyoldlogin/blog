Template.editPost.events({
  'submit form': function(e, tmpl) {
    e.preventDefault();
    var form = e.target,
      user = Meteor.user(),
      _this = this; // we need this to reference the slug in the callback

    // Edit the post
    if (this._id) {

      Posts.update(this._id, {
        $set: {
          title: form.title.value,
          description: form.description.value,
          text: form.text.value

        }
      }, function(error) {
        if (error) {
          // display the error to the user
          alert(error.reason);
        } else {
          // Redirect to the post
          Router.go('Post', {
            slug: _this.slug
          });
        }
      });


      // SAVE
    } else {

      Posts.insert({
        title: form.title.value,
        slug: slug,
        description: form.description.value,
        text: form.text.value,
        timeCreated: moment().unix(),
        author: user.profile.name,
        owner: user._id

      }, function(error) {
        if (error) {
          // display the error to the user
          alert(error.reason);
        } else {
          // Redirect to the post
          Router.go('Post', {
            slug: slug
          });
        }
      });


    }
  }
});
