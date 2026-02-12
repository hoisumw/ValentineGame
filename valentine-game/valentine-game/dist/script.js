document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  
  yesBtn.addEventListener('click', goYes);
  
  noBtn.addEventListener('mouseenter', function () {
    console.log('No hover!');
    randomPositionInWindow();
  });
});

function goYes() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
}

function goBack() {
  document.getElementById('page2').classList.remove('active');
  document.getElementById('page1').classList.add('active');
  
  const noBtn = document.getElementById('noBtn');
  noBtn.style.position = 'relative';
  noBtn.style.left = '';
  noBtn.style.top = '';
}

function randomPositionInWindow() {
  const noBtn = document.getElementById('noBtn');
  
  // 先取得按鈕真實尺寸
  const btnRect = noBtn.getBoundingClientRect();
  const btnWidth = btnRect.width;
  const btnHeight = btnRect.height;
  
  noBtn.style.position = 'fixed';
  
  const padding = 30;
  
  // 視窗可用範圍（扣掉按鈕尺寸 + padding）
  const maxLeft = window.innerWidth - btnWidth - padding;
  const maxTop = window.innerHeight - btnHeight - padding;
  
  // 確保最小值不小於 padding
  const safeMaxLeft = Math.max(padding, maxLeft);
  const safeMaxTop = Math.max(padding, maxTop);
  
  // 隨機位置（保證在視窗內）
  const randomLeft = padding + Math.random() * (safeMaxLeft - padding);
  const randomTop = padding + Math.random() * (safeMaxTop - padding);
  
  noBtn.style.left = randomLeft + 'px';
  noBtn.style.top = randomTop + 'px';
  noBtn.style.transform = 'none';
  
  console.log('Button size:', btnWidth, btnHeight);
  console.log('Window size:', window.innerWidth, window.innerHeight);
  console.log('Max safe:', safeMaxLeft, safeMaxTop);
  console.log('Random pos:', randomLeft, randomTop);
}