# React Demo Application

## Install NodeJS

You can use your distros version of Node, but at least with Ubuntu this is horribly out of date. Node moves *fast*.
Run this to get the latest:

  - `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
  - `sudo apt install nodejs`

## Install react devtools

  - Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
  - Firefox: https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/

## Install some starting dependencies

   - `pip install -r requirements.txt`
   - `npm install`

## With docker

   - `docker build --build-arg http_proxy=$http_proxy --build-arg https_proxy=$http_proxy --build-arg https_proxy=$HTTP_PROXY --build-arg HTTPS_PROXY=HTTP_PROXY -t reactdemo .`

   or
   
   - `docker build -t reactdemo .`

   depending your network

## Run with docker

   - `docker run -it -v <full_path of the your direcotry>:/srv/react-demo/ -p 8080:8080 -p 8000:8000 reactdemo`