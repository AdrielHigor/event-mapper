import renderer from "react-test-renderer";
import FormInput, { IFormTextInput } from "../FormInput";

describe("FormInput", () => {
  const defaultProps: IFormTextInput = {
    label: "test",
    id: "test",
    inputType: "text",
  };

  const wrapper = (options = defaultProps) => {
    return renderer.create(<FormInput {...options} />);
  };

  it("renders correctly", () => {
    const component = wrapper({ ...defaultProps, isValid: true });
    expect(component).toMatchSnapshot();
  });

  it("renders correctly with error styling when isValid prop is false", () => {
    const component = wrapper({ ...defaultProps, isValid: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onChange handler when input value is changed", () => {
    const mockOnChange = jest.fn();
    const component = wrapper({ ...defaultProps, onChange: mockOnChange });

    const input = component.root.findByType("input");
    input.props.onChange({ target: { value: "John Doe" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
