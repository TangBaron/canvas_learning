/**
 * 绘制文本常用的api
 * fillText(string, x, y): 一般我们用这个方法来绘制文本，同时可以设置fillStyle属性调整颜色
 * 
 * 常用的字体配置项
 * font: 用CSS语法指定字体样式，大小和字体族等, context.font = 'bold 14px Arial'
 * textAlign: 指定文本的对齐方式, start, end和center可选
 * textBaseLine: 指定文本的对齐基线，可能的值包括"top", "hanging", "middle", "alphabetic", "bottom"等  
 */

//给我们的表盘添加文字
const drawing = document.getElementById('canvas')
if (drawing.getContext) {
  const context = drawing.getContext('2d');

  // 创建路径
  context.beginPath();

  // 绘制外圆
  context.arc(100, 100, 99, 0, 2 * Math.PI, false);

  // 绘制内圆
  context.moveTo(194, 100); //绘制内圆前，必须先把路径移到内圆上的一点，避免绘制多余线条
  context.arc(100, 100, 94, 0, 2 * Math.PI, false);

  //绘制分针
  context.moveTo(100, 100);
  context.lineTo(100, 15);

  // 绘制时针
  context.moveTo(100, 100);
  context.lineTo(35, 100);

  // 绘制12, 3, 6,9
  context.font = "bold 14px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText('12', 100, 12);
  context.fillText('3', 189, 100);
  context.fillText('6', 100, 189);
  context.fillText('9', 11, 100);

  // 描绘路径
  context.stroke()
}