import renderer from "react-test-renderer";
import Marker, { IMarker } from "../Marker";

jest.mock("../Marker.css", () => ({}));

describe("Marker", () => {
  let component: renderer.ReactTestRenderer;

  const defaultProps: IMarker = {
    lat: 0,
    lng: 1,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    component = renderer.create(<Marker {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call onClick function when image clicked", () => {
    const img = component.root.findByProps({
      className: "marker",
    });
    img.props.onClick();

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
