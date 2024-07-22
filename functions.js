function validateIFSC() {
    var ifsc = document.getElementById("ifsc").value.trim();
    var result = document.getElementById("result");
    
    // Show loading state
    result.innerHTML = "<span class='fetching'>Fetching...</span>";
    
    // Delayed fetch to improve perceived performance
    setTimeout(() => {
        fetch("https://ifsc.razorpay.com/" + ifsc)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid IFSC code');
                }
                return response.json();
            })
            .then(data => {
                var imps = data.IMPS ? "Yes" : "No";
                var neft = data.NEFT ? "Yes" : "No";
                var rtgs = data.RTGS ? "Yes" : "No";
                var upi = data.UPI ? "Yes" : "No";
                var micr = data.MICR !== null && data.MICR !== undefined ? data.MICR : "Not Available";
                var swift = data.SWIFT !== null && data.SWIFT !== undefined ? data.SWIFT : "Not Available";
                result.innerHTML =
                    "Bank Name: " + data.BANK + "<br><br>" +
                    "Branch Name: " + data.BRANCH + "<br><br>" +
                    "Address: " + data.ADDRESS + "<br><br>" +
                    "City: " + data.CITY + "<br><br>" +
                    "District: " + data.DISTRICT + "<br><br>" +
                    "State: " + data.STATE + "<br><br>" +
                    "Electronic fund transfer availability status" + "<br>"+
                    "IMPS: " + imps + " " "<br><br>" + "NEFT: " + neft + " " "<br><br>" +"RTGS: " + rtgs + "<br><br>" +
                    "UPI availability status: " + upi + "<br><br>"+
                    "MICR code: " + micr + "<br><br>"+
                    "SWIFT code: " + swift + "<br><br>";
            })
            .catch(error => {
                result.innerHTML = "<span class='error'> " + error.message + "</span>";
                console.error('Error:', error);
            });
    }, 500);
}
