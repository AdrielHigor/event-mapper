import renderer from "react-test-renderer";
import EventDetailsModal, { IEventDetailsModal } from "../EventDetailsModal";

jest.mock("../EventDetailsModal.css", () => ({}));

describe("EventDetailsModal", () => {
  let component: renderer.ReactTestRenderer;

  const defaultProps: IEventDetailsModal = {
    modalIsOpen: true,
    closeModal: jest.fn(),
    customClassName: "test-class",
    event: {
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
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    component = renderer.create(<EventDetailsModal {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render event details", () => {
    const title = component.root.findByProps({
      className: "modal-header-title",
    });
    const description = component.root.findByProps({
      className: "description",
    });
    const subTitles = component.root.findAllByProps({
      className: "sub-title",
    });
    const startDateTimeElement = subTitles[0].children[0];
    const endDateTimeElement = subTitles[1].children[0];

    expect(title.props.children).toBe(defaultProps.event.name);
    expect(description.props.children).toBe(defaultProps.event.description);
    expect(startDateTimeElement).toBe("Data e Hora Inicial");
    expect(endDateTimeElement).toBe("Data e Hora Final");
  });

  it("should call onDelete when delete button is clicked", () => {
    const deleteButton = component.root.findByProps({
      className: "cancel-button",
    });
    deleteButton.props.onClick();

    expect(defaultProps.onDelete).toHaveBeenCalledTimes(1);
    expect(defaultProps.onDelete).toHaveBeenCalledWith(defaultProps.event.id);
  });

  it("should call closeModal when confirm button is clicked", () => {
    const confirmButton = component.root.findByProps({
      className: "confirm-button",
    });
    confirmButton.props.onClick();

    expect(defaultProps.closeModal).toHaveBeenCalledTimes(1);
  });
});
