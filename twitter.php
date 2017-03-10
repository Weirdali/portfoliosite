<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '1972342788-0boJutQrbsBHTvR7WAqWiIBJaKk5Ct0oKJHtezn';
$oauth_access_token_secret = 'AwNJlVhbJpsFDvtNx2nuwR2tBEEmGc64V5CJemF62mcW6';
$consumer_key = 'gh4bt9l2LyDZOVIZ0g0xAzlGJ';
$consumer_secret = 'mTqWzTLMBd4qnPJcledwMBRMl8cJjoABUTPlIsVVfuswwBbPIk';
$screen_name = 'akaweirdali';
$user_id = 1972342788;
$count = $_GET['count'];

$twitter_url = 'search/tweets.json';
$twitter_url .= '?q=' . $_GET['q'];

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
    $oauth_access_token,         // 'Access token' on https://apps.twitter.com
    $oauth_access_token_secret,  // 'Access token secret' on https://apps.twitter.com
    $consumer_key,               // 'API key' on https://apps.twitter.com
    $consumer_secret,            // 'API secret' on https://apps.twitter.com
    $user_id,                    // User id (http://gettwitterid.com/)
    $screen_name,                // Twitter handle
    $count                       // The number of tweets to pull out
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>