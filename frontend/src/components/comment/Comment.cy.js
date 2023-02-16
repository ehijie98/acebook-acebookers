import Comment from "./Comment";

describe("Comment", () => {
  it("renders a comment with a content", () => {
    cy.mount(
      <Comment
        comment={{
          _id: 1,
          content: "I like your post",
          likes: 0,
          likers: []
        }}
      />
    );
    cy.get('[data-cy="comment"]').should("contain.text", "I like your post");
  });
});
