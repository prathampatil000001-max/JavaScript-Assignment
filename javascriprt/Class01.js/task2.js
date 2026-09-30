<!DOCTYPE html>
<html>
<head>
    <title>Button Click Example</title>
</head>
<body>

    <p id="demo">Hello!</p>
    <button id="myBtn">Click Me</button>

    <script>
        document.getElementById("myBtn").onclick = function() {
            document.getElementById("demo").textContent = "Button was clicked!";
        };
    </script>

</body>
</html>