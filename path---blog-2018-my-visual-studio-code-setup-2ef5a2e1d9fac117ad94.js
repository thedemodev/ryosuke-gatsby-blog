webpackJsonp([0xcf890cef881],{561:function(s,n){s.exports={data:{blog:{html:'<p>I had to do some development on another computer recently, and after settling down in front of a desk with the default VSCode config, I quickly realized how much of my local environment and workflow needed to be configured and installed. </p>\n<h2>Backing up your VSCode setup ⬇️</h2>\n<p>Luckily, VSCode makes it a fairly easy process to backup your settings and extensions. Your configuration is a JSON file, making it a effortless copy and paste scenario. And as for the extensions, you just install a bash script to back everything up. This generates a list of Bash commands that install each individual extension:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">code --list-extensions <span class="token operator">|</span> <span class="token function">xargs</span> -L 1 <span class="token keyword">echo</span> code --install-extension\n</code></pre>\n      </div>\n<blockquote>\n<p>To install the code Bash alias on Mac, go to Command Palette and type "install command" to find the shell script. Make sure to install it on both your backup, and new computer.</p>\n</blockquote>\n<h2>My setup 🎨</h2>\n<h3>JSON Configuration 🔧</h3>\n<p>Not too much special here. Only a couple customizations of hotkeys (I used to use Sublime, so I prefer those shortcuts). I modified the Palenight Italic theme because I didn\'t like the contrast of some sections (like the sidebar color).</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"Palenight Italic"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"Fira Code"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.fontSize"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n    <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"material-icon-theme"</span><span class="token punctuation">,</span>\n    <span class="token property">"sublimeTextKeymap.promptV3Features"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.multiCursorModifier"</span><span class="token operator">:</span> <span class="token string">"ctrlCmd"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.snippetSuggestions"</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"window.zoomLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">"workbench.colorCustomizations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"[Palenight Italic]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"sideBar.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"sideBarSectionHeader.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.activeBackground"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"editor.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"editorHoverWidget.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"debugExceptionWidget.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"peekViewTitle.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"panel.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"statusBar.noFolderBackground"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"notifications.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"debugToolBar.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.inactiveBackground"</span><span class="token operator">:</span> <span class="token string">"#2d3244"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.inactiveForeground"</span><span class="token operator">:</span> <span class="token string">"#929ac9"</span><span class="token punctuation">,</span>\n            <span class="token property">"sideBar.foreground"</span><span class="token operator">:</span> <span class="token string">"#7179a1"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"never"</span><span class="token punctuation">,</span>\n    <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"*.js"</span><span class="token operator">:</span> <span class="token string">"javascriptreact"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Extensions ⚙️</h3>\n<p>Just a few of the must-haves. </p>\n<ul>\n<li><strong>Project Manager</strong> is great for keeping track of projects across your computer/drives. </li>\n<li><strong>ES7 / ReactJS</strong> snippets are a must.Start typing <code class="language-text">r</code>...to get premade React component structures (like functional or Redux containers)</li>\n<li><strong>PHP Intellisense</strong> - This is a must for PHP developers working with complex application. Hover over any method/function to see it\'s documentation, and click the tooltip to navigate directly to the function\'s source file.</li>\n<li><strong>PHP Docblocker</strong> - Makes documenting PHP code easy. Type <code class="language-text">/**</code> to generate a docblock based on your function. It\'ll automatically pick up things like the return value and toss it in your docs (complete with type checking).</li>\n<li><strong>Todo Tree</strong> - If you ever find yourself leaving <code class="language-text">// @todo</code> comments in your code, this extension will scan your code and find all them to place in a todo list.</li>\n<li><strong>Polacode</strong> - Great way to quickly take screenshots of your code, all styled with your editors theme.</li>\n<li><strong>Multi-line find and replace</strong> - Ever need to copy more than one line of code without adding regex manually? Select text, open up the command palette, and choose this plugin to copy a valid regex search. This is essential for VSCode since it doesn\'t support this by default.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">code <span class="token operator">--</span>install<span class="token operator">-</span>extension alefragnani<span class="token punctuation">.</span>project<span class="token operator">-</span>manager\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension axlan<span class="token punctuation">.</span>multiline<span class="token operator">-</span>find<span class="token operator">-</span>and<span class="token operator">-</span>replace\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension cjhowe7<span class="token punctuation">.</span>laravel<span class="token operator">-</span>blade\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension dbaeumer<span class="token punctuation">.</span>vscode<span class="token operator">-</span>eslint\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension dsznajder<span class="token punctuation">.</span>es7<span class="token operator">-</span>react<span class="token operator">-</span>js<span class="token operator">-</span>snippets\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension felixfbecker<span class="token punctuation">.</span>php<span class="token operator">-</span>intellisense\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension Gruntfuggly<span class="token punctuation">.</span>todo<span class="token operator">-</span>tree\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension HookyQR<span class="token punctuation">.</span>beautify\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension joelday<span class="token punctuation">.</span>docthis\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension juanmnl<span class="token punctuation">.</span>vscode<span class="token operator">-</span>theme<span class="token operator">-</span>hydra\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension kumar<span class="token operator">-</span>harsh<span class="token punctuation">.</span>graphql<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">-</span>vscode\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension leighlondon<span class="token punctuation">.</span>eml\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension mikestead<span class="token punctuation">.</span>dotenv\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension ms<span class="token operator">-</span>vscode<span class="token punctuation">.</span>sublime<span class="token operator">-</span>keybindings\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension neilbrayfield<span class="token punctuation">.</span>php<span class="token operator">-</span>docblocker\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension neilding<span class="token punctuation">.</span>language<span class="token operator">-</span>liquid\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension octref<span class="token punctuation">.</span>vetur\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension PKief<span class="token punctuation">.</span>material<span class="token operator">-</span>icon<span class="token operator">-</span>theme\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension pnp<span class="token punctuation">.</span>polacode\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension sdras<span class="token punctuation">.</span>night<span class="token operator">-</span>owl\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension whizkydee<span class="token punctuation">.</span>material<span class="token operator">-</span>palenight<span class="token operator">-</span>theme\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension zhuangtongfa<span class="token punctuation">.</span>Material<span class="token operator">-</span>theme\n</code></pre>\n      </div>\n<h2>What\'s your setup like? 💻</h2>\n<p>I\'m always interested in learning from other\'s workflows and maybe some lesser known extensions that are must-haves. Let me know what your VSCode setup looks like in the comments! 👍</p>\n<p>Cheers 🍻\nRyo</p>',frontmatter:{title:"My Visual Studio Code Setup 🎨",cover_image:{publicURL:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h401V0H0v134m318-15v55h-4a20199 20199 0 0 1-86-12 2435 2435 0 0 1 87 30h6l25-11 5-2V77l-4-2-28-11-1 55m-48-22l-15 14-10-6c-8-6-8-7-11-6-4 2-4 3 5 11l8 9-9 9-8 9 3 1c4 1 4 1 7-1l9-7 6-4 15 14c15 16 15 16 18 14l8-4 6-2V90l-8-4-10-3-14 14m-81-10c-6 4-3 13 5 13 9 0 10-13 0-15-2 0-3 0-5 2m-31 8l-5 6v16l1 16h33v-14h-6c-11 0-11-3 0-3h6v-7c0-5 0-7-2-9l-3-6v-4h-18l-6 5m121 13l-10 7-5 4 10 7 10 7v-29l-5 4' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-4e8db.jpg",srcSet:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-7cc04.jpg 310w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-69042.jpg 620w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-4e8db.jpg 1240w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-50ab1.jpg 1860w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-e738f.jpg 1920w"}}},date:"27 July, 2018",tags:["vscode","tips","resource"],section:"blog"},fields:{slug:"/blog/2018/my-visual-studio-code-setup/"}},relatedPosts:null},pathContext:{tag:"vscode",slug:"/blog/2018/my-visual-studio-code-setup/"}}}});
//# sourceMappingURL=path---blog-2018-my-visual-studio-code-setup-2ef5a2e1d9fac117ad94.js.map