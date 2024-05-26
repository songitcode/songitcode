(function () {
    emailjs.init("OBLllkCzLJWJrpEc_");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Lấy giá trị email từ input
    var email = document.getElementById('emails').value;

    // Kiểm tra định dạng email bằng biểu thức chính quy
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return; // Dừng việc gửi email nếu địa chỉ email không hợp lệ
    }

    // Nếu địa chỉ email hợp lệ, tiếp tục gửi email
    var params = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        emails: email,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_zpwxj2r', 'template_h3o3b72', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email đã được gửi thành công!');
        }, function (error) {
            console.log('THẤT BẠI...', error);
            alert('Không thể gửi email. Vui lòng thử lại sau.');
        });
});
