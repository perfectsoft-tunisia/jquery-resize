Package.describe({
    name: 'team-titanis:jquery-resize',
    version: '1.2.0',
    summary: 'bind resize event handlers to elements other than window, for super-awesome-resizing-greatness!',
    git: 'https://github.com/Team-Titanis/jquery-resize',
    documentation: 'README.markdown'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use('jquery', 'client');

    api.addFiles([
        'jquery.ba-resize.js'
    ], 'client', {bare: true});
});