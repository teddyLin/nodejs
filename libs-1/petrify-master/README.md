# Petrify

_A simple and flexible static site generator for node.js_


## Why use a static site generator?

* __Static files are fast__ - You never know, you might just get slashdotted...
* __Plays well with version control__ - You can have a complete history of both
  the content and the code in git, easily backed up.
* __You can use your text editor of choice__ - I like to write my content in
  Vim, not in a textarea!
* __Less security concerns__ - No SQL injections or other attacks associated
  with dynamic content or exposing your admin area to the web.
* __Easy to deploy__ - You can just rsync or FTP the site to your server,
  nothing fancy needs to be installed on it. You could have git do this
  automatically on commit if you like... or, like me, you can have the server
  rebuild the site automatically when you push to it.
* __You no longer need to serve your own dynamic content__ - Lots of content you
  would normally want a database for can now be included using JavaScript. You
  can add comments via [Disqus](http://disqus.com), you can embed calendars from
  [Google Calendar](http://calendar.google.com)... Many of these problems have
  already been solved. better. ;)


## Why use Petrify?

* __Flexibility__ - Most other site generators focus on blogs, but Petrify can
  be used for a wide range of sites, from project documentation to event
  listings. This is achieved through allowing you to parse the content data in
  whichever way you like.
* __Write your views in JavaScript__ - Petrify uses JavaScript for parsing
  content. JavaScript is a widely used language, and if you know enough about
  HTML to want to use a static site generator, you probably know enough
  JavaScript to use Petrify.
* __Write your content in Markdown__ -
  [Markdown](http://daringfireball.net/projects/markdown/) is an easy to write,
  easy to read markup language inspired by the way people write in plain text
  emails. This works well if you host projects on GitHub, which is already very
  markdown friendly. You can run a Petrify site generator on the doc directory
  of your project and have pretty HTML docs for your own domain.

## Getting started

First, install the latest version of [node.js](http://nodejs.org/#download).
Petrify uses git submodules for the rest of its dependencies. Once you've
cloned the repository, do:

    git submodule update --init --recursive

Then, cd to the examples directory and run the build script. This will create
a www directory with a bunch of HTML files inside. Voila! you've just generated
your first site. For now, the example site and the files in the doc directory
will have to be enough to get you started.
