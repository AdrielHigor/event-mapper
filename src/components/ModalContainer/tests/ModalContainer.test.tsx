import ModalContainer, { IModalContainer } from "../ModalContainer";
import renderer from "react-test-renderer";
import { IMockModalContainer } from "../../../utils/interfaces/base";

jest.mock("react-modal", () => ({ children }: IMockModalContainer) => (
  <div>{children}</div>
));
jest.mock("../ModalContainer.css", () => ({}));

describe("Modal Container", () => {
  let component: renderer.ReactTestRenderer;

  const defaultProps: IModalContainer = {
    modalIsOpen: true,
    closeModal: jest.fn(),
    customClassName: "test",
    children: <div></div>,
  };

  beforeEach(() => {
    component = renderer.create(<ModalContainer {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(component.root.children.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
