<?php
include 'mysql.php';
if(isset($_POST['SubmitBtn'])){

    $sql1 = "SELECT CategoryName, SUM(Revenue) as TotalRevenue FROM sales_data GROUP BY CategoryName;";
    $result1 = $conn->query($sql1);

    $sql2 = "UPDATE sales_data SET CategoryName = 'Low Performing' WHERE Revenue < 40000;";
    $update1 = $conn->query($sql2);

    $sql3 = "UPDATE sales_data SET Revenue = Revenue + (Revenue * 0.10) WHERE Revenue > 70000";
    $update2 = $conn->query($sql3);

    $sql4 = "SELECT s1.ProductName, s1.CategoryName,
             CASE
                WHEN s1.Revenue > (SELECT AVG(Revenue) FROM sales_data s2 WHERE s2.categoryName = s1.categoryName)
                THEN 'Top Seller'
                ELSE 'Regular Seller'
            END AS SellerStatus
        FROM sales_data s1";
    $result4 = $conn->query($sql4);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Process result</title>
</head>
<body>
    <?php if(isset($_POST['SubmitBtn'])): ?>

        <p><strong>1.Total Revenue per category:</strong></p>
        <?php
        if($result1->num_rows >0){
            while($row = $result1->fetch_assoc()){
                echo "Category: $row[CategoryName], Total Revenue: $row[TotalRevenue]<br>";
            }
        }else echo "0 rows returned<br>";
        ?>

        <p><strong>2. Update Low Performing Category:</strong></p>
        <p><?=($update1 ===TRUE) ? "Category updated successfully." : "Error updating categories."?></p>

        <p><strong>3. Add 10% Bonus to High Performers (>70000):</strong></p>
        <p><?= ($update2 === TRUE)? "Bonus revenue added successfully." : "Error adding bonus." ?></p>


        <p><strong>4. Product Seller Status:</strong></p>
        <?php 
        if($result4->num_rows > 0){
            while($row = $result4->fetch_assoc()){
                echo "Product: $row[ProductName], Category: $row[CategoryName] - <b>$row[SellerStatus]</b> <br>";
            }
        }else echo "0 rows returned<br>";

        $conn->close();

        ?>


    <?php endif; ?>
</body>
</html>