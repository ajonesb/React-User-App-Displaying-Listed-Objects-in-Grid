describe("User App Testing", () => {
  // Test App Load and DOM Elements

  /*
    As a user, I want to be able to search for an object by name or property.

    As a user, I want to be able to refresh the list and get any updated objects
    
    */

  it("Loads the App", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should have a header", () => {
    cy.get("h1").should("have.text", "My People");
  });

  it("Should have a search input", () => {
    cy.get("input").should("have.class", "searchInput");
  });

  it("Should show the Add New User button", () => {
    cy.get("button").should("have.text", "Add New User" + "Clear");
  });

  // View the data on a modal lightbox 

  it("Should find the eye icon to view the modal for the data.", () => {
    const hasEyeIcon = (expectedEyeIconClass) => {
      return ($el) => {
        const classList = Array.from($el[0].classList);
        return expectedEyeIconClass.some((expectedEyeIcon) =>
          classList.includes(expectedEyeIcon)
        );
      };
    };
    cy.get("i#view").should("satisfy", hasEyeIcon(["fa-eye"])); //passes
  });

  // As a user, I want to be able to edit metadata about each object

  it("Should find the edit icon to view the modal for editing the data.", () => {
    const hasEditIcon = (expectedEditIconClass) => {
      return ($el) => {
        const classList = Array.from($el[0].classList);
        return expectedEditIconClass.some((expectedEditIcon) =>
          classList.includes(expectedEditIcon)
        );
      };
    };
    cy.get("i#edit").should("satisfy", hasEditIcon(["fa-edit"])); //passes
  });
});
