import React from "react";
import renderer from "react-test-renderer";
import FirstStepsModal, { IFirstStepsModal } from "../FirstStepsModal";

describe("FirstStepsModal", () => {
  const defaultProps: IFirstStepsModal = {
    modalIsOpen: true,
    closeModal: jest.fn(),
    customClassName: "test-class",
  };

  const wrapper = (options = defaultProps) => {
    return renderer.create(<FirstStepsModal {...options} />);
  };

  it("should render correctly with default props", () => {
    const component = wrapper();
    expect(component).toMatchSnapshot();
  });

  it("should call the closeModal function when the button is clicked", () => {
    const closeModalMock = jest.fn();
    const component = wrapper({ ...defaultProps, closeModal: closeModalMock });

    const exitButton = component.root.findByProps({
      className: "exit-button",
    });

    exitButton.props.onClick();

    expect(closeModalMock).toHaveBeenCalled();
  });
});
