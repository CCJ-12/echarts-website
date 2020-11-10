window.__EC_DOC_option_series_custom = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "name": {
    "desc": "<p>系列名称，用于<a href=\"#tooltip\">tooltip</a>的显示，<a href=\"#legend\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "legendHoverLink": {
    "desc": "\n\n<p>是否启用<a href=\"#legend\">图例</a> hover 时的联动高亮。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "coordinateSystem": {
    "desc": "<p>该系列使用的坐标系，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">null</code> 或者 <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  无坐标系。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian2d&#39;</code></p>\n<p>  使用二维的直角坐标系（也称笛卡尔坐标系），通过 <a href=\"#series-custom.xAxisIndex\">xAxisIndex</a>, <a href=\"#series-custom.yAxisIndex\">yAxisIndex</a>指定相应的坐标轴组件。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;polar&#39;</code></p>\n<p>  使用极坐标系，通过 <a href=\"#series-custom.polarIndex\">polarIndex</a> 指定相应的极坐标组件</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo&#39;</code></p>\n<p>  使用地理坐标系，通过 <a href=\"#series-custom.geoIndex\">geoIndex</a> 指定相应的地理坐标系组件。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  不使用坐标系。</p>\n</li>\n</ul>\n"
  },
  "xAxisIndex": {
    "desc": "<p>使用的 <a href=\"#xAxis\">x 轴</a>的 index，在单个图表实例中存在多个 x 轴的时候有用。</p>\n"
  },
  "yAxisIndex": {
    "desc": "<p>使用的 <a href=\"#yAxis\">y 轴</a>的 index，在单个图表实例中存在多个 y轴的时候有用。</p>\n"
  },
  "polarIndex": {
    "desc": "<p>使用的<a href=\"#polar\">极坐标系</a>的 index，在单个图表实例中存在多个极坐标系的时候有用。</p>\n"
  },
  "geoIndex": {
    "desc": "<p>使用的<a href=\"#geo\">地理坐标系</a>的 index，在单个图表实例中存在多个地理坐标系的时候有用。</p>\n"
  },
  "calendarIndex": {
    "desc": "<p>使用的<a href=\"#calendar\">日历坐标系</a>的 index，在单个图表实例中存在多个日历坐标系的时候有用。</p>\n"
  },
  "renderItem": {
    "desc": "<p>custom 系列需要开发者自己提供图形渲染的逻辑。这个渲染逻辑一般命名为 <a href=\"#series-custom.renderItem\">renderItem</a>。例如：</p>\n<pre><code class=\"lang-js\">var option = {\n    ...,\n    series: [{\n        type: &#39;custom&#39;,\n        renderItem: function (params, api) {\n            var categoryIndex = api.value(0);\n            var start = api.coord([api.value(1), categoryIndex]);\n            var end = api.coord([api.value(2), categoryIndex]);\n            var height = api.size([0, 1])[1] * 0.6;\n\n            var rectShape = echarts.graphic.clipRectByRect({\n                x: start[0],\n                y: start[1] - height / 2,\n                width: end[0] - start[0],\n                height: height\n            }, {\n                x: params.coordSys.x,\n                y: params.coordSys.y,\n                width: params.coordSys.width,\n                height: params.coordSys.height\n            });\n\n            return rectShape &amp;&amp; {\n                type: &#39;rect&#39;,\n                shape: rectShape,\n                style: api.style()\n            };\n        },\n        data: data\n    }]\n}\n</code></pre>\n<p>对于 <code class=\"codespan\">data</code> 中的每个数据项（为方便描述，这里称为 <code class=\"codespan\">dataItem</code>)，会调用此 <a href=\"#series-custom.renderItem\">renderItem</a> 函数。</p>\n<p><a href=\"#series-custom.renderItem\">renderItem</a> 函数提供了两个参数：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.arguments.params\">params</a>：包含了当前数据信息和坐标系的信息。</li>\n<li><a href=\"#series-custom.renderItem.arguments.api\">api</a>：是一些开发者可调用的方法集合。</li>\n</ul>\n<p><a href=\"#series-custom.renderItem\">renderItem</a> 函数须返回根据此 <code class=\"codespan\">dataItem</code> 绘制出的图形元素的定义信息，参见 <a href=\"#series-custom.renderItem.return\">renderItem.return</a>。</p>\n<p>一般来说，<a href=\"#series-custom.renderItem\">renderItem</a> 函数的主要逻辑，是将 <code class=\"codespan\">dataItem</code> 里的值映射到坐标系上的图形元素。这一般需要用到 <a href=\"#series-custom.renderItem.arguments.api\">renderItem.arguments.api</a> 中的两个函数：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.arguments.api.value\">api.value(...)</a>，意思是取出 <code class=\"codespan\">dataItem</code> 中的数值。例如 <code class=\"codespan\">api.value(0)</code> 表示取出当前 <code class=\"codespan\">dataItem</code> 中第一个维度的数值。</li>\n<li><a href=\"#series-custom.renderItem.arguments.api.coord\">api.coord(...)</a>，意思是进行坐标转换计算。例如 <code class=\"codespan\">var point = api.coord([api.value(0), api.value(1)])</code> 表示 <code class=\"codespan\">dataItem</code> 中的数值转换成坐标系上的点。</li>\n</ul>\n<p>有时候还需要用到 <a href=\"#series-custom.renderItem.arguments.api.size\">api.size(...)</a> 函数，表示得到坐标系上一段数值范围对应的长度。</p>\n<p>返回值中样式的设置可以使用 <a href=\"#series-custom.renderItem.arguments.api.style\">api.style(...)</a> 函数，他能得到 <a href=\"#series-custom.itemStyle\">series.itemStyle</a> 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：<code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>。</p>\n"
  },
  "renderItem.arguments": {
    "desc": "<p>renderItem 函数的参数。</p>\n"
  },
  "renderItem.arguments.params": {
    "desc": "<p>renderItem 函数的第一个参数，含有：</p>\n<pre><code class=\"lang-js\">{\n    context: // {Object} 一个可供开发者暂存东西的对象。生命周期只为：当前次的渲染。\n    seriesId: // {string} 本系列 id。\n    seriesName: // {string} 本系列 name。\n    seriesIndex: // {number} 本系列 index。\n    dataIndex: // {number} 数据项的 index。\n    dataIndexInside: // {number} 数据项在当前坐标系中可见的数据的 index（即 dataZoom 当前窗口中的数据的 index）。\n    dataInsideLength: // {number} 当前坐标系中可见的数据长度（即 dataZoom 当前窗口中的数据数量）。\n    actionType: // {string} 触发此次重绘的 action 的 type。\n    coordSys: // 不同的坐标系中，coordSys 里的信息不一样，含有如下这些可能：\n    coordSys: {\n        type: &#39;cartesian2d&#39;,\n        x: // {number} grid rect 的 x\n        y: // {number} grid rect 的 y\n        width: // {number} grid rect 的 width\n        height: // {number} grid rect 的 height\n    },\n    coordSys: {\n        type: &#39;calendar&#39;,\n        x: // {number} calendar rect 的 x\n        y: // {number} calendar rect 的 y\n        width: // {number} calendar rect 的 width\n        height: // {number} calendar rect 的 height\n        cellWidth: // {number} calendar cellWidth\n        cellHeight: // {number} calendar cellHeight\n        rangeInfo: {\n            start: // calendar 日期开端\n            end: // calendar 日期结尾\n            weeks: // calendar 周数\n            dayCount: // calendar 日数\n        }\n    },\n    coordSys: {\n        type: &#39;geo&#39;,\n        x: // {number} geo rect 的 x\n        y: // {number} geo rect 的 y\n        width: // {number} geo rect 的 width\n        height: // {number} geo rect 的 height\n        zoom: // {number} 缩放的比率。如果没有缩放，则值为 1。例如 0.5 表示缩小了一半。\n    },\n    coordSys: {\n        type: &#39;polar&#39;,\n        cx: // {number} polar 的中心坐标\n        cy: // {number} polar 的中心坐标\n        r: // {number} polar 的外半径\n        r0: // {number} polar 的内半径\n    },\n    coordSys: {\n        type: &#39;singleAxis&#39;,\n        x: // {number} singleAxis rect 的 x\n        y: // {number} singleAxis rect 的 y\n        width: // {number} singleAxis rect 的 width\n        height: // {number} singleAxis rect 的 height\n    }\n}\n</code></pre>\n<p>其中，关于 <code class=\"codespan\">dataIndex</code> 和 <code class=\"codespan\">dataIndexInside</code> 的区别：</p>\n<ul>\n<li><code class=\"codespan\">dataIndex</code> 指的 <code class=\"codespan\">dataItem</code> 在原始数据中的 index。</li>\n<li><code class=\"codespan\">dataIndexInside</code> 指的是 <code class=\"codespan\">dataItem</code> 在当前数据窗口（参见 <a href=\"#dataZoom\">dataZoom</a>）中的 index。</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.arguments.api\">renderItem.arguments.api</a> 中使用的参数都是 <code class=\"codespan\">dataIndexInside</code> 而非 <code class=\"codespan\">dataIndex</code>，因为从 <code class=\"codespan\">dataIndex</code> 转换成 <code class=\"codespan\">dataIndexInside</code> 需要时间开销。</p>\n"
  },
  "renderItem.arguments.api": {
    "desc": "<p>renderItem 函数的第二个参数。</p>\n"
  },
  "renderItem.arguments.api.value": {
    "desc": "<p>得到给定维度的数据值。</p>\n<pre><code>@param {number} dimension 指定的维度（维度从 0 开始计数）。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {number} 给定维度上的值。\n</code></pre>"
  },
  "renderItem.arguments.api.coord": {
    "desc": "<p>将数据值映射到坐标系上。</p>\n<pre><code>@param {Array.&lt;number&gt;} data 数据值。\n@return {Array.&lt;number&gt;} 画布上的点的坐标，至少包含：[x, y]\n        对于polar坐标系，还会包含其他信息：\n        polar: [x, y, radius, angle]\n</code></pre>"
  },
  "renderItem.arguments.api.size": {
    "desc": "<p>给定数据范围，映射到坐标系上后的长度。</p>\n<p>例如，cartesian2d中，<code class=\"codespan\">api.size([2, 4])</code> 返回 <code class=\"codespan\">[12.4, 55]</code>，表示 x 轴数据范围为 2 映射得到长度是 <code class=\"codespan\">12.4</code>，y 轴数据范围为 4 时应设得到长度为 <code class=\"codespan\">55</code>。</p>\n<p>在一些坐标系中，如极坐标系（polar）或者有 log 数轴的坐标系，不同点的长度是不同的，所以需要第二个参数，指定获取长度的点。</p>\n<pre><code>@param {Array.&lt;number&gt;} dataSize 数据范围。\n@param {Array.&lt;number&gt;} dataItem 获取长度的点。\n@return {Array.&lt;number&gt;} 画布上的长度\n</code></pre>"
  },
  "renderItem.arguments.api.style": {
    "desc": "<p>能得到 <a href=\"#series-custom.itemStyle\">series.itemStyle</a> 中定义的样式信息和视觉映射得到的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：<code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>。</p>\n<pre><code>@param {Object} [extra] 额外指定的样式信息。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {Object} 直接用于绘制图元的样式信息。\n</code></pre>"
  },
  "renderItem.arguments.api.styleEmphasis": {
    "desc": "<p>能得到 <a href=\"#series-custom.itemStyle.emphasis\">series.itemStyle.emphasis</a> 中定义的样式信息和视觉映射的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：<code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>。</p>\n<pre><code>@param {Object} [extra] 额外指定的样式信息。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {Object} 直接用于绘制图元的样式信息。\n</code></pre>"
  },
  "renderItem.arguments.api.visual": {
    "desc": "<p>得到视觉映射的样式信息。比较少被使用。</p>\n<pre><code>@param {string} visualType &#39;color&#39;, &#39;symbol&#39;, &#39;symbolSize&#39;, ...\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {string|number} 视觉映射的样式值。\n</code></pre>"
  },
  "renderItem.arguments.api.barLayout": {
    "desc": "<p>当需要采用 barLayout 的时候，比如向柱状图上附加些东西，可以用这个方法得到 layout 信息。\n参见 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=custom-bar-trend\" target=\"_blank\">例子</a>。</p>\n<pre><code>@param {Object} opt\n@param {number} opt.count 每个簇有多少个 bar。\n@param {number|string} [opt.barWidth] bar 宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n@param {number|string} [opt.barMaxWidth] bar 最大宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n        比 `opt.barWidth` 优先级高。\n@param {number|string} [opt.barMinWidth] bar 最小宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n        比 `opt.barWidth` 优先级高。\n@param {number} [opt.barGap] 每个簇的 bar 之间的宽度。\n@param {number} [opt.barCategoryGap] 不同簇间的宽度。\n@return {Array.&lt;Object&gt;} [{\n        width: number bar 的宽度。\n        offset: number bar 的偏移量，以bar最左为基准。\n        offsetCenter: number bar 的偏移量，以bar中心为基准。\n    }, ...]\n</code></pre>"
  },
  "renderItem.arguments.api.currentSeriesIndices": {
    "desc": "<p>得到系列的 当前index。注意这个 index 不同于系列定义时的 index。这个 index 是当 legend 组件进行了系列筛选后，剩余的系列排列后的 index。</p>\n<pre><code>@return {number}\n</code></pre>"
  },
  "renderItem.arguments.api.font": {
    "desc": "<p>得到可以直接进行样式设置的文字信息字符串。</p>\n<pre><code>@param {Object} opt\n@param {string} [opt.fontStyle]\n@param {number} [opt.fontWeight]\n@param {number} [opt.fontSize]\n@param {string} [opt.fontFamily]\n@return {string} font 字符串。\n</code></pre>"
  },
  "renderItem.arguments.api.getWidth": {
    "desc": "<pre><code>@return {number} echarts 容器的宽度。\n</code></pre>"
  },
  "renderItem.arguments.api.getHeight": {
    "desc": "<pre><code>@return {number} echarts 容器的高度。\n</code></pre>"
  },
  "renderItem.arguments.api.getZr": {
    "desc": "<pre><code>@return {module:zrender} zrender 实例。\n</code></pre>"
  },
  "renderItem.arguments.api.getDevicePixelRatio": {
    "desc": "<pre><code>@return {number} 得到当前 devicePixelRatio。\n</code></pre>"
  },
  "renderItem.return": {
    "desc": "<p>图形元素。每个图形元素是一个 object。详细信息参见：<a href=\"#graphic.elements\">graphic</a>。（width\\height\\top\\bottom 不支持）</p>\n<p>如果什么都不渲染，可以不返回任何东西。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">// 单独一个矩形\n{\n    type: &#39;rect&#39;,\n    shape: {\n        x: x, y: y, width: width, height: height\n    },\n    style: api.style()\n}\n</code></pre>\n<pre><code class=\"lang-js\">// 一组图形元素\n{\n    type: &#39;group&#39;,\n    // 如果 diffChildrenByName 设为 true，则会使用 child.name 进行 diff，\n    // 从而能有更好的过度动画，但是降低性能。缺省为 false。\n    // diffChildrenByName: true,\n    children: [{\n        type: &#39;circle&#39;,\n        shape: {\n            cx: cx, cy: cy, r: r\n        },\n        style: api.style()\n    }, {\n        type: &#39;line&#39;,\n        shape: {\n            x1: x1, y1: y1, x2: x2, y2: y2\n        },\n        style: api.style()\n    }]\n}\n</code></pre>\n"
  },
  "renderItem.return_group": {
    "desc": "<p>group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。</p>\n"
  },
  "renderItem.return_group.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_group.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_group.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_group.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_group.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_group.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_group.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_group.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_group.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_group.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_group.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_group.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_group.width": {
    "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的宽。</p>\n<p>这个宽只用于给子节点定位。</p>\n<p>即便当宽度为零的时候，子节点也可以使用 <code class=\"codespan\">left: &#39;center&#39;</code> 相对于父节点水平居中。</p>\n"
  },
  "renderItem.return_group.height": {
    "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的高。</p>\n<p>这个高只用于给子节点定位。</p>\n<p>即便当高度为零的时候，子节点也可以使用 <code class=\"codespan\">top: &#39;middle&#39;</code> 相对于父节点垂直居中。</p>\n"
  },
  "renderItem.return_group.diffChildrenByName": {
    "desc": "<p>在 <a href=\"#series-custom\">自定义系列</a> 中，当 <code class=\"codespan\">diffChildrenByName: true</code> 时，对于 <a href=\"#series-custom.renderItem\">renderItem</a> 返回值中的每一个 <a href=\"#series-custom.renderItem.return_group\">group</a>，会根据其 <a href=\"#series-custom.renderItem.return_group.children\">children</a> 中每个图形元素的 <a href=\"#series-custom.renderItem.return_polygon.name\">name</a> 属性进行 &quot;diff&quot;。在这里，&quot;diff&quot; 的意思是，重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 <code class=\"codespan\">name</code> 是否相同），从如果数据有更新，能够形成的过渡动画。</p>\n<p>但是注意，这会有性能开销。如果数据量较大，不要开启这个功能。</p>\n"
  },
  "renderItem.return_group.children": {
    "desc": "<p>子节点列表，其中项都是一个图形元素定义。</p>\n"
  },
  "renderItem.return_path": {
    "desc": "<p>可使用 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> 做路径。\n可以用来画图标，或者其他各种图形，因为可以很便捷得缩放以适应给定尺寸。</p>\n<p>参见例子：\n<a href=\"https://echarts.apache.org/next/examples/editor.html?c=custom-calendar-icon\" target=\"_blank\">icons</a> 和 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=custom-gantt-flight\" target=\"_blank\">shapes</a>。</p>\n<p>关于制定尺寸、拉伸还是平铺，参见 <a href=\"#series-custom.renderItem.return_path.shape.layout\">layout</a>。</p>\n"
  },
  "renderItem.return_path.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_path.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_path.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_path.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_path.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_path.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_path.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_path.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_path.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_path.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_path.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_path.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_path.shape.pathData": {
    "desc": "<p>即 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。</p>\n<p>例如：<code class=\"codespan\">&#39;M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z&#39;</code>。</p>\n<p>如果指定了 <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>、<a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>、<a href=\"#series-custom.renderItem.return_path.shape.x\">x</a>、<a href=\"#series-custom.renderItem.return_path.shape.y\">y</a>，则会根据他们定义的矩形，缩放 PathData。如果没有指定这些，就不会缩放。</p>\n<p>可使用 <a href=\"#series-custom.renderItem.return_path.shape.layout\">layout</a> 指定缩放策略。</p>\n<p>参见例子：\n<a href=\"https://echarts.apache.org/next/examples/editor.html?c=custom-calendar-icon\" target=\"_blank\">icons</a> 和 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=custom-gantt-flight\" target=\"_blank\">shapes</a>。</p>\n"
  },
  "renderItem.return_path.shape.d": {
    "desc": "<p>同 <a href=\"#series-custom.renderItem.return_path.shape.pathData\">pathData</a>，别名。</p>\n"
  },
  "renderItem.return_path.shape.layout": {
    "desc": "<p>如果指定了 <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>、<a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>、<a href=\"#series-custom.renderItem.return_path.shape.x\">x</a>、<a href=\"#series-custom.renderItem.return_path.shape.y\">y</a>，则会根据他们定义的矩形，缩放 PathData。</p>\n<p><code class=\"codespan\">layout</code> 用于指定缩放策略。</p>\n<p>可选值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;center&#39;</code>：保持原来的 PathData 的长宽比，居于矩形中，尽可能撑大但不会超出矩形。</li>\n<li><code class=\"codespan\">&#39;cover&#39;</code>：PathData 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形。</li>\n</ul>\n"
  },
  "renderItem.return_path.shape.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_path.shape.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_path.shape.width": {
    "desc": "<p>图形元素的宽度。</p>\n"
  },
  "renderItem.return_path.shape.height": {
    "desc": "<p>图形元素的高度。</p>\n"
  },
  "renderItem.return_path.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_path.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_path.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_path.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_path.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_path.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_path.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_path.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_path.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_path.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_path.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_path.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_path.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_path.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_path.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_path.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_image.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_image.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_image.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_image.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_image.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_image.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_image.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_image.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_image.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_image.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_image.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_image.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_image.style.image": {
    "desc": "<p>图片的内容，可以是图片的 URL，也可以是 <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
  },
  "renderItem.return_image.style.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_image.style.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_image.style.width": {
    "desc": "<p>图形元素的宽度。</p>\n"
  },
  "renderItem.return_image.style.height": {
    "desc": "<p>图形元素的高度。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_image.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_image.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_image.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_image.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_image.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_image.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_image.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_image.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_image.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_image.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_image.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_image.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_image.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_image.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_image.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_text": {
    "desc": "<p>文本块。</p>\n"
  },
  "renderItem.return_text.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_text.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_text.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_text.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_text.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_text.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_text.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_text.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_text.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_text.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_text.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_text.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_text.style.text": {
    "desc": "<p>文本块文字。可以使用 <code class=\"codespan\">\\n</code> 来换行。</p>\n"
  },
  "renderItem.return_text.style.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_text.style.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_text.style.font": {
    "desc": "<p>字体大小、字体类型、粗细、字体样式。格式参见 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font\" target=\"_blank\">css font</a>。</p>\n<p>例如：</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
  },
  "renderItem.return_text.style.textAlign": {
    "desc": "<p>水平对齐方式，取值：<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果为 <code class=\"codespan\">&#39;left&#39;</code>，表示文本最左端在 <code class=\"codespan\">x</code> 值上。如果为 <code class=\"codespan\">&#39;right&#39;</code>，表示文本最右端在 <code class=\"codespan\">x</code> 值上。</p>\n"
  },
  "renderItem.return_text.style.textVerticalAlign": {
    "desc": "<p>垂直对齐方式，取值：<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_text.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_text.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_text.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_text.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_text.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_text.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_text.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_text.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_text.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_text.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_text.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_text.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_text.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_text.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_text.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_rect": {
    "desc": "<p>矩形。</p>\n"
  },
  "renderItem.return_rect.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_rect.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_rect.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_rect.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_rect.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_rect.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_rect.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_rect.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_rect.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_rect.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_rect.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_rect.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_rect.shape.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_rect.shape.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_rect.shape.width": {
    "desc": "<p>图形元素的宽度。</p>\n"
  },
  "renderItem.return_rect.shape.height": {
    "desc": "<p>图形元素的高度。</p>\n"
  },
  "renderItem.return_rect.shape.r": {
    "desc": "<p>可以用于设置圆角矩形。<code class=\"codespan\">r: [r1, r2, r3, r4]</code>，\n左上、右上、右下、左下角的半径依次为r1、r2、r3、r4。</p>\n<p>可以缩写，例如：</p>\n<ul>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">1</code>         相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1]</code>       相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2]</code>    相当于 <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2, 3]1 相当于</code>[1, 2, 3, 2]`</li>\n</ul>\n"
  },
  "renderItem.return_rect.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_rect.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_rect.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_rect.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_rect.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_rect.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_rect.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_rect.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_rect.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_rect.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_rect.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_rect.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_rect.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_rect.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_rect.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_rect.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_circle": {
    "desc": "<p>圆。</p>\n"
  },
  "renderItem.return_circle.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_circle.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_circle.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_circle.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_circle.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_circle.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_circle.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_circle.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_circle.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_circle.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_circle.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_circle.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_circle.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_circle.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_circle.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "renderItem.return_circle.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_circle.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_circle.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_circle.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_circle.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_circle.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_circle.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_circle.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_circle.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_circle.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_circle.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_circle.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_circle.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_circle.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_circle.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_circle.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_ring": {
    "desc": "<p>圆环。</p>\n"
  },
  "renderItem.return_ring.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_ring.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_ring.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_ring.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_ring.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_ring.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_ring.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_ring.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_ring.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_ring.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_ring.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_ring.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_ring.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_ring.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_ring.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "renderItem.return_ring.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "renderItem.return_ring.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_ring.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_ring.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_ring.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_ring.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_ring.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_ring.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_ring.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_ring.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_ring.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_ring.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_ring.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_ring.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_ring.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_ring.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_ring.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_sector": {
    "desc": "<p>扇形。</p>\n"
  },
  "renderItem.return_sector.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_sector.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_sector.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_sector.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_sector.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_sector.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_sector.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_sector.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_sector.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_sector.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_sector.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_sector.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_sector.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_sector.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_sector.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "renderItem.return_sector.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "renderItem.return_sector.shape.startAngle": {
    "desc": "<p>开始弧度。</p>\n"
  },
  "renderItem.return_sector.shape.endAngle": {
    "desc": "<p>结束弧度。</p>\n"
  },
  "renderItem.return_sector.shape.clockwise": {
    "desc": "<p>是否顺时针。</p>\n"
  },
  "renderItem.return_sector.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_sector.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_sector.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_sector.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_sector.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_sector.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_sector.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_sector.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_sector.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_sector.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_sector.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_sector.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_sector.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_sector.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_sector.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_sector.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_arc": {
    "desc": "<p>圆弧。</p>\n"
  },
  "renderItem.return_arc.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_arc.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_arc.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_arc.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_arc.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_arc.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_arc.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_arc.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_arc.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_arc.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_arc.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_arc.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_arc.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "renderItem.return_arc.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "renderItem.return_arc.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "renderItem.return_arc.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "renderItem.return_arc.shape.startAngle": {
    "desc": "<p>开始弧度。</p>\n"
  },
  "renderItem.return_arc.shape.endAngle": {
    "desc": "<p>结束弧度。</p>\n"
  },
  "renderItem.return_arc.shape.clockwise": {
    "desc": "<p>是否顺时针。</p>\n"
  },
  "renderItem.return_arc.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_arc.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_arc.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_arc.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_arc.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_arc.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_arc.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_arc.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_arc.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_arc.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_arc.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_arc.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_arc.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_arc.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_arc.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_arc.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polygon": {
    "desc": "<p>多边形。</p>\n"
  },
  "renderItem.return_polygon.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_polygon.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_polygon.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_polygon.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_polygon.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_polygon.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_polygon.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_polygon.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_polygon.shape.points": {
    "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
  },
  "renderItem.return_polygon.shape.smooth": {
    "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.shape.smoothConstraint": {
    "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
  },
  "renderItem.return_polygon.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_polygon.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_polygon.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_polygon.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_polygon.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_polygon.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_polygon.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_polygon.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_polygon.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_polygon.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_polygon.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polygon.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_polygon.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polygon.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_polygon.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polyline": {
    "desc": "<p>折线。</p>\n"
  },
  "renderItem.return_polyline.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_polyline.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_polyline.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_polyline.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_polyline.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_polyline.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_polyline.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_polyline.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_polyline.shape.points": {
    "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
  },
  "renderItem.return_polyline.shape.smooth": {
    "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.shape.smoothConstraint": {
    "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
  },
  "renderItem.return_polyline.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_polyline.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_polyline.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_polyline.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_polyline.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_polyline.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_polyline.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_polyline.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_polyline.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_polyline.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_polyline.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polyline.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_polyline.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_polyline.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_polyline.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_line": {
    "desc": "<p>直线。</p>\n"
  },
  "renderItem.return_line.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_line.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_line.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_line.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_line.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_line.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_line.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_line.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_line.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_line.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_line.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_line.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_line.shape.x1": {
    "desc": "<p>开始点的 x 值。</p>\n"
  },
  "renderItem.return_line.shape.y1": {
    "desc": "<p>开始点的 y 值。</p>\n"
  },
  "renderItem.return_line.shape.x2": {
    "desc": "<p>结束点的 x 值。</p>\n"
  },
  "renderItem.return_line.shape.y2": {
    "desc": "<p>结束点的 y 值。</p>\n"
  },
  "renderItem.return_line.shape.percent": {
    "desc": "<p>线画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
  },
  "renderItem.return_line.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_line.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_line.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_line.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_line.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_line.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_line.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_line.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_line.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_line.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_line.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_line.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_line.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_line.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_line.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_line.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_bezierCurve": {
    "desc": "<p>二次或三次贝塞尔曲线。</p>\n"
  },
  "renderItem.return_bezierCurve.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_bezierCurve.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "renderItem.return_bezierCurve.position": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.rotation": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.scale": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.origin": {
    "desc": "<p>图形元素可以进行标准的 <code class=\"codespan\">2D transform</code>，其中包含：</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">平移（position）</a>：默认值是 <code class=\"codespan\">[0, 0]</code>。表示 <code class=\"codespan\">[横向平移的距离, 纵向平移的距离]</code>。右和下为正值。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">旋转（rotation）</a>：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">缩放（scale）</a>：默认值是 <code class=\"codespan\">[1, 1]</code>。表示 <code class=\"codespan\">[横向缩放的倍数, 纵向缩放的倍数]</code>。</li>\n</ul>\n<p>其中，<a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> 指定了旋转和缩放的中心点，默认值是 <code class=\"codespan\">[0, 0]</code>。</p>\n<p>注意：</p>\n<ul>\n<li>transform 中设定的坐标，都是相对于图形元素的父元素的（即 <a href=\"#series-custom.renderItem.return_group\">group</a> 元素或者顶层画布）的 <code class=\"codespan\">[0, 0]</code> 点。也就是说，我们可以使用 <a href=\"#series-custom.renderItem.return_group\">group</a> 来组织多个图形元素，并且 <a href=\"#series-custom.renderItem.return_group\">group</a> 可以嵌套。</li>\n<li>对于一个图形元素，<code class=\"codespan\">transform</code> 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.z2": {
    "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
  },
  "renderItem.return_bezierCurve.name": {
    "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
  },
  "renderItem.return_bezierCurve.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_bezierCurve.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "renderItem.return_bezierCurve.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "renderItem.return_bezierCurve.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.x1": {
    "desc": "<p>开始点的 x 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.y1": {
    "desc": "<p>开始点的 y 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.x2": {
    "desc": "<p>结束点的 x 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.y2": {
    "desc": "<p>结束点的 y 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpx1": {
    "desc": "<p>控制点 x 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpy1": {
    "desc": "<p>控制点 y 值。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpx2": {
    "desc": "<p>第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpy2": {
    "desc": "<p>第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
  },
  "renderItem.return_bezierCurve.shape.percent": {
    "desc": "<p>画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
  },
  "renderItem.return_bezierCurve.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "renderItem.return_bezierCurve.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "renderItem.return_bezierCurve.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "renderItem.return_bezierCurve.emphasis": {
    "desc": "<p>图形元素的高亮状态</p>\n"
  },
  "renderItem.return_bezierCurve.emphasis.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.emphasis.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.emphasis.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_bezierCurve.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的淡出状态，配置<code class=\"codespan\">focus</code>时有效。</p>\n"
  },
  "renderItem.return_bezierCurve.blur.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "renderItem.return_bezierCurve.select": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>图形元素的选中状态，配置自定义系列的 <a href=\"#series-custom.selectedMode\">selectedMode</a> 时有效。</p>\n"
  },
  "renderItem.return_bezierCurve.select.style": {
    "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
  },
  "itemStyle": {
    "desc": "<p> 图形样式。</p>\n"
  },
  "itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色 </p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "labelLine": {
    "desc": "<p>标签的视觉引导线配置。</p>\n"
  },
  "labelLine.show": {
    "desc": "\n\n<p>是否显示视觉引导线。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "labelLine.showAbove": {
    "desc": "<p>是否显示在图形上方。</p>\n"
  },
  "labelLine.length2": {
    "desc": "\n\n<p>视觉引导项第二段的长度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "15",
      "min": "0",
      "step": "1"
    }
  },
  "labelLine.smooth": {
    "desc": "\n\n<p>是否平滑视觉引导线，默认不平滑，可以设置成 <code class=\"codespan\">true</code> 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "labelLine.minTurnAngle": {
    "desc": "<p>通过调整第二段线的长度，限制引导线两端之间最小的夹角，以防止过小的夹角导致显示不美观。</p>\n<p>可以设置为 0 - 180 度。</p>\n"
  },
  "labelLine.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "labelLine.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "labelLine.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "labelLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "labelLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "labelLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "labelLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "labelLine.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "labelLayout": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>标签的统一布局配置。</p>\n<p>该配置项是在每个系列默认的标签布局基础上，统一调整标签的<code class=\"codespan\">(x, y)</code>位置，标签对齐等属性以实现想要的标签布局效果。</p>\n<p>该配置项也可以是一个有如下参数的回调函数</p>\n<pre><code class=\"lang-js\">// 标签对应数据的 dataIndex\ndataIndex: number\n// 标签对应的数据类型，只在关系图中会有 node 和 edge 数据类型的区分\ndataType?: string\n// 标签对应的系列的 index\nseriesIndex: number\n// 标签显示的文本\ntext: string\n// 默认的标签的包围盒，由系列默认的标签布局决定\nlabelRect: {x: number, y: number, width: number, height: number}\n// 默认的标签水平对齐\nalign: &#39;left&#39; | &#39;center&#39; | &#39;right&#39;\n// 默认的标签垂直对齐\nverticalAlign: &#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39;\n// 标签所对应的数据图形的包围盒，可用于定位标签位置\nrect: {x: number, y: number, width: number, height: number}\n// 默认引导线的位置，目前只有饼图(pie)和漏斗图(funnel)有默认标签位置\n// 如果没有该值则为 null\nlabelLinePoints?: number[][]\n</code></pre>\n<p><strong>示例：</strong></p>\n<p>将标签显示在图形右侧 10px 的位置，并且垂直居中：</p>\n<pre><code class=\"lang-js\">labelLayout(params) {\n    return {\n        x: params.rect.x + 10,\n        y: params.rect.y + params.rect.height / 2,\n        verticalAlign: &#39;middle&#39;,\n        align: &#39;left&#39;\n    }\n}\n</code></pre>\n<p>根据图形的包围盒尺寸决定文本尺寸</p>\n<pre><code class=\"lang-js\">\nlabelLayout(params) {\n    return {\n        fontSize: Math.max(params.rect.width / 10, 5)\n    };\n}\n</code></pre>\n"
  },
  "labelLayout.hideOverlap": {
    "desc": "<p>是否隐藏重叠的标签。</p>\n<p>下面示例演示了在关系图中开启该配置后，在缩放时可以实现自动的标签隐藏。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/view.html?c=graph-label-overlap&edit=1&reset=1\" width=\"600\" height=\"400\"><iframe />\n\n"
  },
  "labelLayout.moveOverlap": {
    "desc": "<p>在标签重叠的时候是否挪动标签位置以防止重叠。</p>\n<p>目前支持配置为：</p>\n<ul>\n<li><code class=\"codespan\">&#39;shiftX&#39;</code> 水平方向依次位移，在水平方向对齐时使用</li>\n<li><code class=\"codespan\">&#39;shiftY&#39;</code> 垂直方向依次位移，在垂直方向对齐时使用</li>\n</ul>\n<p>下面是标签右对齐并配置垂直方向依次位移以防止重叠的示例。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/view.html?c=scatter-label-align-right&edit=1&reset=1\" width=\"600\" height=\"400\"><iframe />\n\n"
  },
  "labelLayout.x": {
    "desc": "<p>标签的 x 位置。支持绝对的像素值或者<code class=\"codespan\">&#39;20%&#39;</code>这样的相对值。</p>\n"
  },
  "labelLayout.y": {
    "desc": "<p>标签的 y 位置。支持绝对的像素值或者<code class=\"codespan\">&#39;20%&#39;</code>这样的相对值。</p>\n"
  },
  "labelLayout.dx": {
    "desc": "<p>标签在 x 方向上的像素偏移。可以和<code class=\"codespan\">x</code>一起使用。</p>\n"
  },
  "labelLayout.dy": {
    "desc": "<p>标签在 y 方向上的像素偏移。可以和<code class=\"codespan\">y</code>一起使用</p>\n"
  },
  "labelLayout.rotate": {
    "desc": "<p>标签旋转角度。</p>\n"
  },
  "labelLayout.width": {
    "desc": "<p>标签显示的宽度。可以配合<code class=\"codespan\">overflow</code>使用控制标签显示在固定宽度内</p>\n"
  },
  "labelLayout.height": {
    "desc": "<p>标签显示的高度。可以配合<code class=\"codespan\">lineOverflow</code>使用控制标签显示在固定高度内</p>\n"
  },
  "labelLayout.align": {
    "desc": "<p>标签水平对齐方式。可以设置<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
  },
  "labelLayout.verticalAlign": {
    "desc": "<p>标签垂直对齐方式。可以设置<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "labelLayout.fontSize": {
    "desc": "<p>The text size of the label.</p>\n"
  },
  "labelLayout.draggable": {
    "desc": "<p>标签是否可以允许用户通过拖拽二次调整位置。</p>\n"
  },
  "labelLayout.labelLinePoints": {
    "desc": "<p>标签引导线三个点的位置。格式为：</p>\n<pre><code class=\"lang-js\">[[x, y], [x, y], [x, y]]\n</code></pre>\n<p>在饼图中常用来微调已经计算好的引导线，其它情况一般不建议设置。</p>\n"
  },
  "selectedMode": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选<code class=\"codespan\">&#39;single&#39;</code>，<code class=\"codespan\">&#39;multiple&#39;</code>，分别表示单选还是多选。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "false,true,single,multiple"
    }
  },
  "dimensions": {
    "desc": "<p>使用 dimensions 定义 <code class=\"codespan\">series.data</code> 或者 <code class=\"codespan\">dataset.source</code> 的每个维度的信息。</p>\n<p>注意：如果使用了 <a href=\"#dataset\">dataset</a>，那么可以在 <a href=\"#dataset.dimensions\">dataset.dimensions</a> 中定义 dimension ，或者在 <a href=\"#dataset.source\">dataset.source</a> 的第一行/列中给出 dimension 名称。于是就不用在这里指定 dimension。但如果在这里指定了 <code class=\"codespan\">dimensions</code>，那么优先使用这里的。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">option = {\n    dataset: {\n        source: [\n            // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：\n            // &#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。\n        dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<pre><code class=\"lang-js\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [\n        null,                // 如果此维度不想给出定义，则使用 null 即可\n        {type: &#39;ordinal&#39;},   // 只定义此维度的类型。\n                             // &#39;ordinal&#39; 表示离散型，一般文本使用这种类型。\n                             // 如果类型没有被定义，会自动猜测类型。\n        {name: &#39;good&#39;, type: &#39;number&#39;},\n        &#39;bad&#39;                // 等同于 {name: &#39;bad&#39;}\n    ]\n}\n</code></pre>\n<p><code class=\"codespan\">dimensions</code> 数组中的每一项可以是：</p>\n<ul>\n<li><code class=\"codespan\">string</code>，如 <code class=\"codespan\">&#39;someName&#39;</code>，等同于 <code class=\"codespan\">{name: &#39;someName&#39;}</code></li>\n<li><code class=\"codespan\">Object</code>，属性可以有：<ul>\n<li>name: <code class=\"codespan\">string</code>。</li>\n<li>type: <code class=\"codespan\">string</code>，支持<ul>\n<li><code class=\"codespan\">number</code>，默认，表示普通数据。</li>\n<li><code class=\"codespan\">ordinal</code>，对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 &#39;ordinal&#39; 类型。ECharts 默认会自动判断这个类型。但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定。</li>\n<li><code class=\"codespan\">float</code>，即 <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array\" target=\"_blank\">Float64Array</a>。</li>\n<li><code class=\"codespan\">int</code>，即 <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array\" target=\"_blank\">Int32Array</a>。</li>\n<li><code class=\"codespan\">time</code>，表示时间类型。设置成 &#39;time&#39; 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 &#39;2017-05-10&#39;，会自动被解析。时间类型的支持参见 <a href=\"#series.data\">data</a>。</li>\n</ul>\n</li>\n<li>displayName: 一般用于 tooltip 中维度名的展示。<code class=\"codespan\">string</code> 如果没有指定，默认使用 name 来展示。</li>\n</ul>\n</li>\n</ul>\n<p>值得一提的是，当定义了 <code class=\"codespan\">dimensions</code> 后，默认 <code class=\"codespan\">tooltip</code> 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 <code class=\"codespan\">dimensions</code>，则默认 <code class=\"codespan\">tooltip</code> 会横排显示，且只显示数值没有维度名称可显示。</p>\n"
  },
  "encode": {
    "desc": "<p>可以定义 <code class=\"codespan\">data</code> 的哪个维度被编码成什么。比如：</p>\n<pre><code class=\"lang-js\">option = {\n    dataset: {\n        source: [\n            // 每一列称为一个『维度』。\n            // 这里分别是维度 0、1、2、3、4。\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        encode: {\n            x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。\n            y: 2,              // 表示维度 2 映射到 y 轴。\n            tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。\n        }\n    }\n}\n</code></pre>\n<p>当使用 <a href=\"#series.dimensions\">dimensions</a> 给维度定义名称后，<code class=\"codespan\">encode</code> 中可直接引用名称，例如：</p>\n<pre><code class=\"lang-js\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;],\n    encode: {\n        x: &#39;date&#39;,\n        y: [&#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<p><code class=\"codespan\">encode</code> 声明的基本结构如下，其中冒号左边是坐标系、标签等特定名称，如 <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;tooltip&#39;</code> 等，冒号右边是数据中的维度名（string 格式）或者维度的序号（number 格式，从 0 开始计数），可以指定一个或多个维度（使用数组）。通常情况下，下面各种信息不需要所有的都写，按需写即可。</p>\n<p>下面是 encode 支持的属性：</p>\n<pre><code class=\"lang-js\">// 在任何坐标系和系列中，都支持：\nencode: {\n    // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示\n    tooltip: [&#39;product&#39;, &#39;score&#39;]\n    // 使用 “维度 1” 和 “维度 3” 的维度名连起来作为系列名。（有时候名字比较长，这可以避免在 series.name 重复输入这些名字）\n    seriesName: [1, 3],\n    // 表示使用 “维度2” 中的值作为 id。这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画。\n    itemId: 2,\n    // 指定数据项的名称使用 “维度3” 在饼图等图表中有用，可以使这个名字显示在图例（legend）中。\n    itemName: 3\n}\n\n// 直角坐标系（grid/cartesian）特有的属性：\nencode: {\n    // 把 “维度1”、“维度5”、“名为 score 的维度” 映射到 X 轴：\n    x: [1, 5, &#39;score&#39;],\n    // 把“维度0”映射到 Y 轴。\n    y: 0\n}\n\n// 单轴（singleAxis）特有的属性：\nencode: {\n    single: 3\n}\n\n// 极坐标系（polar）特有的属性：\nencode: {\n    radius: 3,\n    angle: 2\n}\n\n// 地理坐标系（geo）特有的属性：\nencode: {\n    lng: 3,\n    lat: 2\n}\n\n// 对于一些没有坐标系的图表，例如饼图、漏斗图等，可以是：\nencode: {\n    value: 3\n}\n</code></pre>\n<p>这是个更丰富的 <code class=\"codespan\">encode</code> 的<a href=\"https://echarts.apache.org/next/examples/view.html?c=dataset-encode1&amp;edit=1&amp;reset=1\" target=\"_blank\">示例</a>：</p>\n<p>特殊地，在 <a href=\"#series-custom\">自定义系列（custom series）</a> 中，<code class=\"codespan\">encode</code> 中轴可以不指定或设置为 <code class=\"codespan\">null/undefined</code>，从而使系列免于受这个轴控制，也就是说，轴的范围（extent）不会受此系列数值的影响，轴被 <a href=\"#dataZoom\">dataZoom</a> 控制时也不会过滤掉这个系列：</p>\n<pre><code class=\"lang-js\">var option = {\n    xAxis: {},\n    yAxis: {},\n    dataZoom: [{\n        xAxisIndex: 0\n    }, {\n        yAxisIndex: 0\n    }],\n    series: {\n        type: &#39;custom&#39;,\n        renderItem: function (params, api) {\n            return {\n                type: &#39;circle&#39;,\n                shape: {\n                    cx: 100, // x 位置永远为 100\n                    cy: api.coord([0, api.value(0)])[1],\n                    r: 30\n                },\n                style: {\n                    fill: &#39;blue&#39;\n                }\n            };\n        },\n        encode: {\n            // 这样这个系列就不会被 x 轴以及 x\n            // 轴上的 dataZoom 控制了。\n            x: -1,\n            y: 1\n        },\n        data: [ ... ]\n    }\n};\n</code></pre>\n"
  },
  "seriesLayoutBy": {
    "desc": "<p>当使用 <a href=\"#dataset\">dataset</a> 时，<code class=\"codespan\">seriesLayoutBy</code> 指定了 <code class=\"codespan\">dataset</code> 中用行还是列对应到系列上，也就是说，系列“排布”到 <code class=\"codespan\">dataset</code> 的行还是列上。可取值：</p>\n<ul>\n<li>&#39;column&#39;：默认，<code class=\"codespan\">dataset</code> 的列对应于系列，从而 <code class=\"codespan\">dataset</code> 中每一列是一个维度（dimension）。</li>\n<li>&#39;row&#39;：<code class=\"codespan\">dataset</code> 的行对应于系列，从而 <code class=\"codespan\">dataset</code> 中每一行是一个维度（dimension）。</li>\n</ul>\n<p>参见这个 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=dataset-series-layout-by&amp;theme=lite\" target=\"_blank\">示例</a></p>\n"
  },
  "datasetIndex": {
    "desc": "<p>如果 <a href=\"#series.data\">series.data</a> 没有指定，并且 <a href=\"#dataset\">dataset</a> 存在，那么就会使用 <a href=\"#dataset\">dataset</a>。<code class=\"codespan\">datasetIndex</code> 指定本系列使用那个 <a href=\"#dataset\">dataset</a>。</p>\n"
  },
  "data": {
    "desc": "<p>系列中的数据内容数组。数组项通常为具体的数据项。</p>\n<p>注意，如果系列没有指定 <code class=\"codespan\">data</code>，并且 option 有 <a href=\"#dataset\">dataset</a>，那么默认使用第一个 <a href=\"#dataset\">dataset</a>。如果指定了 <code class=\"codespan\">data</code>，则不会再使用 <a href=\"#dataset\">dataset</a>。</p>\n<p>可以使用 <code class=\"codespan\">series.datasetIndex</code> 指定其他的 <a href=\"#dataset\">dataset</a>。</p>\n<p>通常来说，数据用一个二维数组表示。如下，每一列被称为一个『维度』。</p>\n<pre><code class=\"lang-js\">series: [{\n    data: [\n        // 维度X   维度Y   其他维度 ...\n        [  3.4,    4.5,   15,   43],\n        [  4.2,    2.3,   20,   91],\n        [  10.8,   9.5,   30,   18],\n        [  7.2,    8.8,   18,   57]\n    ]\n}]\n</code></pre>\n<ul>\n<li>在 <a href=\"#grid\">直角坐标系 (grid)</a> 中『维度X』和『维度Y』会默认对应于 <a href=\"#xAxis\">xAxis</a> 和 <a href=\"#yAxis\">yAxis</a>。</li>\n<li>在 <a href=\"#polar\">极坐标系 (polar)</a> 中『维度X』和『维度Y』会默认对应于 <a href=\"#radiusAxis\">radiusAxis</a> 和 <a href=\"#anbleAxis\">angleAxis</a>。</li>\n<li>后面的其他维度是可选的，可以在别处被使用，例如：<ul>\n<li>在 <a href=\"#visualMap\">visualMap</a> 中可以将一个或多个维度映射到颜色，大小等多个图形属性上。</li>\n<li>在 <a href=\"#series.symbolSize\">series.symbolSize</a> 中可以使用回调函数，基于某个维度得到 symbolSize 值。</li>\n<li>使用 <a href=\"#tooltip.formatter\">tooltip.formatter</a> 或 <a href=\"#series.label.formatter\">series.label.formatter</a> 可以把其他维度的值展示出来。</li>\n</ul>\n</li>\n</ul>\n<p>特别地，当只有一个轴为类目轴（axis.type 为 <code class=\"codespan\">&#39;category&#39;</code>）的时候，数据可以简化用一个一维数组表示。例如：</p>\n<pre><code class=\"lang-js\">xAxis: {\n    data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;]\n},\nseries: [{\n    // 与 xAxis.data 一一对应。\n    data: [23,  44,  55,  19]\n    // 它其实是下面这种形式的简化：\n    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]\n}]\n</code></pre>\n<p><strong>『值』与 <a href=\"#xAxis.type\">轴类型</a> 的关系：</strong></p>\n<ul>\n<li><p>当某维度对应于数值轴（axis.type 为 <code class=\"codespan\">&#39;value&#39;</code> 或者 <code class=\"codespan\">&#39;log&#39;</code>）的时候：</p>\n<p>  其值可以为 <code class=\"codespan\">number</code>（例如 <code class=\"codespan\">12</code>）。（也可以兼容 <code class=\"codespan\">string</code> 形式的 number，例如 <code class=\"codespan\">&#39;12&#39;</code>）</p>\n</li>\n<li><p>当某维度对应于类目轴（axis.type 为 <code class=\"codespan\">&#39;category&#39;</code>）的时候：</p>\n<p>  其值须为类目的『序数』（从 <code class=\"codespan\">0</code> 开始）或者类目的『字符串值』。例如：</p>\n<pre><code class=\"lang-js\">  xAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;星期一&#39;, &#39;星期二&#39;, &#39;星期三&#39;, &#39;星期四&#39;]\n  },\n  yAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;, &#39;p&#39;, &#39;q&#39;]\n  },\n  series: [{\n      data: [\n          // xAxis    yAxis\n          [  0,        0,    2  ], // 意思是此点位于 xAxis: &#39;星期一&#39;, yAxis: &#39;a&#39;。\n          [  &#39;星期四&#39;,  2,    1  ], // 意思是此点位于 xAxis: &#39;星期四&#39;, yAxis: &#39;m&#39;。\n          [  2,       &#39;p&#39;,   2  ], // 意思是此点位于 xAxis: &#39;星期三&#39;, yAxis: &#39;p&#39;。\n          [  3,        3,    5  ]\n      ]\n  }]\n</code></pre>\n<p>  双类目轴的示例可以参考 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=scatter-punchCard\" target=\"_blank\">Github Punchcard</a> 示例。</p>\n</li>\n<li><p>当某维度对应于时间轴（type 为 <code class=\"codespan\">&#39;time&#39;</code>）的时候，值可以为：</p>\n<ul>\n<li>一个时间戳，如 <code class=\"codespan\">1484141700832</code>，表示 UTC 时间。</li>\n<li>或者字符串形式的时间描述：<ul>\n<li><a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\" target=\"_blank\">ISO 8601</a> 的子集，只包含这些形式（这几种格式，除非指明时区，否则均表示本地时间，与 <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a> 一致）：<ul>\n<li>部分年月日时间: <code class=\"codespan\">&#39;2012-03&#39;</code>, <code class=\"codespan\">&#39;2012-03-01&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05:06&#39;</code>.</li>\n<li>使用 <code class=\"codespan\">&#39;T&#39;</code> 或空格分割: <code class=\"codespan\">&#39;2012-03-01T12:22:33.123&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 12:22:33.123&#39;</code>.</li>\n<li>时区设定: <code class=\"codespan\">&#39;2012-03-01T12:22:33Z&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33+8000&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33-05:00&#39;</code>.</li>\n</ul>\n</li>\n<li>其他的时间字符串，包括（均表示本地时间）:\n<code class=\"codespan\">&#39;2012&#39;</code>, <code class=\"codespan\">&#39;2012-3-1&#39;</code>, <code class=\"codespan\">&#39;2012/3/1&#39;</code>, <code class=\"codespan\">&#39;2012/03/01&#39;</code>,\n<code class=\"codespan\">&#39;2009/6/12 2:00&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08.123&#39;</code></li>\n</ul>\n</li>\n<li>或者用户自行初始化的 Date 实例：<ul>\n<li>注意，用户自行初始化 Date 实例的时候，<a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">浏览器的行为有差异，不同字符串的表示也不同</a>。</li>\n<li>例如：在 chrome 中，<code class=\"codespan\">new Date(&#39;2012-01-01&#39;)</code> 表示 UTC 时间的 2012 年 1 月 1 日，而 <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> 和 <code class=\"codespan\">new Date(&#39;2012/01/01&#39;)</code> 表示本地时间的 2012 年 1 月 1 日。在 safari 中，不支持 <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> 这种表示方法。</li>\n<li>所以，使用 <code class=\"codespan\">new Date(dataString)</code> 时，可使用第三方库解析（如 <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>），或者使用 <code class=\"codespan\">echarts.number.parseDate</code>，或者参见 <a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">这里</a>。</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>当需要对个别数据进行个性化定义时：</strong></p>\n<p>数组项可用对象，其中的 <code class=\"codespan\">value</code> 像表示具体的数值，如：</p>\n<pre><code class=\"lang-js\">[\n    12,\n    34,\n    {\n        value : 56,\n        //自定义标签样式，仅对该数据项有效\n        label: {},\n        //自定义特殊 itemStyle，仅对该数据项有效\n        itemStyle:{}\n    },\n    10\n]\n// 或\n[\n    [12, 33],\n    [34, 313],\n    {\n        value: [56, 44],\n        label: {},\n        itemStyle:{}\n    },\n    [10, 33]\n]\n</code></pre>\n<p><strong>空值：</strong></p>\n<p>当某数据不存在时（ps：<em>不存在</em>不代表值为 0），可以用 <code class=\"codespan\">&#39;-&#39;</code> 或者 <code class=\"codespan\">null</code> 或者 <code class=\"codespan\">undefined</code> 或者 <code class=\"codespan\">NaN</code> 表示。</p>\n<p>例如，无数据在折线图中可表现为该点是断开的，在其它图中可表示为图形不存在。</p>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "<p>单个数据项的数值。</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.tooltip": {
    "desc": "<p>本系列每个数据项中特定的 tooltip 设定。</p>\n"
  },
  "data.tooltip.position": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "data.tooltip.formatter": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n    // 饼图的百分比\n    percent: number,\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "data.tooltip.backgroundColor": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
  },
  "data.tooltip.borderColor": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "data.tooltip.borderWidth": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.padding": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.tooltip.textStyle": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的文本样式。</p>\n"
  },
  "data.tooltip.textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "data.tooltip.textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.tooltip.textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.tooltip.textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.tooltip.textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "data.tooltip.textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.tooltip.textStyle.width": {
    "desc": "<p>文本显示宽度。</p>\n"
  },
  "data.tooltip.textStyle.height": {
    "desc": "<p>文本显示高度。</p>\n"
  },
  "data.tooltip.textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.tooltip.textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.tooltip.textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "data.tooltip.textStyle.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "data.tooltip.textStyle.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "data.tooltip.extraCssText": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  },
  "clip": {
    "desc": "\n\n\n\n<blockquote>\n<p>从 <code class=\"codespan\">v4.4.0</code> 开始支持</p>\n</blockquote>\n<p>是否裁剪超出坐标系部分的图形，具体裁剪效果根据系列决定：</p>\n<ul>\n<li>散点图：忽略中心点超出坐标系的图形，但是不裁剪单个图形</li>\n<li>柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子</li>\n<li>折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理</li>\n<li>路径图：裁掉所有超出坐标系的部分</li>\n<li>K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形</li>\n<li>自定义系列：裁掉所有超出坐标系的部分</li>\n</ul>\n<p>除了自定义系列，其它系列的默认值都为 true，及开启裁剪，如果你觉得不想要裁剪的话，可以设置成 false 关闭。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "zlevel": {
    "desc": "<p>自定义图所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>自定义图组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "silent": {
    "desc": "\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/next/examples/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "tooltip": {
    "desc": "<p>本系列特定的 tooltip 设定。</p>\n"
  },
  "tooltip.position": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "tooltip.formatter": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n    // 饼图的百分比\n    percent: number,\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "tooltip.backgroundColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
  },
  "tooltip.borderColor": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "tooltip.borderWidth": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "tooltip.padding": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "tooltip.textStyle": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的文本样式。</p>\n"
  },
  "tooltip.textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "tooltip.textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "tooltip.textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "tooltip.textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "tooltip.textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "tooltip.textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "tooltip.textStyle.width": {
    "desc": "<p>文本显示宽度。</p>\n"
  },
  "tooltip.textStyle.height": {
    "desc": "<p>文本显示高度。</p>\n"
  },
  "tooltip.textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "tooltip.textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "tooltip.textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "tooltip.textStyle.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "tooltip.textStyle.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "tooltip.extraCssText": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}