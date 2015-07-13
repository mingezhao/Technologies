require.config({
    paths: {
        //jquery: '../lib/jquery/jquery',
        angular: '../lib/angular/angular',
        angularBootstrap: '../lib/angular-bootstrap/ui-bootstrap-tpls',
        app: 'app',
        appContollers: 'app-controllers'
    }
});

require(['angular', 'angularBootstrap', 'app', 'appContollers'], function ($) {

});
