import Comment from './Comment'

describe("Comment", () => {
  it('renders a comment with a content', () => {
    cy.mount(<Comment comment={{_id: 1, content: "This post is cool!"}} />);
    cy.get('[data-cy="comment"]').should('contain.text', "This post is cool!")
  })
})
