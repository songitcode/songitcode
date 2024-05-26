document.addEventListener('DOMContentLoaded', function () {
    // Thêm đoạn mã xử lý sự kiện scroll ở đây
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('#nav-scroll');
        if (window.scrollY >= 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
