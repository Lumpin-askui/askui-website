## Please [accept marketing-cookies](javascript:Cookiebot.renew())to watch this video.

<iframe src="" frameborder="0" allowfullscreen></iframe>

## Welcome to episode two of J&J Talk AI. This time we're talking about computer vision and again I have Johannes Haux with me.

JH:**Hey there.

JD:**And when we're talking about computer vision we also need an origin story, right? So what is computer vision and where does it come from Johannes?

JH:**So good question. Computer vision as the name implies is the research field or the the process of giving computers eyes, giving computers vision. In computer vision we try to answer the question how can I give computers the ability to understand concepts that are present in images. So for example finding a person or describing the content of an image, these kinds of things.

****Now how do I get information out of this, right? If I just take the pure image it's really just a bunch of numbers. Now I need to figure out how I can put those numbers into context and one of the earliest and also most successful ways of doing that is by applying filters or using kernel methods to simply say okay I have for example a small patch that I say: this looks like an edge for example a border of something. And then I take this small sample and I slide it over the given image and ask at each stop I make while sliding it over the image does this section of the image look like this small patch I have here and then I get a yes or no or something in between and by doing this for the whole image I can then say okay these parts in the image they look similar to this little patch and then I can define a number of patches that have different characteristics this looks like a blob this looks like an edge that's oriented 90 degrees to the other edge.

****These kinds of things though you have to say like if you restrict it to only cover cases where I'm looking at the camera which is you know 80% of the time for example in a video call then I'm totally fine with only a small number of filters that I can use to detect eyes at the moment those filters don't activate anymore I don't know where the eyes are and then I need for example tracking methods to make predictions or to patch together data once the signal is coming back again with data from or from signals from previously in the time so
yeah that's a problem.

JD:**It also sounds like if you want to detect not only eyes but a few things in an image then you would need a lot of filters.

JH:**That's true okay and there are also ways to do this for example what I didn't mention here right now is scale right if I get closer to the camera my eye is larger so in terms of pixel space the area my eye covers is larger. I need to compare it now to a differently sized patch etc. and scaling patches is fairly easy, right?

******So stay tuned for the next episode!

## Please [accept marketing-cookies](javascript:Cookiebot.renew())to watch this video.

<iframe src="" frameborder="0" allowfullscreen></iframe>