// Custom Hook

import { useState } from "react"

export const useToggle = () => {
    let [value, setValue] = useState(false);

    return [value, setValue];    
}
