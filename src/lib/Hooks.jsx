import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setisMobile] = useState(false);
     
    useEffect(() => {
        const handleResize = () => {
            setisMobile(window.innerWidth <= 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

  return isMobile;
}
