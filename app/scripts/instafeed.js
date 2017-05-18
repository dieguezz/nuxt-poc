'use strict';

(function() {
  if ($('#instafeed').length) {
    setTimeout(function() {
      var feed = new Instafeed({
        get: 'user',
        userId: '4535397285',
        // clientId: '6669d0fed88e4c25b34377c649021696'
        accessToken: '4535397285.6669d0f.410827d568db4dbe9d1f91ff2af00c6e',
        resolution: 'standard_resolution',
        limit: 4,
      });
      feed.run();
    });
  }
})();
