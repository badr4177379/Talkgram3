
const tabs = ['chats', 'status', 'calls', 'settings'];

function loadTab(tab) {
  tabs.forEach(t => {
    document.getElementById('tab-' + t).classList.remove('active');
  });
  document.getElementById('tab-' + tab).classList.add('active');

  let content = '';
  switch(tab) {
    case 'chats':
      content = `<h2>المحادثات</h2>
        <p>أحمد محمد - أهلاً! كيف الحال؟</p>
        <p>نورة خالد - هل وصلت الرسالة؟</p>`;
      break;
    case 'status':
      content = `<h2>الحالة</h2>
        <p>لا توجد حالات جديدة حالياً.</p>`;
      break;
    case 'calls':
      content = `<h2>المكالمات</h2>
        <p>لا توجد مكالمات بعد.</p>`;
      break;
    case 'settings':
      content = `<h2>الإعدادات</h2>
        <ul><li>الملف الشخصي</li><li>الإشعارات</li><li>الخصوصية</li></ul>`;
      break;
  }
  document.getElementById('screen').innerHTML = content;
}
