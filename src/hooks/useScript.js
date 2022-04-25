import { useEffect } from 'react';

const useScript = (url, type) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = type
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;
