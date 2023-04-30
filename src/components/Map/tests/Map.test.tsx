import renderer from "react-test-renderer";
import Map, { IMap } from "../Map";

jest.mock("../Map.css", () => ({}));

describe("Marker", () => {
  let component: renderer.ReactTestRenderer;

  const mockMarkers = [
    {
      id: 1,
      name: "Test event",
      description: "Test description",
      startDateTime: "2023-05-01T12:00:00.000Z",
      endDateTime: "2023-05-01T14:00:00.000Z",
      createdAt: "2023-05-01T12:00:00.000Z",
      deletedAt: "2023-05-01T12:00:00.000Z",
      updatedAt: "2023-05-01T12:00:00.000Z",
      location: {
        id: 1,
        point: {
          coordinates: [0, 1],
          crs: {
            properties: {
              type: "test",
            },
            type: "test",
          },
          type: "test",
        },
      },
    },
    {
      id: 2,
      name: "Test event 2",
      description: "Test description 2",
      startDateTime: "2023-05-01T12:00:00.000Z",
      endDateTime: "2023-05-01T14:00:00.000Z",
      createdAt: "2023-05-01T12:00:00.000Z",
      deletedAt: "2023-05-01T12:00:00.000Z",
      updatedAt: "2023-05-01T12:00:00.000Z",
      location: {
        id: 2,
        point: {
          coordinates: [1, 2],
          crs: {
            properties: {
              type: "test",
            },
            type: "test",
          },
          type: "test",
        },
      },
    },
  ];

  const defaultProps: IMap = {
    location: { lat: 0, lng: 0 },
    zoomLevel: 15,
    markers: mockMarkers,
    handleMarkerClick: jest.fn(),
    handleMapClick: jest.fn(),
  };

  beforeEach(() => {
    component = renderer.create(<Map {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call onClick function when marker clicked", () => {
    const markers = component.root.findAllByProps({
      className: "marker",
    });

    markers[0].props.onClick();
    expect(defaultProps.handleMarkerClick).toHaveBeenCalledTimes(1);
    markers[1].props.onClick();
    expect(defaultProps.handleMarkerClick).toHaveBeenCalledTimes(2);
  });
});
