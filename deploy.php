<?php

namespace Deployer;

require 'recipe/common.php';


set('http_user', 'apache');

// Project name
set('application', 'W3C Website redesign - HTML prototype');

// Project repository
set('repository', 'git@github.com:w3c/w3c-website-redesign-html.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
set('shared_files', ['']);
set('shared_dirs', ['']);

// Writable dirs by web server
set('writable_dirs', ['']);
set('allow_anonymous_stats', false);

// Custom
set('keep_releases', 10);
set('build_root', '~/sites/');

// Hosts

host('development')
    ->stage('development')
    ->hostname('128.30.54.149')
    ->user('studio24')
    ->set('deploy_path','/var/www/vhosts/w3c-redesign-prototype/development');


// Tasks
desc('W3C Website redesign - HTML prototype');

task('deploy:update_code', function () {

    $buildRoot = get('build_root');
    $directory = run('basename {{repository}} .git');

    writeln("<info>Uploading files to server</info>");
    upload($buildRoot.'/'.$directory.'/', '{{release_path}}');
});


task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');


