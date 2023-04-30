import React from "react";
import renderer from "react-test-renderer";
import ConfirmationModal from "../ConfirmationModal";
import { IMockModalContainer } from "../../../utils/interfaces/base";

jest.mock("../ConfirmationModal.css", () => ({}));
jest.mock(
  "../../ModalContainer/ModalContainer",
  () =>
    ({ children }: IMockModalContainer) =>
      <div>{children}</div>
);

describe("ConfirmationModal", () => {
  let component: renderer.ReactTestRenderer;

  const defaultProps = {
    modalIsOpen: true,
    closeModal: jest.fn(),
    title: "Are you sure?",
    description: "This action cannot be undone.",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    handleConfirm: jest.fn(),
    handleCancel: jest.fn(),
  };

  beforeEach(() => {
    component = renderer.create(<ConfirmationModal {...defaultProps} />);
  });

  it("should render correctly", () => {
    const title = component.root.findByProps({
      className: "modal-header-title",
    });
    const description = component.root.findByProps({
      className: "description",
    });

    expect(title.props.children).toBe(defaultProps.title);
    expect(description.props.children).toBe(defaultProps.description);
    expect(component).toMatchSnapshot();
  });

  it("should call handleConfirm on confirm button click", () => {
    const confirmButton = component.root.findByProps({
      className: "confirm-button",
    });
    confirmButton.props.onClick();
    expect(defaultProps.handleConfirm).toHaveBeenCalledTimes(1);
  });

  it("should call handleCancel on cancel button click", () => {
    const cancelButton = component.root.findByProps({
      className: "cancel-button",
    });
    cancelButton.props.onClick();
    expect(defaultProps.handleCancel).toHaveBeenCalledTimes(1);
  });
});
