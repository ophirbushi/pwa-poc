module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/material-themes/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
};
