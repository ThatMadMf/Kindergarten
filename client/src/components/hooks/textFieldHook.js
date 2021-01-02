import { useState } from "react";

export const useFormTextField = (name, initValue) => {
    const [value, setValue] = useState(initValue);

    return {
        value,
        name,
        onChange: (e) => {
            return setValue(e.currentTarget.value);
        }
    }
}