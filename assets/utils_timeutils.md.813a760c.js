import{_ as s,c as a,o as n,a as e}from"./app.a8a457ab.js";const D=JSON.parse('{"title":"time utils","description":"","frontmatter":{},"headers":[{"level":2,"title":"DateTime","slug":"datetime"},{"level":2,"title":"Date","slug":"date"},{"level":2,"title":"BeforeTime","slug":"beforetime"},{"level":2,"title":"AfterTime","slug":"aftertime"},{"level":2,"title":"AfterDate","slug":"afterdate"},{"level":2,"title":"Time","slug":"time"}],"relativePath":"utils/timeutils.md"}'),l={name:"utils/timeutils.md"},p=e(`<h1 id="time-utils" tabindex="-1">time utils <a class="header-anchor" href="#time-utils" aria-hidden="true">#</a></h1><h2 id="datetime" tabindex="-1">DateTime <a class="header-anchor" href="#datetime" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// DateTime \u83B7\u53D6\u5F53\u524D\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// format \u6307\u5B9A\u65F6\u95F4\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u7684\u65F6\u95F4\u683C\u5F0F\u4E3A 2006-01-02 03:04:05</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DateTime</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">format </span><span style="color:#89DDFF;">...</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Date \u83B7\u53D6\u5F53\u524D\u65E5\u671F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// format \u6307\u5B9A\u65F6\u95F4\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u65F6\u95F4\u683C\u5F0F\u4E3A 2006-01-02</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">format </span><span style="color:#89DDFF;">...</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="beforetime" tabindex="-1">BeforeTime <a class="header-anchor" href="#beforetime" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// BeforeTime \u83B7\u53D6 day \u5929\u4E4B\u524D\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BeforeTime</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">day </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="aftertime" tabindex="-1">AfterTime <a class="header-anchor" href="#aftertime" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// AfterTime \u83B7\u53D6 day \u5929\u4E4B\u540E\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AfterTime</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">day </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="afterdate" tabindex="-1">AfterDate <a class="header-anchor" href="#afterdate" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// BeforeDate \u83B7\u53D6 day \u5929\u4E4B\u524D\u7684\u65E5\u671F</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BeforeDate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">day </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="time" tabindex="-1">Time <a class="header-anchor" href="#time" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Time \u89E3\u6790\u65F6\u95F4\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Time</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),t=[p];function o(r,i,c,d,y,m){return n(),a("div",null,t)}var A=s(l,[["render",o]]);export{D as __pageData,A as default};
