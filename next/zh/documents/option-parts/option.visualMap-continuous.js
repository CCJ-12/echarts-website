window.__EC_DOC_option_visualMap_continuous = {
  "type": {
    "desc": "<p>类型为连续型。</p>\n"
  },
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "min": {
    "desc": "\n\n<p>指定 visualMapContinuous 组件的允许的最小值。<code class=\"codespan\">&#39;min&#39;</code> 必须用户指定。<code class=\"codespan\">[visualMap.min, visualMax.max]</code> 形成了视觉映射的『定义域』。</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "max": {
    "desc": "\n\n<p>指定 visualMapContinuous 组件的允许的最大值。<code class=\"codespan\">&#39;max&#39;</code> 必须用户指定。<code class=\"codespan\">[visualMap.min, visualMax.max]</code> 形成了视觉映射的『定义域』。</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "range": {
    "desc": "<exampleuicontrovector  dims=\"min,max\">\n\n<exampleuicontrovector /><p>指定手柄对应数值的位置。<code class=\"codespan\">range</code> 应在 <code class=\"codespan\">min</code> <code class=\"codespan\">max</code> 范围内。例如：</p>\n<pre><code class=\"lang-javascript\">chart.setOption({\n    visualMap: {\n        min: 0,\n        max: 100,\n        // 两个手柄对应的数值是 4 和 15\n        range: [4, 15],\n        ...\n    }\n});\n</code></pre>\n<p><strong>setOption 改变 min、max 时 range 的自适应</strong></p>\n<ul>\n<li>如果 <code class=\"codespan\">range</code> 不设置（或设置为 null）</li>\n</ul>\n<pre><code class=\"lang-javascript\">例如：\nchart.setOption({visualMap: {min: 10, max: 300}}); // 不设置 range，则 range 默认为 [min, max]，即 [10, 300]。\n\nchart.setOption({visualMap: {min: 0, max: 400}}); // 再次使用 setOption 改变 min、max。\n// 此时 range 也自然会更新成改变过后的 [min, max]，即 [0, 400]。\n</code></pre>\n<ul>\n<li>如果 <code class=\"codespan\">range</code> 被以具体值设置了（例如设置为 [10, 300]）</li>\n</ul>\n<pre><code class=\"lang-javascript\">例如：\nchart.setOption({visualMap: {min: 10, max: 300, range: [20, 80]}}); // 设置了 range\n\nchart.setOption({visualMap: {min: 0, max: 400}}); // 再次使用 setOption 改变 min、max。\n// 此时 range 不会改变而仍维持本来的数值，仍为 [20, 80]。\n\nchart.setOption({visualMap: {range: null}}); // 再把 range 设为 null。\n// 则 range 恢复为 [min, max]，即 [0, 400]，同时也恢复了自动随 min max 而改变的能力。\n\n</code></pre>\n<p><code class=\"codespan\">getOption</code> 得到的 <code class=\"codespan\">range</code> 总是 <code class=\"codespan\">Array</code>，不会为 <code class=\"codespan\">null</code> 或 <code class=\"codespan\">undefined</code>。</p>\n"
  },
  "calculable": {
    "desc": "\n\n<p>是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。</p>\n<p>（注：为兼容 ECharts2，当 <a href=\"#visualMap.type\">visualMap.type</a> 未指定时，假如设置了 <code class=\"codespan\">&#39;calculable&#39;</code>，则<code class=\"codespan\">type</code>自动被设置为<code class=\"codespan\">&#39;continuous&#39;</code>，无视 <a href=\"#visualMap-piecewise.splitNumber\">visualMap-piecewise.splitNumber</a> 等设置。所以，建议使用者不要不指定 <a href=\"#visualMap.type\">visualMap.type</a>，否则表意不清晰。）</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "realtime": {
    "desc": "\n\n<p>拖拽时，是否实时更新。</p>\n<ul>\n<li><p>如果为<code class=\"codespan\">ture</code>则拖拽手柄过程中实时更新图表视图。</p>\n</li>\n<li><p>如果为<code class=\"codespan\">false</code>则拖拽结束时，才更新视图。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "inverse": {
    "desc": "\n\n<p>是否反转 visualMap 组件。</p>\n<p>当<code class=\"codespan\">inverse</code>为<code class=\"codespan\">false</code>时，数据大小的位置规则，和直角坐标系相同，即：</p>\n<ul>\n<li>当 <a href=\"#visualMap.orient\">visualMap.orient</a> 为<code class=\"codespan\">&#39;vertical&#39;</code>时，数据上大下小。</li>\n<li>当 <a href=\"#visualMap.orient\">visualMap.orient</a> 为<code class=\"codespan\">&#39;horizontal&#39;</code>时，数据右大左小。</li>\n</ul>\n<p>当<code class=\"codespan\">inverse</code>为<code class=\"codespan\">true</code>时，相反。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "precision": {
    "desc": "\n\n<p>数据展示的小数精度，默认为0，无小数点。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "itemWidth": {
    "desc": "\n\n<p>图形的宽度，即长条的宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "20",
      "min": "0"
    }
  },
  "itemHeight": {
    "desc": "\n\n<p>图形的高度，即长条的高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "140",
      "min": "0"
    }
  },
  "align": {
    "desc": "\n\n<p>指定组件中手柄和文字的摆放位置，可选值为：</p>\n<ul>\n<li><code class=\"codespan\">&#39;auto&#39;</code> 自动决定。</li>\n<li><code class=\"codespan\">&#39;left&#39;</code> 手柄和label在右，orient 为 horizontal 时有效。</li>\n<li><code class=\"codespan\">&#39;right&#39;</code> 手柄和label在左，orient 为 horizontal 时有效。</li>\n<li><code class=\"codespan\">&#39;top&#39;</code> 手柄和label在下，orient 为 vertical 时有效。</li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code> 手柄和label在上，orient 为 vertical 时有效。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,left,right,top,bottom"
    }
  },
  "text": {
    "desc": "<p>两端的文本，如 <code class=\"codespan\">[&#39;High&#39;, &#39;Low&#39;]</code>。<a href=\"https://echarts.apache.org/next/examples/editor.html?c=doc-example/map-visualMap-continuous-text&amp;edit=1&amp;reset=1\" target=\"_blank\">参见例子</a>。</p>\n<p><code class=\"codespan\">text</code> 中的顺序，其实试试就知道。若要看详细的规则，参见 <a href=\"#visualMap.inverse\">visualMap.inverse</a>。</p>\n"
  },
  "textGap": {
    "desc": "\n\n<p>两端文字主体之间的距离，单位为px。参见 <a href=\"#visualMap-continuous.text\">visualMap-continuous.text</a></p>\n",
    "uiControl": {
      "type": "number",
      "default": "10",
      "step": "0.5"
    }
  },
  "show": {
    "desc": "<p>是否显示 visualMap-continuous 组件。如果设置为 <code class=\"codespan\">false</code>，不会显示，但是数据映射的功能还存在。</p>\n"
  },
  "dimension": {
    "desc": "<p>指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 <a href=\"#series.data\">series.data</a>。\n可以把 <a href=\"#series.data\">series.data</a> 理解成一个二维数组，例如：</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 23, 43],\n    [12, 23, 43],\n    [43, 545, 65],\n    [92, 23, 33]\n]\n</code></pre>\n<p>其中每个列是一个维度，即 <code class=\"codespan\">dimension</code>。\n例如 <code class=\"codespan\">dimension</code> 为 1 时，取第二列（即 23，23，545，23），映射到视觉元素上。</p>\n<p>默认取 <code class=\"codespan\">data</code> 中最后一个维度。</p>\n"
  },
  "seriesIndex": {
    "desc": "<p>指定取哪个系列的数据，即哪个系列的 <a href=\"#series.data\">series.data</a>。</p>\n<p>默认取所有系列。</p>\n"
  },
  "hoverLink": {
    "desc": "<p>打开 <code class=\"codespan\">hoverLink</code> 功能时，鼠标悬浮到 <code class=\"codespan\">visualMap</code> 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮。</p>\n<p>反之，鼠标悬浮到图表中的图形元素上时，在 <code class=\"codespan\">visualMap</code> 组件的相应位置会有三角提示其所对应的数值。</p>\n"
  },
  "inRange": {
    "desc": "<p>定义 <strong>在选中范围中</strong> 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）</p>\n<p>可选的视觉元素有：</p>\n<ul>\n<li><code class=\"codespan\">symbol</code>: 图元的图形类别。</li>\n<li><code class=\"codespan\">symbolSize</code>: 图元的大小。</li>\n<li><code class=\"codespan\">color</code>: 图元的颜色。</li>\n<li><code class=\"codespan\">colorAlpha</code>: 图元的颜色的透明度。</li>\n<li><code class=\"codespan\">opacity</code>: 图元以及其附属物（如文字标签）的透明度。</li>\n<li><code class=\"codespan\">colorLightness</code>: 颜色的明暗度，参见 <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>。</li>\n<li><code class=\"codespan\">colorSaturation</code>: 颜色的饱和度，参见 <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>。</li>\n<li><code class=\"codespan\">colorHue</code>: 颜色的色调，参见 <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>。</li>\n</ul>\n<p><code class=\"codespan\">inRange</code> 能定义目标系列（参见 <a href=\"#visualMap-continuous.seriesIndex\">visualMap-continuous.seriesIndex</a>）视觉形式，也同时定义了 <code class=\"codespan\">visualMap-continuous</code> 本身的视觉样式。通俗来讲就是，假如 <code class=\"codespan\">visualMap-continuous</code>控制的是散点图，那么 <code class=\"codespan\">inRange</code> 同时定义了散点图的 <code class=\"codespan\">颜色</code>、<code class=\"codespan\">尺寸</code> 等，也定义了 <code class=\"codespan\">visualMap-continuous</code> 本身的 <code class=\"codespan\">颜色</code>、<code class=\"codespan\">尺寸</code> 等。这二者能对应上。</p>\n<p>定义方式，例如：</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        inRange: {\n            color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n            symbolSize: [30, 100]\n        }\n    }\n]\n</code></pre>\n<p>如果想分别定义 <code class=\"codespan\">visualMap-continuous</code> 本身的视觉样式和 <code class=\"codespan\">目标系列</code> 的视觉样式，则这样定义：</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        // 表示 目标系列 的视觉样式。\n        target: {\n            inRange: {\n                color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n                symbolSize: [60, 200]\n            }\n        },\n        // 表示 visualMap-continuous 本身的视觉样式。\n        controller: {\n            inRange: {\n                symbolSize: [30, 100]\n            }\n        }\n    }\n]\n</code></pre>\n<p>或者这样定义：</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        // 表示 目标系列 的视觉样式 和 visualMap-continuous 共有的视觉样式。\n        inRange: {\n            color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n            symbolSize: [60, 200]\n        },\n        // 表示 visualMap-continuous 本身的视觉样式，会覆盖共有的视觉样式。比如，symbolSize 覆盖成为 [30, 100]，而 color 不变。\n        controller: {\n            inRange: {\n                symbolSize: [30, 100]\n            }\n        }\n    }\n]\n</code></pre>\n<p><strong>✦ 关于视觉通道 ✦</strong></p>\n<ul>\n<li><p>inRange 中，可以有任意几个的『视觉通道』定义（如 <code class=\"codespan\">color</code>、<code class=\"codespan\">symbolSize</code> 等）。这些视觉通道，会被同时采用。</p>\n</li>\n<li><p>一般来说，建议使用 <code class=\"codespan\">透明度（opacity）</code> ，而非 <code class=\"codespan\">颜色透明度（colorAlpha）</code> （他们细微的差异在于，前者能也同时控制图元中的附属物（如 label）的透明度，而后者只能控制图元本身颜色的透明度）。</p>\n</li>\n<li><p>视觉映射的方式：支持两种方式：线性映射、查表映射。</p>\n</li>\n</ul>\n<p><strong>✦ 视觉通道 -- 线性映射 ✦</strong></p>\n<p><code class=\"codespan\">线性映射</code> 表示 series.data 中的每一个值（dataValue）会经过线性映射计算，从 <code class=\"codespan\">[visualMap.min, visualMap.max]</code> 映射到设定的 <code class=\"codespan\">[visual value 1, visual value 2]</code> 区间中的某一个视觉的值（下称 visual value）。</p>\n<p>例如，我们设置了 <code class=\"codespan\">[visualMap.min, visualMap.max] 为 [0, 100]</code>，并且我们有 <code class=\"codespan\">series.data: [50, 10, 100]</code>。我们想将其映射到范围为 <code class=\"codespan\">[0.4, 1]</code> 的 <code class=\"codespan\">opacity</code> 上，从而达到用透明度表达数值大小的目的。那么 visualMap 组件会对 series.data 中的每一个 dataValue 做线性映射计算，得到一个 opacityValue。最终得到的 opacityValues 为 <code class=\"codespan\">[0.7, 0.44, 1]</code>。</p>\n<p>visual 范围也可以反向，例如上例，可以设定 <code class=\"codespan\">opacity</code> 范围为 <code class=\"codespan\">[1, 0.4]</code>，则上例得到的 opacityValues 为 <code class=\"codespan\">[0.7, 0.96, 0.4]</code>。</p>\n<p>注意，[visualMap.min, visualMap.max] 须手动设置，不设置则默认取 [0, 100]，而非 series.data 中的 <code class=\"codespan\">dataMin</code> 和 <code class=\"codespan\">dataMax</code>。</p>\n<p>如何设定为线性映射？以下情况时，会设定为 <code class=\"codespan\">线性映射</code>：</p>\n<ul>\n<li><p>当 <code class=\"codespan\">visualMap</code> 为 <a href=\"#visualMap-continuous\">visualMap-continuous</a> 时，或者</p>\n</li>\n<li><p>当 <code class=\"codespan\">visualMap</code> 为 <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> 且 未设置 <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a> 时。</p>\n</li>\n</ul>\n<p>视觉通道的值（visual value）：</p>\n<ul>\n<li><p>视觉通道的值一般都以 <code class=\"codespan\">Array</code> 形式表示，例如：<code class=\"codespan\">color: [&#39;#333&#39;, &#39;#777&#39;]</code>。</p>\n</li>\n<li><p>如果写成 <code class=\"codespan\">number</code> 或 <code class=\"codespan\">string</code>，会转成 <code class=\"codespan\">Array</code>。例如，写成 <code class=\"codespan\">opacity: 0.4</code> 会转成 <code class=\"codespan\">opacity: [0.4, 0.4]</code>，<code class=\"codespan\">color: &#39;#333&#39;</code> 会转成 <code class=\"codespan\">color: [&#39;#333&#39;, &#39;#333&#39;]</code>。</p>\n</li>\n<li><p>对于 <code class=\"codespan\">图形大小（symbolSize）</code>、<code class=\"codespan\">透明度（opacity）</code>、<code class=\"codespan\">颜色透明度（colorAlpha）</code>、<code class=\"codespan\">颜色明暗度（colorLightness）</code>、<code class=\"codespan\">颜色饱和度（colorSaturation）</code>、<code class=\"codespan\">色调（colorHue）</code>：形如<code class=\"codespan\">Array</code> 的视觉范围总是表示：<code class=\"codespan\">[最小数据值对应的视觉值, 最大数据值对应的视觉值]</code>。比如：<code class=\"codespan\">colorLightness: [0.8, 0.2]</code>，表示 series.data 中，和 <code class=\"codespan\">visualMap.min</code> 相等的值（如果有的话）映射到 <code class=\"codespan\">颜色明暗</code> 的 <code class=\"codespan\">0.8</code>，和 <code class=\"codespan\">visualMap.max</code> 相等的值（如果有的话）映射到 <code class=\"codespan\">颜色明暗</code> 的 <code class=\"codespan\">0.2</code>，中间其他数据值，按照线性计算出映射结果。</p>\n</li>\n<li><p>对于 <code class=\"codespan\">颜色（color）</code>，使用数组表示例如：<code class=\"codespan\">[&#39;#333&#39;, &#39;#78ab23&#39;, &#39;blue&#39;]</code>。意思就是以这三个点作为基准，形成一种『渐变』的色带，数据映射到这个色带上。也就是说，与 <code class=\"codespan\">visualMap.min</code> 相等的值会映射到 <code class=\"codespan\">&#39;#333&#39;</code>，与 <code class=\"codespan\">visualMap.max</code> 相等的值会映射到 <code class=\"codespan\">&#39;blue&#39;</code>。对于 <code class=\"codespan\">visualMap.min</code> 和 <code class=\"codespan\">visualMap.max</code> 中间的其他点，以所给定的 <code class=\"codespan\">&#39;#333&#39;</code>, <code class=\"codespan\">&#39;#78ab23&#39;</code>, <code class=\"codespan\">&#39;blue&#39;</code> 这三个颜色作为基准点进行分段线性插值，得到映射结果。</p>\n</li>\n<li><p>对于 <code class=\"codespan\">图形类别（symbol）</code>：使用数据表示例如：<code class=\"codespan\">[&#39;circle&#39;, &#39;rect&#39;, &#39;diamond&#39;]</code>。与 <code class=\"codespan\">visualMap.min</code> 相等的值会映射到 <code class=\"codespan\">&#39;circle&#39;</code>，与 <code class=\"codespan\">visualMap.max</code> 相等的值会映射到 <code class=\"codespan\">&#39;diamond&#39;</code>。对于 中间的其他点，会根据他们和 <code class=\"codespan\">visualMap.min</code> 和 <code class=\"codespan\">visualMap.max</code> 的数值距离，映射到 <code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code> 中某个值上。</p>\n</li>\n</ul>\n<p>visual value 的取值范围：</p>\n<ul>\n<li><p><code class=\"codespan\">透明度（opacity）</code>、<code class=\"codespan\">颜色透明度（colorAlpha）</code>、<code class=\"codespan\">颜色明暗度（colorLightness）</code>、<code class=\"codespan\">颜色饱和度（colorSaturation）</code>、<code class=\"codespan\">visual value</code></p>\n<p>  取值范围是 <code class=\"codespan\">[0, 1]</code>。</p>\n</li>\n<li><p><code class=\"codespan\">色调（colorHue）</code>：</p>\n<p>  取值范围是 <code class=\"codespan\">[0, 360]</code>。</p>\n</li>\n<li><p><code class=\"codespan\">颜色（color）</code>：</p>\n<p>  颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 &#39;#ccc&#39;。</p>\n</li>\n<li><p><code class=\"codespan\">图形类别（symbol）</code>：</p>\n</li>\n</ul>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p><strong>✦ 视觉通道 -- 查表映射 ✦</strong></p>\n<p><code class=\"codespan\">查表映射</code> 表示 series.data 中的所有值（dataValue）是可枚举的，会根据给定的映射表查表得到映射结果。</p>\n<p>例如，在 <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> 中，我们设定了 <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a> 为 <code class=\"codespan\">[&#39;Demon Hunter&#39;, &#39;Blademaster&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;]</code>。我们有 series.data: <code class=\"codespan\">[&#39;Demon Hunter&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;]</code>。然后我们可以定立查表映射规则：<code class=\"codespan\">color: {&#39;Warden&#39;: &#39;red&#39;, &#39;Demon Hunter&#39;: &#39;black&#39;}</code>，于是 <code class=\"codespan\">visualMap</code> 组件会按照表来将 <code class=\"codespan\">dataValue</code> 映射到 <code class=\"codespan\">color</code>。</p>\n<p>如何设定为查表映射？当 <code class=\"codespan\">visualMap</code> 为 <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> 且 设置了 <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a> 时，会进行查表映射。</p>\n<p>视觉通道的值（visual value）：一般使用 <code class=\"codespan\">Object</code> 或 <code class=\"codespan\">Array</code> 来表示，例如：</p>\n<pre><code class=\"lang-javascript\">visualMap: {\n    type: &#39;piecewise&#39;,\n    // categories 定义了 visualMap-piecewise 组件显示出来的项。\n    categories: [\n        &#39;Demon Hunter&#39;, &#39;Blademaster&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;\n    ],\n    inRange: {\n        // visual value 可以配成 Object：\n        color: {\n            &#39;Warden&#39;: &#39;red&#39;,\n            &#39;Demon Hunter&#39;: &#39;black&#39;,\n            &#39;&#39;: &#39;green&#39; // 空字串，表示除了&#39;Warden&#39;、&#39;Demon Hunter&#39;外，都对应到 &#39;green&#39;。\n        }\n        // visual value 也可以只配一个单值，表示所有都映射到一个值，如：\n        color: &#39;green&#39;,\n        // visual value 也可以配成数组，这个数组须和 categories 数组等长，\n        // 每个数组项和 categories 数组项一一对应：\n        color: [&#39;red&#39;, &#39;black&#39;, &#39;green&#39;, &#39;yellow&#39;, &#39;white&#39;]\n    }\n}\n</code></pre>\n<p><a href=\"https://echarts.apache.org/next/examples/editor.html?c=doc-example/scatter-visualMap-categories&amp;edit=1&amp;reset=1\" target=\"_blank\">参见示例</a></p>\n<p><strong>✦ 修改视觉编码 ✦</strong></p>\n<p>如果在图表被渲染后（即已经使用 <code class=\"codespan\">setOption</code> 设置了初始 <code class=\"codespan\">option</code> 之后），想修改 visualMap 的各种 <code class=\"codespan\">视觉编码</code>，按照惯例，再次使用 <code class=\"codespan\">setOption</code> 即可。例如：</p>\n<pre><code class=\"lang-javascript\">chart.setOption({\n    visualMap: {\n        inRange: {color: [&#39;red&#39;, &#39;blue&#39;]}\n    }\n});\n</code></pre>\n<p>但请注意：</p>\n<ul>\n<li><p>visualMap option 中的这几个属性，<code class=\"codespan\">inRange</code>, <code class=\"codespan\">outOfRange</code>, <code class=\"codespan\">target</code>, <code class=\"codespan\">controller</code>，在 setOption 时不支持 merge。否则会带来过于复杂的 merge 逻辑。也就是说，<code class=\"codespan\">setOption</code> 时，一旦修改了以上几个属性中的一项，其他项也会被清空，而非保留当前状态。所以，设置 visual 值时，请一次性全部设置，而非只设置一部分。</p>\n</li>\n<li><p><strong>不推荐使用 <code class=\"codespan\">getOption -&gt; 修改option -&gt; setOption</code> 的方式：</strong></p>\n</li>\n</ul>\n<pre><code class=\"lang-javascript\">// 不推荐这样做（尽管也能达到和上面的例子相同的结果）：\nvar option = chart.getOption(); // 获取所有option。\noption.visualMap.inRange.color = [&#39;red&#39;, &#39;blue&#39;]; // 改动color（我想要改变 color）。\n\n// 如下两处也要进行同步改动，否则可能达不到期望效果。\noption.visualMap.target.inRange.color = [&#39;red&#39;, &#39;blue&#39;];\noption.visualMap.controller.inRange.color = [&#39;red&#39;, &#39;blue&#39;];\n\nchart.setOption(option); // option设置回 visualMap\n</code></pre>\n<p><strong>注意</strong>，inRange 没有指定，则会默认会设置 color: <code class=\"codespan\">[&#39;#f6efa6&#39;, &#39;#d88273&#39;, &#39;#bf444c&#39;]</code>，如果你不想要这个color，可以\n<code class=\"codespan\">inRange: {color: null}</code> 来去除。</p>\n"
  },
  "outOfRange": {
    "desc": "<p>定义 <strong>在选中范围外</strong> 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）</p>\n<p>配置参考 <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "controller": {
    "desc": "<p>visualMap 组件中，<code class=\"codespan\">控制器</code> 的 <code class=\"codespan\">inRange</code> <code class=\"codespan\">outOfRange</code> 设置。如果没有这个 <code class=\"codespan\">controller</code> 设置，<code class=\"codespan\">控制器</code> 会使用外层的 <code class=\"codespan\">inRange</code> <code class=\"codespan\">outOfRange</code> 设置；如果有这个 <code class=\"codespan\">controller</code> 设置，则会采用这个设置。适用于一些控制器视觉效果需要特殊定制或调整的场景。</p>\n"
  },
  "controller.inRange": {
    "desc": "<p>定义 <strong>在选中范围中</strong> 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）</p>\n<p>配置参考 <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "controller.outOfRange": {
    "desc": "<p>定义 <strong>在选中范围外</strong> 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）</p>\n<p>配置参考 <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "zlevel": {
    "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "left": {
    "desc": "\n\n<p>visualMap 组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "\n\n<p>visualMap 组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "\n\n<p>visualMap 组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "\n\n<p>visualMap 组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "orient": {
    "desc": "<p>如何放置 visualMap 组件，水平（<code class=\"codespan\">&#39;horizontal&#39;</code>）或者竖直（<code class=\"codespan\">&#39;vertical&#39;</code>）。</p>\n"
  },
  "padding": {
    "desc": "\n\n<p>visualMap-continuous内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "backgroundColor": {
    "desc": "<p>背景色。</p>\n"
  },
  "borderColor": {
    "desc": "<p>边框颜色。</p>\n"
  },
  "borderWidth": {
    "desc": "<p>边框线宽，单位px。</p>\n"
  },
  "color": {
    "desc": "<p>这个配置项，是为了兼容 ECharts2 而存在，ECharts3 中已经不推荐使用。它的功能已经移到了 <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a> 和 <a href=\"#visualMap-continuous.outOfRange\">visualMap-continuous.outOfRange</a> 中。</p>\n<p>如果要使用，则须注意，<code class=\"codespan\">color</code>属性中的顺序是由数值 <code class=\"codespan\">大</code> 到 <code class=\"codespan\">小</code>，但是 <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a> 或 <a href=\"#visualMap-continuous.outOfRange\">visualMap-continuous.outOfRange</a> 中 <code class=\"codespan\">color</code> 的顺序，总是由数值 <code class=\"codespan\">小</code> 到 <code class=\"codespan\">大</code>。二者不一致。</p>\n"
  },
  "textStyle.color": {
    "desc": "\n\n<p>visualMap 文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "textStyle.fontStyle": {
    "desc": "\n\n<p>visualMap 文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "\n\n<p>visualMap 文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "\n\n<p>visualMap 文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "\n\n<p>visualMap 文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.width": {
    "desc": "<p>文本显示宽度。</p>\n"
  },
  "textStyle.height": {
    "desc": "<p>文本显示高度。</p>\n"
  },
  "textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "textStyle.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "textStyle.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "formatter": {
    "desc": "<p>标签的格式化工具。</p>\n<ul>\n<li>如果为<code class=\"codespan\">string</code>，表示模板，例如：<code class=\"codespan\">aaaa{value}</code>。其中 <code class=\"codespan\">{value}</code> 是当前的范围边界值。</li>\n<li>如果为 <code class=\"codespan\">Function</code>，表示回调函数，形如：</li>\n</ul>\n<pre><code class=\"lang-javascript\">formatter: function (value) {\n    return &#39;aaaa&#39; + value; // 范围标签显示内容。\n}\n</code></pre>\n"
  },
  "handleIcon": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>两端手柄的形状。默认为</p>\n<pre><code class=\"lang-js\">&#39;M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z&#39;\n</code></pre>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "handleSize": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>手柄的大小。可以是相对于组件尺寸的百分比大小。</p>\n"
  },
  "handleStyle": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>手柄的样式配置。</p>\n"
  },
  "handleStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "handleStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "handleStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "indicatorIcon": {
    "desc": "<p>指示器的形状，默认为圆形。指示器在鼠标移到组件上，或者在移到系列图形上联动高亮的时候出现。</p>\n<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n",
    "uiControl": {
      "type": "icon"
    }
  },
  "indicatorSize": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>指示器的大小。可以是相对于组件尺寸的百分比大小。</p>\n"
  },
  "indicatorStyle": {
    "desc": "<p>指示器样式。</p>\n"
  },
  "indicatorStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "indicatorStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "indicatorStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "2",
      "min": "0",
      "step": "0.5"
    }
  },
  "indicatorStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "indicatorStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "2",
      "min": "0",
      "step": "0.5"
    }
  },
  "indicatorStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(0,0,0,0.2)"
    }
  },
  "indicatorStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "step": "0.5"
    }
  },
  "indicatorStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "step": "0.5"
    }
  },
  "indicatorStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  }
}