if (Meteor.isServer) {

}

Meteor.methods({
  update:function(root) {
    root = root || "";
    // Load fs
    var Fs = Meteor.require('fs');

    // Load git
    var Repo = Meteor.require('git').Repo;
    var Git = Meteor.require('git').Git;
    var Commit = Meteor.require('git').Commit;
    var GitFileOperations = Meteor.require('git').GitFileOperations;

    // Load Github
    var Github = new Meteor.require('github')({
      version: "3.0.0"
    });

    // Load in xml2js
    var parseXml = Meteor.require('xml2js').parseString;

    Meteor.sync(function(done){
      // Download from US code website into raw

      // Parse US Code

      // Shuffle into appropriate directories

      // Commit

      // Upload

      // Finish
      done();
    });


  }
});