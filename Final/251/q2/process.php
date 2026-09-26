<?php
$attendees = $_POST["attendees"];
$cost_per_person = $_POST["cost_per_person"];
$venue_capacity = $_POST["venue_capacity"];

function calculateBudget($attendees, $cost, $capacity){
    $total_venues = ceil($attendees / $capacity);

    $empty_seats = ($total_venues * $capacity) - $attendees;

    $wasted_money = $empty_seats * $cost;

    return [
        'venues' => $total_venues,
        'empty' => $empty_seats,
        'wasted' => $wasted_money
    ];
}
$result = calculateBudget($attendees, $cost_per_person, $venue_capacity);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculation Result</title>
</head>
<body>
    <h3>Calculation Result:</h3>
    <p>Total Venues: <?= $result['venues'] ?></p>
    <p>Empty Seats: <?= $result['empty'] ?></p>
    <p>Wasted Money(BDT): <?= $result['wasted'] ?></p>
</body>
</html>