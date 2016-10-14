// JavaScript Document
//方法一
//DD_belatedPNG.fix('div');
//DD_belatedPNG.fix('button');
//DD_belatedPNG.fix('a');
//DD_belatedPNG.fix('h1');
//DD_belatedPNG.fix('h5');
//DD_belatedPNG.fix('form');
//DD_belatedPNG.fix('p img');
//DD_belatedPNG.fix('a img');
//DD_belatedPNG.fix('img');
//DD_belatedPNG.fix('input');
//DD_belatedPNG.fix('li');
//DD_belatedPNG.fix('td');
//DD_belatedPNG.fix('span');
//DD_belatedPNG.fix('table tr td');

//方法二
DD_belatedPNG.fix('div,ul,ol,li,dt,dd,dl,span,img,a,em,strong,h1,h2,h3,h4,h5,h6,p');

//方法三
//尽量少偷懒，不要用*，性能是很低的
//DD_belatedPNG.fix('*');