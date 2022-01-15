import{r as p,o as r,c as l,a as s,b as a,F as c,d as n,e as t}from"./app.91fd742a.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b={id:"\u56FD\u9645\u5316",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#\u56FD\u9645\u5316","aria-hidden":"true"},"#",-1),d=n(" \u56FD\u9645\u5316 "),m=n("\u6846\u67B6\u4F7F\u7528 "),h={href:"http://kazupon.github.io/vue-i18n/zh/",target:"_blank",rel:"noopener noreferrer"},g=n("vue-i18n"),v=n(" \u5B9E\u73B0\u56FD\u9645\u5316\u652F\u6301\u3002"),_=t('<p>\u4E13\u4E1A\u7248\u9ED8\u8BA4\u63D0\u4F9B\u4E86<strong>\u7B80\u4F53\u4E2D\u6587</strong>\u3001<strong>\u7E41\u4F53\u4E2D\u6587</strong>\u548C<strong>\u82F1\u8BED</strong>\u4E09\u79CD\u8BED\u8A00\u5305\uFF0C\u5728\u914D\u7F6E\u91CC\u8BBE\u7F6E <code>enableI18n: true</code> \u53EF\u5F00\u542F\u8BED\u8A00\u5207\u6362\u6309\u94AE\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u7528\u4E0D\u5230\u56FD\u9645\u5316\uFF0C\u65E0\u9700\u5220\u9664\u4EFB\u4F55\u6587\u4EF6\uFF0C\u6309\u7167\u5E38\u89C4\u5F00\u53D1\u8FDB\u884C\u5373\u53EF\uFF0C\u6846\u67B6\u5DF2\u7ECF\u505A\u597D\u517C\u5BB9\u652F\u6301\u3002</p></div><h2 id="\u8BED\u8A00\u5305" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5305" aria-hidden="true">#</a> \u8BED\u8A00\u5305</h2>',3),f=n("\u8BED\u8A00\u5305\u5B58\u653E\u5728 "),w=s("code",null,"/src/lang/packages/",-1),y=n(" \u76EE\u5F55\u4E0B\uFF0C\u56E0\u4E3A Element \u672C\u8EAB\u4E5F\u6709\u81EA\u5DF1\u7684\u8BED\u8A00\u5305\uFF0C\u6240\u4EE5\u5728\u505A\u56FD\u9645\u5316\u652F\u6301\u7684\u65F6\u5019\uFF0C\u6846\u67B6\u7684\u8BED\u8A00\u5305\u6587\u4EF6\u547D\u540D\u9700\u8981\u548C Element \u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF"),x={href:"https://github.com/ElemeFE/element/tree/dev/src/locale/lang",target:"_blank",rel:"noopener noreferrer"},j=n("\u70B9\u51FB\u8FD9\u91CC"),N=n("\u67E5\u770B Element \u7684\u8BED\u8A00\u5305\u6587\u4EF6\u3002"),E=t(`<p>\u65B0\u589E\u8BED\u8A00\u5305\u540E\u9700\u8981\u5230 <code>/src/lang/index.js</code> \u6587\u4EF6\u91CC\u5F15\u7528\u5E76\u6309\u7167\u539F\u6709\u914D\u7F6E\u8FDB\u884C\u4FEE\u6539\uFF0C\u4EE5\u65B0\u589E\u4E00\u4E2A\u65E5\u6587\u8BED\u8A00\u5305\u4E3A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">import</span> elementLocaleZhCN <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/zh-CN&#39;</span>
<span class="token keyword">import</span> elementLocaleZhTW <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/zh-TW&#39;</span>
<span class="token keyword">import</span> elementLocaleEn <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/en&#39;</span>
<span class="token keyword">import</span> elementLocaleJa <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/ja&#39;</span>

<span class="token keyword">import</span> localeZhCN <span class="token keyword">from</span> <span class="token string">&#39;./packages/zh-CN&#39;</span>
<span class="token keyword">import</span> localeZhTW <span class="token keyword">from</span> <span class="token string">&#39;./packages/zh-TW&#39;</span>
<span class="token keyword">import</span> localeEn <span class="token keyword">from</span> <span class="token string">&#39;./packages/en&#39;</span>
<span class="token keyword">import</span> localeJa <span class="token keyword">from</span> <span class="token string">&#39;./packages/ja&#39;</span>

<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;zh-CN&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>elementLocaleZhCN<span class="token punctuation">,</span>
        <span class="token operator">...</span>localeZhCN
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;zh-TW&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>elementLocaleZhTW<span class="token punctuation">,</span>
        <span class="token operator">...</span>localeZhTW
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;en&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>elementLocaleEn<span class="token punctuation">,</span>
        <span class="token operator">...</span>localeEn
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ja&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>elementLocaleJa<span class="token punctuation">,</span>
        <span class="token operator">...</span>localeJa
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u9ED8\u8BA4\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8BED\u8A00" aria-hidden="true">#</a> \u9ED8\u8BA4\u8BED\u8A00</h2><p>\u5728\u914D\u7F6E\u91CC <code>defaultLang</code> \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u7559\u7A7A\u5219\u8DDF\u968F\u7CFB\u7EDF\u8BED\u8A00\u3002\u5982\u679C\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u8BED\u8A00\u6216\u8005\u7CFB\u7EDF\u8BED\u8A00\u7F3A\u5C11\u5BF9\u5E94\u7684\u8BED\u8A00\u5305\uFF0C\u5219\u4EE5\u7B80\u4F53\u4E2D\u6587\u663E\u793A\u3002</p><h2 id="\u8DEF\u7531\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u90E8\u5206" aria-hidden="true">#</a> \u8DEF\u7531\u90E8\u5206</h2><p>\u4EE5\u7B80\u4F53\u4E2D\u6587\u4E3A\u4F8B\uFF0C\u6253\u5F00 <code>/src/lang/packages/zh-CN.js</code> \u6587\u4EF6\u53EF\u4EE5\u770B\u5230\u8DEF\u7531\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u5728 <code>route</code> \u5BF9\u8C61\u91CC\u53EF\u4EE5\u6269\u5C55\u9700\u8981\u5F00\u542F\u56FD\u9645\u5316\u652F\u6301\u7684\u8DEF\u7531\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    route<span class="token operator">:</span> <span class="token punctuation">{</span>
        login<span class="token operator">:</span> <span class="token string">&#39;\u767B\u5F55&#39;</span><span class="token punctuation">,</span>
        dashboard<span class="token operator">:</span> <span class="token string">&#39;\u63A7\u5236\u53F0&#39;</span><span class="token punctuation">,</span>
        personal<span class="token operator">:</span> <span class="token punctuation">{</span>
            setting<span class="token operator">:</span> <span class="token string">&#39;\u4E2A\u4EBA\u8BBE\u7F6E&#39;</span><span class="token punctuation">,</span>
            editpassword<span class="token operator">:</span> <span class="token string">&#39;\u4FEE\u6539\u5BC6\u7801&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        i18n<span class="token operator">:</span> <span class="token string">&#39;\u56FD\u9645\u5316&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5149\u914D\u7F6E\u597D\u7B80\u4F53\u4E2D\u6587\u7684\u8FD8\u4E0D\u884C\uFF0C\u5176\u5B83\u8BED\u8A00\u5305\u6587\u4EF6\u91CC\u4E5F\u8981\u540C\u6B65\u6DFB\u52A0\u3002</p><p>\u5F53\u90FD\u914D\u7F6E\u597D\u540E\uFF0C\u53EF\u5728\u8DEF\u7531\u914D\u7F6E\u7684 <code>meta</code> \u5BF9\u8C61\u91CC\u8BBE\u7F6E <code>i18n</code> \u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u56FD\u9645\u5316&#39;</span><span class="token punctuation">,</span>
    i18n<span class="token operator">:</span> <span class="token string">&#39;route.i18n&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;ri-earth-line&#39;</span><span class="token punctuation">,</span>
    badge<span class="token operator">:</span> <span class="token string">&#39;NEW&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F3A\u70C8\u5EFA\u8BAE\u5F00\u542F\u56FD\u9645\u5316\u7684\u65F6\u5019\uFF0C<code>title</code> \u4E5F\u8FD8\u662F\u8BBE\u7F6E\uFF0C\u6846\u67B6\u7684\u5904\u7406\u903B\u8F91\u662F\uFF1A</p><p>\u5148\u8C03\u7528\u5F53\u524D\u8BBE\u7F6E\u7684\u8BED\u8A00\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u8C03\u7528\u9ED8\u8BA4\u7B80\u4F53\u4E2D\u6587\u7684\u8BED\u8A00\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\uFF0C\u5219\u4EE5\u663E\u793A <code>title</code> \u8BBE\u7F6E\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5 <code>title</code> \u7B97\u662F\u4E2A\u7F3A\u7701\u9879\u3002</p><h2 id="\u5355\u9875\u7EC4\u4EF6\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u5355\u9875\u7EC4\u4EF6\u90E8\u5206" aria-hidden="true">#</a> \u5355\u9875\u7EC4\u4EF6\u90E8\u5206</h2><p>\u5982\u679C\u6BCF\u4E2A\u8DEF\u7531\u5BF9\u5E94\u7684\u9875\u9762\u7EC4\u4EF6\u90FD\u8981\u505A\u56FD\u9645\u5316\u652F\u6301\uFF0C\u90A3\u8BED\u8A00\u5305\u6587\u4EF6\u5C31\u4F1A\u53D8\u5F97\u65E0\u6BD4\u5E9E\u5927\u4E14\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u63A8\u8350\u5728\u6BCF\u4E2A\u9875\u9762\u7EC4\u4EF6\u91CC\u4F7F\u7528 <code>&lt;i18n&gt;</code> \u81EA\u5B9A\u4E49\u5757\u8FDB\u884C\u8BED\u8A00\u7EF4\u62A4\uFF0C\u53EF\u6253\u5F00 <code>/src/views/i18n_example/index.vue</code> \u67E5\u770B\u793A\u4F8B\u3002</p><h2 id="\u6846\u67B6\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u90E8\u5206" aria-hidden="true">#</a> \u6846\u67B6\u90E8\u5206</h2><p>\u6846\u67B6\u81EA\u5E26\u7684\u90E8\u5206\u529F\u80FD\u5DF2\u7ECF\u652F\u6301\u56FD\u9645\u5316\uFF0C\u4EE5\u7B80\u4F53\u4E2D\u6587\u4E3A\u4F8B\uFF0C\u6253\u5F00 <code>/src/lang/packages/zh-CN.js</code> \u6587\u4EF6\u53EF\u770B\u5230 <code>app</code> \u5BF9\u8C61\u91CC\u7684\u5C31\u662F\u6846\u67B6\u90E8\u5206\u7684\u8BED\u8A00\u4FE1\u606F\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u6846\u67B6\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\uFF0C\u8BF7\u5728\u8FD9\u91CC\u6269\u5C55\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    app<span class="token operator">:</span> <span class="token punctuation">{</span>
        profile<span class="token operator">:</span> <span class="token string">&#39;\u4E2A\u4EBA\u8BBE\u7F6E&#39;</span><span class="token punctuation">,</span>
        login<span class="token operator">:</span> <span class="token string">&#39;\u767B\u5F55&#39;</span><span class="token punctuation">,</span>
        logout<span class="token operator">:</span> <span class="token string">&#39;\u9000\u51FA\u767B\u5F55&#39;</span><span class="token punctuation">,</span>
        account<span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6846\u67B6\u4E8C\u6B21\u5F00\u53D1\u8BF7\u8BE6\u7EC6\u9605\u8BFB vue-i18n \u6587\u6863\u3002</p>`,18);function L(z,C){const o=p("Badge"),e=p("ExternalLinkIcon");return r(),l(c,null,[s("h1",b,[k,d,a(o,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),s("p",null,[m,s("a",h,[g,a(e)]),v]),_,s("p",null,[f,w,y,s("a",x,[j,a(e)]),N]),E],64)}var W=i(u,[["render",L]]);export{W as default};