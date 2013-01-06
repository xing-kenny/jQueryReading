1. -----------------------------------------
git clone git://github.com/jquery/jquery.git
npm install -g grunt-cli
cd jquery && npm install
grunt -version
grunt

2. -----------------------------------------

	1. Set up a MySQL database and create a user with read and write access.
	2. Copy config/sample-localSettings.php to config/localSettings.php
	   Copy config/sample-localSettings.json to config/localSettings.json.
	   Edit localSettings.json and replace the sample settings with your own.
	3. For Apache:
	   Copy config/sample-.htaccess to .htaccess.
	4. Copy config/sample-robots.txt to robots.txt
	5. Set storage.cacheDir to a writable directory that is not readable from the web. 
	6. Install the TestSwarm database by running: php scripts/dbInstall.php
	7. Fetch the latest user-agent information: php inc/libs/ua-parser/php/uaparser-cli.php -g
        E:\GitHub\fork\testswarm\inc\libs\ua-parser\php>php uaparser-cli.php -g
	    getting the YAML file...
		failed to get the file...	
	8. Create an entry in your crontab for action=cleanup. This performs various cleaning duties such as making timed-out runs available again.
	   * * * * * curl -s http://swarm.example.org/api.php?action=cleanup > /dev/null      	    

3. -----------------------------------------
//with --recursive, can getting Submodule, and then can Running "update_submodules" task seccessfully.

E:\GitHub\fork>git clone --recursive git@github.com:xing-kenny/jquery.git
npm install
E:\GitHub\fork\jquery>grunt.cmd

E:\GitHub\fork\jquery>git remote add upstream git://github.com/jquery/jquery.git
E:\GitHub\fork\jquery>git remote -v
E:\GitHub\fork\jquery>git pull upstream master

E:\GitHub\fork\jquery>git checkout master
E:\GitHub\fork\jquery>git checkout -b bug_####
E:\GitHub\fork\jquery>git add test.md
E:\GitHub\fork\jquery>git commit -m "test for fix bug_####"
E:\GitHub\fork\jquery>git push origin -u bug_####
//now the brance 'bug_####' generated on the github,  click on "Pull Request" 

E:\GitHub\fork>git clone --recursive git@github.com:xing-kenny/jquery.git
Cloning into 'jquery'...
remote: Counting objects: 26347, done.
remote: Compressing objects: 100% (6911/6911), done.
emote: Total 26347 (delta 19316), reused 25725 (delta 18846)
Receiving objects: 100% (26347/26347), 14.01 MiB | 19 KiB/s, done.
Resolving deltas: 100% (19316/19316), done.
Submodule 'src/sizzle' (git://github.com/jquery/sizzle.git) registered for path 'src/sizzle'
Submodule 'test/qunit' (git://github.com/jquery/qunit.git) registered for path 'test/qunit'
Cloning into 'src/sizzle'...
remote: Counting objects: 2534, done.
remote: Compressing objects: 100% (957/957), done.
rRemote: Total 2534 (delta 1605), reused 2386 (delta 1476)
Receiving objects: 100% (2534/2534), 1.10 MiB | 33 KiB/s, done.
Resolving deltas: 100% (1605/1605), done.
Submodule path 'src/sizzle': checked out '19c7b3440385c9f628a7bc1c5769f6946fcc6887'
Submodule 'speed/benchmark.js' (git://github.com/bestiejs/benchmark.js.git) registered for path 'speed/benchmark.js'
Cloning into 'speed/benchmark.js'...
remote: Counting objects: 4060, done.
remote: Compressing objects: 100% (1316/1316), done.
remote: Total 4060 (delta 2463), reused 4005 (delta 2411)
Receiving objects: 100% (4060/4060), 2.95 MiB | 22 KiB/s, done.
Resolving deltas: 100% (2463/2463), done.
Submodule path 'speed/benchmark.js': checked out '985bdb69d60e259b7b4c7d35296d1d8638565296'
Cloning into 'test/qunit'...
remote: Counting objects: 2490, done.
remote: Compressing objects: 100% (1367/1367), done.
Receiving objects: 100% (2490/2490), 399.89 KiB | 32 KiB/s, done.

Resolving deltas: 100% (1322/1322), done.
Submodule path 'test/qunit': checked out '900f72051b0112342feda3d700a7a049d886b9ce'


E:\GitHub\fork>cd jquery

E:\GitHub\fork\jquery>ls

E:\GitHub\fork\jquery>dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 6D43-C740

 E:\GitHub\fork\jquery 的目录

2013/01/06  11:43    <DIR>          .
2013/01/06  11:43    <DIR>          ..
2013/01/06  11:43               595 .editorconfig
2013/01/06  11:43                26 .gitattributes
2013/01/06  11:43               155 .gitignore
2013/01/06  11:43               171 .gitmodules
2013/01/06  11:43               196 .jshintrc
2013/01/06  11:43             5,969 AUTHORS.txt
2013/01/06  11:43    <DIR>          build
2013/01/06  11:43             8,097 CONTRIBUTING.md
2013/01/06  11:43            12,346 Gruntfile.js
2013/01/06  11:43             1,099 MIT-LICENSE.txt
2013/01/06  11:43               952 package.json
2013/01/06  11:43            10,324 README.md
2013/01/06  11:43    <DIR>          speed
2013/01/06  11:43    <DIR>          src
2013/01/06  11:43    <DIR>          test
              11 个文件         39,930 字节
               6 个目录  6,594,879,488 可用字节

E:\GitHub\fork\jquery>grunt.cmd
grunt-cli: The grunt command line interface. (v0.1.6)

Fatal error: Unable to find local grunt.

If you're seeing this message, either a Gruntfile wasn't found or grunt
hasn't been installed locally to your project. For more information about
installing and configuring grunt, please see the Getting Started guide:

http://gruntjs.com/getting-started

E:\GitHub\fork\jquery>npm install
npm http GET https://registry.npmjs.org/grunt-git-authors
npm http GET https://registry.npmjs.org/grunt-update-submodules
npm http GET https://registry.npmjs.org/grunt-contrib-watch
npm http GET https://registry.npmjs.org/grunt-compare-size
npm http GET https://registry.npmjs.org/grunt-contrib-uglify
npm http GET https://registry.npmjs.org/grunt-cli
npm http GET https://registry.npmjs.org/grunt-contrib-jshint
npm http GET https://registry.npmjs.org/testswarm/0.2.2
npm http GET https://registry.npmjs.org/grunt
npm http 304 https://registry.npmjs.org/grunt-compare-size
npm http 304 https://registry.npmjs.org/grunt-git-authors
npm http 304 https://registry.npmjs.org/grunt-cli
npm http 304 https://registry.npmjs.org/grunt-contrib-jshint
npm http 304 https://registry.npmjs.org/testswarm/0.2.2
npm http 304 https://registry.npmjs.org/grunt
npm http 304 https://registry.npmjs.org/grunt-contrib-watch
npm http 304 https://registry.npmjs.org/grunt-update-submodules
npm http 304 https://registry.npmjs.org/grunt-contrib-uglify
npm http GET https://registry.npmjs.org/request
npm http GET https://registry.npmjs.org/findup-sync
npm http GET https://registry.npmjs.org/nopt
npm http GET https://registry.npmjs.org/gzip-js
npm http GET https://registry.npmjs.org/jshint
npm http GET https://registry.npmjs.org/gaze
npm http GET https://registry.npmjs.org/uglify-js
npm http GET https://registry.npmjs.org/colors
npm http GET https://registry.npmjs.org/iconv-lite
npm http GET https://registry.npmjs.org/eventemitter2
npm http GET https://registry.npmjs.org/coffee-script
npm http GET https://registry.npmjs.org/async
npm http GET https://registry.npmjs.org/hooker
npm http GET https://registry.npmjs.org/rimraf
npm http GET https://registry.npmjs.org/minimatch
npm http GET https://registry.npmjs.org/glob
npm http GET https://registry.npmjs.org/lodash
npm http GET https://registry.npmjs.org/which
npm http GET https://registry.npmjs.org/underscore.string
npm http GET https://registry.npmjs.org/dateformat/1.0.2-1.2.3
npm http GET https://registry.npmjs.org/js-yaml
npm http 304 https://registry.npmjs.org/request
npm http 304 https://registry.npmjs.org/gzip-js
npm http 304 https://registry.npmjs.org/nopt
npm http 304 https://registry.npmjs.org/jshint
npm http 304 https://registry.npmjs.org/uglify-js
npm http 304 https://registry.npmjs.org/colors
npm http 304 https://registry.npmjs.org/iconv-lite
npm http 304 https://registry.npmjs.org/eventemitter2
npm http 304 https://registry.npmjs.org/coffee-script
npm http 304 https://registry.npmjs.org/gaze
npm http 304 https://registry.npmjs.org/async
npm http 304 https://registry.npmjs.org/hooker
npm http 304 https://registry.npmjs.org/rimraf
npm http 304 https://registry.npmjs.org/minimatch
npm http 304 https://registry.npmjs.org/glob
npm http 304 https://registry.npmjs.org/which
npm http 304 https://registry.npmjs.org/underscore.string
npm http GET https://registry.npmjs.org/crc32
npm http GET https://registry.npmjs.org/deflate-js
npm http 304 https://registry.npmjs.org/dateformat/1.0.2-1.2.3
npm http 304 https://registry.npmjs.org/js-yaml
npm http GET https://registry.npmjs.org/minimatch
npm http GET https://registry.npmjs.org/cli/0.4.3
npm http 304 https://registry.npmjs.org/deflate-js
npm http GET https://registry.npmjs.org/glob
npm http GET https://registry.npmjs.org/minimatch
npm http GET https://registry.npmjs.org/lodash
npm http GET https://registry.npmjs.org/async
npm http 304 https://registry.npmjs.org/cli/0.4.3
npm http 304 https://registry.npmjs.org/lodash
npm http GET https://registry.npmjs.org/optimist
npm http 304 https://registry.npmjs.org/glob
npm http GET https://registry.npmjs.org/source-map
npm http 304 https://registry.npmjs.org/minimatch
npm http 304 https://registry.npmjs.org/lodash
npm http 304 https://registry.npmjs.org/async
npm http 304 https://registry.npmjs.org/optimist
npm http 304 https://registry.npmjs.org/source-map
npm http 304 https://registry.npmjs.org/crc32
npm http 304 https://registry.npmjs.org/findup-sync
npm http GET https://registry.npmjs.org/sigmund
npm http GET https://registry.npmjs.org/lru-cache
npm http GET https://registry.npmjs.org/inherits
npm http GET https://registry.npmjs.org/graceful-fs
npm http GET https://registry.npmjs.org/glob
npm http GET https://registry.npmjs.org/lodash
npm http GET https://registry.npmjs.org/abbrev
npm http GET https://registry.npmjs.org/graceful-fs
npm http GET https://registry.npmjs.org/wordwrap
npm http 304 https://registry.npmjs.org/graceful-fs
npm http 304 https://registry.npmjs.org/sigmund
npm http 304 https://registry.npmjs.org/inherits
npm http GET https://registry.npmjs.org/amdefine
npm http 304 https://registry.npmjs.org/lodash
npm http 304 https://registry.npmjs.org/graceful-fs
npm http 304 https://registry.npmjs.org/wordwrap
npm http 304 https://registry.npmjs.org/glob
npm http 304 https://registry.npmjs.org/amdefine
npm http GET https://registry.npmjs.org/inherits
npm http GET https://registry.npmjs.org/graceful-fs
npm http 304 https://registry.npmjs.org/abbrev
npm http GET https://registry.npmjs.org/minimatch
npm http 304 https://registry.npmjs.org/lru-cache
npm http 304 https://registry.npmjs.org/minimatch
npm http 304 https://registry.npmjs.org/inherits
npm http GET https://registry.npmjs.org/lru-cache
npm http GET https://registry.npmjs.org/glob
npm http 304 https://registry.npmjs.org/lru-cache
npm http 304 https://registry.npmjs.org/glob
npm http GET https://registry.npmjs.org/inherits
npm http 304 https://registry.npmjs.org/minimatch
npm http 304 https://registry.npmjs.org/inherits
npm http GET https://registry.npmjs.org/argparse
npm http 304 https://registry.npmjs.org/graceful-fs
npm http GET https://registry.npmjs.org/lru-cache
npm http GET https://registry.npmjs.org/sigmund
npm http 304 https://registry.npmjs.org/argparse
npm http 304 https://registry.npmjs.org/lru-cache
npm http GET https://registry.npmjs.org/underscore
npm http GET https://registry.npmjs.org/underscore.string
npm http 304 https://registry.npmjs.org/sigmund
npm WARN prefer global grunt-cli@0.1.6 should be installed with -g
npm http 304 https://registry.npmjs.org/underscore
npm http 304 https://registry.npmjs.org/underscore.string
grunt-git-authors@1.1.0-beta.1 node_modules\grunt-git-authors

grunt-update-submodules@0.2.0 node_modules\grunt-update-submodules

testswarm@0.2.2 node_modules\testswarm
└── request@2.12.0

grunt-contrib-watch@0.2.0a node_modules\grunt-contrib-watch
└── gaze@0.3.1 (async@0.1.22, glob@3.1.14, minimatch@0.2.9, lodash@0.10.0)

grunt-contrib-uglify@0.1.0 node_modules\grunt-contrib-uglify
├── uglify-js@2.2.3 (optimist@0.3.5, source-map@0.1.8)
└── gzip-js@0.3.1 (crc32@0.2.2, deflate-js@0.2.2)

grunt-compare-size@0.3.1 node_modules\grunt-compare-size
└── gzip-js@0.3.1 (crc32@0.2.2, deflate-js@0.2.2)

grunt-contrib-jshint@0.1.0 node_modules\grunt-contrib-jshint
└── jshint@0.9.1 (minimatch@0.0.5, cli@0.4.3)

grunt-cli@0.1.6 node_modules\grunt-cli
├── nopt@1.0.10 (abbrev@1.0.3)
└── findup-sync@0.1.1 (lodash@0.9.2, glob@3.1.14)

grunt@0.4.0rc4 node_modules\grunt
├── dateformat@1.0.2-1.2.3
├── which@1.0.5
├── colors@0.6.0-1
├── findup-sync@0.1.1
├── hooker@0.2.3
├── async@0.1.22
├── eventemitter2@0.4.11
├── rimraf@2.0.3 (graceful-fs@1.1.14)
├── glob@3.1.14 (inherits@1.0.0, graceful-fs@1.1.14)
├── iconv-lite@0.2.7
├── coffee-script@1.3.3
├── underscore.string@2.2.0rc
├── nopt@1.0.10 (abbrev@1.0.3)
├── minimatch@0.2.9 (sigmund@1.0.0, lru-cache@2.0.4)
├── lodash@0.9.2
└── js-yaml@1.0.3 (argparse@0.1.10)

E:\GitHub\fork\jquery>grunt.cmd
Running "update_submodules" task

Running "selector:src/selector.js" (selector) task
File 'src/selector.js' created.

Running "build:dist/jquery.js:*" (build) task
File 'dist/jquery.js' created.

Running "jshint:dist" (jshint) task
>> 1 file lint free.

Running "jshint:grunt" (jshint) task
>> 1 file lint free.

Running "jshint:tests" (jshint) task
>> 22 files lint free.

Running "uglify:all" (uglify) task
File "dist/jquery.min.js" created.
Uncompressed size: 239254 bytes.
Compressed size: 29543 bytes gzipped (82438 bytes minified).

Running "dist:*" (dist) task

Running "compare_size" task
Sizes
    239254         (-)  dist/jquery.js
    125327         (-)  dist/jquery.min.map
     82493         (-)  dist/jquery.min.js
     29574         (-)  dist/jquery.min.js.gz

Saved as: master

Done, without errors.


E:\GitHub\fork\jquery>git remote add upstream git://github.com/jquery/jquery.git

E:\GitHub\fork\jquery>git remote -v
origin  git@github.com:xing-kenny/jquery.git (fetch)
origin  git@github.com:xing-kenny/jquery.git (push)
upstream        git://github.com/jquery/jquery.git (fetch)
upstream        git://github.com/jquery/jquery.git (push)

E:\GitHub\fork\jquery>git pull upstream master
From git://github.com/jquery/jquery
 * branch            master     -> FETCH_HEAD
Already up-to-date.

E:\GitHub\fork\jquery>grunt.cmd
Running "update_submodules" task

Running "selector:src/selector.js" (selector) task
File 'src/selector.js' created.

Running "build:dist/jquery.js:*" (build) task
File 'dist/jquery.js' created.

Running "jshint:dist" (jshint) task
>> 1 file lint free.

Running "jshint:grunt" (jshint) task
>> 1 file lint free.

Running "jshint:tests" (jshint) task
>> 22 files lint free.

Running "uglify:all" (uglify) task
File "dist/jquery.min.js" created.
Uncompressed size: 239254 bytes.
Compressed size: 29543 bytes gzipped (82438 bytes minified).

Running "dist:*" (dist) task

Running "compare_size" task
Sizes - compared to master @ c0241a47e270cd0e0ac2b2a0fdefc5a3a15b5ae6
    239254         (-)  dist/jquery.js
    125327         (-)  dist/jquery.min.map
     82493         (-)  dist/jquery.min.js
     29574         (-)  dist/jquery.min.js.gz

Sizes - compared to last run
    239254         (-)  dist/jquery.js
    125327         (-)  dist/jquery.min.map
     82493         (-)  dist/jquery.min.js
     29574         (-)  dist/jquery.min.js.gz

Saved as: master

Done, without errors.

E:\GitHub\fork\jquery>grunt.cmd watch
Running "watch" task
Waiting...

......

E:\GitHub\fork\jquery>git checkout master
Already on 'master'

E:\GitHub\fork\jquery>git checkout -b bug_####
Switched to a new branch 'bug_####'

E:\GitHub\fork\jquery>git status
# On branch bug_####
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       test.md
nothing added to commit but untracked files present (use "git add" to track)

E:\GitHub\fork\jquery>git add test.md

E:\GitHub\fork\jquery>git commit -m "test for fix bug_####"
[bug_#### 61df6fc] test for fix bug_####
 0 files changed
 create mode 100644 test.md

E:\GitHub\fork\jquery>git push origin -u bug_####
Counting objects: 4, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 284 bytes, done.
Total 3 (delta 1), reused 1 (delta 0)
To git@github.com:xing-kenny/jquery.git
 * [new branch]      bug_#### -> bug_####
Branch bug_#### set up to track remote branch bug_#### from origin.

E:\GitHub\fork\jquery>