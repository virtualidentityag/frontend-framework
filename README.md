# frontend-framework

## Introduction

This frontend framework boilerplate helps you to easily kickstart new frontend frameworks. Just mirror this repository, run the setup tasks and start developing.
It depends heavily on the [hbs-build-framework](https://github.com/virtualidentityag/hbs-build-framework)

## Setup

### 1. Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager and is only used to install yarn.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

### 2. yarn
**yarn** is a Node Package Manager which will allow us to download and install required components for Node.js with ease
See <https://yarnpkg.com/> for details of this dependency manager

1. Run `npm install -g yarn` to install yarn dependency manager
1a. (On windows) You can also get the installer from <https://yarnpkg.com/en/docs/install>.

### 3. Gulp

**Gulp** is a task automator running on Node.js. It will do a lot of hard work for us preparing the source code for productive use. Amongst others Gulp combines files, shrinks them, tests code for faults etc.

1. Run `yarn global add gulp-cli` to install Gulp's command line interface globally. This will put the gulp command in your system path, allowing it to be run from any directory.
2. Test the installation of Gulp by running `gulp --version` from your command line.


## Starting

After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `yarn install`
4. To
	* **start** the development environment run `gulp serve`
	* **build** the code for production use run `gulp build`

## Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

### projectConfig.json

This file lets you enable and disable certain tasks as well as specify additional resource folders.

__resource folders__
To add additional resource folders, create the folders and add the paths to the global.resources array.
The path needs to be prepended with a "/" and relative to the app folder.
The default resource folder is "/resources".

__component folders__
To add additional component folders, create the folders and add the paths to the global.components array.
The path needs to be prepended with a "/" and relative to the app folder.
The default components folder is "/components"
If an additinal component folder is added create an additional resource Folder since every components folder nees its own corresponding resource folder.

__tasks__
To disable certain tasks, simply set the specific task to false.
At the moment the tasks that can be disabled are: "linting", "iconfont", "angular", "handlebars", "uglify", "cleanCss", "favicons", "cssStats".
Per default all tasks are enabled.

__uglifyExceptions__
You can add files which should not be uglified during the uglify task (e.g. files that are already uglified)

__externalResources__
The "externalResources" object is used to list external dependencies for each resource folder. The files listed under each resource folder will be fetched during build and copied into the relevant subfolders of that resource folder (for example CSS files will go into "css/vendor" subfolder). The file paths must be relative to each package inside node_modules.

## Patterns

We use different boilerplates to keep our coding structure as homogenous as possible.

### JavaScript / TypeScript

#### jQuery TypeScript Plugins - Advanced

The framework contains a local demo integration of the VI jQuery Boilerplate.
See `app/resources/ts/jquery.plugin.advanced.ts` for a local demo.

For more informations have a look at the repository: https://github.com/vi-plugins/jquery-boilerplate

If you are going to write generic plugins that might be useful in lots of other projects,
please mirror the repository above and add them to our [vi-plugins](https://github.com/vi-plugins) project.

For project-use only you can copy the structure into your local `app/resources/ts/` folder.


#### jQuery TypeScript Plugins - Simple

The standalone jQuery TypeScript Plugin is a TypeScript port of the legacy jQuery Plugin boilerplate.
See `app/resources/ts/jquery.plugin.simple.ts` for a local demo.

It includes the same features as the legacy boilerplate but nicely enriched by lots of TypeScript features like type checking and code completion.
We also use the possibility to compile to ES5 or ES6. Depending on the projects browser matrix.   

The corresponding pattern file can be found in `patterns/jquery.typescript.boilerplate.ts`


#### Plain and simple jQuery Plugins (legacy way)

That is the plain legacy jQuery Plugin boilerplate.  

The corresponding pattern file can be found in `/patterns/jquery.typescript.boilerplate.ts`


### CSS / SASS

We compile the CSS stylesheets with a SASS compiler. To organize the code as efficient as possible we use the BEM methodology:
see https://github.com/virtualidentityag/viFrontendStandards/wiki/vi-BEM  

## Development

run the boilerplate with `gulp serve`

### 1. Our helpers

* `{{> partial}}` - include a handlebars partial. Partials are automatically created from components and partial folders. The partials can be *.hbs or *.html. Example: For the file components/foldername/handlebarsfile.html use the partial identifier foldername/handlebarsfile.  
* `{{include 'partial'}}` - custom partial helper, allows the use of json data as files or a string
* `{{def variable 'default value'}}` - set a default value for a variable
* `{{text 500}}` - a filler text with 500 chars

@TODO - add all helper functions

### 2. Folder structure

* `/app` is where all of the actual frontend code is stored
* `/app/_assets` holds static placeholder files like images, audio- and video files.
* `/app/_mock` holds files that would be generated dynamically by the cms implementing the frontend and not explicitly corresponding to a component
* `/app/_config` holds the js configuration file
* `/app/pages` holds the base html files to create the index preview
* `/app/resources` holds global resources: JavaScript, TypeScript, SASS/CSS and other files
* `/app/components` holds reusable components and the corresponding resource files
* `/test` is where we put automated tests for Travis CI

## Testing

**Travis CI** Testing is used for automated boilerplate testing. It uses Mocha/Chai and checks the build process and compares the generated static files with there fixtures. To run the tests locally execute `mocha test/travis/build.js` from terminal. Install mocha globally.

## Build

run the boilerplate with `gulp build`
If everything is correct, you will find a build version of your code in the **dist** directory.
This contains among others a min and concat version of your js and css files

## Release
There is a gulp task for doing releases. Use gulp release --type=[major,minor,patch,prerelease] will do the following steps for you:
1. update package.json version
2. git commit the changed package.json
3. git push
4. set a GIT tag for this version
5. coming soon: create a diff changelog from last version to this version

## Troubleshooting

### Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git. Try to check out the repo again.
To prevent this check the git config "core.autocrlf".

### gulp serve malloc error (Unix Only)

************** gulp(975,0x104c15000) malloc: *** error for object 0x10164201c: pointer being freed was not allocated *** set a breakpoint in malloc_error_break to debug **************

This is caused by missing sass files. Be sure you've done a bower install before gulp serve.
