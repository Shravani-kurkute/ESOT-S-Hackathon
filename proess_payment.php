<?php
// Include Stripe PHP library
require_once('stripe-php/init.php');

// Set your secret key
\Stripe\Stripe::setApiKey('sk_test_your_secret_key');

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
$token = $_POST['stripeToken'];

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$cardNumber = $_POST['card'];
$expiry = $_POST['expiry'];
$cvv = $_POST['cvv'];

// Create a charge: this will charge the user's card
try {
    $charge = \Stripe\Charge::create([
        'amount' => 1000, // Amount in cents
        'currency' => 'usd',
        'source' => $token,
        'description' => 'Example charge',
    ]);
    // Redirect to a success page
    header('Location: payment_success.html');
    exit;
} catch (\Stripe\Exception\CardException $e) {
    // Since it's a decline, \Stripe\Exception\CardException will be caught
    echo 'Error: ' . $e->getError()->message;
} catch (\Stripe\Exception\RateLimitException $e) {
    // Too many requests made to the API too quickly
    echo 'Error: ' . $e->getError()->message;
} catch (\Stripe\Exception\InvalidRequestException $e) {
    // Invalid parameters were supplied to Stripe's API
    echo 'Error: ' . $e->getError()->message;
} catch (\Stripe\Exception\AuthenticationException $e) {
    // Authentication with Stripe's API failed
    echo 'Error: ' . $e->getError()->message;
} catch (\Stripe\Exception\ApiConnectionException $e) {
    // Network communication with Stripe failed
    echo 'Error: ' . $e->getError()->message;
} catch (\Stripe\Exception\ApiErrorException $e) {
    // Display a very generic error to the user, and maybe send yourself an email
    echo 'Error: ' . $e->getError()->message;
} catch (Exception $e) {
    // Something else happened, completely unrelated to Stripe
    echo 'Error: ' . $e->getMessage();
}


?>
<!-- Display success or error message -->
        <?php
        if (isset($_GET['payment'])) {
            if ($_GET['payment'] == 'success') {
                echo '<div class="success-message">Payment successful!</div>';
            } elseif ($_GET['payment'] == 'error') {
                echo '<div class="error-message">Payment failed. Please try again.</div>';
            }
        }
        ?>

<?php
// Process payment here (simulate success)
// In a real scenario, you would integrate with your payment gateway

// Assuming payment processing successful
$paymentSuccessful = true;

// Redirect back to checkout.html with a success message
if ($paymentSuccessful) {
    header("Location: checkout.html?payment=success");
    exit;
} else {
    // Handle payment failure scenario if needed
    header("Location: checkout.html?payment=error");
    exit;
}
?>