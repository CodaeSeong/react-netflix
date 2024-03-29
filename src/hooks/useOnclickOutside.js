import React, { useEffect } from 'react'

const useOnclickOutside = (ref,handler) => {

    useEffect(() => {

        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler();
        };
     
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
      return () => {
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
      }
    }, [])
    

  return (
    <div>useOnclickOutside</div>
  )
}

export default useOnclickOutside