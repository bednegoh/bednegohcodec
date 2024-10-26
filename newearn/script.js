// Sidebar Toggle
document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
      mainContent.style.marginLeft = '0';
    } else {
      sidebar.style.left = '0px';
      mainContent.style.marginLeft = '250px';
    }
  });
  
  // Profile Picture Upload
  document.getElementById('upload-pic').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(){
      const output = document.getElementById('profile-pic');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  
  // Deposit Button Click
  document.getElementById('pay-now-btn').addEventListener('click', function() {
    document.getElementById('payment-details').classList.toggle('hidden');
  });
  
  // Verify Button Click
  document.getElementById('verify-btn').addEventListener('click', function() {
    document.getElementById('verification-form').classList.toggle('hidden');
  });
  
  // Submit Verification Code
  document.getElementById('submit-verify').addEventListener('click', function() {
    const code = document.getElementById('m-pesa-code').value;
    if(code) {
      document.getElementById('submit-verify').disabled = true;
      document.getElementById('submit-verify').innerText = 'Pending Verification...';
      // Implement backend verification here
      setTimeout(function() {
        alert('Your payment is under verification.');
        // Reset the form
        document.getElementById('m-pesa-code').value = '';
        document.getElementById('submit-verify').disabled = false;
        document.getElementById('submit-verify').innerText = 'Verify';
      }, 2000);
    } else {
      alert('Please enter the M-Pesa code.');
    }
  });
  
  // Submit Picture Form
  document.getElementById('submit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('product-image');
    if(fileInput.files.length === 0) {
      alert('Please select an image to upload.');
      return;
    }
    // Implement backend upload logic here
    document.getElementById('submit-status').innerText = 'Under Review';
    // Simulate verification after 10 minutes (for demo purposes, use shorter time)
    setTimeout(function() {
      document.getElementById('submit-status').innerText = 'Verified';
      // Update earnings (dummy logic)
      let views = parseInt(document.getElementById('total-views').innerText) + 100; // Example increment
      document.getElementById('total-views').innerText = views;
      let earnings = parseInt(document.getElementById('total-earnings').innerText) + (views * 1); // KES 1 per view
      document.getElementById('total-earnings').innerText = earnings;
    }, 10000); // 10 seconds for demo
  });

  // Sidebar Toggle
document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
      mainContent.style.marginLeft = '0';
    } else {
      sidebar.style.left = '0px';
      mainContent.style.marginLeft = '250px';
    }
  });
  
  // Profile Picture Upload
  document.getElementById('upload-pic').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(){
      const output = document.getElementById('profile-pic');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  
  // Deposit Button Click
  document.getElementById('pay-now-btn').addEventListener('click', function() {
    document.getElementById('payment-details').classList.toggle('hidden');
  });
  
  // Verify Button Click
  document.getElementById('verify-btn').addEventListener('click', function() {
    document.getElementById('verification-form').classList.toggle('hidden');
  });
  
  // Submit Verification Code
  document.getElementById('submit-verify').addEventListener('click', function() {
    const code = document.getElementById('m-pesa-code').value;
    if(code) {
      document.getElementById('submit-verify').disabled = true;
      document.getElementById('submit-verify').innerText = 'Pending Verification...';
      // Implement backend verification here
      setTimeout(function() {
        alert('Your payment is under verification.');
        // Reset the form
        document.getElementById('m-pesa-code').value = '';
        document.getElementById('submit-verify').disabled = false;
        document.getElementById('submit-verify').innerText = 'Verify';
      }, 2000);
    } else {
      alert('Please enter the M-Pesa code.');
    }
  });
  
  // Submit Picture Form
  document.getElementById('submit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('product-image');
    if(fileInput.files.length === 0) {
      alert('Please select an image to upload.');
      return;
    }
    // Implement backend upload logic here
    document.getElementById('submit-status').innerText = 'Under Review';
    // Simulate verification after 10 minutes (for demo purposes, use shorter time)
    setTimeout(function() {
      document.getElementById('submit-status').innerText = 'Verified';
      // Update earnings (dummy logic)
      let views = parseInt(document.getElementById('total-views').innerText) + 100; // Example increment
      document.getElementById('total-views').innerText = views;
      let earnings = parseInt(document.getElementById('total-earnings').innerText) + (views * 1); // KES 1 per view
      document.getElementById('total-earnings').innerText = earnings;
    }, 10000); // 10 seconds for demo
  });

  // Example: Fetch and display user name
document.addEventListener('DOMContentLoaded', function() {
    // Replace with actual data fetching logic
    const userName = "John Doe"; // Example user name
    document.getElementById('user-name').innerText = userName;
  });

  // Modal Functionality
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const cards = document.querySelectorAll('.card a');

cards.forEach(card => {
  card.addEventListener('click', function(e) {
    e.preventDefault();
    // Populate modal with relevant content
    modal.querySelector('h2').innerText = this.parentElement.querySelector('h4').innerText;
    modal.querySelector('p').innerText = "Detailed information about " + this.parentElement.querySelector('h4').innerText + ".";
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if(event.target == modal) {
    modal.style.display = 'none';
  }
});