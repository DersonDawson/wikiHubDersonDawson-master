import { InputContainer } from "./styles";

export default function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} />
        </InputContainer>
    );
}
