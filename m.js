
function functio(img) {
    const bigImage = document.getElementById('imagebox');
    bigImage.src = img.src;
}

function functio(img) {
    const bigImage = document.getElementById('imagebox');
    bigImage.style.opacity = 0; // نخليها تختفي شوية
    setTimeout(() => {
        bigImage.src = img.src; // بعد التأخير نغير المصدر
        bigImage.style.opacity = 1; // نرجعها للوضوح
    }, 300); // تأخير 300 ميلي ثانية
}

