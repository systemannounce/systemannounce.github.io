<?php

$url = 'https://api.mlyai.com/reply';
$apiKey = '7170ijtl7ksxtz34';
$apiSecret = 's3sdf34353';
$message = $_POST['info']; // 消息内容
$header = array(
    "Api-Key: {$apiKey}",
    "Api-Secret: {$apiSecret}",
);
$body = json_encode([
    'content' => $message,
    'type' => 2,
    'from' => '123456',
    'fromName' => $_POST['userid'],
    'to' => '1234567',
    'toName' => '王五',
]);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_TIMEOUT, 1);
curl_setopt($curl, CURLOPT_TIMEOUT_MS, 3000);
curl_setopt($curl, CURLOPT_HTTPHEADER, array_merge($header, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($body)),
));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $body);
$data = curl_exec($curl);
curl_close($curl);

$result = json_decode($data);
if ($result->code != "00000") {
    exit($result->message);
} else {
    $content = "";
    $replys = $result->data;
    for ($i = 0; $i < count($replys); $i ++) {
        if (strlen($content) > 0) {
            $content .= "\n";
        }
        $content .= $replys[$i]->content;
    }
    exit($content);
}
                    