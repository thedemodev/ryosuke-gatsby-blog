webpackJsonp([0x976dd51d2dd9],{566:function(a,e){a.exports={data:{blog:{html:'<p>Recently, I\'ve recently been trying my best to upload as much code to open source repositories like <a href="http://github.com/whoisryosuke"><strong>Github</strong></a> and <a href="http://codepen.io/whoisryosuke"><strong>Codepen</strong></a>. It makes bootstrapping new projects much simpler when I can <code class="language-text">git clone</code> a boilerplate from my Github, or <em>copypasta</em> a CSS/JS snippet from CodePen. But what happens when I need to include a library or module into several projects? Cloning and copy paste just don\'t cut it at that point.</p>\n<p>Cut to <a href="http://npmjs.com"><strong>NPM</strong></a> and <a href="http://getcomposer.com"><strong>Composer</strong></a> ( or really <a href="http://packagist.com">Packagist</a>. NPM is a package manager for Javascript using Node, and Composer does the same for PHP. </p>\n<p>Today we\'ll be looking into submitting a PHP "package" to Composer through the Packagist, so we can use <code class="language-text">composer require</code> to install our package into any project!</p>\n<h2>The simple steps</h2>\n<p>It\'s as easy as 4 steps (<em>minus the part where you code a reusable package in PHP</em>) -- I was surprised too. Make sure before starting you\'ve created a git repository in your project and committed your code. It\'s also required to have an account on <a href="http://github.com">Github</a> and <a href="http://packagist">Packagist</a>.</p>\n<ol>\n<li>Create a <code class="language-text">composer.json</code> in your project:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-brand-name/your-project"</span><span class="token punctuation">,</span>\n    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"library"</span><span class="token punctuation">,</span>\n    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Your package description goes here"</span><span class="token punctuation">,</span>\n    <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"relevant"</span><span class="token punctuation">,</span><span class="token string">"tags"</span><span class="token punctuation">,</span><span class="token string">"go"</span><span class="token punctuation">,</span><span class="token string">"here"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"homepage"</span><span class="token operator">:</span> <span class="token string">"https://yourcompany.com"</span><span class="token punctuation">,</span>\n    <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>\n    <span class="token property">"authors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Jordi Boggiano"</span><span class="token punctuation">,</span>\n            <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"j.boggiano@seld.be"</span><span class="token punctuation">,</span>\n            <span class="token property">"homepage"</span><span class="token operator">:</span> <span class="token string">"http://seld.be"</span><span class="token punctuation">,</span>\n            <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"Developer"</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>\n<p><a href="https://github.com/new">Create a new repository on your Github</a> and push your local git (init if you haven\'t) to the remote Github repo.</p>\n</li>\n<li>\n<p><a href="https://packagist.org/packages/submit">Submit your package to the Packagist</a></p>\n</li>\n<li>\n<p>Done! Your package should be online and Packagist should provide a sample Composer require with your project name (e.g. <code class="language-text">composer require username/package-name</code>)</p>\n</li>\n</ol>\n<blockquote>\n<p>You should be able to view your package live at: <code class="language-text">https://packagist.org/packages/your-username/package-name</code></p>\n</blockquote>\n<h2>So easy, there\'s no excuse</h2>\n<p>One of the biggest principles of programming I try to apply is <strong>DRY</strong>, <em>don\'t repeat yourself</em>. When your code is probably already hosted on Github, it\'s only a two step process to get your code in a place where it\'s version controlled. </p>\n<p>Rather than relying on <code class="language-text">git clone</code> or submodules, it\'s much more efficient for your codebase to use a composer dependency. </p>\n<h2>Take my code for a test run</h2>\n<p>The package I released on the Packagist is for developers working with the Metrc API to send and receive cannabis regulatory data. It\'s basically a wrapper for their API that uses a Guzzle client to interface with it (using your authoriation credentials).</p>\n<p>If you\'re a Metrc developer, or just interested in using the code, you can add it to your projects using:</p>\n<p><code class="language-text">composer require kushy/metrc-php-sdk</code></p>\n<p>Hope that helps,\nRyo</p>',frontmatter:{title:"How to create a PHP package for Composer",cover_image:{publicURL:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787.png",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M220 1a262 262 0 0 0-18 8l-3 23a1762 1762 0 0 1-48 23c0 2 0 2-1 0 0-2 0-2-2 0s-2 2-6 0c-6-3-8-3-11 0s-3 4 1 7l2 3h-4c-5-1-5 3-1 6l7 5 3 4h-4c-5 1-8 3-8 5l6 3 9 4 6 4c4 2 7 4 8 8 0 2 0 2-3 2h-2c1 1 1 1-1 1-2 1-3 1-2 3h-2l-2 3-3 1-5 1h-1v-1l-1-1h-2c-1-2-9-5-13-5-7 0-13 3-20 10l-6 5v-4c0-4 0-4-3-5l-4-3c0-3 3-8 6-10l6-8 7-11c4-4 4-4 3-6-2-2-2-2 5-7l8-5c0-2-3-1-14 6-12 7-12 8-13 4-1-2 0-4 3-6l3-4c0-2 0-3-10 1-4 2-8 3-10 2-2 0-3 0-6 5-4 6-4 6-8-2l-3-3c-3 0-2 5 1 16 2 6 3 11 2 12l1 2c3 2 4 6 3 9 0 2-1 2-4 2-4-1-4-1-4 8-1 7-1 7 1 7 3 0 3-2 3 23v6l-1-6c0 2-1 3-6 5l-6 3-5-2-13-8-7-4-7 3-9 4c-2 1-3 1-7-1l-5-3v124h200l201-1-1-134V0h-89l-91 1m-85 55l2 2c4 1 14 10 13 11l-9-6-8-5 7 9 7 9-9-5-9-4 7 6c6 6 7 7 10 6h4l-3 2-4 2c-4-1-12 0-12 1s1 2 3 2l9 4 6 3c3 0 8 5 9 9l1 3 11-4-2-5c-2-4-3-7-2-11 0-6-2-14-7-23-5-10-7-10-3 0l2 7c-1 0-6-1-5-2 1-2-2-4-9-8s-9-5-9-3M63 71l6 20c1 1 16-7 16-8s-4-3-5-2c-2 0-2-1-1-3 1-1 2-1 5 1 3 3 5 3 5 2L79 70c-2 0-7 10-7 13 1 4-1 2-4-5-4-8-5-9-5-7m204 9c-7 7-10 8-15 5-3-1-3-1-10 2-10 5-11 7-12 19l-1 15c-2 5-2 11-1 14 1 2 2 2 5 1l5 1 4 2c3 0 3 0 3-5l-2-8c-3-5-2-10 1-14l2-5 1-9c2-6 1-7-3-7-3 0-7 2-8 5-2 4-3 4-2-1 2-4 7-7 13-7 4 0 6 2 4 8l-2 9c0 5 0 6-3 9s-4 7-1 10l2 2 3-3c1-1 3-3 3-5l3-3c1-1 1-2-2-4-3-4-4-8-2-11 5-9 19-6 19 3 0 3 0 4 5 4h9c2 1 3 1 3-1 0-8 9-14 15-9 2 1 2 1 2-2 0-5 2-6 10-3 2 0 8 9 6 10l-1-1c-1-4-10-9-11-7l-2 5c0 4 0 5 3 10 6 7 6 14 1 19-5 4-5 5 0 5 2 0 3 0 4 2 1 5 12 7 13 2v-17l-3-13c0-8-1-9-4-14-4-6-7-7-14-6-4 1-5 1-7-1l-7-4-7-4c-2-3-3-3-8-3-6 0-6 0-11 5m-165-3l-8 5c-12 6-23 13-23 14l1 4c2 2 2 4 1 6-1 3-1 4 4 5 6 1 6 1 9-6 1-3 2-5 4-6l6-7 6-10 3-5h-3m63 29l-13 4 2 5 2 4 12-4c11-4 12-5 12-7s0-2-1-1h-3c-1-2 2-4 3-2 2 1 2 1 2-1 0-3-1-3-16 2m103 6c-2 2-5 3-7 3-3 0-6 4-6 7 0 2 1 3 3 1 1-2 9-5 13-5h5l-7 2-7 2-3 4c-3 3-3 4-3 8 2 11 5 17 8 14 2-3 3-2 2 0-4 6 1 13 10 17 8 2 11 1 19-7 8-9 12-11 19-14 6-1 7-4 3-4l-3-2c-2-5-10-3-18 5-4 4-6 3-4 0 1-4-1-4-6-1-4 2-5 1-1-2l2-2c-3-3-6-4-8-4-1 0-2 0-1-1 1-2 4-1 10 2 8 4 9 4 9-3v-4l2-2c1-4 0-7-4-8l-5-3c-4-7-15-8-22-3m37-2c0 3-7 5-10 5h-2l2 1c2 0 8 5 8 6 0 3 3 6 5 5 4-1 5-8 2-14-3-4-4-5-5-3m-241 5c0 5 0 5 11 7l12 2c2 0 3 0 4-3v-5l-25-6-2 5m190 32c0 9 1 12 8 19l8 10c3 5 9 6 11 1v-3l3-2 7-2c4-1 1 2-3 4-5 2-6 6-1 6 4 0 9-5 14-14 3-4 4-6 6-14 0-3-1-3-5 1a116 116 0 0 1-11 11c-3 3-3 3-10 3l-9-1c-3-2-10-9-10-11l-2-5-4-7c-1-5-2-3-2 4m-123-3c-2 3-11 7-8 4 1-2 1-2-2-1l-12 2c-10 1-15 3-16 7 0 2 0 2 1 1 0-3 1-2 3 1s2 4-1 1h-2l2 2a3534 3534 0 0 1 19 18c4 6 7 7 13 6 8-2 12-4 15-11 2-4 2-4 0-3-2 0-2 0 0-1l5-5 5-4c1 0 4-4 4-6l-2 1c-1 4-2 4-2 1 0-2-1-3-4-4l-11-6-5-5-2 2m-9 7c-1 2-3 2-9 2h-8c-1 2-1 2 4 2l8 1c2 1 2 1 0 1h-6c-6 0-7 1-3 2l5 1 4-1 2-1h1v7l2 3 3 2h-3l-7 2h14l4-2-2-1-4 1-3 1 3-3c4-5 4-7-1-3-2 3-3 2-3-5v-6c2-3 1-5-1-3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-ab24c.png",srcSet:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-310d9.png 310w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-63c25.png 620w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-ab24c.png 1240w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-80007.png 1860w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-2d6df.png 1920w"}}},date:"20 July, 2018",tags:["composer","php","open source","github","tips","tutorial"],section:"blog"},fields:{slug:"/blog/2018/how-to-create-a-php-package-for-composer/"}},relatedPosts:null},pathContext:{tag:"composer",slug:"/blog/2018/how-to-create-a-php-package-for-composer/"}}}});
//# sourceMappingURL=path---blog-2018-how-to-create-a-php-package-for-composer-db60550bb19449201cba.js.map