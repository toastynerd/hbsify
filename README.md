hbsify
=================
A simple <a href="http://handlebarsjs.com/">Handlebars</a> transform for <a href="http://browserify.org/">Browserify</a>.

Much of this code is a simplified version of <a href="https://github.com/epeli/node-hbsfy">hbsfy</a>.
It doesn't support multiple versions of Handlebars unless you want to manually remove the supplied 
version of Handlebars and add your own. Use the above hbsfy if you need that functionality. It also doesn't support Handlebars files that don't end in 'hbs' or 'handlebars'. Once again, the hbsfy package has you covered if you need that functionality.

To use hbsify, either specify use the command `browserify -t hbsify <input files> > <outputfile>`
or specify it in a Gruntfile with <a href="https://github.com/jmreidy/grunt-browserify"grunt-browserify</a>:
```javascript
browserify: {
  options: {
    transforms: ['hbsify']
  },
  src: ['all-my-files.js']
  dest: 'the-file-i-am-building.js' 
}
```
