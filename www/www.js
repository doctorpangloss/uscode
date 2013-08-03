if (Meteor.isServer) {

}

Meteor.methods({
  update:function(root) {
    root = root || "";
    // Load in Github
    var GithubApi = Meteor.require('github');
    var github = new GithubApi({
      version: "3.0.0"
    });
    // Load in xml2js
    var parseXml = Meteor.require('xml2js').parseString;
    // Pull latest from git
    
    // Download from US code website into raw

    // Parse US Code

    // Shuffle into appropriate directories

    // Commit

    // Upload

  }
});