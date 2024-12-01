document.addEventListener("DOMContentLoaded", function() {
    // 检查当前网址，并在特定网址显示警告框
    const currentUrl = window.location.href;
    const specificUrl = "https://wbzs.xyz/R-18"; // 替换为你的特定网址
    const specificUrl = "https://schsaob.xyz/R-18";
    
    if (currentUrl === specificUrl) {
        alert("有可能侵权，但视频不是我做的，我是一点责都不负，嘻嘻");
    }

    // 应用页面加载时的淡入效果
    document.body.classList.add('fade-in');

    // 实现平滑滚动的功能
    setupSmoothScrolling();

    // 为导航链接添加淡出效果
    setupFadeOutEffect();

    // 显示标题点击时的消息
    setupTitleClickMessage();

    // 处理页面加载时清除淡出效果
    window.addEventListener('pageshow', function() {
        document.body.classList.remove('fade-out');
    });
});

// 设置平滑滚动功能
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(targetId);
            } else {
                e.preventDefault();
                applyFadeOutAndRedirect(targetId);
            }
        });
    });
}

// 平滑滚动到目标元素
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// 应用淡出效果并重定向
function applyFadeOutAndRedirect(targetId) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = targetId;
    }, 500);
}

// 设置标题点击时显示消息
function setupTitleClickMessage() {
    const title = document.querySelector('header h1');
    if (title) {
        title.addEventListener('click', function() {
            displayMessage('腾讯司马！');
        });
    }
}

// 显示固定位置的消息
function displayMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    message.style.color = '#fff';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '1000';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 2000);
}
