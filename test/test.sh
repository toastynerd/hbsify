#!/bin/sh

if [ ! -h node_modules/hbsfy ]; then
    rm -rf node_modules/hbsfy
    ln -fs .. node_modules/hbsfy
fi

./node_modules/grunt-cli/bin/grunt test
