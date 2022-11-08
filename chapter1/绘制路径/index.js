// 绘制路径的一些api
/**
 * 创建路径
 * beginPath(): 开始绘制新路径
 * arc(x, y, radius, startAngle, endAngle, counterclockwise): 以坐标(x,y)为圆心，以radius为弧线绘制圆，startAngel,endAngle是起始和结束弧度,counterclockwise控制顺时针还是逆时针，默认是顺时针
 * arcTo(x1, y1, x2, y2, radius): 以给定半径radius, 绘制从上一点经(x1,y1)到(x2,y2)的弧线
 * bezierCurveTo(c1x, c1y, c2x, c2y, x, y): 以(c1x, c1y)和(c2x, c2y)为控制点, 绘制从上一点到(x,y)的弧线(三次贝塞尔曲线)
 * lineTo(x, y): 绘制一条从上一点到(x,y)的直线
 * moveTo(x,y): 不绘制线条，只把光标移动到(x,y)
 * quadraticCurveTo(cx, cy, x, y): 以(cx, cy)为控制点，绘制一条从上一点到(x,y)的弧线(二次贝塞尔弧线)
 * rect(x,y, width, height): 以给定的宽度和高度在坐标(x,y)绘制一条, 仅是绘制路径不会创造图形
 * 
 * 关闭路径
 * closePath(): 使用该api绘制一条返回起点的线
 * fill(): 填充路径， 在路径完成后使用fill()填充路径
 * stroke(): 描画路径, 在路径完成后使用stroke()描画路径
 * clip(): 基于已有的路径创建一个剪切区域（绘制的东西只会在剪切区域中进行展示)
 */

// 绘制一个不带数字的表盘
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

  // 描绘路径
  context.stroke()
}