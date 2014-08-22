#!/bin/sh

if [ ! -h node_modules/hbsify ]; then
    rm -rf node_modules/hbsify
    ln -fs .. node_modules/hbsify
fi

./node_modules/grunt-cli/bin/grunt test
