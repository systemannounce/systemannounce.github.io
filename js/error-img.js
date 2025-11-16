document.addEventListener('DOMContentLoaded', () => {
  // 所有备用图片
  const errorImages = [
    '/images/error-img/1.jpg',
    '/images/error-img/2.jpg',
    '/images/error-img/3.jpg',
    '/images/error-img/4.jpg',
    '/images/error-img/5.jpg',
    '/images/error-img/6.jpg',
    '/images/error-img/7.jpg',
    '/images/error-img/8.jpg',
    '/images/error-img/9.jpg',
  ];

  document.querySelectorAll('img').forEach(img => {
    img.onerror = () => {
      if (!img.dataset.errorHandled) {
        img.dataset.errorHandled = true;

        // 随机选一张
        const randomImg = errorImages[Math.floor(Math.random() * errorImages.length)];

        img.src = randomImg;
      }
    };
  });
});
