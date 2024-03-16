const express = require('express');
const path = require('path');

const app = express();

// 提供 public 目录下的静态文件
app.use(express.static('public'));

app.get('/', (req, res) => {
  // 发送 index.html 文件作为响应
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
});
