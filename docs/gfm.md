# GitHub Flavored Markdown - GFM


## Traditional Markdown

### 1. INLINE HTML

<p>Paragraph with some <a href="http://example.link">Link</a>. Text with <i>italics</i> and old fashion <b>bold</b>. Try combination of <b><i>bold italic</i></b> and return back to ground by semantic <em>emphesise</em>.</p>

The only restriction is for block elements. User new line.

<table>
	<tr>
		<td>table cell</td>
		<td>table cell</td>
	</tr>
</table>


### 2. AUTOMATIC ESCAPING FOR SPECIAL CHARACTERS

&copy

AT&T

4 < 5


### 3. PARAGRAPHS AND LINE BREAKS

When you want use breakline  
finish with two or more spaces and then type return.

Otherwise use double return for new paragraph.


### 4. HEADERS

Set-ex style headers

Setex Style Headers Double Line
===============================

Setex Style Headers Single Line
-------------------------------


# Header 1
Followed by some text

## Header 2
Followed by some text

### Header 3
Followed by some text

#### Header 4
Followed by some text

##### Header 5
Followed by some text

###### Header 6
Followed by some text


Optionally, you may “close” atx-style headers. This is purely cosmetic. The closing hashes don’t even need to match the number of hashes used to open the header.

# This is an H1 #

## This is an H2 ##
	
### This is an H3 ######


### 5. BLOCK

A line of normal text with `inline code` and *italics*, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.

Followed by another line of normal text with `inline code` and *italics*, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.


### EMPHASIS

*single asterisks*
_single underscores_
**double asterisks**
__double underscores__


### IMAGES

![Alt text](http://1.gravatar.com/avatar/1b628c9a2cb07afb1920de465d108395)

![Alt text](http://1.gravatar.com/avatar/1b628c9a2cb07afb1920de465d108395 "Optional title")



### LINE SEPARATOR

"Line" Separator:

--

"Slanted" Separator:

------


> here is blockquote




## Differences from traditional Markdown

 1. Multiple underscores in words

"Normal" Markdown transforms underscores (_) into _italics_, GFM ignores underscores in words

wow_great_stuff
do_this_and_do_that_and_another_thing.


 2. URL autolinking

GFM will autolink standard URLs, so if you want to link to a URL (instead of setting link text), you can simply enter the URL and it will be turned into a link to that URL.

http://example.com


 3. Strikethrough

GFM adds syntax to create strikethrough text, which is missing from standard Markdown.

~~Mistaken text.~~


 4. Fenced code blocks

Standard Markdown converts text with four spaces at the beginning of each line into a code block; GFM also supports fenced blocks. Just wrap your code in ``` and you won't need to indent it by four spaces. Note that although fenced code blocks don't have to be preceded by a blank line—unlike indented code blocks—we recommend placing a blank line before them to make the raw Markdown easier to read.

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

Keep in mind that, within lists, you must indent non-fenced code blocks eight spaces to render them properly.
Syntax highlighting

Code blocks can be taken a step further by adding syntax highlighting. In your fenced block, add an optional language identifier and we'll run it through syntax highlighting. For example, to syntax highlight Ruby code:

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```
def this_is
  puts "some #{fenced} ruby code"
end
```

```ruby
def this_is
  puts "some #{colored} ruby code"
end
```

```javascript
var moduleB = (function() {
	'use strict';
	var p = 'private';
	return {
		name: 'moduleB',
		toString: function() {
			return p + ' ' + name;
		}
	};
})();
```

```css
@import url(http://fonts.googleapis.com/css?family=Squada+One);
body{
  font-family: 'Squada One';
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
}
```

```java
public class HelloWorld
{
	public static void main(String[] args) {
		System.out.println("Hello World!");
	}
}
```

Github uses [Linguist](https://github.com/github/linguist) to perform language detection and syntax highlighting. You can find out which keywords are valid by perusing the [languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).


 5. Tables

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

For aesthetic purposes, you can also add extra pipes on the ends:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

Note that the dashes at the top don't need to match the length of the header text exactly:

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |

You can also include inline Markdown such as links, bold, italics, or strikethrough:

| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |

Finally, by including colons : within the header row, you can define text to be left-aligned, right-aligned, or center-aligned:

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

A colon on the left-most side indicates a left-aligned column; a colon on the right-most side indicates a right-aligned column; a colon on both sides indicates a center-aligned column.
HTML

You can use a subset of HTML within your READMEs, issues, and pull requests.

A full list of our supported tags and attributes can be found in the [README for github/markup](https://github.com/github/markup/tree/master#html-sanitization).
