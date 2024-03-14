const inputEmail = document.getElementById('email');

function check() {
    if (checkInputEmail()) {
        return true;
    }
    return false;
}

function checkInputEmail() {
    let regex = /^([\w\.\-]{5,})@([\w\-]+)((\.(\w){2,3})+)$/;

    if (regex.test(inputEmail.value)) {
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
        return true;
    }
    inputEmail.classList.add('is-invalid');
    inputEmail.classList.remove('is-valid');
    return false;
}

inputEmail.addEventListener('input', checkInputEmail);
inputEmail.addEventListener('focusout', checkInputEmail);


// xử lý submit
let submitEmail = document.getElementById('submit-btn');


submitEmail.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    let email = document.getElementById('email').value;

    // kiểm tra dữ liệu 
    if (checkInputEmail() && email.trim() !== '') {
        // lưu email vào localStorage
        localStorage.setItem('email', email);
        // qua trang submit.html
        window.location.href = 'submit.html';
        return true;
    }
    else {
        alert("Email đang trống ?");
        return false;
    }
})


// Xử lý phần khi thanh scrolled hoạt động thì màu sẽ chuyển đậm hơn
document.addEventListener('DOMContentLoaded', function() {
    // Thêm đoạn mã xử lý sự kiện scroll ở đây
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('#nav-scroll');
        if (window.scrollY >= 200) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});