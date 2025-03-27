
        // Show custom alert
        function showAlert(event) {
            event.preventDefault(); // Prevents form submission
            document.getElementById("customAlert").style.display = "block";
            document.getElementById("overlay").style.display = "block";
           

        
        }

        // Close custom alert
        function closeAlert() {
            document.getElementById("customAlert").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
