//关键api: fillStyle, strokeStyle, fillRect, strokeRect, clearRect

// 绘制从坐标(10,10)开始, 长宽都为50的红色矩形
/*
const drawRedRect = () => {
  const drawing = document.getElementById('drawing');
  const context = drawing.getContext('2d');
  // 设置填充颜色
  context.fillStyle = 'red';
  context.fillRect(10, 10, 50, 50);
}

// 绘制从坐标(30,30)开始, 长宽都为50的半透明蓝色矩形
const drawBlueRect = () => {
  const drawing = document.getElementById('drawing');
  const context = drawing.getContext('2d');
  // 设置填充颜色
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.fillRect(30, 30, 50, 50);
}

drawRedRect();
drawBlueRect();
*/

//绘制坐标(10,10)开始，长宽为50的线宽矩形
/*
const drawRedStrokeRect = () => {
  const drawing = document.getElementById('drawing');
  const context = drawing.getContext('2d');
  // 设置边框颜色
  context.strokeStyle = 'red';
  context.strokeRect(10, 10, 50, 50);
}

const drawBlueStrokeRect = () => {
  const drawing = document.getElementById('drawing');
  const context = drawing.getContext('2d');
  // 设置边框颜色
  context.strokeStyle = 'rgba(0,0,255,0.5)';
  context.strokeRect(30, 30, 50, 50);
}

drawRedStrokeRect();
drawBlueStrokeRect();
*/

//矩形开孔效果
/*
const clearRect = () => {
  const drawing = document.getElementById('drawing');
  const context = drawing.getContext('2d');
  context.fillStyle = 'red';
  context.fillRect(10, 10, 50, 50);
  context.strokeStyle = 'rgba(0,0,255,0.5)';
  context.strokeRect(30, 30, 50, 50);
  context.clearRect(40, 40, 10, 10);
}
clearRect();
*/
