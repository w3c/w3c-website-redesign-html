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
set('build_root', getenv('HOME') . '/.deployer');

// Hosts

host('development')
    ->stage('development')
    ->hostname('128.30.54.149')
    ->user('studio24')
    ->set('deploy_path','/var/www/vhosts/w3c-redesign-prototype/development');


// Tasks
desc('W3C Website redesign - HTML prototype');
task('local:build', function () {

    //  Set local Deployment directory
    $buildRoot = get('build_root');

    //  Create local Deployment directory
    if (!file_exists($buildRoot)) {
        writeln('Creating Deployment Directory');
        mkdir($buildRoot);
    } else {
        writeln('Deployment Directory exists, skipping');
    }

    //  Set project root directory for build
    $buildPath = $buildRoot.'/'.run('basename {{repository}} .git');

    //  Remove previous local build
    if (!file_exists($buildPath)) {
        writeln('No previous build');
    } else {
        run('rm -rf '.$buildPath);
        writeln('Removed previous build');
    }

    writeln('Cloning Repository (Branch: <info>{{branch}}</info>)');

    //  Clone the required branch to the local build directory
    run('git clone --single-branch --branch {{branch}} {{repository}} '.$buildPath);

    writeln('Clone complete');

    cd($buildPath);

    writeln('Installing NPM build dependencies');

    //  Set NVM via the .nvmrc file and run NPM build commands.
    run('source ~/.nvm/nvm.sh && nvm use');
    run('npm install');

    writeln('Running NPM tasks');

    run('npm run build');

    writeln('Build complete.');

})->local();


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
    'local:build',
    'deploy:update_code',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');


