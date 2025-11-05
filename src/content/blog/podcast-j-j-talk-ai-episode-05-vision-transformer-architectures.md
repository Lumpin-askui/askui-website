## Please [accept marketing-cookies](javascript:Cookiebot.renew())to watch this video.

<iframe src="" frameborder="0" allowfullscreen></iframe>

## Welcome back to J&J Talk AI.

Let's talk about vision transformer architectures because they sound really futuristic.

JH:**Yeah, I mean, I wouldn't probably call it futuristic.

JD:**I think it's just a fancy name.

JH:**Proven to be, yeah, the name you're getting at the name. Yeah, true. I mean, transformers, of course, it's good that they didn't call them. What are the other ones called?

JD:**Not the Autobots, but the Perceptrons.

JH:**Perceptrons, yeah.

JD:**That's another architecture.

JH:**Oh, man. Oh, man. Now it's on the internet. We don't know too much about the transformer franchise.

They treat or they, let's put it differently. Transformers expect as inputs a sequence of any sort, right? So the origin of transformer architectures is from language modeling, especially from translation tasks.
So I have a sequence of words and I want to turn the sequence into a different sequence of words, French to English or whatever you want to do. So you need the context basically, because language is always contextual, that the meaning is all in the context.

JD:**Exactly.

JH:**Language is also really ambiguous. So word can mean various things depending on the context it's spoken in. And sometimes even the context of the other words is not enough. Sometimes if I say it to my mother, it's something different if I say it to a friend, but that's a whole different topic.

Now why is that also interesting for computer vision? An image itself is not a sequence. And that's true, but I can take the inputs I give to a transformer and I can append more information to it. I can take each sequence element, I can say this comes from the top left corner, this comes from the top right corner, bottom left, bottom right. So you slice the image.

JD:**We slice the image. So you get basically words.

JH:**Exactly. I take the image, turn it into words, into small patches, and I supply the information where this patch is coming from. And then the putting-into-context process can respect this information and then can decide if this is relevant information for the question.

**So that's how we humans would do it, like conversion neural networks, just okay, there's something and then okay, there's a cow, for example, or there's a human.

JH:**Yeah, to be honest, I really cannot comment on this because I'm not a neurologist. I don't really know.

JD:**Yeah, okay. I obviously also don't know. But that's how I perceive it.

JH:**Yeah, exactly. I would probably perceive it quite similarly.

But that's where the strength of the combination of the two approaches is. I can aggregate information and I can put it into context more reasonably. And to extend this a little bit more into the philosophical, that's also where I see the parallels to how we work as brain and eye interface, right?

******Yeah, you mentioned something which is maybe hard to understand.

**So for example, if you want to attend to a sequence or a number of values, you would do this through simple matrix multiplication, where the matrix then is the set of attention weights. It's a learned set of weights that says, okay, if my input looks like this, the important value is this. So if I have a sequence of 10 examples or 10 values, the attention mechanism would then decide which of those 10 values is the most important at this point in time or in this given context or whatever.

I can ask the question over the sequence of given inputs, how do I want to attend to those values which are important to put into context with each other? And that's where self-attention comes in. I can then say, given this set of inputs, if I only have this context, which of those inputs is the most relevant? And the more general formulation of attention is given two sequences, which values would I want to put into context with each other? So that's a very rough explanation of what attention is.

**So now we have CNNs. They work well, as you described, and now we're doing vision transformer architectures because they work well in language domains. They also work well in computer vision domains.

**I don't really know a better reasoning right now, right? It's a scientific process, and you can interpret or, yeah, find reasons why you would do this that are maybe, yeah, because our brain is structured this way and that, like we did.

**Thanks for all the explanations, Johannes, and I hope we see you next season.

JH:**I would hope so, too. It was really fun. Thanks, Johannes.

## Please [accept marketing-cookies](javascript:Cookiebot.renew())to watch this video.

<iframe src="" frameborder="0" allowfullscreen></iframe>