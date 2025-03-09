// Check if User is Authenticated
function checkAuth() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "email.html"; // Redirect if not logged in
    }

    document.getElementById('mailForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const subject = document.getElementById('emailSubject').value;
        const body = document.getElementById('emailBody').value;
    
        // Simple spam detection logic (for demonstration purposes)
        const spamKeywords = ['win', 'free', 'click here', 'subscribe', 'buy now'];
        const isSpam = spamKeywords.some(keyword => subject.toLowerCase().includes(keyword) || body.toLowerCase().includes(keyword));
    
        const resultDiv = document.getElementById('result');
    
        if (isSpam) {
            resultDiv.innerHTML = '<h2 style="color: red;"> ⚠️ This email is considered SPAM!</h2>';
        } else {
            const currentDateTime = new Date();
            const formattedDate = currentDateTime.toLocaleString();
    
            resultDiv.innerHTML = `
                <h2 style="color: green;"> ✅ This email is NOT spam!</h2>
                <p><strong>Time:</strong> ${formattedDate}</p>
                <p><strong>Subject:</strong> ${subject}</p>
            `;
        }
    });
}