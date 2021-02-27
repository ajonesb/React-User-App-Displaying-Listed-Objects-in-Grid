describe("User App Testing", () => {
  // Test App Load and DOM Elements

  it("Loads the App", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should have a header", () => {
    cy.get("h1").should("have.text", "My Users");
  });

  // As a user, I want to be able to search for an object by name or property.

  it("Should find the input field to search for a user.", () => {
    const hasSearchInput = (expectedSearchInputClass) => {
      return ($el) => {
        const classList = Array.from($el[0].classList);
        return expectedSearchInputClass.some((expectedSearchInput) =>
          classList.includes(expectedSearchInput)
        );
      };
    };
    cy.get("input").should("satisfy", hasSearchInput(["searchInput"]));
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
    const hasDeleteIcon = (expectedDeleteIconClass) => {
      return ($el) => {
        const classList = Array.from($el[0].classList);
        return expectedDeleteIconClass.some((expectedDeleteIcon) =>
          classList.includes(expectedDeleteIcon)
        );
      };
    };
    cy.get("i#edit").should("satisfy", hasDeleteIcon(["fa-edit"])); //passes
  });

  // Delete the data from the table

  it("Should find the delete trash icon to delete the data.", () => {
    const hasDeleteIcon = (expectedDeleteIconClass) => {
      return ($el) => {
        const classList = Array.from($el[0].classList);
        return expectedDeleteIconClass.some((expectedDeleteIcon) =>
          classList.includes(expectedDeleteIcon)
        );
      };
    };
    cy.get("i#delete").should("satisfy", hasDeleteIcon(["fa-trash-alt"])); //passes
  });
});
