document.addEventListener('DOMContentLoaded', () => {
  const errorImages = [
    '/images/error-img/1.webp',
    '/images/error-img/2.webp',
    '/images/error-img/3.webp',
    '/images/error-img/4.webp',
    '/images/error-img/5.webp',
    '/images/error-img/6.webp',
    '/images/error-img/7.webp',
    '/images/error-img/8.webp',
    '/images/error-img/9.webp',
  ];
  function pickRandom(){ return errorImages[Math.floor(Math.random()*errorImages.length)]; }

  // 主绑定函数：对单个 img 做全方位处理
  function handleImg(img){
    if(!img || img.dataset._errorHandled) return;
    img.dataset._errorHandled = '1';

    // 绑定事件（防止二次替换）
    const doReplace = ()=>{
      const r = pickRandom();
      try{
        img.src = r;
        if(img.srcset) img.srcset = '';
        ['data-src','data-original','data-lazy','data-srcset'].forEach(k=>{ if(img.getAttribute(k)) img.setAttribute(k,''); });
        const a = img.closest('a');
        if(a && a.href && a.href.includes('image.systemannounce.cn:7700')){
          a.href = r;
          a.setAttribute('data-href','');
        }
      }catch(e){ /* ignore */ }
    };

    img.onerror = () => doReplace();
    img.onload  = () => {
      // 如果返回 HTML 或解析失败，naturalWidth/Height 会是 0
      if(img.naturalWidth === 0 || img.naturalHeight === 0) doReplace();
    };

    // 影子 Image 强制触发一次 load/error（覆盖 CDN/代理怪异行为）
    try{
      const tester = new Image();
      tester.onload = img.onload;
      tester.onerror = img.onerror;
      tester.src = img.src;
    }catch(e){}
  }

  // 立即处理当前页面所有 img
  document.querySelectorAll('img').forEach(handleImg);

  // MutationObserver：监听后续动态插入或被懒加载替换的节点
  const mo = new MutationObserver(muts=>{
    muts.forEach(m=>{
      m.addedNodes && m.addedNodes.forEach(node=>{
        if(node.nodeType !== 1) return;
        if(node.tagName === 'IMG') handleImg(node);
        else node.querySelectorAll && node.querySelectorAll('img').forEach(handleImg);
      });
    });
  });
  mo.observe(document.body, {childList: true, subtree: true});
});
