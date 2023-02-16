var mongoose = require("mongoose");

require("../mongodb_helper");
var Post = require("../../models/post");

describe("Post model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it("has a message", () => {
    var post = new Post({ 
      title: "message", 
      content: "some message", 
      likes: 0 
    });
    expect(post.content).toEqual("some message");
  });

  it("can list all posts", (done) => {
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    });
  });

  it("can save a post", (done) => {
    var post = new Post({ 
      title: "message", 
      content: "some message", 
      likes: 0
    });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0].content).toEqual("some message");
        done();
      });
    });
  });

  it("initially has zero likes", () => {
    var post = new Post({ 
      title: "message", 
      content: "some message", 
    });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0].likes).toEqual(0);
        done();
      });
    });

    expect(post.likes).toEqual(0);
  })
});
