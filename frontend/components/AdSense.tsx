import Script from 'next/script';
import react from 'react';
type AdSenseTypes={
      pId:String;
}

const AdSense = ({pId}:AdSenseTypes)=>{
  return (
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}"
     crossOrigin="anonymous">
      strategy='afterInteractive'
     </script>

  )
}

export default AdSense