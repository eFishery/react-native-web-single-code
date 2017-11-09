#!/bin/bash
function post_to_slack {
    file=$1
    channel=$2
    slack_token=$3
    DATENAME=`date +_%Y-%m-%d`
    if [ -z "$4" ]
      then
        title="APK_File"
      else
        title=$4
    fi
    title=$(echo $title | tr / - | tr /a-z/ /A-Z/)
    title="$title$DATENAME"

    /usr/bin/curl https://slack.com/api/files.upload \
        -F token=$slack_token \
        -F channels=$channel \
        -F title=$title \
        -F file=$file
}

post_to_slack $1 $2 $3 $4
## post_to_slack "@app/app-release.apk" "botwercker" "slack-token" "file-naming"
