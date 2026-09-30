<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First JavaScript Page</title>
</head>
<body>

    <h1>My First JavaScript Page</h1>

    <button id="myBtn">Click Me</button>

    <script>
        document.getElementById("myBtn").onclick = function () {
            // Show alert
            alert("Hello, B.Tech Student!");

            // Change background color to light blue
            document.body.style.backgroundColor = "lightblue";

            // Print message in browser console
            console.log("JavaScript is running successfully!");
        };
    </script>

</body>
</html>