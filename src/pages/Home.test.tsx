import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

it("Home page renders with correct content", () => {
  render(<Home />);

  // Vérifie que le titre est bien présent
  const title = screen.getByText(/Seydou Ouattara/i);
  expect(title).toBeDefined();

  // Vérifie que le bouton fonctionne
  const button = screen.getByRole("link", { name: /voir mes projets/i });
  expect(button).toBeDefined();
});

it("should render the button and respond to click", () => {
  render(<Home />);
  const button = screen.getByRole("button", { name: /Voir mes projets/i });
  expect(button).toBeDefined();

  fireEvent.click(button);
  // Ajoute une vérification ici pour ce qui se passe après le clic
  // Par exemple, rediriger vers la page "projects"
});
