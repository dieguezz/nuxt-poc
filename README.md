
# Project Management

* [GIT](https://bitbucket.org/etereo/etereo-website)

# Installation

```
npm install -g bower grunt-cli protractor
npm install
bower install
webdriver-manager update
```


# Build project

```
grunt build
```


# Run project

* Dev mode
	
	```
	grunt serve
	```

* Prod mode (optimized)

	```
	grunt serve:dist
	```

## Supported options

  * **serverPort** (`9000`): Change server port.
  * **testPort** (`9001`): Change test port
  * **liveReloadPort** (`35729`): Change liveReload port

	```
	grunt serve --serverPort 9003 --testPort 1234
	```

# Release

```
grunt release:1.2.3
```
