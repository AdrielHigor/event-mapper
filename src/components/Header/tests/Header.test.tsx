import renderer from "react-test-renderer";
import Marker, { IHeader } from "../Header";

jest.mock("../Header.css", () => ({}));

describe("Marker", () => {
  let component: renderer.ReactTestRenderer;

  const defaultProps: IHeader = {
    onHelpClick: jest.fn(),
  };

  beforeEach(() => {
    component = renderer.create(<Marker {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call onHelpClick function when help button clicked", () => {
    const helpBtn = component.root.findByProps({
      className: "help-button",
    });
    helpBtn.props.onClick();

    expect(defaultProps.onHelpClick).toHaveBeenCalledTimes(1);
  });
});
