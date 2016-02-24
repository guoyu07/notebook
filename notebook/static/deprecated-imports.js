// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// TODO: Remove me in notebook version 6.0

[
    'edit/js/savewidget',
    'edit/js/main',
    'edit/js/menubar',
    'edit/js/editor',
    'edit/js/notificationarea',
    'base/js/keyboard',
    'base/js/dialog',
    'base/js/notificationwidget',
    'base/js/namespace',
    'base/js/utils',
    'base/js/notificationarea',
    'base/js/events',
    'base/js/security',
    'base/js/page',
    'auth/js/main',
    'auth/js/logoutmain',
    'auth/js/loginmain',
    'auth/js/loginwidget',
    'terminal/js/main',
    'terminal/js/terminado',
    'notebook/js/toolbar',
    'notebook/js/savewidget',
    'notebook/js/main',
    'notebook/js/completer',
    'notebook/js/contexthint',
    'notebook/js/textcell',
    'notebook/js/cell',
    'notebook/js/tour',
    'notebook/js/menubar',
    'notebook/js/mathjaxutils',
    'notebook/js/codecell',
    'notebook/js/codemirror-ipython',
    'notebook/js/kernelselector',
    'notebook/js/codemirror-ipythongfm',
    'notebook/js/celltoolbarpresets/example',
    'notebook/js/celltoolbarpresets/default',
    'notebook/js/celltoolbarpresets/slideshow',
    'notebook/js/celltoolbarpresets/rawcell',
    'notebook/js/tooltip',
    'notebook/js/maintoolbar',
    'notebook/js/about',
    'notebook/js/notificationarea',
    'notebook/js/quickhelp',
    'notebook/js/actions',
    'notebook/js/pager',
    'notebook/js/searchandreplace',
    'notebook/js/keyboardmanager',
    'notebook/js/notebook',
    'notebook/js/scrollmanager',
    'notebook/js/outputarea',
    'notebook/js/celltoolbar',
    'notebook/js/commandpalette',
    'tree/js/sessionlist',
    'tree/js/main',
    'tree/js/kernellist',
    'tree/js/newnotebook',
    'tree/js/terminallist',
    'tree/js/notebooklist',
    'services/sessions/session',
    'services/contents',
    'services/kernels/serialize',
    'services/kernels/comm',
    'services/kernels/kernel',
    'services/config'
].forEach(function (modulePath) {
    define(modulePath, ['notebook'], function(notebookApp) {
        console.warn(["Direct module require deprecated.  Instead of using",
            "`define(['" + modulePath + "'], function(module) {});`, use",
            "`define(['notebook'], function(notebookApp) { var module = ",
            "notebookApp['" + modulePath + "']});`"].join(' '));
        return notebookApp[modulePath];
    });
});