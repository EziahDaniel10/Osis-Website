<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$name    = strip_tags(trim($_POST['fullName'] ?? ''));
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = strip_tags(trim($_POST['phone'] ?? ''));
$subject = strip_tags(trim($_POST['subject'] ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid or missing required fields.']);
    exit;
}

$to          = 'osis@onespiritintegratedservices.com';
$subject_line = "OSIS Website Enquiry: $subject";
$body = "You have received a new enquiry from the OSIS website.\n\n"
      . "Name:    $name\n"
      . "Email:   $email\n"
      . "Phone:   $phone\n"
      . "Subject: $subject\n\n"
      . "Message:\n$message\n";

$headers  = "From: OSIS Website <noreply@onespiritintegratedservices.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject_line, $body, $headers);

echo json_encode(['ok' => (bool)$sent]);
