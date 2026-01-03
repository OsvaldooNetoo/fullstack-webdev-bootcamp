//length exercise

var post = input("Enter your blog post: ");
var postLength = post.length;
output("Your blog post is " + postLength + " characters long." + "you have " + (140 - postLength) + " characters remaining.");

//slice exercise
var postunder140 = post.slice(0, 140);
output("Your blog post under 140 characters is: " + postunder140);

