import renderer from "react-test-renderer";
import EventFormModal, { IEventFormModal } from "../EventFormModal";

describe("EventFormModal", () => {
  const defaultProps: IEventFormModal = {
    modalIsOpen: true,
    closeModal: jest.fn(),
    title: "Test Title",
    description: "Test Description",
    saveButtonLabel: "Save",
    cancelButtonLabel: "Cancel",
    onFormChange: jest.fn(),
    onSave: jest.fn(),
    onCancel: jest.fn(),
  };

  const defaultForm = {
    name: "Test Name",
    description: "Test Description",
    startDateTime: "2023-05-01T12:00",
    endDateTime: "2023-05-01T13:00",
  };

  const wrapper = (options = defaultProps) => {
    return renderer.create(<EventFormModal {...options} />);
  };

  it("renders correctly", () => {
    const component = wrapper();
    expect(component).toMatchSnapshot();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    const component = wrapper();
    const cancelButton = component.root.findByProps({
      className: "cancel-button",
    });
    cancelButton.props.onClick();
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it("calls onSave when the save button is clicked and all fields are valid", () => {
    const onSaveMock = jest.fn();
    const component = wrapper({
      ...defaultProps,
      form: defaultForm,
      requiredFields: ["name", "description", "startDateTime", "endDateTime"],
      onSave: onSaveMock,
    });

    const saveButton = component.root.findByProps({
      className: "confirm-button",
    });
    saveButton.props.onClick();
    expect(onSaveMock).toHaveBeenCalled();
  });

  it("should call handleSave if no requiredFields", () => {
    const onSaveMock = jest.fn();
    const component = wrapper({
      ...defaultProps,
      form: defaultForm,
      onSave: onSaveMock,
    });

    const saveButton = component.root.findByProps({
      className: "confirm-button",
    });
    saveButton.props.onClick();
    expect(onSaveMock).toHaveBeenCalled();
  });

  it(`doesn't call onSave if button is clicked and at least one required field is empty`, () => {
    const onSaveMock = jest.fn();
    const form = {
      name: "Test Name",
      description: "",
      startDateTime: "2023-05-01T12:00",
      endDateTime: "2023-05-01T13:00",
    };

    const component = wrapper({
      ...defaultProps,
      form,
      requiredFields: ["name", "description", "startDateTime", "endDateTime"],
      onSave: onSaveMock,
    });

    const saveButton = component.root.findByProps({
      className: "confirm-button",
    });
    saveButton.props.onClick();
    expect(onSaveMock).not.toHaveBeenCalled();
  });

  it("should call onFormChange when input value changes", () => {
    const onFormChangeMock = jest.fn();
    const form = {
      name: "",
      description: "",
      startDateTime: "",
      endDateTime: "",
    };

    const component = wrapper({
      ...defaultProps,
      form,
      onFormChange: onFormChangeMock,
    });

    const input = component.root.findByProps({ id: "name" });
    input.props.onChange({ target: { id: "name", value: "New event name" } });

    expect(onFormChangeMock).toHaveBeenCalledWith({
      name: "New event name",
      description: "",
      startDateTime: "",
      endDateTime: "",
    });
  });
});
