import { useEffect } from 'react';

const useScript = (url, attribute, value) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.setAttribute(attribute, value)
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;
