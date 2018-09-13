webpackJsonp([74613423173827],{593:function(n,s){n.exports={data:{blog:{html:'<p>In order to facilitate accessibility to the Kushy API, I wanted to create documentation that would entice and educate developers on how to use the new API. </p>\n<p>I first researched several options, <a href="https://github.com/kushyapp/kushy-api-docs-slate">from <strong>Slate</strong></a> to <strong>Gitbook</strong> to <strong>Docusaurus</strong> to <strong>React-Styleguidist</strong>, and created prototypes on <strong>Netlify</strong> to test. </p>\n<p>After shopping around, I wasn\'t satisfied with the flexibility of the solutions I\'d discovered, so I set off to create my own in <strong>GatsbyJS</strong> since I had experience with it already. It was an excellent static site generator that could easily be modified to work with the Markdown format of documentation.</p>\n<p>I forked this website as the basis, implemented the Kushy branding, and created a framework for the documentation (to automatically generate menus and special styles). This project was deployed on Github Pages, and I created a subdomain (<code class="language-text">docs.api.kushy.net</code>) on Amazon\'s Route53 to mask the Github URL.</p>\n<h1>Documentation</h1>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-4a68c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADnklEQVQ4y1WSa09cRRiA9y+YtrTlVvZ2OOcsyzln9+wusiysQNLE+LltNIHY2gIaE+MnE2NMvxg1KSb9ZL2bGqPSAinUGttijRWlgjGBQpFNKSm0hL2xN5ZG2Mc5C5I4yZN3ZjLz5H3nHduqL0o82Eki0Emy6SiLgQ7mzXYWdomZHbu0M2u0MeVtZlwN8aeniSkRJ+UgU3KAv5QA07KJ7bEe4aHsZ8Ub4mGdh7/r1DILds8eMcG9Iwpzksac4hMXDeZVHzHVz7yY3xPcrdf43W1ge+SPkrjwMemhIZIfXmDl/HmW+vsFH5TjA4tz58r7nzz7HG9IMm/rPt7SDIFe5k3d4KxX47qzUQibj5JPpCiyM9LbJVY3N3lcLPJoY4OVQoHlXJ71EnS/9jpPOZzUeHUq6lUqJJWD9R72C9xyA9cs4XKok8z9RYpPNmFri9WVFSYnJpidnmZ+dpa5mRkWYwvk1tfp6+2lydRoDgcJRzSCzSqBJgU9JBE2FH5wadju+tsYu3OLVDFfzjAWi/HZ558yMPAtI6NXGB4e4sbN62QyGc70vYw/oNPSqtMWNYg8Y9Aa1dBMiZDXIzL0YpsyIiQXH/CPkJVKJdLpNIlEgng8IWKSDVF2obBBNpvlVE8vit9LNKqLzBoJhDQafQ7kBhd+uX5HOKm3kF5aYssSivezLqZSqbI4KcRra2skk8ny/unePlySC93QUBsUFI+CVC/hlN2YqsL3jgZsd7Rmvh4bZDW3DrvCeDxOPl+gKBpjyS2youSeV17Fo/kIhiOCVkICzR9E9Zk0GSaj4nvZJoTw/sIcm6VtSlvbZaGV3X+iPWE2x6kzPciqRCDoQ210oXhdyIobt+rC9Mg7wh89AZZnZ3iyvcW26LKViVViuew94U7JLwmhw1lLe0eEcIeK2WrHbHGgt9gJeCUu1crYRmQfV7+5SCKdKnc5m83svWH6fxkKoWhKdU0l4VY/Zrge1evA63Mii6hLEl9Wu3aEM2M3KYjPbI1MLkfSKln8O4ukhVhn83lOCmHVkUqiHdb7mUJkR2l0ImkOTM3NF1VubMOi7l+PvcB412l+ef4kt45389OxLn4+3sUfJ17kN7G+LebjJ7r5yHiaszUO+lWd990q7zncvCt4xy5inZuLlSLDy9US3+2rZWBfDZf213L5wBEGBVa8dtDBjUNOrlbYGT1QxxVxYVCcHzjsZKjSzUiVxHClxOBhNwOHXHwl9v8Ffmr+StTopfUAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="kushy api docs" title="" src="/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-e2462.png" srcset="/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-f6591.png 270w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-cce5f.png 540w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-e2462.png 1080w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-4a68c.png 1600w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Frontpage</h2>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-5ebed.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75.22783761391881%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADI0lEQVQ4y2VTu24kVRDtmICEgA+BBIMX7GWFIAAJ/oCACMINSAmICPgCEFp5SRBokYXRelfehR0n4J0R48d0T/e8PO7H9Lt7pj3TjzmcurY32SuV6t7uqlN1z6mr6Xc+wOTLr2B++BH0tzZgbN6CeetdGO9sorfx9kum87+xfRvG1vaVv/3+lRd7bwvaIoqQeB7q+RxYLuGMRjhtt3FhDZAHAXLfVz6jvzGJjx3nZXNdaNligZRg9XoNWVPbxvNOB2e6AcM00TMM6PR6v4++ZfHch0vQNM8RpyniLEMie3oxDWWNdVWjaRqAoGEQwmJ3g8EAw+EQZt+EaVrwWN0nkMOCMW+VESxNEiS0KAzVPuU37W/rP5zaQ4IBVV1jtVqpTp88OUCr9UztVTEuXe/hz709ta8ZK8v3Z7i/s6OaWdO0fyY6hqGDdd2gLEsFuFyueEVejyZ7SRY/Pr9Q37KcFFUVVoy3XR/HpzqiJFP5WlksUZeVqiYViqJAPl/gwkuU5Uy+JM95lsMNMjihcF4wuCFgBTecw08KeFGOikW0SwKUqxI3yyZHJycnMAcWrOkE/ckYZxRjRBUXlwWSKEQQ+IpPz3PJOZVPE8wpjPCp/XS0D+ERVUMOK2TXatmnZxg9fITpX8/gtA5hHzxFNBzB4li1n7fR7XbRbnfQPT7G+fkUDkULKY52dG5gFLpKFCE/EQV56HzzLXZffR2P39zA4zc2sPvKazj57nsk5NO9sOG6HjsNlbIRc8TiOIbWn03hpREaBqoO2faiqdG9t4Nft+7g948/xYNPPsMvm9vo7vyMOWNiDnrCZCkuI5Rcj4+6chQGKEi6zLWIIpUc8iVXEB9KEgPjmyRylXES8uJS+XQxV52pGOnwsPUIunH8QhSXQL2eDkNeiK7D5TOTIoEfcDQSzGTo9/dxcP8HDB7uw2NsNr8GFcDfHvyBf486LwCFl8lkqogW8NlsRjU99UJCJg5393D4+Rd4+vVdtOjPfrzHsWF34dXVtdLto8l8vkCqzMGUbmQkxAJyJc9K1FNdkh4RIeM5sF2k7Drg9/F4rLoTwP8BQ+00WrJpBjcAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="kushy api docs frontpage" title="" src="/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-e2462.png" srcset="/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-f6591.png 270w,\n/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-cce5f.png 540w,\n/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-e2462.png 1080w,\n/static/kushy-api-docs-frontpage-f679a0e37e98dfdf48b8d4a27c764260-5ebed.png 1207w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Single Page Layout</h2>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-d6dd7.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1080px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 64.09348441926346%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACxUlEQVQ4y11SS0wTURTtloW4MREC5aNoRCMQ1MRPNEYXIkRWUsKnEkzckZiwUaF8BCoMEINu2JuwNWBE/rIUxBCDiTbRTqd0Cm3pb6adaRsox/teZVAnObn3vTv33HPvfabt3ufwNDTCXV8PV50FksXC/YOzeL/uX1Dc1dQMV2OTYaVmK6QmOlvqYYpFImBfIpFAOBxGMBSCPxDgiCoK4vE4YrHYf1AzVlURJ6tEozw3QlwmTdcNQnax7fPhlyjiJyFCPyaTSej0j07xxB/w8wHozMgNwriuZQgpyC59ROh2b8Kz6YEkueF0ihBFFwfzXS4JXq8Xsuzl1uOREaBuGBnLN20GfUB6n1djl1tb20YiI2TkkpTxJe67OZnfH+BEfr8fwWDokHBvd/eflmVZpkQPVDYbReV3mqaRr1Bi0EAoxBAyYBCmUqm/lsKCYXzd+I6VlVXCJzgcDqyvr5NSN40lQYU0qFoKSjyFWDxBxXRanHY4Q2fAy1tmy2EqRNEJa4sF1ffuora2Bg9bW1BVdROtjxrQ96ITPQNPYOvuwLOOp7DZOtDe/hhTU5NcEFNuimoxrpC1xea4uvoZZZfNuF5dikvXzqLiagEqr5SgtLwAxadzUFCUC3MBQw6KivORfTQLPb1d2N8HdnZ26B0mNKT30pxQo42vrX1BYckxnLtgRln5CVRcLERpZR5OnT+Ok2eIqDAX+eYcjqLiPBzJzkJ3jw04IFQiIa5QN1oWIQwLEAQBdrsdD6xWtLW1YVgYxuDgEMWGMDIiGHbA3ofFpQWez5ZjEl1OYymMUJY9NJO3mP7wjjCJ8fExTEy8wfLyRywtzWJudg4zMzPkL2JhYR7zhI1vG1DVzOM26UoEe+k0J2MVHI4fpKQPQ8IAoR+vX41ibOwlKRok1f0YHR2BrasT1TV3YLU24tbtG5iefk+CknwpvwG6rEYkqBEVlgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="kushy api docs page" title="" src="/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-e2462.png" srcset="/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-f6591.png 270w,\n/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-cce5f.png 540w,\n/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-e2462.png 1080w,\n/static/kushy-api-docs-page-90fdfe37b92ea3535853394cbff6c4ba-d6dd7.png 1412w" sizes="(max-width: 1080px) 100vw, 1080px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://github.com/kushyapp/kushy-docs-gatsby" class="btn">View project on Github</a></p>',frontmatter:{title:"Kushy API Documentation",cover_image:{publicURL:"/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d.png",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' version='1'%3E%3Cpath d='M0 150v150h401V0H0v150m21 7v108h4l6-1h4l95 1h95V49H21v108m74-52v4h102v-7l-51-1H95v4' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-ab24c.png",srcSet:"/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-310d9.png 310w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-63c25.png 620w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-ab24c.png 1240w,\n/static/kushy-api-docs-042e9289b107ac0fb9014f0ff6e04f6d-634e9.png 1600w"}}},date:"20 June, 2018",tags:["documentation","api","gatsbyjs","javascript","react"],section:"project"},fields:{slug:"/projects/kushy-api-docs/"}},relatedPosts:{edges:[{node:{html:'<p>As I\'m starting to prepare for delivering talks and presentations, I\'ve decided to upgrade my slideshow game to use React components 📈💁‍♀️</p>\n<p>As a React developer, it\'s only natural to want to include real example of my work inside my presentations, and <a href="https://github.com/mdx-js/mdx">MDX</a> makes that possible using a mix of Markdown and JSX.</p>\n<p>But rather than building my own slideshow framework in React, I decided to utilize <a href="https://github.com/jxnblk/mdx-deck"><strong>mdx-deck</strong></a>, a framework and CLI for creating MDX-powered slideshows. It makes creating slide decks as simple as writing Markdown, and provides indispensable features:</p>\n<ul>\n<li>📝 Write presentations in markdown</li>\n<li>⚛️ Import and use React components</li>\n<li>💅 Customizable themes and components</li>\n<li>0️⃣ Zero-config CLI</li>\n<li>💁 Presenter mode</li>\n<li>📓 Speaker notes</li>\n<li><a href="https://dazzling-kepler-4cc40d.netlify.com/">See the demo site here</a></li>\n</ul>\n<img src="/mdx-deck boilerplate 3-9bdbc1b85f47dc9534799424244ca8df.gif" alt="Example of the slide deck in action">\n<p>To make my presentation as accessible as possible, I opted to use <a href="http://netlify.com"><strong>Netlify</strong></a> to host it. However, the <a href="https://github.com/jxnblk/mdx-deck/blob/master/docs/exporting.md">mdx-deck export docs</a> are missing some key details. To deploy on Netlify, you point it to a distribution folder that all static assets get compiled to. I couldn\'t find that export folder in the docs, and had to <a href="https://github.com/jxnblk/mdx-deck/blob/master/cli.js">hunt it down in the CLI\'s default Webpack configuration.</a></p>\n<p>After a bit of research, I present - Deploying mdx-deck in 4 steps (or less!):</p>\n<h2>📄 Setting up your project</h2>\n<p>I just used the example MDX deck provided by in the mdx-deck repo. I copied it into a new folder, created a new git repo, and pushed it to Github.</p>\n<p>You can clone my project to get started.</p>\n<ol>\n<li>Clone the project to your Github</li>\n<li>Add the repo to Netlify</li>\n</ol>\n<p>or</p>\n<ol>\n<li>Click deploy to Netlify on the example repo</li>\n</ol>\n<h2>⚙️ Netlify settings</h2>\n<p>In order to make sure our deck deploys properly using continuous integration, we have to configure Netlify to build and display our app.  </p>\n<p>Go to your Deploy Settings (under the Deploys tab in your Netlify project/repo) and add the following settings:</p>\n<ol>\n<li>Set the build script to <code class="language-text">npm run build</code></li>\n<li>Set the deploy folder to <code class="language-text">dist</code></li>\n</ol>\n<p>We give Netlify a build script to run each time we make a commit to the repo. And the deploy folder is the place where mdx-deck exports the static HTML/JS version, and by pointing Netlify there it displays our deck after building.</p>\n<p><a href="https://dazzling-kepler-4cc40d.netlify.com/">See the demo site here</a> | <a href="https://github.com/whoisryosuke/mdx-deck-netlify">Source code</a></p>\n<h2>Why Netlify? 🤨</h2>\n<p>I found myself in a situation where I didn\'t have immediate access to a development environment (Node/NPM specifically). I thought of using something like <a href="http://codesandbox.io">CodeSandbox</a>, but since I was running build scripts and not just importing modules, it wasn\'t suitable for projects like mdx-deck.</p>\n<p>Hosting on Netlify allows me to utilize <a href="http://github.com">Github</a> as an code editor/IDE, make changes to my deck\'s repo, and deploy those to Netlify immediately. It gives me the power of a development environment <em>(on a delay)</em> in the cloud. </p>\n<p>This way, if I need to make quick changes to my talk, I can deploy them easily through web interfaces 👏👌</p>\n<p>Hope that helps!\nRyo</p>\n<hr>\n<p><strong>References</strong>:</p>\n<ul>\n<li><a href="https://github.com/jxnblk/mdx-deck">mdx-deck</a></li>\n<li><a href="https://github.com/jxnblk/mdx-deck/blob/master/cli.js">mdx-deck CLI (where you find the default export folder)</a></li>\n</ul>',frontmatter:{title:"Deploy MDX-Deck to Netlify 🚀",cover_image:{publicURL:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c.jpg",childImageSharp:{sizes:{src:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-4e8db.jpg",srcSet:"/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-7cc04.jpg 310w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-69042.jpg 620w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-4e8db.jpg 1240w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-50ab1.jpg 1860w,\n/static/mdx-deck-on-netlify-1900px-a24f9e73e297b6183318c3e2df10842c-3a8b6.jpg 1900w"}}},date:"13 September, 2018",tags:["react","mdx","javascript","jsx","guide","tips"]},fields:{slug:"/blog/2018/mdx-deck-on-netlify/"}}},{node:{html:'<p><a href="http://whoisryosuke.com/blog/2018/creating-a-design-system-for-reactjs-from-scratch/">In the last tutorial</a>, we created the basis of a design system using ReactJS and CSS in JS. </p>\n<p>Now we can add basic testing, linting, and automated documentation to the design system. </p>\n<p>We\'ll be using:</p>\n<ul>\n<li><a href="https://jestjs.io/"><strong>Jest</strong></a></li>\n<li><a href="https://github.com/airbnb/enzyme/"><strong>Enzyme</strong></a></li>\n<li><a href="https://babeljs.io/"><strong>Babel</strong></a></li>\n<li><a href="https://eslint.org/"><strong>ESLint</strong></a></li>\n<li><a href="https://github.com/prettier/prettier"><strong>Prettier</strong></a></li>\n<li><a href="https://react-styleguidist.js.org/"><strong>React-Styleguidist</strong></a>.</li>\n</ul>\n<p>You may be asking yourself: "I already have a design system. Why do this?". The benefits of this are simple:</p>\n<ul>\n<li>✅ Guarantees our components <em>actually</em> work (with <strong>tests</strong>)</li>\n<li>🚫 Ensures our code is error free (with <strong>linting</strong>)</li>\n<li>🔏 Enforces code style and formatting (with <strong>linting</strong>)</li>\n<li>📚 Allows developers and designers to easily browse your component library (with <strong>the style guide</strong>)</li>\n</ul>\n<p>So let\'s get started!</p>\n<h2>Installing Jest + Enzyme 🧙‍</h2>\n<p>Let\'s install Jest, Enzyme, and other necessary dependencies:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -D jest enzyme enzyme-adapter-react-16 enzyme-to-json babel-jest babel-core regenerator-runtime\n</code></pre>\n      </div>\n<p>While they\'re installing ⏳, here\'s an idea of what some of these packages do:</p>\n<ul>\n<li><a href="https://jestjs.io/">jest</a> - Javascript testing framework that allows you to create tests that make assertions on functions and classes.</li>\n<li><a href="https://github.com/airbnb/enzyme/">enzyme</a> - This extends Jest and allows us to render our React components to test their functionality.</li>\n<li><a href="https://github.com/facebook/jest/tree/master/packages/babel-jest">babel-jest</a> - This allows Jest tests to compile code using Babel.</li>\n<li><a href="https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16">enzyme-adapter-react-16</a> - Enzyme requires an adapter for each version of React. </li>\n<li><a href="https://www.npmjs.com/package/regenerator-runtime">regenerator-runtime</a> - Enables JS Generators and Async.</li>\n</ul>\n<h3>Hook up Jest</h3>\n<p>In order to use Jest, we\'ll run the command <code class="language-text">jest</code>. We can also make Jest watch our test files for any changes by running <code class="language-text">jest --watch</code>. </p>\n<p>To make this process a bit easier, semantic, and agnostic -- we\'ll add a script to our <code class="language-text">package.json</code> that runs Jest for us with the command <code class="language-text">npm run test</code>.</p>\n<p>Add this to your <code class="language-text">package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"test"</span><span class="token punctuation">:</span> <span class="token string">"jest"</span><span class="token punctuation">,</span>\n    <span class="token string">"test:watch"</span><span class="token punctuation">:</span> <span class="token string">"jest --watch"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// ...other parameters...</span>\n\n  <span class="token string">"jest"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"setupTestFrameworkScriptFile"</span><span class="token punctuation">:</span> <span class="token string">"&lt;rootDir>tests/setup/setupEnzyme.js"</span><span class="token punctuation">,</span>\n    <span class="token string">"testPathIgnorePatterns"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"&lt;rootDir>/tests/setup/"</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Setting up Enzyme</h3>\n<p>And finally, we have to setup Enzyme - you can see it referenced in the jest <code class="language-text">package.json</code> config. </p>\n<p>Create a new file at <code class="language-text">&lt;project-root&gt;/tests/setup/setupEnzyme.js</code> and add the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Enzyme <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Adapter <span class="token keyword">from</span> <span class="token string">\'enzyme-adapter-react-16\'</span><span class="token punctuation">;</span>\n\nEnzyme<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> adapter<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Creating your first test ⚙️</h2>\n<p>Let\'s create the first test in our <code class="language-text">&lt;Button&gt;</code> component folder called <code class="language-text">Button.test.js</code>. It\'ll be incredibly simple, only checking if the component renders:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-jss"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">"./Button"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">"../../theme/theme"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Jest\'s describe function accepts a test description</span>\n<span class="token comment">// And a function containing assertions</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Button Component\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render without throwing an error\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">shallow</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span>Button<span class="token operator">></span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Running tests ⚡️</h2>\n<p>Now that you\'ve created a test, let\'s run it! <code class="language-text">npm run test</code> and see if it fails or succeeds. Ideally it should succeed, but if it doesn\'t, you\'ll see any errors outputted in the console.</p>\n<h2>Adding linting 🔏</h2>\n<p>I actually have a separate guide on this for any project in general. You can find my guide on <a href="http://whoisryosuke.com/blog/2018/setting-up-eslint-prettier-on-project/">adding automatic code linting and formatting to your projects using ESLint and Prettier here</a>.</p>\n<h2>Adding Documentation 📚</h2>\n<p>We\'ll use <a href="https://react-styleguidist.js.org/">react-styleguidist</a> to quickly add documentation to our design system. With these docs, developers will be able to quickly see all the components available, their prop types, and any specific live component examples or written guides. The docs are automatically generated from comments in your code and Markdown files you provide.</p>\n<p>It\'s incredibly easy to setup, and allows us to focus on developing out our system and not setting up documentation infrastructure.</p>\n<h3>Installing Webpack</h3>\n<p>We need to install <strong>Webpack</strong> (I know, I said in the last tutorial we didn\'t need it -- but styleguidist <em>requires</em> it 😅) and <strong>babel-loader</strong> to enable Webpack to transpile our JS:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack babel-loader\n</code></pre>\n      </div>\n<p>Create a <code class="language-text">webpack.config.js</code> in your project root:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          loader<span class="token punctuation">:</span> <span class="token string">"babel-loader"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Installing React-Styleguidist</h3>\n<p>Now we can install react-styleguidist:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev react-styleguidist\n</code></pre>\n      </div>\n<p>Add these scripts to your <code class="language-text">package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...test scripts, etc...</span>\n\n    <span class="token string">"docs"</span><span class="token punctuation">:</span> <span class="token string">"npx styleguidist server"</span><span class="token punctuation">,</span>\n    <span class="token string">"docs:build"</span><span class="token punctuation">:</span> <span class="token string">"npx styleguidist build"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>And now you can run <code class="language-text">npm run docs</code> to spin up a development server for your components. </p>\n<blockquote>\n<p>If you didn\'t want to use Storybook <em>(and write stories and whatnot)</em>, this could be an alternative to browse variations of components as well. You get hot reloading out of the box here too, allowing you to make component examples in Markdown and check live changes in the browser.</p>\n</blockquote>\n<h3>But wait! It doesn\'t work with my JSS theme? 😭</h3>\n<p>Since we use a theme for our JSS components, they can\'t be rendered without providing a theme object in the props. We normally do this by wrapping our components in the <code class="language-text">&lt;ThemeProvider&gt;</code> component. We could wrap every component in every Markdown file with this <code class="language-text">&lt;ThemeProvider&gt;</code>-- or we can wrap the entire app in it, so our components have access to the theme anywhere.</p>\n<p>Create a new file called <code class="language-text">.styleguidist/components/Wrapper.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-jss"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">"../../src/theme/theme"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nWrapper<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Child components (array or single element)\n   */</span>\n  children<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>node<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span>node\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Wrapper<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This replaces the default <code class="language-text">&lt;Wrapper&gt;</code> component in react-styleguidist with our own, which just wraps the <code class="language-text">&lt;ThemeProvider&gt;</code> around the component\'s children. </p>\n<blockquote>\n<p>I found this example in <a href="https://react-styleguidist.js.org/docs/thirdparties.html#redux">the react-styleguidist docs</a>, which shows how to integrate Redux if you ever needed that.</p>\n</blockquote>\n<p>Now we can add this to our <code class="language-text">styleguide.config.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Sets up Styleguidist with our Webpack setup</span>\n  webpackConfig<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./webpack.config.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Override Styleguidist doc components</span>\n  styleguideComponents<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    Wrapper<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">".styleguidist/components/Wrapper"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Which informs react-styleguidist to override the component with our own. Feel free to change the path here, wasn\'t really sure where to stuff this one.</p>\n<h3>Ignore stories 📘</h3>\n<p>You\'ll notice that if you spin up your docs, story component will be displayed as well. </p>\n<p>We can disable this by adding an ignore parameter to our <code class="language-text">storybook.config.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// The other config params</span>\n\n  <span class="token comment">// Files to ignore from docs</span>\n  ignore<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"**/*.story.js"</span><span class="token punctuation">,</span> <span class="token string">"**/*.test.js"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Testing, linting, docs done! 🙌</h2>\n<p>Piece by piece this design system has been composed to be a full CSS in JS design system, complete with development environment, documentation, testing, and linting. </p>\n<p>It might be intimidating to look at developed design systems like <a href="https://github.com/ant-design/ant-design">Ant Design</a> or <a href="https://github.com/mui-org/material-ui">Material UI</a>, and even harder to glean knowledge when forced to reverse engineer the architecture. But much like any project, <strong>every codebase starts with a single line of code</strong> <em>(or copypasta boilerplates)</em>. Try browsing to the beginning of their commit history sometime and see how much the code has refactored.</p>\n<p>Your own design system won\'t be this huge, complex net of components at first either. But just like all the other systems, it\'ll bolster with every feature. Start small by building only what you need, and expand using the same mentality. <strong>Build to solve problems.</strong> As you progressively grow, you\'ll find iterative changes feel immense after a week or a month.</p>\n<p>Hope this helps!\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75">Setting up React with Webpack 4</a></li>\n<li><a href="https://react-styleguidist.js.org/docs/thirdparties.html#redux">Creating wrappers for React-Styleguidist</a></li>\n</ul>',
frontmatter:{title:"Adding testing, linting, and docs to a design system 📚",cover_image:{publicURL:"/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515.jpg",childImageSharp:{sizes:{src:"/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-4e8db.jpg",srcSet:"/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-7cc04.jpg 310w,\n/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-69042.jpg 620w,\n/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-4e8db.jpg 1240w,\n/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-50ab1.jpg 1860w,\n/static/Adding-testing-linting-docs-to-your-design-system-1920px-d4d400c604f93c1757f4560f775af515-5d231.jpg 1980w"}}},date:"04 September, 2018",tags:["testing","eslint","prettier","documentation","design","design system","react","open source","javascript","tutorial"]},fields:{slug:"/blog/2018/adding-testing-linting-documentation-to-design-system/"}}}]}},pathContext:{tag:"javascript",slug:"/projects/kushy-api-docs/"}}}});
//# sourceMappingURL=path---projects-kushy-api-docs-546fce4f6aa774836cb2.js.map