# Toolbox Challenge
=======================

## Tools ##
My toolbox includes an example of how to use **Imgur's API** in your application and a little bit of using Velocity.js, a replacement for JQuery's $.animate() using the same API.

## Usefulness ##
Imgur's API is pretty useful as it allows users on another application to get or upload images without having to use Imgur directly. This is very useful when you do not want to use your own system to hold all of the images, else storage space would be a problem for a web developer. Also, they have OAuth 2.0, an authentication protocol that allows users to approve application to act on their behalf without sharing their password. So this allows anonymous users upload content into the account that allows it.

## Cons ##
Imgur is widely-used everywhere. They are very credible and their API can be an incredible tool for whoever uses it. It is free to use for anybody who uses it non-commercially. However, if you do plan to make money, then you have to pay a monthly fee.

Also, you would need to manage the album that people upload or see on your application. Filtering through it may be difficult.

Specific in my example, I only allow users to access the album only. So they cannot change the content.

## My Example ##
My example is a website called Cat Tinder. You can either love or not love that cat base on your judgment on the cat's photo. I used the Imgur's API to display the photo, name, and description of the cat from my album.

## Getting started ##
My github repo already includes a min version of velocity.js, so no need to download it if you clone my repo.

If you want to play with my awesome shallow website, you can access [my website.](http://students.washington.edu/cnguyen0/info343/toolbox/)

Else, you can fork my repo and collaborate on it! :-)

## More Information##
If you would like more information about how to use *Imgur's API*, please click [here!](https://api.imgur.com/)

Or, if you would like to learn more information about how to use *velocity.js*, please click [here!](http://julian.com/research/velocity/)