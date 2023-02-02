const express = require("express");

const connect = require("./config/database");
const Coment = require("./models/comments");
const TweetRepository = require("./repository/tweet-repository");

const app = express();


app.listen(3000, async () => {
    console.log("requesting connectin to mongodb")
    await connect();
    console.log("server started on 3000 port");

    /* const tweet = await Tweet.create({
        content : "Second tweet",
        
    });

    console.log(tweet); */

   /*  const tweets = await Tweet.find({content : 'Second tweet'});
    console.log(tweets); */

    const tweetRepo = new TweetRepository();
   /*  const tweet = await tweetRepo.create({content : 'My third tweet with content'});
    const comment = await Coment.create({content : 'new Comment second'});
    tweet.comments.push(comment);
    await tweet.save(); */
    const tweet = await tweetRepo.getWithComments('63db8871fe91dc910bff2596')
    console.log(tweet);
})