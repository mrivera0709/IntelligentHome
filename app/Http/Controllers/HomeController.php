<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use AmazonProduct;
use ApaiIO\Operations\Search;



class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
        
        
    }

    public function testAmazon()
    {





// Your Access Key ID, as taken from the Your Account page
$access_key_id = "AKIAJMGK2PQDBRMQM2XQ";

// Your Secret Key corresponding to the above ID, as taken from the Your Account page
$secret_key = "KSK00QB2utITnVrRcOLCZTEOj4hD8XH10w2CNHY3";

// The region you are interested in
$endpoint = "webservices.amazon.com";

$uri = "/onca/xml";

$params = array(
    "Service" => "AWSECommerceService",
    "Operation" => "ItemSearch",
    "AWSAccessKeyId" => "AKIAJMGK2PQDBRMQM2XQ",
    "AssociateTag" => "intelligen044-20",
    "SearchIndex" => "Electronics",
    "Keywords" => "Smart wi-fi bulb equivalent alexa",
    "ResponseGroup" => "EditorialReview,Images,ItemAttributes,ItemIds,Offers,Reviews,Small",
    "Sort" => "pmrank",
    "Availability" => "Available",
    "Condition" => "New"
);

// Set current timestamp if not set
if (!isset($params["Timestamp"])) {
    $params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');
}

// Sort the parameters by key
ksort($params);

$pairs = array();

foreach ($params as $key => $value) {
    array_push($pairs, rawurlencode($key)."=".rawurlencode($value));
}

// Generate the canonical query
$canonical_query_string = join("&", $pairs);

// Generate the string to be signed
$string_to_sign = "GET\n".$endpoint."\n".$uri."\n".$canonical_query_string;

// Generate the signature required by the Product Advertising API
$signature = base64_encode(hash_hmac("sha256", $string_to_sign, $secret_key, true));

// Generate the signed URL
$request_url = 'http://'.$endpoint.$uri.'?'.$canonical_query_string.'&Signature='.rawurlencode($signature);

$products = simplexml_load_file($request_url);

dd($products->Items->Item[0]);


    
    }
}
