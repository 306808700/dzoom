##dzoom.js

  Suitable for mobile Webpage development
  
  >适用于移动网页开发
  
  
  A tool that Webpage adaptive screen resolution.
  
  >一个让网页自适应屏幕分辨率的工具
  
   
  Page only using fixed like the number of width 320 to make, and others such as iPhone 6 and plus can be adaptive.
  
  >在页面开发的时候只需按照最大宽度是320px（iphone4、5）即可，其他的iphone6、plus 将能有同样的视觉效果
  
  
  Because it is using the automatic zoom away, also can adapt many kinds of Android devices.
  
  >同样的也能在分辨率繁多的android设备中起作用，因为它采用的是缩放的方式


##How To Use

Introducing the steps in head.

>在head中引入脚本,在body后执行函数
  
      <head>
        ...
        <script src="dzoom.js"></script>
      </head>
      
      <body></body>
      
      <script>
        dzoom.render();
      </script>

The above method is global, you also can separate a node set to do,like this.

>你也可以单独对需要缩放的节点做包裹

      <div class="dzoom"> ... </div>
      
