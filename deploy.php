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


// Hosts

host('development')
    ->stage('development')
    ->hostname('128.30.54.149')
    ->user('studio24')
    ->set('deploy_path','/var/www/vhosts/w3c-redesign-prototype/development');


// Tasks
desc('W3C Website redesign - HTML prototype');
task('build', function () {
//    run('mkdir $HOME/.deployer');
    $home = getenv('HOME');
    $homebuild = $home.'/.deployer';
    if (!file_exists($home.'/.deployer')) {
        writeln('Creating Deployment Directory');
        run('mkdir $HOME/.deployer'); }
    else {
        writeln('Deployment Directory exists, skipping');
    }

    $directory = run('basename {{repository}} .git');

    if (file_exists($home.'/.deployer/'.$directory)) {
        writeln('Removing previous files');
        run('rm -rf '.$home.'/.deployer/'.$directory);
        run('git clone --single-branch --branch {{branch}} {{repository}} '.$home.'/.deployer/'.$directory); }
        else {
        writeln('OOOps');
    }


    run('cd '.$homebuild.'/'.$directory);
//    run('cd ../.deployer/'.$directory  .' && source ~/.nvm/nvm.sh && nvm use');
//    run('cd ../.deployer/'.$directory  .' && npm install');
//    run('cd ../.deployer/'.$directory  .' && npm run build');
})->local();

task('deploy', [
    'build',
//    'release',
//    'cleanup',
//    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');


